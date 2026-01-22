import React from "react";
import scss from "./Footer.module.scss";
import { FaGithub, FaLinkedin, FaTelegram, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className={scss.footer}>
      <div className="container">
        <div className={scss.footerSocials}>
          <a
            href="https://github.com/Joaninnn"
            target="_blank"
            rel="noopener noreferrer"
            className={scss.footerSocialLink}
          >
            <FaGithub size={20} />
          </a>
          <a
            href="mailto:nurmuhammedaltybaev@gmail.com"
            className={scss.footerSocialLink}
          >
            <MdEmail size={20} />
          </a>
          <a
            href="https://t.me/joaninnn"
            target="_blank"
            rel="noopener noreferrer"
            className={scss.footerSocialLink}
          >
            <FaTelegram size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/nurmuhammet-altybaev"
            target="_blank"
            rel="noopener noreferrer"
            className={scss.footerSocialLink}
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="https://www.instagram.com/joaninnn_"
            target="_blank"
            rel="noopener noreferrer"
            className={scss.footerSocialLink}
          >
            <FaInstagram size={20} />
          </a>
        </div>
        <div className={scss.footerCopyright}>
          © {new Date().getFullYear()} Nurmuhammet Altybaev. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
