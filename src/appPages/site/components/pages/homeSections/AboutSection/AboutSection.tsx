"use client";

import React, { useEffect, useRef } from "react";
import scss from "./AboutSection.module.scss";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const AboutSection = () => {
  const cardRef = useRef<HTMLDivElement>(null);
  const { ref: sectionRef, isVisible } = useScrollAnimation(0.2);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      // Уменьшил делитель с 20 до 50 для более плавного движения
      const rotateX = (y - centerY) / 50;
      const rotateY = (centerX - x) / 50;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

      const glow = card.querySelector(`.${scss.cardGlow}`) as HTMLElement;
      if (glow) {
        glow.style.setProperty("--mouse-x", `${x}px`);
        glow.style.setProperty("--mouse-y", `${y}px`);
      }
    };

    const handleMouseLeave = () => {
      card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg)";
    };

    card.addEventListener("mousemove", handleMouseMove);
    card.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      card.removeEventListener("mousemove", handleMouseMove);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <section id="about" className={scss.about} ref={sectionRef}>
      <div className="container">
        <div className={scss.sectionHeader}>
          <div className={`${scss.sectionLabel} ${isVisible ? scss.visible : ""}`}>Get to know me</div>
          <h2 className={`${scss.sectionTitle} ${isVisible ? scss.visible : ""}`}>About Me</h2>
        </div>
        <div className={`${scss.aboutGrid} ${isVisible ? scss.visible : ""}`}>
          <div className={scss.aboutCard3d} ref={cardRef}>
            <div className={scss.card3dInner}>
              <div className={scss.cardGlow}></div>
              <div className={scss.aboutText}>
                <p>
                  Frontend Developer building <span className={scss.highlight}>clean, scalable web applications</span> with
                  React, Next.js, and TypeScript.
                </p>
                <p>
                  I value <span className={scss.highlight}>structure, performance, and maintainability</span>. Experienced in{" "}
                  <span className={scss.highlight}>team workflows</span> and GitHub collaboration.
                </p>
                <div className={scss.streakBadge}>
                  <span className={scss.fireIcon}>🔥</span>
                  <span>
                    <strong>406-day</strong> GitHub Streak
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className={scss.aboutStats}>
            <div className={scss.statCard}>
              <div className={scss.statNumber}>406</div>
              <div className={scss.statLabel}>Days Streak</div>
            </div>
            <div className={scss.statCard}>
              <div className={scss.statNumber}>15+</div>
              <div className={scss.statLabel}>Projects</div>
            </div>
            <div className={scss.statCard}>
              <div className={scss.statNumber}>3+</div>
              <div className={scss.statLabel}>Years Experience</div>
            </div>
            <div className={scss.statCard}>
              <div className={scss.statNumber}>100%</div>
              <div className={scss.statLabel}>Commitment</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
