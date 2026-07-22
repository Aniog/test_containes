import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from '@/context/CartContext';
import Nav from '@/components/shared/Nav';
import Footer from '@/components/shared/Footer';
import CartDrawer from '@/components/shared/CartDrawer';
import Home from '@/pages/Home';
import Shop from '@/pages/Shop';
import ProductDetail from '@/pages/ProductDetail';

function App() {
  return (
    <Router>
      <CartProvider>
        <div className="flex flex-col min-h-screen bg-ivory">
          <Nav />
          <CartDrawer />
          <div className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/about" element={<PlaceholderPage title="Our Story" />} />
              <Route path="/journal" element={<PlaceholderPage title="Journal" />} />
              <Route path="*" element={<PlaceholderPage title="Page Not Found" />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </CartProvider>
    </Router>
  );
}

const PlaceholderPage = ({ title }) => (
  <div className="min-h-screen bg-ivory flex items-center justify-center pt-20">
    <div className="text-center px-4">
      <h1 className="font-cormorant text-5xl font-light text-charcoal tracking-wide">{title}</h1>
      <p className="font-inter text-sm text-mist mt-4">Coming soon.</p>
    </div>
  </div>
);

export default App;
