import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/plugin/strk-img-config.json';
import { products } from '../data/products';
import ProductCard from '../components/ui/ProductCard';

export default function Home() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  const bestsellers = products.slice(0, 4);

  return (
    <div ref={containerRef} className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center text-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-primary/20 mix-blend-multiply z-10" 
          aria-hidden="true"
        />
        <div 
          className="absolute inset-0 z-0 bg-black/30"
          data-strk-bg-id="hero-bg-2a4c9"
          data-strk-bg="[hero-subhead] [hero-title] jewelry model editorial warm lighting close up"
          data-strk-bg-ratio="16x9"
        />
        
        <div className="relative z-20 container mx-auto px-4 mt-20">
          <h1 id="hero-title" className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-6 tracking-wide drop-shadow-md">
            Crafted to be Treasured
          </h1>
          <p id="hero-subhead" className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light drop-shadow">
            Demi-fine gold jewelry designed for the modern woman. 
            Everyday luxury that transitions effortlessly from day to night.
          </p>
          <Link 
            to="/shop" 
            className="inline-block bg-background text-foreground font-medium uppercase tracking-widest text-sm py-4 px-10 hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-lg"
          >
            Shop the Collection
          </Link>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="bg-primary text-primary-foreground py-4 border-b border-border/20 text-xs md:text-sm uppercase tracking-widest font-medium overflow-hidden whitespace-nowrap">
        <div className="container mx-auto px-4 flex justify-between items-center w-max gap-8 md:w-full md:gap-0 animate-marquee md:animate-none">
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
      <section className="py-24 container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif mb-4 text-primary">Our Bestsellers</h2>
          <div className="w-12 h-[1px] bg-accent mx-auto" />
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {bestsellers.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Link 
            to="/shop" 
            className="inline-block border border-primary text-primary font-medium uppercase tracking-widest text-sm py-3 px-8 hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            View All Jewelry
          </Link>
        </div>
      </section>

      {/* Instagram Reel Style UGC Section */}
      <section className="py-24 bg-secondary overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 mb-12">
          <h2 id="ugc-title" className="text-3xl font-serif text-primary">Styled by You</h2>
          <p id="ugc-subhead" className="mt-2 text-muted-foreground uppercase tracking-widest text-sm">@velmorajewelry</p>
        </div>
        
        {/* Horizontal scroll container */}
        <div className="flex overflow-x-auto gap-6 pb-8 px-4 lg:px-8 snap-x snap-mandatory scrollbar-hide">
          {[
             {id: 'ugc-1', caption: 'The Amber Lace Earrings catching golden hour light.'},
             {id: 'ugc-2', caption: 'Everyday stacking with our Golden Sphere Huggies.'},
             {id: 'ugc-3', caption: 'Dinner ready in the Majestic Flora Nectar.'},
             {id: 'ugc-4', caption: 'A touch of sparkle. The Vivid Aura Jewels.'},
             {id: 'ugc-5', caption: 'Layered perfection. Our necklaces in 18k gold.'}
          ].map((item) => (
            <div key={item.id} className="relative w-64 h-96 flex-shrink-0 snap-center rounded overflow-hidden group">
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={item.caption}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                data-strk-img-id={`ugc-img-${item.id}`}
                data-strk-img={`[${item.id}-caption] [ugc-title]`}
                data-strk-img-ratio="9x16"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-4">
                <p id={`${item.id}-caption`} className="font-serif text-white text-sm drop-shadow-sm leading-relaxed">{item.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Shop by Category */}
      <section className="py-24 container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif mb-4 text-primary">Find Your New Favorite</h2>
          <div className="w-12 h-[1px] bg-accent mx-auto" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-[600px] md:h-[400px]">
          {['Earrings', 'Necklaces', 'Huggies'].map((category, idx) => (
            <Link 
              key={category} 
              to={`/shop?category=${category}`}
              className="relative block overflow-hidden group border border-border"
            >
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={`Shop ${category}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                data-strk-img-id={`cat-img-${category.toLowerCase()}`}
                data-strk-img={`[cat-label-${category.toLowerCase()}] fine jewelry collection`}
                data-strk-img-ratio={idx === 1 ? "4x3" : "3x4"}
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center pointer-events-none">
                <h3 
                  id={`cat-label-${category.toLowerCase()}`} 
                  className="font-serif text-2xl text-white tracking-widest uppercase drop-shadow-md translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none"
                >
                  {category}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Brand Story Split */}
      <section className="py-0 bg-primary text-primary-foreground flex flex-col lg:flex-row">
        <div className="lg:w-1/2 min-h-[400px] relative">
           <img
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Brand story"
              className="absolute inset-0 w-full h-full object-cover"
              data-strk-img-id="story-img-main"
              data-strk-img="[story-title] [story-text] jewelry making studio editorial"
              data-strk-img-ratio="4x3"
           />
        </div>
        <div className="lg:w-1/2 flex items-center justify-center p-12 lg:p-24 text-center lg:text-left">
          <div className="max-w-md">
            <h2 id="story-title" className="text-3xl lg:text-4xl font-serif mb-6 drop-shadow-sm">Quiet Luxury, Everyday Wear</h2>
            <p id="story-text" className="text-primary-foreground/90 font-light leading-relaxed mb-10 text-sm md:text-base">
              Velmora was born from the desire to create jewelry that feels both precious and effortless. We bridge the gap between costume jewelry and fine jewelry, crafting pieces in 18k gold vermeil that are designed to withstand the test of time, without the traditional markup.
            </p>
            <Link 
              to="/about"
              className="inline-block border-b border-accent pb-1 text-sm font-medium uppercase tracking-widest hover:text-accent transition-colors"
            >
              Our Story
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 container mx-auto px-4 lg:px-8 bg-background">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            {
              text: "The Vivid Aura Jewels exceeded my expectations. They look and feel like something you'd buy from a high-end boutique in Paris.",
              name: "Eleanor S."
            },
            {
              text: "Finally found huggies that don't irritate my sensitive ears. The quality is exceptional and the packaging was stunning.",
              name: "Mia K."
            },
            {
              text: "I treated myself to the Majestic Flora necklace for my birthday and I haven't taken it off since. It elevates simple jeans and a tee.",
              name: "Sophie T."
            }
          ].map((review, i) => (
            <div key={i} className="text-center px-4">
              <div className="flex justify-center gap-1 mb-6 text-accent">
                {Array(5).fill(null).map((_, j) => (
                  <svg key={j} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="font-serif text-lg text-foreground/80 mb-6 italic leading-relaxed">"{review.text}"</p>
              <p className="text-sm font-medium uppercase tracking-widest">{review.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 bg-accent/10 border-t border-accent/20">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <h2 className="text-3xl font-serif text-primary mb-4">Join the Inner Circle</h2>
          <p className="text-muted-foreground mb-8">Subscribe to receive 10% off your first order, plus early access to new collections and editorial insights.</p>
          <form className="flex flex-col sm:flex-row gap-4" onSubmit={(e) => { e.preventDefault(); alert("Thanks for subscribing!"); }}>
            <input 
              type="email" 
              placeholder="Your email address" 
              required
              className="flex-1 bg-background border border-border px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors placeholder:text-muted-foreground/60"
            />
            <button 
              type="submit"
              className="bg-primary text-primary-foreground font-medium uppercase tracking-widest text-sm py-3 px-8 hover:bg-primary/90 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}