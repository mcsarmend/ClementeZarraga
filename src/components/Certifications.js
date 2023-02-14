import React, { Component } from "react";
import Footer from "./Footer";
import projectsData from "./certifications-data.json";
import Project from "./CertificationsItem";

class Projects extends Component {
  state = { projectsData };
  render() {
    return (
      <div>
        <h1 className="projects-title">Certifications</h1>
        {this.state.projectsData.map((project) => {
          return (
            <Project
              title={project.title}
              desc={project.desc}
              tech={project.tech}
              img={project.img}
              link={project.link}
            />
          );
        })}
        <Footer />
      </div>
    );
  }
}

export default Projects;
