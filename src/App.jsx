import Navbar from './components/microcosmos/Navbar';
import Hero from './components/microcosmos/Hero';
import About from './components/microcosmos/About';
import Gallery from './components/microcosmos/Gallery';
import Organisms from './components/microcosmos/Organisms';
import FeaturedGallery from './components/microcosmos/FeaturedGallery';
import Science from './components/microcosmos/Science';
import Quote from './components/microcosmos/Quote';
import Contact from './components/microcosmos/Contact';
import Footer from './components/microcosmos/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#050d1a] text-sky-50">
      <Navbar />
      <Hero />
      <About />
      <Gallery />
      <Organisms />
      <FeaturedGallery />
      <Science />
      <Quote />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
