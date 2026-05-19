import Navbar from '@/components/landing/Navbar';
import Hero from '@/components/landing/Hero';
import Features from '@/components/landing/Features';
import Gallery from '@/components/landing/Gallery';
import Seasons from '@/components/landing/Seasons';
import CallToAction from '@/components/landing/CallToAction';
import Footer from '@/components/landing/Footer';

const LandingPage = () => {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <Features />
      <Gallery />
      <Seasons />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default LandingPage;
