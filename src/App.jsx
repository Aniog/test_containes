import Nav from './components/microcosmos/Nav';
import Hero from './components/microcosmos/Hero';
import Intro from './components/microcosmos/Intro';
import Gallery from './components/microcosmos/Gallery';
import Worlds from './components/microcosmos/Worlds';
import Mosaic from './components/microcosmos/Mosaic';
import About from './components/microcosmos/About';
import Footer from './components/microcosmos/Footer';

function App() {
  return (
    <div className="bg-black min-h-screen">
      <Nav />
      <Hero />
      <Intro />
      <Gallery />
      <Worlds />
      <Mosaic />
      <About />
      <Footer />
    </div>
  );
}

export default App;
