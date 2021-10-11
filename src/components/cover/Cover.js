import React from "react";
import "./Cover.css";
import coverVideo from "../../media/coverVideo.mp4";

const Cover = () => {
  return (
    <div className="cover-container">
      <video className="video" src={coverVideo} autoPlay loop muted />
      <h1>Zarraga Cruz Clemente Armando</h1>
      <p>WEB DEVELOPER FULL STACK | DATA ANALYST | MOBILE CONFIGURATOR</p>
    </div>
  );
};

export default Cover;
