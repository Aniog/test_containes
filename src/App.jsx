import Navbar from './components/cinema/Navbar';
import HeroSection from './components/cinema/HeroSection';
import NowPlayingSection from './components/cinema/NowPlayingSection';
import ComingSoonSection from './components/cinema/ComingSoonSection';
import ExperienceSection from './components/cinema/ExperienceSection';
import Footer from './components/cinema/Footer';

function App() {
  return (
    <div className="bg-cinema-black min-h-screen">
      <Navbar />
      <HeroSection />
      <NowPlayingSection />
      <ComingSoonSection />
      <ExperienceSection />
      <Footer />
    </div>
  );
}

export default App;
