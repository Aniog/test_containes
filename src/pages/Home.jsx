import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight, Star } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { useCart } from '../context/CartContext.jsx';
import ProductCard from '../components/collection/ProductCard.jsx';

const products = [
  { id: 1, name: "Vivid Aura Jewels", price: 42, description: "gold ear cuff with crystal accent", category: "Earrings", imgId: "prod-1" },
  { id: 2, name: "Majestic Flora Nectar", price: 68, description: "multicolor floral crystal necklace", category: "Necklaces", imgId: "prod-2" },
  { id: 3, name: "Golden Sphere Huggies", price: 38, description: "chunky gold dome huggie earrings", category: "Huggies", imgId: "prod-3" },
  { id: 4, name: "Amber Lace Earrings", price: 54, description: "textured gold filigree drop earrings", category: "Earrings", imgId: "prod-4" },
  { id: 5, name: "Royal Heirloom Set", price: 95, description: "gift-boxed earring + necklace set", category: "Sets", imgId: "prod-5" },
];

const categories = [
  { name: "Earrings", imgId: "cat-earrings", count: 2 },
  { name: "Necklaces", imgId: "cat-necklaces", count: 1 },
  { name: "Huggies", imgId: "cat-huggies", count: 1 },
];

const Home = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 scale-105"
          data-strk-bg-id="hero-bg-main"
          data-strk-bg="[hero-sub] [hero-title] jewelry model editorial closeup gold"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
          style={{ backgroundImage: `url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 9"%3E%3Crect width="16" height="9" fill="%23EAE6DF" /%3E%3C/svg%3E')` }}
        />
        <div className="absolute inset-0 bg-black/30 z-10" />
        <div className="relative z-20 text-center text-white px-6 max-w-4xl animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <h1 id="hero-title" className="text-4xl md:text-7xl font-serif font-light tracking-[0.05em] mb-6 leading-tight">
            Crafted to be Treasured
          </h1>
          <p id="hero-sub" className="text-sm md:text-lg tracking-[0.2em] uppercase font-light mb-10 max-w-2xl mx-auto opacity-90">
            Elevated Essentials for Every Moment. Demi-Fine Jewelry in 18K Gold Plated.
          </p>
          <Link
            to="/shop"
            className="inline-block bg-primary hover:bg-white hover:text-foreground text-white px-10 py-4 text-xs uppercase tracking-[0.2em] font-bold transition-all duration-300"
          >
            Shop the Collection
          </Link>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="bg-white border-b border-gray-100 py-4 overflow-hidden">
        <div className="flex justify-center flex-wrap gap-x-12 gap-y-4 text-[10px] uppercase tracking-[0.2em] font-bold text-gray-500">
          <span>Free Worldwide Shipping</span>
          <span className="hidden md:inline">•</span>
          <span>30-Day Returns</span>
          <span className="hidden md:inline">•</span>
          <span>18K Gold Plated</span>
          <span className="hidden md:inline">•</span>
          <span>Hypoallergenic</span>
        </div>
      </div>

      {/* Bestsellers Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto w-full">
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 id="bestsellers-title" className="text-3xl md:text-5xl font-serif mb-4 tracking-tight">The Bestsellers</h2>
          <div className="w-12 h-[1px] bg-primary"></div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="flex justify-center mt-16 font-serif">
          <Link to="/shop" className="flex items-center gap-2 group text-lg tracking-wide">
            View All Jewelry
            <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>

      {/* UGC Reel Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="flex flex-col items-center mb-16 px-6">
          <h2 id="ugc-title" className="text-3xl md:text-4xl font-serif mb-4 text-center">Worn by You</h2>
          <p className="text-xs uppercase tracking-widest text-gray-400">#VelmoraMoments</p>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-8 snap-x snap-mandatory px-6 no-scrollbar">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="relative min-w-[280px] md:min-w-[320px] aspect-[9/16] snap-start group overflow-hidden bg-gray-50">
              <img
                data-strk-img-id={`ugc-img-${i}`}
                data-strk-img="jewelry worn by woman editorial lifestyle model"
                data-strk-img-ratio="9x16"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 9 16'%3E%3C/svg%3E"
                alt="Velmora Jewelry Worn"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                <p className="text-white font-serif text-lg leading-tight italic opacity-90 group-hover:opacity-100 transition-opacity">
                  "{i % 2 === 0 ? "Perfect everyday pieces that never tarnish." : "So lightweight I forget I'm wearing them!"}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Shop by Category */}
      <section className="py-24 px-6 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat) => (
            <Link key={cat.name} to="/shop" className="relative aspect-[4/5] group overflow-hidden bg-gray-50">
              <img
                data-strk-img-id={cat.imgId}
                data-strk-img={`${cat.name} jewelry close up on model editorial`}
                data-strk-img-ratio="4x5"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'%3E%3C/svg%3E"
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-[0.2]"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-500" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                <h3 className="text-3xl font-serif tracking-wide opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  {cat.name}
                </h3>
                <span className="mt-2 text-[10px] uppercase tracking-[0.3em] font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                  Shop Now
                </span>
                <div className="absolute bottom-10 text-xl font-serif tracking-widest group-hover:opacity-0 transition-opacity duration-300">
                  {cat.name}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-24 bg-[#EAE6DF]/30">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-square overflow-hidden shadow-2xl">
            <img
              data-strk-img-id="brand-story-img"
              data-strk-img="jewelry craft artisan hands gold material editorial"
              data-strk-img-ratio="1x1"
              data-strk-img-width="1000"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E"
              alt="Our Story"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col items-start gap-8">
            <span id="story-sub" className="text-xs uppercase tracking-[0.3em] font-bold text-primary">Est. 2026</span>
            <h2 id="story-title" className="text-4xl md:text-6xl font-serif leading-tight">Quiet Luxury, <br/>Defined for You.</h2>
            <p className="text-lg text-gray-600 leading-relaxed font-light font-serif">
              Velmora was born from a desire for jewelry that balances high-end aesthetics with everyday durability. 
              Our pieces are crafted using demi-fine materials that feel weightless on the skin but command attention in any setting.
            </p>
            <Link to="#" className="text-sm uppercase tracking-widest font-bold border-b border-primary pb-1 hover:text-primary transition-colors">
              Our Story
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-5xl mx-auto flex flex-col items-center">
          <div className="flex gap-1 mb-8">
            {[1, 2, 3, 4, 5].map((i) => <Star key={i} className="w-4 h-4 fill-primary text-primary" />)}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {[
              { text: "The quality is unmatched for the price. I've worn my necklace every day for months and it looks brand new.", author: "Sarah M." },
              { text: "Finally, gold jewelry that doesn't irritate my skin. The huggies are so comfortable, I never take them off.", author: "Elena G." },
              { text: "Beautiful packaging and even more beautiful jewelry. Makes the perfect self-gift or present for a friend.", author: "Jessica T." }
            ].map((t, i) => (
              <div key={i} className="flex flex-col gap-4">
                <p className="font-serif italic text-lg leading-relaxed text-gray-700">"{t.text}"</p>
                <span className="text-xs uppercase tracking-widest font-bold text-gray-400">— {t.author}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 bg-primary/10 px-6">
        <div className="max-w-3xl mx-auto flex flex-col items-center text-center gap-8">
          <h2 id="newsletter-title" className="text-4xl font-serif">Join the Inner Circle</h2>
          <p id="newsletter-sub" className="text-gray-600 font-light">Be the first to see new collections and secret sales. Join for 10% off your first order.</p>
          <div className="flex w-full max-w-md gap-2">
            <input
              type="email"
              placeholder="YOUR EMAIL"
              className="flex-grow bg-white border-none px-6 py-4 text-xs tracking-widest font-medium focus:outline-none focus:ring-1 focus:ring-primary"
            />
            <button className="bg-primary hover:bg-black text-white px-8 py-4 text-xs uppercase tracking-widest font-bold transition-colors">
              Join
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
