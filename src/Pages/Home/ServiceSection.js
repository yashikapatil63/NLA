import React, { useState } from 'react';
import './ServiceSection.css';

const services = [
  {
    name: 'Cloud Migration',
    details: `We provide a full spectrum of cloud migration services designed to streamline your migration process...`,
    features: [
      'Project Discovery', 'Data Migration', 'Updating Architecture & Code',
      'Phase Migration', 'Mock Migration', 'Testing & Go Live'
    ]
  },
  {
    name: 'AI Solution',
    details: `We offer AI-powered solutions to help your business innovate and scale...`,
    features: [
      'Model Development', 'Data Processing', 'AI Deployment', 'Performance Monitoring'
    ]
  },
  {
    name: 'Industrial IIoT Services',
    details: `Enhance your industrial processes with advanced IoT technologies...`,
    features: [
      'Data Analytics', 'Remote Monitoring', 'Automation Integration', 'Predictive Maintenance'
    ]
  },
];

function ServiceSection() {
  const [selectedService, setSelectedService] = useState(services[0]);

  return (
    <div className="container">
      <div className="sidebar">
        {services.map((service, index) => (
          <div
            key={index}
            className={`menu-item ${selectedService.name === service.name ? 'active' : ''}`}
            onClick={() => setSelectedService(service)}
          >
            {service.name}
          </div>
        ))}
      </div>

      <div className="content">
        <h2>{selectedService.name}</h2>
        <p>{selectedService.details}</p>
        <ul className="features">
          {selectedService.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
        <button className="button">Know More</button>
      </div>
    </div>
  );
}

export default ServiceSection;
