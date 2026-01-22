"use client";

import React, { useState } from "react";
import scss from "./ContactSection.module.scss";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const ContactSection = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation(0.2);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [status, setStatus] = useState<"idle" | "success" | "error" | "loading">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        
        setTimeout(() => {
          setStatus("idle");
        }, 5000);
      } else {
        setStatus("error");
        setTimeout(() => {
          setStatus("idle");
        }, 5000);
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setStatus("error");
      setTimeout(() => {
        setStatus("idle");
      }, 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className={scss.contact} ref={sectionRef}>
      <div className="container">
        <div className={scss.contactContainer}>
          <div className={scss.sectionHeader}>
            <div className={`${scss.sectionLabel} ${isVisible ? scss.visible : ""}`}>Get in touch</div>
            <h2 className={`${scss.sectionTitle} ${isVisible ? scss.visible : ""}`}>Contact Me</h2>
          </div>

          <p className={`${scss.contactIntro} ${isVisible ? scss.visible : ""}`}>
            Have a project in mind or want to collaborate? Feel free to reach out. 
            I&apos;m always open to discussing new opportunities and ideas.
          </p>

          <form className={`${scss.contactForm} ${isVisible ? scss.visible : ""}`} onSubmit={handleSubmit}>
            <div className={scss.formGroup}>
              <label htmlFor="name" className={scss.formLabel}>
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={scss.formInput}
                required
              />
            </div>

            <div className={scss.formGroup}>
              <label htmlFor="email" className={scss.formLabel}>
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={scss.formInput}
                required
              />
            </div>

            <div className={scss.formGroup}>
              <label htmlFor="message" className={scss.formLabel}>
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className={scss.formTextarea}
                required
              />
            </div>

            <button 
              type="submit" 
              className={scss.formSubmit}
              disabled={status === "loading"}
            >
              {status === "loading" ? "Sending..." : "Send Message"}
            </button>

            {status === "success" && (
              <div className={`${scss.formMessage} ${scss.success}`}>
                Message sent successfully! I&apos;ll get back to you soon.
              </div>
            )}
            {status === "error" && (
              <div className={`${scss.formMessage} ${scss.error}`}>
                Something went wrong. Please try again.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
