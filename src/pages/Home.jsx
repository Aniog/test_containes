import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json'; // We need to mock this or ensure it exists

// Dummy data
const bestsellers = [
  { id: '1', name: 'VIVID AURA JEWELS', price: 42, imgId: 'bs1-img', hoverImgId: 'bs1-hover' },
  { id: '2', name: 'MAJESTIC FLORA NECTAR', price: 68, imgId: 'bs2-img', hoverImgId: 'bs2-hover' },
  { id: '3', name: 'GOLDEN SPHERE HUGGIES', price: 38, imgId: 'bs3-img', hoverImgId: 'bs3-hover' },
  { id: '4', name: 'AMBER LACE EARRINGS', price: 54, imgId: 'bs4-img', hoverImgId: 'bs4-hover' },
  { id: '5', name: 'ROYAL HEIRLOOM SET', price: 95, imgId: 'bs5-img', hoverImgId: 'bs5-hover' },
];

const categories = [
  { id: 'earrings', title: 'Earrings', imgId: 'cat-earrings' },
  { id: 'necklaces', title: 'Necklaces', imgId: 'cat-necklaces' },
  { id: 'huggies', title: 'Huggies', imgId: 'cat-huggies' },
];

const testimonials = [
  { id: 1, text: "The quality is absolutely stunning. I wear my Golden Sphere Huggies every single day.", author: "Sarah M." },
  { id: 2, text: "Beautiful packaging and even more beautiful jewelry. Feels so much more expensive than it is.", author: "Jessica T." },
  { id: 3, text: "I've received so many compliments on the Vivid Aura ear cuff. A new favorite brand!", author: "Amanda L." },
];

