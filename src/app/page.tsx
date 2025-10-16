import Navbar from './components/layout/Navbar/Navbar';
import Footer from './components/layout/Footer/Footer';
import HeroCarousel from './components/home/HeroCarousel/HeroCarousel';
import MissionValues from './components/home/MissionValues/MissionValues';
import ApproachToCare from './components/home/ApproachToCare/ApproachToCare';
import ServicesSection from './components/home/ServicesSection/ServicesSection';
import DisabilityServices from './components/home/DisabilityServices/DisabilityServices';
import PersonalisedCare from './components/home/PersonalisedCare/PersonalisedCare';
import ContactForm from './components/home/ContactForm/ContactForm';
import ContactSection from './components/home/ContactSection/ContactSection';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroCarousel />
        <MissionValues />
        <ApproachToCare />
        <ServicesSection />
        <DisabilityServices />
        <PersonalisedCare />
        <ContactForm />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;