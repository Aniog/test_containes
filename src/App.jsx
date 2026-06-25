import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/home/Hero';
import Products from '@/components/home/Products';
import Features from '@/components/home/Features';
import About from '@/components/home/About';
import Testimonials from '@/components/home/Testimonials';
import Contact from '@/components/home/Contact';
import Footer from '@/components/layout/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Products />
      <Features />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
