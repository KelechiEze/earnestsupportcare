import Image from 'next/image';
import { Heart, Users, Shield, Handshake, Star } from 'lucide-react';
import './MissionValues.css';

const values = [
  { icon: Heart, title: 'Compassion', description: 'We care deeply about the well-being of every individual' },
  { icon: Users, title: 'Respect', description: 'We honor dignity and individuality in all we do' },
  { icon: Shield, title: 'Inclusion', description: 'Everyone deserves to feel welcomed and valued' },
  { icon: Handshake, title: 'Empowerment', description: 'Supporting independence and personal growth' },
  { icon: Star, title: 'Integrity', description: 'We uphold the highest standards of care' },
];

const MissionValues = () => {
  return (
    <section className="mission-section">
      <div className="mission-container">
        <div className="mission-content">
          <div className="mission-text">
            <h2 className="mission-heading">Our Mission & Values</h2>
            <p className="mission-description">
              At Earnest Support Care, we believe in providing person-centered care that respects the unique needs and aspirations of each individual.
            </p>
            <div className="values-list">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div key={index} className="value-item">
                    <div className="value-icon-wrapper">
                      <Icon className="value-icon" />
                    </div>
                    <div>
                      <h3 className="value-title">{value.title}</h3>
                      <p className="value-description">{value.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="mission-image-wrapper">
            <Image
              src="https://images.unsplash.com/photo-1576086213369-97a306d36557?ixlib=rb-4.0.3&auto=format&fit=crop&w=2080&q=80"
              alt="Caregiver providing compassionate support to an individual in a community setting"
              width={600}
              height={700}
              className="mission-image"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionValues;