import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import HostCountries from './components/HostCountries';
import HostCities from './components/HostCities';
import KeyFacts from './components/KeyFacts';
import Schedule from './components/Schedule';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#0a0e1a]">
      <Navbar />
      <Hero />
      <About />
      <HostCountries />
      <HostCities />
      <KeyFacts />
      <Schedule />
      <Footer />
    </div>
  );
}

export default App;
