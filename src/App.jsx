import './App.css';
import Navbar from './components/sections/Navbar';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import ServicesSection from './components/sections/ServicesSection';
import PortfolioSection from './components/sections/PortfolioSection';
import StatsSection from './components/sections/StatsSection';
import TeamSection from './components/sections/TeamSection';
import TestimonialsSection from './components/sections/TestimonialsSection';
import ContactSection from './components/sections/ContactSection';
import Footer from './components/sections/Footer';

function App() {
  return (
    <div className="min-h-screen font-sans">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <StatsSection />
      <TeamSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
