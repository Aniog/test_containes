import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';
import { CartProvider } from './context/CartContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import CartDrawer from './components/cart/CartDrawer';
import Home from './pages/Home';
import CollectionPage from './pages/CollectionPage';
import ProductDetail from './pages/ProductDetail';

const Layout = ({ children }) => (
  <div className="min-h-screen flex flex-col">
    <Navbar />
    <main className="flex-1">
      {children}
    </main>
    <Footer />
    <CartDrawer />
  </div>
);

function App() {
  return (
    <Router>
      <CartProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<CollectionPage />} />
            <Route path="/product/:slug" element={<ProductDetail />} />
            <Route path="/about" element={
              <div className="pt-24 min-h-screen flex items-center justify-center">
                <div className="text-center max-w-2xl px-4">
                  <h1 className="section-title text-[var(--velmora-text)] mb-6">Our Story</h1>
                  <div className="w-16 h-px bg-[var(--velmora-accent)] mx-auto mb-8" />
                  <p className="text-[var(--velmora-text-muted)] leading-relaxed mb-6">
                    Velmora was born from a simple belief: that beautiful jewelry shouldn't require a luxury budget. 
                    We craft each piece with the same care and attention to detail as fine jewelry houses, 
                    using 18K gold plating over recycled brass.
                  </p>
                  <p className="text-[var(--velmora-text-muted)] leading-relaxed">
                    Every design is tested for hypoallergenic wear, because sensitive skin shouldn't mean 
                    sacrificing style. From our studio to your jewelry box, each piece is made to be treasured.
                  </p>
                </div>
              </div>
            } />
            <Route path="/journal" element={
              <div className="pt-24 min-h-screen flex items-center justify-center">
                <div className="text-center max-w-2xl px-4">
                  <h1 className="section-title text-[var(--velmora-text)] mb-6">Journal</h1>
                  <div className="w-16 h-px bg-[var(--velmora-accent)] mx-auto mb-8" />
                  <p className="text-[var(--velmora-text-muted)] leading-relaxed">
                    Stories, styling tips, and behind-the-scenes looks at the Velmora world. Coming soon.
                  </p>
                </div>
              </div>
            } />
          </Routes>
        </Layout>
        <Toaster position="bottom-right" />
      </CartProvider>
    </Router>
  );
}

export default App;
