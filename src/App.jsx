import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import CartDrawer from './components/cart/CartDrawer';
import Home from './pages/Home';
import ShopPage from './pages/ShopPage';
import Collections from './pages/Collections';
import ProductDetail from './pages/ProductDetail';
import About from './pages/About';
import Journal from './pages/Journal';

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <div className="min-h-screen flex flex-col bg-velmora-bg">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<ShopPage />} />
              <Route path="/collections" element={<Collections />} />
              <Route path="/product/:slug" element={<ProductDetail />} />
              <Route path="/about" element={<About />} />
              <Route path="/journal" element={<Journal />} />
            </Routes>
          </main>
          <Footer />
          <CartDrawer />
        </div>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App
