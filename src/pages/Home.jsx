import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import { useCart } from '../lib/CartContext';
import { products } from '../lib/data';

// You would normally import or fetch this, but for now we'll pass empty object or mock
const strkImgConfig = {};

export default function Home() {
  const containerRef = useRef(null);
  const { addToCart } = useCart();

  useEffect(() => {
    // We defer slightly to ensure DOM is ready
    const frameId = window.requestAnimationFrame(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      }
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  const bestsellers = products.slice(0, 4);

  return (
    <div ref={containerRef} className="pb-20">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center pt-20">
        <div 
          className="absolute inset-0 -z-10 bg-black/40"
          data-strk-bg-id="hero-bg-938"
          data-strk-bg="[hero-title] [hero-subtitle]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-black/30 -z-10" />
        
        <div className="text-center text-white px-6 max-w-3xl flex flex-col items-center">
          <h1 id="hero-title" className="font-serif text-5xl md:text-7xl mb-6">Crafted to be Treasured</h1>
          <p id="hero-subtitle" className="text-lg md:text-xl font-light mb-10 text-white/90">
            Demi-fine gold jewelry for the modern individual. Quiet luxury designed for everyday wear.
          </p>
          <Link 
            to="/shop" 
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-4 uppercase tracking-widest text-sm font-medium hover:bg-accent/90 transition-colors"
          >
            Shop the Collection <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="bg-brand-beige py-4 border-b border-border">
        <div className="max-w-[1600px] mx-auto px-6">
          <ul className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm uppercase tracking-wider text-muted-foreground">
            <li className="flex items-center gap-2"><span>Free Worldwide Shipping</span> <span className="text-accent hidden sm:inline">·</span></li>
            <li className="flex items-center gap-2"><span>30-Day Returns</span> <span className="text-accent hidden sm:inline">·</span></li>
            <li className="flex items-center gap-2"><span>18K Gold Plated</span> <span className="text-accent hidden sm:inline">·</span></li>
            <li><span>Hypoallergenic</span></li>
          </ul>
        </div>
      </div>

      {/* Bestsellers Section */}
      <section className="py-24 max-w-[1600px] mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
          <h2 id="bestsellers-title" className="font-serif text-3xl md:text-4xl">Bestsellers</h2>
          <Link to="/shop" className="text-sm uppercase tracking-widest border-b border-foreground pb-1 hover:text-accent hover:border-accent transition-colors">
            View All
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {bestsellers.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <Link to={`/product/${product.id}`} className="block relative aspect-[4/5] bg-secondary mb-4 overflow-hidden">
                <img
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.title}
                  className="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                  data-strk-img-id={`${product.id}-primary`}
                  data-strk-img={`[product-title-${product.id}] close up jewelry on subtle background`}
                  data-strk-img-ratio="4x5"
                  data-strk-img-width="600"
                />
                <img
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={`${product.title} worn`}
                  className="w-full h-full object-cover absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  data-strk-img-id={`${product.id}-secondary`}
                  data-strk-img={`[product-title-${product.id}] worn on model jewelry`}
                  data-strk-img-ratio="4x5"
                  data-strk-img-width="600"
                />
                
                <button 
                  onClick={(e) => {
                    e.preventDefault();
                    addToCart(product);
                  }}
                  className="absolute bottom-4 left-4 right-4 bg-background/95 text-foreground py-3 uppercase tracking-widest text-xs font-medium opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-foreground hover:text-background"
                >
                  Quick Add — ${product.price}
                </button>
              </Link>
              <Link to={`/product/${product.id}`} className="block text-center">
                <h3 id={`product-title-${product.id}`} className="font-serif text-lg mb-1">{product.title}</h3>
                <p className="text-muted-foreground">${product.price}</p>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* UGC / Reels Row */}
      <section className="bg-brand-taupe/20 py-24 overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-6 mb-12">
          <h2 id="ugc-title" className="font-serif text-3xl md:text-4xl text-center">Spotted in Velmora</h2>
          <p className="text-center mt-4 text-muted-foreground">Follow along @velmorajewelry</p>
        </div>
        
        <div className="flex gap-4 md:gap-6 overflow-x-auto pb-8 px-6 snap-x hide-scrollbar" style={{ scrollbarWidth: 'none' }}>
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="relative flex-shrink-0 w-[240px] md:w-[300px] aspect-[9/16] snap-center bg-secondary cursor-pointer group">
              <img
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt="UGC Content"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  data-strk-img-id={`ugc-${i}`}
                  data-strk-img={`[ugc-title] aesthetic woman selfie wearing jewelry`}
                  data-strk-img-ratio="9x16"
                  data-strk-img-width="400"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p className="text-white text-sm">Shop the look <ArrowRight size={14} className="inline ml-1" /></p>
                </div>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="py-24 max-w-[1600px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-[600px]">
          {['Earrings', 'Necklaces', 'Huggies'].map((cat, idx) => (
            <Link key={cat} to={`/shop?category=${cat.toLowerCase()}`} className="relative group overflow-hidden bg-secondary">
               <img
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={`Shop ${cat}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  data-strk-img-id={`cat-${idx}`}
                  data-strk-img={`aesthetic gold jewelry ${cat} flatlay`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="600"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-white font-serif text-3xl uppercase tracking-widest">{cat}</h3>
                </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Brand Story */}
      <section className="bg-brand-beige py-24">
        <div className="max-w-[1600px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[4/3] w-full bg-secondary">
             <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Brand Story"
                className="w-full h-full object-cover"
                data-strk-img-id="story-img"
                data-strk-img="[story-title] [story-desc] woman crafting jewelry workshop"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
              />
          </div>
          <div className="lg:pl-12">
            <h2 id="story-title" className="font-serif text-3xl md:text-5xl mb-6">Designed for the Everyday Muse</h2>
            <p id="story-desc" className="text-muted-foreground mb-8 text-lg leading-relaxed">
              We believe that fine jewelry shouldn't be reserved for special occasions. 
              Our pieces are thoughtfully crafted using premium 18K gold plating over brass, 
              ensuring they withstand the test of time while remaining accessible. 
              Discover elegance you can wear from morning coffee to evening cocktails.
            </p>
            <Link to="/about" className="inline-block border border-foreground px-8 py-3 uppercase tracking-widest text-sm hover:bg-foreground hover:text-background transition-colors">
              Our Story
            </Link>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-24 max-w-4xl mx-auto px-6 text-center">
        <div className="flex justify-center gap-1 mb-8 text-accent">
          {[1,2,3,4,5].map(i => <Star key={i} size={20} fill="currentColor" />)}
        </div>
        <h2 className="font-serif text-2xl md:text-3xl italic mb-6">
          "I haven't taken these huggies off since they arrived. The quality is incredible for the price point, and they haven't tarnished a bit even in the shower."
        </h2>
        <p className="uppercase tracking-widest text-sm text-muted-foreground">— Sarah J.</p>
      </section>

      {/* Newsletter */}
      <section className="py-24 bg-brand-dark text-brand-beige">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl md:text-4xl mb-4">Join the Inner Circle</h2>
          <p className="text-brand-taupe mb-8">Sign up to receive 10% off your first order, plus early access to new collections.</p>
          
          <form className="flex flex-col sm:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow bg-transparent border border-brand-taupe/40 px-6 py-4 text-brand-beige placeholder:text-brand-taupe/60 focus:outline-none focus:border-brand-gold transition-colors"
              required
            />
            <button 
              type="submit"
              className="bg-brand-gold text-white px-8 py-4 uppercase tracking-widest text-sm font-medium hover:bg-brand-goldLight transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}