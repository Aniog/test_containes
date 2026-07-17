import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import CartDrawer from './components/layout/CartDrawer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';

function PlaceholderPage({ title }) {
  return (
    <div className="min-h-screen bg-ivory flex items-center justify-center pt-20">
      <div className="text-center px-5">
        <p className="font-sans text-xs tracking-widest uppercase text-gold mb-4">Velmora</p>
        <h1 className="font-serif text-5xl text-espresso mb-4">{title}</h1>
        <p className="font-sans text-sm text-muted mb-8">This page is coming soon.</p>
        <a href="/" className="btn-outline-espresso inline-block">Back to Home</a>
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <CartDrawer />
          <div className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/product/:slug" element={<ProductDetail />} />
              <Route path="/about" element={<PlaceholderPage title="Our Story" />} />
              <Route path="/journal" element={<PlaceholderPage title="Journal" />} />
              <Route path="*" element={<PlaceholderPage title="Page Not Found" />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;

