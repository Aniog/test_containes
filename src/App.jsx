import Navbar from './components/home/Navbar';
import HeroSection from './components/home/HeroSection';
import ProductsSection from './components/home/ProductsSection';
import AboutSection from './components/home/AboutSection';
import LifestyleBanner from './components/home/LifestyleBanner';
import ReviewsSection from './components/home/ReviewsSection';
import ContactSection from './components/home/ContactSection';
import Footer from './components/home/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      <Navbar />
      <main>
        <HeroSection />
        <ProductsSection />
        <LifestyleBanner />
        <AboutSection />
        <ReviewsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
