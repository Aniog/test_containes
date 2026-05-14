import NavBar from './components/sky/NavBar';
import HeroSection from './components/sky/HeroSection';
import SkyTypesSection from './components/sky/SkyTypesSection';
import PhenomenaSection from './components/sky/PhenomenaSection';
import QuoteSection from './components/sky/QuoteSection';
import GallerySection from './components/sky/GallerySection';
import NightSkySection from './components/sky/NightSkySection';
import Footer from './components/sky/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#0c1a2e]">
      <NavBar />
      <HeroSection />
      <SkyTypesSection />
      <PhenomenaSection />
      <QuoteSection />
      <GallerySection />
      <NightSkySection />
      <Footer />
    </div>
  );
}

export default App;
