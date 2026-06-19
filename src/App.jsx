import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';
import { CartProvider } from './cart/CartContext';
import CartDrawer from './cart/CartDrawer';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import ProductPage from './pages/ProductPage';
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-[var(--cream)] text-[var(--ink)]">
          <Navbar />
          <CartDrawer />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/product/:slug" element={<ProductPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/journal" element={<AboutPage />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            background: 'var(--ink)',
            color: 'var(--cream)',
            border: 'none',
            fontSize: '13px',
            fontFamily: 'Inter, system-ui, sans-serif',
          },
        }}
      />
    </CartProvider>
  );
}

export default App;
