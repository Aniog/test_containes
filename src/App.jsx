import HeroSection from './components/home/HeroSection';
import FeaturedRaces from './components/home/FeaturedRaces';
import BikeTypes from './components/home/BikeTypes';
import RaceCalendar from './components/home/RaceCalendar';
import SiteFooter from './components/home/SiteFooter';

function App() {
  return (
    <div className="bg-brand-dark text-neutral-100 min-h-screen">
      <HeroSection />
      <FeaturedRaces />
      <BikeTypes />
      <RaceCalendar />
      <SiteFooter />
    </div>
  );
}

export default App;
