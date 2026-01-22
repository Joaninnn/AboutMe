"use client";

import React, { useEffect, useState } from "react";
import scss from "./Navigation.module.scss";

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`${scss.nav} ${scrolled ? scss.scrolled : ""}`}>
      <div className={`container ${scss.navContainer}`}>
        <div className={scss.logo}>JOANINNN</div>
        <ul className={scss.navLinks}>
          <li>
            <a href="#hero">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#tech">Tech Stack</a>
          </li>
          <li>
            <a href="#stats">Stats</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
