import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Mail } from 'lucide-react';
import { seedProducts } from '../lib/data';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../strk-img-config.json';
import { useCart } from '../components/CartProvider';

export function Home() {
  const containerRef = useRef(null);
  const { addItem } = useCart();
  
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const bestsellers = seedProducts.filter(p => p.tags.includes('bestseller')).slice(0, 5);

  const handleQuickAdd = (e, product) => {
    e.preventDefault(); // Prevent navigating to product detail if link wraps it
    addItem(product, 1, 'Gold');
  };

  return (
    <div ref={containerRef} className="w-full">
      {/* Full-bleed Hero */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center pt-20">
        <div className="absolute inset-0 -z-10 bg-primary/20">
          <div 
            className="w-full h-full bg-cover bg-center"
            data-strk-bg="[hero-subhead] [hero-heading]"
            data-strk-bg-id="home-hero-bg"
            data-strk-bg-ratio="16x9"
            data-strk-bg-width="1920"
          />
          <div className="absolute inset-0 bg-black/30" /> {/* Dark overlay for text contrast */}
        </div>
        
        <div className="container mx-auto px-4 md:px-8 text-center text-white z-10 flex flex-col items-center">
          <span 
            id="hero-subhead" 
            className="uppercase tracking-[0.2em] text-sm md:text-base font-medium mb-4 opacity-90"
          >
            A New Standard of Demi-Fine
          </span>
          <h1 
            id="hero-heading"
            className="font-serif text-5xl md:text-7xl lg:text-8xl mb-8 max-w-4xl mx-auto leading-tight"
          >
            Crafted to be Treasured
          </h1>
          <Link 
            to="/collections" 
            className="inline-block bg-white text-foreground px-8 py-4 uppercase tracking-widest text-sm font-medium hover:bg-white/90 transition-colors"
          >
            Shop the Collection
          </Link>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-primary text-primary-foreground py-4 border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-2 text-xs md:text-sm tracking-wide font-medium text-center">
            <span>Free Worldwide Shipping</span>
            <span className="hidden md:inline text-white/50">•</span>
            <span>30-Day Returns</span>
            <span className="hidden md:inline text-white/50">•</span>
            <span>18K Gold Plated</span>
            <span className="hidden md:inline text-white/50">•</span>
            <span>Hypoallergenic</span>
          </div>
        </div>
      </section>

      {/* Bestsellers */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex justify-between items-end mb-12">
            <h2 id="bestsellers-title" className="font-serif text-3xl md:text-4xl text-foreground">Our Bestsellers</h2>
            <Link to="/collections" className="group flex items-center gap-2 text-sm uppercase tracking-widest hover:text-primary transition-colors text-foreground">
              Shop All <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 text-foreground">
            {bestsellers.map((product) => (
              <div key={product.id} className="group flex flex-col">
                <Link to={`/product/${product.id}`} className="block relative aspect-[4/5] bg-secondary mb-4 overflow-hidden">
                  <img 
                    alt={product.name}
                    data-strk-img={`[product-desc-${product.id}] [product-name-${product.id}] [bestsellers-title]`}
                    data-strk-img-id={`home-bestseller-${product.id}-1`}
                    data-strk-img-ratio="4x5"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover transition-opacity duration-500 ease-in-out group-hover:opacity-0"
                  />
                  <img 
                    alt={`${product.name} alternate view`}
                    data-strk-img={`alternate view [product-desc-${product.id}] [product-name-${product.id}] [bestsellers-title]`}
                    data-strk-img-id={`home-bestseller-${product.id}-2`}
                    data-strk-img-ratio="4x5"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100"
                  />
                  <div className="absolute bottom-0 left-0 w-full p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-10">
                     <button 
                        onClick={(e) => handleQuickAdd(e, product)}
                        className="w-full bg-white/90 backdrop-blur text-foreground py-3 uppercase tracking-widest text-xs font-medium hover:bg-white transition-colors"
                     >
                       Quick Add
                     </button>
                  </div>
                </Link>
                <div className="flex flex-col flex-grow">
                  <Link to={`/product/${product.id}`} className="hover:opacity-70 group-hover:underline underline-offset-4 decoration-primary/30">
                    <h3 id={`product-name-${product.id}`} className="font-serif uppercase tracking-widest text-sm mb-1">{product.name}</h3>
                  </Link>
                  <p id={`product-desc-${product.id}`} className="hidden">{product.description}</p>
                  <span className="text-muted-foreground text-sm">${product.price.toFixed(2)}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UGC Reel Section */}
      <section className="py-24 bg-secondary overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 mb-12">
          <h2 id="ugc-title" className="font-serif text-3xl md:text-4xl text-center text-foreground">Styled by You</h2>
        </div>
        
        {/* Horizontal scroll container */}
        <div className="flex px-4 md:px-8 gap-4 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
           {[1, 2, 3, 4, 5, 6].map((item) => (
             <div key={item} className="relative flex-shrink-0 w-[70vw] md:w-[350px] aspect-[9/16] snap-center rounded-sm overflow-hidden group bg-muted">
                 <img 
                    alt="Customer wearing jewelry"
                    data-strk-img={`customer wearing gold jewelry [ugc-title] lifestyle`}
                    data-strk-img-id={`home-ugc-${item}`}
                    data-strk-img-ratio="9x16"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                  <div className="absolute bottom-0 left-0 p-6 text-white w-full">
                     <p className="font-serif text-lg md:text-xl leading-snug">"The perfect everyday stack."</p>
                     <p className="text-xs uppercase tracking-widest mt-2 opacity-80">@velmoramuse</p>
                  </div>
             </div>
           ))}
        </div>
      </section>

      {/* Shop by Category */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-8">
           <h2 id="categories-title" className="font-serif text-3xl md:text-4xl text-center mb-16 text-foreground">Shop the Edit</h2>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {['Earrings', 'Necklaces', 'Huggies'].map((cat, i) => (
                <Link key={cat} to="/collections" className="group block relative aspect-[3/4] overflow-hidden bg-muted">
                    <img 
                      alt={`${cat} Collection`}
                      data-strk-img={`[cat-title-${i}] jewelry on model editorial`}
                      data-strk-img-id={`home-cat-${i}`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="800"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
                    <div className="absolute inset-0 flex items-center justify-center flex-col">
                       <h3 id={`cat-title-${i}`} className="font-serif text-white text-3xl md:text-4xl mb-4 opacity-100 translate-y-0 transition-all duration-300">
                          {cat}
                       </h3>
                       <span className="text-white uppercase tracking-widest text-xs font-medium opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 border-b border-white pb-1">
                          Explore
                       </span>
                    </div>
                </Link>
              ))}
           </div>
        </div>
      </section>

      {/* Brand Story Split */}
      <section className="bg-secondary">
        <div className="flex flex-col md:flex-row">
           <div className="w-full md:w-1/2 aspect-square md:aspect-auto bg-muted">
             <div 
                className="w-full h-full min-h-[400px] md:min-h-[600px] bg-cover bg-center"
                data-strk-bg="[story-p1] [story-title]"
                data-strk-bg-id="home-story-bg"
                data-strk-bg-ratio="1x1"
                data-strk-bg-width="1000"
             />
           </div>
           <div className="w-full md:w-1/2 flex items-center justify-center p-12 md:p-24 bg-primary text-primary-foreground">
             <div className="max-w-md">
                <h2 id="story-title" className="font-serif text-3xl md:text-4xl mb-6">Designed for the Modern Muse</h2>
                <div className="space-y-4 text-primary-foreground/90 font-light leading-relaxed">
                  <p id="story-p1">
                    At Velmora, we believe that fine jewelry shouldn't be reserved for special occasions. We craft demi-fine pieces that elevate your everyday, bridging the gap between accessible fashion jewelry and traditional fine jewelry.
                  </p>
                  <p>
                    Every piece is thoughtfully designed, meticulously crafted with 18k gold plating over sterling silver or brass, and intended to be layered, loved, and lived in.
                  </p>
                </div>
                <Link to="/" className="inline-block mt-8 border border-white px-8 py-3 uppercase tracking-widest text-xs font-medium hover:bg-white hover:text-primary transition-colors">
                  Our Story
                </Link>
             </div>
           </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-foreground">
            {[
              { name: "Sarah J.", text: "The quality is unmatched for the price point. The Golden Sphere Huggies haven't left my ears since I got them." },
              { name: "Emily M.", text: "I bought the Majestic Flora necklace for a wedding and ended up wearing it every day. It's perfectly subtle yet makes a statement." },
              { name: "Chloe T.", text: "Beautiful packaging, fast shipping, and the jewelry looks exactly like it does on the site. Earning its place as my new go-to brand." }
            ].map((review, i) => (
              <div key={i} className="text-center flex flex-col items-center text-balance">
                <div className="flex gap-1 mb-6 text-primary">
                  {[1, 2, 3, 4, 5].map((star) => <Star key={star} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="font-serif text-xl md:text-2xl italic leading-relaxed mb-6">"{review.text}"</p>
                <span className="uppercase tracking-widest text-xs font-medium text-muted-foreground">— {review.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Block */}
      <section className="py-24 bg-secondary border-t border-border">
        <div className="container mx-auto px-4 md:px-8 max-w-2xl text-center">
           <Mail className="w-8 h-8 mx-auto mb-6 text-primary stroke-[1.5px]" />
           <h2 className="font-serif text-3xl md:text-4xl mb-4 text-foreground">Join the Inner Circle</h2>
           <p className="text-muted-foreground mb-8">Sign up to receive 10% off your first order, plus early access to new collections and editorial inspiration.</p>
           
           <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-grow bg-background border border-border px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors text-foreground placeholder:text-muted-foreground"
                required
              />
              <button 
                type="submit"
                className="bg-primary text-primary-foreground px-8 py-3 uppercase tracking-widest text-xs font-medium hover:bg-primary/90 transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
           </form>
        </div>
      </section>
    </div>
  );
}