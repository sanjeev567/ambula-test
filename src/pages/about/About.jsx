import "./about.scss";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
const About = () => {
  return (
    <div className="about">
      <Navbar />
      <div className="aboutContent">
        <h1> About the Multi-App Project</h1>

        <p>
          Welcome to our multi-app project that brings together three useful and
          engaging applications: a Todo App, a Shopping Cart App, and a Weather
          App. Each app is designed to serve a specific purpose, and together
          they showcase the power of React and its various features.
        </p>
        <h3>1. Todo App</h3>

        <p>
          Our Todo App is designed to help you stay organized and manage your
          tasks effectively. With this app, you can add new tasks, mark tasks as
          complete or incomplete, and even delete them when they're no longer
          needed. The app keeps track of the number of completed and incomplete
          tasks, giving you a clear overview of your progress. We've employed
          the Context Hook to efficiently manage the state of completed and
          incomplete tasks, ensuring a seamless and dynamic user experience.
        </p>

        <h3>2. Shopping Cart App</h3>
        <p>
          Our Shopping Cart App simplifies your online shopping experience. Add
          items to your cart, and watch as the app visually displays your cart
          items in an appealing way. You can easily remove items from the cart,
          and the app will automatically update the number of items in your cart
          as well as the subtotal based on item prices. With a user-friendly
          interface and real-time updates, the Shopping Cart App provides a
          convenient and interactive shopping experience.
        </p>

        <h3>3. Weather App</h3>

        <p>
          Stay informed about the weather conditions with our Weather App.
          Simply enter the name of a city or state, and the app fetches data
          from the OpenWeatherAPI using Axios. The app then displays the current
          weather information, including temperature and a weather description.
          With its straightforward design and accurate data retrieval, the
          Weather App helps you plan your day effectively based on the current
          weather conditions.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default About;
