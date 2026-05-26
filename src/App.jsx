import './App.css';
import Navbar from './components/home/Navbar';
import HeroSection from './components/home/HeroSection';
import StatsSection from './components/home/StatsSection';
import ScheduleSection from './components/home/ScheduleSection';
import TeamsSection from './components/home/TeamsSection';
import VenuesSection from './components/home/VenuesSection';
import CitiesSection from './components/home/CitiesSection';
import Footer from './components/home/Footer';

function App() {
  return (
    <div className="min-h-screen bg-wc-dark">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <ScheduleSection />
      <TeamsSection />
      <VenuesSection />
      <CitiesSection />
      <Footer />
    </div>
  );
}

export default App;
