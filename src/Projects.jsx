import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import SectionWrapper from "./SectionWrapper";
import { useEffect, useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
const projectsData = [
    {
      name: "DearDiary",
      description: "Developed a full-stack MERN web application for journaling with secure data storage and a dynamic calendar.",
      github: "https://github.com/Sreeram1004/Dear_Diary",
      live: "#", // Replace with live project link if available
      techStack: ["ReactJs", "Node.js", "MongoDB", "Express", "Tailwind CSS", "Mongo Client"],
      image: "https://i.ibb.co/gZMbhsPY/Diary.png" 
    },
    {
      name: "BookMYCourt",
      description: "A MERN stack court booking system with JWT authentication, bcrypt password encryption, and an admin dashboard.",
      github: "https://github.com/Sreeram1004/Court-book",
      live: "#",
      techStack: ["ReactJs", "Node.js", "Express", "MongoDB", "Tailwind Css"],
      image: "https://i.ibb.co/PvwttjBt/Book-My-Court.png"
    },
    {
      name: "Fooddel",
      description: "An online food ordering website built using Swiggy’s API to fetch real-time restaurant and food information.",
      github: "https://github.com/Sreeram1004/Food_del",
      live: "#",
      techStack: ["JavaScript", "HTML", "CSS", "API Integration","ReactJs"],
      image: "https://i.ibb.co/KSycwHR/Fooddel.png" 
    }
  ];
  
  const Projects = () => (
    <section id="projects" className="py-10">
      <h1 className="text-5xl font-bold text-center mb-8">Projects</h1>
      <div className="flex flex-col gap-8 max-w-6xl mx-auto">
        {projectsData.map((project) => (
          <div key={project.name} className="bg-white rounded-lg shadow-lg p-6 flex flex-col md:flex-row gap-6">
            <img src={project.image} alt={project.name} className=" md:w-1/3 h-52 object-cover rounded-lg" />
            <div className="flex-1">
              <h2 className="text-2xl font-semibold">{project.name}</h2>
              <p className="mt-2 text-gray-700">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-3">
                {project.techStack.map((tech) => (
                  <span key={tech} className="bg-gray-200 text-gray-800 text-sm px-3 py-1 rounded-full">{tech}</span>
                ))}
              </div>
              <div className="flex gap-4 mt-4">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded">
                  <FaGithub /> Git
                </a>
                {project.live !== "#" && (
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded">
                    <FaExternalLinkAlt /> Live
                  </a>
                )}
               
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
  
export default Projects;  