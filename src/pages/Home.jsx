import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { PRODUCTS } from '@/lib/data';
import ProductCard from '@/components/ProductCard';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Button } from '@/components/ui/button';

const Home = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const bestsellers = PRODUCTS.slice(0, 5);

  return (
    <div ref={containerRef} className="space-y-0">
      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-stone-900"
          data-strk-bg-id="hero-bg-9922a"
          data-strk-bg="[hero-title] [hero-subtitle] luxury jewelry gold model"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        >
          <div className="absolute inset-0 bg-black/30" />
        </div>
        
        <div className="relative z-10 text-center text-white px-6">
          <h1 id="hero-title" className="text-5xl md:text-7xl font-light tracking-wide mb-6">
            Crafted to be Treasured
          </h1>
          <p id="hero-subtitle" className="text-sm md:text-base font-serif italic tracking-widest opacity-90 mb-10 max-w-lg mx-auto leading-relaxed">
            Demi-fine collections inspired by the quiet moments of elegance in everyday life.
          </p>
          <Link to="/shop">
            <Button className="bg-white text-black hover:bg-velmora-gold hover:text-white rounded-none px-10 py-7 uppercase tracking-[0.3em] text-xs transition-all duration-500">
              Shop the Collection
            </Button>
          </Link>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="bg-stone-50 border-b border-stone-200 py-4 overflow-hidden">
        <div className="flex justify-between items-center text-[9px] md:text-[10px] uppercase tracking-[0.2em] font-medium text-stone-500 max-w-7xl mx-auto px-6 whitespace-nowrap gap-8 md:gap-0 overflow-x-auto no-scrollbar">
          <span>Free Worldwide Shipping</span>
          <span className="hidden md:inline">•</span>
          <span>30-Day Returns</span>
          <span className="hidden md:inline">•</span>
          <span>18K Gold Plated</span>
          <span className="hidden md:inline">•</span>
          <span>Hypoallergenic</span>
        </div>
      </div>

      {/* Bestsellers */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="space-y-2">
            <span className="text-[10px] uppercase tracking-[0.3em] text-velmora-gold font-bold">Most Loved</span>
            <h2 id="bestsellers-title" className="text-3xl md:text-4xl font-light tracking-tight">Current Favorites</h2>
          </div>
          <Link to="/shop" className="group flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold border-b border-stone-200 pb-1 hover:border-black transition-all">
            View All <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-12">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Reels Row */}
      <section className="py-24 bg-white border-y border-stone-100">
        <div className="text-center mb-12 space-y-4 px-6">
          <h2 id="ugc-title" className="text-3xl md:text-4xl font-light">Seen on You</h2>
          <p className="text-stone-500 text-xs uppercase tracking-[0.2em]">Tag #VELMORA to be featured</p>
        </div>
        
        <div className="flex gap-4 overflow-x-auto px-6 no-scrollbar pb-4">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="relative flex-shrink-0 w-[200px] md:w-[260px] aspect-[9/16] group overflow-hidden bg-stone-100">
              <img 
                data-strk-img-id={`ugc-item-${i}`}
                data-strk-img="jewelry gold woman ear necklace model wearing lifestyle"
                data-strk-img-ratio="9x16"
                data-strk-img-width="400"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                alt={`Social ${i}`}
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-6 left-6 right-6 text-white transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <p className="font-serif italic text-lg leading-tight">"The perfect glow for every day."</p>
                <p className="text-[10px] uppercase tracking-widest mt-2">@sarah_j</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Category Tiles */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-[600px] md:h-[500px]">
          {[
            { name: "Earrings", id: "cat-earrings", query: "gold earrings luxury" },
            { name: "Necklaces", id: "cat-necklaces", query: "gold necklace luxury" },
            { name: "Huggies", id: "cat-huggies", query: "gold huggie earrings luxury" }
          ].map((cat) => (
            <Link 
              key={cat.id} 
              to={`/shop?category=${cat.name}`}
              className="relative group overflow-hidden block h-full"
            >
              <div 
                className="absolute inset-0 bg-stone-200 transition-transform duration-1000 group-hover:scale-105"
                data-strk-bg-id={cat.id}
                data-strk-bg={cat.query}
                data-strk-bg-ratio="3x4"
                data-strk-bg-width="800"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-end justify-start p-10">
                <div className="space-y-2">
                  <h3 className="text-white text-3xl font-light tracking-wide">{cat.name}</h3>
                  <div className="w-0 group-hover:w-full h-px bg-white transition-all duration-500 opacity-60" />
                  <span className="text-white/0 group-hover:text-white/100 text-[10px] uppercase tracking-[0.2em] transition-all duration-500 block">
                    Shop collection
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-24 bg-stone-50 border-y border-stone-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-square md:aspect-[4/5] overflow-hidden shadow-2xl">
            <img 
              data-strk-img-id="story-img"
              data-strk-img="jewelry craftsmanship hands details gold tools"
              data-strk-img-ratio="4x5"
              data-strk-img-width="1000"
              className="w-full h-full object-cover"
              alt="Our Story"
            />
          </div>
          <div className="space-y-8">
            <span className="text-[10px] uppercase tracking-[0.4em] text-velmora-gold font-bold">Our Philosophy</span>
            <h2 id="story-title" className="text-4xl md:text-5xl font-light leading-tight">Timelessness in Every Detail</h2>
            <p className="text-stone-600 leading-relaxed font-serif text-lg italic">
              "We believe that fine jewelry shouldn't be reserved only for special occasions. It should be a part of your daily ritual — an effortless expression of your personal style."
            </p>
            <p className="text-stone-500 leading-relaxed text-sm">
              Founded on the principles of quality and accessibility, Velmora creates demi-fine pieces using 18K gold plating over surgical-grade steel and sterling silver. Each design is crafted to be lived in, treasured, and passed on.
            </p>
            <Link to="/about">
              <Button variant="outline" className="rounded-none px-10 py-6 uppercase tracking-widest text-[10px] border-stone-300 hover:bg-black hover:text-white transition-all">
                The Velmora Story
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 max-w-4xl mx-auto text-center">
        <div className="space-y-12">
          <div className="flex justify-center gap-1 text-velmora-gold">
            {[1, 2, 3, 4, 5].map((s) => <span key={s}>★</span>)}
          </div>
          <div className="space-y-6">
            <p className="text-2xl md:text-3xl font-serif italic leading-relaxed text-stone-800">
              "The Golden Sphere Huggies have become my everyday staple. The weight is perfect and the gold tone is so rich — I get compliments everywhere I go."
            </p>
            <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-stone-400">Eleanor P. · Verified Purchase</p>
          </div>
          <div className="flex justify-center gap-8 pt-6 border-t border-stone-100">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-stone-200 overflow-hidden">
                   <div 
                    data-strk-bg-id={`user-avatar-${i}`}
                    data-strk-bg="woman face portrait"
                    data-strk-bg-ratio="1x1"
                    data-strk-bg-width="100"
                    className="w-full h-full"
                   />
                </div>
              ))}
            </div>
            <p className="text-[10px] uppercase tracking-widest self-center text-stone-500">Join 10,000+ happy customers</p>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-velmora-black text-white text-center px-6">
        <div className="max-w-2xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-4xl font-light">Join the Circle</h2>
          <p className="font-serif italic text-stone-400">Receive 10% off your first order and stay updated on new collection launches.</p>
          <div className="flex flex-col md:flex-row gap-4">
            <input 
              type="email" 
              placeholder="ENTER YOUR EMAIL" 
              className="flex-grow bg-white/5 border border-white/20 px-6 py-4 text-[10px] uppercase tracking-widest focus:outline-none focus:border-white transition-colors"
            />
            <Button className="bg-white text-black hover:bg-velmora-gold hover:text-white rounded-none py-4 px-10 uppercase tracking-widest text-[10px] font-bold transition-all">
              Subscribe
            </Button>
          </div>
          <p className="text-[9px] text-stone-500 uppercase tracking-widest">By subscribing you agree to our privacy policy.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
