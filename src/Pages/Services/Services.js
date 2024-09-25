import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import './Services.css';

const Services = () => {
  return (
    <div>
      <Navbar />
      <div className="services">
        <div className="services-header">
          <h1>Our Services</h1>
          <p>Your partner in driving excellence across the Software Development Life Cycle.</p>
        </div>
        
        <div className="services-content">
          <div className="service-card">
            <h2>Engineering Analytics</h2>
            <p>Broad technical expertise always available to meet your current needs, including access to our expert technical advisers.</p>
          </div>

          <div className="service-card">
            <h2>CADASTRE</h2>
            <ul>
              <li>Geo Referencing</li>
              <li>Map Digitisation</li>
              <li>Application Development</li>
            </ul>
          </div>

          <div className="service-card">
            <h2>Remote Sensing & GIS</h2>
            <ul>
              <li>Image Processing</li>
              <li>UAV / Drone Survey</li>
              <li>Web and Mobile Applications</li>
            </ul>
          </div>

          <div className="service-card">
            <h2>Smart City Application</h2>
            <ul>
              <li>Decision Support System</li>
              <li>3D City Modeling</li>
              <li>e-Governance</li>
              <li>Web and Mobile Applications</li>
            </ul>
          </div>

          <div className="service-card">
            <h2>Natural Resources</h2>
            <ul>
              <li>Water / Agriculture / Forest Watershed Development</li>
            </ul>
          </div>

          <div className="service-card">
            <h2>Solutions</h2>
            <ul>
              <li>Tax Consultation Software</li>
              <li>Digital Marketing Software</li>
              <li>Attendance Software</li>
              <li>Payroll</li>
              <li>Inventory</li>
              <li>Hotel Management Complete Software</li>
              <li>Questionnaire Survey Software</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Services;
