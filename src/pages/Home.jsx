import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useCartStore } from '@/store/cartStore';
import { ArrowRight } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { BESTSELLERS } from '@/lib/data';

export default function Home() {
  const containerRef = useRef(null);
  const addToCart = useCartStore((state) => state.addToCart);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden pt-20">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          data-strk-bg-id="hero-bg-velmora"
          data-strk-bg="[hero-subhead] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-foreground/30 z-10" />
        
        <div className="container relative z-20 mx-auto px-4 text-center text-background mt-16 md:mt-0">
          <h1 id="hero-title" className="font-serif text-5xl md:text-7xl lg:text-8xl mb-6 font-medium leading-tight">
            Crafted to be Treasured
          </h1>
          <p id="hero-subhead" className="font-sans text-lg md:text-xl font-light mb-10 max-w-xl mx-auto opacity-90">
            Demi-fine gold jewelry for everyday elegance and effortless gifting.
          </p>
          <Link to="/shop">
            <Button size="lg" className="bg-background text-foreground hover:bg-background/90 uppercase tracking-[0.2em] font-medium px-10">
              Shop the Collection
            </Button>
          </Link>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="bg-secondary text-secondary-foreground py-4 border-b border-border">
        <div className="container mx-auto px-4 overflow-hidden">
          <div className="flex justify-between items-center whitespace-nowrap md:justify-center md:gap-12 animate-scroll md:animate-none text-xs md:text-sm tracking-wider uppercase font-medium">
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
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 id="bestsellers-heading" className="font-serif text-3xl md:text-4xl text-foreground mb-3">Bestsellers</h2>
              <p className="text-muted-foreground text-sm max-w-md">Our most loved pieces, handpicked for you.</p>
            </div>
            <Link to="/shop" className="hidden md:flex items-center gap-2 text-sm uppercase tracking-widest font-medium hover:text-primary transition-colors">
              View All <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8">
            {BESTSELLERS.slice(0, 5).map((product) => (
              <div key={product.id} className="group flex flex-col">
                <div className="relative aspect-[4/5] bg-muted mb-4 overflow-hidden block text-center">
                  <Link to={`/product/${product.id}`} className="block w-full h-full text-foreground hover:text-primary">
                    <img
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      data-strk-img-id={`bestseller-${product.id}`}
                      data-strk-img={`[prod-desc-${product.id}] [prod-name-${product.id}] [bestsellers-heading]`}
                      data-strk-img-ratio="4x5"
                      data-strk-img-width="400"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    />
                  </Link>
                  <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 pointer-events-none">
                    <Button 
                      className="w-full uppercase tracking-widest text-xs h-10 pointer-events-auto" 
                      onClick={(e) => {
                        e.stopPropagation();
                        e.preventDefault();
                        addToCart({...product, cartImgId: `bestseller-${product.id}`}, 'Gold');
                      }}
                    >
                      Quick Add
                    </Button>
                  </div>
                </div>
                <div className="flex flex-col flex-1 text-center md:text-left">
                  <Link to={`/product/${product.id}`} className="hover:text-primary transition-colors">
                    <h3 id={`prod-name-${product.id}`} className="font-sans font-medium text-foreground uppercase tracking-wider text-sm mb-1 line-clamp-1">{product.name}</h3>
                  </Link>
                  <p id={`prod-desc-${product.id}`} className="text-muted-foreground text-xs mb-2 line-clamp-1 flex-1">{product.description}</p>
                  <p className="font-sans text-foreground font-medium">${product.price}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center md:hidden">
            <Button variant="outline" className="w-full uppercase tracking-widest text-xs" asChild>
              <Link to="/shop">View All Bestsellers</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* UGC / Editorial Row */}
      <section className="py-16 md:py-24 bg-muted/30 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 mb-12 text-center">
          <h2 id="journal-heading" className="font-serif text-3xl md:text-4xl text-foreground">Worn by You</h2>
        </div>
        
        <div className="flex overflow-x-auto snap-x snap-mandatory pb-8 px-4 md:px-6 gap-4 md:gap-6 hide-scrollbar">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="min-w-[280px] md:min-w-[320px] aspect-[9/16] relative snap-center group shrink-0 overflow-hidden bg-muted">
              <img
                alt={`Customer styling ${i}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                data-strk-img-id={`ugc-image-${i}`}
                data-strk-img={`[ugc-caption-${i}] window sunlight gold jewelry model [journal-heading]`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-80" />
              <p id={`ugc-caption-${i}`} className="absolute bottom-6 left-6 right-6 text-background font-serif text-lg leading-snug">
                {i % 2 === 0 ? "Perfect everyday stacking." : "The essential gold hoops."}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
           <h2 id="categories-heading" className="font-serif text-3xl md:text-4xl text-foreground mb-12 text-center">Shop by Category</h2>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {[
                { name: "Earrings", id: "earrings" },
                { name: "Necklaces", id: "necklaces" },
                { name: "Huggies", id: "huggies" }
              ].map(cat => (
                <Link to={`/category/${cat.id}`} key={cat.id} className="relative aspect-[3/4] group overflow-hidden bg-muted block">
                  <img
                    alt={cat.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    data-strk-img-id={`cat-${cat.id}`}
                    data-strk-img={`[cat-name-${cat.id}] [categories-heading]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                  <div className="absolute inset-0 bg-foreground/10 group-hover:bg-foreground/20 transition-colors duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span id={`cat-name-${cat.id}`} className="bg-background/90 text-foreground py-3 px-8 font-serif text-xl md:text-2xl uppercase tracking-wider backdrop-blur-sm shadow-sm transition-transform duration-300 group-hover:-translate-y-2">
                      {cat.name}
                    </span>
                  </div>
                </Link>
              ))}
           </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-0 bg-secondary">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 aspect-square md:aspect-auto min-h-[500px] relative bg-muted">
             <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                data-strk-bg-id="brand-story-img"
                data-strk-bg="[brand-story-title] artisan jewelry making"
                data-strk-bg-ratio="1x1"
                data-strk-bg-width="800"
              />
          </div>
          <div className="md:w-1/2 flex items-center justify-center p-12 md:p-24 bg-secondary">
            <div className="max-w-md">
              <h2 id="brand-story-title" className="font-serif text-3xl md:text-4xl text-foreground mb-6">Designed to Live With You</h2>
              <p className="font-sans text-muted-foreground leading-loose mb-8">
                Velmora was born from a desire for jewelry that bridges the gap between fast fashion and fine jewelry. We use premium 18K gold vermeil and ethically sourced stones to create demi-fine pieces that feel substantial, look editorial, and won't tarnish after a few wears. This is quiet luxury you can wear every day.
              </p>
              <Button asChild variant="outline" className="uppercase tracking-widest text-xs px-8">
                <Link to="/about">Our Story</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 bg-foreground text-background text-center">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="font-serif text-3xl md:text-4xl mb-4 text-background">Join the Velmora Club</h2>
          <p className="text-secondary/80 font-sans mb-10">Subscribe to receive 10% off your first order, plus early access to new collections and editorial inspiration.</p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-1 bg-transparent border border-background/30 text-background px-4 py-3 placeholder:text-background/40 focus:outline-none focus:border-background transition-colors rounded-none"
              required
            />
            <Button type="submit" className="bg-background text-foreground hover:bg-background/90 uppercase tracking-widest text-xs px-8 py-3 rounded-none">
              Subscribe
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
}