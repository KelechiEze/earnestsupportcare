import { ClipboardCheck, Target, Smile } from 'lucide-react';
import './PersonalisedCare.css';

const features = [
  {
    icon: ClipboardCheck,
    title: 'Tailored Support',
    description: 'Care plans designed specifically for your unique needs',
  },
  {
    icon: Target,
    title: 'Goal-Focused Care',
    description: 'Working together to achieve your personal aspirations',
  },
  {
    icon: Smile,
    title: 'Celebrating Milestones',
    description: 'Recognizing every achievement along your journey',
  },
];

const PersonalisedCare = () => {
  return (
    <section className="personalised-section">
      <div className="personalised-container">
        <div className="personalised-header">
          <h2 className="personalised-heading">Domiciliary Care Plans</h2>
          <p className="personalised-subheading">
            Every individual is unique. Our care plans reflect your specific needs, preferences, and goals.
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="feature-card">
                <div className="feature-icon-wrapper">
                  <Icon className="feature-icon" />
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PersonalisedCare;
