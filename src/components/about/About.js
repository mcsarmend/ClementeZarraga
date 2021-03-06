import React from "react";
import "./About.css";
import portada from "../../media/Portada.png"

const About = () => {
  return (
    <div className="about-container">
      <div className="about-desc">
        <h3>Let me tell you something about me</h3>
        <p>
        Professional in the IT area, I have experience in software development, programming, web design, operating systems
        installation, mobile applications and data analysis; specialized in the logistics industry, education sector, 
        automation and customer service; Constantly trained (With evidence). Social skills that facilitate a good relationship
        with different areas or customers.
        </p>
      </div>
      <div className="about-img">
        <img
          src={portada}
          alt="about"
        />
      </div>
    </div>
  );
};

export default About;
