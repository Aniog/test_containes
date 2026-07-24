import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';
import { useCart } from '../lib/CartContext';
import { seedProducts } from '../lib/data';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json'; // We'll create a dummy one if it doesn't exist, or just rely on standard tags

export default function Home() {
  const containerRef = useRef(null);
  const { addItem } = useCart();
  const bestsellers = seedProducts.slice(0, 4);

  useEffect(() => {
    // We would use ImageHelper here in a real Strikingly environment
    // For now we'll just mock the config so it doesn't fail if we added it
    if (typeof ImageHelper !== 'undefined' && ImageHelper.loadImages) {
        try {
            ImageHelper.loadImages({}, containerRef.current);
        } catch(e) {}
    }
  }, []);

  return (
    <div ref={containerRef} className="w-full">
      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-secondary"
          data-strk-bg-id="hero-bg-main"
          data-strk-bg="[hero-sub] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        >
            <div className="absolute inset-0 bg-black/30"></div> {/* Dark overlay for text readability */}
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-3xl mx-auto mt-16">
          <span id="hero-sub" className="block text-sm md:text-base uppercase tracking-[0.3em] mb-4 text-white/90">
            Demi-Fine Gold Jewelry
          </span>
          <h1 id="hero-title" className="text-5xl md:text-7xl lg:text-8xl mb-6 font-serif">
            Crafted to be Treasured
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-10 max-w-xl mx-auto font-light">
            Quiet luxury for the modern woman. Everyday elegance designed to last.
          </p>
          <Link 
            to="/shop" 
            className="inline-block bg-accent text-accent-foreground px-8 py-4 uppercase tracking-widest text-sm font-medium hover:bg-accent/90 transition-colors"
          >
            Shop the Collection
          </Link>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="bg-primary text-primary-foreground py-3 border-y border-border">
        <div className="container mx-auto px-4">
          <ul className="flex flex-wrap justify-center items-center gap-x-8 gap-y-2 text-xs uppercase tracking-widest font-medium text-primary-foreground/80">
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-accent rounded-full"></span> Free Worldwide Shipping</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-accent rounded-full"></span> 30-Day Returns</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-accent rounded-full"></span> 18K Gold Plated</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-accent rounded-full"></span> Hypoallergenic</li>
          </ul>
        </div>
      </div>

      {/* Bestsellers Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 id="bestsellers-title" className="text-3xl md:text-4xl font-serif">Our Bestsellers</h2>
              <p className="text-muted-foreground mt-2">Curated favorites loved by our community.</p>
            </div>
            <Link to="/shop" className="hidden md:flex items-center gap-2 text-sm uppercase tracking-widest hover:text-accent font-medium pb-1 border-b border-transparent hover:border-accent transition-all">
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {bestsellers.map((product) => (
              <div key={product.id} className="group relative">
                <Link to={`/product/${product.id}`} className="block relative aspect-[4/5] bg-secondary overflow-hidden mb-4">
                  <img 
                    src={product.imgUrl} 
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    data-strk-img-id={product.imgId || "bs-prod-default"}
                    data-strk-img={`[prod-title-${product.id}] [bestsellers-title]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="600"
                  />
                  {/* Quick Add Overlay */}
                  <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    <button 
                      onClick={(e) => {
                        e.preventDefault();
                        addItem({ ...product, variant: product.variants[0] });
                      }}
                      className="w-full bg-background/95 backdrop-blur text-foreground py-3 text-sm uppercase tracking-widest font-medium hover:bg-primary hover:text-primary-foreground transition-colors border border-border"
                    >
                      Quick Add
                    </button>
                  </div>
                </Link>
                <div className="text-center">
                  <h3 id={`prod-title-${product.id}`} className="font-serif text-sm tracking-widest uppercase mb-1">{product.name}</h3>
                  <p className="text-muted-foreground">${product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UGC / Editorial Reel */}
      <section className="py-12 overflow-hidden bg-secondary/30 border-y border-border">
        <div className="container mx-auto px-4 mb-8 text-center">
          <h2 id="journal-title" className="text-2xl font-serif italic text-muted-foreground">Spotted in Velmora</h2>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-8 snap-x snap-mandatory hide-scrollbar px-4" style={{ scrollbarWidth: 'none' }}>
          {[1,2,3,4,5].map((i) => {
            const ugcImages = ["ugc-img-1", "ugc-img-2", "ugc-img-3", "ugc-img-4", "ugc-img-5"];
            return (
            <div key={i} className="snap-center shrink-0 w-[280px] sm:w-[320px] aspect-[9/16] relative bg-secondary">
              <img 
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Editorial look"
                className="w-full h-full object-cover"
                data-strk-img-id={ugcImages[i-1]}
                data-strk-img="[journal-title] gold jewelry model portrait"
                data-strk-img-ratio="9x16"
                data-strk-img-width="400"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6">
                <p className="font-serif text-white italic text-lg opacity-90">"The perfect everyday staple."</p>
              </div>
            </div>
            );
          })}
        </div>
      </section>

      {/* Categories */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-[auto] md:h-[600px]">
            {['Earrings', 'Necklaces', 'Huggies'].map((cat, i) => {
              const catImages = ["cat-earrings", "cat-necklaces", "cat-huggies"];
              return (
              <Link 
                key={cat} 
                to={`/shop?category=${cat.toLowerCase()}`}
                className="group relative overflow-hidden bg-secondary block aspect-square md:aspect-auto"
              >
                <img 
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={`${cat} category`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  data-strk-img-id={catImages[i]}
                  data-strk-img={`${cat} gold jewelry collection high end editorial`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="800"
                />
                <div className="absolute inset-0 bg-black/10 transition-opacity group-hover:bg-black/20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-background/90 backdrop-blur-sm px-8 py-4 border border-border/50 transform transition-transform group-hover:-translate-y-2">
                    <h3 className="font-serif text-xl tracking-widest uppercase">{cat}</h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Story Split */}
      <section className="bg-primary text-primary-foreground">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="aspect-square lg:aspect-auto relative bg-secondary">
             <img 
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Brand story"
                className="w-full h-full object-cover"
                data-strk-img-id="story-img-main"
                data-strk-img="[story-title] [story-desc]"
                data-strk-img-ratio="1x1"
                data-strk-img-width="1000"
              />
          </div>
          <div className="flex flex-col justify-center px-8 py-20 lg:p-24 xl:p-32">
            <h2 id="story-title" className="text-3xl lg:text-5xl font-serif mb-6 leading-tight">The Art of Understated Luxury</h2>
            <div className="w-12 h-[1px] bg-accent mb-8"></div>
            <p id="story-desc" className="text-primary-foreground/80 mb-8 max-w-md font-light leading-relaxed">
              Founded on the belief that fine jewelry shouldn't be reserved for special occasions. We design accessible, demi-fine pieces crafted in 18k gold vermeil to elevate your everyday rituals.
            </p>
            <Link to="/about" className="inline-flex items-center gap-2 uppercase tracking-widest text-sm font-medium hover:text-accent transition-colors w-fit">
              Read Our Story <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif mb-16">Loved by You</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { text: "Absolutely stunning quality. They look and feel like solid gold. I haven't taken the huggies out since they arrived.", name: "Sarah M." },
              { text: "The perfect balance of subtle and statement. The packaging was also incredibly luxurious - a joy to unbox.", name: "Elena R." },
              { text: "I have sensitive skin and usually react to plated jewelry, but these have been perfect. Highly recommend.", name: "Jessica T." }
            ].map((review, i) => (
              <div key={i} className="flex flex-col items-center p-8 bg-secondary/20">
                <div className="flex text-accent mb-6">
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                </div>
                <p className="font-serif italic text-lg mb-6 leading-relaxed">"{review.text}"</p>
                <p className="uppercase tracking-widest text-xs font-medium text-muted-foreground">— {review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 bg-secondary border-t border-border">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-serif mb-4">Join the Inner Circle</h2>
          <p className="text-muted-foreground mb-8">Sign up to receive 10% off your first order, plus early access to new collections.</p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-1 bg-background border border-border px-6 py-4 focus:outline-none focus:border-accent transition-colors"
              required
            />
            <button type="submit" className="bg-primary text-primary-foreground px-8 py-4 uppercase tracking-widest text-sm font-medium hover:bg-primary/90 transition-colors">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}