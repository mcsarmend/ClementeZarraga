import React from "react";
import "./Training.css";
import adminBDImg from "../../media/AdminBD.png";
import adminServImg from "../../media/admServ.png";
import asisWebImg from "../../media/AsisWeb.png";
import curDatosImg from "../../media/CurDatos.png";
import videoGamesImg from "../../media/VideoGames.png";
import backEndImg from "../../media/BackEnd.png";
import frontEndImg from "../../media/FrontEnd.png";
import appsGoogleImg from "../../media/appsGoogle.png";
import appsImg from "../../media/app.png";
import digitalContentImg from "../../media/digitalContent.png";
import finderImg from "../../media/finder.png";
import scrumImg from "../../media/Scrum.png";
import imgWebImg from "../../media/imgWeb.png";
import testerImg from "../../media/tester.png";

const Training = () => (
  <div className="Training-container">
    <h2 className="Training-Text">Training</h2>
    <div className="trainingContainer">
      <article class="training-listing"><a class="training-title" href="JavaScript:window.open('https://firebasestorage.googleapis.com/v0/b/myportfolio-d919e.appspot.com/o/Administrador%20de%20Base%20de%20Datos.pdf?alt=media&token=7f02df4f-baf4-4b81-9a02-8225e47025df0')" >Administrador de base de Datos</a>     <div class="training-image"><img src={adminBDImg} alt="Administrador de Base de Datos" title="Administrador de Base de Datos"></img>         </div></article>
      <article class="training-listing"><a class="training-title" href="JavaScript:window.open('https://firebasestorage.googleapis.com/v0/b/myportfolio-d919e.appspot.com/o/Administrador%20de%20Servidores.pdf?alt=media&token=e5f3a11d-e78f-4e8e-932a-6bbc899c3dfa')" >Administrador de Servidores</a>     <div class="training-image"><img src={adminServImg} alt="Administrador de Servidores" title="Administrador de Servidores"></img>         </div></article>
      <article class="training-listing"><a class="training-title" href="JavaScript:window.open('https://firebasestorage.googleapis.com/v0/b/myportfolio-d919e.appspot.com/o/Asistente%20Web.pdf?alt=media&token=40fc7403-6578-4760-a736-3be7268d42d3')" >Asistente Web</a>     <div class="training-image"><img src={asisWebImg} alt="Asistente Web" title="Asistente Web"></img>         </div></article>
      <article class="training-listing"><a class="training-title" href="JavaScript:window.open('https://firebasestorage.googleapis.com/v0/b/myportfolio-d919e.appspot.com/o/Curador%20de%20Datos.pdf?alt=media&token=cd84f563-2d54-4d97-b4b4-583013008945')" >Curador de Datos</a>     <div class="training-image"><img src={curDatosImg} alt="Curador de Datos" title="Curador de Datos"></img>         </div></article>
      <article class="training-listing"><a class="training-title" href="JavaScript:window.open('https://firebasestorage.googleapis.com/v0/b/myportfolio-d919e.appspot.com/o/Desarollador%20de%20Videojuegos.pdf?alt=media&token=a14dda38-b9c0-4d5c-826e-537867e22c97')" >Desarrollador de Videojuegos</a>     <div class="training-image"><img src={videoGamesImg} alt="Desarrollador de Videjuegos" title="Desarrollador de Videojuegos"></img>         </div></article>
      <article class="training-listing"><a class="training-title" href="JavaScript:window.open('https://firebasestorage.googleapis.com/v0/b/myportfolio-d919e.appspot.com/o/Desarrollador%20Back%20End.pdf?alt=media&token=eb6ae8b9-34f5-430a-87b0-cc084173f4c6')" >Desarrollador Back End</a>     <div class="training-image"><img src={backEndImg} alt="Desarrollador Back End" title="Desarrollador Back End"></img>         </div></article>
      <article class="training-listing"><a class="training-title" href="JavaScript:window.open('https://firebasestorage.googleapis.com/v0/b/myportfolio-d919e.appspot.com/o/Desarrollador%20Front%20End.pdf?alt=media&token=6ef0068a-5ee7-472f-bc89-c52dd712657c')" >Desarrollador Front End</a>     <div class="training-image"><img src={frontEndImg} alt="Desarrollador Front End" title="Desarrollador Front End"></img>         </div></article>
      <article class="training-listing"><a class="training-title" href="JavaScript:window.open('https://firebasestorage.googleapis.com/v0/b/myportfolio-d919e.appspot.com/o/Desarrollador%20de%20Aplicaciones%20Moviles%20Google.pdf?alt=media&token=1d49e3fd-4785-4ff7-8988-222fc3388abf')" >Desarrollador de Aplicaciones Moviles Google </a>     <div class="training-image"><img src={appsGoogleImg} alt="Desarrollador de Aplicaciones Moviles Google" title="Desarrollador de Aplicaciones Moviles Google"></img>         </div></article>
      <article class="training-listing"><a class="training-title" href="JavaScript:window.open('https://firebasestorage.googleapis.com/v0/b/myportfolio-d919e.appspot.com/o/Desarrollador%20de%20Aplicaciones%20Moviles.pdf?alt=media&token=5f888ba0-8104-4950-ae99-d2430d82392c')" >Desarrollador de Aplicaciones Moviles </a>     <div class="training-image"><img src={appsImg} alt="Desarrollador de Aplicaciones Móviles" title="Desarrollador de Aplicaciones Móviles"></img>         </div></article>
      <article class="training-listing"><a class="training-title" href="JavaScript:window.open('https://firebasestorage.googleapis.com/v0/b/myportfolio-d919e.appspot.com/o/Desarrollador%20de%20Contenido%20Digital.pdf?alt=media&token=10734f5e-7a5f-48b3-828c-6a2db48bc08f')" >Desarrollador de Contenido Digital</a>     <div class="training-image"><img src={digitalContentImg} alt="Desarrollador de Contenido Digital" title="Desarrollador de Contenido Digital"></img>         </div></article>
      <article class="training-listing"><a class="training-title" href="JavaScript:window.open('https://firebasestorage.googleapis.com/v0/b/myportfolio-d919e.appspot.com/o/Finder.pdf?alt=media&token=8b3925e0-f0ef-4f5b-9785-68dcf964855b')" >Finder</a>     <div class="training-image"><img src={finderImg} alt="Finder" title="Finder"></img>         </div></article>
      <article class="training-listing"><a class="training-title" href="JavaScript:window.open('https://firebasestorage.googleapis.com/v0/b/myportfolio-d919e.appspot.com/o/Finder.pdf?alt=media&token=8b3925e0-f0ef-4f5b-9785-68dcf964855b')" >Scrum Fundamentals</a>     <div class="training-image"><img src={scrumImg} alt="Scrum" title="Scrum"></img>         </div></article>
      <article class="training-listing"><a class="training-title" href="JavaScript:window.open('https://firebasestorage.googleapis.com/v0/b/myportfolio-d919e.appspot.com/o/Gestor%20de%20Imagen%20Web.pdf?alt=media&token=5e373e16-dbc6-485f-8f2a-87c5baee7edc)" >Gestor de Imagen Web</a>     <div class="training-image"><img src={imgWebImg} alt="Gestor de Imagen Web" title="Gestor de Imagen Web"></img>         </div></article>
      <article class="training-listing"><a class="training-title" href="JavaScript:window.open('https://firebasestorage.googleapis.com/v0/b/myportfolio-d919e.appspot.com/o/Tester.pdf?alt=media&token=fca25e71-e099-4cd6-adb4-b70e46bcf382)" >Tester</a>     <div class="training-image"><img src={testerImg} alt="Tester" title="Tester"></img>         </div></article>

    </div>
    
    
  </div>

);

export default Training
