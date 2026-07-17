import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { SEED_PRODUCTS } from '@/lib/data';
import ProductCard from '@/components/home/ProductCard';
import UGCReel from '@/components/home/UGCReel';
import { Mail, ArrowRight } from 'lucide-react';

const Home = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="pt-20 md:pt-0">
      {/* Hero Section */}
      <section className="relative h-[100vh] w-full flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0 scale-105 animate-pulse-slow"
          data-strk-bg-id="hero-bg-1"
          data-strk-bg="[hero-title] close-up gold jewelry model background editorial warm"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        >
          <div className="absolute inset-0 bg-black/20" />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 id="hero-title" className="text-5xl md:text-8xl font-serif text-white mb-8 tracking-tighter leading-none">
            Crafted to be <br /> <span className="italic">Treasured</span>
          </h1>
          <p className="text-white/90 text-sm md:text-lg uppercase tracking-widest mb-10 max-w-lg mx-auto leading-relaxed">
            Demi-fine jewelry for your everyday rituals. Crafted with 18k gold and intention.
          </p>
          <Link 
            to="/shop" 
            className="inline-block bg-accent hover:brightness-110 text-white px-10 py-4 uppercase tracking-widest text-[11px] transition-all duration-300 font-bold"
          >
            Shop the Collection
          </Link>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-secondary py-4 px-6 md:px-12 border-b border-stone-200">
        <div className="max-w-screen-2xl mx-auto flex flex-wrap justify-center md:justify-between items-center text-[10px] md:text-xs uppercase tracking-[0.2em] font-medium text-primary opacity-80 gap-6">
          <span>Free Worldwide Shipping</span>
          <span className="hidden md:block opacity-30">|</span>
          <span>30-Day Returns</span>
          <span className="hidden md:block opacity-30">|</span>
          <span>18K Gold Plated</span>
          <span className="hidden md:block opacity-30">|</span>
          <span>Hypoallergenic</span>
        </div>
      </section>

      {/* Bestsellers */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-screen-2xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 space-y-4 md:space-y-0 text-center md:text-left">
            <div>
              <h2 className="text-3xl md:text-5xl font-serif mb-4">Our Bestsellers</h2>
              <p className="text-[10px] uppercase tracking-widest opacity-60">The pieces you love most, perfected over time.</p>
            </div>
            <Link to="/shop" className="text-xs uppercase tracking-widest border-b border-stone-300 pb-1 hover:border-accent transition-colors font-semibold">
              View All Pieces
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-x-8 gap-y-12">
            {SEED_PRODUCTS.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 px-6 md:px-12">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { name: 'Earrings', slug: 'earrings', img: 'earrings-category' },
            { name: 'Necklaces', slug: 'necklaces', img: 'necklaces-category' },
            { name: 'Huggies', slug: 'huggies', img: 'huggies-category' },
          ].map((cat) => (
            <Link to={`/shop?category=${cat.slug}`} key={cat.slug} className="group relative aspect-[4/5] overflow-hidden bg-stone-100">
              <div 
                className="absolute inset-0 z-0 transition-transform duration-1000 group-hover:scale-110"
                data-strk-bg-id={`cat-bg-${cat.slug}`}
                data-strk-bg={`[cat-label-${cat.slug}] close-up jewelry shot editorial`}
                data-strk-bg-ratio="4x5"
                data-strk-bg-width="800"
              />
              <div className="absolute inset-x-0 bottom-0 p-8 flex flex-col items-center justify-center translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <span id={`cat-label-${cat.slug}`} className="text-white text-2xl font-serif tracking-widest uppercase mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {cat.name}
                </span>
                <div className="w-10 h-[1px] bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-100" />
              </div>
              {/* Fallback label if not hovered */}
              <div className="md:hidden absolute inset-0 flex items-center justify-center bg-black/20">
                <span className="text-white text-2xl font-serif tracking-widest uppercase">{cat.name}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* UGC Reel */}
      <UGCReel />

      {/* Brand Story */}
      <section className="py-24 px-6 md:px-12 bg-secondary flex items-center">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="aspect-[4/5] bg-white overflow-hidden relative shadow-lg">
            <img 
              data-strk-img-id="brand-story-img"
              data-strk-img="jewelry designer working on fine gold jewelry warm lighting editorial"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E"
              alt="Our Story"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-8 text-center md:text-left">
            <h2 id="story-title" className="text-4xl md:text-6xl font-serif leading-tight">A Ritual of <br /><span className="italic">Self-Love</span></h2>
            <p className="text-muted text-sm md:text-base leading-relaxed max-w-lg mx-auto md:mx-0">
              Velmora was born from a desire to create high-quality, demi-fine jewelry that feels meaningful. 
              We believe that every piece you wear should be a celebration of yourself. Our collections are 
              thoughtfully designed to be layered, lived in, and loved forever.
            </p>
            <Link to="/about" className="inline-flex items-center space-x-4 text-xs uppercase tracking-widest font-bold group">
              <span>Discover Our Story</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 md:px-12 bg-white text-center">
        <div className="max-w-screen-lg mx-auto overflow-hidden">
          <div className="flex space-x-2 justify-center mb-8">
            {[1, 2, 3, 4, 5].map((s) => (
              <span key={s} className="text-accent text-lg">★</span>
            ))}
          </div>
          <div className="space-y-12">
            {[
              { text: "The quality is unmatched for the price. I wear my Golden Sphere Huggies every single day and They still look like new.", name: "Sophia L." },
              { text: "Beautifully packaged and even more stunning in person. Velmora is my new go-to for gifts.", name: "Isabella R." },
              { text: "Fast shipping and the customer service is wonderful. Truly a premium experience.", name: "Olivia W." }
            ].map((t, i) => (
              <div key={i} className="animate-in fade-in slide-in-from-bottom-4 duration-1000" style={{ animationDelay: `${i * 200}ms` }}>
                <p className="text-xl md:text-2xl font-serif italic mb-6 leading-relaxed">"{t.text}"</p>
                <p className="text-[10px] uppercase tracking-widest opacity-60">— {t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-screen-2xl mx-auto bg-primary text-secondary p-12 md:p-24 flex flex-col items-center text-center space-y-8 relative overflow-hidden">
          <div className="relative z-10 max-w-xl mx-auto">
            <Mail className="w-8 h-8 mb-8 mx-auto opacity-40" />
            <h2 className="text-3xl md:text-5xl font-serif mb-4 leading-tight">Join the <span className="italic uppercase tracking-tight">Velmora Journal</span></h2>
            <p className="text-xs md:text-sm uppercase tracking-widest opacity-70 mb-10">Sign up for 10% off your first order and exclusive early access.</p>
            
            <form className="flex flex-col md:flex-row w-full max-w-md mx-auto gap-0 border border-white/20">
              <input 
                type="email" 
                placeholder="EMAIL ADDRESS" 
                className="bg-transparent text-white px-6 py-4 flex-1 outline-none text-[10px] tracking-widest uppercase placeholder:text-white/30"
                required
              />
              <button 
                type="submit" 
                className="bg-secondary text-primary px-10 py-4 text-[10px] uppercase tracking-widest font-bold hover:bg-white transition-all whitespace-nowrap"
              >
                Join Now
              </button>
            </form>
          </div>
          
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full -mr-32 -mt-32 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full -ml-32 -mb-32 blur-3xl opacity-50" />
        </div>
      </section>
    </div>
  );
};

export default Home;
