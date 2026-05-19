import Navbar from '../components/home/Navbar';
import Hero from '../components/home/Hero';
import Benefits from '../components/home/Benefits';
import Source from '../components/home/Source';
import Stats from '../components/home/Stats';
import About from '../components/home/About';
import Testimonials from '../components/home/Testimonials';
import Contact from '../components/home/Contact';
import Footer from '../components/home/Footer';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Benefits />
      <Stats />
      <Source />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
