'use client';

import Image from 'next/image';
import Navbar from '../components/layout/Navbar/Navbar';
import Footer from '../components/layout/Footer/Footer';
import { Heart, Handshake, Sparkles } from 'lucide-react';
import './about.css';

const AboutUs = () => {
  return (
    <div className="about-container">
      <Navbar />
      <main className="about-main">
        <div className="max-w-7xl mx-auto px-4">
          {/* Hero Section */}
          <div className="about-hero fade-in-up">
            <h1>About Earnest Support Care</h1>
            <p>
              Dedicated to providing compassionate, person-centered support that empowers individuals to live fulfilling lives.
            </p>
          </div>

          {/* Story Section */}
          <div className="about-content-grid">
            <div className="about-text-content fade-in-up stagger-delay-1">
              <h2>Our Story</h2>
              <p>
                At Earnest Support Care, we are dedicated to providing compassionate, person-centered support for adults with learning disabilities, autism, physical disabilities, and mental health needs.
              </p>
              <p>
                Our mission is to empower individuals to live fulfilling, independent lives while ensuring they receive the care and support they need to thrive.
              </p>
              <p>
                With years of experience in the care sector, our team is committed to building trusting relationships and delivering high-quality, tailored care that respects the dignity and individuality of each person we support.
              </p>
            </div>
            <div className="about-image-container fade-in-up stagger-delay-2">
              <Image 
                src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=800&q=80" 
                alt="Care team meeting with client" 
                width={800}
                height={600}
                className="about-image"
                priority
              />
            </div>
          </div>

          {/* Values Section */}
          <div className="about-values fade-in-up stagger-delay-1">
            <h2>Our Values</h2>
            <div className="values-grid">
              <div className="value-card fade-in-up stagger-delay-1">
                <div className="value-icon-container">
                  <Heart className="value-icon" />
                </div>
                <h3>Compassion</h3>
                <p>
                  We treat everyone with kindness, empathy, and understanding, recognizing the unique needs of each individual.
                </p>
              </div>
              <div className="value-card fade-in-up stagger-delay-2">
                <div className="value-icon-container">
                  <Handshake className="value-icon" />
                </div>
                <h3>Respect</h3>
                <p>
                  We honor the dignity, choices, and independence of every person we support.
                </p>
              </div>
              <div className="value-card fade-in-up stagger-delay-3">
                <div className="value-icon-container">
                  <Sparkles className="value-icon" />
                </div>
                <h3>Excellence</h3>
                <p>
                  We strive for the highest standards in care delivery, continuously improving our services.
                </p>
              </div>
            </div>
          </div>

          {/* Team Section */}
          <div className="team-section">
            <div className="team-image-container fade-in-up stagger-delay-1">
              <Image 
                src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=800&q=80" 
                alt="Team of care professionals" 
                width={800}
                height={600}
                className="about-image"
              />
            </div>
            <div className="team-content fade-in-up stagger-delay-2">
              <h2>Our Team</h2>
              <p>
                Our dedicated team of experienced care professionals is passionate about making a positive difference in people&apos;s lives.
              </p>
              <p>
                Each team member undergoes rigorous training and continuous professional development to ensure we provide the highest quality of care and support.
              </p>
              <p>
                We believe in building long-lasting relationships based on trust, respect, and genuine care for the individuals we support.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;