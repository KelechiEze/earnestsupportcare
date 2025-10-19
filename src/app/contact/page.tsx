'use client';

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { useState } from "react";
import Navbar from '../components/layout/Navbar/Navbar';
import Footer from '../components/layout/Footer/Footer';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Show success message (you can replace this with a toast notification)
    alert("Thank you! We'll get back to you soon.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="contact-container">
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
              <motion.div
                initial={{ x: -30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="contact-info-column"
              >
                <h2>Contact Information</h2>
                <p className="contact-intro">
                  Reach out to us today and let&apos;s discuss how we can help you or your loved ones.
                </p>

                <div className="contact-details">
                  <div className="contact-detail-card">
                    <div className="detail-icon">
                      <Mail className="detail-icon-svg" />
                    </div>
                    <div className="detail-content">
                      <h3>Email</h3>
                      <a href="mailto:Lucy@earnestdomiciliarycares.com">
                        Lucy@earnestdomiciliarycares.com
                      </a>
                    </div>
                  </div>

                  <div className="contact-detail-card">
                    <div className="detail-icon">
                      <Phone className="detail-icon-svg" />
                    </div>
                    <div className="detail-content">
                      <h3>Phone</h3>
                      <a href="tel:+447799248331">+44 7799248331</a>
                    </div>
                  </div>

                  <div className="contact-detail-card">
                    <div className="detail-icon">
                      <MapPin className="detail-icon-svg" />
                    </div>
                    <div className="detail-content">
                      <h3>Address</h3>
                      <p>Unit 9, Pembroke Centre<br />Swindon, SN2 2PQ</p>
                    </div>
                  </div>

                  <div className="contact-detail-card">
                    <div className="detail-icon">
                      <Clock className="detail-icon-svg" />
                    </div>
                    <div className="detail-content">
                      <h3>Hours</h3>
                      <p>Monday - Friday: 9am - 5pm<br />24/7 Support Available</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ x: 30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="contact-form-column"
              >
                <div className="contact-form-card">
                  <h2>Send Us a Message</h2>
                  <p className="form-intro">
                    Fill out the form below and we&apos;ll get back to you as soon as possible.
                  </p>

                  <form onSubmit={handleSubmit} className="contact-form">
                    <div className="form-group">
                      <label htmlFor="name">Full Name *</label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Your name"
                        className="form-input"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="email">Email *</label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="your@email.com"
                        className="form-input"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="phone">Phone</label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Your phone number"
                        className="form-input"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="message">Message *</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        placeholder="Tell us how we can help you..."
                        className="form-textarea"
                      />
                    </div>

                    <button type="submit" className="contact-submit-button">
                      Send Message
                    </button>
                  </form>
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