"use client";

import React from "react";
import scss from "./ProjectsSection.module.scss";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const ProjectsSection = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation(0.2);
  const projects = [
    {
      title: "Library Store",
      description: "E-commerce platform for books with cart, favorites, and user authentication. Built with Next.js and Redux Toolkit.",
      tech: ["Next.js", "TypeScript", "SCSS", "Redux Toolkit"],
      github: "https://github.com/Joaninnn/LibraryStore",
      live: "#"
    },
    {
      title: "IT Education",
      description: "Educational platform for IT courses with student profiles, news, gallery, and teacher information. Features multilingual support.",
      tech: ["Next.js", "TypeScript", "SCSS", "Redux"],
      github: "https://github.com/shaiyldaevich/It-education",
      live: "#"
    },
    {
      title: "Motion Courses",
      description: "Online learning platform with video lessons, mentor uploads, and real-time chat functionality.",
      tech: ["Next.js", "TypeScript", "SCSS", "Redux"],
      github: "https://github.com/Joaninnn/MotionCourse",
      live: "#"
    }
  ];

  return (
    <section id="projects" className={scss.projects} ref={sectionRef}>
      <div className="container">
        <div className={scss.sectionHeader}>
          <div className={`${scss.sectionLabel} ${isVisible ? scss.visible : ""}`}>My work</div>
          <h2 className={`${scss.sectionTitle} ${isVisible ? scss.visible : ""}`}>Featured Projects</h2>
        </div>

        <div className={`${scss.projectsGrid} ${isVisible ? scss.visible : ""}`}>
          {projects.map((project, index) => (
            <div key={index} className={scss.projectCard}>
              <div className={scss.projectImage}>
                <div className={scss.projectPlaceholder}>
                  <div className={scss.projectIcon}>💻</div>
                </div>
              </div>
              <div className={scss.projectContent}>
                <h3 className={scss.projectTitle}>{project.title}</h3>
                <p className={scss.projectDescription}>{project.description}</p>
                <div className={scss.projectTech}>
                  {project.tech.map((tech) => (
                    <span key={tech} className={scss.techTag}>
                      {tech}
                    </span>
                  ))}
                </div>
                <div className={scss.projectLinks}>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className={scss.projectLink}>
                    <FaGithub /> Code
                  </a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className={scss.projectLink}>
                    <FaExternalLinkAlt /> Live
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
