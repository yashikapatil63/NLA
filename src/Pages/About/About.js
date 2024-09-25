import React from 'react';
import './About.css';
import profile from '../../Assets/profile_photo.jpg';

const About = () => {
  const teamMembers = [
    { name: 'John Doe', position: 'CEO & Founder', photoUrl: profile },
    { name: 'Jane Smith', position: 'Chief Technology Officer', photoUrl: profile },
    { name: 'Emily Johnson', position: 'Lead Developer', photoUrl: profile },
    { name: 'Michael Brown', position: 'Project Manager', photoUrl: profile },
    { name: 'Sarah Williams', position: 'UX/UI Designer', photoUrl: profile },
  ];

  return (
    <div className="about-page">
      <section className="hero-section">
        <div className="hero-content">
          <h1>About Us</h1>
          <p>We are a dynamic IT service company delivering cutting-edge solutions across various domains, driving success for businesses worldwide.</p>
        </div>
      </section>

      <section className="team-section">
        <h2>Meet Our Team</h2>
        <div className="team-container">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-card">
              <img src={member.photoUrl} alt={member.name} />
              <h3>{member.name}</h3>
              <p>{member.position}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="values-section">
        <h2>Our Core Values</h2>
        <div className="values-container">
          <div className="value-card">
            <h3>Innovation</h3>
            <p>We constantly innovate to provide the most advanced solutions in the tech world.</p>
          </div>
          <div className="value-card">
            <h3>Integrity</h3>
            <p>Honesty and transparency are at the heart of everything we do.</p>
          </div>
          <div className="value-card">
            <h3>Customer Focus</h3>
            <p>Our customers are our priority, and we strive to exceed their expectations.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
