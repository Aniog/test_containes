import Navbar from '@/components/home/Navbar';
import HeroSection from '@/components/home/HeroSection';
import ProductsSection from '@/components/home/ProductsSection';
import AdvantagesSection from '@/components/home/AdvantagesSection';
import AboutSection from '@/components/home/AboutSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import ContactSection from '@/components/home/ContactSection';
import Footer from '@/components/home/Footer';

export default function Home() {
  return (
    <div className="font-sans text-neutral-900 bg-white">
      <Navbar />
      <HeroSection />
      <ProductsSection />
      <AdvantagesSection />
      <AboutSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
