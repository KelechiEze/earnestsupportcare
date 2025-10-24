import { Heart, Users, Shield, Handshake } from 'lucide-react';
import Link from 'next/link';
import './ApproachToCare.css';

const ApproachToCare = () => {
  const approaches = [
    {
      icon: Heart,
      title: 'Person-Centred Care',
      description: 'We place you at the heart of everything we do, tailoring our support to your unique needs and preferences.',
    },
    {
      icon: Users,
      title: 'Collaborative Approach',
      description: 'Working together with families, healthcare professionals, and communities to deliver holistic care.',
    },
    {
      icon: Shield,
      title: 'Safety & Dignity',
      description: 'Ensuring a safe environment while upholding the dignity and rights of every individual we support.',
    },
    {
      icon: Handshake,
      title: 'Building Trust',
      description: 'Fostering meaningful relationships through consistent, reliable, and compassionate support.',
    },
  ];

  return (
    <section className="approach-section">
      <div className="approach-container">
        <div className="approach-header">
          <h2 className="approach-heading">Our Approach to Care</h2>
          <p className="approach-description">
            At Earnest Domiciliary Care, we believe in empowering individuals through compassionate, 
            personalised support that respects independence and promotes growth.
          </p>
        </div>

        <div className="approach-grid">
          {approaches.map((approach, index) => {
            const Icon = approach.icon;
            return (
              <div key={index} className="approach-card">
                <div className="approach-icon-wrapper">
                  <Icon className="approach-icon" />
                </div>
                <h3 className="approach-title">{approach.title}</h3>
                <p className="approach-text">{approach.description}</p>
              </div>
            );
          })}
        </div>

        <div className="approach-cta">
          <Link href="/services" className="cta-button">
            Click here to learn more
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ApproachToCare;
