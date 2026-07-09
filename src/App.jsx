import './App.css';
import Navbar from './components/microcosmos/Navbar';
import Hero from './components/microcosmos/Hero';
import About from './components/microcosmos/About';
import Gallery from './components/microcosmos/Gallery';
import Specimens from './components/microcosmos/Specimens';
import Facts from './components/microcosmos/Facts';
import Footer from './components/microcosmos/Footer';

function App() {
  return (
    <div className="bg-cosmos-deep min-h-screen text-cosmos-text">
      <Navbar />
      <Hero />
      <About />
      <Gallery />
      <Specimens />
      <Facts />
      <Footer />
    </div>
  );
}

export default App;

