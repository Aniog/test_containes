import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import { useProducts } from '@/lib/hooks';
import { Link } from 'react-router-dom';
import { useCartStore } from '@/lib/store';

export default function Home() {
  const containerRef = useRef(null);
  const { products, loading } = useProducts();
  const addItem = useCartStore(state => state.addItem);

  useEffect(() => {
    if (!loading && products.length > 0) {
      const frameId = window.requestAnimationFrame(() => {
        ImageHelper.loadImages([], containerRef.current);
      });
      return () => window.cancelAnimationFrame(frameId);
    }
  }, [loading, products]);

  const bestsellers = products.slice(0, 5);

  return (
    <div ref={containerRef} className="pb-20">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center">
        <div 
          className="absolute inset-0 z-0"
          data-strk-bg-id="hero-bg-1"
          data-strk-bg="[hero-title] [hero-subtitle]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        />
        <div className="absolute inset-0 bg-black/30 z-10" />
        
        <div className="relative z-20 text-center text-white px-4">
          <h1 id="hero-title" className="text-5xl md:text-7xl font-serif tracking-widest uppercase mb-6 drop-shadow-sm">
            Crafted to be Treasured
          </h1>
          <p id="hero-subtitle" className="text-lg md:text-xl font-light tracking-wider max-w-2xl mx-auto mb-10 text-white/90 drop-shadow-sm">
            Quiet luxury for the modern woman. Demi-fine jewelry designed for everyday elegance.
          </p>
          <Link 
            to="/collections" 
            className="inline-block bg-primary text-primary-foreground px-8 py-4 uppercase tracking-widest text-sm hover:bg-primary/90 transition-colors"
          >
            Shop the Collection
          </Link>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-muted py-4 border-b border-border">
        <ul className="container mx-auto px-4 flex flex-wrap justify-center gap-x-8 gap-y-4 text-xs tracking-widest uppercase text-muted-foreground whitespace-nowrap">
          <li>Free Worldwide Shipping</li>
          <li className="hidden sm:block">&middot;</li>
          <li>30-Day Returns</li>
          <li className="hidden sm:block">&middot;</li>
          <li>18K Gold Plated</li>
          <li className="hidden sm:block">&middot;</li>
          <li>Hypoallergenic</li>
        </ul>
      </section>

      {/* Bestsellers */}
      <section className="py-24 container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 id="bestsellers-title" className="text-3xl font-serif tracking-widest uppercase mb-4">Bestsellers</h2>
          <div className="w-16 h-px bg-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
          {loading ? (
            Array(5).fill(0).map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="bg-muted aspect-[4/5] mb-4"></div>
                <div className="h-4 bg-muted w-3/4 mb-2"></div>
                <div className="h-4 bg-muted w-1/4"></div>
              </div>
            ))
          ) : (
            bestsellers.map(product => (
              <div key={product.id} className="group cursor-pointer">
                <Link to={`/product/${product.id}`} className="block relative aspect-[4/5] bg-muted mb-4 overflow-hidden">
                  <img
                    alt={product.name}
                    data-strk-img={product.image_prompt}
                    data-strk-img-id={`prod-img-${product.id}`}
                    data-strk-img-ratio="4x5"
                    data-strk-img-width="400"
                    src={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <button 
                    onClick={(e) => {
                      e.preventDefault();
                      addItem(product);
                      useCartStore.getState().openCart();
                    }}
                    className="absolute bottom-4 left-1/2 -translate-x-1/2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 bg-white text-foreground px-6 py-2 text-xs uppercase tracking-widest font-medium hover:bg-primary hover:text-white w-[calc(100%-2rem)] text-center shadow-sm"
                  >
                    Quick Add
                  </button>
                </Link>
                <div className="text-center">
                  <h3 id={`prod-name-${product.id}`} className="font-serif uppercase tracking-widest text-sm mb-1 line-clamp-1">{product.name}</h3>
                  <p className="text-muted-foreground text-sm">${product.price.toFixed(2)}</p>
                </div>
              </div>
            ))
          )}
        </div>
      </section>

      {/* Categories */}
      <section className="container mx-auto px-4 md:px-8 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-[600px]">
          {['Earrings', 'Necklaces', 'Huggies'].map((cat, i) => (
            <Link key={cat} to={`/collections/${cat.toLowerCase()}`} className="group relative block overflow-hidden">
              <div 
                className="absolute inset-0 transition-transform duration-1000 group-hover:scale-105"
                data-strk-bg-id={`cat-bg-${i}`}
                data-strk-bg={`gold ${cat} jewelry model`}
                data-strk-bg-ratio="3x4"
                data-strk-bg-width="800"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-500"></div>
              <div className="absolute inset-x-0 bottom-0 p-8 text-center translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-white text-2xl font-serif tracking-widest uppercase mb-3">{cat}</h3>
                <span className="text-white text-xs tracking-widest uppercase border-b border-white pb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  Shop Now
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Story Section */}
      <section className="bg-muted py-24 mb-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12 max-w-5xl mx-auto">
            <div className="aspect-square relative overflow-hidden">
              <div 
                className="absolute inset-0"
                data-strk-bg-id="story-bg-1"
                data-strk-bg="[story-title] [story-desc]"
                data-strk-bg-ratio="1x1"
                data-strk-bg-width="800"
              />
            </div>
            <div className="space-y-6">
              <h2 id="story-title" className="text-3xl md:text-4xl font-serif tracking-widest uppercase text-foreground">Our Story</h2>
              <div className="w-12 h-px bg-primary"></div>
              <p id="story-desc" className="text-muted-foreground leading-loose">
                Velmora was born from a simple desire: to create demi-fine jewelry that bridges the gap between fast fashion and fine jewelry. We believe in pieces that look and feel like heirlooms, crafted with meticulous attention to detail using premium 18K gold vermeil. Every piece is an invitation to elevate the everyday.
              </p>
              <div className="pt-4">
                <Link to="/about" className="inline-block border-b border-foreground pb-1 text-sm tracking-widest uppercase hover:text-primary hover:border-primary transition-colors">
                  Discover Our Craft
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* UGC Reel */}
      <section className="mb-24 overflow-hidden">
        <div className="text-center mb-12">
          <h2 id="ugc-title" className="text-2xl font-serif tracking-widest uppercase mb-4">Spotted In Velmora</h2>
          <p className="text-sm tracking-widest text-muted-foreground">@VELMORAFINEJEWELRY</p>
        </div>
        
        <div className="flex gap-4 overflow-x-auto pb-8 px-4 md:px-8 snap-x snap-mandatory hide-scrollbar">
          {[
            { tag: "Golden Hour Glow", term: "model wearing gold layered necklaces outdoor" },
            { tag: "Everyday Essentials", term: "model wearing gold huggie earrings close up" },
            { tag: "Evening Elegance", term: "model wearing gold drop earrings night out" },
            { tag: "Curated Stack", term: "model wearing multiple gold ear cuffs" }
          ].map((item, i) => (
            <div key={i} className="shrink-0 w-64 md:w-72 aspect-[9/16] relative snap-center group">
              <div 
                className="absolute inset-0"
                data-strk-bg-id={`ugc-bg-${i}`}
                data-strk-bg={item.term}
                data-strk-bg-ratio="9x16"
                data-strk-bg-width="400"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60"></div>
              <div className="absolute inset-x-0 bottom-6 px-4 text-center">
                <p className="text-white font-serif tracking-wider text-sm opacity-90 group-hover:scale-105 transition-transform">{item.tag}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Reviews */}
      <section className="container mx-auto px-4 md:px-8 text-center mb-24 max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-border">
          {[
            { text: "Absolutely stunning quality. They look and feel like solid gold. I haven't taken them off since they arrived.", author: "Sarah M." },
            { text: "The perfect everyday huggies. Substantial enough to be noticed but comfortable enough to sleep in.", author: "Elena R." },
            { text: "Beautiful packaging and incredible jewelry. You can feel the weight and quality immediately.", author: "Jessica T." }
          ].map((review, i) => (
            <div key={i} className="py-8 md:py-0 md:px-6 flex flex-col items-center">
              <div className="flex text-primary mb-4">
                {Array(5).fill(0).map((_, j) => (
                  <svg key={j} className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                ))}
              </div>
              <p className="font-serif italic text-lg leading-relaxed text-foreground mb-4">"{review.text}"</p>
              <p className="text-xs uppercase tracking-widest text-muted-foreground mt-auto">{review.author}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}