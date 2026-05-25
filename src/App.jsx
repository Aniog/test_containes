import Navbar from './components/bitcoin/Navbar';
import HeroSection from './components/bitcoin/HeroSection';
import IntroSection from './components/bitcoin/IntroSection';
import TechSection from './components/bitcoin/TechSection';
import StatsSection from './components/bitcoin/StatsSection';
import FaqSection from './components/bitcoin/FaqSection';
import Footer from './components/bitcoin/Footer';

function App() {
  return (
    <div className="min-h-screen bg-btc-bg text-btc-text font-sans">
      <Navbar />
      <main>
        <HeroSection />
        <IntroSection />
        <TechSection />
        <StatsSection />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