const Home = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // We use actual loadImages to trigger generation
    const frameId = window.requestAnimationFrame(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      }
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="relative h-[90vh] md:h-[85vh] w-full flex items-center justify-center -mt-24 pt-24 overflow-hidden">
        {/* Background Image - Hardcoded unsplash for now, would use data-strk-bg later */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          data-strk-bg-id="hero-bg"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="2000"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80&w=2000&h=1000)' }}
        >
          <div className="absolute inset-0 bg-black/20 mix-blend-multiply" /> {/* Subtle darkening for text readability */}
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-3xl flex flex-col items-center">
          <h2 className="text-sm md:text-base tracking-[0.3em] uppercase mb-4 font-medium opacity-90">Demi-Fine Elements</h2>
          <h1 id="hero-title" className="font-serif text-5xl md:text-7xl lg:text-8xl mb-6 font-medium leading-tight">
            Crafted to be <br/><i className="font-light">Treasured</i>
          </h1>
          <p id="hero-subtitle" className="text-lg md:text-xl font-light mb-10 max-w-lg opacity-90">
            Elevate your everyday with accessible luxury. 18k gold vermeil pieces designed for modern elegance.
          </p>
          <Link 
            to="/shop" 
            className="bg-white text-foreground px-10 py-4 uppercase tracking-[0.2em] text-sm font-medium hover:bg-white/90 transition-colors backdrop-blur-sm"
          >
            Shop the Collection
          </Link>
        </div>
      </section>

      {/* Bestsellers Section */}
      <section className="py-20 md:py-32 px-4 md:px-8 max-w-[1600px] mx-auto">
        <div className="flex justify-between items-end mb-12">
          <h2 className="font-serif text-4xl md:text-5xl">Curated Favorites</h2>
          <Link to="/shop" className="hidden md:flex items-center gap-2 uppercase tracking-widest text-sm font-medium hover:text-primary transition-colors border-b border-transparent hover:border-primary pb-1">
            View All <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-8">
          {bestsellers.map((product) => (
            <div key={product.id} className="group cursor-pointer flex flex-col">
              <div className="relative aspect-[3/4] overflow-hidden bg-muted mb-4">
                <img 
                  data-strk-img-id={product.imgId}
                  data-strk-img={`[product-title-${product.id}]`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" 
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out group-hover:opacity-0"
                />
                <img 
                  data-strk-img-id={product.hoverImgId}
                  data-strk-img={`[product-title-${product.id}] worn`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" 
                  alt={`${product.name} worn`}
                  className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100"
                />
                
                {/* Quick Add Button underneath the image on hover */}
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <button className="w-full bg-background/95 backdrop-blur text-foreground py-3 text-sm tracking-widest uppercase font-medium hover:bg-primary hover:text-primary-foreground shadow-sm transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
              <h3 id={`product-title-${product.id}`} className="font-serif font-medium tracking-wider text-sm md:text-base leading-snug">{product.name}</h3>
              <p className="text-muted-foreground mt-1">${product.price}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center md:hidden">
            <Link to="/shop" className="inline-flex items-center gap-2 uppercase tracking-widest text-sm font-medium hover:text-primary transition-colors border-b border-foreground pb-1">
              View All <ArrowRight size={16} />
            </Link>
        </div>
      </section>

      {/* UGC / Editorial Reel Row */}
      <section className="py-16 bg-muted/30 overflow-hidden">
        <h2 className="text-center font-serif text-3xl md:text-4xl mb-12">Spotted In Velmora</h2>
        
        {/* Horizontal scroll container */}
        <div className="flex overflow-x-auto gap-4 px-4 md:px-8 pb-8 snap-x snap-mandatory hide-scrollbar" style={{ scrollbarWidth: 'none' }}>
           {/* Mocking 6 reel-style cards */}
           {[1, 2, 3, 4, 5, 6].map((i) => (
             <div key={i} className="relative flex-none w-[280px] h-[500px] snap-center rounded-sm overflow-hidden group">
                <img 
                  data-strk-img-id={`reel-img-${i}`}
                  data-strk-img="jewelry modeled editorial"
                  data-strk-img-ratio="9x16"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" 
                  alt="Editorial styling" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent flex flex-col justify-end p-6 text-white opacity-90">
                  <p className="font-serif text-xl italic leading-snug">"The perfect everyday stack."</p>
                  <p className="text-xs tracking-widest uppercase mt-4 opacity-80">Shop the look</p>
                </div>
             </div>
           ))}
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 md:py-32 px-4 md:px-8 max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
          {categories.map((cat) => (
            <Link key={cat.id} to={`/shop?category=${cat.id}`} className="group relative aspect-square overflow-hidden bg-muted flex items-center justify-center">
               <img 
                 data-strk-img-id={cat.imgId}
                 data-strk-img={`[cat-title-${cat.id}]`}
                 data-strk-img-ratio="1x1"
                 data-strk-img-width="800"
                 src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" 
                 alt={cat.title} 
                 className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
               />
               <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
               <h3 id={`cat-title-${cat.id}`} className="relative z-10 font-serif text-3xl md:text-4xl text-white tracking-wider">{cat.title}</h3>
            </Link>
          ))}
        </div>
      </section>

      {/* Brand Story Split */}
      <section className="py-20 bg-foreground text-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24">
            <div className="w-full md:w-1/2 aspect-[4/5] md:aspect-auto md:h-[600px] relative overflow-hidden">
               <img 
                 data-strk-img-id="story-img"
                 data-strk-img="[story-title]"
                 data-strk-img-ratio="4x5"
                 data-strk-img-width="800"
                 src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" 
                 alt="Jewelry making process" 
                 className="w-full h-full object-cover"
               />
            </div>
            <div className="w-full md:w-1/2 max-w-lg">
               <h2 id="story-title" className="font-serif text-4xl md:text-5xl mb-8 leading-tight">Quiet Luxury, <br/>Loud Impact.</h2>
               <div className="w-12 h-[1px] bg-primary mb-8" />
               <p className="text-muted/80 text-lg mb-8 leading-relaxed font-light">
                 Born from a desire to bridge the gap between fast fashion and fine jewelry, 
                 Velmora creates timeless pieces using a thick layer of 18k solid gold over sterling silver.
               </p>
               <p className="text-muted/80 text-lg mb-12 leading-relaxed font-light">
                 Every piece is designed to be lived in, loved, and layered. Hypoallergenic, water-resistant, 
                 and sustainably crafted for the modern individual.
               </p>
               <Link 
                 to="/about"
                 className="inline-block border border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 uppercase tracking-widest text-sm font-medium transition-colors"
               >
                 Discover Our Story
               </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-4 md:px-8 max-w-6xl mx-auto">
        <h2 className="text-center text-sm tracking-[0.2em] uppercase font-medium mb-16 text-muted-foreground">Words from our community</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {testimonials.map((test) => (
            <div key={test.id} className="flex flex-col items-center">
              <div className="flex gap-1 mb-6 text-primary">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <p className="font-serif text-xl italic leading-relaxed mb-6">"{test.text}"</p>
              <p className="text-sm tracking-widest uppercase font-medium">— {test.author}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-32 px-4 md:px-8 bg-muted/50 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl mb-4">Join the Inner Circle</h2>
          <p className="text-muted-foreground mb-10 text-lg">Subscribe to receive 10% off your first order, plus early access to new collections.</p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Email Address" 
              className="flex-grow px-6 py-4 bg-background border border-border focus:outline-none focus:border-primary font-light"
              required
            />
            <button 
              type="submit"
              className="bg-primary text-primary-foreground px-8 py-4 uppercase tracking-widest text-sm font-medium hover:bg-primary/90 transition-colors"
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