import React, { useEffect, useRef } from "react";
import "./ContactPage.css"; // Import the CSS file for styling
import Navbar from "../Navbar/Navbar";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa"; // Import icons
import Footer from "../Footer/Footer";

const ContactPage = () => {
  const infoRef = useRef(null);

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

    const infoItems = infoRef.current.querySelectorAll(
      ".contact-page__info-item"
    );
    infoItems.forEach((el) => observer.observe(el));

    return () => {
      infoItems.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="contact-page">
      <header className="contact-page__header">
        <Navbar />
        <div className="contact-page__hero-section">
          <h1>Contact Us</h1>
        </div>
      </header>
      <main className="contact-page__main">
        <form className="contact-page__form">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="subject">Subject:</label>
          <input type="text" id="subject" name="subject" required />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required></textarea>

          <button type="submit">Send</button>
        </form>

        <div className="contact-page__info">
          <p>
            If you have any questions, please do not hesitate to send us a
            message.
          </p>
          <div className="contact-page__info-details" ref={infoRef}>
            <div className="contact-page__info-item">
              <FaMapMarkerAlt className="contact-icon" />
              <div>
                <h3>Address:</h3>
                <p>198 West 21th Street, Suite 721 New York NY 10016</p>
              </div>
            </div>
            <div className="contact-page__divider"></div> {/* Divider */}
            <div className="contact-page__info-item">
              <FaPhoneAlt className="contact-icon" />
              <div>
                <h3>Phone:</h3>
                <p>+ 1235 2355 98</p>
              </div>
            </div>
            <div className="contact-page__divider"></div> {/* Divider */}
            <div className="contact-page__info-item">
              <FaEnvelope className="contact-icon" />
              <div>
                <h3>Email:</h3>
                <p>info@yoursite.com</p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default ContactPage;
