import React from "react";
import "./Cover.css";
import coverVideo from "../../media/coverVideo.mp4";

const Cover = () => {
  return (
    <div className="cover-container">
      <video className="video" src={coverVideo} autoPlay loop muted />
      <h1>Zarraga Cruz Clemente Armando</h1>
      <p>WEB DEVELOPER FULL STACK | DATA ANALYST | MOBILE CONFIGURATOR</p>
      <a className="cv" href="JavaScript:window.open('https://firebasestorage.googleapis.com/v0/b/myportfolio-d919e.appspot.com/o/Web%20Developer%20Clemente%20Armando%20Zarraga%20Cruz%20CV%20OCT%207%202021.pdf?alt=media&token=98f85e1a-7a47-4c4d-9140-458fbf72d27c')">Ver CV</a>
    </div>
  );
};

export default Cover;
