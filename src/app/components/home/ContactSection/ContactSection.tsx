import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';
import './ContactSection.css';

const ContactSection = () => {
  return (
    <section className="contact-section">
      <div className="contact-container">
        {/* Centered Header Section */}
        <div className="contact-header-centered">
          <h2 className="contact-heading">Get in Touch</h2>
          <p className="contact-description">
            We&apos;re here to answer your questions and discuss how we can support you or your loved ones.
          </p>
        </div>

        {/* Horizontal Content Section */}
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-details">
              <a href="mailto:Lucy@earnestdomiciliarycares.com" className="contact-item">
                <div className="contact-icon-wrapper">
                  <Mail className="contact-icon" />
                </div>
                <div>
                  <h3 className="contact-label">Email</h3>
                  <p className="contact-value">Lucy@earnestsupportcares.com</p>
                </div>
              </a>

              <a href="tel:+447799248331" className="contact-item">
                <div className="contact-icon-wrapper">
                  <Phone className="contact-icon" />
                </div>
                <div>
                  <h3 className="contact-label">Phone</h3>
                  <p className="contact-value">+44 7799 248331</p>
                </div>
              </a>

              <div className="contact-item">
                <div className="contact-icon-wrapper">
                  <MapPin className="contact-icon" />
                </div>
                <div>
                  <h3 className="contact-label">Address</h3>
                  <p className="contact-value">Unit 9, Pembroke Centre, Swindon, SN2 2PQ</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-cta">
            <div className="contact-cta-card">
              <h3 className="contact-cta-heading">Ready to Get Started?</h3>
              <p className="contact-cta-text">
                Contact us today to learn more about our services and how we can help.
              </p>
              <Link href="/contact" className="contact-button">
                Send Us a Message
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;