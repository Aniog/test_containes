import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from '@/context/CartContext';
import Layout from '@/Layout';
import Home from '@/pages/Home';
import Shop from '@/pages/Shop';
import ProductDetail from '@/pages/ProductDetail';
import './App.css';

function App() {
  return (
    <CartProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/about" element={<AboutPlaceholder />} />
            <Route path="/journal" element={<JournalPlaceholder />} />
          </Routes>
        </Layout>
      </Router>
    </CartProvider>
  );
}

function AboutPlaceholder() {
  return (
    <div className="pt-32 pb-20 max-w-3xl mx-auto px-4 md:px-8 text-center">
      <h1 className="font-serif text-4xl md:text-5xl font-light text-brand-charcoal">Our Story</h1>
      <p className="text-brand-muted font-sans mt-6 leading-relaxed">
        Velmora was founded with a singular vision: to create jewelry that feels as luxurious as fine pieces, 
        at a price point that makes daily wear possible. Every piece is designed in-house, crafted with 18K gold 
        plating over hypoallergenic metals, and finished by hand.
      </p>
    </div>
  );
}

function JournalPlaceholder() {
  return (
    <div className="pt-32 pb-20 max-w-3xl mx-auto px-4 md:px-8 text-center">
      <h1 className="font-serif text-4xl md:text-5xl font-light text-brand-charcoal">Journal</h1>
      <p className="text-brand-muted font-sans mt-6 leading-relaxed">
        Stories of style, craftsmanship, and the women who wear Velmora. Coming soon.
      </p>
    </div>
  );
}

export default App;
