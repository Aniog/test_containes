import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { seedProducts } from '@/data/products';
import ProductCard from '@/components/products/ProductCard';

// Dummy config for local env, realistically it will use correct ones from project root
const localStrkImgConfig = {}; 

const Home = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    try {
      const frameId = window.requestAnimationFrame(() => {
        if (containerRef.current) {
          ImageHelper.loadImages(strkImgConfig, containerRef.current);
        }
      });
      return () => window.cancelAnimationFrame(frameId);
    } catch(e) {
      console.log('Image helper not loaded properly yet', e);
    }
  }, []);

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-secondary"
          data-strk-bg="[hero-headline] warm lit close-up thick gold jewelry model editorial portrait"
          data-strk-bg-id="home-hero-bg"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        >
          <div className="absolute inset-0 bg-black/20" /> {/* Dark overlay for text contrast */}
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl text-white mt-16">
          <h1 id="hero-headline" className="text-5xl md:text-7xl lg:text-8xl font-serif mb-6 drop-shadow-sm leading-tight">
            Crafted to be <br/>Treasured
          </h1>
          <p className="text-lg md:text-xl font-light mb-10 max-w-2xl mx-auto drop-shadow-sm opacity-90">
            Demi-fine gold jewelry for the modern woman. Elevate your everyday with pieces designed for effortless elegance.
          </p>
          <Link 
            to="/shop" 
            className="inline-flex items-center justify-center px-10 py-4 bg-background text-foreground hover:bg-foreground hover:text-background transition-colors uppercase tracking-widest text-sm font-medium"
          >
            Shop the Collection
          </Link>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-primary text-primary-foreground py-4 border-y border-primary-foreground/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-6 md:gap-12 text-xs uppercase tracking-widest font-medium text-center">
            <span>Free Worldwide Shipping</span>
            <span className="hidden md:inline">·</span>
            <span>30-Day Returns</span>
            <span className="hidden md:inline">·</span>
            <span>18K Gold Plated</span>
            <span className="hidden md:inline">·</span>
            <span>Hypoallergenic</span>
          </div>
        </div>
      </section>

      {/* Bestsellers */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex justify-between items-end mb-16 border-b border-border pb-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif">Bestsellers</h2>
              <p className="mt-2 text-muted-foreground">Our most loved everyday pieces.</p>
            </div>
            <Link to="/shop" className="hidden md:flex items-center text-sm font-medium uppercase tracking-widest hover:text-accent transition-colors">
              View All <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-12">
            {seedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="mt-12 text-center md:hidden">
             <Link to="/shop" className="inline-flex items-center text-sm font-medium uppercase tracking-widest hover:text-accent transition-colors border-b border-primary pb-1">
              View All Bestsellers <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* UGC Reel Section */}
      <section className="py-20 bg-secondary overflow-hidden">
        <div className="container mx-auto px-4 mb-10 text-center">
          <h2 className="text-3xl font-serif mb-3">Styled By You</h2>
          <p className="text-muted-foreground text-sm uppercase tracking-widest">#VelmoraJewelry</p>
        </div>
        
        {/* Horizontal scroll container */}
        <div className="flex px-4 md:px-10 overflow-x-auto pb-8 hide-scrollbar space-x-6 snap-x snap-mandatory">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={`ugc-${i}`} className="snap-center shrink-0 w-[240px] md:w-[280px] aspect-[9/16] bg-muted relative group">
              <img 
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover"
                data-strk-img={`woman wearing fine gold jewelry outdoor editorial portrait instagram aesthetic`}
                data-strk-img-id={`ugc-image-${i}`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="400"
                alt="Customer wearing jewelry"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-6 left-4 right-4">
                  <p className="text-white font-serif italic text-lg leading-snug">"The perfect everyday stack."</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Shop By Category */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-serif text-center mb-16">The Collections</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
            {[
              { id: 'earrings', name: 'Earrings', prompt: 'gold hoop and drop earrings flatlay white background' },
              { id: 'necklaces', name: 'Necklaces', prompt: 'layered gold pendant necklaces close up' },
              { id: 'huggies', name: 'Huggies & Cuffs', prompt: 'small chunky gold huggie earrings close up ear' }
            ].map(cat => (
              <Link 
                key={cat.id} 
                to={`/shop?category=${cat.id}`}
                className="group block relative aspect-[4/5] bg-secondary overflow-hidden"
              >
                <img 
                   src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                   data-strk-img={`[cat-${cat.id}] ${cat.prompt}`}
                   data-strk-img-id={`cat-img-${cat.id}`}
                   data-strk-img-ratio="4x5"
                   data-strk-img-width="600"
                   alt={cat.name}
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
                <div className="absolute inset-x-0 bottom-0 p-8 flex justify-center">
                  <div className="bg-background/95 backdrop-blur px-8 py-4 uppercase tracking-widest text-sm font-medium w-max shadow-sm transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300" id={`cat-${cat.id}`}>
                    {cat.name}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-20 md:py-32 bg-[#F5F2EE]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">
            <div className="w-full md:w-1/2 aspect-[3/4] bg-muted relative">
               <img 
                 src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                 className="w-full h-full object-cover"
                 data-strk-img="jewelry designer working gold tools editorial soft light"
                 data-strk-img-id="brand-story-image"
                 data-strk-img-ratio="3x4"
                 data-strk-img-width="800"
                 alt="Velmora Studio"
               />
            </div>
            <div className="w-full md:w-1/2 max-w-lg">
              <h2 className="text-3xl md:text-5xl font-serif mb-6 leading-tight">Elevating The Everyday</h2>
              <p className="text-foreground/80 mb-6 font-light leading-relaxed">
                At Velmora, we believe that fine jewelry shouldn't be reserved for special occasions. It should be lived in, loved, and layered every day.
              </p>
              <p className="text-foreground/80 mb-10 font-light leading-relaxed">
                Each piece is thoughtfully designed with premium 18k gold plating over a resilient brass core, ensuring accessible luxury that stands the test of time without compromising on quality or aesthetics.
              </p>
              <Link to="/about" className="inline-block uppercase tracking-widest text-sm font-medium border-b border-primary pb-1 hover:text-accent border-accent transition-colors">
                Discover Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <div className="flex justify-center gap-1 mb-4 text-accent">
               {[1,2,3,4,5].map(i => <Star key={i} className="fill-current w-5 h-5" />)}
            </div>
            <h2 className="text-3xl font-serif">Loved by Thousands</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {[
              { text: "Absolutely stunning quality. I wear the Royal Heirloom set every single day and it hasn't tarnished a bit.", name: "Sarah M." },
              { text: "The perfect chunky gold huggies. They feel substantial but are light enough to wear all day comfortably.", name: "Elena T." },
              { text: "Beautiful packaging and the jewelry looks incredibly high-end. Such a great price point for this level of craftsmanship.", name: "Jessica R." }
            ].map((review, idx) => (
              <div key={idx} className="text-center">
                 <p className="font-serif text-lg italic mb-6 leading-relaxed">"{review.text}"</p>
                 <p className="uppercase tracking-widest text-xs font-semibold text-muted-foreground">— {review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 bg-accent/10 border-t border-accent/20">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h2 className="text-3xl font-serif mb-4">Join The Club</h2>
          <p className="text-foreground/80 mb-8 font-light">
            Subscribe to receive 10% off your first order, plus early access to new collections and exclusive events.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 justify-center" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Your email address" 
              className="px-6 py-4 bg-background border border-border focus:outline-none focus:border-primary flex-1 max-w-sm w-full"
              required
            />
            <button 
              type="submit"
              className="px-8 py-4 bg-primary text-primary-foreground font-medium uppercase tracking-widest text-sm hover:bg-primary/90 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

    </div>
  );
};

export default Home;