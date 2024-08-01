import React, { useEffect, useRef } from 'react';
import './Service.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilRuler, faEye, faDollarSign, faHome } from '@fortawesome/free-solid-svg-icons';

function Service() {
  const infoBoxRefs = useRef([]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-up');
        }
      });
    }, observerOptions);

    infoBoxRefs.current.forEach((box) => {
      if (box) observer.observe(box);
    });

    return () => {
      infoBoxRefs.current.forEach((box) => {
        if (box) observer.unobserve(box);
      });
    };
  }, []);

  return (
    <section className="service">
      <div className="info-sections">
        <div className="info-box" ref={(el) => (infoBoxRefs.current[0] = el)}>
          <FontAwesomeIcon icon={faPencilRuler} className="info-icon" />
          <h2>Design Process</h2>
          <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
        </div>
        <div className="info-box" ref={(el) => (infoBoxRefs.current[1] = el)}>
          <FontAwesomeIcon icon={faEye} className="info-icon" />
          <h2>Supervision</h2>
          <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
        </div>
        <div className="info-box" ref={(el) => (infoBoxRefs.current[2] = el)}>
          <FontAwesomeIcon icon={faDollarSign} className="info-icon" />
          <h2>Budget Planning</h2>
          <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
        </div>
        <div className="info-box" ref={(el) => (infoBoxRefs.current[3] = el)}>
          <FontAwesomeIcon icon={faHome} className="info-icon" />
          <h2>Build a Home For You</h2>
          <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
        </div>
      </div>
    </section>
  );
}

export default Service;
