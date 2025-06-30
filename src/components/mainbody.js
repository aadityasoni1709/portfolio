import React from "react";
import { FaFacebookF, FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

function MainBody() {
  return (
    <div style={{ textAlign: "center", color: "white", padding: "50px" }}>
      <img
        src="/aaditya.jpg"
        alt="Aaditya Soni"
        width="180"
        height="180"
        style={{ objectFit: "cover", borderRadius: "50%" }}
        loading="lazy"
        decoding="async"
      />
      <h2 className="fw-bold">Aaditya Soni</h2>
      <p>I am a student learning Web Developement and want to become a developer.
        <br />
        I am currently learning React.js and Next.js.</p>
        
      
      <div style={{ display: "flex", justifyContent: "center", gap: "15px", marginTop: "20px", fontSize: "20px" }}>
        <a href="https://www.instagram.com/swarnkar._.aaditya" className="text-white" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        <a href="https://github.com/Amit51106" className="text-white" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
      </div>
    </div>
  );
}

export default MainBody;

// This component displays a profile section with an image, name, description, and social media links.
// It uses React Icons for social media icons and styles the section with inline CSS.