import React, { useRef, useState, useEffect } from 'react';
import { ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../contexts/CartContext';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../strk-img-config.json';

export default function Home() {
  const { addToCart } = useCart();
  const containerRef = useRef(null);
  const ugcRef = useRef(null);
  
  const bestsellers = products.filter(p => p.isBestseller).slice(0, 5);

  const scrollUGC = (dir) => {
    if (ugcRef.current) {
      const scrollAmount = dir === 'right' ? 300 : -300;
      ugcRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div className="flex flex-col w-full" ref={containerRef}>
      {/* 1. Hero Section */}
      <section className="relative h-screen min-h-[600px] w-full bg-foreground flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full opacity-70">
          <img 
            data-strk-img-id="hero-bg-992a8b"
            data-strk-img="[hero-title] [hero-subtitle]"
            data-strk-img-ratio="16x9"
            data-strk-img-width="1600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt="Model wearing luxury demi-fine gold jewelry" 
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent"></div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center mt-20">
          <h1 id="hero-title" className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-6 leading-tight">
            Crafted to be Treasured
          </h1>
          <p id="hero-subtitle" className="text-white/90 text-lg md:text-xl font-serif italic mb-10 max-w-2xl mx-auto">
            Demi-fine gold jewelry designed for everyday elegance.
          </p>
          <Link 
            to="/collections" 
            className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-3.5 text-sm font-medium tracking-widest uppercase transition-all duration-300"
          >
            Shop the Collection
          </Link>
        </div>
      </section>

      {/* 2. Trust Bar */}
      <div className="bg-secondary text-secondary-foreground py-4 border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center md:justify-between items-center text-xs md:text-sm font-medium tracking-wide uppercase gap-4 text-center">
            <span>Free Worldwide Shipping</span>
            <span className="hidden md:inline text-accent/50">•</span>
            <span>30-Day Returns</span>
            <span className="hidden md:inline text-accent/50">•</span>
            <span>18K Gold Plated</span>
            <span className="hidden md:inline text-accent/50">•</span>
            <span>Hypoallergenic</span>
          </div>
        </div>
      </div>

      {/* 3. Bestsellers */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-3xl md:text-4xl font-serif">Curated Favorites</h2>
          <Link to="/collections" className="hidden md:flex items-center text-sm font-medium tracking-widest uppercase hover:text-accent transition-colors gap-2">
            View All <ArrowRight size={16} />
          </Link>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 gap-y-10">
          {bestsellers.map(product => (
            <div key={product.id} className="group flex flex-col h-full cursor-pointer relative">
              <Link to={`/product/${product.id}`} className="relative aspect-[4/5] overflow-hidden bg-muted mb-4 block">
                <img 
                  data-strk-img-id={`best-${product.id}-img1`}
                  data-strk-img={`[best-${product.id}-name]`}
                  data-strk-img-ratio="4x5"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.name} 
                  className="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0" 
                />
                <img 
                  data-strk-img-id={`best-${product.id}-img2`}
                  data-strk-img={`[best-${product.id}-name] details`}
                  data-strk-img-ratio="4x5"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={`${product.name} worn`} 
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 opacity-0 group-hover:opacity-100" 
                />
                
                {/* Quick Add overlay */}
                <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
                  <button 
                    onClick={(e) => { e.preventDefault(); addToCart(product); }}
                    className="w-full bg-foreground text-background py-3 text-xs uppercase tracking-widest font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
                  >
                    Quick Add
                  </button>
                </div>
              </Link>
              
              <div className="flex flex-col flex-1">
                <Link id={`best-${product.id}-name`} to={`/product/${product.id}`} className="text-xs tracking-widest uppercase font-medium mb-1 hover:text-accent transition-colors">
                  {product.name}
                </Link>
                <p className="text-sm font-serif italic text-muted-foreground mb-2">{product.material}</p>
                <div className="mt-auto pt-2 text-sm">${product.price}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 md:hidden flex justify-center">
          <Link to="/collections" className="text-sm font-medium tracking-widest uppercase hover:text-accent transition-colors border-b border-foreground pb-1">
            Shop All Bestsellers
          </Link>
        </div>
      </section>

      {/* 4. Category Tiles */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
          <Link to="/collections?category=Earrings" className="group relative aspect-square overflow-hidden bg-muted">
            <img 
              data-strk-img-id="cat-earrings-bg"
              data-strk-img="[cat-earrings-title]"
              data-strk-img-ratio="1x1"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Earrings" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
            <h3 id="cat-earrings-title" className="absolute inset-0 flex items-center justify-center text-white text-2xl font-serif tracking-widest uppercase origin-center transform group-hover:scale-110 transition-transform duration-500">Earrings</h3>
          </Link>
          <Link to="/collections?category=Necklaces" className="group relative aspect-square overflow-hidden bg-muted">
            <img 
              data-strk-img-id="cat-necklaces-bg"
              data-strk-img="[cat-necklaces-title]"
              data-strk-img-ratio="1x1"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Necklaces" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
            <h3 id="cat-necklaces-title" className="absolute inset-0 flex items-center justify-center text-white text-2xl font-serif tracking-widest uppercase origin-center transform group-hover:scale-110 transition-transform duration-500">Necklaces</h3>
          </Link>
          <Link to="/collections?category=Huggies" className="group relative aspect-square overflow-hidden bg-muted">
            <img 
              data-strk-img-id="cat-huggies-bg"
              data-strk-img="[cat-huggies-title]"
              data-strk-img-ratio="1x1"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Huggies" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
            <h3 id="cat-huggies-title" className="absolute inset-0 flex items-center justify-center text-white text-2xl font-serif tracking-widest uppercase origin-center transform group-hover:scale-110 transition-transform duration-500">Huggies</h3>
          </Link>
        </div>
      </section>

      {/* 5. Brand Story */}
      <section className="py-24 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col break-words md:flex-row items-center gap-12 lg:gap-24">
          <div className="w-full md:w-1/2 aspect-[4/5] relative overflow-hidden">
            <img 
              data-strk-img-id="brand-story-bg"
              data-strk-img="[brand-story-title] [brand-story-desc]"
              data-strk-img-ratio="4x5"
              data-strk-img-width="1200"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Jewelry making process" 
              className="w-full h-full object-cover" 
            />
          </div>
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
            <h2 id="brand-story-title" className="text-3xl md:text-5xl font-serif mb-6">Designed for the Modern Muse</h2>
            <p id="brand-story-desc" className="text-muted-foreground mb-8 text-lg font-serif italic max-w-lg">
              Velmora was born from a desire to bridge the gap between costume jewelry and fine heirlooms. 
              We believe in pieces that feel luxurious, wear effortlessly, and don't require keeping in a safe.
            </p>
            <p className="text-foreground/80 mb-10 text-sm leading-relaxed max-w-lg">
              Every design is meticulously crafted using a thick layer of 18K gold over a durable brass or sterling silver core. 
              The result? Timeless, tarnish-resistant demi-fine jewelry that elevates your everyday uniform.
            </p>
            <Link to="/" className="inline-flex py-3 px-8 border border-foreground hover:bg-foreground hover:text-background text-sm font-medium tracking-widest uppercase transition-colors">
              Our Story
            </Link>
          </div>
        </div>
      </section>

      {/* 6. UGC Reel Row */}
      <section className="py-16 bg-secondary relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 flex justify-between items-end">
          <h2 id="ugc-title" className="text-3xl font-serif">In Real Life</h2>
          <div className="flex gap-2">
            <button onClick={() => scrollUGC('left')} className="p-2 border border-border bg-background hover:bg-foreground hover:text-background transition-colors rounded-full rounded">
              <ArrowRight className="rotate-180" size={16} />
            </button>
            <button onClick={() => scrollUGC('right')} className="p-2 border border-border bg-background hover:bg-foreground hover:text-background transition-colors rounded-full rounded">
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
        
        <div 
          ref={ugcRef}
          className="flex overflow-x-auto gap-4 px-4 sm:px-6 lg:px-8 pb-8 snap-x snap-mandatory scrollbar-hide"
        >
          {/* UGC Items */}
          {[
            { id: "ugc1", textId: "ugc-text-1", text: "The perfect everyday stack." },
            { id: "ugc2", textId: "ugc-text-2", text: "Obsessed with these textures." },
            { id: "ugc3", textId: "ugc-text-3", text: "Quality is unmatched." },
            { id: "ugc4", textId: "ugc-text-4", text: "Never taking it off." },
            { id: "ugc5", textId: "ugc-text-5", text: "My new signature piece." }
          ].map((item, i) => (
            <div key={i} className="flex-none w-[280px] aspect-[9/16] relative snap-center overflow-hidden cursor-pointer group">
              <img 
                data-strk-img-id={`ugc-img-${item.id}`}
                data-strk-img={`[${item.textId}] [ugc-title]`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="User generated content" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 opacity-80" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p id={item.textId} className="font-serif italic text-lg leading-snug">"{item.text}"</p>
                <p className="text-xs uppercase tracking-widest mt-3 opacity-80">@velmora_muse</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. Testimonials */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <h2 className="text-center text-3xl font-serif mb-16">Loved by Thousands</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {[
            { text: "I have sensitive skin and these are the only earrings that don't irritate me. Plus, they look so expensive.", author: "Sarah M." },
            { text: "The packaging alone made me feel like royalty. The jewelry itself is stunning. I'll be buying all my gifts here.", author: "Elena R." },
            { text: "I've worn my necklaces in the shower for months and they still look brand new. Worth every penny.", author: "Jessica T." }
          ].map((review, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="flex gap-1 text-accent mb-6">
                {[1,2,3,4,5].map(star => <Star key={star} size={18} fill="currentColor" />)}
              </div>
              <p className="font-serif italic text-lg max-w-sm mx-auto mb-6 text-foreground/90">"{review.text}"</p>
              <span className="text-xs uppercase tracking-widest font-medium text-muted-foreground">{review.author}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}