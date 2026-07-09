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
  // Show 5 bestsellers (all products for now, could be curated)
  const bestsellers = products.slice(0, 5);

  return (
    <div className="min-h-screen bg-[#F8F5F1]">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[100dvh] min-h-[600px] flex items-center justify-center pt-20">
        <div className="absolute inset-0 bg-[#1A1816]">
          <img
            src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1600&q=85"
            alt="Warm-lit close-up of gold jewelry on a model"
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-3xl">
          <h1 className="text-white text-5xl md:text-6xl font-serif tracking-[-0.02em] mb-6">
            Crafted to be Treasured
          </h1>
          <p className="text-white/90 text-lg md:text-xl mb-8 max-w-md mx-auto">
            Demi-fine gold jewelry for the modern woman. Timeless pieces, thoughtfully made.
          </p>
          <Link to="/shop" className="btn btn-primary btn-lg inline-block">
            Shop the Collection
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 text-xs tracking-[0.2em] uppercase hidden md:block">
          Scroll to Explore
        </div>
      </section>

      <TrustBar />

      {/* Bestsellers */}
      <section className="section container">
        <div className="flex items-end justify-between mb-8">
          <div>
            <span className="text-xs tracking-[0.15em] uppercase text-[#B8976A]">Curated for You</span>
            <h2 className="mt-1">Bestsellers</h2>
          </div>
          <Link to="/shop" className="hidden md:block text-sm tracking-[0.1em] uppercase hover:text-[#B8976A] transition-colors">
            View All →
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="text-center mt-8 md:hidden">
          <Link to="/shop" className="text-sm tracking-[0.1em] uppercase hover:text-[#B8976A]">
            View All →
          </Link>
        </div>
      </section>

      {/* UGC Reel Row */}
      <section className="section bg-white border-y border-[#E5DFD6]">
        <div className="container mb-6">
          <div className="flex items-end justify-between">
            <div>
              <span className="text-xs tracking-[0.15em] uppercase text-[#B8976A]">As Seen On You</span>
              <h2 className="mt-1">In the Wild</h2>
            </div>
          </div>
        </div>
        <div className="pl-4 md:pl-8">
          <UGCRow />
        </div>
      </section>

      {/* Shop by Category */}
      <section className="section container">
        <div className="text-center mb-8">
          <span className="text-xs tracking-[0.15em] uppercase text-[#B8976A]">Find Your Piece</span>
          <h2 className="mt-1">Shop by Category</h2>
        </div>
        <CategoryTiles />
      </section>

      {/* Brand Story */}
      <section className="section bg-white border-y border-[#E5DFD6]">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="aspect-[4/3] bg-[#1A1816] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=900&q=80"
                alt="Velmora atelier — hands crafting gold jewelry"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="max-w-lg">
              <span className="text-xs tracking-[0.15em] uppercase text-[#B8976A]">Since 2018</span>
              <h2 className="mt-2 mb-6">Our Story</h2>
              <div className="space-y-4 text-[#6B635C] leading-relaxed">
                <p>
                  Velmora was born from a simple belief: that beautiful jewelry should be accessible, 
                  not exclusive. We create demi-fine pieces that feel as precious as fine jewelry, 
                  without the precious price tag.
                </p>
                <p>
                  Every piece is designed in our studio and crafted with care using 18K gold plating 
                  over solid brass. We source responsibly, design thoughtfully, and stand behind 
                  everything we make.
                </p>
              </div>
              <Link to="/about" className="btn btn-gold-outline mt-8 inline-block">
                Read Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section container">
        <div className="text-center mb-10">
          <span className="text-xs tracking-[0.15em] uppercase text-[#B8976A]">Kind Words</span>
          <h2 className="mt-1">From Our Community</h2>
        </div>
        <Testimonials />
      </section>

      {/* Newsletter */}
      <section className="newsletter py-16">
        <div className="container max-w-md text-center">
          <h2 className="text-white mb-3">Join for 10% Off</h2>
          <p className="text-[#D4C4A8] mb-8">
            Be the first to know about new arrivals, private sales, and stories from the studio.
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert('Thank you for subscribing. Welcome to the Velmora family.');
            }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <input
              type="email"
              placeholder="Your email address"
              className="input flex-1 bg-white/95 border-white/20 text-[#1C1917]"
              required
            />
            <button type="submit" className="btn btn-primary whitespace-nowrap">
              Subscribe
            </button>
          </form>
          <p className="text-xs text-[#D4C4A8] mt-4">We respect your inbox. Unsubscribe anytime.</p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;