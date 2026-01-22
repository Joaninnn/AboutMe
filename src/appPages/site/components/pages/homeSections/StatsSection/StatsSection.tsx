"use client";

import React, { useEffect, useState } from "react";
import scss from "./StatsSection.module.scss";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const StatsSection = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation(0.2);
  const [languageBars, setLanguageBars] = useState([
    { name: "TypeScript", percent: 0, target: 45 },
    { name: "JavaScript", percent: 0, target: 30 },
    { name: "SCSS/CSS", percent: 0, target: 20 },
    { name: "HTML", percent: 0, target: 5 }
  ]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLanguageBars((prev) =>
        prev.map((lang) => ({
          ...lang,
          percent: lang.target
        }))
      );
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="stats" className={scss.stats} ref={sectionRef}>
      <div className="container">
        <div className={scss.sectionHeader}>
          <div className={`${scss.sectionLabel} ${isVisible ? scss.visible : ""}`}>The numbers</div>
          <h2 className={`${scss.sectionTitle} ${isVisible ? scss.visible : ""}`}>GitHub Stats</h2>
        </div>

        <div className={`${scss.statsGrid} ${isVisible ? scss.visible : ""}`}>
          <div className={scss.statsCard}>
            <div className={scss.streakDisplay}>
              <div className={scss.streakNumber}>406</div>
              <div className={scss.streakLabel}>Day Contribution Streak</div>
            </div>
          </div>

          <div className={scss.statsCard}>
            <div className={scss.statsCardTitle}>Most Used Languages</div>
            <div className={scss.languagesList}>
              {languageBars.map((lang) => (
                <div key={lang.name} className={scss.languageItem}>
                  <div className={scss.languageName}>{lang.name}</div>
                  <div className={scss.languageBar}>
                    <div className={scss.languageBarFill} style={{ width: `${lang.percent}%` }}></div>
                  </div>
                  <div className={scss.languagePercent}>{lang.target}%</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
