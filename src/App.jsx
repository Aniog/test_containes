import Navbar from './components/mountain/Navbar';
import HeroSection from './components/mountain/HeroSection';
import GeographySection from './components/mountain/GeographySection';
import EquipmentSection from './components/mountain/EquipmentSection';
import TeamsSection from './components/mountain/TeamsSection';
import SafetySection from './components/mountain/SafetySection';
import GallerySection from './components/mountain/GallerySection';
import Footer from './components/mountain/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <HeroSection />
      <GeographySection />
      <EquipmentSection />
      <TeamsSection />
      <SafetySection />
      <GallerySection />
      <Footer />
    </div>
  );
}

export default App;
