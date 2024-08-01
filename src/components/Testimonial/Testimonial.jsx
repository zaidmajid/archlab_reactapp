import React, { useEffect, useRef } from "react";
import "./Testimonial.css";

// Dummy data for testimonials
const testimonials = [
  {
    quote:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    name: "Roger Scott",
    position: "Marketing Manager",
    image: "/src/assets/images/project1.jpg", 
  },
  {
    quote:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    name: "Roger Scott",
    position: "Marketing Manager",
    image: "/src/assets/images/project3.jpg", 
  },
  {
    quote:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    name: "Roger Scott",
    position: "Marketing Manager",
    image: "/src/assets/images/project2.jpg",
  },
];

const Testimonial = () => {
  const containerRef = useRef(null); 

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("text-animate-up"); 
          }
        });
      },
      {
        threshold: 0.2, 
      }
    );

    const elements = containerRef.current.querySelectorAll(
      ".testimonial-container h1, .testimonial-container h2, .testimonial-quote, .testimonial-name, .testimonial-position"
    );
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="testimonial-container" ref={containerRef}>
      <h1>Testimonial</h1>
      <h2>Happy Clients</h2>
      <div className="testimonial-wrapper">
        {testimonials.map((testimonial, index) => (
          <div className="testimonial-card" key={index}>
            <div className="quote-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#96bb7c"
                viewBox="0 0 64 64"
                width="120"
                height="120"
              >
                <text
                  x="5"
                  y="40"
                  fontFamily="Arial"
                  fontSize="50"
                  fill="#96bb7c"
                >
                  “
                </text>
              </svg>
            </div>
            <p className="testimonial-quote">{testimonial.quote}</p>
            <div className="testimonial-info">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="testimonial-avatar"
              />
              <div className="testimonial-details">
                <div className="testimonial-name">{testimonial.name}</div>
                <div className="testimonial-position">
                  {testimonial.position}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="testimonial-navigation">
        <div className="dot active"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
    </div>
  );
};

export default Testimonial;
