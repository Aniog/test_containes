import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import CartDrawer from './components/CartDrawer';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProductPage from './pages/product/ProductPage';
import ShopPage from './pages/shop/ShopPage';

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <div className="min-h-screen bg-velmora-cream">
          <Navbar />
          <CartDrawer />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<ShopPage />} />
              <Route path="/product/:slug" element={<ProductPage />} />
              <Route path="/about" element={<Home />} />
              <Route path="/journal" element={<Home />} />
            </Routes>
          </main>
          <Footer />
          <Toaster
            position="bottom-right"
            toastOptions={{
              style: {
                background: '#2D2D2D',
                color: '#FAF7F2',
                border: 'none',
                fontFamily: 'Inter, system-ui, sans-serif',
                fontSize: '13px',
              },
            }}
          />
        </div>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App
