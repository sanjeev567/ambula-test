import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSun,
  faCloud,
  faCloudSun,
  faCloudShowersHeavy,
  faSnowflake,
} from "@fortawesome/free-solid-svg-icons";

import "./WeatherApp.scss";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

const WeatherApp = () => {
  const [weatherData, setWeatherData] = useState({});
  const apiKey = import.meta.env.VITE_API_KEY;
  const [city, setCity] = useState("Pune"); // Default city

  const fetchWeatherData = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
      );
      setWeatherData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchWeatherData();
  }, [apiKey]);

  const temperature = weatherData.main
    ? Math.round(weatherData.main.temp - 273.15)
    : "";

  // Determine the weather icon based on temperature
  let weatherIconElement;
  let weatherIconClassName = "weather-icon";

  if (temperature > 30) {
    weatherIconElement = <FontAwesomeIcon icon={faSun} />;
    weatherIconClassName += " sunny";
  } else if (temperature > 20) {
    weatherIconElement = <FontAwesomeIcon icon={faCloudSun} />;
    weatherIconClassName += " partly-cloudy";
  } else if (temperature > 10) {
    weatherIconElement = <FontAwesomeIcon icon={faCloud} />;
    weatherIconClassName += " cloudy";
  } else if (temperature > 0) {
    weatherIconElement = <FontAwesomeIcon icon={faCloudShowersHeavy} />;
    weatherIconClassName += " rainy";
  } else {
    weatherIconElement = <FontAwesomeIcon icon={faSnowflake} />;
    weatherIconClassName += " snowy";
  }

  return (
    <div className="weather-app">
      <Navbar />
      <h1>Weather App</h1>
      <div className="input-container">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name"
        />
        <button onClick={fetchWeatherData}>Fetch Weather</button>
      </div>
      <div className="weather-info">
        <div className={weatherIconClassName}>{weatherIconElement}</div>
        <div className="temperature">{temperature}°C</div>
        {/* ... other weather details */}
      </div>
      <Footer />
    </div>
  );
};

export default WeatherApp;
