import React from "react";
import "./Slider.css";
import speachImg from "../../media/Speach.png";
import error404Page from "../Error404/Error404.js"

const slidesInfo = [
  {
    src:"https://cdn.pixabay.com/photo/2018/05/01/22/46/network-operator-3367207_960_720.jpg",
    alt: "Speach Asesoria UTEL",
    desc: "Speach Asesoria UTEL",
    href:"https://mcsarmend.github.io/Speach-UTEL/" 
  },
  {
    src:"https://cdn.pixabay.com/photo/2016/03/12/14/19/error-404-1252056_960_720.png",
    alt: "Pagina Error 404",
    desc: "Pagina Error 404",
    href:"../Error404/Error404.js"
  },
  {
    src:"https://cdn.pixabay.com/photo/2015/02/05/08/06/macbook-624707_960_720.jpg",
    alt: "Project 3",
    desc: "Project 3",
  },
];

const slides = slidesInfo.map((slide) => (
  <div className="slide-container"  >
    <img src={slide.src} alt={slide.alt} />
    <div className="slide-desc" >
      <a href={slide.href} target="_blank" > {slide.desc}</a>
    </div>
  </div>
));

export default slides;
