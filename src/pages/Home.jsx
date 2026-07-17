import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../contexts/CartContext';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../strk-img-config.json';
import { cn } from '../lib/utils';

export default function Home() {
  const containerRef = useRef(null);
  const { addItem } = useCart();
  const bestsellers = products.filter(p => p.bestseller).slice(0, 4);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="w-full">
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center pt-20">
        <div 
          className="absolute inset-0 z-0 bg-secondary"
          data-strk-bg-id="hero-bg-1"
          data-strk-bg="[hero-title] [hero-subtitle]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        />
        <div className="absolute inset-0 bg-black/20 z-0" />
        
        <div className="relative z-10 text-center text-primary-foreground px-6 max-w-4xl mx-auto flex flex-col items-center">
          <h1 id="hero-title" className="text-5xl md:text-7xl lg:text-8xl mb-6 tracking-tight">Crafted to be Treasured</h1>
          <p id="hero-subtitle" className="text-lg md:text-xl font-light mb-10 max-w-xl mx-auto tracking-wide">
            Demi-fine gold jewelry for the modern woman. Everyday elegance, premium quality, accessible luxury.
          </p>
          <Link 
            to="/shop" 
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-10 py-4 tracking-widest text-sm uppercase hover:bg-black transition-colors"
          >
            Shop the Collection <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-background border-b border-border py-4">
        <div className="max-w-7xl mx-auto px-6 overflow-x-auto whitespace-nowrap scrollbar-hide">
          <div className="flex items-center justify-between md:justify-around text-xs md:text-sm tracking-widest uppercase text-muted-foreground min-w-max gap-8 font-medium">
            <span>Free Worldwide Shipping</span>
            <span className="hidden md:inline text-border">•</span>
            <span>30-Day Returns</span>
            <span className="hidden md:inline text-border">•</span>
            <span>18K Gold Plated</span>
            <span className="hidden md:inline text-border">•</span>
            <span>Hypoallergenic</span>
          </div>
        </div>
      </section>

      {/* Bestsellers Grid */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <h2 id="bestsellers-title" className="text-4xl">Bestsellers</h2>
          <Link to="/shop" className="text-sm uppercase tracking-widest border-b border-foreground pb-1 hover:text-primary hover:border-primary transition-colors">
            View All
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {bestsellers.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div className="relative aspect-[3/4] bg-secondary mb-6 overflow-hidden">
                <Link to={`/product/${product.id}`} className="block w-full h-full">
                  <img 
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={product.name}
                    className="w-full h-full object-cover object-center absolute inset-0 z-10 transition-opacity duration-500 group-hover:opacity-0"
                    data-strk-img-id={`product-${product.id}-img1`}
                    data-strk-img={`[product-${product.id}-name]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="600"
                  />
                  <img 
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} lifestyle`}
                    className="w-full h-full object-cover object-center absolute inset-0 z-0 scale-105 transition-transform duration-700 group-hover:scale-100"
                    data-strk-img-id={`product-${product.id}-img2`}
                    data-strk-img={`[product-${product.id}-name] lifestyle worn`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="600"
                  />
                </Link>
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-20">
                  <button 
                    onClick={(e) => {
                      e.preventDefault();
                      addItem(product, 1, 'Gold');
                    }}
                    className="w-full bg-background/95 backdrop-blur py-3 text-sm uppercase tracking-widest hover:bg-black hover:text-white transition-colors"
                  >
                    Quick Add
                  </button>
                </div>
              </div>
              <div className="flex flex-col items-center text-center">
                <Link to={`/product/${product.id}`}>
                  <h3 id={`product-${product.id}-name`} className="font-serif text-xl uppercase tracking-wider mb-2">{product.name}</h3>
                </Link>
                <p className="text-muted-foreground">${product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* UGC Reel Section */}
      <section className="py-12 bg-secondary/30 overflow-hidden">
        <h2 id="ugc-title" className="text-3xl text-center mb-10">Styled by You</h2>
        <div className="flex gap-4 px-6 md:px-12 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="min-w-[280px] md:min-w-[320px] aspect-[9/16] relative snap-center rounded-xl overflow-hidden group">
              <img 
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Customer styling"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                data-strk-img-id={`ugc-img-${i}`}
                data-strk-img={`[ugc-title] everyday styling`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="400"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6 w-full">
                <p className="text-white font-serif text-lg leading-snug">"The perfect everyday staple. I never take these off."</p>
                <p className="text-white/70 text-sm mt-3 uppercase tracking-widest">Shop the look</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { id: 'earrings', title: 'Earrings', aspect: 'aspect-[3/4]' },
            { id: 'necklaces', title: 'Necklaces', aspect: 'aspect-[4/5] md:translate-y-12' },
            { id: 'huggies', title: 'Huggies', aspect: 'aspect-[3/4]' }
          ].map((cat) => (
            <Link to={`/shop?category=${cat.id}`} key={cat.id} className={cn("group block relative overflow-hidden bg-secondary", cat.aspect)}>
              <img 
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                data-strk-img-id={`cat-${cat.id}-img`}
                data-strk-img={`[cat-${cat.id}-title] jewelry`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="600"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="overflow-hidden">
                  <h3 
                    id={`cat-${cat.id}-title`}
                    className="text-white font-serif text-3xl uppercase tracking-widest translate-y-full group-hover:translate-y-0 transition-transform duration-500"
                  >
                    {cat.title}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="aspect-[4/5] bg-secondary relative overflow-hidden order-2 lg:order-1">
            <img 
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora Studio"
              className="w-full h-full object-cover"
              data-strk-img-id="brand-story-img"
              data-strk-img="[story-title] studio artisan"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
            />
          </div>
          <div className="order-1 lg:order-2 flex flex-col justify-center">
            <h2 id="story-title" className="text-4xl md:text-5xl mb-8 leading-tight">Elevating the Everyday</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6 font-light">
              Velmora was born from a simple belief: fine jewelry shouldn't be reserved for special occasions. We create demi-fine pieces crafted in thick 18k gold vermeil, designed to move with you from morning coffee to midnight cocktails.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-10 font-light">
              Quiet luxury that speaks volumes. Accessible elegance without compromise.
            </p>
            <Link to="/about" className="inline-flex w-fit text-sm uppercase tracking-widest border-b border-foreground pb-1 hover:text-primary hover:border-primary transition-colors">
              Discover Our Story
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-primary text-primary-foreground px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center gap-1 mb-8 text-[#FFD700]">
            {[1, 2, 3, 4, 5].map(i => <Star key={i} fill="currentColor" size={20} />)}
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-light italic leading-snug mb-12">
            "I've been wearing the Golden Sphere Huggies every single day for a month and they still look brand new. The quality is unmatched for the price point."
          </h2>
          <p className="tracking-widest uppercase text-sm font-medium">— Sarah M.</p>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-32 px-6 text-center max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl mb-4">Join the Inner Circle</h2>
        <p className="text-muted-foreground mb-10">Sign up for 10% off your first order, exclusive early access to drops, and styling inspiration.</p>
        <form className="flex flex-col sm:flex-row gap-0 w-full max-w-xl mx-auto border-b border-foreground pb-2 group focus-within:border-primary transition-colors">
          <input 
            type="email" 
            placeholder="Your email address" 
            className="flex-1 bg-transparent border-none outline-none px-2 py-3 focus:ring-0 placeholder:text-muted-foreground/60"
            required
          />
          <button type="submit" className="px-6 py-3 uppercase tracking-widest text-sm font-medium hover:text-primary transition-colors">
            Subscribe
          </button>
        </form>
      </section>
    </div>
  );
}
