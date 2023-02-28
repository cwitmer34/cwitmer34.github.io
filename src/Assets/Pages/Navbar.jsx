import { Link } from "react-router-dom";
import arrow from "../Images/arrow.svg";
import hamburger from "../Images/hamburger.svg";
import "../Styles/Navbar.css";
const Navbar = () => {
  return (
    <nav className="nav-container">
      <div className="inactive">
        <div className="logo">
          <Link to={"/"}>
            <h1>CONNOR WITMER</h1>
          </Link>
          {/* <img
            className="arrow"
            src={arrow}
            alt="Arrow pointing to navigation links"
          /> */}
        </div>
        <div className="links">
          <Link to={"/about"}>
            <p>about</p>
          </Link>
          <Link to={"/work"}>
            <p>work</p>
          </Link>
          <Link to={"/contact"}>
            <p>contact</p>
          </Link>
          <Link to={"/shop"}>
            <button className="shop">SHOP</button>
          </Link>
        </div>
      </div>
      <div className="active">
        <h1>CONNOR WITMER</h1>
        <img src={hamburger} alt="hamburger menu for navigation" />
      </div>
    </nav>
  );
};

export default Navbar;
