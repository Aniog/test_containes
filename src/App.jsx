import './App.css';
import Navbar from './components/microcosmos/Navbar';
import Hero from './components/microcosmos/Hero';
import ExploreSection from './components/microcosmos/ExploreSection';
import GallerySection from './components/microcosmos/GallerySection';
import OrganismsSection from './components/microcosmos/OrganismsSection';
import StatsSection from './components/microcosmos/StatsSection';
import ScienceSection from './components/microcosmos/ScienceSection';
import TimelineSection from './components/microcosmos/TimelineSection';
import AboutSection from './components/microcosmos/AboutSection';

function App() {
  return (
    <div className="bg-gray-950 min-h-screen">
      <Navbar />
      <Hero />
      <ExploreSection />
      <GallerySection />
      <OrganismsSection />
      <StatsSection />
      <ScienceSection />
      <TimelineSection />
      <AboutSection />
    </div>
  );
}

export default App;
