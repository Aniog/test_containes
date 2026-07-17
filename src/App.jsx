import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import About from './pages/About';

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/about" element={<About />} />
              <Route path="/journal" element={<div className="max-w-4xl mx-auto px-6 py-20 text-center"><h1 className="serif text-4xl mb-4">Journal</h1><p className="text-text-light">Coming soon.</p></div>} />
            </Routes>
          </main>
          <Footer />
          <CartDrawer />
        </div>
        <Toaster position="top-center" richColors closeButton />
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
