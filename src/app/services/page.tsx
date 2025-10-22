'use client';

import { motion } from "framer-motion";
import Navbar from '../components/layout/Navbar/Navbar';
import Footer from '../components/layout/Footer/Footer';
import './services.css';

const Services = () => {
  const services = [
    {
      image: "/ser1.jpg",
      title: "Domiciliary Care",
      description: "Enabling individuals to live independently in their own homes with tailored support that respects their choices and promotes autonomy.",
      features: ["24/7 support available", "Personal care assistance", "Medication management", "Daily living skills development"],
    },
    {
      image: "/ser2.jpg",
      title: "Respite Care",
      description: "Providing temporary care services that give families and regular caregivers a well-deserved break while ensuring quality support.",
      features: ["Flexible scheduling", "Trained respite workers", "Familiar environment maintained", "Emergency respite available"],
    },
    {
      image: "/ser3.jpg",
      title: "Community Integration",
      description: "Facilitating meaningful participation in community activities, building social connections, and promoting inclusion.",
      features: ["Social activities planning", "Community access support", "Skills workshops", "Group outings and events"],
    },
    {
      image: "/ser4.jpg",
      title: "Personalised Care Plans",
      description: "Comprehensive care strategies designed around individual needs, goals, preferences, and aspirations.",
      features: ["Initial assessment", "Goal setting", "Regular reviews", "Family involvement"],
    },
    {
      image: "/ser5.jpg",
      title: "Home Care",
      description: "We provide assistance with personal activities ranging from an hour to a couple of hours per day.",
      features: ["Flexible hourly care", "Personal activities support", "Daily living assistance", "Regular caregiver matching"],
    },
    {
      image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=400&h=300&fit=crop",
      title: "Hospital to Home",
      description: "Our compassionate carers can help you or a loved one to settle in after hospital admission.",
      features: ["Post-discharge support", "Medication management", "Recovery monitoring", "Hospital liaison services"],
    },
    {
      image: "/ser6.jpg",
      title: "24hr Live-in Care",
      description: "Round-the-clock comprehensive care in the comfort of your own home with dedicated live-in carers.",
      features: ["24/7 dedicated support", "Companionship", "Household management", "Personal care assistance"],
    },
    {
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
      title: "Health & Wellbeing Support",
      description: "Holistic support for physical and mental health, including coordination with healthcare professionals.",
      features: ["Health monitoring", "Exercise programs", "Mental health support", "Healthcare coordination"],
    },
    {
      image: "/ser7.webp",
      title: "Transport Assistance",
      description: "Safe and reliable transportation services to help individuals access community facilities, appointments, and social activities.",
      features: ["Medical appointments", "Shopping assistance", "Social outings", "Accessible vehicles"],
    },
    {
      image: "/ser8.jpg",
      title: "Employment Support",
      description: "Assistance with finding and maintaining meaningful employment, including job coaching and workplace support.",
      features: ["Job search assistance", "Interview preparation", "Workplace support", "Skills training"],
    },
    {
      image: "/ser9.jpg",
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
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="service-card-wrapper"
                >
                  <div className="service-detailed-card">
                    <div className="service-image-container">
                      <img 
                        src={service.image} 
                        alt={service.title}
                        className="service-image"
                        loading="lazy"
                      />
                    </div>
                    <div className="service-content">
                      <h3 className="service-title">{service.title}</h3>
                      <p className="service-detailed-description">{service.description}</p>
                      <ul className="service-features-list">
                        {service.features.map((feature) => (
                          <li key={feature}>
                            <span className="feature-bullet">•</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Services;