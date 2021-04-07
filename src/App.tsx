import React, { useEffect, useState } from "react";
import "./App.css";
import About from "./components/about";
import Footer from "./components/footer";
import Header from "./components/header";
import Projects from "./components/projects";

function App() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    if (window.innerWidth < 768) {
      setIsMobile(true);
    }
  }, []);
  return (
    <div className="App px-3">
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
      <div style={{ height: "190vh" }}>
        <About />
      </div>
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
