import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Star, ShieldCheck, Truck, RefreshCw, Sparkles } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const bestsellers = [
  { id: 'vivid-aura', name: 'Vivid Aura Jewels', price: 42, category: 'Earrings', desc: 'Gold ear cuff with crystal accent' },
  { id: 'majestic-flora', name: 'Majestic Flora Nectar', price: 68, category: 'Necklaces', desc: 'Multicolor floral crystal necklace' },
  { id: 'golden-sphere', name: 'Golden Sphere Huggies', price: 38, category: 'Huggies', desc: 'Chunky gold dome huggie earrings' },
  { id: 'amber-lace', name: 'Amber Lace Earrings', price: 54, category: 'Earrings', desc: 'Textured gold filigree drop earrings' },
  { id: 'royal-heirloom', name: 'Royal Heirloom Set', price: 95, category: 'Sets', desc: 'Gift-boxed earring + necklace set' },
];

const categories = [
  { id: 'cat-earrings', name: 'Earrings', prompt: 'Elegant gold earrings on neutral background' },
  { id: 'cat-necklaces', name: 'Necklaces', prompt: 'Delicate gold necklace chain on model collarbone' },
  { id: 'cat-huggies', name: 'Huggies', prompt: 'Small chunky gold hoop earrings huggies' },
];

