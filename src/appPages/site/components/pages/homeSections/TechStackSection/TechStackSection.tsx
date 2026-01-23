"use client";

import React from "react";
import scss from "./TechStackSection.module.scss";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const TechStackSection = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation(0.2);
  const techStack = {
    "Core": ["React", "Next.js", "TypeScript", "JavaScript"],
    "Styling": ["SCSS/SASS", "CSS Modules", "Tailwind CSS", "Styled Components"],
    "State Management": ["Redux Toolkit", "Zustand", "React Context"],
    "Tools & Others": ["Git/GitHub", "Framer Motion", "React Hook Form", "Axios"]
  };

  return (
    <section id="tech" className={scss.techStack} ref={sectionRef}>
      <div className="container">
        <div className={scss.sectionHeader}>
          <div className={`${scss.sectionLabel} ${isVisible ? scss.visible : ""}`}>My expertise</div>
          <h2 className={`${scss.sectionTitle} ${isVisible ? scss.visible : ""}`}>Tech Stack</h2>
        </div>

        {Object.entries(techStack).map(([category, techs], index) => (
          <div key={category} className={`${scss.techCategory} ${isVisible ? scss.visible : ""}`} style={{ transitionDelay: `${0.6 + index * 0.1}s` }}>
            <h3 className={scss.techCategoryTitle}>{category}</h3>
            <div className={`${scss.techGrid} ${scss[`animate${index % 2 === 0 ? 'Right' : 'Left'}`]}`}>
              {techs.map((tech) => (
                <div key={tech} className={scss.techItem}>
                  <div className={scss.techName}>{tech}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStackSection;
