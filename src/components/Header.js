import React from "react";
import { HashLink as Link } from "react-router-hash-link";

function Header() {
  return (
    <div className="header">
      <p className="websiteTitle">WELEHO'S SITE</p>
      <Link to="/#home">Home</Link>
      <Link to="/#skillsSection">Skills</Link>
      <Link to="/projects">Projects</Link>
    </div>
  );
}

export default Header;
