import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/home/Hero';
import About from '@/components/home/About';
import Gallery from '@/components/home/Gallery';
import FeaturedCreatures from '@/components/home/FeaturedCreatures';
import Ecosystem from '@/components/home/Ecosystem';
import Stats from '@/components/home/Stats';
import Footer from '@/components/layout/Footer';

function App() {
  return (
    <div className="bg-[#050a0f] min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Gallery />
      <FeaturedCreatures />
      <Ecosystem />
      <Stats />
      <Footer />
    </div>
  );
}

export default App;
