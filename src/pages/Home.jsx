import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { Button } from "../components/ui/button";
import { useCartStore } from "../store/cartStore";

const bestsellers = [
  { id: "1", name: "Vivid Aura Jewels", price: 42, type: "earrings" },
  { id: "2", name: "Majestic Flora Nectar", price: 68, type: "necklace" },
  { id: "3", name: "Golden Sphere Huggies", price: 38, type: "huggies" },
  { id: "4", name: "Amber Lace Earrings", price: 54, type: "earrings" },
  { id: "5", name: "Royal Heirloom Set", price: 95, type: "set" },
];

const categories = [
  { id: "earrings", title: "Earrings" },
  { id: "necklaces", title: "Necklaces" },
  { id: "huggies", title: "Huggies" },
];

const testimonials = [
  { id: 1, quote: "The quality is simply unmatched. It looks and feels like a piece ten times its price.", name: "Sarah M.", stars: 5 },
  { id: 2, quote: "I wear my pieces every single day. They haven't tarnished and are so comfortable.", name: "Emily L.", stars: 5 },
  { id: 3, quote: "Beautiful packaging and stunning jewelry. The perfect gift to myself.", name: "Jessica T.", stars: 5 },
];

const ugcReels = [
  { id: 1, text: "Everyday elegance" },
  { id: 2, text: "Golden hour glow" },
  { id: 3, text: "Layered to perfection" },
  { id: 4, text: "Statement pieces" },
  { id: 5, text: "Effortless style" },
];

