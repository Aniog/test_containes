import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Bestsellers } from '../components/home/Bestsellers';
import { UgcReel } from '../components/home/UgcReel';

export function Home() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
        let frameId = requestAnimationFrame(() => {
            try {
                ImageHelper.loadImages(strkImgConfig, containerRef.current);
            } catch (e) {
                console.log('ImageHelper not available yet or strkImgConfig missing', e);
            }
        });
        return () => cancelAnimationFrame(frameId);
    }
  }, []);

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          data-strk-bg-id="hero-bg-123"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        >
          {/* Fallback pattern while bg loads */}
          <div className="absolute inset-0 bg-primary/20 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px] opacity-20"></div>
        </div>
        
        {/* Overlay gradient for readability */}
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/40 via-transparent to-black/20"></div>
        
        <div className="container mx-auto px-4 relative z-20 text-center text-white flex flex-col items-center mt-16">
          <h1 id="hero-title" className="text-5xl md:text-7xl font-serif mb-6 styling-fluid-text shadow-sm drop-shadow-lg">
            Crafted to be Treasured
          </h1>
          <p id="hero-subtitle" className="text-lg md:text-xl font-light mb-10 max-w-xl text-balance drop-shadow-md">
            Premium demi-fine gold jewelry designed for everyday elegance and moments of quiet luxury.
          </p>
          <Link 
            to="/collections/all" 
            className="inline-block bg-white text-primary px-10 py-4 uppercase tracking-widest text-sm font-medium hover:bg-neutral-100 transition-colors"
          >
            Shop the Collection
          </Link>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="bg-primary text-primary-foreground py-3 border-y border-primary-foreground/10">
        <div className="container mx-auto px-4 overflow-hidden">
          <div className="flex justify-between items-center text-xs md:text-sm tracking-widest uppercase flex-wrap gap-4 md:flex-nowrap md:overflow-x-auto whitespace-nowrap scrollbar-hide py-1">
            <span className="flex-shrink-0 px-4 md:px-0">Free Worldwide Shipping</span>
            <span className="hidden md:block w-1 h-1 rounded-full bg-primary-foreground/30 flex-shrink-0"></span>
            <span className="flex-shrink-0 px-4 md:px-0">30-Day Returns</span>
            <span className="hidden md:block w-1 h-1 rounded-full bg-primary-foreground/30 flex-shrink-0"></span>
            <span className="flex-shrink-0 px-4 md:px-0">18K Gold Plated</span>
            <span className="hidden md:block w-1 h-1 rounded-full bg-primary-foreground/30 flex-shrink-0"></span>
            <span className="flex-shrink-0 px-4 md:px-0">Hypoallergenic</span>
          </div>
        </div>
      </div>

      <Bestsellers />
      
      <UgcReel />

      {/* Categories */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
            {[
              { id: 'cat-1', title: 'Earrings', bgId: 'cat-bg-1' },
              { id: 'cat-2', title: 'Necklaces', bgId: 'cat-bg-2' },
              { id: 'cat-3', title: 'Huggies', bgId: 'cat-bg-3' }
            ].map(cat => (
              <Link 
                key={cat.id} 
                to={`/collections/${cat.title.toLowerCase()}`}
                className="group relative h-[60vh] md:h-[70vh] overflow-hidden block flex items-center justify-center"
              >
                <div 
                  className="absolute inset-0 transition-transform duration-1000 group-hover:scale-105"
                  data-strk-bg-id={cat.bgId}
                  data-strk-bg={`gold jewelry ${cat.title.toLowerCase()} editorial`}
                  data-strk-bg-ratio="3x4"
                  data-strk-bg-width="800"
                >
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-500"></div>
                </div>
                
                <h3 className="relative z-10 font-serif text-3xl md:text-4xl text-white tracking-widest uppercase opacity-90 group-hover:opacity-100 transition-opacity drop-shadow-md">
                  {cat.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-24 md:py-32 bg-background border-t border-border">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center gap-16 md:gap-24">
            <div className="w-full md:w-1/2 aspect-[4/5] relative bg-muted">
               <img
                  data-strk-img-id="brand-story-img"
                  data-strk-img="woman wearing elegant gold jewelry editorial portrait"
                  data-strk-img-ratio="4x5"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt="Velmora brand heritage"
                  className="w-full h-full object-cover"
                />
            </div>
            
            <div className="w-full md:w-1/2 flex flex-col justify-center">
              <h2 className="font-serif text-3xl md:text-5xl mb-8 tracking-wide">
                Redefining Everyday Luxury
              </h2>
              <div className="space-y-6 text-muted-foreground mb-10 text-lg leading-relaxed text-balance">
                <p>
                  At Velmora, we believe that fine jewelry shouldn't be reserved for special occasions. It should be lived in, loved, and layered daily.
                </p>
                <p>
                  Created for the modern woman, our pieces are crafted using 18k gold vermeil over recycled base metals, offering the look and feel of solid gold at an accessible price point.
                </p>
              </div>
              <Link 
                to="/about" 
                className="inline-block border-b border-primary pb-1 text-sm uppercase tracking-widest hover:text-accent-foreground hover:border-accent-foreground transition-colors self-start"
              >
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-secondary/50">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-serif text-center mb-16 tracking-wide">
            Loved by You
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
             {[
               { quote: "The quality is outstanding. I've been wearing the huggies daily for months and they still look brand new.", name: "Sarah J." },
               { quote: "Exactly the quiet luxury vibe I was looking for. Will definitely be adding more to my collection.", name: "Elena M." },
               { quote: "Even more beautiful in person. The packaging made unboxing feel like a true gift to myself.", name: "Chloe T." }
             ].map((review, i) => (
                <div key={i} className="text-center">
                  <div className="flex justify-center mb-4">
                     {[...Array(5)].map((_, idx) => (
                       <svg key={idx} className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                         <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                       </svg>
                     ))}
                  </div>
                  <p className="font-serif italic text-lg mb-4 text-muted-foreground">"{review.quote}"</p>
                  <p className="text-sm tracking-widest uppercase">{review.name}</p>
                </div>
             ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 bg-primary text-primary-foreground text-center">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="font-serif text-3xl md:text-4xl mb-4 tracking-wide">
            Join the Velmora Insider
          </h2>
          <p className="text-primary-foreground/80 mb-10 text-balance">
            Subscribe to receive 10% off your first order, plus early access to new collections and exclusive events.
          </p>
          
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Email address" 
              required
              className="flex-1 bg-transparent border border-primary-foreground/30 px-4 py-3 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:border-primary-foreground"
            />
            <button 
              type="submit"
              className="bg-primary-foreground text-primary px-8 py-3 uppercase tracking-widest text-sm font-medium hover:bg-primary-foreground/90 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}