import React from 'react';
import './LogoCarousel.css';

const LogoCarousel = () => {
  const logos = [
    { src: 'path-to-cambrian-logo', alt: 'Cambrian' },
    { src: 'path-to-commvault-logo', alt: 'Commvault' },
    { src: 'path-to-crompton-logo', alt: 'Crompton' },
    { src: 'path-to-seclock-logo', alt: 'Seclock' },
    { src: 'path-to-softwareag-logo', alt: 'Software AG' },
    { src: 'path-to-aumni-logo', alt: 'Aumni' },
  ];

  return (
    <div className="logo-carousel">
      <div className="carousel-track">
        {logos.map((logo, index) => (
          <div key={index} className="logo-item">
            <img src={logo.src} alt={logo.alt} />
          </div>
        ))}
        {/* Duplicating logos for smooth continuous scroll */}
        {logos.map((logo, index) => (
          <div key={`duplicate-${index}`} className="logo-item">
            <img src={logo.src} alt={logo.alt} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoCarousel;
