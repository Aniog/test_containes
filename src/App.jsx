import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import CartDrawer from './components/layout/CartDrawer';
import Hero from './components/home/Hero';
import TrustBar from './components/home/TrustBar';
import Bestsellers from './components/home/Bestsellers';
import UGCSection from './components/home/UGCSection';
import CategoryTiles from './components/home/CategoryTiles';
import BrandStory from './components/home/BrandStory';
import Testimonials from './components/home/Testimonials';
import Newsletter from './components/home/Newsletter';
import Shop from './components/shop/Shop';
import ProductDetail from './components/product/ProductDetail';

function Home() {
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
    <CartProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/about" element={<BrandStory />} />
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
