import Navbar from './components/mountain/Navbar';
import Hero from './components/mountain/Hero';
import About from './components/mountain/About';
import FeaturedPeaks from './components/mountain/FeaturedPeaks';
import WhyClimb from './components/mountain/WhyClimb';
import Gear from './components/mountain/Gear';
import Gallery from './components/mountain/Gallery';
import SafetyTips from './components/mountain/SafetyTips';
import Footer from './components/mountain/Footer';

function App() {
  return (
    <div className="bg-slate-950 min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <FeaturedPeaks />
      <WhyClimb />
      <Gear />
      <Gallery />
      <SafetyTips />
      <Footer />
    </div>
  );
}

export default App;
