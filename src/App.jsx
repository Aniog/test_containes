import './App.css';
import Navbar from './components/komodo/Navbar';
import Hero from './components/komodo/Hero';
import About from './components/komodo/About';
import Attractions from './components/komodo/Attractions';
import BestTime from './components/komodo/BestTime';
import TravelTips from './components/komodo/TravelTips';
import Gallery from './components/komodo/Gallery';
import Footer from './components/komodo/Footer';

function App() {
  return (
    <div className="font-sans bg-mist text-stone">
      <Navbar />
      <Hero />
      <About />
      <Attractions />
      <BestTime />
      <TravelTips />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;

