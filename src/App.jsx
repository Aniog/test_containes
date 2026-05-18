import Navbar from './components/microcosmos/Navbar';
import Hero from './components/microcosmos/Hero';
import Gallery from './components/microcosmos/Gallery';
import ScienceSection from './components/microcosmos/ScienceSection';
import QuoteSection from './components/microcosmos/QuoteSection';
import Specimens from './components/microcosmos/Specimens';
import AboutSection from './components/microcosmos/AboutSection';
import Footer from './components/microcosmos/Footer';

function App() {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Gallery />
        <ScienceSection />
        <QuoteSection />
        <Specimens />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
