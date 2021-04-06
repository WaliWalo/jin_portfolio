import React from "react";
import "./App.css";
import About from "./components/about";
import Footer from "./components/footer";
import Header from "./components/header";
import Projects from "./components/projects";

function App() {
  return (
    <div className="App">
      <Header />
      <div style={{ height: "200vh" }}>
        <About />
      </div>
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
