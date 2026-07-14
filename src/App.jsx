import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import CartDrawer from './components/layout/CartDrawer';
import Toaster from './components/ui/Toaster';

// Pages
import Home from './pages/Home';
import Shop from './pages/Shop';
import Collections from './pages/Collections';
import About from './pages/About';
import Journal from './pages/Journal';
import JournalArticle from './pages/JournalArticle';
import ProductDetail from './pages/ProductDetail';

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <div className="min-h-screen bg-velmora-bg text-velmora-text">
          <Navbar />
          
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/collections" element={<Collections />} />
              <Route path="/about" element={<About />} />
              <Route path="/journal" element={<Journal />} />
              <Route path="/journal/:id" element={<JournalArticle />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              {/* Fallback to home */}
              <Route path="*" element={<Home />} />
            </Routes>
          </main>

          <Footer />
          <CartDrawer />
          <Toaster />
        </div>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App
