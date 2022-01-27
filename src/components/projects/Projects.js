import React from "react";
import "./projects.css";
import project_1 from "../../img/Project_1.PNG";
import project_2 from "../../img/Project_2.PNG";
import project_3 from "../../img/Project_3.PNG";
import project_4 from "../../img/Project_4.PNG";

const Projects = () => {
  return (
    <div className="projects_body">
      <div className="projects_header">
        <h1>Sample React.JS Projects</h1>
      </div>
      <div className="img_line1">
        <a
          href="https://github.com/samgerrick01/samgerrickdesilva"
          target="blank"
        >
          <div className="image">
            <img src={project_1} alt="Project1" />

            <div className="image__overlay">
              <div className="image__title">My Website</div>
              <div className="image__description">
                My own Website & Portfolio
              </div>
            </div>
          </div>
        </a>
        <a
          href="https://github.com/samgerrick01/calendar-app-v3"
          target="blank"
        >
          <div className="image">
            <img src={project_2} alt="Project2" />
            <div className="image__overlay">
              <div className="image__title">Calendar App</div>
              <div className="image__description">
                Calendar Scheduler App with Redux & <br /> Json Server
              </div>
            </div>
          </div>
        </a>
      </div>

      <div className="img_line2">
        <a
          href="https://github.com/samgerrick01/todolist-redux-tailwindCSS"
          target="blank"
        >
          <div className="image">
            <img src={project_3} alt="Project3" />
            <div className="image__overlay">
              <div className="image__title">Todolist (Redux)</div>
              <div className="image__description">
                Todolist with Redux and Tailwind Css
              </div>
            </div>
          </div>
        </a>
        <a href="https://github.com/samgerrick01/todolist-v2" target="blank">
          <div className="image">
            <img src={project_4} alt="Project4" />
            <div className="image__overlay">
              <div className="image__title">Simple Todolist</div>
              <div className="image__description">
                Simple Todolist with CSS styling
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Projects;
