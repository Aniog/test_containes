import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from '@/context/CartContext';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CartDrawer from '@/components/layout/CartDrawer';
import Home from '@/pages/Home';
import Shop from '@/pages/Shop';
import ProductDetail from '@/pages/ProductDetail';
import './App.css';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen flex flex-col bg-ivory">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/collections" element={<Shop />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/about" element={<AboutPlaceholder />} />
              <Route path="/journal" element={<JournalPlaceholder />} />
            </Routes>
          </main>
          <Footer />
          <CartDrawer />
        </div>
      </Router>
    </CartProvider>
  );
}

function AboutPlaceholder() {
  return (
    <div className="pt-32 pb-16 max-w-3xl mx-auto px-4 md:px-8 text-center">
      <h1 className="font-serif text-4xl font-light text-charcoal">Our Story</h1>
      <p className="mt-6 text-stone leading-relaxed">
        Velmora was born from a simple belief: every woman deserves jewelry that feels luxurious without the luxury price tag. 
        Founded in 2022, we partner directly with skilled artisans to create demi-fine pieces that are designed to be worn every day 
        and treasured for years to come.
      </p>
    </div>
  );
}

function JournalPlaceholder() {
  return (
    <div className="pt-32 pb-16 max-w-3xl mx-auto px-4 md:px-8 text-center">
      <h1 className="font-serif text-4xl font-light text-charcoal">Journal</h1>
      <p className="mt-6 text-stone leading-relaxed">
        Stories of style, craftsmanship, and the women who inspire us. Coming soon.
      </p>
    </div>
  );
}

export default App;
