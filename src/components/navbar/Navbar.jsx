import "./navbar.scss";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left">
        <Link to="/" className="link">
          <span className="logo">Test App</span>
        </Link>
      </div>
      <div className="right">
        <ul>
          <Link to="/" className="link">
            <li>Home</li>
          </Link>
          <Link to="/about" className="link">
            <li>About</li>
          </Link>
          <Link to="/contact" className="link">
            <li>Contact</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
