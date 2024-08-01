import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();
  const navItemsRef = useRef([]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
        }
      });
    }, observerOptions);

    navItemsRef.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => {
      navItemsRef.current.forEach((item) => {
        if (item) observer.unobserve(item);
      });
    };
  }, []);

  const handleMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">Archlab</div>
      <ul className={`navbar-nav ${isMobileMenuOpen ? 'show' : ''}`}>
        {[
          { path: '/', label: 'Home' },
          { path: '/about', label: 'About' },
          { path: '/services', label: 'Services' },
          { path: '/projects', label: 'Projects' },
          { path: '/team', label: 'Team' },
          { path: '/blog', label: 'Blog' },
          { path: '/contact', label: 'Contact' },
        ].map((item, index) => (
          <li
            className={`nav-item ${
              location.pathname === item.path ? 'active' : ''
            }`}
            key={index}
            ref={(el) => (navItemsRef.current[index] = el)}
            onClick={() => setIsMobileMenuOpen(false)} 
          >
            <Link to={item.path} className="nav-link">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
      <button className="menu-icon" onClick={handleMenuToggle}>
        {/* Menu icon */}
        <span className={`icon-bar ${isMobileMenuOpen ? 'open' : ''}`}></span>
        <span className={`icon-bar ${isMobileMenuOpen ? 'open' : ''}`}></span>
        <span className={`icon-bar ${isMobileMenuOpen ? 'open' : ''}`}></span>
      </button>
    </nav>
  );
};

export default Navbar;
