import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../strk-img-config.json';
import { products } from '../data/products';
import { ArrowRight, Star } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Home() {
  const containerRef = useRef(null);
  const { addItem } = useCart();

  useEffect(() => {
    // We will initialize image helper here later when we setup strkImgConfig
    // For now we try/catch in case strkImgConfig is missing
    try {
      if (strkImgConfig) {
        return ImageHelper.loadImages(strkImgConfig, containerRef.current);
      }
    } catch (e) {
      console.log('strkImgConfig missing', e);
    }
  }, []);

  const bestsellers = products.slice(0, 4);

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <div 
            className="w-full h-full bg-slate-900" /* Fallback color */
            data-strk-bg-id="hero-bg-2k19"
            data-strk-bg="[hero-headline] [hero-subhead] gold jewelry on neck editorial"
            data-strk-bg-ratio="16x9"
            data-strk-bg-width="1600"
          >
            {/* The image helper will inject the background image here */}
          </div>
          {/* Overlay to ensure text readability */}
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-6 w-full max-w-4xl mx-auto flex flex-col items-center mt-16">
          <h1 id="hero-headline" className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium tracking-wide mb-6">
            Crafted to be Treasured
          </h1>
          <p id="hero-subhead" className="text-lg md:text-xl font-light mb-10 max-w-xl text-white/90">
            Demi-fine jewelry designed for the everyday. Elevate your layers with our premium 18k gold-plated essentials.
          </p>
          <Button asChild size="lg" className="rounded-none bg-primary text-primary-foreground hover:bg-primary/90 uppercase tracking-[0.2em] px-10 h-14 text-sm font-medium border border-primary">
            <Link to="/shop">Shop the Collection</Link>
          </Button>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-secondary/50 py-6 border-b border-border">
        <div className="container mx-auto px-6 flex flex-wrap justify-between items-center text-xs md:text-sm uppercase tracking-widest text-muted-foreground gap-y-4">
          <div className="w-1/2 md:w-auto text-center md:text-left">Free Worldwide Shipping</div>
          <div className="w-1/2 md:w-auto text-center md:text-left">30-Day Returns</div>
          <div className="w-1/2 md:w-auto text-center md:text-left">18K Gold Plated</div>
          <div className="w-1/2 md:w-auto text-center md:text-left">Hypoallergenic</div>
        </div>
      </section>

      {/* Bestsellers */}
      <section className="py-24 max-w-[1400px] mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
          <h2 id="home-bestsellers-title" className="font-serif text-4xl tracking-wider">Bestsellers</h2>
          <Link to="/shop" className="group flex items-center text-sm font-medium tracking-widest uppercase hover:text-primary transition-colors">
            Shop All <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {bestsellers.map((product) => (
            <div key={product.id} className="group relative flex flex-col">
              <Link to={`/product/${product.slug}`} className="block relative aspect-[4/5] bg-secondary mb-4 overflow-hidden">
                <img
                  data-strk-img-id={`bestseller-${product.id}-img1`}
                  data-strk-img={`[${product.descId}] [${product.titleId}] [home-bestsellers-title]`}
                  data-strk-img-ratio="4x5"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.name}
                  className="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                />
                <img
                  data-strk-img-id={`bestseller-${product.id}-img2`}
                  data-strk-img={`[${product.titleId}] close up detail jewelry`}
                  data-strk-img-ratio="4x5"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={`${product.name} detail`}
                  className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />
                
                {/* Quick Add Button Overlay */}
                <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-20">
                  <Button 
                    className="w-full rounded-none bg-background/90 text-foreground hover:bg-background h-10 tracking-widest uppercase text-xs"
                    onClick={(e) => {
                      e.preventDefault();
                      addItem(product);
                    }}
                  >
                    Quick Add
                  </Button>
                </div>
              </Link>
              <div className="flex justify-between items-start mt-2">
                <Link to={`/product/${product.slug}`} className="flex-1">
                  <h3 id={product.titleId} className="font-serif text-sm tracking-wider uppercase">{product.name}</h3>
                  <p id={product.descId} className="sr-only">{product.description}</p>
                </Link>
                <span className="text-sm border-l border-border pl-4 ml-4">${product.price}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* UGC / Editorial Reel */}
      <section className="py-12 overflow-hidden bg-background">
        <div className="pl-6 md:pl-12 lg:pl-[max(1.5rem,calc((100vw-1400px)/2))]">
          <div className="flex space-x-6 overflow-x-auto pb-8 scrollbar-hide snap-x" style={{ scrollbarWidth: 'none' }}>
            {[1, 2, 3, 4, 5].map((item) => (
              <div key={item} className="snap-start flex-none w-[280px] md:w-[320px] aspect-[9/16] relative group">
                <div 
                  className="w-full h-full bg-secondary"
                  data-strk-bg-id={`ugc-bg-${item}`}
                  data-strk-bg={`[ugc-title-${item}] candid aesthetic jewelry worn model`}
                  data-strk-bg-ratio="9x16"
                  data-strk-bg-width="600"
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>
                <p id={`ugc-title-${item}`} className="absolute bottom-6 left-6 right-6 text-white font-serif italic text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                  "Absolutely in love with how these catch the light." — Sarah T.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shop By Category */}
      <section className="py-24 px-6 max-w-[1400px] mx-auto">
        <h2 id="home-categories-title" className="font-serif text-4xl tracking-wider text-center mb-16">Shop by Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-[600px]">
          {['Earrings', 'Necklaces', 'Huggies'].map((cat, idx) => (
            <Link key={cat} to="/shop" className="relative group overflow-hidden bg-secondary w-full h-full">
               <img
                  data-strk-img-id={`category-thumb-${idx}`}
                  data-strk-img={`[cat-label-${idx}] collection editorial portrait`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={`Shop ${cat}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span id={`cat-label-${idx}`} className="bg-background/90 text-foreground font-serif uppercase tracking-widest text-lg px-8 py-3 opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                    {cat}
                  </span>
                </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Story Split Section */}
      <section className="flex flex-col lg:flex-row border-t border-border">
        <div className="lg:w-1/2 bg-secondary relative aspect-square lg:aspect-auto">
           <div 
              className="absolute inset-0 w-full h-full"
              data-strk-bg-id="story-bg-pic"
              data-strk-bg="[story-headline] [story-text] jewelry artisan studio warm"
              data-strk-bg-ratio="1x1"
              data-strk-bg-width="1200"
            ></div>
        </div>
        <div className="lg:w-1/2 flex items-center justify-center p-12 lg:p-24 bg-card">
          <div className="max-w-md">
            <h2 id="story-headline" className="font-serif text-3xl md:text-4xl tracking-wider mb-6">Redefining Everyday Luxury</h2>
            <p id="story-text" className="text-muted-foreground leading-relaxed mb-8">
              Velmora was born from a desire to create demi-fine jewelry that doesn't compromise on quality or design. We believe that true luxury lies in the details — in the weight of a chain, the glow of 18k gold, and the quiet confidence it brings to the wearer.
            </p>
            <Button variant="outline" asChild className="rounded-none uppercase tracking-[0.2em] font-medium h-12 px-8 border-foreground hover:bg-foreground hover:text-background">
              <Link to="/#">Our Story</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-background px-6">
        <h2 className="text-center font-serif text-3xl mb-16 tracking-wider">Loved by Our Community</h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { name: 'Elena M.', text: 'The weight and finish of these pieces is incredible. They look exactly like solid gold but without the markup.' },
            { name: 'Sophie L.', text: 'I never take off my Golden Sphere Huggies. They are the perfect everyday staple and never irritate my ears.' },
            { name: 'Amanda R.', text: 'Beautiful packaging and stunning jewelry. The Royal Heirloom set made the perfect anniversary gift.' },
          ].map((review, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
              <div className="flex gap-1 mb-4 text-primary">
                {[1,2,3,4,5].map(star => <Star key={star} className="w-4 h-4 fill-current stroke-transparent" />)}
              </div>
              <p className="font-serif text-lg italic text-muted-foreground mb-6">"{review.text}"</p>
              <span className="uppercase tracking-widest text-xs font-semibold">— {review.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-primary text-primary-foreground py-24 px-6 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="font-serif text-4xl mb-4">The Velmora List</h2>
          <p className="mb-8 font-light text-primary-foreground/80">Join our newsletter to receive 10% off your first order, plus early access to new collections.</p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-1 bg-transparent border border-primary-foreground/30 px-4 h-12 outline-none placeholder:text-primary-foreground/50 focus:border-primary-foreground transition-colors"
              required
            />
            <Button type="submit" variant="secondary" className="rounded-none h-12 px-8 uppercase tracking-widest text-sm bg-background text-foreground hover:bg-background/90">
              Subscribe
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
}
