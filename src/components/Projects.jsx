import React from "react";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Assan Home",
    Description: "Real estate investment Company",
    ImageUrl: "/images/ProjectsImages/assanHome.png",
    projectLink: "https://www.asaanhome.com/",
  },
  {
    title: "Real estate Builder",
    Description: "Real estate Builders",
    ImageUrl: "/images/ProjectsImages/HomeBuilder.png",
    projectLink: "https://tranquil-horse-1fb85b.netlify.app/",
  },
  {
    title: "Quiz App",
    Description: "Quiz App",
    ImageUrl: "/images/ProjectsImages/QuizApp.png",
    projectLink: "https://tangerine-mousse-afedb6.netlify.app/",
  },
  {
    title: "Todo App",
    Description: "Todo App",
    ImageUrl: "/images/ProjectsImages/TodoApp.png",
    projectLink: "https://magenta-cheesecake-1b8009.netlify.app/",
  },
  {
    title: "Drum Kit Sound Game",
    Description: "Drum Kit Sound Game",
    ImageUrl: "/images/ProjectsImages/Drumkit Game.png",
    projectLink: "https://eloquent-semolina-e5b6f3.netlify.app/",
  },
  {
    title: "Color Switch Game",
    Description: "Color Switch Game",
    ImageUrl: "/images/ProjectsImages/ColorSwicher.png",
    projectLink: "https://imaginative-sunshine-0a564f.netlify.app/hex",
  },
  {
    title: "Calculator",
    Description: "Calculator",
    ImageUrl: "/images/ProjectsImages/Calculator.png",
    projectLink: "https://monumental-palmier-1efe92.netlify.app/",
  },
  {
    title: "Weather Checking App",
    Description: "Weather Checking App",
    ImageUrl: "/images/ProjectsImages/Weather cheking App.png",
    projectLink: "https://incredible-dango-7f742d.netlify.app/",
  },
];

const Projects = () => {
  return (
    <div className="m-4">
      <h1 className="text-center my-6 text-5xl">&#8764; Projects</h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            Description={project.Description}
            imageUrl={project.ImageUrl}
            projectLink={project.projectLink}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
