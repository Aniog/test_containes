import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/home/HeroSection';
import ProductsSection from '@/components/home/ProductsSection';
import WhyUsSection from '@/components/home/WhyUsSection';
import AboutSection from '@/components/home/AboutSection';
import ContactSection from '@/components/home/ContactSection';

const Home = () => {
  return (
    <div className="min-h-screen bg-steel-900">
      <Navbar />
      <HeroSection />
      <ProductsSection />
      <WhyUsSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Home;
