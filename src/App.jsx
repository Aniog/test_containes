import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HeroSection from './components/home/HeroSection';
import FeaturesSection from './components/home/FeaturesSection';
import StatsSection from './components/home/StatsSection';
import CtaSection from './components/home/CtaSection';

function App() {
  return (
    <div className="min-h-screen bg-purple-950 text-purple-100 font-sans">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <StatsSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
