'use client';

import Link from 'next/link';
import { Mail, Phone, MapPin, Facebook, Linkedin } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* Logo and Description */}
          <div className="footer-section">
            <div className="footer-logo">
              <img 
                src="/log1.jpg" 
                alt="Earnest Domiciliary Care" 
                className="footer-logo-image"
              />
              <span className="footer-logo-text">Earnest Domiciliary Care</span>
            </div>
            <p className="footer-description">
              Providing dedicated domiciliary care for adults with autism, learning difficulties, physical disabilities, and mental health challenges.
            </p>
            <div className="footer-social">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h3 className="footer-heading">Quick Links</h3>
            <nav className="footer-links">
              <Link href="/" className="footer-link">Home</Link>
              <Link href="/about" className="footer-link">About Us</Link>
              <Link href="/services" className="footer-link">Services</Link>
              <Link href="/our-care" className="footer-link">Our Care</Link>
              <Link href="/contact" className="footer-link">Contact</Link>
            </nav>
          </div>

          {/* Contact Information */}
          <div className="footer-section">
            <h3 className="footer-heading">Contact Information</h3>
            <div className="footer-contact">
              <a href="mailto:Lucy@earnestsupportcares.com" className="footer-contact-item">
                <Mail size={18} />
                <span>Lucy@earnestsupportcares.com</span>
              </a>
              <a href="tel:+447799248331" className="footer-contact-item">
                <Phone size={18} />
                <span>+44 7799 248331</span>
              </a>
              <div className="footer-contact-item">
                <MapPin size={18} />
                <span>Unit 9, Pembroke Centre, Swindon, SN2 2PQ</span>
              </div>
            </div>
          </div>

          {/* Commitment Section */}
          <div className="footer-section">
            <h3 className="footer-heading">Our Commitment</h3>
            <p className="footer-description">
              Dedicated to delivering exceptional care with compassion, dignity, and respect for all our clients.
            </p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © 2025 Earnest Domiciliary Care. All rights reserved.
          </p>
          <div className="footer-legal">
            <Link href="/terms" className="footer-legal-link">Terms & Conditions</Link>
            <Link href="/privacy" className="footer-legal-link">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
