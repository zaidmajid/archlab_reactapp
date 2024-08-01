// src/components/Request/Request.jsx
import React, { useEffect, useRef } from 'react';
import './Request.css'; // Import the CSS file for styling
import StatsSection from '../StatsSection/StatsSection';

const Request = () => {
  const textRefs = useRef([]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1, 
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('text-in-view');
        }
      });
    }, observerOptions);

    // Observe each text element
    textRefs.current.forEach((text) => {
      if (text) observer.observe(text);
    });

    // Clean up observer on component unmount
    return () => {
      textRefs.current.forEach((text) => {
        if (text) observer.unobserve(text);
      });
    };
  }, []);

  return (
    <div className="request-container">
      {/* Left Section - Heading and Paragraph */}
      <div className="left-section">
        <h1 ref={(el) => (textRefs.current[0] = el)}>ArchLab</h1>
        <p ref={(el) => (textRefs.current[1] = el)}>
          A small river named Duden flows by their place and supplies it with
          the necessary regelialia. It is a paradisematic country, in which
          roasted parts of sentences fly into your mouth.
        </p>
        <p ref={(el) => (textRefs.current[2] = el)}>
          On her way, she met a copy. The copy warned the Little Blind Text that
          where it came from, it would have been rewritten a thousand times and
          everything that was left from its origin would be the word "and" and
          the Little Blind Text should turn around and return to its own, safe
          country. But nothing the copy said could convince her and so it didn’t
          take long until a few insidious Copy Writers ambushed her, made her
          drunk with Longe and Parole, and dragged her into their agency, where
          they abused her for their.
        </p>
      </div>

      {/* Middle Section - Image */}
      <div className="image-section">
        <img src="/src/assets/images/hero2.jpg" alt="Building" />
      </div>

      {/* Right Section - Form */}
      <div className="form-section">
        <h2 ref={(el) => (textRefs.current[3] = el)}>Request A Quote</h2>
        <form>
          <div className="form-group">
            <label ref={(el) => (textRefs.current[4] = el)}>First Name</label>
            <input type="text" name="firstName" />
          </div>
          <div className="form-group">
            <label ref={(el) => (textRefs.current[5] = el)}>Last Name</label>
            <input type="text" name="lastName" />
          </div>
          <div className="form-group">
            <label ref={(el) => (textRefs.current[6] = el)}>Select Your Services</label>
            <select name="services">
              <option value="consulting">Consulting</option>
              <option value="design">Design</option>
              <option value="implementation">Implementation</option>
            </select>
          </div>
          <div className="form-group">
            <label ref={(el) => (textRefs.current[7] = el)}>Phone</label>
            <input type="tel" name="phone" />
          </div>
          <div className="form-group">
            <label ref={(el) => (textRefs.current[8] = el)}>Message</label>
            <textarea name="message"></textarea>
          </div>
          <button type="submit">Request A Quote</button>
        </form>
      </div>
      
    </div>
  );
};

export default Request;
