import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { UIProvider } from './context/UIContext';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import CartDrawer from './components/layout/CartDrawer';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import Collection from './pages/Collection';

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <UIProvider>
          <div className="min-h-screen flex flex-col">
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/collection" element={<Collection />} />
              <Route path="/collection/:category" element={<Collection />} />
              {/* Placeholder routes */}
              <Route path="/about" element={<ComingSoon title="Our Story" />} />
              <Route path="/journal" element={<ComingSoon title="Journal" />} />
              <Route path="/contact" element={<ComingSoon title="Contact" />} />
              <Route path="/shipping" element={<ComingSoon title="Shipping" />} />
              <Route path="/returns" element={<ComingSoon title="Returns" />} />
              <Route path="/faq" element={<ComingSoon title="FAQ" />} />
              <Route path="/privacy" element={<ComingSoon title="Privacy Policy" />} />
              <Route path="/terms" element={<ComingSoon title="Terms of Service" />} />
            </Routes>
            <Footer />
            <CartDrawer />
          </div>
        </UIProvider>
      </CartProvider>
    </BrowserRouter>
  );
}

// Placeholder for pages not yet implemented
function ComingSoon({ title }) {
  return (
    <main className="flex-1 flex items-center justify-center pt-20">
      <div className="text-center px-4">
        <h1 className="font-serif text-3xl md:text-4xl text-espresso mb-4">{title}</h1>
        <p className="text-stone">This page is coming soon.</p>
      </div>
    </main>
  );
}

export default App;
