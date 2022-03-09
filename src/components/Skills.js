import React from "react";

function Skills() {
  const mySkills = [
    {
      name: "English",
      level: 100,
      desc: "I am completely fluent in English, often treating it as a second native language.",
    },
    {
      name: "Finnish",
      level: 100,
      desc: "Being Finnish, this is my native language.",
    },
    {
      name: "HTML",
      level: 50,
      desc: "I understand HTML, but don't have deep knowledge.",
    },
    {
      name: "CSS/SCSS",
      level: 60,
      desc: "I am not incredible with CSS, but I can definitely manage it.",
    },
    {
      name: "Javascript",
      level: 85,
      desc: "Javascript is the language I am most familiar and comfortable with.",
    },
    {
      name: "Typescript",
      level: 37,
      desc: "I have recently begun learning the basics of Typescript.",
    },
    {
      name: "React",
      level: 35,
      desc: "As with Typescript, I am still at the beginning.",
    },
  ];
  return (
    <div className="skills" id="skillsSection">
      <h1 className="skillsTitle">My Skills</h1>
      {mySkills.map((skill) => {
        return (
          <div className={"skill " + skill.name}>
            <h2>{skill.name}</h2>
            <p>{skill.desc}</p>
            <div className="skillBar">
              <div
                className="skillBarFill"
                style={{ width: skill.level + "%" }}
              ></div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Skills;
