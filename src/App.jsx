import './App.css';
import Navbar from './components/bakery/Navbar';
import Hero from './components/bakery/Hero';
import About from './components/bakery/About';
import Features from './components/bakery/Features';
import Menu from './components/bakery/Menu';
import Testimonials from './components/bakery/Testimonials';
import Contact from './components/bakery/Contact';
import Footer from './components/bakery/Footer';

function App() {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Menu />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

