import React, { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header/Header'; 
import Navbar from './components/Navbar/Navbar'; 
import Service from './components/Service/Service'; 
import Request from './components/Request/Request';
import StatsSection from './components/StatsSection/StatsSection';
import Project from './components/Project/Project';
import About from './components/About/About'; 
import Testimonial from './components/Testimonial/Testimonial';
import PricingSection from './components/PricingSection/PricingSection';
import BlogSection from './components/BlogSection/BlogSection';
import Footer from './components/Footer/Footer';
import ProjectPage from './components/ProjectPage/ProjectPage';
import ServicesPage from './components/ServicesPage/ServicesPage';
import './App.css'; 
import TeamPage from './components/TeamPage/Teampage';
import BlogPage from './components/BlogPage/BlogPage';
import ContactPage from './components/ContactPage/ContactPage';
import ScrollToTop from './components/ScrollToTop'; 

function App() {
  const [isSticky, setIsSticky] = useState(false);
  const location = useLocation();

  const handleScroll = () => {
    setIsSticky(window.scrollY > 100);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <ScrollToTop /> {/* Ensure this is placed inside the Router context */}
      {location.pathname !== '/about' && location.pathname !== '/contact' && location.pathname !== '/projects' && location.pathname !== '/services' && location.pathname !== '/team' && location.pathname !== '/blog' && <Header />}
      <div className={`sticky-navbar ${isSticky ? 'sticky' : ''}`}>
        <Navbar />
      </div>
      <main>
        <Routes>
          <Route path="/projects" element={<ProjectPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* Add other routes here */}
        </Routes>
      </main>
      {location.pathname === '/' && (
        <>
          <Request />
          <StatsSection />
          <Project />
          <Testimonial />
          <PricingSection />
          <BlogSection />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
