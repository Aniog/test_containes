import Navbar from './components/home/Navbar';
import HeroSection from './components/home/HeroSection';
import AboutSection from './components/home/AboutSection';
import EventsSection from './components/home/EventsSection';
import EquipmentSection from './components/home/EquipmentSection';
import GallerySection from './components/home/GallerySection';
import Footer from './components/home/Footer';

function App() {
  return (
    <div className="min-h-screen font-sans">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <EventsSection />
      <EquipmentSection />
      <GallerySection />
      <Footer />
    </div>
  );
}

export default App;
