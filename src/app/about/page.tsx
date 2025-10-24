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
        <div className="hero-background">
          <div className="hero-overlay"></div>
        </div>
        <div className="container">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="about-hero-content"
          >
            <h1 className="who-we-are">Who We Are</h1>
            <p className="hero-description">
              Our organisation has been a trusted NDIS disability service provider for individuals with disabilities. We offer personalised, high-quality support to enhance independence and quality of life.
            </p>
          </motion.div>
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
                At Earnest Domiciliary Care, we are dedicated to providing compassionate, personalised care that empowers individuals to live fulfilling and independent lives. Our approach focuses on respecting individual choice and promoting dignity in every aspect of care.
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
                  <p className="rating-title">Helping disabled people</p>
                  <p className="rating-subtitle">is our main aim</p>
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
              <h2>Committed to Excellence in Domiciliary Care</h2>
              <p className="story-description">
                Earnest Domiciliary Care was founded with a simple yet powerful vision: to provide domiciliary care that goes beyond meeting basic needs. We believe that every individual deserves to be treated with dignity, respect, and compassion.
              </p>
              <p className="story-description">
                Our journey began with a commitment to supporting adults with learning disabilities, autism, mental health challenges, and physical disabilities. Today, we continue to honour that commitment by offering personalised domiciliary care plans that celebrate each person&apos;s unique strengths and aspirations.
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
                  To provide exceptional, person-centred care that respects individual choice, promotes independence, and enhances quality of life for adults with diverse needs.
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
                  A world where every individual, regardless of their abilities, has the opportunity to live a life of dignity, purpose, and fulfilment within their community.
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
