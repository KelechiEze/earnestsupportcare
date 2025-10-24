import { Star, MousePointer, Sparkles, Phone } from 'lucide-react';
import './DisabilityServices.css';

const DisabilityServices = () => {
  return (
    <section className="disability-section">
      <div className="disability-container">
        <div className="disability-content">
          <div className="disability-images">
            <div className="disability-image-grid">
              <div className="disability-image-large">
                <img 
                  src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80" 
                  alt="Person with disability being supported by care worker"
                  className="disability-img"
                />
              </div>
              <div className="disability-image-small">
                <img 
                  src="https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?auto=format&fit=crop&w=500&q=80" 
                  alt="Person in wheelchair using tablet"
                  className="disability-img"
                />
              </div>
              <div className="disability-image-small">
                <img 
                  src="https://images.unsplash.com/photo-1581579186913-45ac3e6efe93?auto=format&fit=crop&w=500&q=80" 
                  alt="Child with disability engaged in activity"
                  className="disability-img"
                />
              </div>
            </div>
          </div>

          <div className="disability-info">
            <span className="disability-label">Get to Know About Our Services</span>
            <h2 className="disability-heading">Exceptional Domiciliary Care Services</h2>
            <p className="disability-description">
              We provide comprehensive support services tailored to meet the unique needs of individuals 
              with learning disabilities, autism, physical disabilities, and mental health challenges.
            </p>

            <div className="disability-features">
              <div className="disability-feature">
                <div className="feature-icon-wrapper">
                  <MousePointer className="feature-icon" />
                </div>
                <div>
                  <h3 className="feature-title">Choice and Control</h3>
                  <p className="feature-text">Empowering you to make decisions about your own care and support</p>
                </div>
              </div>

              <div className="disability-feature">
                <div className="feature-icon-wrapper">
                  <Sparkles className="feature-icon" />
                </div>
                <div>
                  <h3 className="feature-title">Personal Growth</h3>
                  <p className="feature-text">Supporting your journey towards independence and personal development</p>
                </div>
              </div>
            </div>

            <div className="disability-rating">
              <div className="rating-stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="star-icon" fill="currentColor" />
                ))}
              </div>
              <p className="rating-text">Helping people with disabilities is our main aim</p>
            </div>

            <div className="disability-cta">
              <p className="cta-question">Are you looking for professional disability support services?</p>
              <div className="cta-actions">
                <a href="/contact" className="cta-button">
                  Discover More
                </a>
                <div className="cta-contact">
                  <div className="contact-icon-circle">
                    <Phone className="contact-phone-icon" />
                  </div>
                  <div>
                    <a href="tel:+447799248331" className="contact-number">+44 7799 248331</a>
                    <p className="contact-label-text">Call to Speak with an Expert</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DisabilityServices;
