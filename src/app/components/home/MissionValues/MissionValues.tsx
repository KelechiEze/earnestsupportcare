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
        <div className="mission-header">
          <h2 className="mission-heading">Our Mission & Values</h2>
          <p className="mission-description">
            At Earnest Support Care, we believe in providing person-centered care that respects the unique needs and aspirations of each individual.
          </p>
        </div>
        <div className="values-grid">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div key={index} className="value-card">
                <div className="value-icon-wrapper">
                  <Icon className="value-icon" />
                </div>
                <h3 className="value-title">{value.title}</h3>
                <p className="value-description">{value.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MissionValues;