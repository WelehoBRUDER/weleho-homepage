import React from "react";
import "../style/main.scss";
import "../style/projects.scss";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Projects() {
  const projectsArray = [
    {
      name: "Dungeons of Tavaraen",
      desc: "2D Roguelite RPG inspired by Tales of Maj'Eyal. Currently my most actively developed project, give it a try if you're interested!",
      repo: "https://github.com/WelehoBRUDER/Dungeons-of-Tavaraen",
      link: "https://welehobruder.github.io/Dungeons-of-Tavaraen/",
      image: "tavaraen.png",
      status: { bar: 40, text: "In Development", col: "g" },
    },
    {
      name: "Memory Cards",
      desc: "Simple memory card game based on Dark Souls III, made to practice React.",
      repo: "https://github.com/WelehoBRUDER/memory-cards-game",
      link: "https://welehobruder.github.io/memory-cards-game/",
      image: "memory-cards.png",
      status: { bar: 100, text: "Finished", col: "b" },
    },
    {
      name: "Pohjola II",
      desc: "Turn based fighting game mostly made during one weekend. My most 'complete' project to date.",
      repo: "https://github.com/WelehoBRUDER/Pohjola-II",
      link: "https://welehobruder.github.io/Pohjola-II/",
      image: "pohjola.png",
      status: { bar: 100, text: "Finished", col: "b" },
    },
    {
      name: "Pohjola III",
      desc: "Turn based fighting game based on its prequel Pohjola II. Abandoned in favour of Dungeons of Tavaraen.",
      repo: "https://github.com/WelehoBRUDER/Pohjola-III",
      link: "https://welehobruder.github.io/Pohjola-III/",
      image: "pohjola3.png",
      status: { bar: 25, text: "Abandoned", col: "r" },
    },
    {
      name: "Tears of the Evertree",
      desc: "TOTE was supposed to be my main project, it had plenty of time dedicated to it. Unfortunately, it is now an abandoned game.",
      repo: "https://github.com/WelehoBRUDER/TOTE",
      link: "https://welehobruder.github.io/TOTE/",
      image: "tote.png",
      status: { bar: 45, text: "Abandoned", col: "r" },
    },
    {
      name: "My Road",
      desc: "One of my earlier games, started because I didn't have internet one day and decided to program an interface. Had some simple attempts at creating an AI opponent.",
      repo: "https://github.com/WelehoBRUDER/MY-ROAD-RPG",
      link: "https://welehobruder.github.io/MY-ROAD-RPG/",
      image: "my-road.png",
      status: { bar: 30, text: "Abandoned", col: "r" },
    },
  ];

  const [focusedImage, setFocusedImage] = React.useState("");

  function focus(name) {
    if (focusedImage === name) setFocusedImage("");
    else setFocusedImage(name);
  }

  return (
    <div className="projects">
      <Header />
      <div className="content">
        <h1 className="projectsTitle">My Projects</h1>
        <div className="projectGrid">
          {projectsArray.map((project) => {
            return (
              <div className={`projectContainer ${project.status.col}`}>
                <h2 className="projectTitle">{project.name}</h2>
                <img
                  className={`projectIcon ${
                    focusedImage === project.name ? "projectIconFocused" : ""
                  }`}
                  src={process.env.PUBLIC_URL + "/images/" + project.image}
                  alt=""
                  onClick={() => focus(project.name)}
                />
                <div className="githubButtons">
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="github linkIcon"
                  >
                    <i
                      className="devicon-github-original"
                      alt="Link to repository"
                    ></i>
                  </a>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="github linkIcon"
                  >
                    <img
                      src={process.env.PUBLIC_URL + "/images/open-in-new.svg"}
                      alt="Link to project"
                    />
                  </a>
                </div>
                <p className="projectDesc">{project.desc}</p>
                <div className="projectProgress">
                  <p className="progText">{project.status.text}</p>
                  <div
                    className={`barFill ${project.status.col}`}
                    style={{ width: project.status.bar + "%" }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Projects;
