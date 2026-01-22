"use client";

import React, { useEffect, useState } from "react";
import scss from "./BackgroundEffects.module.scss";
import { usePathname } from "next/navigation";

const BackgroundEffects = () => {
  const pathname = usePathname();
  const [isHomePage, setIsHomePage] = useState(true);

  useEffect(() => {
    // Проверяем, находимся ли мы на главной странице или в hero секции
    const checkIfHome = () => {
      const heroSection = document.getElementById("hero");
      if (heroSection) {
        const rect = heroSection.getBoundingClientRect();
        const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;
        setIsHomePage(isInViewport);
      }
    };

    checkIfHome();
    window.addEventListener("scroll", checkIfHome);
    return () => window.removeEventListener("scroll", checkIfHome);
  }, [pathname]);
  useEffect(() => {
    // Progress bar on scroll
    const handleScroll = () => {
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (window.scrollY / windowHeight) * 100;
      const progressBar = document.getElementById("progressBar");
      if (progressBar) {
        progressBar.style.width = scrolled + "%";
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Progress Bar */}
      <div id="progressBar" className={scss.progressBar}></div>

      {/* Vertical Side Text */}
      <div className={scss.verticalText}>JOANINNN</div>

      {/* Animated Tech Lightning Background */}
      <div className={`${scss.techArrowsBg} ${!isHomePage ? scss.dimmed : ""}`}>
        {[...Array(10)].map((_, i) => (
          <div key={i} className={scss.arrow}></div>
        ))}
      </div>
    </>
  );
};

export default BackgroundEffects;
