import './App.css';
import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import IntroSection from './components/IntroSection';
import OrganismsSection from './components/OrganismsSection';
import FactsSection from './components/FactsSection';
import GallerySection from './components/GallerySection';
import FooterSection from './components/FooterSection';

function App() {
  return (
    <div style={{ background: '#030b18', minHeight: '100vh' }}>
      <NavBar />
      <HeroSection />
      <IntroSection />
      <OrganismsSection />
      <FactsSection />
      <GallerySection />
      <FooterSection />
    </div>
  );
}

export default App;
