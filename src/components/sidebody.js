"use client";
// This file is a React component that renders a sidebar with navigation links and a footer.
import React,{ useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../components/page.module.css";
import {FaHome,FaUser,FaCog,FaBriefcase,FaNewspaper,FaEnvelope,FaFacebookF,FaInstagram,FaTwitter,FaTiktok} from 'react-icons/fa';
import Link from 'next/link';


// import { useState } from "react";

function SideBody() {
  const [activeTab, setActiveTab] = useState("home");
  const [showContact, setShowContact] = useState(false);

  return (
    <Container fluid className={styles.container}>
      <Row className="min-vh-100">
        {/* Sidebar */}
          <Col
            md={7}
            className={`${styles.sidebar} d-flex flex-column justify-content-between p-4`}
            style={{ backgroundColor: "#000",minHeight: "100vh" }}
          >
            <div>
              <h2 className={styles.button}>KOTA</h2>
              <nav className={styles.navMenu}>
                <div
            style={{ cursor: 'pointer' }}
            onClick={() => { setActiveTab("home"); setShowContact(false); }}
              >
                <FaHome /><span style={{ color: "white" }}>Home</span>
              </div>
              <div
                style={{ cursor: 'pointer' }}
                onClick={() => { setActiveTab("about"); setShowContact(false); }}
              >
                <FaUser /><span style={{ color: "white" }}>About</span>
              </div>
              <div
                style={{ cursor: 'pointer' }}
                onClick={() => { setActiveTab("service"); setShowContact(false); }}
              >
                <FaCog /><span style={{ color: "white" }}>Service</span>
              </div>
              <div
                style={{ cursor: 'pointer' }}
                onClick={() => { setActiveTab("portfolio"); setShowContact(false); }}
              >
                <FaBriefcase /><span style={{ color: "white" }}>Portfolio</span>
              </div>
              <div
                style={{ cursor: 'pointer' }}
                onClick={() => { setActiveTab("news"); setShowContact(false); }}
              >
                <FaNewspaper /><span style={{ color: "white" }}>News</span>
              </div>
              <div
                style={{ cursor: 'pointer' }}
                onClick={() =>{ setShowContact("false"); setActiveTab("contact");}}
              >
                

                 <FaEnvelope /><span style={{ color: "white" }}>Contact</span>
               </div>
               {showContact && (
                <div className={styles.contactPopup} onClick={() => setShowContact(false)}>
                  <div className={styles.contactPopupContent} onClick={e => e.stopPropagation()}>
                    <div style={{ color: "white" }}>
                    <h2>Contact Details</h2>
                    <p><strong>Address:</strong> Kota, Rajasthan, India</p>
                    <p><strong>Phone:</strong> 9783734444</p>
                    <p><strong>Email:</strong> aadityasoni9828273344@gmail.com</p>
                    </div>
                  </div>
                </div>
              )}
              
              
            </nav>
          </div>
          <div className={styles.footer}>
            <div style={{ color: "white" }}>
              <p>© 2025 Kota</p>
            <p>Created by <span>-Aaditya Soni</span></p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
    );
}

export default SideBody;

// This component renders a left sidebar with navigation items and a footer.
// The sidebar has a black background with white text, and the navigation items are styled as a list.
// The footer contains a copyright notice and a creator credit, styled in a smaller font size.