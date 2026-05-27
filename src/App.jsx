import Navbar from './components/swim/Navbar';
import Hero from './components/swim/Hero';
import Products from './components/swim/Products';
import Features from './components/swim/Features';
import About from './components/swim/About';
import Testimonials from './components/swim/Testimonials';
import Brands from './components/swim/Brands';
import Contact from './components/swim/Contact';
import Footer from './components/swim/Footer';

function App() {
  return (
    <div className="min-h-screen bg-sky-50 text-sky-900">
      <Navbar />
      <Hero />
      <Products />
      <Features />
      <About />
      <Testimonials />
      <Brands />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
