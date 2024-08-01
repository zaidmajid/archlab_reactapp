import React from 'react';
import './TeamPage.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { useInView } from 'react-intersection-observer';

const TeamPage = () => {
  const teamData = [
    {
      name: 'John Doe',
      occupation: 'CEO & Founder',
      image: '/src/assets/images/team1.jpg',
    },
    {
      name: 'Jane Smith',
      occupation: 'CTO',
      image: '/src/assets/images/team2.jpg',
    },
    {
      name: 'Alice Johnson',
      occupation: 'Lead Designer',
      image: '/src/assets/images/team3.jpg',
    },
    {
      name: 'Mike Brown',
      occupation: 'Project Manager',
      image: '/src/assets/images/team4.jpg',
    },
    {
      name: 'Emily White',
      occupation: 'Marketing Head',
      image: '/src/assets/images/team5.jpg',
    },
    {
      name: 'Robert Green',
      occupation: 'Developer',
      image: '/src/assets/images/team6.jpg',
    },
    {
      name: 'Jessica Blue',
      occupation: 'UX Designer',
      image: '/src/assets/images/team7.jpg',
    },
    {
      name: 'David Black',
      occupation: 'Data Scientist',
      image: '/src/assets/images/team8.jpg',
    },
  ];

  return (
    <div className="team-page">
      <Navbar />
      <div className="team-page__hero-section">
        <div className="team-page__overlay"></div>
        <p className="breadcrumb_team">Home &gt; Team</p>
        <h1>Meet Our Team</h1>
      </div>
      <div className="team-page__team-section">
        {teamData.map((member, index) => {
          const [ref, inView] = useInView({
            triggerOnce: true, 
            threshold: 0.1,    
          });

          return (
            <div
              className={`team-page__team-member ${inView ? 'animate' : ''}`}
              key={index}
              ref={ref} 
            >
              <img src={member.image} alt={`${member.name}`} />
              <div className="team-page__info">
                <h2 className="team-page__name">{member.name}</h2>
                <p className="team-page__occupation">{member.occupation}</p>
              </div>
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

export default TeamPage;
