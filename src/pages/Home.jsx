import Navbar from '@/components/home/Navbar';
import Hero from '@/components/home/Hero';
import Features from '@/components/home/Features';
import Stats from '@/components/home/Stats';
import CTA from '@/components/home/CTA';
import Footer from '@/components/home/Footer';

const Home = () => {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <Features />
      <Stats />
      <CTA />
      <Footer />
    </div>
  );
};

export default Home;
