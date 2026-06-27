import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './contexts/CartContext';

// Layout Components
import Navigation from './components/layout/Navigation';
import Footer from './components/layout/Footer';
import CartDrawer from './components/layout/CartDrawer';

// Home Components
import Hero from './components/home/Hero';
import TrustBar from './components/home/TrustBar';
import Bestsellers from './components/home/Bestsellers';
import UGCRow from './components/home/UGCRow';
import CategoryTiles from './components/home/CategoryTiles';
import BrandStory from './components/home/BrandStory';
import Testimonials from './components/home/Testimonials';
import Newsletter from './components/home/Newsletter';

// Product Components
import ProductDetail from './components/product/ProductDetail';
import ShopPage from './components/product/ShopPage';

// Placeholder Pages
const AboutPage = () => (
  <div className="min-h-screen pt-24 flex items-center justify-center">
    <div className="text-center max-w-2xl px-6">
      <h1 className="heading-1 text-[var(--color-charcoal)] mb-6">Our Story</h1>
      <p className="body-lg text-[var(--color-warm-gray)] mb-8">
        Velmora was born from a simple belief: everyone deserves to wear beautiful jewelry 
        that feels luxurious without compromise. Founded in 2020, we craft each piece with intention, 
        using premium materials that are hypoallergenic and built to last.
      </p>
      <p className="body-lg text-[var(--color-warm-gray)]">
        Our designs draw inspiration from the warmth of golden hour light, the elegance 
        of timeless architecture, and the quiet confidence of those who know true style.
      </p>
    </div>
  </div>
);

const JournalPage = () => (
  <div className="min-h-screen pt-24 flex items-center justify-center">
    <div className="text-center">
      <h1 className="heading-1 text-[var(--color-charcoal)] mb-4">Journal</h1>
      <p className="body-lg text-[var(--color-warm-gray)]">Coming soon...</p>
    </div>
  </div>
);

const CollectionsPage = () => (
  <div className="min-h-screen pt-24 flex items-center justify-center">
    <div className="text-center">
      <h1 className="heading-1 text-[var(--color-charcoal)] mb-4">Collections</h1>
      <p className="body-lg text-[var(--color-warm-gray)] mb-8">Explore our curated collections</p>
      <a href="/shop" className="btn btn-primary">Shop All</a>
    </div>
  </div>
);

// Homepage Component
function HomePage() {
  return (
    <main>
      <Hero />
      <TrustBar />
      <Bestsellers />
      <UGCRow />
      <CategoryTiles />
      <BrandStory />
      <Testimonials />
      <Newsletter />
    </main>
  );
}

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <div className="min-h-screen flex flex-col">
          <Navigation />
          <CartDrawer />
          
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/shop" element={<ShopPage />} />
              <Route path="/collections" element={<CollectionsPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/journal" element={<JournalPage />} />
              <Route path="/product/:id" element={<ProductDetail />} />
            </Routes>
          </main>
          
          <Footer />
        </div>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
