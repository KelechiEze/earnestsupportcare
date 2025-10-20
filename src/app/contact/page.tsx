'use client';

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { useState, useRef } from "react";
import Navbar from '../components/layout/Navbar/Navbar';
import Footer from '../components/layout/Footer/Footer';
import './Contact.css';

const Contact = () => {
  const contactRef = useRef<HTMLDivElement>(null);

  return (
    <div className="contact-container" ref={contactRef}>
      <Navbar />
      <div className="contact-page">
        <section className="contact-hero">
          <div className="contact-container-inner">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="contact-hero-content"
            >
              <h1>Get in Touch</h1>
              <p className="contact-lead">
                We&apos;re here to answer your questions and discuss how we can support you
              </p>
            </motion.div>
          </div>
        </section>

        <section className="contact-content-section">
          <div className="contact-container-inner">
            <div className="contact-grid">
              {/* Contact Information Column */}
              <motion.div
                initial={{ x: -30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="contact-info-column"
              >
                <h2>Contact Information</h2>
                <p className="contact-intro">
                  Reach out to us today and let&apos;s discuss how we can help you or your loved ones.
                </p>

                <div className="contact-details">
                  <motion.div 
                    className="contact-detail-card"
                    whileHover={{ scale: 1.02, x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="detail-icon">
                      <Mail className="detail-icon-svg" />
                    </div>
                    <div className="detail-content">
                      <h3>Email</h3>
                      <a href="mailto:Lucy@earnestdomiciliarycares.com">
                        Lucy@earnestdomiciliarycares.com
                      </a>
                      <p className="detail-description">We respond within 24 hours</p>
                    </div>
                  </motion.div>

                  <motion.div 
                    className="contact-detail-card"
                    whileHover={{ scale: 1.02, x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="detail-icon">
                      <Phone className="detail-icon-svg" />
                    </div>
                    <div className="detail-content">
                      <h3>Phone</h3>
                      <a href="tel:+447799248331">+44 7799248331</a>
                      <p className="detail-description">Call us anytime</p>
                    </div>
                  </motion.div>

                  <motion.div 
                    className="contact-detail-card"
                    whileHover={{ scale: 1.02, x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="detail-icon">
                      <MapPin className="detail-icon-svg" />
                    </div>
                    <div className="detail-content">
                      <h3>Address</h3>
                      <p>Unit 9, Pembroke Centre<br />Swindon, SN2 2PQ</p>
                      <p className="detail-description">Visit our office</p>
                    </div>
                  </motion.div>

                  <motion.div 
                    className="contact-detail-card"
                    whileHover={{ scale: 1.02, x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="detail-icon">
                      <Clock className="detail-icon-svg" />
                    </div>
                    <div className="detail-content">
                      <h3>Hours</h3>
                      <p>Monday - Friday: 9am - 5pm<br />24/7 Support Available</p>
                      <p className="detail-description">Emergency support always available</p>
                    </div>
                  </motion.div>
                </div>

                {/* Additional Info */}
                <motion.div 
                  className="additional-info"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <h3>Why Choose Us?</h3>
                  <ul>
                    <li>24/7 Professional Care Services</li>
                    <li>Certified Caregivers</li>
                    <li>Personalized Care Plans</li>
                    <li>Emergency Response Team</li>
                  </ul>
                </motion.div>
              </motion.div>

              {/* Map Column */}
              <motion.div
                initial={{ x: 30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="map-column"
              >
                <div className="map-container-card">
                  <div className="map-header">
                    <h2>Find Us</h2>
                    <p className="map-subtitle">
                      Visit our office at Unit 9, Pembroke Centre, Swindon
                    </p>
                  </div>
                  
                  <motion.div 
                    className="map-iframe-container"
                    whileHover={{ scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2486.963391106186!2d-1.7810237230240898!3d51.56297111138725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4871442e28d2a36d%3A0x22c81e75a4f476ed!2sPembroke%20Centre%2C%20Swindon%20SN2%202PQ!5e0!3m2!1sen!2suk!4v1700000000000!5m2!1sen!2suk"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Earnest Domiciliary Care Location"
                    />
                  </motion.div>

                  <div className="map-details">
                    <div className="map-detail-item">
                      <MapPin size={16} />
                      <span>Unit 9, Pembroke Centre, Swindon, SN2 2PQ</span>
                    </div>
                    <div className="map-detail-item">
                      <Clock size={16} />
                      <span>Mon-Fri: 9am-5pm | 24/7 Support</span>
                    </div>
                    <div className="map-note">
                      <p>📍 Free parking available on site</p>
                      <p>♿ Fully accessible premises</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;