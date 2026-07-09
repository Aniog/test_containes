import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import CartDrawer from './components/layout/CartDrawer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import Collections from './pages/Collections';
import About from './pages/About';
import Journal from './pages/Journal';
import { Suspense } from 'react';

function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FFFEF9]">
      <div className="text-center">
        <div className="w-8 h-8 border-2 border-[#C8A96E] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p className="font-serif text-lg text-[#1A1A1A] tracking-wide">Loading...</p>
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <div className="min-h-screen flex flex-col bg-[#FFFEF9]">
          <Navbar />
          <main className="flex-1">
            <Suspense fallback={<Loading />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/shop/:category" element={<Shop />} />
                <Route path="/product/:productId" element={<ProductDetail />} />
                <Route path="/collections" element={<Collections />} />
                <Route path="/about" element={<About />} />
                <Route path="/journal" element={<Journal />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
          <CartDrawer />
        </div>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App
