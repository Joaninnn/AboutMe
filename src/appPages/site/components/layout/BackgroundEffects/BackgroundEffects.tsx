"use client";

import React, { useEffect, useState } from "react";
import scss from "./BackgroundEffects.module.scss";
import { usePathname } from "next/navigation";

const BackgroundEffects = () => {
    const pathname = usePathname();
    const [arrowsOpacity, setArrowsOpacity] = useState(1);

    useEffect(() => {
        // Progress bar on scroll
        const handleScroll = () => {
            const windowHeight =
                document.documentElement.scrollHeight -
                document.documentElement.clientHeight;
            const scrolled = (window.scrollY / windowHeight) * 100;
            const progressBar = document.getElementById("progressBar");
            if (progressBar) {
                progressBar.style.width = scrolled + "%";
            }

            // Определяем текущую секцию для изменения opacity стрелок
            const heroSection = document.getElementById("hero");
            const footerSection = document.querySelector("footer");

            if (heroSection && footerSection) {
                const heroRect = heroSection.getBoundingClientRect();
                const footerRect = footerSection.getBoundingClientRect();

                // Проверяем, находимся ли мы в Hero секции
                const isInHero =
                    heroRect.top <= window.innerHeight / 2 &&
                    heroRect.bottom >= window.innerHeight / 2;

                // Проверяем, находимся ли мы в Footer секции
                const isInFooter = footerRect.top <= window.innerHeight;

                if (isInHero) {
                    setArrowsOpacity(1); // 100% в Hero
                } else if (isInFooter) {
                    setArrowsOpacity(1); // 100% в Footer
                } else {
                    setArrowsOpacity(0.4); // 30% в остальных секциях
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // Вызываем сразу для начальной установки
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            {/* Progress Bar */}
            <div id="progressBar" className={scss.progressBar}></div>

            {/* Vertical Side Text */}
            <div className={scss.verticalText}>JOANINNN</div>

            {/* Animated Tech Lightning Background */}
            <div
                className={scss.techArrowsBg}
                style={{ opacity: arrowsOpacity }}
            >
                {[...Array(10)].map((_, i) => (
                    <div key={i} className={scss.arrow}></div>
                ))}
            </div>
        </>
    );
};

export default BackgroundEffects;
