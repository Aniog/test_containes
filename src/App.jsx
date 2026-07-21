import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import CartDrawer from './components/Layout/CartDrawer';
import Home from './components/Home/Home';
import ProductDetail from './components/Product/ProductDetail';
import Shop from './components/Shop/Shop';
import './App.css';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Header />
          <CartDrawer />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

function About() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6 md:px-8 max-w-4xl mx-auto">
      <h1 className="heading-lg mb-8">Our Story</h1>
      <div className="space-y-6 font-sans leading-relaxed text-velmora-charcoal/80">
        <p>
          Velmora Fine Jewelry was born from a simple belief: that beautiful, 
          thoughtfully crafted jewelry should be accessible to everyone. Founded in 2020, 
          we set out to create pieces that bridge the gap between luxury and everyday wear.
        </p>
        <p>
          Each Velmora piece is crafted with meticulous attention to detail, using only 
          the finest materials—18K gold plating, hypoallergenic metals, and carefully 
          selected crystals. We believe that jewelry should not only look beautiful but feel 
          beautiful to wear.
        </p>
        <p>
          Our designs draw inspiration from the natural world, vintage aesthetics, and the 
          timeless elegance of classical jewelry. Whether you're treating yourself or 
          searching for the perfect gift, Velmora offers pieces that celebrate individuality 
          and the beauty of everyday moments.
        </p>
        <p className="font-serif text-lg text-velmora-gold italic">
          "Crafted to be Treasured"—this isn't just our tagline. It's our promise.
        </p>
      </div>
    </div>
  );
}

export default App;
