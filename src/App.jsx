import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import CartDrawer from './components/layout/CartDrawer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import './App.css'

function App() {
  return (
    <CartProvider>
      <Router>
        <Header />
        <CartDrawer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/collections" element={<Shop />} />
          <Route path="/about" element={<ComingSoon title="Our Story" />} />
          <Route path="/journal" element={<ComingSoon title="Journal" />} />
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  );
}

function ComingSoon({ title }) {
  return (
    <main className="min-h-screen pt-32 md:pt-40 pb-20 flex items-center justify-center">
      <div className="text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-gold)] mb-4">
          Coming Soon
        </p>
        <h1 className="font-serif text-3xl md:text-4xl mb-6">{title}</h1>
        <p className="text-[var(--color-text-secondary)] mb-8 max-w-md mx-auto">
          We're working on something special. Check back soon to discover more.
        </p>
        <a href="/" className="btn-outline inline-block">
          Return Home
        </a>
      </div>
    </main>
  );
}

export default App
