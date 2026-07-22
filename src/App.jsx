import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import CartDrawer from './components/cart/CartDrawer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <div className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/collections" element={<Shop />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/about" element={<About />} />
              <Route path="/journal" element={<Journal />} />
            </Routes>
          </div>
          <Footer />
          <CartDrawer />
        </div>
      </Router>
    </CartProvider>
  );
}

function About() {
  return (
    <main className="min-h-screen bg-[var(--color-cream)] pt-20">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="font-serif text-4xl text-center">Our Story</h1>
        <div className="w-16 h-px bg-[var(--color-gold)] mx-auto mt-6 mb-12" />
        
        <div className="prose prose-lg mx-auto text-[var(--color-charcoal)]/80">
          <p className="mb-6">
            Founded with a passion for quiet luxury, Velmora was born from the belief that 
            exceptional jewelry should be accessible to every woman. Each piece in our collection 
            is thoughtfully designed and crafted with the finest materials, ensuring timeless 
            elegance that transcends trends.
          </p>
          <p className="mb-6">
            Our demi-fine jewelry bridges the gap between fine jewelry and fashion pieces, 
            offering you the perfect balance of quality, style, and value. We believe in 
            jewelry that tells a story — yours.
          </p>
          <p>
            Every Velmora piece is designed in our studio and crafted with care by skilled 
            artisans. We use only the finest materials: 18K gold plating over sterling silver, 
            ensuring both beauty and durability that lasts.
          </p>
        </div>
      </div>
    </main>
  );
}

function Journal() {
  return (
    <main className="min-h-screen bg-[var(--color-cream)] pt-20">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="font-serif text-4xl text-center">Journal</h1>
        <div className="w-16 h-px bg-[var(--color-gold)] mx-auto mt-6 mb-12" />
        
        <div className="grid gap-8">
          {[
            { title: 'The Art of Layering Necklaces', date: 'January 15, 2024' },
            { title: 'Caring for Your Gold Jewelry', date: 'December 28, 2023' },
            { title: 'Trends for the New Year', date: 'December 10, 2023' }
          ].map((post) => (
            <article key={post.title} className="border-b border-[var(--color-taupe)]/20 pb-8">
              <p className="text-sm text-[var(--color-taupe)] mb-2">{post.date}</p>
              <h2 className="font-serif text-2xl hover:text-[var(--color-gold)] cursor-pointer transition-colors">
                {post.title}
              </h2>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}

export default App;
