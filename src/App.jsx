import './index.css';
import Navbar from './components/microcosmos/Navbar';
import HeroSection from './components/microcosmos/HeroSection';
import IntroSection from './components/microcosmos/IntroSection';
import GallerySection from './components/microcosmos/GallerySection';
import SpecimensSection from './components/microcosmos/SpecimensSection';
import EcosystemSection from './components/microcosmos/EcosystemSection';
import Footer from './components/microcosmos/Footer';

function App() {
  return (
    <div className="bg-cosmos-bg min-h-screen text-slate-50">
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
