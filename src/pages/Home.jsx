import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TrustBar from '../components/TrustBar';
import ProductCard from '../components/ProductCard';
import UGCRow from '../components/UGCRow';
import CategoryTiles from '../components/CategoryTiles';
import Testimonials from '../components/Testimonials';
import { products } from '../data/products';

const Home = () => {
  // Show 5 bestsellers (first 5 products)
  const bestsellers = products.slice(0, 5);

  return (
    <div className="min-h-screen bg-velmora-bg">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[100dvh] min-h-[620px] flex items-center justify-center pt-20">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1600&q=80')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black/25" />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-3xl">
          <h1 className="font-serif text-5xl md:text-6xl text-white tracking-[0.02em] leading-[1.1] mb-6">
            Crafted to be<br />Treasured
          </h1>
          <p className="text-white/90 text-lg mb-8 max-w-md mx-auto">
            Demi-fine gold jewelry for the modern woman. Timeless pieces, thoughtfully made.
          </p>
          <Link to="/shop" className="btn btn-gold inline-block">
            SHOP THE COLLECTION
          </Link>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/70 text-xs tracking-[0.2em]">
          SCROLL TO EXPLORE
        </div>
      </section>

      <TrustBar />

      {/* Bestsellers */}
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-12">
        <div className="flex items-end justify-between mb-8">
          <div>
            <div className="text-xs tracking-[0.15em] text-velmora-muted mb-1">CURATED FOR YOU</div>
            <h2 className="font-serif text-3xl tracking-[0.02em]">Bestsellers</h2>
          </div>
          <Link to="/shop" className="hidden md:block text-sm underline underline-offset-4 hover:text-velmora-gold">
            View all
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-10">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Link to="/shop" className="text-sm underline underline-offset-4">View all products</Link>
        </div>
      </section>

      {/* UGC Reel Row */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-6 mb-6">
          <div className="text-xs tracking-[0.15em] text-velmora-muted mb-1">AS SEEN ON YOU</div>
          <h2 className="font-serif text-3xl tracking-[0.02em]">In the Wild</h2>
        </div>
        <UGCRow />
      </section>

      {/* Shop by Category */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="mb-8">
          <div className="text-xs tracking-[0.15em] text-velmora-muted mb-1">DISCOVER</div>
          <h2 className="font-serif text-3xl tracking-[0.02em]">Shop by Category</h2>
        </div>
        <CategoryTiles />
      </section>

      {/* Brand Story */}
      <section className="bg-velmora-cream py-16">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="aspect-[4/3] bg-velmora-border overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=900&q=80"
              alt="Velmora atelier"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <div className="text-xs tracking-[0.15em] text-velmora-muted mb-2">SINCE 2018</div>
            <h2 className="font-serif text-4xl tracking-[0.02em] mb-6">Our Story</h2>
            <div className="space-y-4 text-[15px] leading-relaxed text-velmora-charcoal/90">
              <p>
                Velmora was born from a simple belief: that beautiful jewelry should be accessible without compromise.
              </p>
              <p>
                We design demi-fine pieces in 18K gold plating that feel like heirlooms from the first wear. Each piece is crafted with intention, using hypoallergenic materials that are kind to your skin and the planet.
              </p>
            </div>
            <Link to="/about" className="inline-block mt-8 text-sm underline underline-offset-4 hover:text-velmora-gold">
              Read more about us →
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="mb-10">
          <div className="text-xs tracking-[0.15em] text-velmora-muted mb-1">LOVED BY MANY</div>
          <h2 className="font-serif text-3xl tracking-[0.02em]">What Our Customers Say</h2>
        </div>
        <Testimonials />
      </section>

      {/* Newsletter */}
      <section className="newsletter py-16">
        <div className="max-w-md mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl tracking-[0.02em] mb-3">Join for 10% off</h2>
          <p className="text-white/70 text-sm mb-6">Be the first to know about new arrivals, private sales, and stories from the atelier.</p>
          
          <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => { e.preventDefault(); alert('Thank you. You are now subscribed.'); }}>
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 bg-white/10 border border-white/30 px-4 py-3 text-sm placeholder:text-white/50 focus:outline-none focus:border-white/60"
              required
            />
            <button type="submit" className="btn btn-gold whitespace-nowrap">
              SUBSCRIBE
            </button>
          </form>
          <p className="text-[10px] text-white/50 mt-3 tracking-[0.05em]">We respect your inbox. Unsubscribe anytime.</p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;