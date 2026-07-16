import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';
import { SEED_PRODUCTS } from '../data/products';
import { useCartStore } from '../store/useCartStore';
import { ImageHelper } from '@strikingly/sdk';

const HomePage = () => {
  const { addItem } = useCartStore();
  const bestsellers = SEED_PRODUCTS.filter(p => p.bestseller).slice(0, 5);
  
  const containerRef = useRef(null);
  
  useEffect(() => {
    if (!containerRef.current) return;
    const frameId = window.requestAnimationFrame(() => {
      if (window.ImageHelper && typeof window.ImageHelper.loadImages === 'function') {
        window.ImageHelper.loadImages({}, containerRef.current);
      }
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <div className="w-full" ref={containerRef}>
      {/* 1. Full-bleed Hero */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          data-strk-bg-id="hero-bg-velmora"
          data-strk-bg="[hero-subhead] [hero-headline]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto flex flex-col items-center mt-16">
          <h1 id="hero-headline" className="font-serif text-5xl md:text-7xl mb-6 leading-tight">
            Crafted to be Treasured
          </h1>
          <p id="hero-subhead" className="text-lg md:text-xl mb-10 max-w-2xl font-light">
            Demi-fine jewelry for the modern woman. Everyday elegance, thoughtfully designed.
          </p>
          <Link 
            to="/collections" 
            className="bg-accent text-accent-foreground px-10 py-4 uppercase tracking-widest text-sm font-medium hover:bg-white transition-colors"
          >
            Shop the Collection
          </Link>
        </div>
      </section>

      {/* 2. Trust Bar */}
      <div className="bg-primary text-primary-foreground py-4 border-b border-white/10">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-4 text-xs tracking-wider uppercase opacity-90 text-center">
            <span>Free Worldwide Shipping</span>
            <span className="hidden md:inline">·</span>
            <span>30-Day Returns</span>
            <span className="hidden md:inline">·</span>
            <span>18K Gold Plated</span>
            <span className="hidden md:inline">·</span>
            <span>Hypoallergenic</span>
          </div>
        </div>
      </div>

      {/* 3. Bestsellers Grid */}
      <section className="py-20 md:py-32 container mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-primary">Bestselling Pieces</h2>
          <Link to="/collections" className="hidden md:flex items-center gap-2 text-sm uppercase tracking-widest hover:text-muted-foreground transition-colors">
            View All <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {bestsellers.map((product) => (
            <div key={product.id} className="group flex flex-col">
              <Link to={`/product/${product.id}`} className="relative aspect-[3/4] mb-4 overflow-hidden bg-muted">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-opacity duration-500 ease-in-out group-hover:opacity-0"
                  data-strk-img-id={`product-${product.id}-img1`}
                  data-strk-img={`[product-name-${product.id}] jewelry isolated`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="600"
                />
                <img 
                  src={product.images[1]} 
                  alt={`${product.name} alternate`}
                  className="w-full h-full object-cover absolute inset-0 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100"
                  data-strk-img-id={`product-${product.id}-img2`}
                  data-strk-img={`[product-name-${product.id}] jewelry worn model`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="600"
                />
                
                {/* Quick Add Button Overlay */}
                <div className="absolute bottom-0 left-0 w-full p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <button 
                    onClick={(e) => {
                      e.preventDefault();
                      addItem({ ...product, variant: 'Gold', quantity: 1 });
                    }}
                    className="w-full bg-background text-foreground py-3 text-sm uppercase tracking-widest hover:bg-primary hover:text-primary-foreground transition-colors shadow-lg"
                  >
                    Quick Add
                  </button>
                </div>
              </Link>
              <div className="flex flex-col flex-1">
                <Link to={`/product/${product.id}`} id={`product-name-${product.id}`} className="font-serif text-lg tracking-wide uppercase hover:text-muted-foreground transition-colors mb-1">
                  {product.name}
                </Link>
                <span className="text-muted-foreground">${product.price.toFixed(2)}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Reels UGC Row */}
      <section className="py-16 bg-white overflow-hidden">
        <div className="container mx-auto px-6 mb-10">
          <h2 className="font-serif text-3xl md:text-4xl text-primary text-center">As Seen On You</h2>
          <p className="text-center text-muted-foreground mt-4">@velmorajewelry</p>
        </div>
        
        {/* Horizontal scrolling strip */}
        <div className="flex gap-4 px-6 md:px-12 overflow-x-auto pb-8 snap-x hide-scrollbar">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="relative w-64 md:w-80 flex-shrink-0 aspect-[9/16] snap-center rounded-sm overflow-hidden group">
              <img 
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="UGC Content"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                data-strk-img-id={`ugc-reel-${i}`}
                data-strk-img="vertical close up woman wearing gold jewelry aesthetic"
                data-strk-img-ratio="9x16"
                data-strk-img-width="600"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
              <p className="absolute bottom-6 left-6 right-6 text-white font-serif italic text-lg leading-snug">
                "Obsessed with this daily stack."
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Shop by Category Tiles */}
      <section className="py-20 container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {[
            { id: 'earrings', name: 'Earrings', imgId: 'cat-earrings' },
            { id: 'necklaces', name: 'Necklaces', imgId: 'cat-necklaces' },
            { id: 'huggies', name: 'Huggies', imgId: 'cat-huggies' }
          ].map((cat) => (
            <Link key={cat.id} to={`/collections?category=${cat.id}`} className="group relative aspect-square overflow-hidden bg-muted">
              <img 
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                data-strk-img-id={cat.imgId}
                data-strk-img={`[category-name-${cat.id}]`}
                data-strk-img-ratio="1x1"
                data-strk-img-width="800"
              />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="bg-white/90 backdrop-blur-sm px-8 py-4 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  <h3 id={`category-name-${cat.id}`} className="font-serif text-xl uppercase tracking-widest text-primary">{cat.name}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 6. Brand Story Split */}
      <section className="py-20 md:py-32 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24">
            <div className="w-full md:w-1/2 aspect-[4/5] relative">
              <img 
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Velmora Studio"
                className="w-full h-full object-cover"
                data-strk-img-id="brand-story-img"
                data-strk-img="jewelry designer studio beautiful lighting"
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
              />
            </div>
            <div className="w-full md:w-1/2 max-w-lg">
              <h2 className="font-serif text-4xl mb-6 text-primary">Redefining Fine Jewelry</h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                We believe that beautiful things shouldn't be locked away in a safe. 
                Velmora was born from a desire to create accessible, heirloom-quality 
                pieces designed to be worn every day. Crafted with 18k gold vermeil 
                and conflict-free stones, our collections are as conscious as they are beautiful.
              </p>
              <Link 
                to="/about" 
                className="inline-flex items-center gap-2 border-b border-primary pb-1 uppercase tracking-widest text-sm hover:text-muted-foreground transition-colors"
              >
                Our Story <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Testimonials */}
      <section className="py-24 container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12 text-center md:text-left">
          {[
            {
              id: 1,
              text: "I haven't taken off the Golden Sphere Huggies since they arrived. Perfect weight, gorgeous color.",
              author: "Sarah M."
            },
            {
              id: 2,
              text: "The quality feels incredibly premium. It looks exactly like my solid gold pieces at a fraction of the cost.",
              author: "Jessica T."
            },
            {
              id: 3,
              text: "Beautiful packaging and stunning jewelry. This is my new go-to brand for gifting.",
              author: "Elena R."
            }
          ].map((review) => (
            <div key={review.id} className="flex-1 flex flex-col items-center md:items-start">
              <div className="flex gap-1 mb-4 text-accent">
                {[1,2,3,4,5].map(star => <Star key={star} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="font-serif text-xl italic mb-6 leading-relaxed">"{review.text}"</p>
              <p className="text-sm uppercase tracking-widest text-muted-foreground">— {review.author}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 8. Newsletter */}
      <section className="py-24 bg-accent text-accent-foreground text-center">
        <div className="container mx-auto px-6 max-w-2xl">
          <h2 className="font-serif text-3xl md:text-4xl mb-4">Join the List</h2>
          <p className="mb-10 opacity-80">Subscribe to receive 10% off your first order, plus early access to new collections.</p>
          
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-1 bg-white/50 border-b border-primary/20 px-4 py-3 focus:outline-none focus:border-primary placeholder:text-primary/50"
              required
            />
            <button 
              type="submit"
              className="bg-primary text-primary-foreground px-8 py-3 uppercase tracking-widest text-sm font-medium hover:bg-primary/90 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

    </div>
  );
};

export default HomePage;