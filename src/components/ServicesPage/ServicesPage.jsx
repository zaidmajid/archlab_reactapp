import React, { useEffect, useRef } from 'react';
import Navbar from '../Navbar/Navbar';
import { FaPaintBrush, FaCouch, FaHome, FaTools, FaStar, FaLightbulb, FaPenNib, FaBuilding } from 'react-icons/fa';
import './ServicesPage.css';
import PricingSection from '../PricingSection/PricingSection';
import Footer from '../Footer/Footer';
import ServicesImage from '../../assets/images/ServicesPage.jpg';

const services = [
  { title: 'Planning', description: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.', icon: <FaLightbulb /> },
  { title: 'Interior Design', description: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.', icon: <FaPaintBrush /> },
  { title: 'Exterior Design', description: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.', icon: <FaHome /> },
  { title: 'Decoration', description: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.', icon: <FaStar /> },
  { title: 'Furniture', description: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.', icon: <FaCouch /> },
  { title: 'Consultation', description: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.', icon: <FaPenNib /> },
  { title: 'Restoration', description: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.', icon: <FaTools /> },
  { title: 'Building', description: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.', icon: <FaBuilding /> },
];

const ServicesPage = () => {
  const servicesContainerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-up');
          }
        });
      },
      {
        threshold: 0.2, 
      }
    );

    const serviceItems = servicesContainerRef.current.querySelectorAll('.service-item');
    serviceItems.forEach((el) => observer.observe(el));

    return () => {
      serviceItems.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="services-page" style={{ '--background-image': `url(${ServicesImage})` }}>
      <Navbar />
      <div className="Service-page__hero-section">
        <div className="team-page__overlay"></div>
        <p className="breadcrumb">About &gt; Services</p>
        <h1>Our Services</h1>
      </div>
      <div className="services-container" ref={servicesContainerRef}>
        {services.map((service, index) => (
          <div key={index} className="service-item">
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
      <PricingSection />
      <Footer />
    </div>
  );
};

export default ServicesPage;
