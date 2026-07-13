import Navbar from '@/components/home/Navbar';
import HeroSection from '@/components/home/HeroSection';
import IntroSection from '@/components/home/IntroSection';
import GallerySection from '@/components/home/GallerySection';
import SpecimensSection from '@/components/home/SpecimensSection';
import EcosystemSection from '@/components/home/EcosystemSection';
import Footer from '@/components/home/Footer';

function App() {
  return (
    <div className="bg-cosmos-black min-h-screen text-white font-sans">
      <Navbar />
      <HeroSection />
      <IntroSection />
      <GallerySection />
      <SpecimensSection />
      <EcosystemSection />
      <Footer />
    </div>
  );
}

export default App;
