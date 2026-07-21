import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import CartDrawer from './components/layout/CartDrawer';
import HomePage from './components/home/HomePage';
import ShopPage from './components/home/ShopPage';
import AboutPage from './components/home/AboutPage';
import ProductDetail from './components/product/ProductDetail';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen bg-[var(--color-cream)] flex flex-col">
          <Navbar />
          <CartDrawer />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/shop" element={<ShopPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/product/:slug" element={<ProductDetail />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
