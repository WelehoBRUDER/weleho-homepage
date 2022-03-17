import React from "react";

function Introduction() {
  return (
    <div className="intro">
      <h1>WHO AM I?</h1>
      <p>
        I am a Finnish programmer motivated by my passion for games. <br></br> I
        like making games with Javascript, and professionally I am a Frontend
        developer.<br></br>I currently work at{" "}
        <a
          href="https://digitalentshelsinki.fi/"
          target="_blank"
          rel="noreferrer"
          className="link-simple"
        >
          Digitalents Helsinki
        </a>{" "}
        as a software developer.
      </p>
      <h2>BACKGROUND</h2>
      <p>
        I started programming during my 8th grade of high school. I began with
        python and did fairly well in the class. <br></br> <br></br> My passion
        really began when I started vocational school specializing in game
        development. <br></br>I started making projects in my free time and
        discussing coding subjects with my friend. <br></br> <br></br> I was
        truly charmed by game design when some of my friends actually enjoyed
        playing the games I made.
      </p>
    </div>
  );
}

export default Introduction;
