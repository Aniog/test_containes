import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';
import { seedProducts } from '../data/products';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { useCart } from '../context/CartContext';

const Home = () => {
  const containerRef = useRef(null);
  const { addToCart } = useCart();
  const bestsellers = seedProducts.slice(0, 4);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="animate-in fade-in duration-500">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-secondary"
          data-strk-bg-id="hero-bg-1"
          data-strk-bg="[hero-headline] [hero-subhead]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        />
        <div className="absolute inset-0 bg-black/20 z-10" />
        
        <div className="relative z-20 text-center text-primary-foreground px-4 flex flex-col items-center">
          <h1 id="hero-headline" className="text-5xl md:text-7xl lg:text-8xl font-serif mb-6 drop-shadow-sm text-primary-foreground">
            Crafted to be Treasured
          </h1>
          <p id="hero-subhead" className="text-lg md:text-xl font-light mb-10 max-w-xl drop-shadow-sm">
            Discover demi-fine gold jewelry designed for the modern heirloom. Elevate your everyday.
          </p>
          <Link 
            to="/shop" 
            className="bg-primary text-primary-foreground px-8 py-4 uppercase tracking-widest text-sm font-medium hover:bg-primary/90 transition-colors inline-block"
          >
            Shop the Collection
          </Link>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="bg-primary text-primary-foreground py-3 border-y border-border/10 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-xs md:text-sm font-light tracking-wider uppercase whitespace-nowrap overflow-x-auto no-scrollbar gap-8">
            <span>Free Worldwide Shipping</span>
            <span className="hidden md:inline">&middot;</span>
            <span>30-Day Returns</span>
            <span className="hidden md:inline">&middot;</span>
            <span>18K Gold Plated</span>
            <span className="hidden md:inline">&middot;</span>
            <span>Hypoallergenic</span>
          </div>
        </div>
      </div>

      {/* Bestsellers */}
      <section className="py-24 container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-end mb-12">
          <h2 id="bestsellers-title" className="text-3xl md:text-4xl font-serif">Bestsellers</h2>
          <Link to="/shop" className="text-sm font-medium uppercase tracking-widest border-b border-primary pb-1 hover:text-primary/70 transition-colors hidden md:inline-flex items-center gap-2">
            View All <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {bestsellers.map(product => (
            <div key={product.id} className="group cursor-pointer">
              <Link to={`/product/${product.id}`} className="block relative aspect-[3/4] bg-secondary mb-4 overflow-hidden">
                <img 
                  data-strk-img-id={`product-${product.id}-main`}
                  data-strk-img={`[product-title-${product.id}] [bestsellers-title]`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.name}
                  className="object-cover w-full h-full transition-opacity duration-500 group-hover:opacity-0"
                />
                <img 
                  data-strk-img-id={`product-${product.id}-hover`}
                  data-strk-img={`[product-title-${product.id}] close up worn`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={`${product.name} worn`}
                  className="absolute inset-0 object-cover w-full h-full opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />
                
                {/* Quick Add Button Overlay */}
                <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  <button 
                    onClick={(e) => {
                      e.preventDefault();
                      addToCart(product);
                    }}
                    className="w-full bg-background/95 backdrop-blur text-foreground py-3 text-xs font-semibold uppercase tracking-widest hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    Quick Add
                  </button>
                </div>
              </Link>
              <div className="text-center">
                <h3 id={`product-title-${product.id}`} className="product-title mb-2"><Link to={`/product/${product.id}`}>{product.name}</Link></h3>
                <p className="font-serif text-lg">${product.price}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center md:hidden">
            <Link to="/shop" className="text-sm font-medium uppercase tracking-widest border-b border-primary pb-1 hover:text-primary/70 transition-colors inline-block">
              View All
            </Link>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {['Earrings', 'Necklaces', 'Huggies'].map((cat, idx) => (
              <Link to={`/shop?category=${cat.toLowerCase()}`} key={cat} className="group relative aspect-square overflow-hidden block">
                 <img 
                  data-strk-img-id={`category-${idx}`}
                  data-strk-img={`woman wearing gold ${cat}`}
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={`Shop ${cat}`}
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-500" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="font-serif text-3xl text-primary-foreground opacity-90 group-hover:opacity-100 transition-opacity drop-shadow-sm group-hover:scale-110 duration-500 transform">{cat}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Story Split */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">
            <div className="flex-1 w-full aspect-[4/5] bg-secondary relative overflow-hidden">
               <img 
                  data-strk-img-id="brand-story-img"
                  data-strk-img="[story-headline]"
                  data-strk-img-ratio="4x5"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt="Velmora Studio"
                  className="object-cover w-full h-full"
                />
            </div>
            <div className="flex-1 space-y-6 max-w-xl">
              <h2 id="story-headline" className="text-3xl md:text-4xl font-serif">Redefining Everyday Luxury.</h2>
              <p className="text-muted-foreground font-light leading-relaxed text-lg">
                Born from a desire for accessible elegance, Velmora bridges the gap between fast fashion and fine jewelry. We believe that beautiful, high-quality pieces shouldn't be reserved for special occasions.
              </p>
              <p className="text-muted-foreground font-light leading-relaxed text-lg pb-4">
                Each piece in our collection is thoughtfully designed and responsibly crafted using 18K gold plating over sterling silver, ensuring your pieces last as long as your memories.
              </p>
              <Link to="/about" className="text-sm font-medium uppercase tracking-widest border-b border-primary pb-1 hover:text-primary/70 transition-colors inline-block">
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* UGC / Social Row */}
      <section className="py-16 bg-primary text-primary-foreground overflow-hidden">
        <div className="container mx-auto px-4 mb-10 text-center">
            <h2 className="text-3xl font-serif mb-2">As Seen On You</h2>
            <p className="font-light text-sm opacity-80 uppercase tracking-widest">@velmorajewelry</p>
        </div>
        
        <div className="flex gap-4 px-4 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-8">
          {[1,2,3,4,5].map((i) => (
             <div key={i} className="flex-none w-64 md:w-80 aspect-[9/16] bg-secondary/20 relative rounded-sm overflow-hidden snap-center group">
               <img 
                  data-strk-img-id={`ugc-${i}`}
                  data-strk-img="woman selfie wearing gold jewelry editorial"
                  data-strk-img-ratio="9x16"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt="Customer wearing Velmora"
                  className="object-cover w-full h-full opacity-90 group-hover:opacity-100 transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-6 left-6 right-6 text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                  <p className="font-serif italic text-lg mb-2">"My new daily staple."</p>
                  <p className="text-xs uppercase tracking-widest font-semibold pb-1 border-b border-primary-foreground/30 inline-block text-primary-foreground">Shop the look</p>
                </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 md:px-8 text-center max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 divide-y md:divide-y-0 md:divide-x divide-border">
            {[
              { name: "Sarah M.", text: "The quality is simply stunning. They look exactly like solid gold but without the price tag." },
              { name: "Elena R.", text: "Beautiful packaging and the customer service was incredible. Will definitely be ordering again!" },
              { name: "Chloe T.", text: "I haven't taken these huggies off since I got them. No tarnishing, perfect size." }
            ].map((review, i) => (
              <div key={i} className="flex flex-col items-center pt-10 md:pt-0 px-6">
                <div className="flex gap-1 mb-6 text-primary">
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                </div>
                <p className="font-serif text-lg leading-relaxed italic mb-6">"{review.text}"</p>
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">{review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 border-t border-border">
        <div className="container mx-auto px-4 text-center max-w-xl">
           <h2 className="text-3xl md:text-4xl font-serif mb-4">Join the Club</h2>
           <p className="text-muted-foreground font-light mb-8">Subscribe to receive 10% off your first order, plus exclusive access to new collections.</p>
           
           <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
             <input 
               type="email" 
               placeholder="Email Address" 
               className="flex-1 bg-transparent border-b border-border py-3 px-2 focus:outline-none focus:border-primary transition-colors text-center sm:text-left rounded-none font-light"
               required
             />
             <button type="submit" className="bg-primary text-primary-foreground px-8 py-3 rounded-none uppercase tracking-widest text-sm font-medium hover:bg-primary/90 transition-colors shrink-0">
               Subscribe
             </button>
           </form>
        </div>
      </section>

    </div>
  );
};

export default Home;