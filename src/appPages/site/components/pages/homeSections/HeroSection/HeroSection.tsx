"use client";

import React, { useEffect, useState } from "react";
import scss from "./HeroSection.module.scss";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaTelegram, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import profile from "@/assets/hero.jpg";

const phrases = [
    "Building Clean Code",
    "Creating Scalable Apps",
    "Solving Real Problems",
    "Frontend Development",
];

const HeroSection = () => {
    const [typingText, setTypingText] = useState("");
    const [phraseIndex, setPhraseIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentPhrase = phrases[phraseIndex];
        const timeout = setTimeout(
            () => {
                if (!isDeleting) {
                    if (typingText.length < currentPhrase.length) {
                        setTypingText(
                            currentPhrase.slice(0, typingText.length + 1),
                        );
                    } else {
                        setTimeout(() => setIsDeleting(true), 2000);
                    }
                } else {
                    if (typingText.length > 0) {
                        setTypingText(
                            currentPhrase.slice(0, typingText.length - 1),
                        );
                    } else {
                        setIsDeleting(false);
                        setPhraseIndex((prev) => (prev + 1) % phrases.length);
                    }
                }
            },
            isDeleting ? 50 : 100,
        );

        return () => clearTimeout(timeout);
    }, [typingText, isDeleting, phraseIndex]);

    useEffect(() => {
        const handleScroll = () => {
            const heroPhoto = document.getElementById("heroPhoto");
            if (heroPhoto) {
                const scrolled = window.scrollY;
                if (scrolled > 100) {
                    heroPhoto.classList.add(scss.faded);
                } else {
                    heroPhoto.classList.remove(scss.faded);
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section id="hero" className={scss.hero}>
            <div className={scss.bgDecoration}></div>
            <div className="container">
                <div className={scss.heroContainer}>
                    <div className={scss.heroContent}>
                        <div className={scss.heroLabel}>Frontend Developer</div>
                        <h1 className={scss.heroTitle}>
                            Nurmuhammet
                            <br />
                            Altybaev
                        </h1>
                        <div className={scss.heroSubtitle}>
                            <span>{typingText}</span>
                            <span className={scss.typingCursor}></span>
                        </div>
                        <p className={scss.heroDescription}>
                            Specialized in React, Next.js, and TypeScript.
                            Focused on creating clean, scalable, and modern web
                            applications. I value structure, performance, and
                            long-term maintainability over hype.
                        </p>
                        <div className={scss.heroCta}>
                            <a
                                href="#projects"
                                className={`${scss.btn} ${scss.btnPrimary}`}
                            >
                                View Projects
                            </a>
                            <a href="#contact" className={scss.btn}>
                                Get in Touch
                            </a>
                        </div>
                        <div className={scss.socialLinks}>
                            <a
                                href="https://github.com/Joaninnn"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={scss.socialLink}
                                title="GitHub"
                            >
                                <FaGithub size={20} />
                            </a>
                            <a
                                href="mailto:nurmuhammedaltybaev@gmail.com"
                                className={scss.socialLink}
                                title="Email"
                            >
                                <MdEmail size={20} />
                            </a>
                            <a
                                href="https://t.me/joaninnn"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={scss.socialLink}
                                title="Telegram"
                            >
                                <FaTelegram size={20} />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/nurmuhammet-altybaev-50b222338"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={scss.socialLink}
                                title="LinkedIn"
                            >
                                <FaLinkedin size={20} />
                            </a>
                          
                        </div>
                    </div>

                    <div
                        className={`${scss.heroPhoto} ${scss.scrollFade}`}
                        id="heroPhoto"
                    >
                        <div className={scss.heroPhotoWrapper}>
                            <Image
                                src={profile}
                                alt="Nurmuhammet Altybaev"
                                fill
                                style={{ objectFit: "cover" }}
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
