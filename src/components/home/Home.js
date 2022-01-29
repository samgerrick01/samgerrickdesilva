import React from "react";
import "./home.css";
import picko_dark from "../../img/photo_dark.png";
import picko_light from "../../img/photo_light.png";

const Home = ({ darkMode }) => {
  return (
    <div className={darkMode ? "homeBody_dark" : "homeBody_light"}>
      <div className="col1">
        <img
          className="picko"
          src={darkMode ? picko_dark : picko_light}
          alt="picko"
        />
        <h3 style={{ textAlign: "center" }}>
          I’m a web developer from Batangas Philippines. I love building
          reactive and responsive website using the latest technologies
          available to deliver awesome experience to the user.
        </h3>
      </div>
      <div className="col2">
        <label>Hello, I'm</label>
        <div className="firstName">SAM GERRICK</div>
        <div className="lastName">
          <span>DE SILVA</span>
        </div>
        <div className="sam_title">Web Developer</div>
      </div>
    </div>
  );
};

export default Home;
