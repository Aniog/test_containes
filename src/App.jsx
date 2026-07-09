import './App.css';
import Navbar from './components/ski/Navbar';
import Hero from './components/ski/Hero';
import Destinations from './components/ski/Destinations';
import Skills from './components/ski/Skills';
import Gear from './components/ski/Gear';
import Conditions from './components/ski/Conditions';
import Testimonials from './components/ski/Testimonials';
import CallToAction from './components/ski/CallToAction';
import Footer from './components/ski/Footer';

function App() {
  return (
    <div className="min-h-screen bg-deep-navy">
      <Navbar />
      <Hero />
      <Destinations />
      <Skills />
      <Gear />
      <Conditions />
      <Testimonials />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;
