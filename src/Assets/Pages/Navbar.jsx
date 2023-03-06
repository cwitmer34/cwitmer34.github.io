import { Link } from "react-router-dom";
import { useState } from "react";
import arrow from "../Media/arrow.svg";
import hamburger from "../Media/hamburger.svg";
import "../Styles/Navbar.css";
const Navbar = () => {
  let original = "CONNOR WITMER";
  let [name, setName] = useState(original);
  let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return (
    <nav className="nav-container soft">
      <div className="inactive">
        <div className="name">
          <Link to={"/"}>
            <h2
              onMouseEnter={() => {
                let iterations = 0;
                let interval = setInterval(() => {
                  let modified = name
                    .split("")
                    .map((letter, i) => {
                      if (i < iterations) {
                        return original[i];
                      }

                      return alphabet[Math.floor(Math.random() * 26)];
                    })
                    .join("");

                  setName(modified);
                  if (iterations >= original.length) clearInterval(interval);
                  iterations += 1 / 10;
                }, 10);
              }}
            >
              {name}
            </h2>
            <p>full-stack dev</p>
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
