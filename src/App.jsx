import Navbar from './components/rugby/Navbar';
import Hero from './components/rugby/Hero';
import About from './components/rugby/About';
import Team from './components/rugby/Team';
import Schedule from './components/rugby/Schedule';
import News from './components/rugby/News';
import Contact from './components/rugby/Contact';
import Footer from './components/rugby/Footer';

function App() {
  return (
    <div className="min-h-screen bg-rugby-dark font-sans">
      <Navbar />
      <Hero />
      <About />
      <Team />
      <Schedule />
      <News />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
