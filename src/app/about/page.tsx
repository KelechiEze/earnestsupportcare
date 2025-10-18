'use client';

import { motion } from "framer-motion";
import { Heart, Target, Eye, Handshake, MousePointer, User, Star, Phone } from "lucide-react";
import Image from 'next/image';
import Navbar from '../components/layout/Navbar/Navbar';
import Footer from '../components/layout/Footer/Footer';
import "./about.css";

const About = () => {
  return (
    <div className="about-page">
      <Navbar />
      
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="about-hero-content"
          >
            <h1>WHO WE ARE</h1>
            <p className="lead">
              A Trusted NDIS Disability Service Provider For Over 26 Years
            </p>
            <p className="hero-description">
              Our organization has been a trusted NDIS disability service provider for individuals with disabilities. We offer personalized, high-quality support to enhance independence and quality of life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="about-stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-content">
                <div className="stat-checkbox">
                  <div className="checkbox"></div>
                </div>
                <div className="stat-text">
                  <p className="stat-label">OUR OVERALL PATIENTS</p>
                </div>
              </div>
              <div className="stat-number">50k+</div>
            </div>
            <div className="stat-item">
              <div className="stat-content">
                <div className="stat-checkbox">
                  <div className="checkbox"></div>
                </div>
                <div className="stat-text">
                  <p className="stat-label">OUR SUCCESS RATE</p>
                </div>
              </div>
              <div className="stat-number">99%</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Intro Section */}
      <section className="about-intro">
        <div className="container">
          <div className="about-intro-grid">
            {/* Image Section */}
            <motion.div
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="intro-images"
            >
              <div className="image-main">
                <Image 
                  src="/iq.png" 
                  alt="Person receiving care" 
                  width={500}
                  height={600}
                  className="intro-image"
                />
              </div>
            </motion.div>

            {/* Content Section */}
            <motion.div
              initial={{ x: 30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="intro-content"
            >
              <p className="intro-label">GET TO KNOW ABOUT US</p>
              <h2>Exceptional Disability Care Services</h2>
              <p className="intro-description">
                At Earnest Support Care, we are dedicated to providing compassionate, personalized care that empowers individuals to live fulfilling and independent lives. Our approach focuses on respecting individual choice and promoting dignity in every aspect of care.
              </p>

              <div className="intro-features">
                <div className="feature-item">
                  <MousePointer className="feature-icon" />
                  <div>
                    <h3>Choice and Control</h3>
                    <p>Empowering individuals to make their own decisions</p>
                  </div>
                </div>
                <div className="feature-item">
                  <User className="feature-icon" />
                  <div>
                    <h3>Personal Growth</h3>
                    <p>Supporting development and independence</p>
                  </div>
                </div>
              </div>

              <div className="intro-rating">
                <div className="rating-stars">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="star-icon" fill="currentColor" />
                  ))}
                </div>
                <div className="rating-text">
                  <p className="rating-title">Helping disability person</p>
                  <p className="rating-subtitle">is main aim for us</p>
                </div>
              </div>

              <div className="intro-cta">
                <p className="cta-question">Are you eligible looking for NDIS disability services?</p>
                <div className="cta-actions">
                  <button className="cta-button">
                    DISCOVER MORE
                  </button>
                  <div className="cta-contact">
                    <Phone className="phone-icon" />
                    <div>
                      <p className="phone-number">0 800 555 44 33</p>
                      <p className="phone-label">Call to Expert</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="about-story">
        <div className="container">
          <div className="story-grid">
            <motion.div
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="story-content"
            >
              <p className="story-label">OUR STORY</p>
              <h2>Committed to Excellence in Disability Care</h2>
              <p className="story-description">
                Earnest Support Care was founded with a simple yet powerful vision: to provide care that goes beyond meeting basic needs. We believe that every individual deserves to be treated with dignity, respect, and compassion.
              </p>
              <p className="story-description">
                Our journey began with a commitment to supporting adults with learning disabilities, autism, mental health challenges, and physical disabilities. Today, we continue to honor that commitment by offering personalized care plans that celebrate each person&apos;s unique strengths and aspirations.
              </p>
            </motion.div>

            <motion.div
              initial={{ x: 30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="story-values"
            >
              <div className="values-card">
                <div className="value-item">
                  <div className="value-icon-container">
                    <Heart className="value-icon" />
                  </div>
                  <div className="value-text">
                    <h3>Compassion</h3>
                    <p>We care deeply about the well-being of every individual we support</p>
                  </div>
                </div>
                <div className="value-item">
                  <div className="value-icon-container">
                    <Target className="value-icon" />
                  </div>
                  <div className="value-text">
                    <h3>Empowerment</h3>
                    <p>We enable individuals to achieve their personal goals and dreams</p>
                  </div>
                </div>
                <div className="value-item">
                  <div className="value-icon-container">
                    <Eye className="value-icon" />
                  </div>
                  <div className="value-text">
                    <h3>Vision</h3>
                    <p>We see potential and possibility in every person we work with</p>
                  </div>
                </div>
                <div className="value-item">
                  <div className="value-icon-container">
                    <Handshake className="value-icon" />
                  </div>
                  <div className="value-text">
                    <h3>Partnership</h3>
                    <p>We work collaboratively with families and communities</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="mission-vision">
        <div className="container">
          <div className="mission-vision-grid">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="mission-card-wrapper"
            >
              <div className="mission-card">
                <div className="card-header">
                  <div className="card-icon-container">
                    <Target className="card-icon" />
                  </div>
                  <h2>Our Mission</h2>
                </div>
                <p>
                  To provide exceptional, person-centered care that respects individual choice, promotes independence, and enhances quality of life for adults with diverse needs.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="vision-card-wrapper"
            >
              <div className="vision-card">
                <div className="card-header">
                  <div className="card-icon-container">
                    <Eye className="card-icon" />
                  </div>
                  <h2>Our Vision</h2>
                </div>
                <p>
                  A world where every individual, regardless of their abilities, has the opportunity to live a life of dignity, purpose, and fulfillment within their community.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;