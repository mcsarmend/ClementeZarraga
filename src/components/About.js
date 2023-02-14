import React from "react";
import pic from "../assets/skykd.JPG";
import video from "../assets/hex-flash.mp4";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLaptopCode,
  faFileCode,
  faCodeBranch,
} from "@fortawesome/free-solid-svg-icons";
import Footer from "./Footer";

const About = () => {
  return (
    <div>
      <div className="about-container">
        <div className="fluid-container">
          <div className="row align-items-center">
            <div className="col">
              <div className="jumbo">
                <h1 data-aos="fade-up">About me</h1>
                <video autoPlay muted loop className="myVideo">
                  <source src={video} type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-4" data-aos="fade-left">
              <img className="kd" src={pic} alt="kd pic" />
            </div>
            <div className="col-lg-8" data-aos="fade-right">
              <p className="kd-info">
                <span style={{ color: "#e1b32c", fontSize: "3rem" }}>
                  Hello friend!
                </span>
                <br />
                <br />
                I´m a professional in the IT area, I have experience in software development, programming, web design, operating systems installation, mobile applications and data analysis; specialized in the logistics industry, education sector, automation and customer service; Constantly trained (With evidence). Social skills that facilitate a good relationship with different areas or customers.
                <br />
                Thanks for reading!
              </p>
            </div>
          </div>
        </div>
        <div className="container-fluid skills">
          <div className="row">
            <div className="col-lg text-center skill-group">
              <FontAwesomeIcon icon={faFileCode} />
              <p data-aos="fade-up">Languages</p>
              <ul className="list-group">
                <li data-aos="fade-up-left">C #</li>
                <li data-aos="fade-up-right">CSS/Sass</li>
                <li data-aos="fade-up">Dart</li>
                <li data-aos="fade-up">HTML</li>
                <li data-aos="fade-up-right">JavaScript/Typescript</li>
                <li data-aos="fade-up-left">jQuery</li>
                <li data-aos="fade-up">SQL</li>
                <li data-aos="fade-up-left">PHP</li>
              </ul>
            </div>
            <div className="col-lg text-center skill-group">
              <FontAwesomeIcon icon={faLaptopCode} />
              <p data-aos="fade-up">Frameworks / Libraries</p>
              <ul className="list-group">
                <li data-aos="fade-up-right">Laravel</li>
                <li data-aos="fade-up">Flutter</li>
                <li data-aos="fade-up-left">ReactJS</li>
                <li data-aos="fade-up-left">NodeJS</li>
              </ul>
            </div>
            <div className="col-lg text-center skill-group">
              <FontAwesomeIcon icon={faCodeBranch} />
              <p data-aos="fade-up">Other</p>
              <ul className="list-group">
                <li data-aos="fade-up-right">Git</li>
                <li data-aos="fade-up-left">MySQL</li>
                <li data-aos="fade-up">SQLServer</li>
                <li data-aos="fade-up-left">Heroku</li>
                <li data-aos="fade-up-left">NetCore</li>
                <li data-aos="fade-up-left">Postman</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
