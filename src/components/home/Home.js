import React from "react";
import "./home.css";
import photo from "../../img/photo.png";

const Home = ({ darkMode }) => {
  return (
    <div className={darkMode ? "homeBody_dark" : "homeBody_light"}>
      <div className={darkMode ? "homeContainer_dark" : "homeContainer_light"}>
        <h1>Hello, I'm a Web Developer</h1>
        <div className="homeContent">
          <img src={photo} alt="photo" />
          <div className="homeContent__name">
            <h1>Sam Gerrick C. De Silva</h1>
            <h3>React.JS Web Developer</h3>
          </div>
        </div>
        <h4>
          I’m a web developer from Batangas Philippines. I love building
          reactive and responsive website using the latest technologies
          available to deliver awesome experience to the user.
        </h4>
      </div>
    </div>
  );
};

export default Home;
