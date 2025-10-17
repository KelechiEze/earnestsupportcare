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
      <section className="about-hero">
        <div className="container">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="about-hero-content"
          >
            <h1>About Earnest Support Care</h1>
            <p className="lead">
              We are dedicated to providing compassionate, personalized care that empowers individuals to live fulfilling and independent lives.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="about-intro">
        <div className="container">
          <div className="about-intro-grid">
            <motion.div
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="intro-images"
            >
              <div className="image-layout">
                <div className="image-main">
                  <Image 
                    src="/person1.png" 
                    alt="Person receiving care" 
                    width={400}
                    height={500}
                    className="intro-image"
                  />
                </div>
                <div className="image-stack">
                  <div className="image-small">
                    <Image 
                      src="/person2.png" 
                      alt="Care support" 
                      width={200}
                      height={240}
                      className="intro-image"
                    />
                  </div>
                  <div className="image-small">
                    <Image 
                      src="/person3.png" 
                      alt="Personalized care" 
                      width={200}
                      height={240}
                      className="intro-image"
                    />
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="intro-content"
            >
              <p className="intro-label">GET TO KNOW ABOUT US</p>
              <h1>Exceptional Disability Care Services</h1>
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

      <section className="about-story">
        <div className="container">
          <div className="story-grid">
            <motion.div
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="story-content"
            >
              <h2>Our Story</h2>
              <p>
                Earnest Support Care was founded with a simple yet powerful vision: to provide care that goes beyond meeting basic needs. We believe that every individual deserves to be treated with dignity, respect, and compassion.
              </p>
              <p>
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
                  <Heart className="value-icon" />
                  <div>
                    <h3>Compassion</h3>
                    <p>We care deeply about the well-being of every individual we support</p>
                  </div>
                </div>
                <div className="value-item">
                  <Target className="value-icon" />
                  <div>
                    <h3>Empowerment</h3>
                    <p>We enable individuals to achieve their personal goals and dreams</p>
                  </div>
                </div>
                <div className="value-item">
                  <Eye className="value-icon" />
                  <div>
                    <h3>Vision</h3>
                    <p>We see potential and possibility in every person we work with</p>
                  </div>
                </div>
                <div className="value-item">
                  <Handshake className="value-icon" />
                  <div>
                    <h3>Partnership</h3>
                    <p>We work collaboratively with families and communities</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="mission-vision section-light-bg">
        <div className="container">
          <div className="mission-vision-grid">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
            >
              <div className="mission-card">
                <Target className="card-icon" />
                <h2>Our Mission</h2>
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
            >
              <div className="vision-card">
                <Eye className="card-icon" />
                <h2>Our Vision</h2>
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