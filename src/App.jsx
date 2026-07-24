import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Navigation from './components/layout/Navigation';
import Footer from './components/layout/Footer';
import CartDrawer from './components/cart/CartDrawer';
import Hero from './components/home/Hero';
import TrustBar from './components/home/TrustBar';
import Bestsellers from './components/home/Bestsellers';
import UGC from './components/home/UGC';
import Categories from './components/home/Categories';
import BrandStory from './components/home/BrandStory';
import Testimonials from './components/home/Testimonials';
import Newsletter from './components/home/Newsletter';
import ProductDetail from './pages/ProductDetail';
import Shop from './pages/Shop';

function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Bestsellers />
      <UGC />
      <Categories />
      <BrandStory />
      <Testimonials />
      <Newsletter />
    </>
  );
}

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Navigation />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/collections" element={<Shop />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/about" element={
                <div className="min-h-screen bg-velmora-cream pt-24 pb-16">
                  <div className="max-w-3xl mx-auto px-4 text-center">
                    <h1 className="font-serif text-5xl mb-6">Our Story</h1>
                    <p className="text-velmora-charcoal/70 leading-relaxed mb-6">
                      Founded in 2018, Velmora was born from a simple belief: jewelry should feel like an extension of you—not an accessory you put on, but a part of who you are.
                    </p>
                    <p className="text-velmora-charcoal/70 leading-relaxed">
                      We create pieces that balance timeless elegance with modern sensibility. Each piece is designed in our studio and crafted by skilled artisans using ethically sourced materials.
                    </p>
                  </div>
                </div>
              } />
              <Route path="/journal" element={
                <div className="min-h-screen bg-velmora-cream pt-24 pb-16">
                  <div className="max-w-3xl mx-auto px-4 text-center">
                    <h1 className="font-serif text-5xl mb-6">Journal</h1>
                    <p className="text-velmora-charcoal/70">Coming soon...</p>
                  </div>
                </div>
              } />
              <Route path="*" element={
                <div className="min-h-screen flex items-center justify-center pt-24">
                  <div className="text-center">
                    <h1 className="font-serif text-4xl mb-4">Page Not Found</h1>
                    <a href="/" className="btn-outline">Go Home</a>
                  </div>
                </div>
              } />
            </Routes>
          </main>
          <Footer />
          <CartDrawer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
