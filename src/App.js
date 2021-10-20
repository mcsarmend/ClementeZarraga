import React, { useState, useEffect } from "react";

import "./App.css";
import Cover from "./components/cover/Cover";
import Navbar from "./components//navBar/NavBar";
import About from "./components/about/About";
import Slider from "./components/slider/Slider";
import Info from "./components/info/Info";
import Footer from "./components/footer/Footer";
import Techs from "./components/Techs/Techs"
import Training from "./components/training/Training"
import Error404 from "./components/Error404/Error404";
function App() {
  const [scrollHeight, setScrollHeight] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollHeight(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, [scrollHeight]);

  return (
    <div className="App">
      <Navbar isScrolling={scrollHeight} />
      <Cover />
      <About />
      <Techs />
      <Training />
      <Slider />
      <Info />
      <Footer />

    </div>
  );
}

export default App;
