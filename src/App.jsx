import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Specials from './components/Specials';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-cream font-sans">
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <Specials />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

