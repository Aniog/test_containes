import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Navigation from './components/layout/Navigation';
import Footer from './components/layout/Footer';
import CartDrawer from './components/cart/CartDrawer';
import Hero from './components/home/Hero';
import TrustBar from './components/home/TrustBar';
import Bestsellers from './components/home/Bestsellers';
import UGCReel from './components/home/UGCReel';
import CategoryTiles from './components/home/CategoryTiles';
import BrandStory from './components/home/BrandStory';
import Testimonials from './components/home/Testimonials';
import Newsletter from './components/home/Newsletter';
import ProductDetail from './components/product/ProductDetail';
import Shop from './components/shop/Shop';

function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Bestsellers />
      <UGCReel />
      <CategoryTiles />
      <BrandStory />
      <Testimonials />
      <Newsletter />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <div className="min-h-screen bg-velmora-cream flex flex-col">
          <Navigation />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/journal" element={<JournalPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>
          <Footer />
          <CartDrawer />
        </div>
      </CartProvider>
    </BrowserRouter>
  );
}

function AboutPage() {
  return (
    <div className="min-h-screen bg-velmora-cream pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-serif text-5xl text-center">Our Story</h1>
        <div className="mt-12 prose prose-lg mx-auto">
          <p className="text-velmora-charcoal/80 leading-relaxed">
            Velmora was born from a simple belief: every woman deserves jewelry that makes her feel extraordinary. 
            We create demi-fine pieces that bridge the gap between fashion jewelry and fine jewelry, offering 
            exceptional quality at accessible prices.
          </p>
          <p className="text-velmora-charcoal/80 leading-relaxed mt-6">
            Each piece in our collection is thoughtfully designed and crafted with attention to detail. 
            We use only the finest materials—18K gold plating over sterling silver—to ensure our jewelry 
            can be treasured for years to come.
          </p>
        </div>
      </div>
    </div>
  );
}

function JournalPage() {
  return (
    <div className="min-h-screen bg-velmora-cream pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-serif text-5xl text-center">Journal</h1>
        <p className="text-center text-velmora-charcoal/70 mt-4">Stories, styling tips, and jewelry care guides</p>
        <div className="mt-12 grid gap-8">
          {[1, 2, 3].map((i) => (
            <article key={i} className="group cursor-pointer">
              <div className="aspect-[2/1] bg-velmora-sand overflow-hidden">
                <img 
                  src={`https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=400&fit=crop`} 
                  alt="Blog post"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="mt-4">
                <span className="text-xs tracking-widest uppercase text-velmora-taupe">Jewelry Care</span>
                <h2 className="font-serif text-2xl mt-2 group-hover:text-velmora-gold transition-colors">
                  How to Care for Your Gold Plated Jewelry
                </h2>
                <p className="mt-2 text-velmora-charcoal/70">Learn the best practices for maintaining your jewelry's shine...</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

function NotFoundPage() {
  return (
    <div className="min-h-screen bg-velmora-cream pt-24 flex items-center justify-center">
      <div className="text-center">
        <h1 className="font-serif text-6xl">404</h1>
        <p className="mt-4 text-velmora-charcoal/70">Page not found</p>
      </div>
    </div>
  );
}

export default App;
