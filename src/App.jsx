import Navbar from './components/watch/Navbar';
import Hero from './components/watch/Hero';
import Features from './components/watch/Features';
import Health from './components/watch/Health';
import Design from './components/watch/Design';
import Specs from './components/watch/Specs';
import CTA from './components/watch/CTA';
import Footer from './components/watch/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <Features />
      <Health />
      <Design />
      <Specs />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
