import Link from 'next/link';
import { Home, Users, ClipboardList } from 'lucide-react';
import './ServicesSection.css';

const services = [
  {
    icon: Home,
    title: 'Respite and Support Services',
    description: 'Providing temporary relief for families and carers while ensuring high-quality care for your loved ones.',
  },
  {
    icon: Users,
    title: 'Community Integration Programs',
    description: 'Helping individuals connect with their communities through inclusive activities and social events.',
  },
  {
    icon: ClipboardList,
    title: 'Personalised Care Plans',
    description: 'Tailored support plans designed around individual needs, goals, and aspirations.',
  },
];

const ServicesSection = () => {
  return (
    <section className="services-section">
      <div className="services-container">
        <div className="services-header">
          <h2 className="services-heading">Explore Our Comprehensive Support Services</h2>
          <p className="services-subheading">Tailored to Your Needs</p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="service-card">
                <div className="service-icon-wrapper">
                  <Icon className="service-icon" />
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </div>
            );
          })}
        </div>

        <div className="services-cta">
          <Link href="/services" className="services-button">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;