import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from '@/context/CartContext';
import { Navigation, Footer } from '@/components/layout/Layout';
import { Hero } from '@/components/home/Hero';
import { TrustBar } from '@/components/home/TrustBar';
import { Bestsellers } from '@/components/home/Bestsellers';
import { UGCStrip } from '@/components/home/UGCStrip';
import { ShopByCategory } from '@/components/home/ShopByCategory';
import { BrandStory } from '@/components/home/BrandStory';
import { Testimonials } from '@/components/home/Testimonials';
import { Newsletter } from '@/components/home/Newsletter';
import { ProductDetail } from '@/components/product/ProductDetail';
import { CollectionPage } from '@/components/product/CollectionPage';

function HomePage() {
  return (
    <main>
      <Hero />
      <TrustBar />
      <Bestsellers />
      <UGCStrip />
      <ShopByCategory />
      <BrandStory />
      <Testimonials />
      <Newsletter />
    </main>
  );
}

function AboutPage() {
  return (
    <main className="min-h-screen">
      <div className="pt-32 pb-20 bg-cream">
        <div className="section-container text-center">
          <p className="font-sans text-xs font-medium uppercase tracking-extra-wide text-gold mb-4">Our Story</p>
          <h1 className="font-serif text-4xl lg:text-6xl font-light text-charcoal mb-6">
            Made with love,
            <br /><em className="italic">worn with intention</em>
          </h1>
          <p className="font-sans text-base text-warmGray-600 max-w-2xl mx-auto leading-relaxed">
            Velmora was founded in 2020 with a single mission: to make beautiful, hypoallergenic gold jewelry accessible to everyone who wants to feel a little more polished, a little more put-together, every single day.
          </p>
        </div>
      </div>
      <div className="section-container py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="aspect-[4/5] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=900&q=85"
              alt="Velmora jewelry"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className="font-serif text-3xl font-light text-charcoal mb-6">Designed with intention</h2>
            <div className="space-y-4">
              <p className="font-sans text-sm text-warmGray-600 leading-relaxed">
                Every Velmora piece begins as a sketch. We obsess over proportions, weight, and how light catches the surface. Then we work with artisan workshops that share our values — fair wages, clean working conditions, and genuine care for craft.
              </p>
              <p className="font-sans text-sm text-warmGray-600 leading-relaxed">
                Our gold plating is 18K — richer, warmer, and more durable than the 14K you'll find in most demi-fine brands. Each piece is tested for hypoallergenicity before it ever reaches you.
              </p>
              <p className="font-sans text-sm text-warmGray-600 leading-relaxed">
                We believe jewelry shouldn't just look beautiful on the day you buy it. It should look just as good three years later, worn into your daily rotation. That's the Velmora standard.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/collection" element={<CollectionPage />} />
          <Route path="/product/:slug" element={<ProductDetail />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={
            <main className="min-h-screen flex items-center justify-center">
              <div className="text-center">
                <h1 className="font-serif text-3xl text-charcoal mb-4">Page not found</h1>
                <a href="/" className="btn-secondary">Go Home</a>
              </div>
            </main>
          } />
        </Routes>
        <Footer />
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
