// src/components/About/About.jsx

import React from "react";
import Navbar from "../Navbar/Navbar";
import Request from "../Request/Request";
import StatsSection from "../StatsSection/StatsSection";
import Testimonial from "../Testimonial/Testimonial"; // Correct name
import PricingSection from "../PricingSection/PricingSection"; // Correct name
import Footer from "../Footer/Footer";
import "./About.css";

const About = () => {
  return (
    <div className="about-page">
      <Navbar />

      <div className="about_background-image"></div>
      <section className="about-hero">
        <div className="hero-content">
          <p>Home &gt; About Us</p>
          <h1>About Us</h1>
        </div>
      </section>
      <Request />
      <StatsSection />
      <Testimonial />
      <PricingSection />
      <Footer />
    </div>
  );
};

export default About;
