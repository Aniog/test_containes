import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import Home from './components/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';

function App() {
  return (
    <Router>
      <CartProvider>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <div className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/about" element={<About />} />
              <Route path="/journal" element={<Journal />} />
            </Routes>
          </div>
          <Footer />
          <CartDrawer />
        </div>
      </CartProvider>
    </Router>
  );
}

// Simple About page
function About() {
  return (
    <main className="pt-20 md:pt-24 pb-20">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center py-20">
          <h1 className="font-serif text-4xl md:text-5xl tracking-wider mb-6">Our Story</h1>
          <p className="text-velmora-text-muted leading-relaxed mb-6">
            Founded in 2018, Velmora was born from a simple belief: every woman deserves 
            jewelry that makes her feel extraordinary, without compromise. We create demi-fine 
            pieces that bridge the gap between accessible luxury and timeless elegance.
          </p>
          <p className="text-velmora-text-muted leading-relaxed">
            Each piece in our collection is thoughtfully designed in our studio and crafted 
            with care using ethically sourced materials. Our 18K gold-plated jewelry is 
            made to be worn every day — a quiet luxury that becomes part of your personal narrative.
          </p>
        </div>
      </div>
    </main>
  );
}

// Simple Journal page
function Journal() {
  return (
    <main className="pt-20 md:pt-24 pb-20">
      <div className="container-custom">
        <div className="text-center py-20">
          <h1 className="font-serif text-4xl md:text-5xl tracking-wider mb-6">Journal</h1>
          <p className="text-velmora-text-muted">Coming soon...</p>
        </div>
      </div>
    </main>
  );
}

export default App;