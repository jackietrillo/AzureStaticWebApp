import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Skills from "./Components/Skills";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Skills" element={<Skills />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
