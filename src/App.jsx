import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Navigation from './components/layout/Navigation';
import Footer from './components/layout/Footer';
import CartDrawer from './components/cart/CartDrawer';
import Hero from './components/home/Hero';
import TrustBar from './components/home/TrustBar';
import Bestsellers from './components/home/Bestsellers';
import UGCSection from './components/home/UGCSection';
import CategorySection from './components/home/CategorySection';
import BrandStory from './components/home/BrandStory';
import Testimonials from './components/home/Testimonials';
import Newsletter from './components/home/Newsletter';
import ProductDetail from './components/product/ProductDetail';
import ShopPage from './components/shop/ShopPage';

function HomePage() {
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
    <Router>
      <CartProvider>
        <div className="min-h-screen bg-velmora-cream flex flex-col">
          <Navigation />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/shop" element={<ShopPage />} />
              <Route path="/collections" element={<ShopPage />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="*" element={<HomePage />} />
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
