'use client';

import { motion } from "framer-motion";
import { Home, Users, ClipboardList, Heart, HeartHandshake, Activity, Bus, Briefcase, BookOpen } from "lucide-react";
import Navbar from '../components/layout/Navbar/Navbar';
import Footer from '../components/layout/Footer/Footer';
import './services.css';

const Services = () => {
  const services = [
    {
      icon: Home,
      title: "Supported Living",
      description: "Enabling individuals to live independently in their own homes with tailored support that respects their choices and promotes autonomy.",
      features: ["24/7 support available", "Personal care assistance", "Medication management", "Daily living skills development"],
    },
    {
      icon: HeartHandshake,
      title: "Respite Care",
      description: "Providing temporary care services that give families and regular caregivers a well-deserved break while ensuring quality support.",
      features: ["Flexible scheduling", "Trained respite workers", "Familiar environment maintained", "Emergency respite available"],
    },
    {
      icon: Users,
      title: "Community Integration",
      description: "Facilitating meaningful participation in community activities, building social connections, and promoting inclusion.",
      features: ["Social activities planning", "Community access support", "Skills workshops", "Group outings and events"],
    },
    {
      icon: ClipboardList,
      title: "Personalised Care Plans",
      description: "Comprehensive care strategies designed around individual needs, goals, preferences, and aspirations.",
      features: ["Initial assessment", "Goal setting", "Regular reviews", "Family involvement"],
    },
    {
      icon: Activity,
      title: "Health & Wellbeing Support",
      description: "Holistic support for physical and mental health, including coordination with healthcare professionals.",
      features: ["Health monitoring", "Exercise programs", "Mental health support", "Healthcare coordination"],
    },
    {
      icon: Bus,
      title: "Transport Assistance",
      description: "Safe and reliable transportation services to help individuals access community facilities, appointments, and social activities.",
      features: ["Medical appointments", "Shopping assistance", "Social outings", "Accessible vehicles"],
    },
    {
      icon: Briefcase,
      title: "Employment Support",
      description: "Assistance with finding and maintaining meaningful employment, including job coaching and workplace support.",
      features: ["Job search assistance", "Interview preparation", "Workplace support", "Skills training"],
    },
    {
      icon: BookOpen,
      title: "Life Skills Development",
      description: "Building practical skills for independent living, from cooking and budgeting to communication and social skills.",
      features: ["Cooking classes", "Money management", "Communication skills", "Household management"],
    },
  ];

  return (
    <div className="services-container">
      <Navbar />
      <div className="services-page">
        <section className="services-hero">
          <div className="services-container-inner">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="services-hero-content"
            >
              <h1>Our Comprehensive Services</h1>
              <p className="services-lead">
                Tailored support designed to meet your unique needs and empower you to live life to the fullest
              </p>
            </motion.div>
          </div>
        </section>

        <section className="services-list-section">
          <div className="services-container-inner">
            <div className="services-detailed-grid">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={service.title}
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="service-card-wrapper"
                  >
                    <div className="service-detailed-card">
                      <div className="service-detailed-header">
                        <div className="service-detailed-icon">
                          <Icon className="service-icon" />
                        </div>
                        <h3>{service.title}</h3>
                      </div>
                      <p className="service-detailed-description">{service.description}</p>
                      <ul className="service-features-list">
                        {service.features.map((feature) => (
                          <li key={feature}>
                            <Heart className="feature-icon" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="services-cta-section">
          <div className="services-container-inner">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="services-cta-content"
            >
              <h2>Ready to Learn More?</h2>
              <p>Contact us today to discuss how our services can support you or your loved ones</p>
              <div className="services-cta-buttons">
                <a href="/contact" className="services-btn services-btn-primary">Get in Touch</a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Services;