'use client';

import { motion } from "framer-motion";
import { Home, Shield, Users, CheckCircle, Heart } from "lucide-react";
import Navbar from '../components/layout/Navbar/Navbar';
import Footer from '../components/layout/Footer/Footer';
import './ourcare.css';

const OurCare = () => {
  const benefits = [
    "Your own front door and personal space",
    "24/7 support when you need it",
    "Choice and control over your daily life",
    "Community connections and friendships",
    "Personalised care tailored to you",
    "Safe, secure living environment",
  ];

  const careFeatures = [
    {
      icon: Home,
      title: "Independent Living",
      description: "Live in your own home with the dignity and freedom you deserve, while having support available when needed.",
    },
    {
      icon: Shield,
      title: "Safe & Secure",
      description: "Our comprehensive safety measures ensure you feel protected and confident in your living environment.",
    },
    {
      icon: Users,
      title: "Community Connection",
      description: "Stay connected with your community, build meaningful relationships, and participate in social activities.",
    },
    {
      icon: Heart,
      title: "Compassionate Support",
      description: "Our caring team is dedicated to understanding your needs and providing support with empathy and respect.",
    },
  ];

  return (
    <div className="our-care-container">
      <Navbar />
      <div className="our-care-page">
        <section className="care-hero">
          <div className="care-container">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="care-hero-content"
            >
              <h1>Our Approach to Care</h1>
              <p className="care-lead">
                Supporting independence, promoting choice, and celebrating individuality
              </p>
            </motion.div>
          </div>
        </section>

        <section className="supported-living-section">
          <div className="care-container">
            <div className="supported-living-grid">
              <motion.div
                initial={{ x: -30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="supported-living-image"
              >
                <img 
                  src="/agentcare.jpg" 
                  alt="Supported Living" 
                />
              </motion.div>

              <motion.div
                initial={{ x: 30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="supported-living-content"
              >
                <h2>Supported Living</h2>
                <p className="care-intro-text">
                  With supported living, you&apos;ll enjoy the freedom of your own front door, while knowing you&apos;re safe, secure, and never alone.
                </p>
                <p>
                  Our supported living services are designed to help you maintain your independence while receiving the right level of support. Whether you need help with daily tasks, Domiciliary care, or simply want someone to check in regularly, we&apos;re here for you.
                </p>

                <div className="benefits-list">
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={benefit}
                      initial={{ x: -20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="benefit-item"
                    >
                      <CheckCircle className="check-icon" />
                      <span>{benefit}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="care-features-section">
          <div className="care-container">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="care-section-header"
            >
              <h2>What Makes Our Care Special</h2>
              <p>We go beyond basic support to create truly Domiciliary care experiences</p>
            </motion.div>

            <div className="care-features-grid">
              {careFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="care-feature-card-wrapper"
                  >
                    <div className="care-feature-card">
                      <div className="care-feature-icon-wrapper">
                        <Icon className="care-feature-icon" />
                      </div>
                      <h3>{feature.title}</h3>
                      <p>{feature.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="care-cta-section">
          <div className="care-container">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="care-cta-content"
            >
              <h2>Experience Care That Makes a Difference</h2>
              <p>Let us show you how our approach to care can enhance your quality of life</p>
              <div className="care-cta-buttons">
                <a href="/contact" className="care-btn care-btn-primary">Contact Us</a>
                <a href="/services" className="care-btn care-btn-secondary">View Services</a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default OurCare;
