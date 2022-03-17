import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Routes, Route } from "react-router-dom";
import App from "./routes/app";
import Project from "./routes/projects";
import "./style/query.scss";

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/projects" element={<Project />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
