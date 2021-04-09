import React, { useEffect, useState } from "react";
import "./App.css";
import Footer from "./components/footer";
import Header from "./components/header";
import Projects from "./components/projects";
import Sections from "./components/sections";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { CaretUpFill } from "react-bootstrap-icons";

function App() {
  gsap.registerPlugin(ScrollToPlugin);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    if (window.innerWidth < 768) {
      setIsMobile(true);
    }

    const tl = gsap.timeline({
      repeat: -1,
      repeatDelay: 1,
    });
    tl.to(".line", {
      duration: 1,
      height: "5em",
    });
    tl.to(
      ".leftLine",
      { duration: 0.5, height: "1em", borderRadius: "0 0 0 50%" },
      1
    );
    tl.to(
      ".rightLine",
      { duration: 0.5, height: "1em", borderRadius: "0 0 50% 0" },
      1
    );
  }, []);

  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      gsap.to(`#backtoTop`, { duration: 1, autoAlpha: 1 });
    } else {
      gsap.to(`#backtoTop`, { duration: 1, autoAlpha: 0 });
    }
  }

  const scrollTop = () => {
    gsap.to(window, { duration: 2, scrollTo: "#headerTop" });
  };

  return (
    <div className="App">
      {!isMobile ? (
        <video autoPlay muted loop id="myVideo">
          <source
            src="https://res.cloudinary.com/waliwalo/video/upload/v1617806871/portfolio/Black_-_13495_lwgipx.mp4"
            type="video/mp4"
          />
        </video>
      ) : (
        <div className="backgroundImage"></div>
      )}

      <Header />
      {/* <div style={{ height: "190vh" }}>
        <About />
      </div> */}
      <Sections />
      <Projects />
      <Footer />
      <div className="scrollDownPrompt">
        <div className="line"></div>
        <div className="leftLine"></div>
        <div className="rightLine"></div>
      </div>
      <div className="scrollUpPrompt">
        <div className="line"></div>
        <div className="leftLine"></div>
        <div className="rightLine"></div>
      </div>
      <button onClick={scrollTop} id="backtoTop" title="Go to top">
        <CaretUpFill size={40} />
      </button>
    </div>
  );
}

export default App;
