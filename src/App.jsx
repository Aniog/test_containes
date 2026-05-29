import './App.css';
import Navbar from './components/microcosmos/Navbar';
import HeroSection from './components/microcosmos/HeroSection';
import IntroSection from './components/microcosmos/IntroSection';
import GallerySection from './components/microcosmos/GallerySection';
import OrganismsSection from './components/microcosmos/OrganismsSection';
import EnvironmentsSection from './components/microcosmos/EnvironmentsSection';
import TechniquesSection from './components/microcosmos/TechniquesSection';
import SpotlightSection from './components/microcosmos/SpotlightSection';
import CtaSection from './components/microcosmos/CtaSection';
import Footer from './components/microcosmos/Footer';

function App() {
  return (
    <div className="bg-cosmos-bg min-h-screen font-inter">
      <Navbar />
      <HeroSection />
      <IntroSection />
      <GallerySection />
      <OrganismsSection />
      <EnvironmentsSection />
      <TechniquesSection />
      <SpotlightSection />
      <CtaSection />
      <Footer />
    </div>
  );
}

export default App;

