import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { ProductCard } from '../components/ui/ProductCard';
import { products } from '../data/products';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../strk-img-config.json';

export default function Home() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const bestsellers = products.slice(0, 5);

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center">
        <div
          className="absolute inset-0 z-0 bg-secondary"
          data-strk-bg-id="hero-bg-1"
          data-strk-bg="[hero-subhead] [hero-headline] close up of elegant gold jewelry worn by a model editorial lighting"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-black/20 z-10" />
        <div className="relative z-20 text-center px-6 max-w-3xl mx-auto mt-20 flex flex-col items-center">
          <h1 id="hero-headline" className="text-4xl md:text-6xl text-white font-serif mb-6 leading-tight">
            Crafted to be Treasured
          </h1>
          <p id="hero-subhead" className="text-lg md:text-xl text-white/90 mb-10 max-w-xl text-balance">
            Demi-fine jewelry designed for everyday elegance.
          </p>
          <Button asChild size="lg" className="bg-primary/90 hover:bg-primary text-white border-none">
            <Link to="/collection">Shop the Collection</Link>
          </Button>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="bg-secondary text-secondary-foreground text-xs md:text-sm py-4 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-x-8 gap-y-2 uppercase tracking-wider items-center text-center">
          <span>Free Worldwide Shipping</span>
          <span className="hidden md:inline text-muted-foreground">•</span>
          <span>30-Day Returns</span>
          <span className="hidden md:inline text-muted-foreground">•</span>
          <span>18K Gold Plated</span>
          <span className="hidden md:inline text-muted-foreground">•</span>
          <span>Hypoallergenic</span>
        </div>
      </div>

      {/* Bestsellers Grid */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <h2 id="bestsellers-title" className="text-3xl font-serif mb-3">Our Bestsellers</h2>
            <p className="text-muted-foreground">The pieces our community loves most.</p>
          </div>
          <Link to="/collection" className="text-sm font-medium tracking-wide uppercase hover:text-primary transition-colors underline underline-offset-4 decoration-primary/30">
            Shop All
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {bestsellers.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Category Tiles */}
      <section className="py-12 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {['Earrings', 'Necklaces', 'Huggies'].map((cat, i) => (
            <Link to={`/collection?category=${cat}`} key={cat} className="group relative aspect-square overflow-hidden bg-muted">
              <img
                data-strk-img-id={`category-${cat}-${i}`}
                data-strk-img={`${cat} gold jewelry collection editorial`}
                data-strk-img-ratio="1x1"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={`${cat} collection`}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300" />
              <div className="absolute inset-x-0 bottom-0 p-8 text-center flex flex-col items-center">
                <h3 className="text-white text-3xl font-serif mb-2">{cat}</h3>
                <span className="text-white text-sm tracking-widest uppercase opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                  Shop Now
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-0">
          <div className="relative aspect-[4/5] object-cover bg-muted order-2 md:order-1">
             <img
                data-strk-img-id="brand-story-img-1"
                data-strk-img="[story-title] elegant woman wearing gold jewelry editorial portrait"
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Our Story"
                className="absolute inset-0 h-full w-full object-cover"
              />
          </div>
          <div className="flex flex-col justify-center px-6 py-16 md:p-16 lg:p-24 order-1 md:order-2 bg-background/50">
            <h2 id="story-title" className="text-3xl md:text-4xl font-serif mb-6 text-balance">Modern Heirlooms for the Modern Woman</h2>
            <p className="text-muted-foreground leading-relaxed mb-8 text-balance">
              Velmora was born from a desire for jewelry that feels luxurious but entirely accessible. We believe in pieces that you don't save for special occasions, but rather make every day feel special. Our demi-fine collection is thoughtfully crafted with thick 18K gold plating over jewelers brass, ensuring both durability and enduring beauty.
            </p>
            <div>
              <Button variant="outline" asChild>
                <Link to="/">Discover Our Story</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Reel-style UGC row */}
      <section className="py-24 overflow-hidden">
        <div className="px-6 max-w-7xl mx-auto mb-12 text-center">
             <h2 className="text-3xl font-serif mb-3">Spotted On You</h2>
             <p className="text-muted-foreground">Tag @velmorajewelry to be featured.</p>
        </div>
        
        <div className="flex overflow-x-auto gap-4 px-6 pb-8 snap-x snap-mandatory hide-scrollbar hover:cursor-pointer" style={{ scrollbarWidth: 'none' }}>
           {[1,2,3,4,5,6].map((i) => (
             <div key={i} className="relative w-64 md:w-72 shrink-0 aspect-[9/16] bg-muted snap-center rounded-sm overflow-hidden group">
                <img
                  data-strk-img-id={`ugc-${i}`}
                  data-strk-img={`woman wearing gold jewelry selfie style natural lighting instagram reel style`}
                  data-strk-img-ratio="9x16"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={`UGC ${i}`}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                <p className="absolute bottom-6 left-6 right-6 text-white font-serif text-lg leading-snug drop-shadow-sm select-none">
                  "{['Effortless everyday.', 'My new staple.', 'Obsessed with the quality.', 'Never taking them off.', 'The perfect gift.', 'Golden hour glowing.'][i-1]}"
                </p>
             </div>
           ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-background border-t border-border">
         <div className="max-w-5xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-serif mb-16">Words from our Community</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
               {[
                 { name: 'Sarah M.', text: "I've been wearing the huggies non-stop. No tarnishing, even in the shower. Finally found my go-to brand." },
                 { name: 'Emilia T.', text: "The presentation is gorgeous, making it the perfect gift. But honestly, I kept this set for myself." },
                 { name: 'Jessica L.', text: "I get compliments every time I wear the Vivid Aura ear cuff. It looks so high-end but is so light!" },
               ].map((review, i) => (
                 <div key={i} className="flex flex-col items-center">
                    <div className="flex gap-1 mb-6 text-primary">
                       {[1,2,3,4,5].map(star => (
                         <svg key={star} className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"/></svg>
                       ))}
                    </div>
                    <p className="text-foreground/80 mb-6 italic text-balance">"{review.text}"</p>
                    <p className="text-sm font-medium tracking-wider uppercase">— {review.name}</p>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 bg-primary text-primary-foreground text-center px-6">
        <div className="max-w-xl mx-auto flex flex-col items-center">
          <h2 className="text-3xl font-serif mb-4">Join the Club</h2>
          <p className="mb-8 text-primary-foreground/90 text-balance">
            Subscribe for 10% off your first order, plus early access to new arrivals and exclusive events.
          </p>
          <form className="flex w-full max-w-md bg-white rounded-sm overflow-hidden p-1 gap-2" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-1 px-4 py-2 text-foreground focus:outline-none bg-transparent"
              required
            />
            <Button type="submit" variant="secondary" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 shrink-0 border-none">
               Subscribe
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
}