import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Button } from '@/components/ui/button';
import { products } from '@/data/products';
import { useCart } from '@/components/CartProvider';

const Home = () => {
  const containerRef = useRef(null);
  const { addItem } = useCart();

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const bestsellers = products.slice(0, 5);

  return (
    <div ref={containerRef} className="w-full flex-1">
      {/* Hero Section */}
      <section className="relative h-[90vh] w-full flex items-center justify-center -mt-20 lg:-mt-[72px]">
        {/* Background Base */}
        <div className="absolute inset-0 bg-[#2C2621]"></div>
        
        {/* strk bg image */}
        <div
          className="absolute inset-0 opacity-80"
          data-strk-bg-id="hero-main-bg"
          data-strk-bg="[hero-headline]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
          style={{ backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
        ></div>
        
        {/* Optional overlay */}
        <div className="absolute inset-0 bg-black/20"></div>

        <div className="relative z-10 text-center max-w-3xl px-6 text-primary-foreground flex flex-col items-center">
          <h1 id="hero-headline" className="text-5xl md:text-7xl font-serif mb-6 leading-tight max-w-2xl mx-auto">
            Crafted to be Treasured
          </h1>
          <p id="hero-subhead" className="text-lg md:text-xl font-light mb-10 text-primary-foreground/90 max-w-xl mx-auto tracking-wide">
            Elevate your everyday with premium demi-fine jewelry. 18K gold plated essentials for the modern muse.
          </p>
          <Button asChild size="lg" className="bg-primary/90 text-primary-foreground hover:bg-primary px-8 rounded-none border border-primary/50 tracking-wider text-xs">
            <Link to="/shop">SHOP THE COLLECTION</Link>
          </Button>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-secondary text-secondary-foreground py-4 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 overflow-hidden">
          <div className="flex justify-between items-center whitespace-nowrap overflow-x-auto hide-scrollbar gap-8 md:gap-4 text-xs tracking-widest font-medium uppercase text-muted-foreground">
            <span className="flex items-center gap-2">• <span className="pt-0.5">Free Worldwide Shipping</span></span>
            <span className="flex items-center gap-2">• <span className="pt-0.5">30-Day Returns</span></span>
            <span className="flex items-center gap-2">• <span className="pt-0.5">18K Gold Plated</span></span>
            <span className="flex items-center gap-2">• <span className="pt-0.5">Hypoallergenic</span></span>
          </div>
        </div>
      </section>

      {/* Bestsellers */}
      <section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <h2 id="bestsellers-heading" className="text-3xl font-serif">Bestsellers</h2>
          <Link to="/shop" className="text-sm uppercase tracking-widest font-medium border-b border-foreground pb-1 hover:text-muted-foreground transition-colors">
            View All
          </Link>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
           {bestsellers.map(product => (
             <div key={product.id} className="group cursor-pointer">
               <Link to={`/product/${product.id}`} className="block relative aspect-[3/4] bg-secondary mb-4 overflow-hidden">
                 <img
                    alt={product.name}
                    data-strk-img-id={`bestseller-${product.id}`}
                    data-strk-img={`[product-${product.id}-title] [bestsellers-heading]`}
                    data-strk-img-ratio="2x3"
                    data-strk-img-width="500"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                 />
                 <div className="absolute bottom-0 left-0 w-full p-4 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    <Button 
                      className="w-full bg-background text-foreground hover:bg-primary hover:text-primary-foreground rounded-none shadow-sm text-xs"
                      onClick={(e) => {
                        e.preventDefault();
                        addItem(product);
                      }}
                    >
                      ADD TO CART
                    </Button>
                 </div>
               </Link>
               <div className="text-center">
                 <h3 id={`product-${product.id}-title`} className="font-serif uppercase tracking-widest text-sm mb-2">{product.name}</h3>
                 <p className="text-muted-foreground text-sm">${product.price}</p>
               </div>
             </div>
           ))}
        </div>
      </section>

      {/* UGC Reel Row */}
      <section className="py-16 bg-[#FAf7f2] border-y border-border overflow-hidden">
        <div className="px-6 lg:px-12 mb-10 text-center">
          <h2 id="ugc-heading" className="text-2xl font-serif italic text-muted-foreground">Seen on you</h2>
        </div>
        <div className="flex gap-4 px-6 overflow-x-auto hide-scrollbar pb-8 snap-x snap-mandatory">
          {[1,2,3,4,5,6].map(i => (
             <div key={i} className="relative min-w-[280px] h-[450px] snap-center shrink-0 rounded-md overflow-hidden bg-secondary">
               <img
                  alt="Customer wearing jewelry"
                  data-strk-img-id={`ugc-reel-${i}`}
                  data-strk-img="[ugc-heading] portrait model wearing gold jewelry"
                  data-strk-img-ratio="9x16"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-col justify-end p-6">
                 <span className="text-secondary opacity-90 font-serif italic text-lg shadow-black">"The quality is unmatched."</span>
                 <span className="text-secondary/70 text-xs uppercase tracking-widest mt-2">@velmoramuse</span>
               </div>
             </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto">
        <h2 id="categories-heading" className="text-3xl font-serif mb-12 text-center">Shop by Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {['Earrings', 'Necklaces', 'Huggies'].map((cat, i) => (
            <Link key={cat} to={`/shop?cat=${cat}`} className="relative aspect-square group overflow-hidden bg-secondary">
              <img
                 alt={cat}
                 data-strk-img-id={`cat-${i}`}
                 data-strk-img={`[cat-${i}-title] gold jewelry`}
                 data-strk-img-ratio="1x1"
                 data-strk-img-width="600"
                 src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                 className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-500 flex items-center justify-center">
                <span id={`cat-${i}-title`} className="text-primary-foreground font-serif text-3xl tracking-widest uppercase opacity-90 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                  {cat}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Brand Story */}
      <section className="bg-foreground text-secondary">
        <div className="flex flex-col md:flex-row min-h-[600px]">
          <div className="md:w-1/2 relative min-h-[400px]">
            <img
               alt="Jewelry crafting"
               data-strk-img-id={`story-img`}
               data-strk-img="[story-title] [story-desc]"
               data-strk-img-ratio="4x3"
               data-strk-img-width="800"
               src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
               className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div className="md:w-1/2 flex flex-col justify-center items-start p-12 lg:p-24">
            <h2 id="story-title" className="text-3xl md:text-5xl font-serif mb-6">Designed for the Everyday</h2>
            <p id="story-desc" className="text-secondary/80 font-light leading-relaxed mb-8 max-w-md">
              We believe fine jewelry shouldn't be reserved for special occasions. By working directly with master jewelers, we create accessible, premium pieces that elevate your daily uniform.
            </p>
            <Button asChild variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-foreground rounded-none px-8">
              <Link to="#">OUR STORY</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto text-center">
        <h2 className="text-sm uppercase tracking-widest font-medium text-muted-foreground mb-16">Loved by Thousands</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8">
           {[
             { name: "Sarah J.", text: "Absolutely stunning pieces. I haven't taken off my huggies since they arrived." },
             { name: "Elena M.", text: "The quality rivals brands that charge triple the price. A forever customer." },
             { name: "Chloe T.", text: "Beautiful packaging and the jewelry feels so substantial. Highly recommend." }
           ].map((t, i) => (
             <div key={i} className="flex flex-col items-center">
               <div className="flex gap-1 text-primary mb-6">
                 {[1,2,3,4,5].map(star => (
                   <svg key={star} className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                 ))}
               </div>
               <p className="font-serif text-xl md:text-2xl leading-relaxed mb-6">"{t.text}"</p>
               <p className="text-sm font-medium tracking-widest uppercase">{t.name}</p>
             </div>
           ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-primary text-primary-foreground py-24 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-4">Join the Club</h2>
          <p className="text-primary-foreground/90 font-light mb-10">Subscribe to receive 10% off your first order, plus early access to new collections.</p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" onSubmit={e => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 bg-transparent border-b border-primary-foreground/50 px-4 py-3 placeholder:text-primary-foreground/60 focus:outline-none focus:border-primary-foreground transition-colors"
              required
            />
            <Button type="submit" variant="secondary" className="rounded-none shrink-0 font-medium tracking-widest text-xs px-8">
              SUBSCRIBE
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;