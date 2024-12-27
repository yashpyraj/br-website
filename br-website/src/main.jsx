import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import AboutUs from "./pages/AboutUs";
import DataSection from "./pages/DataSection";
import Home from "./pages/Home";
import Tools from "./pages/Tools";
import TimeLine from "./pages/TimeLine";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/data" element={<DataSection />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="/timeline" element={<TimeLine />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
