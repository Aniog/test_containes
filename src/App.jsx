import './App.css';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HeroSection from './components/home/HeroSection';
import PlantsSection from './components/home/PlantsSection';
import WhyUsSection from './components/home/WhyUsSection';
import ContactSection from './components/home/ContactSection';

function App() {
  return (
    <div className="min-h-screen bg-brand-cream font-sans">
      <Navbar />
      <main>
        <HeroSection />
        <PlantsSection />
        <WhyUsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;

