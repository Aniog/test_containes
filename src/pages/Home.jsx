import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/home/Hero';
import Products from '@/components/home/Products';
import Features from '@/components/home/Features';
import About from '@/components/home/About';
import Contact from '@/components/home/Contact';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-chalk font-inter">
      <Navbar />
      <Hero />
      <Products />
      <Features />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
