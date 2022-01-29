import React from "react";
import "./about.css";

const Footer = () => {
  return (
    <div className="about__body">
      <div className="about__title">About Me</div>
      <div className="about__content1">
        Hi, I'm <span>Sam Gerrick De Silva</span> - a frontend developer and
        content creator originally from Batangas, Philippines. I have worked in
        tech and on the web for over 5 years with experience ranging from
        <span> React.JS, CSS, HTML, Php, MySQL</span> Technical Writing and I
        have worked for companies.
      </div>
      <div className="about__content2">
        I love sharing and contributing to the tech community and it has become
        a significant part of my career. I'm consistently engaging and
        advocating for open and inclusive developer communities and love sharing
        my knowledge and experience.
      </div>
      <div className="about__content3">
        When I'm not coding, you can find me geeking about photography, and
        exploring different ways of creating content that can help people pivot
        their tech careers.
      </div>
    </div>
  );
};

export default Footer;
