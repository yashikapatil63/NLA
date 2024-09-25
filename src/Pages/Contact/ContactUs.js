import React, { Component } from 'react';
import './ContactUs.css';


export default class ContactUs extends Component {
  render() {
    return (
      <div className='contact'>
        <section id="map" className="section-p1">
          <iframe
            title='map'
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.983788528507!2d79.04318207424183!3d21.113212484874555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4bf8b8eb57c19%3A0xa541802d44b2205b!2sSambhaji%20Chowk%2C%20Bhamti%2C%20Subhash%20Nagar%2C%20Trimurtee%20Nagar%2C%20Nagpur%2C%20Maharashtra%20440022!5e0!3m2!1sen!2sin!4v1724307811393!5m2!1sen!2sin"
            style={{ border: '0', width: '100%', height: '70vh' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

        </section>
       
        <section id="contact-form" className="section-p4">
          <h2>Contact Form</h2>
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </section>
        <section id="social-media" className="section-p5">
          <h2>Follow Us</h2>
          <div>
            <a href=" "><i className="fa fa-facebook"></i></a>
            <a href=" "><i className="fa fa-twitter"></i></a>
            <a href=" "><i className="fa fa-instagram"></i></a>
            <a href=" "><i className="fa fa-linkedin"></i></a>
          </div>
        </section>
      </div>
    );
  }
}
