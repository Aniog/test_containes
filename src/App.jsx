import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Gallery from './components/Gallery';
import Specimens from './components/Specimens';
import Mosaic from './components/Mosaic';
import Ecosystems from './components/Ecosystems';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-[#050d1a] min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Gallery />
      <Specimens />
      <Mosaic />
      <Ecosystems />
      <Footer />
    </div>
  );
}

export default App;