export default function Home() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="w-full">
      {/* Hero Section */}
      <section className="relative h-[90vh] md:h-screen w-full flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-black/20"
          data-strk-bg-id="hero-bg-2a4b6c"
          data-strk-bg="[hero-sub] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        >
          {/* Fallback pattern if image doesn't load immediately */}
          <div className="absolute inset-0 bg-stone-900 mix-blend-multiply opacity-40"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4 flex flex-col items-center">
          <p id="hero-sub" className="uppercase tracking-[0.3em] text-sm md:text-md mb-6 font-medium text-white/90">Velmora Fine Jewelry</p>
          <h1 id="hero-title" className="font-serif text-5xl md:text-7xl lg:text-8xl mb-8 leading-tight max-w-4xl">
            Crafted to be Treasured
          </h1>
          <Button asChild size="lg" className="bg-white text-foreground hover:bg-white/90 rounded-none px-10 py-6 text-sm uppercase tracking-widest font-medium">
            <Link to="/shop">Shop the Collection</Link>
          </Button>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4 overflow-hidden">
          <div className="flex justify-between items-center text-xs md:text-sm uppercase tracking-widest font-medium text-muted-foreground whitespace-nowrap overflow-x-auto no-scrollbar gap-8 md:gap-4">
            <div className="flex items-center gap-2 shrink-0"><Truck className="w-4 h-4" /> Free Worldwide Shipping</div>
            <div className="hidden md:block w-1 h-1 rounded-full bg-border shrink-0"></div>
            <div className="flex items-center gap-2 shrink-0"><RefreshCw className="w-4 h-4" /> 30-Day Returns</div>
            <div className="hidden md:block w-1 h-1 rounded-full bg-border shrink-0"></div>
            <div className="flex items-center gap-2 shrink-0"><Sparkles className="w-4 h-4" /> 18K Gold Plated</div>
            <div className="hidden md:block w-1 h-1 rounded-full bg-border shrink-0"></div>
            <div className="flex items-center gap-2 shrink-0"><ShieldCheck className="w-4 h-4" /> Hypoallergenic</div>
          </div>
        </div>
      </div>

      {/* Bestsellers Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 id="bestsellers-title" className="font-serif text-3xl md:text-4xl text-foreground mb-3">Trending Now</h2>
              <p id="bestsellers-sub" className="text-muted-foreground font-light">Our most loved demi-fine pieces.</p>
            </div>
            <Link to="/shop" className="hidden md:inline-block text-sm uppercase tracking-widest font-medium border-b border-foreground pb-1 hover:text-primary transition-colors">
              View All
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            {bestsellers.map((item) => (
              <Link to={`/product/${item.id}`} key={item.id} className="group flex flex-col">
                <div className="relative aspect-[4/5] mb-4 bg-muted overflow-hidden flex-shrink-0">
                  {/* Primary Image */}
                  <img
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E"
                    alt={item.name}
                    className="object-cover w-full h-full transition-opacity duration-500 group-hover:opacity-0"
                    data-strk-img-id={`prod-img-${item.id}`}
                    data-strk-img={`[prod-name-${item.id}]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="400"
                  />
                  {/* Hover Image */}
                  <img
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E"
                    alt={`${item.name} alternative view`}
                    className="absolute inset-0 object-cover w-full h-full opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    data-strk-img-id={`prod-img-hover-${item.id}`}
                    data-strk-img={`woman wearing [prod-name-${item.id}]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="400"
                  />
                  
                  {/* Quick Add overlay on desktop */}
                  <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 hidden md:block">
                    <Button variant="secondary" className="w-full bg-white/90 backdrop-blur text-foreground hover:bg-white uppercase tracking-wider text-xs">
                      Quick Add
                    </Button>
                  </div>
                </div>
                <div className="flex flex-col flex-grow">
                  <h3 id={`prod-name-${item.id}`} className="font-serif text-lg leading-tight uppercase tracking-wider mb-1 line-clamp-2">{item.name}</h3>
                  <p id={`prod-desc-${item.id}`} className="text-sm text-muted-foreground font-light mb-2 hidden">{item.desc}</p>
                  <p className="text-sm font-medium mt-auto">${item.price.toFixed(2)}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-12 text-center md:hidden">
            <Button variant="outline" asChild className="uppercase tracking-widest text-xs px-8">
              <Link to="/shop">View All</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
            {categories.map((cat) => (
              <Link to={`/shop?category=${cat.name.toLowerCase()}`} key={cat.id} className="group relative aspect-square overflow-hidden bg-muted">
                <img
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={`Shop ${cat.name}`}
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                  data-strk-img-id={`cat-img-${cat.id}`}
                  data-strk-img={`[cat-name-${cat.id}] ${cat.prompt}`}
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="600"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-500 flex items-center justify-center">
                  <h3 id={`cat-name-${cat.id}`} className="font-serif text-3xl md:text-4xl text-white tracking-wider uppercase opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500">
                    {cat.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* UGC / Editorial Row */}
      <section className="py-24 bg-card overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 mb-12 text-center">
          <h2 id="ugc-title" className="font-serif text-3xl md:text-4xl text-foreground mb-4">Worn by You</h2>
          <p id="ugc-sub" className="text-muted-foreground font-light">Tag @velmorajewelry to be featured.</p>
        </div>
        
        {/* Horizontal scroll native implementation */}
        <div className="w-full overflow-x-auto no-scrollbar pb-8 px-4 md:px-6">
          <div className="flex gap-4 md:gap-6 w-max mx-auto">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="relative w-64 md:w-72 aspect-[9/16] bg-muted shrink-0 snap-center rounded-lg overflow-hidden group">
                <img
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 9 16'/%3E"
                  alt={`User styling inspiration ${i}`}
                  className="object-cover w-full h-full"
                  data-strk-img-id={`ugc-img-${i}`}
                  data-strk-img={`[ugc-title] woman wearing elegant gold jewelry editorial portrait ${i}`}
                  data-strk-img-ratio="9x16"
                  data-strk-img-width="400"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p className="font-serif text-white/90 text-lg italic tracking-wide">"My daily uniform."</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Story Split */}
      <section className="py-0 flex flex-col md:flex-row min-h-[70vh] bg-background">
        <div className="w-full md:w-1/2 bg-muted relative min-h-[50vh] md:min-h-full">
          <div 
            className="absolute inset-0 w-full h-full bg-cover bg-center"
            data-strk-bg-id="story-bg-1"
            data-strk-bg="[story-title] woman wearing accessible luxury jewelry lifestyle"
            data-strk-bg-ratio="3x4"
            data-strk-bg-width="1000"
          ></div>
        </div>
        <div className="w-full md:w-1/2 flex items-center justify-center p-8 md:p-16 lg:p-24 bg-card">
          <div className="max-w-md">
            <h2 id="story-title" className="font-serif text-3xl md:text-5xl text-foreground mb-8 leading-tight">Accessible Luxury, <br/><span className="text-primary italic">Everyday Elegance</span></h2>
            <p id="story-desc" className="text-muted-foreground font-light leading-relaxed mb-10 text-lg">
              Velmora was born from a simple desire: to create demi-fine jewelry that feels like a treasured heirloom, yet is accessible enough for everyday wear. Our pieces are crafted with 18k gold vermeil and ethically sourced crystals, designed to be layered, loved, and lived in.
            </p>
            <Button variant="outline" asChild className="uppercase tracking-widest text-xs px-8 rounded-none border-foreground hover:bg-foreground hover:text-background">
              <Link to="/about">Our Story</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-background border-t border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground">A Word From Our Community</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {[
              { name: "Sarah M.", text: "The quality of the Majestic Flora necklace is unbelievable for the price point. It looks exactly like solid gold." },
              { name: "Elena R.", text: "I have sensitive ears but the Golden Sphere Huggies haven't caused any issues. I literally sleep in them." },
              { name: "Chloe T.", text: "Perfect packaging, fast shipping, and the jewelry itself is stunning. The Vivid Aura cuff is my new obsession." }
            ].map((review, i) => (
              <div key={i} className="flex flex-col items-center text-center px-4">
                <div className="flex gap-1 mb-6 text-primary">
                  {[1,2,3,4,5].map(star => <Star key={star} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="font-serif text-xl md:text-2xl leading-relaxed text-foreground mb-6">"{review.text}"</p>
                <span className="uppercase tracking-widest text-xs font-medium text-muted-foreground">— {review.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter block */}
      <section className="bg-primary text-primary-foreground py-24">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-2xl">
          <h2 className="font-serif text-4xl mb-4">Join the Inner Circle</h2>
          <p className="text-primary-foreground/80 font-light mb-10 text-lg">Subscribe for 10% off your first order, exclusive access to new collections, and styling tips.</p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
            <Input 
              type="email" 
              placeholder="YOUR EMAIL ADDRESS" 
              className="bg-transparent border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/50 rounded-none focus-visible:ring-primary-foreground h-12 uppercase text-xs tracking-wider font-medium"
              required
            />
            <Button type="submit" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 rounded-none h-12 px-8 uppercase tracking-widest text-xs font-medium">
              Join
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
}