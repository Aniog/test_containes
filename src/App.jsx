import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import Toast from './components/Toast';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';

function App() {
  return (
    <CartProvider>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:category" element={<Shop />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/collections" element={<Shop />} />
          <Route path="/about" element={
            <main className="pt-24 section">
              <div className="container">
                <h1 className="font-serif text-4xl mb-6">Our Story</h1>
                <p className="text-[var(--color-muted)] max-w-2xl leading-relaxed">
                  Founded with a vision to make fine jewelry accessible, Velmora creates 
                  pieces that bridge the gap between luxury and everyday elegance. Each piece 
                  is crafted with intention, designed to be treasured for a lifetime.
                </p>
              </div>
            </main>
          } />
          <Route path="/journal" element={
            <main className="pt-24 section">
              <div className="container">
                <h1 className="font-serif text-4xl mb-6">Journal</h1>
                <p className="text-[var(--color-muted)]">Coming soon...</p>
              </div>
            </main>
          } />
        </Routes>
        <Footer />
        <CartDrawer />
        <Toast />
      </Router>
    </CartProvider>
  );
}

export default App;
