import Navbar from '../components/home/Navbar';
import Hero from '../components/home/Hero';
import BrandStory from '../components/home/BrandStory';
import Products from '../components/home/Products';
import Lifestyle from '../components/home/Lifestyle';
import Reviews from '../components/home/Reviews';
import Contact from '../components/home/Contact';
import Footer from '../components/home/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <BrandStory />
      <Products />
      <Lifestyle />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  );
}
