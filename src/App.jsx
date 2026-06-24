import Navbar from './components/home/Navbar';
import HeroSection from './components/home/HeroSection';
import AboutSection from './components/home/AboutSection';
import OrganismsSection from './components/home/OrganismsSection';
import GallerySection from './components/home/GallerySection';
import StatsSection from './components/home/StatsSection';
import CTASection from './components/home/CTASection';
import Footer from './components/home/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#050d1a]">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <OrganismsSection />
      <GallerySection />
      <div id="facts">
        <StatsSection />
      </div>
      <div id="cta">
        <CTASection />
      </div>
      <Footer />
    </div>
  );
}

export default App;
