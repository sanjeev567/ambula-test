import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <Navbar />

      <h3>Welcome to the Test App </h3>
      <p>Click on the below link to go to spefic features:</p>
      <div className="features">
        <Link to="/todo" className="link">
          <p>Todo App</p>
        </Link>
        <Link to="/weather" className="link">
          <p>Weather App</p>
        </Link>
        <Link to="/cart" className="link">
          <p>Shopping Cart App</p>
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