export default function Home() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center"
          data-strk-bg-id="hero-bg-main"
          data-strk-bg="[hero-title] close-up gold jewelry on model warm lighting elegant editorial"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        />
        <div className="absolute inset-0 z-10 bg-black/20" />
        <div className="relative z-20 text-center text-white px-4">
          <h1 id="hero-title" className="text-5xl md:text-7xl mb-6 font-serif">Crafted to be Treasured</h1>
          <p className="text-lg md:text-xl font-sans font-light mb-8 max-w-2xl mx-auto">
            Fine demi-jewelry that elevates your everyday. Discover pieces designed with enduring elegance and uncompromising quality.
          </p>
          <Link to="/collections">
            <Button className="bg-white text-black hover:bg-white/90 rounded-none h-14 px-8 uppercase tracking-[0.2em] font-medium transition-all">
              Shop the Collection
            </Button>
          </Link>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-primary text-primary-foreground py-3 border-y border-border/20">
        <div className="container mx-auto px-4 flex flex-wrap justify-center md:justify-between items-center text-xs tracking-widest uppercase gap-4 text-center">
           <span>Free Worldwide Shipping</span>
           <span className="hidden md:inline">•</span>
           <span>30-Day Returns</span>
           <span className="hidden md:inline">•</span>
           <span>18K Gold Plated</span>
           <span className="hidden md:inline">•</span>
           <span>Hypoallergenic</span>
        </div>
      </section>

      {/* Bestsellers Section */}
      <section className="py-20 md:py-32 container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <h2 id="bestsellers-title" className="text-3xl md:text-4xl font-serif mb-3">Our Bestsellers</h2>
            <p className="text-muted-foreground">Loved by many. Treasured forever.</p>
          </div>
          <Link to="/collections" className="text-sm font-medium tracking-widest uppercase hover:text-primary transition-colors pb-1 border-b border-foreground hover:border-primary">
            View All
          </Link>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.map((item) => (
            <Link to={`/product/${item.id}`} key={item.id} className="group block">
              <div className="relative aspect-[4/5] bg-secondary/30 mb-4 overflow-hidden">
                <img 
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  data-strk-img={`[product-${item.id}-name] elegant gold jewelry dark background`}
                  data-strk-img-id={`bestseller-img-${item.id}`}
                  data-strk-img-ratio="4x5"
                  data-strk-img-width="400"
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Secondary Image on Hover */}
                <div className="absolute inset-0 bg-secondary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 hidden md:block">
                   <img 
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    data-strk-img={`[product-${item.id}-name] worn on model editorial lighting`}
                    data-strk-img-id={`bestseller-hover-${item.id}`}
                    data-strk-img-ratio="4x5"
                    data-strk-img-width="400"
                    alt={`${item.name} on model`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute bottom-4 left-4 right-4 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hidden md:block z-20">
                  <Button className="w-full bg-background/90 text-foreground hover:bg-background rounded-none text-xs uppercase tracking-widest h-10 backdrop-blur-sm"
                    onClick={(e) => { 
                      e.preventDefault(); 
                      useCartStore.getState().addItem({ ...item, variant: "gold" }); 
                    }}
                  >
                    Quick Add
                  </Button>
                </div>
              </div>
              <h3 id={`product-${item.id}-name`} className="font-serif uppercase tracking-widest text-sm mb-1">{item.name}</h3>
              <p className="text-muted-foreground text-sm">${item.price}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* UGC Reels Row */}
      <section className="py-12 bg-secondary/20 overflow-hidden">
        <div className="container mx-auto px-4 mb-8">
          <h2 id="ugc-title" className="text-center font-serif text-2xl mb-2">Spotted In Velmora</h2>
          <p className="text-center text-sm text-muted-foreground">@velmorajewelry</p>
        </div>
        
        {/* Horizontal scrolling wrapper */}
        <div className="flex overflow-x-auto pb-8 pt-4 px-4 gap-4 snap-x snap-mandatory hide-scrollbar" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
          {ugcReels.map((reel) => (
            <div key={reel.id} className="relative flex-none w-[280px] aspect-[9/16] snap-center shrink-0 rounded overflow-hidden">
              <img 
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                data-strk-img={`[ugc-text-${reel.id}] woman wearing gold jewelry aesthetic casual`}
                data-strk-img-id={`ugc-img-${reel.id}`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="400"
                alt={reel.text}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6">
                <p id={`ugc-text-${reel.id}`} className="text-white font-serif text-lg italic ">{reel.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Shop By Category */}
      <section className="py-20 md:py-32 container mx-auto px-4">
        <h2 id="categories-title" className="text-3xl md:text-4xl font-serif mb-12 text-center">Shop By Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <Link to={`/collections?category=${cat.id}`} key={cat.id} className="group relative aspect-[3/4] overflow-hidden bg-secondary/30">
              <img 
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                data-strk-img={`[cat-title-${cat.id}] aesthetic clean flatlay gold`}
                data-strk-img-id={`cat-img-${cat.id}`}
                data-strk-img-ratio="2x3" // Similar to 3x4
                data-strk-img-width="600"
                alt={cat.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-500 flex flex-col justify-end p-8">
                 <h3 id={`cat-title-${cat.id}`} className="text-white font-serif text-3xl mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{cat.title}</h3>
                 <span className="text-white text-sm uppercase tracking-widest font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    Explore <span aria-hidden="true">&rarr;</span>
                 </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Brand Story Split Section */}
      <section className="py-20 md:py-32 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24">
            <div className="w-full md:w-1/2 aspect-square relative">
              <img 
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                data-strk-img="[story-title] [story-desc] elegant artisan gold studio warm light"
                data-strk-img-id="brand-story-img"
                data-strk-img-ratio="1x1"
                data-strk-img-width="800"
                alt="Brand Story"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full md:w-1/2 text-center md:text-left">
              <span className="text-sm font-medium tracking-widest text-primary uppercase mb-4 block">The Velmora Ethos</span>
              <h2 id="story-title" className="text-4xl md:text-5xl font-serif mb-6 leading-tight">Elevating The Everyday</h2>
              <p id="story-desc" className="text-muted-foreground mb-8 text-lg font-light leading-relaxed max-w-lg mx-auto md:mx-0">
                We believe that fine jewelry shouldn't be reserved for special occasions. It should be lived in, loved, and layered daily. Our pieces are meticulously crafted using premium materials to ensure they stand the test of time, becoming a part of your unique story.
              </p>
              <Link to="/about" className="inline-block border-b border-foreground pb-1 text-sm uppercase tracking-widest font-medium hover:text-primary hover:border-primary transition-colors">
                Read Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-32 container mx-auto px-4 text-center">
        <h2 id="testimonials-title" className="text-3xl md:text-4xl font-serif mb-16">Words from our community</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {testimonials.map((t) => (
            <div key={t.id} className="flex flex-col items-center">
              <div className="flex gap-1 mb-6 text-primary">
                 {[...Array(t.stars)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                    </svg>
                 ))}
              </div>
              <p className="font-serif text-lg md:text-xl italic mb-6">"{t.quote}"</p>
              <span className="text-sm font-medium tracking-widest uppercase">— {t.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 md:py-32 bg-background border-t border-border">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <h2 id="newsletter-title" className="text-3xl md:text-4xl font-serif mb-4">Join The Insider List</h2>
          <p className="text-muted-foreground mb-8 text-lg font-light">
            Subscribe to receive 10% off your first order, plus exclusive access to new arrivals and secret sales.
          </p>
          <form className="flex flex-col sm:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="flex-1 bg-transparent border-b border-foreground/30 px-4 py-3 placeholder:text-muted-foreground/60 focus:outline-none focus:border-foreground transition-colors"
              required
            />
            <Button type="submit" className="bg-foreground text-background hover:bg-foreground/90 rounded-none px-8 py-3 uppercase tracking-widest text-sm sm:w-auto h-auto">
              Subscribe
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
}