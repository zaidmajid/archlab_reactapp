import React, { useEffect, useRef } from "react";
import "./PricingSection.css";

// Dummy data for pricing plans
const pricingPlans = [
  {
    title: "Basic",
    price: 78,
    features: [
      "Planning Solution",
      "10 Construction Drawings",
      "Selection Materials",
      "Unlimited Revision",
    ],
    image: "/src/assets/images/plan1.jpg", 
  },
  {
    title: "Standard",
    price: 88,
    features: [
      "Planning Solution",
      "10 Construction Drawings",
      "Selection Materials",
      "Unlimited Revision",
    ],
    image: "/src/assets/images/plan2.jpg", 
  },
  {
    title: "Premium",
    price: 98,
    features: [
      "Planning Solution",
      "10 Construction Drawings",
      "Selection Materials",
      "Unlimited Revision",
    ],
    image: "/src/assets/images/plan3.jpg", 
  },
];

const PricingSection = () => {
  const pricingRef = useRef(null); 

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in"); 
          }
        });
      },
      {
        threshold: 0.2, 
      }
    );

    const elements = pricingRef.current.querySelectorAll(
      ".pricing-section h1, .pricing-section h2, .pricing-card"
    );
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="pricing-section" ref={pricingRef}>
      <h1>PRICING</h1>
      <h2>Price & Plans</h2>
      <div className="pricing-cards">
        {pricingPlans.map((plan, index) => (
          <div className="pricing-card" key={index}>
            <div className="card-image">
              <img src={plan.image} alt={`${plan.title} Plan`} />
            </div>
            <ul className="feature-list">
              {plan.features.map((feature, idx) => (
                <li key={idx}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="none"
                    className="bi bi-check-circle-fill"
                    viewBox="0 0 16 16"
                    style={{ marginRight: '8px' }}
                  >
                    <path
                      fill="#96bb7c" 
                      d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.672 10.828a.75.75 0 0 0 1.06 0L11.75 6.81a.75.75 0 1 0-1.06-1.06L7 9.44 5.312 7.75a.75.75 0 0 0-1.06 1.06l2.42 2.42z"
                    />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
            <div className="price-button-container">
              <div className="price-section">
                <span className="price">${plan.price}</span>
                <span className="per-month">/mos</span>
              </div>
              <button className="get-started-btn">Get Started</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingSection;
