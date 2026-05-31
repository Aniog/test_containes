import Navigation from './components/layout/Navigation';
import Footer from './components/layout/Footer';
import HeroSection from './components/sections/HeroSection';
import CitiesSection from './components/sections/CitiesSection';
import TransportSection from './components/sections/TransportSection';
import GovernmentSection from './components/sections/GovernmentSection';
import TechnologySection from './components/sections/TechnologySection';
import CultureSection from './components/sections/CultureSection';

function App() {
  return (
    <div className="min-h-screen bg-abyss text-pearl">
      <Navigation />
      <main>
        <HeroSection />
        <CitiesSection />
        <TransportSection />
        <GovernmentSection />
        <TechnologySection />
        <CultureSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;

