import React from "react";
import "./App.css";
import About from "./components/about";
import Education from "./components/education";
import Footer from "./components/footer";
import Header from "./components/header";
import Projects from "./components/projects";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Education />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
