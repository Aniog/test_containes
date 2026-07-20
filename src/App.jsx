import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from '@/context/CartContext';
import Nav from '@/components/layout/Nav';
import Footer from '@/components/layout/Footer';
import CartDrawer from '@/components/layout/CartDrawer';
import Home from '@/pages/Home';
import Shop from '@/pages/Shop';
import ProductDetail from '@/pages/ProductDetail';

function App() {
  return (
    <Router>
      <CartProvider>
        <Nav />
        <CartDrawer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/about" element={<PlaceholderPage title="Our Story" />} />
          <Route path="/journal" element={<PlaceholderPage title="Journal" />} />
          <Route path="*" element={<PlaceholderPage title="Page Not Found" />} />
        </Routes>
        <Footer />
      </CartProvider>
    </Router>
  );
}

function PlaceholderPage({ title }) {
  return (
    <div className="min-h-screen bg-ivory flex items-center justify-center pt-20">
      <div className="text-center px-4">
        <h1 className="font-serif text-5xl font-light text-espresso tracking-wide mb-4">{title}</h1>
        <p className="font-sans text-sm text-stone">Coming soon.</p>
      </div>
    </div>
  );
}

export default App;
