import React from "react";
import SideBody from "@/components/sidebody";
import MainBody from "@/components/mainbody";
import { Col, Container, Row } from "react-bootstrap";

const Anirudh = () => {
  return (
    <Container fluid className="bg-dark text-white min-vh-100">
      <Row>
        <Col md={3} className="p-0">
          <SideBody />
        </Col>
        <Col md={9} className="d-flex align-items-center justify-content-center">
          <MainBody />
        </Col>
      </Row>
    </Container>
  );
};

export default Anirudh;
































// "use client";
// import React, { useState } from 'react';
// import styles from './page.module.css';
// import {FaHome,FaUser,FaCog,FaBriefcase,FaNewspaper,FaEnvelope,FaFacebookF,FaInstagram,FaTwitter,FaTiktok} from 'react-icons/fa';
// import { Container, Row, Col } from "react-bootstrap";

// export default function Home() {
//   const [showContact, setShowContact] = useState(false);
//   const [activeTab, setActiveTab] = useState("home"); // NEW

//   // Using react-bootstrap for Container, Row, Col layout

//   return (
//     <Container fluid className={styles.container}>
//       <Row className="min-vh-100">
//         {/* Sidebar */}
//           <Col
//             md={4}
//             className={`${styles.sidebar} d-flex flex-column justify-content-between p-4`}
//             style={{ backgroundColor: "#000", minHeight: "100vh" }}
//           >
//             <div>
//               <h2 className={styles.logo}>JODHPUR</h2>
//               <nav className={styles.navMenu}>
//                 <div
//             style={{ cursor: 'pointer' }}
//             onClick={() => { setActiveTab("home"); setShowContact(false); }}
//               >
//                 <FaHome /><span style={{ color: "white" }}>Home</span>
//               </div>
//               <div
//                 style={{ cursor: 'pointer' }}
//                 onClick={() => { setActiveTab("about"); setShowContact(false); }}
//               >
//                 <FaUser /><span style={{ color: "white" }}>About</span>
//               </div>
//               <div
//                 style={{ cursor: 'pointer' }}
//                 onClick={() => { setActiveTab("service"); setShowContact(false); }}
//               >
//                 <FaCog /><span style={{ color: "white" }}>Service</span>
//               </div>
//               <div
//                 style={{ cursor: 'pointer' }}
//                 onClick={() => { setActiveTab("portfolio"); setShowContact(false); }}
//               >
//                 <FaBriefcase /><span style={{ color: "white" }}>Portfolio</span>
//               </div>
//               <div
//                 style={{ cursor: 'pointer' }}
//                 onClick={() => { setActiveTab("news"); setShowContact(false); }}
//               >
//                 <FaNewspaper /><span style={{ color: "white" }}>News</span>
//               </div>
//               <div
//                 style={{ cursor: 'pointer' }}
//                 onClick={() => setShowContact((prev) => !prev)}
//               >
//                 <FaEnvelope /><span style={{ color: "white" }}>Contact</span>
//               </div>
//               {showContact && (
//                 <div className={styles.contactPopup} onClick={() => setShowContact(false)}>
//                   <div className={styles.contactPopupContent} onClick={e => e.stopPropagation()}>
//                     <div style={{ color: "white" }}>
//                     <h2>Contact Details</h2>
//                     <p><strong>Address:</strong> Jodhpur, Rajasthan, India</p>
//                     <p><strong>Phone:</strong> 9313816076</p>
//                     <p><strong>Email:</strong> anirudh5687@gmail.com</p>
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </nav>
//           </div>
//           <div className={styles.footer}>
//             <div style={{ color: "white" }}>
//               <p>© 2025 Jodhpur</p>
//             <p>Created by <span>-Anirudh Singh</span></p>
//             </div>
//           </div>
//         </Col>

//         {/* Main Content */}
//         <Col
//           md={8}
//           className={`${styles.mainContent} d-flex flex-column justify-content-center align-items-center p-5`}
//           style={{ minHeight: "100vh" }}
//         >
//           {activeTab === "home" && (
//             <div className={styles.profileContent}>
//               <div className={styles.profilePhoto}>
//                 <img
//                   src="/goku.jpg"
//                   alt="Anirudh Singh"
//                   width={180}
//                   height={180}
//                   className={styles.Image}
//                   style={{ objectFit: "cover", borderRadius: "50%" }}
             
