import React from 'react';
import './CaseStudies.css';

const CaseStudies = () => {
  return (
    <div className="case-studies">
      <div className="case-studies-grid">
        <div className="case-study">
          <div className="content">
            <h3>Case Study 1</h3>
            <h2>Try Clarity in your browser</h2>
            <p>Text...</p>
            <button>View Case Study</button>
          </div>
        </div>
        <div className="case-study">
          <div className="content">
            <h3>Case Study 2</h3>
            <h2>Explore Clarity themes</h2>
            <p>Discover 100+ themes & integrations to take your project to the next level. SEO, analytics, CMS integrations, and more.</p>
            <button>View Case Study</button>
          </div>
        </div>
        <div className="case-study">
          <div className="content">
            <h3>Case Study 3</h3>
            <h2>Learn more in our docs</h2>
            <p>Thanks to our contributors, our docs are the best place to learn, troubleshoot, and explore APIs.</p>
            <button>View Case Study</button>
          </div>
        </div>
      </div>

      <div className="join-us-section">
        <div className="content">
          <h2>Join Us</h2>
          <p>Text...</p>
          <button>Contact Us</button>
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;