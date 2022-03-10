import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import "../style/header.scss";

function Header() {
  return (
    <header className="header">
      <a
        className="websiteTitle"
        href="https://steamcommunity.com/id/dimmedd"
        target="_blank"
        rel="noreferrer"
      >
        WELEHO
      </a>
      <Link to="/#home">Home</Link>
      <Link to="/#skillsSection">Skills</Link>
      <Link to="/projects">Projects</Link>
    </header>
  );
}

export default Header;
