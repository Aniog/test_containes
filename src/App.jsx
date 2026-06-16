import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/home/Hero';
import Products from './components/home/Products';
import Features from './components/home/Features';
import About from './components/home/About';
import Testimonials from './components/home/Testimonials';
import Contact from './components/home/Contact';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-surface font-sans">
      <Navbar />
      <main>
        <Hero />
        <Products />
        <Features />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;

