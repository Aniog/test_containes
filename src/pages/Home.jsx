import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { PRODUCTS } from '@/data/products';
import { useCartStore } from '@/store/cartStore';
import { ArrowRight, Star } from 'lucide-react';

export default function Home() {
  const containerRef = useRef(null);
  const addItem = useCartStore(state => state.addItem);

  useEffect(() => {
    let cleanup = () => {};
    const frameId = window.requestAnimationFrame(() => {
      cleanup = ImageHelper.loadImages(strkImgConfig, containerRef.current) || (() => {});
    });
    return () => {
      window.cancelAnimationFrame(frameId);
      cleanup();
    };
  }, []);

  const bestsellers = PRODUCTS.slice(0, 5);

  const testimonials = [
    { text: "The quality is absolutely stunning. I get compliments on my huggies every single day.", author: "Sarah M.", stars: 5 },
    { text: "Quiet luxury perfectly captured. The packaging was beautiful and the jewelry feels so substantial.", author: "Elena R.", stars: 5 },
    { text: "My new everyday staples. They haven't tarnished and sit perfectly on the ear.", author: "Michelle K.", stars: 5 },
  ];

  return (
    <div ref={containerRef} className="w-full">
      {/* Hero */}
      <section className="relative h-screen min-h-[600px] max-h-[900px] flex items-center justify-center text-white text-center overflow-hidden">
        <div 
          className="absolute inset-0"
          data-strk-bg-id="home-hero-bg"
          data-strk-bg="close-up model warm-lit gold earrings necklace jewelry"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 p-4 max-w-3xl flex flex-col items-center">
          <h1 className="text-5xl md:text-7xl mb-6 tracking-wide drop-shadow-md">Crafted to be Treasured</h1>
          <p className="text-lg md:text-xl font-sans mb-10 font-light tracking-wide opacity-90 drop-shadow">
            Demi-fine gold jewelry for the modern woman. Discover pieces designed for everyday elegance.
          </p>
          <Link 
            to="/shop" 
            className="bg-primary hover:bg-white hover:text-primary text-primary-foreground px-10 py-4 uppercase tracking-[0.2em] text-sm transition-all duration-300"
          >
            Shop the Collection
          </Link>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-secondary text-secondary-foreground py-4 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center md:justify-between items-center text-xs tracking-[0.15em] uppercase gap-y-4 gap-x-8 md:gap-4 text-center font-medium">
            <span>Free Worldwide Shipping</span>
            <span className="hidden md:inline text-muted-foreground">•</span>
            <span>30-Day Returns</span>
            <span className="hidden md:inline text-muted-foreground">•</span>
            <span>18K Gold Plated</span>
            <span className="hidden md:inline text-muted-foreground">•</span>
            <span>Hypoallergenic</span>
          </div>
        </div>
      </section>

      {/* Bestsellers */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex justify-between items-end mb-16">
            <h2 className="text-4xl tracking-wide">Our Bestsellers</h2>
            <Link to="/shop" className="hidden md:flex items-center gap-2 text-sm uppercase tracking-widest hover:text-primary transition-colors border-b border-transparent hover:border-primary pb-1">
              Shop All <ArrowRight size={16} />
            </Link>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8">
            {bestsellers.map(product => (
              <div key={product.id} className="group flex flex-col">
                <Link to={`/product/${product.id}`} className="block relative aspect-[3/4] bg-muted mb-6 overflow-hidden">
                  <img 
                    data-strk-img-id={`best-${product.imgId}`}
                    data-strk-img={`[product-title-${product.id}] jewelry on clean background editorial`}
                    data-strk-img-ratio="2x3"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={product.name}
                    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 group-hover:opacity-0"
                  />
                  <img 
                    data-strk-img-id={`best-hover-${product.imgIdHover}`}
                    data-strk-img={`model wearing [product-title-${product.id}] jewelry elegant`}
                    data-strk-img-ratio="2x3"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} worn`}
                    className="absolute inset-0 w-full h-full object-cover opacity-0 transition-all duration-700 group-hover:opacity-100 group-hover:scale-105"
                  />
                  <button 
                    onClick={(e) => {
                      e.preventDefault();
                      addItem({ product, variant: 'gold', quantity: 1 });
                    }}
                    className="absolute bottom-0 inset-x-0 bg-background/95 backdrop-blur-sm text-foreground py-4 text-xs uppercase tracking-widest translate-y-full group-hover:translate-y-0 transition-transform duration-300 hover:bg-foreground hover:text-background"
                  >
                    Quick Add
                  </button>
                </Link>
                <Link to={`/product/${product.id}`} className="flex flex-col flex-1">
                  <h3 id={`product-title-${product.id}`} className="text-sm tracking-[0.15em] uppercase mb-2">{product.name}</h3>
                  <div className="flex justify-between items-center mt-auto">
                    <span className="font-serif italic text-muted-foreground text-sm">{product.material}</span>
                    <span className="font-serif text-lg">${product.price}</span>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center md:hidden">
            <Link to="/shop" className="inline-flex items-center gap-2 text-sm uppercase tracking-widest border border-foreground px-8 py-3 hover:bg-foreground hover:text-background transition-colors">
              Shop All
            </Link>
          </div>
        </div>
      </section>

      {/* UGC / Reels row */}
      <section className="py-24 bg-[#FAFAFA] overflow-hidden">
        <div className="pl-4 md:pl-8 lg:pl-16 mb-12">
          <h2 className="text-4xl tracking-wide">In Motion</h2>
          <p className="font-serif italic text-muted-foreground mt-3 text-lg">See how our pieces catch the light</p>
        </div>
        
        <div className="flex overflow-x-auto gap-4 md:gap-6 px-4 md:px-8 lg:px-16 pb-8 snap-x snap-mandatory scrollbar-hide" style={{ scrollbarWidth: 'none' }}>
          {[1,2,3,4,5,6].map((i) => (
            <div key={i} className="relative w-72 md:w-80 h-[450px] md:h-[500px] flex-shrink-0 snap-center bg-muted overflow-hidden group border border-border/50">
               <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
                  data-strk-bg-id={`reel-bg-${i}`}
                  data-strk-bg={`vertical portrait video style jewelry lifestyle beautiful model shot gold bright ${i}`}
                  data-strk-bg-ratio="9x16"
                  data-strk-bg-width="800"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-80" />
                <div className="absolute bottom-8 inset-x-6 text-white text-center transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="font-serif text-xl italic mb-3">"Everyday elegance defined."</p>
                  <span className="text-[10px] uppercase tracking-[0.2em] opacity-80 border-b border-white/40 pb-1">Shop this look</span>
                </div>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="py-32">
        <div className="container mx-auto px-4 md:px-8">
           <h2 className="text-4xl tracking-wide text-center mb-20">Shop by Category</h2>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: 'Earrings', id: 'cat-earrings' },
                { name: 'Necklaces', id: 'cat-necklaces' },
                { name: 'Huggies', id: 'cat-huggies' }
              ].map(cat => (
                <Link to={`/shop?category=${cat.name.toLowerCase()}`} key={cat.id} className="relative group block aspect-[4/5] bg-muted overflow-hidden">
                    <img 
                      data-strk-img-id={cat.id}
                      data-strk-img={`[cat-title-${cat.id}] gold jewelry model warm editorial`}
                      data-strk-img-ratio="4x5"
                      data-strk-img-width="800"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={cat.name}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-500" />
                    <div className="absolute inset-0 flex items-center justify-center">
                       <h3 id={`cat-title-${cat.id}`} className="text-white text-3xl md:text-4xl font-serif tracking-widest drop-shadow-md scale-95 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500 bg-black/20 px-10 py-5 backdrop-blur-sm border border-white/20">
                         {cat.name}
                       </h3>
                       {/* Default visible label for mobile or non-hover */}
                       <h3 className="text-white text-3xl md:text-4xl font-serif tracking-widest drop-shadow-md group-hover:opacity-0 transition-opacity duration-300 absolute inset-auto">
                         {cat.name}
                       </h3>
                    </div>
                </Link>
              ))}
           </div>
        </div>
      </section>

      {/* Brand Story Split */}
      <section className="py-20 md:py-32 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center gap-16 md:gap-24">
             <div className="w-full md:w-1/2 aspect-[4/5] bg-muted shrink-0 relative overflow-hidden">
                <img 
                  data-strk-img-id="brand-story-img"
                  data-strk-img="jewelry designer studio craft beautiful editorial warm light gold"
                  data-strk-img-ratio="4x5"
                  data-strk-img-width="1000"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt="Our Craft"
                  className="absolute inset-0 w-full h-full object-cover"
                />
             </div>
             <div className="w-full md:w-1/2 flex flex-col items-start max-w-xl">
               <h2 className="text-4xl md:text-5xl tracking-wide mb-8 leading-tight">Designed for the Everyday Muse</h2>
               <p className="font-sans font-light text-foreground/80 leading-relaxed mb-6 text-lg">
                 At Velmora, we believe that fine jewelry shouldn't wait for a special occasion. We create demi-fine pieces using a thick vermeil of 18K gold over sterling silver, ensuring that your jewelry wears beautifully day after day.
               </p>
               <p className="font-sans font-light text-foreground/80 leading-relaxed mb-12 text-lg">
                 Our collections are designed in-house, balancing editorial boldness with quiet, timeless luxury. From morning meetings to an evening gala, Velmora transitions flawlessly.
               </p>
               <Link to="/about" className="border-b border-foreground pb-1 text-xs uppercase tracking-[0.2em] hover:text-primary hover:border-primary transition-colors font-medium">
                 Discover Our Story
               </Link>
             </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-background">
         <div className="container mx-auto px-4 md:px-8 text-center">
            <h2 className="text-4xl tracking-wide mb-20">Loved by You</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12">
               {testimonials.map((t, idx) => (
                 <div key={idx} className="flex flex-col items-center">
                   <div className="flex text-primary mb-8 gap-1.5">
                     {[...Array(t.stars)].map((_, i) => <Star key={i} size={18} fill="currentColor" strokeWidth={1} />)}
                   </div>
                   <p className="font-serif italic text-2xl md:text-3xl leading-snug mb-8 px-4 text-foreground/90">"{t.text}"</p>
                   <span className="uppercase tracking-[0.2em] text-[11px] font-medium text-muted-foreground">— {t.author}</span>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* Newsletter */}
      <section className="py-32 bg-primary text-primary-foreground text-center">
        <div className="container mx-auto px-4 max-w-2xl">
           <h2 className="text-4xl md:text-5xl tracking-wide mb-6">Join the Inner Circle</h2>
           <p className="font-sans font-light opacity-90 mb-12 text-lg">Sign up to receive 10% off your first order, plus early access to new collections.</p>
           
           <form className="flex flex-col sm:flex-row gap-0 max-w-lg mx-auto" onSubmit={e => e.preventDefault()}>
              <input 
                 type="email" 
                 placeholder="Your email address" 
                 required
                 className="flex-1 bg-transparent border border-primary-foreground/30 px-6 py-4 placeholder:text-primary-foreground/60 focus:outline-none focus:border-primary-foreground text-center sm:text-left transition-colors font-sans text-sm rounded-none"
              />
              <button 
                 type="submit" 
                 className="bg-primary-foreground text-primary px-10 py-4 uppercase tracking-[0.2em] text-xs font-medium hover:bg-primary-foreground/90 transition-colors"
              >
                 Subscribe
              </button>
           </form>
        </div>
      </section>

    </div>
  );
}