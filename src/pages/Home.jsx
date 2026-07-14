import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '../data/products';
import { Star, Truck, ShieldCheck, Gem, Sparkles } from 'lucide-react';
import { Button } from '../components/ui/button';
import { useCart } from '../lib/cart-context';
import { toast } from 'sonner';

export function Home() {
  const containerRef = useRef(null);
  const { addItem } = useCart();

  useEffect(() => {
    if (ImageHelper && ImageHelper.loadImages && strkImgConfig && containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  const handleAddToCart = (product) => {
    addItem(product);
    toast.success(`${product.title} added to cart`);
  };

  return (
    <div ref={containerRef} className="bg-background">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <div 
            className="w-full h-full bg-cover bg-center"
            data-strk-bg-id="hero-bg-2a3b4c"
            data-strk-bg="model wearing gold jewelry elegant warm lighting"
            data-strk-bg-ratio="16x9"
            data-strk-bg-width="1920"
          />
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-3xl text-white">
          <h1 className="font-serif text-5xl md:text-7xl mb-6">Crafted to be Treasured</h1>
          <p className="text-lg md:text-xl mb-10 font-light tracking-wide">
            Demi-fine gold jewelry for the modern woman. Quiet luxury that elevates your everyday.
          </p>
          <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90 h-14 px-8 text-sm uppercase tracking-widest font-semibold">
            <Link to="/shop">Shop the Collection</Link>
          </Button>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-secondary text-secondary-foreground py-4 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center sm:justify-between items-center gap-6 text-sm font-medium tracking-wide">
            <div className="flex items-center gap-2">
              <Truck className="w-4 h-4 text-accent" />
              <span>Free Worldwide Shipping</span>
            </div>
            <div className="hidden sm:block h-4 w-px bg-border"></div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-accent" />
              <span>30-Day Returns</span>
            </div>
            <div className="hidden sm:block h-4 w-px bg-border"></div>
            <div className="flex items-center gap-2">
              <Gem className="w-4 h-4 text-accent" />
              <span>18K Gold Plated</span>
            </div>
            <div className="hidden sm:block h-4 w-px bg-border"></div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-accent" />
              <span>Hypoallergenic</span>
            </div>
          </div>
        </div>
      </section>

      {/* Bestsellers */}
      <section className="py-24 container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl mb-4" id="bestsellers-title">Best Sellers</h2>
          <Link to="/collections/best-sellers" className="text-sm font-medium tracking-widest uppercase hover:text-accent transition-colors border-b border-foreground hover:border-accent pb-1">
            View All
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {products.slice(0, 5).map(product => (
            <div key={product.id} className="group flex flex-col">
              <Link to={`/product/${product.id}`} className="relative aspect-[3/4] mb-4 overflow-hidden bg-secondary block">
                <img 
                  alt={product.title}
                  data-strk-img-id={`product-${product.id}-img1`}
                  data-strk-img={`[product-${product.id}-title] on white marble`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="object-cover w-full h-full transition-opacity duration-500 group-hover:opacity-0"
                />
                <img 
                  alt={product.title}
                  data-strk-img-id={`product-${product.id}-img2`}
                  data-strk-img={`[product-${product.id}-title] lifestyle model`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="object-cover w-full h-full absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <Button 
                    className="w-full bg-background/90 text-foreground hover:bg-accent hover:text-accent-foreground backdrop-blur"
                    onClick={(e) => { e.preventDefault(); handleAddToCart(product); }}
                  >
                    Quick Add
                  </Button>
                </div>
              </Link>
              <Link to={`/product/${product.id}`}>
                <h3 className="font-serif text-lg leading-tight mb-1" id={`product-${product.id}-title`}>{product.title}</h3>
                <p className="text-muted-foreground text-sm">${product.price}</p>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* UGC / Instagram Reel Style */}
      <section className="py-20 bg-secondary overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 mb-12 text-center">
          <h2 className="font-serif text-4xl mb-4" id="ugc-title">Spotted on You</h2>
          <p className="text-muted-foreground">Tag @velmorajewelry to be featured</p>
        </div>
        
        {/* Horizontal scroll container */}
        <div className="flex overflow-x-auto pb-8 gap-4 px-4 md:px-6 snap-x snap-mandatory hide-scrollbar" style={{ scrollbarWidth: 'none' }}>
          {[1, 2, 3, 4, 5, 6].map((idx) => (
            <div key={idx} className="relative w-64 md:w-72 flex-none aspect-[9/16] snap-center overflow-hidden rounded-sm group">
              <img 
                alt={`Customer wearing jewelry ${idx}`}
                data-strk-img-id={`ugc-img-${idx}`}
                data-strk-img={`[ugc-title] candid natural lighting instagram style fine jewelry`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white font-serif italic text-lg leading-snug">"My everyday essential. So lightweight!"</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Category Tiles */}
      <section className="py-24 container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-[60vh] min-h-[500px]">
          {['Earrings', 'Necklaces', 'Huggies'].map((cat, idx) => (
            <Link key={cat} to={`/shop?category=${cat.toLowerCase()}`} className="relative group overflow-hidden bg-secondary block">
              <img 
                alt={`Shop ${cat}`}
                data-strk-img-id={`category-img-${cat}`}
                data-strk-img={`beautiful ${cat.toLowerCase()} collection gold jewelry editorial`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="bg-background/90 text-foreground px-8 py-3 font-serif text-xl tracking-wider uppercase opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  {cat}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Brand Story Split */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24">
            <div className="w-full md:w-1/2 aspect-square relative">
              <img 
                alt="Brand Story"
                data-strk-img-id="story-img-main"
                data-strk-img="jewelry artisan crafting gold editorial close up"
                data-strk-img-ratio="1x1"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="object-cover w-full h-full rounded-sm"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="font-serif text-4xl mb-6">Designed for the Everyday</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
                <p>
                  Velmora was born from a simple belief: fine jewelry shouldn't be reserved just for special occasions, nor should it be unattainably priced.
                </p>
                <p>
                  We craft our pieces using premium 18k gold plating over sterling silver and brass cores, creating demi-fine jewelry that brings quiet luxury to your daily wardrobe.
                </p>
              </div>
              <Link to="/about" className="text-sm font-medium tracking-widest uppercase hover:text-accent transition-colors border-b border-foreground hover:border-accent pb-1">
                Read Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 container mx-auto px-4 md:px-6">
        <h2 className="font-serif text-4xl text-center mb-16">Words from our Community</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {[
            {
              name: "Sarah M.",
              quote: "The Vivid Aura ear cuff has completely transformed my ear stack. It looks incredibly premium and I wear it every single day without irritation.",
            },
            {
              name: "Elena P.",
              quote: "Beautiful packaging and stunning jewelry. The Golden Sphere Huggies have the perfect weight—substantial but comfortable.",
            },
            {
              name: "Claire T.",
              quote: "I bought the Majestic Flora necklace for my sister's birthday and had to buy one for myself. The craftsmanship is flawless.",
            }
          ].map((review, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div className="flex gap-1 text-accent mb-6">
                {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-5 h-5 fill-current" />)}
              </div>
              <p className="font-serif italic text-xl mb-6 leading-relaxed">"{review.quote}"</p>
              <p className="text-sm tracking-widest uppercase font-semibold text-muted-foreground">— {review.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter block */}
      <section className="py-24 bg-accent text-accent-foreground text-center">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="font-serif text-4xl mb-4 text-white">Join the Velmora List</h2>
          <p className="text-accent-foreground/80 mb-10 text-white">
            Subscribe for 10% off your first order, plus early access to new collections and exclusive events.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-1 bg-white border-0 px-4 py-3 h-12 focus:ring-2 focus:ring-white outline-none rounded-none text-foreground placeholder-muted-foreground"
              required
            />
            <Button type="submit" className="bg-foreground text-background hover:bg-foreground/90 h-12 rounded-none uppercase tracking-widest text-xs font-semibold px-8 whitespace-nowrap">
              Subscribe
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
}