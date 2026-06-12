import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/home/Hero';
import Products from '@/components/home/Products';
import WhyUs from '@/components/home/WhyUs';
import About from '@/components/home/About';
import Contact from '@/components/home/Contact';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <>
      <Hero />
      <Products />
      <WhyUs />
      <About />
      <Contact />
    </>
  );
}
