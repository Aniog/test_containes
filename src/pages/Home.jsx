import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { STRK_PLACEHOLDER } from '@/lib/utils';

export default function Home() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const bestsellers = products.filter(p => p.bestseller).slice(0, 4);

  return (
    <div ref={containerRef} className="w-full">
      {/* Hero Section */}
      <section id="home-hero" className="relative h-screen min-h-[600px] flex items-center justify-center pt-20">
        <div 
          className="absolute inset-0 z-0 bg-neutral-900"
          data-strk-bg-id="hero-bg-velmora"
          data-strk-bg="[hero-sub] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        />
        <div className="absolute inset-0 bg-black/30 z-10" />
        
        <div className="relative z-20 container mx-auto px-4 flex flex-col items-center text-center text-white mt-12">
          <h1 id="hero-title" className="text-5xl md:text-7xl lg:text-8xl mb-6">Crafted to be Treasured</h1>
          <p id="hero-sub" className="text-lg md:text-xl font-light max-w-xl mb-10 text-white/90">
            Demi-fine jewelry designed for everyday elegance. Solid gold feeling without the solid gold price tag.
          </p>
          <Button asChild className="bg-white text-foreground hover:bg-white/90 rounded-none px-8 py-6 font-serif uppercase tracking-widest text-sm transition-all duration-300">
            <Link to="/shop">Shop the Collection</Link>
          </Button>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="bg-secondary text-secondary-foreground py-4 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-xs md:text-sm tracking-widest uppercase font-serif">
            <span className="flex items-center gap-2">Free Worldwide Shipping</span>
            <span className="hidden md:inline text-gold">•</span>
            <span className="flex items-center gap-2">30-Day Returns</span>
            <span className="hidden md:inline text-gold">•</span>
            <span className="flex items-center gap-2">18K Gold Plated</span>
            <span className="hidden md:inline text-gold">•</span>
            <span className="flex items-center gap-2">Hypoallergenic</span>
          </div>
        </div>
      </div>

      {/* Bestsellers */}
      <section className="py-24 container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-3xl md:text-5xl">Bestsellers</h2>
          <Link to="/shop" className="hidden md:flex items-center gap-2 text-sm uppercase tracking-widest font-serif hover:text-gold transition-colors pb-1 border-b border-foreground hover:border-gold">
            Shop All <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {bestsellers.map(product => (
            <Link key={product.id} to={`/product/${product.id}`} className="group block">
              <div className="aspect-square bg-muted relative mb-4 overflow-hidden">
                {product.images?.[0] && (
                  <img
                    src={STRK_PLACEHOLDER}
                    data-strk-img-id={product.images[0].id}
                    data-strk-img={product.images[0].query}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="600"
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                )}
                {product.images?.[1] && (
                  <img
                    src={STRK_PLACEHOLDER}
                    data-strk-img-id={product.images[1].id}
                    data-strk-img={product.images[1].query}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="600"
                    alt={`${product.name} alternate view`}
                    className="w-full h-full object-cover absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  />
                )}
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 id={`bs-title-${product.id}`} className="font-serif text-sm uppercase tracking-widest mb-1">{product.name}</h3>
                  <p className="text-sm font-light text-muted-foreground">${product.price}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
          <Button asChild variant="outline" className="w-full rounded-none border-foreground font-serif uppercase tracking-widest py-6">
            <Link to="/shop">Shop All</Link>
          </Button>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 pb-24 container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { id: "cat-earrings", name: "Earrings" },
            { id: "cat-necklaces", name: "Necklaces" },
            { id: "cat-huggies", name: "Huggies" }
          ].map((cat, i) => (
            <Link key={cat.id} to={`/shop?category=${cat.name.toLowerCase()}`} className="group relative aspect-[3/4] overflow-hidden block">
              <img
                src={STRK_PLACEHOLDER}
                data-strk-img-id={cat.id}
                data-strk-img={`woman wearing gold ${cat.name.toLowerCase()} neutral aesthetic`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                alt={`Shop ${cat.name}`}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="bg-white/90 backdrop-blur-sm px-8 py-4 text-foreground font-serif uppercase tracking-widest text-sm opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  {cat.name}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Brand Story */}
      <section className="bg-secondary text-secondary-foreground">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="aspect-square md:aspect-auto">
            <img
              src={STRK_PLACEHOLDER}
              data-strk-img-id="brand-story-img"
              data-strk-img="jewelry designer working in studio natural light aesthetic"
              data-strk-img-ratio="1x1"
              data-strk-img-width="1200"
              alt="Velmora Studio"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center px-8 py-16 md:p-16 lg:p-24">
            <h2 className="text-4xl md:text-5xl mb-6">Designed for the Everyday</h2>
            <p className="text-lg font-light leading-relaxed mb-10 opacity-90 text-balance">
              We believe that fine jewelry shouldn't be locked away in a safe, waiting for a special occasion. Velmora was born from a desire to create beautifully crafted, demi-fine pieces that you can live in, sleep in, and love every single day.
            </p>
            <div>
              <Link to="/about" className="inline-flex items-center gap-2 text-sm uppercase tracking-widest font-serif hover:text-gold transition-colors pb-1 border-b border-foreground hover:border-gold">
                Read Our Story <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 container mx-auto px-4 max-w-3xl text-center">
        <h2 className="text-3xl md:text-5xl mb-4">Join the Club</h2>
        <p className="text-muted-foreground mb-8">Sign up for early access to new collections and 10% off your first order.</p>
        <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
          <input 
            type="email" 
            placeholder="Email Address" 
            className="flex-1 bg-transparent border-b border-foreground/30 px-4 py-3 placeholder:text-muted-foreground/60 focus:outline-none focus:border-foreground transition-colors"
            required
          />
          <Button type="submit" className="bg-foreground text-background hover:bg-foreground/90 rounded-none px-8 font-serif uppercase tracking-widest text-xs h-12">
            Subscribe
          </Button>
        </form>
      </section>
    </div>
  );
}