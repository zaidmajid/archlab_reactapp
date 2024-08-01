import React, { useRef, useState, useEffect } from 'react';
import CountUp from 'react-countup';
import './StatsSection.css';

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleItems, setVisibleItems] = useState(Array(4).fill(false)); 
  const ref = useRef(null);
  const itemRefs = useRef([]); 

  
  useEffect(() => {
    const observerOptions = {
      root: null,
      threshold: 0.1,
    };

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true); 
      } else {
        setIsVisible(false); 
      }
    }, observerOptions);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  // Observer for individual stat items
  useEffect(() => {
    const itemObserverOptions = {
      root: null,
      threshold: 0.1,
    };

    const itemObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setVisibleItems((prevItems) => {
            const newItems = [...prevItems];
            newItems[index] = true; // Set individual item visible
            return newItems;
          });
        }
      });
    }, itemObserverOptions);

    itemRefs.current.forEach((ref) => {
      if (ref) itemObserver.observe(ref);
    });

    return () => {
      itemRefs.current.forEach((ref) => {
        if (ref) itemObserver.unobserve(ref);
      });
    };
  }, []);

  const stats = [
    { end: 1000, text: 'YEARS OF EXPERIENCE' },
    { end: 2500, text: 'PROJECTS DONE' },
    { end: 500, text: 'LICENSED ARCHITECTS' },
    { end: 67, text: 'HAPPY CUSTOMERS' },
  ];

  return (
    <div className={`stats-container ${isVisible ? 'fade-in' : ''}`} ref={ref}>
      {stats.map((stat, index) => (
        <div
          key={index}
          className={`stat-item ${visibleItems[index] ? 'fade-in' : ''}`} 
          ref={(el) => (itemRefs.current[index] = el)}
        >
          <div className="number">
            {visibleItems[index] && <CountUp end={stat.end} duration={2} />}
          </div>
          <div className="text">{stat.text}</div>
        </div>
      ))}
    </div>
  );
};

export default StatsSection;
