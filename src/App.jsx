import Navbar from './components/microcosmos/Navbar';
import Hero from './components/microcosmos/Hero';
import About from './components/microcosmos/About';
import Gallery from './components/microcosmos/Gallery';
import Organisms from './components/microcosmos/Organisms';
import FeaturedImages from './components/microcosmos/FeaturedImages';
import Science from './components/microcosmos/Science';
import Contact from './components/microcosmos/Contact';
import Footer from './components/microcosmos/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-950 font-[Inter,system-ui,sans-serif]">
      <Navbar />
      <Hero />
      <About />
      <Gallery />
      <Organisms />
      <FeaturedImages />
      <Science />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
