import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../components/CartContext';
import { getProducts } from '../data/products';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

export function Home() {
  const containerRef = useRef(null);
  const products = getProducts();
  const { addItem } = useCart();

  useEffect(() => {
    // If strk-img-config is populated later, this will render the images
    if (ImageHelper && strkImgConfig) {
       try {
         ImageHelper.loadImages(strkImgConfig, containerRef.current);
       } catch (e) {
         // ignore
       }
    }
  }, []);

  return (
    <div ref={containerRef} className="bg-background">
      
      {/* 1. Full-bleed Hero */}
      <section className="relative h-screen min-h-[600px] w-full flex items-center justify-center pt-20">
        <div 
          className="absolute inset-0 z-0 bg-secondary"
          data-strk-bg-id="hero-bg-9j2x"
          data-strk-bg="model wearing gold jewelry quiet luxury editorial"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        >
          {/* Fallback pattern if ImageHelper isn't ready or strkImgConfig is empty */}
          <div className="absolute inset-0 bg-black/20" /> 
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-3xl pt-20">
          <h1 id="hero-headline" className="text-4xl md:text-6xl text-primary-foreground font-serif font-light tracking-wide mb-6">
            Crafted to be Treasured
          </h1>
          <p id="hero-subhead" className="text-lg md:text-xl text-primary-foreground/90 font-light mb-10 max-w-lg mx-auto leading-relaxed">
            Discover our collection of demi-fine gold jewelry. Everyday elegance for the modern woman.
          </p>
          <Button 
            asChild
            className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-none shadow-none uppercase tracking-widest px-10 py-7 text-sm font-medium transition-colors duration-300"
          >
            <Link to="/shop">Shop the Collection</Link>
          </Button>
        </div>
      </section>

      {/* 2. Trust Bar */}
      <section className="bg-background border-b border-border py-4 px-4 overflow-x-auto scrollbar-hide">
        <div className="container mx-auto px-4 md:px-6 w-full max-w-7xl">
          <div className="flex flex-nowrap md:flex-wrap justify-between items-center space-x-8 md:space-x-4 min-w-max text-xs uppercase tracking-widest font-medium text-foreground/80">
            <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-accent rounded-full inline-block"></span> Free Worldwide Shipping</span>
            <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-accent rounded-full inline-block"></span> 30-Day Returns</span>
            <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-accent rounded-full inline-block"></span> 18K Gold Plated</span>
            <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-accent rounded-full inline-block"></span> Hypoallergenic</span>
          </div>
        </div>
      </section>

      {/* 3. Bestsellers */}
      <section className="py-24 px-4">
        <div className="container mx-auto px-4 md:px-6 w-full max-w-7xl">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-3xl font-serif text-foreground">Bestsellers</h2>
            <Link to="/shop" className="text-sm font-medium hover:text-accent transition-colors uppercase tracking-widest underline underline-offset-4 decoration-border">View All</Link>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
            {products.map((product) => (
              <div key={product.id} className="group cursor-pointer flex flex-col">
                <Link to={`/product/${product.id}`} className="relative aspect-[3/4] overflow-hidden bg-secondary/30 mb-4 block">
                  <img
                    alt={product.name}
                    src={product.image}
                    data-strk-img-id={`best-${product.id}`}
                    data-strk-img={`[prod-${product.id}-name] elegant gold jewelry dark background`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="400"
                    className="object-cover w-full h-full transition-opacity duration-500 group-hover:opacity-0"
                  />
                  <img
                    alt={`${product.name} lifestyle`}
                    src={product.hoverImage}
                    data-strk-img-id={`best-hover-${product.id}`}
                    data-strk-img={`[prod-${product.id}-name] lifestyle worn on model`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="400"
                    className="absolute inset-0 object-cover w-full h-full opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  />
                </Link>
                <div className="flex flex-col flex-1 text-center">
                  <h3 id={`prod-${product.id}-name`} className="font-serif uppercase tracking-widest text-sm text-foreground mb-2 leading-tight">
                    <Link to={`/product/${product.id}`}>{product.name}</Link>
                  </h3>
                  <p className="text-muted-foreground text-sm font-light mb-4">${product.price}</p>
                  
                  <div className="mt-auto opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button 
                      onClick={(e) => {
                        e.preventDefault();
                        addItem({ ...product, quantity: 1, variant: '18K Gold' });
                      }}
                      className="w-full bg-transparent border border-foreground text-foreground hover:bg-foreground hover:text-background rounded-none shadow-none text-xs uppercase tracking-widest py-4 transition-colors"
                    >
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Categorized Shop Tiles */}
      <section className="py-12 px-4 bg-secondary/20">
        <div className="container mx-auto px-4 md:px-6 w-full max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {['Earrings', 'Necklaces', 'Huggies'].map((cat, i) => (
               <Link to="/shop" key={cat} className="group relative aspect-square overflow-hidden block bg-secondary/50">
                   <img
                    alt={cat}
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    data-strk-img-id={`cat-${i}`}
                    data-strk-img={`gold ${cat.toLowerCase()} jewelry beautiful lighting`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="600"
                    className="object-cover w-full h-full transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 p-8 flex justify-center bg-gradient-to-t from-black/60 to-transparent">
                     <span className="font-serif text-2xl text-primary-foreground tracking-widest uppercase relative z-10 transition-transform duration-300 group-hover:-translate-y-2">
                       {cat}
                     </span>
                  </div>
               </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 5. UGC Reel Row */}
      <section className="py-24 px-4 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 w-full max-w-[1400px]">
          <h2 className="text-center font-serif text-2xl mb-12">As Seen On You</h2>
          
          {/* Horizontal scroll on mobile, flex on desktop */}
          <div className="flex overflow-x-auto space-x-6 pb-8 snap-x scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0">
             {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="flex-shrink-0 w-[240px] md:flex-1 md:w-auto relative aspect-[9/16] bg-secondary/40 snap-center rounded-xl overflow-hidden group">
                  <img
                    alt={`Customer wearing Velmora ${i}`}
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    data-strk-img-id={`ugc-${i}`}
                    data-strk-img={`casual selfie woman wearing gold jewelry`}
                    data-strk-img-ratio="9x16"
                    data-strk-img-width="400"
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white text-xs tracking-widest uppercase border-b border-white/50 pb-1">Shop Look</span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white font-serif text-sm drop-shadow-md">@velmorajewelry</p>
                  </div>
                </div>
             ))}
          </div>
        </div>
      </section>

      {/* 6. Brand Story Split */}
      <section className="py-0 flex flex-col md:flex-row bg-background">
         <div className="w-full md:w-1/2 aspect-square md:aspect-auto bg-secondary/30 relative">
             <div 
              className="absolute inset-0"
              data-strk-bg-id="story-bg-1"
              data-strk-bg="editorial jewelry flatlay gold elegant"
              data-strk-bg-ratio="1x1"
              data-strk-bg-width="800"
             />
         </div>
         <div className="w-full md:w-1/2 flex items-center justify-center p-12 md:p-24 lg:p-32 bg-[#F9F8F6]">
            <div className="max-w-md text-center md:text-left">
              <h2 className="text-3xl font-serif mb-6 text-foreground">Our Story</h2>
              <p className="text-foreground/80 font-light leading-relaxed mb-10">
                Velmora was born from a desire to create demi-fine jewelry that feels deeply personal. We believe in quiet luxury—pieces that don't scream for attention but are crafted with such care that they become a part of your daily ritual. 
              </p>
              <Link to="/about" className="inline-block border-b border-foreground pb-1 text-sm uppercase tracking-widest hover:text-accent hover:border-accent transition-colors">
                 Read More
              </Link>
            </div>
         </div>
      </section>

      {/* 7. Testimonials */}
      <section className="py-24 px-4 bg-background">
        <div className="container mx-auto px-4 md:px-6 w-full max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                text: "The quality is absolutely stunning. I haven't taken the Aura Cuff off since I got it. It's the perfect everyday statement.",
                name: "Sarah M.",
                product: "Vivid Aura Jewels"
              },
              {
                text: "I was looking for something elegant but accessible. Velmora hit every mark. Beautiful packaging, gorgeous jewelry.",
                name: "Jessica T.",
                product: "Golden Sphere Huggies"
              },
              {
                text: "These pieces feel so much more expensive than they are. The gold tone is warm and perfect, not brassy at all.",
                name: "Elena R.",
                product: "Amber Lace Earrings"
              }
            ].map((review, i) => (
              <div key={i} className="text-center flex flex-col items-center">
                <div className="flex gap-1 mb-6 text-accent">
                   {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                      </svg>
                   ))}
                </div>
                <p className="font-serif italic text-xl leading-relaxed mb-6">"{review.text}"</p>
                <div className="mt-auto">
                    <p className="text-xs uppercase tracking-widest font-medium">{review.name}</p>
                    <p className="text-xs text-muted-foreground mt-2 font-light">{review.product}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Newsletter */}
      <section className="bg-accent text-accent-foreground py-24 px-4 text-center">
        <div className="container mx-auto px-4 md:px-6 w-full max-w-2xl">
          <h2 className="text-3xl font-serif mb-4">Join for 10% Off</h2>
          <p className="font-light mb-10 max-w-md mx-auto">Subscribe to our newsletter for early access to new collections, exclusive events, and styling tips.</p>
          
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-1 bg-transparent border-b border-accent-foreground/50 py-3 px-2 outline-none focus:border-accent-foreground transition-colors placeholder:text-accent-foreground/50 font-light rounded-none text-center sm:text-left"
              required
            />
            <button 
              type="submit"
              className="border border-accent-foreground text-accent-foreground hover:bg-accent-foreground hover:text-accent uppercase tracking-widest text-xs py-4 px-8 transition-colors duration-300 rounded-none whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

    </div>
  );
}