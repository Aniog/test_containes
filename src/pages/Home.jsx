import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import { Star } from 'lucide-react';
import strkImgConfig from '@/strk-img-config.json';
import ProductCard from '../components/ProductCard';
import { CategoryImage, UgcImage } from '../components/ProductImage';
import { MOCK_PRODUCTS } from '../data';

export default function Home() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="flex flex-col min-h-screen">
      {/* 1. Hero Section */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-muted"
          data-strk-bg-id="hero-bg-123"
          data-strk-bg="[hero-headline] [hero-subhead] jewelry model gold"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-black/20" /> {/* Dark overlay for text readability */}
        
        <div className="relative z-10 text-center text-white px-6 w-full max-w-4xl mx-auto flex flex-col items-center">
          <h1 id="hero-headline" className="font-serif text-5xl md:text-7xl lg:text-8xl mb-6 font-light tracking-wide text-balance">
            Crafted to be <br/><i className="font-serif italic font-medium">Treasured</i>
          </h1>
          <p id="hero-subhead" className="max-w-md mx-auto text-sm md:text-base font-light tracking-widest uppercase text-white/90 mb-10 text-balance leading-relaxed">
            Demi-fine gold jewelry for the modern romantic. Effortless elegance for every day.
          </p>
          <Link 
            to="/shop" 
            className="inline-block bg-primary text-primary-foreground px-10 py-4 uppercase tracking-widest text-sm hover:bg-primary/90 transition-colors duration-300"
          >
            Shop the Collection
          </Link>
        </div>
      </section>

      {/* 2. Trust Bar */}
      <section className="py-4 border-b border-border bg-background">
        <div className="max-w-7xl mx-auto px-6 overflow-hidden">
          <div className="flex justify-between items-center whitespace-nowrap overflow-x-auto no-scrollbar gap-8 md:gap-4 text-[10px] md:text-xs uppercase tracking-widest text-foreground/70">
            <span className="flex-shrink-0 flex items-center before:content-[''] before:block before:w-1.5 before:h-1.5 before:bg-primary before:mr-3">Free Worldwide Shipping</span>
            <span className="flex-shrink-0 flex items-center before:content-[''] before:block before:w-1.5 before:h-1.5 before:bg-primary before:mr-3">30-Day Returns</span>
            <span className="flex-shrink-0 flex items-center before:content-[''] before:block before:w-1.5 before:h-1.5 before:bg-primary before:mr-3">18K Gold Plated</span>
            <span className="flex-shrink-0 flex items-center before:content-[''] before:block before:w-1.5 before:h-1.5 before:bg-primary before:mr-3">Hypoallergenic</span>
          </div>
        </div>
      </section>

      {/* 3. Bestsellers Grid */}
      <section className="py-24 px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="flex items-end justify-between mb-12">
          <h2 id="bestsellers-title" className="font-serif text-3xl md:text-4xl tracking-wide uppercase text-foreground">Bestsellers</h2>
          <Link to="/shop" className="hidden md:inline-block text-sm uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors border-b border-transparent hover:border-primary pb-1">
            View All
          </Link>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-x-6 gap-y-12">
          {MOCK_PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
          <Link to="/shop" className="inline-block text-sm uppercase tracking-widest text-foreground border-b mb-1 pb-1 border-foreground">
            View All Bestsellers
          </Link>
        </div>
      </section>

      {/* 4. UGC Reel Row */}
      <section className="py-24 bg-muted/30 border-y border-border overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
          <h2 id="ugc-title" className="font-serif text-3xl tracking-wide uppercase">As Seen On You</h2>
          <p className="mt-4 text-muted-foreground uppercase tracking-widest text-xs">@velmorajewelry</p>
        </div>
        
        {/* Horizontal scrolling row */}
        <div className="flex overflow-x-auto no-scrollbar gap-4 px-6 pb-8 -mb-8 snap-x">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="flex-none w-[280px] md:w-[320px] aspect-[9/16] relative group overflow-hidden bg-muted snap-start">
              <UgcImage
                id={i}
                alt={`Customer photo ${i}`}
                className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                idQuery="[ugc-title] jewelry worn on neck ear instagram aesthetic"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-6 left-6 right-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                <p className="font-serif italic text-lg leading-snug">"The only earrings I wear every single day."</p>
                <p className="mt-2 text-xs uppercase tracking-widest text-white/80">— Sarah M.</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Shop by Category */}
      <section className="py-24 px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <h2 id="categories-title" className="text-center font-serif text-3xl tracking-wide uppercase mb-16">Curate Your Stack</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { id: 'cat-earrings', title: 'Earrings', query: 'gold earrings flatlay' },
            { id: 'cat-necklaces', title: 'Necklaces', query: 'gold necklaces pendant' },
            { id: 'cat-huggies', title: 'Huggies', query: 'small gold hoop earrings' }
          ].map((cat) => (
            <Link key={cat.id} to={`/shop?category=${cat.title.toLowerCase()}`} className="group relative block aspect-[4/5] overflow-hidden bg-muted">
              <CategoryImage
                id={cat.id}
                alt={cat.title}
                className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                idQuery={`[cat-title-${cat.id}] ${cat.query}`}
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-background/90 backdrop-blur-sm px-8 py-4 transform outline outline-1 outline-offset-[-4px] outline-border overflow-hidden">
                  <span id={`cat-title-${cat.id}`} className="font-serif text-xl uppercase tracking-[0.2em] relative z-10">{cat.title}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 6. Brand Story Split */}
      <section className="bg-[#1A1A1A] text-white">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="relative aspect-square lg:aspect-auto">
            <div 
              className="absolute inset-0"
              data-strk-bg-id="story-bg-123"
              data-strk-bg="jewelry maker workshop gold editorial"
              data-strk-bg-ratio="1x1"
              data-strk-bg-width="1000"
            ></div>
          </div>
          <div className="flex flex-col justify-center px-10 py-24 md:px-20 lg:px-24">
            <h2 id="story-title" className="font-serif text-3xl md:text-5xl uppercase tracking-wide mb-8">The Art of<br/>Quiet Luxury</h2>
            <div className="space-y-6 text-white/70 font-light leading-relaxed max-w-md">
              <p>
                Founded on the belief that fine jewelry shouldn't be reserved for special occasions, Velmora bridges the gap between fast fashion and unreachable luxury luxury.
              </p>
              <p>
                Each piece in our collection is crafted with a thick layer of 18K gold vermeil, ensuring durability and a brilliant shine that stands the test of time. Accessible elegance, made for your everyday layer.
              </p>
            </div>
            <div className="mt-12">
              <Link to="/about" className="inline-flex items-center gap-4 group">
                <span className="uppercase tracking-widest text-xs font-semibold">Discover Our Story</span>
                <span className="w-8 h-[1px] bg-white group-hover:w-16 transition-all duration-300 relative">
                  <span className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 border-t border-r border-white rotate-45 transform origin-center"></span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Testimonials */}
      <section className="py-24 px-6 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-border">
          {[
            { name: 'Emma T.', text: 'The quality is astonishing. I wear my Golden Sphere Huggies to the gym and in the shower, and they haven\'t tarnished at all.' },
            { name: 'Olivia H.', text: 'I received the Amber Lace Earrings as a gift and I\'m completely in love. The packaging was stunning, and the pieces feel so heavy and premium.' },
            { name: 'Chloe M.', text: 'Finally found demi-fine jewelry that doesn\'t irritate my sensitive skin. I\'m slowly replacing all my old jewelry with Velmora.' }
          ].map((review, i) => (
            <div key={i} className="flex flex-col items-center pt-8 md:pt-0 md:px-8 first:pt-0">
              <div className="flex gap-1 mb-6 text-primary">
                {[1, 2, 3, 4, 5].map(star => <Star key={star} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="font-serif text-lg leading-snug mb-6 flex-1 text-balance">"{review.text}"</p>
              <p className="text-xs uppercase tracking-widest text-muted-foreground">— {review.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 8. Newsletter */}
      <section className="py-24 bg-muted px-6 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="font-serif text-3xl uppercase tracking-wide mb-6">Enjoy 10% Off</h2>
          <p className="text-muted-foreground mb-10 leading-relaxed font-light">
            Join the Velmora insider list to receive early access to new collections, styling tips, and 10% off your first purchase.
          </p>
          <form className="flex flex-col sm:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Your email address" 
              required
              className="flex-1 bg-background border-none px-6 py-4 focus:ring-1 focus:ring-primary outline-none transition-shadow"
            />
            <button 
              type="submit" 
              className="bg-foreground text-background px-8 py-4 uppercase tracking-widest text-xs hover:bg-primary transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}