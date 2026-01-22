import React from "react";


import HeroSection from "./homeSections/HeroSection/HeroSection";
import AboutSection from "./homeSections/AboutSection/AboutSection";
import TechStackSection from "./homeSections/TechStackSection/TechStackSection";
import StatsSection from "./homeSections/StatsSection/StatsSection";
import ProjectsSection from "./homeSections/ProjectsSection/ProjectsSection";
import ContactSection from "./homeSections/ContactSection/ContactSection";
import Navigation from "../layout/Navigation/Navigation";
import Footer from "../layout/Footer/Footer";
import BackgroundEffects from "../layout/BackgroundEffects/BackgroundEffects";

const HomePage = () => {
  return (
    <div>
      <BackgroundEffects />
      <Navigation />
      <HeroSection />
      <AboutSection />
      <TechStackSection />
      <StatsSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default HomePage;
