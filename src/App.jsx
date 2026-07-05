import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';
import { CartProvider } from '@/context/CartContext';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HomePage from '@/pages/HomePage';
import ShopPage from '@/components/shop/ShopPage';
import ProductDetail from '@/components/product/ProductDetail';
import AboutPage from '@/pages/AboutPage';
import JournalPage from '@/pages/JournalPage';

function App() {
  return (
    <Router>
      <CartProvider>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/product/:slug" element={<ProductDetail />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/journal" element={<JournalPage />} />
          </Routes>
          <Footer />
        </div>
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: '#1A1A1A',
              color: '#fff',
              border: 'none',
              borderRadius: '0',
              fontSize: '13px',
              letterSpacing: '0.05em',
            },
          }}
        />
      </CartProvider>
    </Router>
  );
}

export default App;
