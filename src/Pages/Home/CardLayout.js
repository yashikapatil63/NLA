import React from 'react';
import './CardLayout.css';

const CardLayout = () => {
  return (
    <div className="services-container">
      <h2 className="services-heading">Secure the Success of Your IT Initiative</h2>
      <div className="services-grid">
        <div className="service-card">
          <h3>Expertise and Innovation</h3>
          <p>Our team possesses the expertise to tackle complex challenges and deliver effective solutions.</p>
        </div>
        <div className="service-card">
          <h3>Customized Solutions</h3>
          <p>We understand that every business is unique, and we take a personalized approach to each project.</p>
        </div>
        <div className="service-card">
          <h3>Cutting-Edge Technology</h3>
          <p>We leverage the latest technologies and industry best practices to deliver innovative solutions.</p>
        </div>
        <div className="service-card">
          <h3>Unmatched Support</h3>
          <p>We are committed to providing exceptional customer support. Our dedicated team is available to assist you.</p>
        </div>
      </div>
    </div>
  );
};

export default CardLayout;