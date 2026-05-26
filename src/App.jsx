import Navbar from './components/bikes/Navbar';
import HeroSection from './components/bikes/HeroSection';
import BikeCategories from './components/bikes/BikeCategories';
import FeaturedBikes from './components/bikes/FeaturedBikes';
import WhyBikes from './components/bikes/WhyBikes';
import Testimonials from './components/bikes/Testimonials';
import Footer from './components/bikes/Footer';

function App() {
  return (
    <div className="bg-[#111111] min-h-screen">
      <Navbar />
      <HeroSection />
      <BikeCategories />
      <FeaturedBikes />
      <WhyBikes />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
