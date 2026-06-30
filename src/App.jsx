import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from '@/context/CartContext';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CartDrawer from '@/components/ui/CartDrawer';
import Homepage from '@/components/home/Homepage';
import ProductDetail from '@/components/product/ProductDetail';
import ShopPage from '@/components/shop/ShopPage';

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <div className="min-h-screen flex flex-col bg-ivory">
          <Header />
          <div className="flex-1">
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/product/:slug" element={<ProductDetail />} />
              <Route path="/shop" element={<ShopPage />} />
              <Route path="/about" element={<AboutPage />} />
            </Routes>
          </div>
          <Footer />
          <CartDrawer />
        </div>
      </CartProvider>
    </BrowserRouter>
  );
}

// Simple About page placeholder
function AboutPage() {
  return (
    <main className="pt-20">
      <div className="bg-cream py-16 lg:py-24">
        <div className="container-narrow text-center">
          <p className="text-sm tracking-widest text-gold mb-4">OUR STORY</p>
          <h1 className="font-serif text-4xl md:text-5xl text-charcoal mb-6">
            About Velmora
          </h1>
          <p className="text-warmGray max-w-2xl mx-auto text-lg leading-relaxed">
            Crafted to be treasured. Velmora was founded on the belief that every woman 
            deserves beautiful, high-quality jewelry without the luxury price tag.
          </p>
        </div>
      </div>
      <div className="section-padding">
        <div className="container-narrow">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&q=80"
                alt="Velmora craftsmanship"
                className="rounded-lg"
              />
            </div>
            <div className="space-y-6">
              <h2 className="font-serif text-3xl text-charcoal">Our Mission</h2>
              <p className="text-warmGray leading-relaxed">
                We create jewelry that moves with you — from morning coffee to evening out. 
                Each piece is thoughtfully designed and crafted with 18K gold plating over 
                hypoallergenic stainless steel.
              </p>
              <h2 className="font-serif text-3xl text-charcoal pt-4">Our Promise</h2>
              <p className="text-warmGray leading-relaxed">
                Quality, sustainability, and timeless design are at the heart of everything we do. 
                We believe jewelry should be accessible, comfortable, and built to last.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
