import React, { useEffect, useState, useRef } from "react";
import Navbar from "../Navbar/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";

function Header() {
  const [isSticky, setSticky] = useState(false);
  const headerRef = useRef(null);
  const stickyNavRef = useRef(null);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-up");
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    const headerElements = headerRef.current.querySelectorAll(".animate");
    headerElements.forEach((el) => observer.observe(el));

    return () => {
      headerElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (stickyNavRef.current) {
      stickyNavRef.current.classList.toggle("fade-in", isSticky);
    }
  }, [isSticky]);

  return (
    <header className="header">
      <div className="background-image"></div>
      <div className="header-content" ref={headerRef}>
        <div className="top-bar">
          <div className="logo">
          </div>
          <Navbar />
        </div>
        <div className="header-text animate">
          <h1>
            Modern <span>Innovative</span> Architecture
          </h1>
          <p>
            From as low as $20 A small river named Duden
            <br />
            flows by their place and supplies it with the necessary regelialia.
          </p>
          <div className="header-buttons animate">
            <button className="explore-projects">Explore Projects</button>
            <div className="watch-video">
              <FontAwesomeIcon icon={faPlay} className="video-icon" />
              <span>Watch Video</span>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`sticky-navbar ${isSticky ? "sticky" : ""}`}
        ref={stickyNavRef}
      >
        <Navbar />
      </div>
    </header>
  );
}

export default Header;
