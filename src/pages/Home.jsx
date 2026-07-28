import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import Services from '@/components/home/Services';
import Team from '@/components/home/Team';
import Cases from '@/components/home/Cases';
import Testimonials from '@/components/home/Testimonials';
import About from '@/components/home/About';
import Contact from '@/components/home/Contact';

export default function Home() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <Services />
      <Team />
      <Cases />
      <Testimonials />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
