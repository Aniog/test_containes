import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import CartDrawer from './components/ui/CartDrawer';
import Hero from './components/home/Hero';
import TrustBar from './components/home/TrustBar';
import Bestsellers from './components/home/Bestsellers';
import UGCSection from './components/home/UGCSection';
import CategoryTiles from './components/home/CategoryTiles';
import BrandStory from './components/home/BrandStory';
import Testimonials from './components/home/Testimonials';
import Newsletter from './components/home/Newsletter';
import ProductDetail from './components/products/ProductDetail';
import Collections from './components/products/Collections';

function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Bestsellers />
      <UGCSection />
      <CategoryTiles />
      <BrandStory />
      <Testimonials />
      <Newsletter />
    </>
  );
}

function App() {
  return (
    <Router>
      <CartProvider>
        <div className="min-h-screen bg-[#FAF7F2] flex flex-col">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/collections" element={<Collections />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/about" element={
                <div className="min-h-screen bg-[#FAF7F2] pt-20">
                  <div className="max-w-3xl mx-auto px-4 py-20 text-center">
                    <h1 className="font-serif text-4xl md:text-5xl mb-6">Our Story</h1>
                    <p className="text-[#6B6B6B] leading-relaxed mb-6">
                      Founded with a passion for quiet luxury, Velmora was born from the belief that beautiful jewelry should feel accessible without compromising on quality. Each piece in our collection is thoughtfully designed to become a treasured part of your personal story.
                    </p>
                    <p className="text-[#6B6B6B] leading-relaxed">
                      We believe in jewelry that whispers rather than shouts—pieces that catch the light just right, that become your daily companions, that you reach for again and again. This is demi-fine jewelry elevated.
                    </p>
                  </div>
                </div>
              } />
            </Routes>
          </main>
          <Footer />
          <CartDrawer />
        </div>
      </CartProvider>
    </Router>
  );
}

export default App;
