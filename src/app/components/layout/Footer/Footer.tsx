'use client';

import Link from 'next/link';
import { HeartHandshake, Mail, Phone, MapPin, Facebook, Linkedin } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <HeartHandshake className="footer-logo-icon" />
              <span className="footer-logo-text">Earnest Support Care</span>
            </div>
            <p className="footer-description">
              Providing dedicated and compassionate care for adults with autism, learning difficulties, physical disabilities, and mental health challenges.
            </p>
            <div className="footer-social">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

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

          <div className="footer-section">
            <h3 className="footer-heading">Contact Info</h3>
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

          <div className="footer-section">
            <h3 className="footer-heading">Stay Updated</h3>
            <p className="footer-newsletter-text">Subscribe to our newsletter for updates and news.</p>
            <div className="footer-newsletter">
              <input type="email" placeholder="Your email" className="footer-newsletter-input" />
              <button className="footer-newsletter-button">Subscribe</button>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">© 2025 Earnest Support Care. All rights reserved.</p>
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