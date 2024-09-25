import React from 'react';
import './Home.css'
// import HomeSlider from './Scroller';
import CardLayout from './CardLayout';
import ServiceSection from './ServiceSection';
import LogoCarousel from './LogoCarousel';
// import BlogsSection from './BlogsSection';
import { useNavigate } from 'react-router-dom';
import '../../global.css'
import CaseStudies from './CaseStudies';


const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="home-home-containerh">
      <div className="home-split-container">
        <div className="home-left-content">
          <h1 className="home-home-description">Dedicated to delivering innovative IT solutions that drive business success.</h1>
          <button className="home-explore-button" onClick={() => navigate('/About')}>Explore {">>"}</button>
        </div>
        <div className="home-right-content">
          <img src="/images/HomePage/hpimg.png" alt="Home Page img" />
        </div>
      </div>

      <div className="middle-text">
        <p>Founded on the principles of excellence and integrity, our company specializes in a broad range of services, from software development and IT consulting to comprehensive digital transformation strategies.</p>
      </div>

      <LogoCarousel />
      <ServiceSection />
      <CardLayout />
      <CaseStudies />
    </div>
  );
};

export default Home;