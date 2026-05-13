import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HeroSection from './components/home/HeroSection';
import FeaturesSection from './components/home/FeaturesSection';
import AboutSection from './components/home/AboutSection';
import CtaSection from './components/home/CtaSection';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <AboutSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
