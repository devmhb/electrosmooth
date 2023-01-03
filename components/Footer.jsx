import React from "react";
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer-container">
      <p>2023 ElectroSmooth All rights reserverd</p>
      <p className="icons">
        <a
          href="http://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillInstagram />
        </a>
        <a href="http://twitter.com" target="_blank" rel="noopener noreferrer">
          <AiOutlineTwitter />
        </a>
      </p>
      <span className="developer">
        Developed by{" "}
        <a
          href="https://devmhb.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Mehedi Hasan
        </a>
      </span>
    </div>
  );
};

export default Footer;
