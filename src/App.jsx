import Navbar from './components/microcosmos/Navbar';
import Hero from './components/microcosmos/Hero';
import About from './components/microcosmos/About';
import Gallery from './components/microcosmos/Gallery';
import Worlds from './components/microcosmos/Worlds';
import Explore from './components/microcosmos/Explore';
import Quote from './components/microcosmos/Quote';
import Footer from './components/microcosmos/Footer';

function App() {
  return (
    <div className="bg-gray-950 min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Gallery />
      <Worlds />
      <Quote />
      <Explore />
      <Footer />
    </div>
  );
}

export default App;
