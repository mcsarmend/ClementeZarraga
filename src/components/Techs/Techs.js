import React from "react";
import "./Techs.css";
import aspImg from "../../media/ASP.png";
import csharpImg from "../../media/C#.png";
import cppImg from "../../media/c++.png";
import cssImg from "../../media/css.png";
import cucumberImg from "../../media/Cucumber.png";
import html5Img from "../../media/html5.png";
import javaImg from "../../media/Java.png";
import javaScriptImg from "../../media/JavaScript.png";
import jqueryImg from "../../media/Jquery.png";
import jsonImg from "../../media/JSON.png";
import mysqlImg from "../../media/MySql.png";
import pythonImg from "../../media/python.png";
import reactImg from "../../media/React.png";
import sqlImg from "../../media/Sql.png";
import vbImg from "../../media/Visual Basic.png";
import xmlImg from "../../media/XML.PNG";

const Techs = () => (
  <div className="Techs-container">
    <div  className= "Techs-title">
        <h2>Technologies</h2>
        <br/>
    </div>
    <div class="grid-container">
       <article class="location-listing"><a class="location-title" >ASP</a>     <div class="location-image"><img src={aspImg} alt="ASP" title="ASP"></img>         </div></article>
       <article class="location-listing"><a class="location-title" >C #</a>     <div class="location-image"><img src={csharpImg} alt="C SHARP" title="C SHARP"></img>          </div></article>
       <article class="location-listing"><a class="location-title" >C ++</a>     <div class="location-image"><img src={cppImg} alt="C ++" title="C ++"></img>         </div></article>
       <article class="location-listing"><a class="location-title" >CSS</a>     <div class="location-image"><img src={cssImg} alt="CSS" title="CSS"></img>         </div></article>
       <article class="location-listing"><a class="location-title" >Cucumber</a>     <div class="location-image"><img src={cucumberImg} alt="CUCUMBER" title="CUCUMBER"></img>          </div></article>
       <article class="location-listing"><a class="location-title" >HTML 5</a>     <div class="location-image"><img src={html5Img} alt="HTML 5" title="HTML 5"></img>          </div></article>
       <article class="location-listing"><a class="location-title" >Java</a>     <div class="location-image"><img src={javaImg} alt="JAVA" title="JAVA"></img>          </div></article>
       <article class="location-listing"><a class="location-title" >Java Script</a>     <div class="location-image"><img src={javaScriptImg} alt="JAVA SCRIPT" title="JAVA SCRIPT"></img>          </div></article>
       <article class="location-listing"><a class="location-title" >Jquery</a>     <div class="location-image"><img src={jqueryImg} alt="JQUERY" title="JQUERY"></img>        </div></article>
       <article class="location-listing"><a class="location-title" >Json</a>     <div class="location-image"><img src={jsonImg} alt="JSON" title="JSON"></img>        </div></article>
       <article class="location-listing"><a class="location-title" >My Sql</a>     <div class="location-image"><img src={mysqlImg} alt="MY SQL" title="MY SQL"></img>         </div></article>
       <article class="location-listing"><a class="location-title" >Python</a>     <div class="location-image"><img src={pythonImg} alt="PHYTON" title="PYTHON"></img>         </div></article>
       <article class="location-listing"><a class="location-title" >SQL</a>     <div class="location-image"><img src={sqlImg} alt="SQL" title="SQL"></img>         </div></article>
       <article class="location-listing"><a class="location-title" >React</a>   <div class="location-image"><img src={reactImg} alt="REACT" title="REACT"></img>    </div></article>
 </div>


  </div>
);

export default Techs
