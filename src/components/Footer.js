import React from "react";
import "../style/footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <h2>Contact Info</h2>
      <p>
        <img className="icon" src="/images/email.svg" alt="Email icon"></img>
        dimmedd@hotmail.com
      </p>
      <p>
        <img
          className="icon"
          src="/images/discord-color-seeklogo.com-2.svg"
          alt="Discord icon"
        ></img>
        svenkoBOEH#4008
      </p>
    </footer>
  );
}

export default Footer;
