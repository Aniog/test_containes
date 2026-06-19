import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from '@/context/CartContext';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CartDrawer from '@/components/layout/CartDrawer';
import HomePage from '@/components/home/HomePage';
import ProductDetailPage from '@/components/product/ProductDetailPage';
import CollectionPage from '@/components/collection/CollectionPage';
import AboutPage from '@/components/layout/AboutPage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <CartDrawer />
          <div className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/products/:slug" element={<ProductDetailPage />} />
              <Route path="/collections/all" element={<CollectionPage />} />
              <Route path="/about" element={<AboutPage />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
