import React from 'react';
import { Button } from '@/components/ui/button';
import { PRODUCTS } from '@/api/products';
import ProductCard from '@/components/ProductCard';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col">
      {/* 2. Full-bleed hero */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          data-strk-bg-id="home-hero-bg"
          data-strk-bg="elegant woman wearing gold jewelry cinematic warm lighting"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        />
        <div className="absolute inset-0 bg-black/30 z-10" />
        
        <div className="relative z-20 text-center px-6 max-w-4xl animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <h1 id="hero-title" className="font-serif text-5xl md:text-8xl text-white tracking-widest leading-tight uppercase mb-6">
            Crafted to be <br /> Treasured
          </h1>
          <p id="hero-subtitle" className="text-white/90 font-sans text-xs md:text-sm uppercase tracking-[0.4em] mb-10 font-light">
            Demi-fine jewelry for your everyday luxury
          </p>
          <div className="flex justify-center">
            <Button 
              asChild 
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-12 py-8 rounded-none font-serif uppercase tracking-[0.3em] text-xs h-auto border-none"
            >
              <Link to="/shop">Shop the Collection</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* 3. Trust bar */}
      <section className="bg-primary text-white py-4 overflow-hidden border-b border-white/10">
        <div className="flex justify-between items-center gap-10 whitespace-nowrap animate-marquee px-6">
          <span className="text-[10px] uppercase tracking-widest font-light">Free Worldwide Shipping</span>
          <span className="text-[10px] opacity-20 hidden md:block">•</span>
          <span className="text-[10px] uppercase tracking-widest font-light">30-Day Returns</span>
          <span className="text-[10px] opacity-20 hidden md:block">•</span>
          <span className="text-[10px] uppercase tracking-widest font-light font-bold text-accent">18K Gold Plated</span>
          <span className="text-[10px] opacity-20 hidden md:block">•</span>
          <span className="text-[10px] uppercase tracking-widest font-light">Hypoallergenic</span>
          {/* Duplicate for marquee effect on mobile if needed, but keeping it simple for now */}
          <span className="hidden lg:inline-flex gap-10">
            <span className="text-[10px] opacity-20">•</span>
            <span className="text-[10px] uppercase tracking-widest font-light italic">Ethically Sourced</span>
          </span>
        </div>
      </section>

      {/* 4. "Bestsellers" product grid */}
      <section className="py-24 px-6 md:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center mb-16 gap-4">
            <h2 id="bestsellers-title" className="font-serif text-3xl md:text-4xl uppercase tracking-[0.2em]">Our Bestsellers</h2>
            <div className="h-[1px] w-12 bg-accent" />
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-x-4 gap-y-12">
            {PRODUCTS.slice(0, 5).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="mt-20 flex justify-center">
            <Link to="/shop" className="group flex items-center gap-3 font-serif uppercase tracking-[0.2em] text-xs hover:text-accent transition-colors">
              Explore All Jewelry
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Reel-style UGC row */}
      <section className="py-24 bg-secondary/50 overflow-hidden">
        <div className="px-6 md:px-20 mb-12 flex justify-between items-end max-w-7xl mx-auto">
          <h2 id="ugc-title" className="font-serif text-2xl uppercase tracking-[0.2em]">Seen on You</h2>
          <Button variant="link" className="font-sans text-[10px] uppercase tracking-widest p-0 h-auto">@VelmoraJewels</Button>
        </div>
        
        <div className="flex gap-4 overflow-x-auto pb-10 px-6 md:px-20 no-scrollbar">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="relative min-w-[280px] aspect-[9/16] overflow-hidden bg-gray-200">
              <img 
                data-strk-img-id={`ugc-reel-${i}`}
                data-strk-img={`woman wearing jewelry selfie vertical mode instagram style`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="400"
                className="w-full h-full object-cover"
                alt="Client Review"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white text-xs font-serif leading-relaxed italic opacity-90">
                  "Absolutely in love with my new Aura cuff. It goes with everything."
                </p>
                <div className="mt-3 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-2 h-2 rounded-full bg-accent" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Shop by category tiles */}
      <section className="py-24 px-6 md:px-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { name: 'Earrings', query: 'gold earrings aesthetic detail', path: '/shop?category=Earrings' },
            { name: 'Necklaces', query: 'gold necklace aesthetic detail', path: '/shop?category=Necklaces' },
            { name: 'Huggies', query: 'gold huggie earrings aesthetic detail', path: '/shop?category=Huggies' },
          ].map((cat) => (
            <Link key={cat.name} to={cat.path} className="group relative aspect-[4/5] overflow-hidden bg-secondary">
              <img 
                data-strk-img-id={`category-tile-${cat.name}`}
                data-strk-img={cat.query}
                data-strk-img-ratio="4x5"
                data-strk-img-width="800"
                className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105"
                alt={cat.name}
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
              <div className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-black/30" />
              <div className="absolute inset-0 flex flex-col items-center justify-center translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-white font-serif text-3xl uppercase tracking-[0.3em] font-light shadow-sm">
                  {cat.name}
                </h3>
                <div className="mt-4 h-[1px] w-0 group-hover:w-16 bg-white transition-all duration-500" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 7. Brand story split section */}
      <section className="py-24 grid grid-cols-1 md:grid-cols-2 items-center bg-secondary/30">
        <div className="aspect-square md:aspect-auto md:h-full overflow-hidden">
          <img 
            data-strk-img-id="brand-story-img"
            data-strk-img="jewelry designer working in studio minimalist aesthetic"
            data-strk-img-ratio="4x5"
            data-strk-img-width="1200"
            className="w-full h-full object-cover"
            alt="Our Story"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          />
        </div>
        <div className="p-10 md:p-24 flex flex-col gap-8 max-w-2xl">
          <span className="font-sans text-xs uppercase tracking-[0.4em] text-accent font-bold">The Velmora Ethos</span>
          <h2 id="story-title" className="font-serif text-4xl md:text-5xl uppercase tracking-[0.1em] leading-tight">
            Designed for <br /> modern light
          </h2>
          <p id="story-text" className="text-muted-foreground font-light leading-loose text-sm md:text-base">
            Velmora was born from a desire for jewelry that balances luxury with accessibility. We believe that fine pieces shouldn't be reserved for special occasions—they should be part of your story, every single day.
          </p>
          <div className="pt-4">
            <Button variant="outline" asChild className="rounded-none border-primary/20 hover:border-primary">
              <Link to="/about">Our Story</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* 8. Testimonials */}
      <section className="py-32 px-6 md:px-20 text-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-12">
          <div className="flex gap-2">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 bg-accent rounded-full" />
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              { text: "The quality is unmatched for the price. I've worn my necklace daily for months and it still looks new.", author: "Sophia L." },
              { text: "Packaging was beautiful and shipping was incredibly fast. A delightful experience from start to finish.", author: "Emma R." },
              { text: "Perfect for gifting. I bought the Heirloom set for my sister and she hasn't taken it off.", author: "Olivia M." }
            ].map((test, i) => (
              <div key={i} className="flex flex-col gap-6">
                <p className="font-serif text-lg leading-relaxed italic opacity-80">"{test.text}"</p>
                <span className="font-sans text-[10px] uppercase tracking-widest font-bold">— {test.author}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Newsletter capture */}
      <section className="bg-primary py-24 px-6 md:px-20">
        <div className="max-w-xl mx-auto text-center flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <h2 id="newsletter-title" className="text-white font-serif text-3xl uppercase tracking-[0.2em]">Join the Inner Circle</h2>
            <p id="newsletter-subtitle" className="text-white/60 font-sans text-xs uppercase tracking-widest">Receive 10% off your first treasure</p>
          </div>
          <form className="flex flex-col md:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Your email address" 
              className="bg-white/5 border border-white/10 text-white p-4 flex-grow font-sans text-xs focus:outline-none focus:border-accent transition-colors rounded-none placeholder:text-white/30"
            />
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground h-auto p-4 md:px-10 rounded-none font-serif uppercase tracking-widest text-xs">
              Subscribe
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;