//                 />
//               </div>
//               <div className={styles.profileInfo}>
//                 <h1 className={styles.name}>Anirudh Singh</h1>
//                 <p className={styles.description}>
//                   I am a student of JIET and I want to become a WEB DEVLOPER with a passion for creating dynamic and responsive web applications. I have experience in both front-end and back-end development, and I love to learn new technologies and improve my skills.
//                 </p>
//                 <div className={styles.socialIcons}>
//                   <FaFacebookF />
//                   <a
//                     href="https://instagram.com/_ask_0075"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     style={{ color: "inherit" }}
//                   >
//                     <FaInstagram />
//                   </a>
//                   <FaTwitter />
//                   <FaTiktok />
//                 </div>
//               </div>
//             </div>
//           )}
//           {activeTab === "about" && (
//             <div className={styles.profileContent}>
//               <div className={styles.profileInfo}>
//                 <h1 className={styles.name}>About Me</h1>
//                 <p className={styles.description}>
//                   I am Anirudh Singh, a WEB Developer working on various projects to enhance my skills. I am currently studying at JIET and I am passionate about web development. I love to create dynamic and responsive web applications that provide a great user experience.
//                   I am always eager to learn new technologies and improve my skills. I have experience in both front-end and back-end development, and I am proficient in HTML, CSS, JavaScript, React, Node.js, and MongoDB.
//                   I am currently pursuing my BTech CSE from JIET [Jodhpur Institute of technology] and preparing for placements. I am looking for opportunities to work on real-world projects and gain practical experience in web development.
//                 </p>
//               </div>
//             </div>
//           )}
//         </Col>
//       </Row>
//     </Container>
//   );
// }











// import Image from "next/image";
// import styles from "./page.module.css";
// import Link from "next/link";
// import { Container, Row, Col } from "react-bootstrap";
// import { useState } from "react";

// export default function Home() {
//   const [showContact, setShowContact] = useState(false);

//   return (
//     <Container fluid className={styles.mainContainer}>
//       <Row className="min-vh-100">
//         {/* Left Section: Navigation */}
//         <Col
//           md={4}
//           className={`${styles.leftSection} d-flex flex-column justify-content-center align-items-start p-5`}
//           style={{ background: "#f8f9fa", minHeight: "100vh" }}
//         >
//           {/* City Name on Top */}
//           <div className="mb-4">
//             <strong style={{ fontSize: "1.3rem" }}>Jodhpur</strong>
//           </div>
//           <nav>
//             <ul className={styles.navList}>
//               <li>
//                 <a href="#home" className={styles.navLink}>Home</a>
//               </li>
//               <li>
//                 <Link href="/introduction" passHref legacyBehavior>
//                   <a className={styles.navLink}>Introduction</a>
//                 </Link>
//               </li>
//               <li>
//                 <a href="#service" className={styles.navLink}>Service</a>
//               </li>
//               <li>
//                 <a href="#portfolio" className={styles.navLink}>Portfolio</a>
//               </li>
//               <li>
//                 <a href="#news" className={styles.navLink}>News</a>
//               </li>
//               <li style={{ position: "relative" }}>
//                 <button
//                   type="button"
//                   className={styles.navLink}
//                   style={{
//                     display: "flex",
//                     alignItems: "center",
//                     background: "none",
//                     border: "none",
//                     padding: 0,
//                     cursor: "pointer"
//                   }}
//                   onClick={() => setShowContact((prev) => !prev)}
//                   aria-expanded={showContact}
//                   aria-controls="contact-details"
//                 >
//                   {/* Contact Icon (SVG) */}
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="18"
//                     height="18"
//                     fill="currentColor"
//                     viewBox="0 0 16 16"
//                     style={{ marginRight: "8px", verticalAlign: "middle" }}
//                   >
//                     <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2zm0 1h12a1 1 0 0 1 1 1v.217l-7 4.2-7-4.2V4a1 1 0 0 1 1-1zm13 2.383v6.634l-4.708-2.825L15 5.383zm-.034 7.384L8 8.708l-6.966 4.059A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.233zM1 12.017V5.383l4.708 2.809L1 12.017z"/>
//                   </svg>
//                   Contact
//                 </button>
//                 {/* Contact Details */}
//                 {showContact && (
//                   <div
//                     id="contact-details"
//                     style={{
//                       marginLeft: "26px",
//                       fontSize: "0.95rem",
//                       color: "#555",
//                       background: "#fff",
//                       border: "1px solid #ddd",
//                       borderRadius: "6px",
//                       padding: "10px 16px",
//                       position: "absolute",
//                       left: 0,
//                       top: "110%",
//                       zIndex: 10,
//                       boxShadow: "0 2px 8px rgba(0,0,0,0.08)"
//                     }}
//                   >
//                     <div>Phone: <a href="tel:9313816076" style={{ color: "#555", textDecoration: "none" }}>9313816076</a></div>
//                     <div>Email: <a href="mailto:anirudh5687@gmail.com" style={{ color: "#555", textDecoration: "none" }}>anirudh5687@gmail.com</a></div>
//                   </div>
//                 )}
//               </li>
//             </ul>
//           </nav>
//         </Col>

//         {/* Right Section: Profile */}
//         <Col
//           md={8}
//           className={`${styles.rightSection} d-flex flex-column justify-content-center align-items-center p-5`}
//           style={{ minHeight: "100vh" }}
//         >
//           <div className="text-center">
//             {/* Profile Photo */}
//             <Image
//               src="/goku.jpg"
//               alt="Anirudh Singh"
//               width={180}
//               height={180}
//               className={styles.Image}
//               style={{ objectFit: "cover", borderRadius: "50%" }}
//             />
//             <h1 className={styles.title} style={{ marginTop: "1.5rem" }}>
//               Anirudh Singh
//             </h1>
//             <h3 className={styles.profession}>Full Stack Developer</h3>
//           </div>
//         </Col>
//       </Row>
//     </Container>
//   );


// }
