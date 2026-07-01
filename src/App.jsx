import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Menu from '@/components/sections/Menu';
import Specials from '@/components/sections/Specials';
import Gallery from '@/components/sections/Gallery';
import Testimonials from '@/components/sections/Testimonials';
import Contact from '@/components/sections/Contact';

function App() {
  return (
    <div className="bg-cream font-inter">
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <Specials />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
