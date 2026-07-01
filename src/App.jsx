import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Navigation from './components/layout/Navigation';
import Footer from './components/layout/Footer';
import CartDrawer from './components/cart/CartDrawer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import './index.css';

function App() {
  return (
    <Router>
      <CartProvider>
        <div className="min-h-screen flex flex-col">
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/collections" element={<Shop />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/about" element={<main className="pt-24 min-h-screen bg-cream"><div className="max-w-content mx-auto px-4 md:px-8 py-16"><h1 className="font-serif text-4xl text-charcoal">Our Story</h1><p className="mt-4 text-stone-warm">Coming soon...</p></div></main>} />
            <Route path="/journal" element={<main className="pt-24 min-h-screen bg-cream"><div className="max-w-content mx-auto px-4 md:px-8 py-16"><h1 className="font-serif text-4xl text-charcoal">Journal</h1><p className="mt-4 text-stone-warm">Coming soon...</p></div></main>} />
            <Route path="*" element={<main className="pt-24 min-h-screen bg-cream"><div className="max-w-content mx-auto px-4 md:px-8 py-16"><h1 className="font-serif text-4xl text-charcoal">Page Not Found</h1></div></main>} />
          </Routes>
          <Footer />
          <CartDrawer />
        </div>
      </CartProvider>
    </Router>
  );
}

export default App;
