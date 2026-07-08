import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import CartDrawer from './components/layout/CartDrawer';
import Hero from './components/home/Hero';
import TrustBar from './components/home/TrustBar';
import Bestsellers from './components/home/Bestsellers';
import UGCSection from './components/home/UGCSection';
import CategorySection from './components/home/CategorySection';
import BrandStory from './components/home/BrandStory';
import Testimonials from './components/home/Testimonials';
import Newsletter from './components/home/Newsletter';
import ProductDetail from './components/products/ProductDetail';
import Shop from './components/products/Shop';
import About from './pages/About';
import Collections from './pages/Collections';

function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Bestsellers />
      <UGCSection />
      <CategorySection />
      <BrandStory />
      <Testimonials />
      <Newsletter />
    </>
  );
}

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/collections" element={<Collections />} />
              <Route path="/about" element={<About />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              {/* Placeholder routes */}
              <Route path="/journal" element={<About />} />
              <Route path="/contact" element={<About />} />
              <Route path="/shipping" element={<About />} />
              <Route path="/care" element={<About />} />
              <Route path="/faqs" element={<About />} />
              <Route path="/sizing" element={<About />} />
              <Route path="/sustainability" element={<About />} />
              <Route path="/press" element={<About />} />
              <Route path="/careers" element={<About />} />
              <Route path="/privacy" element={<About />} />
              <Route path="/terms" element={<About />} />
              <Route path="/checkout" element={<About />} />
            </Routes>
          </main>
          <Footer />
          <CartDrawer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
