import Nav from './components/microcosmos/Nav';
import Hero from './components/microcosmos/Hero';
import ExploreSection from './components/microcosmos/ExploreSection';
import StatsBar from './components/microcosmos/StatsBar';
import GallerySection from './components/microcosmos/GallerySection';
import OrganismsSection from './components/microcosmos/OrganismsSection';
import QuoteSection from './components/microcosmos/QuoteSection';
import ScienceSection from './components/microcosmos/ScienceSection';
import AboutSection from './components/microcosmos/AboutSection';
import Footer from './components/microcosmos/Footer';

function App() {
  return (
    <div className="bg-[#050a0f] min-h-screen">
      <Nav />
      <Hero />
      <ExploreSection />
      <StatsBar />
      <GallerySection />
      <OrganismsSection />
      <QuoteSection />
      <ScienceSection />
      <AboutSection />
      <Footer />
    </div>
  );
}

export default App;
