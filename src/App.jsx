import Navbar from './components/microcosmos/Navbar';
import Hero from './components/microcosmos/Hero';
import ExploreSection from './components/microcosmos/ExploreSection';
import GallerySection from './components/microcosmos/GallerySection';
import OrganismsSection from './components/microcosmos/OrganismsSection';
import ScienceSection from './components/microcosmos/ScienceSection';
import AboutSection from './components/microcosmos/AboutSection';
import Footer from './components/microcosmos/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#050a0f]">
      <Navbar />
      <main>
        <Hero />
        <ExploreSection />
        <GallerySection />
        <OrganismsSection />
        <ScienceSection />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
