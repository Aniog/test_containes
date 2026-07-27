// MicroCosmos App
import Navbar from './components/microcosmos/Navbar';
import Hero from './components/microcosmos/Hero';
import Gallery from './components/microcosmos/Gallery';
import Worlds from './components/microcosmos/Worlds';
import Stats from './components/microcosmos/Stats';
import Science from './components/microcosmos/Science';
import Explore from './components/microcosmos/Explore';
import Footer from './components/microcosmos/Footer';

function App() {
  return (
    <div className="min-h-screen bg-deep-space font-sans">
      <Navbar />
      <main>
        <Hero />
        <Gallery />
        <Worlds />
        <Stats />
        <Science />
        <Explore />
      </main>
      <Footer />
    </div>
  );
}

export default App;
