import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import CartDrawer from './components/cart/CartDrawer';
import Home from './pages/Home';
import Collection from './pages/Collection';
import Product from './pages/Product';
import { useEffect } from 'react';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/product/:id" element={<Product />} />
        </Routes>
      </main>
      <Footer />
      <CartDrawer />
    </BrowserRouter>
  );
}
