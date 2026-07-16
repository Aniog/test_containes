import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { products } from '@/data/products';
import { ProductCard } from '@/components/product/ProductCard';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Star } from 'lucide-react';

// Bestsellers are just the first 4 products for now
const bestsellers = products.slice(0, 4);

export const Home = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Return cleanup to cancel frame
    const frameId = window.requestAnimationFrame(() => {
      // Create empty config if not imported
      const config = strkImgConfig || {};
      ImageHelper.loadImages(config, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <div ref={containerRef}>
      {/* 1. Hero Section */}
      <section className="relative h-screen min-md:h-[600px] flex items-center justify-center">
        <div 
          className="absolute inset-0 z-0 after:content-[''] after:absolute after:inset-0 after:bg-black/30"
          data-strk-bg-id="hero-bg-1"
          data-strk-bg="[hero-title] [hero-subtitle]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
          style={{ backgroundSize: 'cover', backgroundPosition: 'center', backgroundColor: '#2d2a26' }}
        />
        <div className="relative z-10 text-center text-white px-4 max-w-3xl mx-auto mt-20">
          <h1 id="hero-title" className="font-serif text-5xl md:text-7xl mb-6 text-white">Crafted to be Treasured</h1>
          <p id="hero-subtitle" className="text-lg md:text-xl mb-8 font-light tracking-wide">
            Fine gold jewelry designed for everyday elegance.
          </p>
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-sm tracking-widest uppercase">
            <Link to="/shop">Shop the Collection</Link>
          </Button>
        </div>
      </section>

      {/* 2. Trust Bar */}
      <section className="border-b bg-background">
        <div className="container mx-auto px-4 py-4 md:py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-xs md:text-sm tracking-wider uppercase font-medium text-foreground">
            <div>Free Worldwide Shipping</div>
            <div>30-Day Returns</div>
            <div>18K Gold Plated</div>
            <div>Hypoallergenic</div>
          </div>
        </div>
      </section>

      {/* 3. Bestsellers */}
      <section className="py-20 md:py-32 container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 id="bestsellers-title" className="font-serif text-4xl mb-4">Trending Now</h2>
          <p className="text-muted-foreground">Our most loved pieces this season.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {bestsellers.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* 4. Category Grid */}
      <section className="py-12 container mx-auto px-4 md:px-8 space-y-8">
        {/* We'll implement a clean 3-col grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:h-[600px]">
          <Link to="/shop?category=earrings" className="relative group overflow-hidden block h-[200px] md:h-auto md:row-span-2">
            <div 
              className="absolute inset-0 bg-secondary transition-transform duration-700 group-hover:scale-105"
              data-strk-bg-id="cat-earrings"
              data-strk-bg="[bestsellers-title]"
              data-strk-bg-ratio="3x4"
              data-strk-bg-width="800"
              style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
            <div className="absolute inset-0 flex flex-col items-center justify-end pb-12">
              <span className="bg-background/90 text-foreground px-8 py-3 text-sm tracking-widest uppercase font-medium">Earrings</span>
            </div>
          </Link>

          <Link to="/shop?category=necklaces" className="relative group overflow-hidden block h-[200px] md:col-span-2 md:h-auto">
            <div 
              className="absolute inset-0 bg-secondary transition-transform duration-700 group-hover:scale-105"
              data-strk-bg-id="cat-necklaces"
              data-strk-bg="[bestsellers-title]"
              data-strk-bg-ratio="16x9"
              data-strk-bg-width="1200"
              style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="bg-background/90 text-foreground px-8 py-3 text-sm tracking-widest uppercase font-medium">Necklaces</span>
            </div>
          </Link>

          <Link to="/shop?category=huggies" className="relative group overflow-hidden block h-[200px] md:col-span-2 md:h-auto">
            <div 
              className="absolute inset-0 bg-secondary transition-transform duration-700 group-hover:scale-105"
              data-strk-bg-id="cat-huggies"
              data-strk-bg="[bestsellers-title]"
              data-strk-bg-ratio="16x9"
              data-strk-bg-width="1200"
              style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="bg-background/90 text-foreground px-8 py-3 text-sm tracking-widest uppercase font-medium">Huggies</span>
            </div>
          </Link>
        </div>
      </section>

      {/* 5. Brand Story Split */}
      <section className="py-20 md:py-32 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
            <div className="w-full md:w-1/2 aspect-[4/5] relative">
              <img 
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Velmora Studio"
                className="w-full h-full object-cover"
                data-strk-img="[story-title] [story-desc]"
                data-strk-img-id="story-img-1"
                data-strk-img-ratio="4x5"
                data-strk-img-width="800"
              />
            </div>
            <div className="w-full md:w-1/2 max-w-lg">
              <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-4 block">Our Philosophy</span>
              <h2 id="story-title" className="font-serif text-4xl mb-6 leading-tight">Elevating the Everyday</h2>
              <p id="story-desc" className="text-muted-foreground leading-relaxed mb-8">
                We believe that fine jewelry shouldn't be reserved for special occasions. 
                Velmora was born from a desire to create demi-fine pieces that offer the 
                luxury of solid gold at an accessible price point. Each piece is designed 
                to be worn, loved, and layered every single day.
              </p>
              <Button variant="outline" asChild className="tracking-widest uppercase text-xs h-12 px-8">
                <Link to="/about">Discover Our Story</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Testimonials */}
      <section className="py-24 container mx-auto px-4 text-center">
        <h2 className="font-serif text-4xl mb-16">Loved by You</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {[
            { name: "Sarah M.", quote: "The quality is outstanding. I haven't taken my huggies off since they arrived." },
            { name: "Elena R.", quote: "Finally, gold jewelry that doesn't tarnish. Beautiful, subtle, and so well made." },
            { name: "Jessica T.", quote: "I get compliments on my Flora necklace everywhere I go. Simply stunning." }
          ].map((review, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="flex gap-1 mb-4 text-primary">
                {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-lg font-serif italic mb-6">"{review.quote}"</p>
              <span className="text-sm font-medium tracking-wider uppercase">— {review.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 7. Reel UGC Row */}
      <section className="py-20 bg-background overflow-hidden relative border-t border-b">
        <div className="container mx-auto px-4 md:px-8 mb-12 flex justify-between items-end">
          <h2 className="font-serif text-3xl">As Seen On</h2>
          <span className="text-sm tracking-widest uppercase font-medium">@velmorajewelry</span>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-8 snap-x px-4 md:px-8" style={{ scrollbarWidth: 'none' }}>
          {[1,2,3,4,5,6].map(i => (
            <div key={i} className="shrink-0 w-64 md:w-80 aspect-[9/16] relative bg-secondary snap-start group cursor-pointer overflow-hidden">
               <img 
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Instagram UGC"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                data-strk-img="[hero-title]"
                data-strk-img-id={`ugc-img-${i}`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="600"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <p className="absolute bottom-6 left-6 right-6 text-white font-serif italic text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                A daily essential.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 8. Newsletter */}
      <section className="py-24 container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center bg-secondary/50 p-12 md:p-16 border border-secondary">
          <h2 className="font-serif text-3xl md:text-4xl mb-4">Join the List</h2>
          <p className="text-muted-foreground mb-8">Sign up to receive 10% off your first order, plus early access to new collections.</p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-1 bg-background border border-input px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
              required
            />
            <Button type="submit" className="h-[46px] tracking-widest uppercase text-xs px-8">
              Subscribe
            </Button>
          </form>
        </div>
      </section>

    </div>
  );
};
