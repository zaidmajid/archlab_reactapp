// src/components/ProjectPage/ProjectPage.jsx

import React, { useRef, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "./ProjectPage.css";
import PricingSection from "../PricingSection/PricingSection";

const projects = [
  {
    type: "EXTERIOR",
    date: "12/07/2020",
    title: "Geometric Building",
    description:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.",
    image: "/src/assets/images/project1.jpg",
    alignment: "right",
  },
  {
    type: "FURNITURE",
    date: "12/07/2020",
    title: "Twin Office",
    description:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.",
    image: "/src/assets/images/project2.jpg",
    alignment: "left",
  },
  {
    type: "BUILDING",
    date: "12/07/2020",
    title: "Cultural Complex Centre",
    description:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.",
    image: "/src/assets/images/project3.jpg",
    alignment: "right",
  },
  {
    type: "INTERIOR",
    date: "12/07/2020",
    title: "Modern Loft",
    description:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.",
    image: "/src/assets/images/project4.jpg",
    alignment: "left",
  },
  {
    type: "BUILDING",
    date: "12/07/2020",
    title: "Cultural Complex Centre",
    description:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.",
    image: "/src/assets/images/project3.jpg",
    alignment: "right",
  },
  {
    type: "INTERIOR",
    date: "12/07/2020",
    title: "Modern Loft",
    description:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.",
    image: "/src/assets/images/project4.jpg",
    alignment: "left",
  },
];

const ProjectPage = () => {
  const textRefs = useRef([]);
  const headersRefs = useRef([]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("text-in-view");
          entry.target.classList.remove("text-hidden");
        } else {
          entry.target.classList.add("text-hidden");
          entry.target.classList.remove("text-in-view");
        }
      });
    }, observerOptions);

    headersRefs.current.forEach((header) => {
      if (header) observer.observe(header);
    });

    textRefs.current.forEach((text) => {
      if (text) observer.observe(text);
    });

    return () => {
      headersRefs.current.forEach((header) => {
        if (header) observer.unobserve(header);
      });
      textRefs.current.forEach((text) => {
        if (text) observer.unobserve(text);
      });
    };
  }, []);

  return (
    <div className="project-page">
      <Navbar />
      <div className="project-background-image"></div>
      <section className="project_page-hero">
        <div className="hero_page-content">
          <p>Home &gt; Projects</p>
          <h1>Our Projects</h1>
        </div>
      </section>
      <div className="project_page-container">
        <h1
          className="header-hidden"
          ref={(el) => (headersRefs.current[0] = el)}
        >
          PROJECTS
        </h1>
        <h2
          className="header-hidden"
          ref={(el) => (headersRefs.current[1] = el)}
        >
          Our Unique Latest Projects
        </h2>
        {projects.map((project, index) => (
          <div key={index} className={`project_page-item ${project.alignment}`}>
            {project.alignment === "right" ? (
              <>
                <div
                  className="project_page-text text-hidden text-right"
                  ref={(el) => (textRefs.current[index * 4] = el)}
                >
                  <h3 ref={(el) => (textRefs.current[index * 4 + 1] = el)}>
                    {project.type} <span>{project.date}</span>
                  </h3>
                  <h4 ref={(el) => (textRefs.current[index * 4 + 2] = el)}>
                    {project.title}
                  </h4>
                  <p ref={(el) => (textRefs.current[index * 4 + 3] = el)}>
                    {project.description}
                  </p>
                  <a
                    href="#"
                    className="view-portfolio"
                    ref={(el) => (textRefs.current[index * 4 + 4] = el)}
                  >
                    VIEW PORTFOLIO
                  </a>
                </div>
                <div className="project-image image-right">
                  <img src={project.image} alt={project.title} />
                </div>
              </>
            ) : (
              <>
                <div className="project-image image-left">
                  <img src={project.image} alt={project.title} />
                </div>
                <div
                  className="project_page-text text-hidden text-left"
                  ref={(el) => (textRefs.current[index * 4] = el)}
                >
                  <h3 ref={(el) => (textRefs.current[index * 4 + 1] = el)}>
                    {project.type} <span>{project.date}</span>
                  </h3>
                  <h4 ref={(el) => (textRefs.current[index * 4 + 2] = el)}>
                    {project.title}
                  </h4>
                  <p ref={(el) => (textRefs.current[index * 4 + 3] = el)}>
                    {project.description}
                  </p>
                  <a
                    href="#"
                    className="view-portfolio"
                    ref={(el) => (textRefs.current[index * 4 + 4] = el)}
                  >
                    VIEW PORTFOLIO
                  </a>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
      <PricingSection />
      <Footer />
    </div>
  );
};

export default ProjectPage;
