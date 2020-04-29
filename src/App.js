import React from "react";
import Header from "./components/Header";
import "./App.css";
import About from "./components/About";
import Works from "./components/Works";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Works />
      <Contact />
    </div>
  );
}

export default App;
