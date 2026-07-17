import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import CartDrawer from './components/layout/CartDrawer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen flex flex-col bg-velmora-cream">
          <Navbar />
          <CartDrawer />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/journal" element={<Journal />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

// Simple About page placeholder
function About() {
  return (
    <main className="min-h-screen pt-20 flex items-center justify-center">
      <div className="text-center px-4">
        <h1 className="font-serif text-4xl text-velmora-charcoal">Our Story</h1>
        <p className="mt-4 text-velmora-taupe max-w-md mx-auto">
          At Velmora, we believe jewelry should be more than an accessory—it should be a cherished part of your story.
        </p>
      </div>
    </main>
  );
}

// Simple Journal page placeholder
function Journal() {
  return (
    <main className="min-h-screen pt-20 flex items-center justify-center">
      <div className="text-center px-4">
        <h1 className="font-serif text-4xl text-velmora-charcoal">Journal</h1>
        <p className="mt-4 text-velmora-taupe max-w-md mx-auto">
          Stories about jewelry, style, and the moments that matter.
        </p>
      </div>
    </main>
  );
}

export default App;
