import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import { seedProducts } from '../data/products';

// Fallback config if needed, but we'll pass an empty object to avoid errors if the file doesn't exist yet
const strkImgConfig = {};

export default function Home() {
  const containerRef = useRef(null);

  useEffect(() => {
    // Only load if SDK is available
    if (ImageHelper && typeof ImageHelper.loadImages === 'function') {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  const bestsellers = seedProducts.slice(0, 5);

  return (
    <div ref={containerRef} className="pb-0">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] max-h-[900px] flex items-center justify-center overflow-hidden -mt-20">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          data-strk-bg-id="hero-bg-v1"
          data-strk-bg="[hero-sub] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="2000"
          style={{ backgroundColor: '#2C2A28' }} // Fallback dark background
        />
        <div className="absolute inset-0 bg-black/20 z-10" /> {/* Subtle overlay for text legibility */}
        
        <div className="relative z-20 text-center px-4 max-w-3xl mx-auto mt-20">
          <h1 id="hero-title" className="text-5xl md:text-7xl font-serif text-white mb-6 tracking-wide drop-shadow-md">
            Crafted to be Treasured
          </h1>
          <p id="hero-sub" className="text-lg md:text-xl text-white/90 mb-10 max-w-xl mx-auto font-light drop-shadow">
            Discover demi-fine gold jewelry designed for everyday elegance and lifelong wear.
          </p>
          <Link
            to="/shop"
            className="inline-block bg-primary text-primary-foreground px-10 py-4 font-sans tracking-widest uppercase text-sm font-medium hover:bg-primary/90 transition-colors"
          >
            Shop the Collection
          </Link>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-primary/10 border-y border-border py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center text-xs md:text-sm font-serif tracking-wider uppercase text-foreground/80 gap-y-4">
            <span className="w-1/2 md:w-auto text-center">Free Worldwide Shipping</span>
            <span className="hidden md:inline-block text-primary/40">•</span>
            <span className="w-1/2 md:w-auto text-center">30-Day Returns</span>
            <span className="hidden md:inline-block text-primary/40">•</span>
            <span className="w-1/2 md:w-auto text-center">18K Gold Plated</span>
            <span className="hidden md:inline-block text-primary/40">•</span>
            <span className="w-1/2 md:w-auto text-center">Hypoallergenic</span>
          </div>
        </div>
      </section>

      {/* Bestsellers */}
      <section className="py-24 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 id="bestsellers-title" className="text-3xl font-serif mb-2">Iconic Pieces</h2>
            <p id="bestsellers-desc" className="text-muted-foreground">Our most loved everyday essentials.</p>
          </div>
          <Link to="/shop" className="hidden md:block text-sm uppercase tracking-widest border-b border-foreground hover:text-primary hover:border-primary transition-colors pb-1">
            View All
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-10 lg:gap-x-6">
          {bestsellers.map((product) => (
            <Link key={product.id} to={`/product/${product.id}`} className="group block relative">
              <div className="aspect-[3/4] overflow-hidden bg-muted mb-4 relative">
                {/* Default Image */}
                <img
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                  alt={product.name}
                  data-strk-img-id={product.images[0].id}
                  data-strk-img={product.images[0].query}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="600"
                  className="w-full h-full object-cover transition-opacity duration-500 ease-in-out group-hover:opacity-0 absolute inset-0"
                />
                {/* Hover Image */}
                <img
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                  alt={`${product.name} alternate view`}
                  data-strk-img-id={product.images[1].id}
                  data-strk-img={product.images[1].query}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="600"
                  className="w-full h-full object-cover transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100 absolute inset-0"
                />
                
                <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-20">
                  <button className="w-full bg-background/95 backdrop-blur text-foreground py-3 text-xs uppercase tracking-widest hover:bg-primary hover:text-primary-foreground transition-colors shadow-sm">
                    View Detail
                  </button>
                </div>
              </div>
              <div>
                <h3 id={`${product.id}-title`} className="text-sm font-serif uppercase tracking-wider mb-1 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                <p className="text-sm text-muted-foreground">${product.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* UGC / Editorial Reel */}
      <section className="py-16 bg-[#2B2927] text-[#FAF9F6] overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
          <h2 id="ugc-title" className="text-3xl font-serif mb-3">Spotted In Velmora</h2>
          <p id="ugc-desc" className="text-white/60 font-light text-sm">Tag @velmorajewelry to be featured.</p>
        </div>
        
        {/* Horizontal scroll native to CSS */}
        <div className="flex overflow-x-auto gap-4 px-4 sm:px-8 pb-8 snap-x snap-mandatory scrollbar-hide">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="relative flex-none w-[280px] h-[500px] snap-center rounded-sm overflow-hidden bg-black/50">
               <img
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 9 16'/%3E"
                  alt={`Editorial style ${i}`}
                  data-strk-img-id={`ugc-img-${i}`}
                  data-strk-img={`[ugc-title] [ugc-desc] editorial gold jewelry worn on model`}
                  data-strk-img-ratio="9x16"
                  data-strk-img-width="400"
                  className="w-full h-full object-cover opacity-80 mix-blend-overlay"
                />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="font-serif italic text-lg leading-snug drop-shadow-md">"My everyday essential. Never taking these off."</p>
                </div>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="py-24 container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="category-title" className="sr-only">Shop by Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { id: 'cat-earrings', title: 'Earrings', query: 'gold earrings product editorial' },
            { id: 'cat-necklaces', title: 'Necklaces', query: 'gold chain necklace product editorial' },
            { id: 'cat-huggies', title: 'Huggies', query: 'gold huggie hoops product editorial' }
          ].map((cat) => (
            <Link key={cat.id} to={`/shop?category=${cat.title.toLowerCase()}`} className="group relative aspect-square overflow-hidden bg-muted">
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.title}
                data-strk-img-id={`img-${cat.id}`}
                data-strk-img={cat.query}
                data-strk-img-ratio="1x1"
                data-strk-img-width="800"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="bg-background/95 text-foreground px-8 py-4 font-serif uppercase tracking-widest text-sm shadow-sm group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  {cat.title}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Brand Story Split */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">
            <div className="w-full md:w-1/2 aspect-[4/5] relative">
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E"
                alt="Founder in studio"
                data-strk-img-id="brand-story-img"
                data-strk-img="[story-title] [story-desc] jewelry atelier fine detail"
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full md:w-1/2 max-w-lg">
              <h2 id="story-title" className="text-3xl lg:text-4xl font-serif mb-6">Redefining Fine Jewelry</h2>
              <div id="story-desc" className="space-y-4 text-muted-foreground font-light leading-relaxed mb-8">
                <p>
                  Velmora was born from a simple belief: luxury shouldn't be reserved for special occasions. We craft pieces that bridge the gap between costume jewelry that tarnishes and fine jewelry that breaks the bank.
                </p>
                <p>
                  Using a thick layer of 18k gold over a sterling silver base, every piece is designed to withstand the rigors of daily life while retaining its brilliant, warm glow.
                </p>
              </div>
              <Link to="/about" className="inline-block border-b border-primary text-primary hover:text-foreground hover:border-foreground uppercase tracking-widest text-sm pb-1 transition-colors">
                Read Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 container mx-auto px-4">
        <h2 className="text-center text-2xl font-serif mb-16 uppercase tracking-widest text-muted-foreground/80">Words from our collectors</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center max-w-5xl mx-auto">
          {[
            { quote: "The quality is unmatched at this price. My huggies haven't left my ears since they arrived.", author: "Elena R." },
            { quote: "Subtle, elegant, and perfectly heavy. Feels like true vintage gold. I get compliments daily.", author: "Sarah M." },
            { quote: "Beautiful packaging and stunning jewelry. This is my third order and surely not my last.", author: "Chloe T." }
          ].map((test, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="flex text-primary mb-4">
                {[1,2,3,4,5].map(s => (
                  <svg key={s} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="font-serif text-lg italic mb-4 leading-relaxed">"{test.quote}"</p>
              <span className="text-xs uppercase tracking-widest text-muted-foreground">— {test.author}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-primary/5 py-20 border-t border-border">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <h2 className="text-3xl font-serif mb-4 text-foreground">Join the Velmora Inner Circle</h2>
          <p className="text-muted-foreground mb-8 font-light">Enjoy 10% off your first order, plus early access to new collections and exclusive editorial content.</p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Email Address" 
              className="flex-1 px-4 py-3 bg-white border border-border focus:outline-none focus:border-primary transition-colors text-sm"
              required
            />
            <button 
              type="submit" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 uppercase tracking-widest text-sm transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

    </div>
  );
}