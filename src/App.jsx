import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import CartDrawer from './components/cart/CartDrawer';
import Home from './pages/Home';
import Collection from './pages/Collection';
import ProductDetail from './pages/ProductDetail';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/collection" element={<Collection />} />
              <Route path="/product/:slug" element={<ProductDetail />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </main>
          <Footer />
          <CartDrawer />
        </div>
      </Router>
    </CartProvider>
  );
}

// Simple About page placeholder
const About = () => {
  return (
    <main className="min-h-screen pt-20 md:pt-24">
      <div className="container-wide py-16">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-xs tracking-ultra-wide uppercase text-gold">
            Our Story
          </span>
          <h1 className="font-serif text-4xl md:text-5xl mt-2 mb-6">
            About Velmora
          </h1>
          <div className="space-y-4 text-warm-gray leading-relaxed">
            <p>
              Founded in 2019, Velmora Fine Jewelry was born from a simple belief: every woman deserves 
              to feel special. We create demi-fine jewelry that bridges the gap between fashion and fine 
              jewelry, offering pieces that are both accessible and luxurious.
            </p>
            <p>
              Each Velmora piece is thoughtfully designed and crafted with care. We use 18K gold plating 
              over sterling silver for durability and beauty, ensuring our jewelry can be treasured for 
              years to come.
            </p>
            <p>
              From statement pieces that command attention to delicate everyday essentials, our collection 
              is designed to mark life's precious moments — whether it's a gift for someone you love or 
              a well-deserved treat for yourself.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default App;
