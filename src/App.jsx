import Navbar from './components/fishing/Navbar';
import Hero from './components/fishing/Hero';
import Features from './components/fishing/Features';
import Categories from './components/fishing/Categories';
import Products from './components/fishing/Products';
import Testimonials from './components/fishing/Testimonials';
import Newsletter from './components/fishing/Newsletter';
import Footer from './components/fishing/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <Categories />
      <Products />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
