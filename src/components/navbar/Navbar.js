import React, { useState } from "react";
import dark from "../../img/SGDS.png";
import light from "../../img/SGDS_L.png";
import { Link } from "react-router-dom";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./navbar.css";

const Navbar = ({ setDarkMode, darkMode }) => {
  //STATE
  const [toggle, setToggle] = useState(false);

  return (
    <div className={darkMode ? "navbar_d" : "navbar_l"}>
      <div className="navbar-links">
        <div className="navbar-logo">
          <Link to="/">
            {darkMode ? (
              <img src={dark} alt="logo" />
            ) : (
              <img src={light} alt="logo" />
            )}
          </Link>
        </div>

        <div className="mode__btn">
          <span style={{ color: darkMode ? "grey" : "yellow" }}>☀</span>
          <div className="switch__checkbox">
            <label className="switch">
              <input type="checkbox" onChange={() => setDarkMode(!darkMode)} />
              <span className="slider round"> </span>
            </label>
          </div>
          <span style={{ color: darkMode ? "#c96dfd" : "grey" }}>☽</span>
        </div>

        <div className="navbar-links__container">
          <Link to="/projects">
            <p>Projects</p>
          </Link>
          <Link to="/blogs">
            <p>Blogs</p>
          </Link>
          <p>
            <a href="https://github.com/samgerrick01" target="blank">
              GitHub
            </a>
          </p>
          <Link to="/contact">
            <p>Contact</p>
          </Link>
        </div>
        <div className="navbar-menu">
          {toggle ? (
            <RiCloseLine
              color={darkMode ? "#fff" : "#000"}
              size={27}
              onClick={() => setToggle(false)}
            />
          ) : (
            <RiMenu3Line
              color={darkMode ? "#fff" : "#000"}
              size={27}
              onClick={() => setToggle(true)}
            />
          )}
          {toggle && (
            <div className="navbar-menu__container scale-up-center">
              <div className="navbar-menu__links">
                <Link to="/projects">
                  <p>Projects</p>
                </Link>

                <Link to="/blogs">
                  <p>Blogs</p>
                </Link>

                <p>
                  <a href="https://github.com/samgerrick01" target="blank">
                    GitHub
                  </a>
                </p>

                <Link to="/contact">
                  <p>Contact</p>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
