import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { PRODUCTS } from '@/lib/data';
import ProductCard from '@/components/ProductCard';

const Home = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const bestsellers = PRODUCTS.slice(0, 5);

  const reels = [
    { id: 'reel-1', title: 'The Golden Hour', subtitle: 'Styled for evening elegance' },
    { id: 'reel-2', title: 'Everyday Brilliance', subtitle: 'Minimalist pieces for daily wear' },
    { id: 'reel-3', title: 'Gift of Gold', subtitle: 'Perfectly boxed surprises' },
    { id: 'reel-4', title: 'Layers of Light', subtitle: 'Our signature stackable chains' },
  ];

  const testimonials = [
    { name: 'Sarah M.', text: 'The quality of these pieces is incredible for the price. I wear my huggies every single day.', stars: 5 },
    { name: 'Elena R.', text: 'Fast shipping and beautiful packaging. It felt like such a treated opening the box.', stars: 5 },
    { name: 'Chloe K.', text: 'Obsessed with the necklace set. High-end look without the high-end price tag.', stars: 5 },
  ];

  return (
    <div ref={containerRef} className="bg-velmora-cream">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-velmora-dark/20"
          data-strk-bg-id="hero-bg"
          data-strk-bg="gold jewelry lifestyle model editorial"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        />
        <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/40 via-transparent to-black/20" />
        
        <div className="relative z-10 text-center px-6 max-w-4xl text-white">
          <h1 id="hero-title" className="text-4xl md:text-7xl lg:text-8xl mb-6 tracking-tight leading-[1.1]">
            Crafted to be <br className="hidden md:block" /> <span className="italic">Treasured</span>
          </h1>
          <p id="hero-subtitle" className="text-sm md:text-lg uppercase tracking-[0.3em] font-light mb-12 max-w-2xl mx-auto opacity-90">
            Demi-fine gold jewelry for your daily ritual.
          </p>
          <Link 
            to="/shop" 
            className="inline-block bg-velmora-gold text-white px-10 py-4 text-xs uppercase tracking-widest font-semibold hover:bg-white hover:text-velmora-dark transition-all duration-500 transform hover:-translate-y-1"
          >
            Shop the Collection
          </Link>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
          <span className="text-[10px] uppercase tracking-[0.3em] rotate-90 origin-center mb-6">Scroll</span>
          <div className="w-[1px] h-12 bg-white/40" />
        </div>
      </section>

      {/* Trust Bar */}
      <div className="bg-velmora-dark text-white py-3">
        <div className="max-w-[1400px] mx-auto px-6 overflow-hidden">
          <div className="flex items-center justify-between gap-12 whitespace-nowrap md:justify-center md:gap-24 text-[10px] uppercase tracking-[0.2em] font-medium opacity-80">
            <span>Free Worldwide Shipping</span>
            <span className="hidden sm:inline">30-Day Returns</span>
            <span>18K Gold Plated</span>
            <span className="hidden sm:inline">Hypoallergenic</span>
          </div>
        </div>
      </div>

      {/* Bestsellers Section */}
      <section className="py-24 px-6 md:px-12 max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row items-baseline justify-between mb-16 gap-6">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-velmora-gold mb-3 block font-semibold">Our Favorites</span>
            <h2 id="bestsellers-title" className="text-4xl md:text-5xl lg:text-6xl lowercase italic">Bestsellers</h2>
          </div>
          <Link to="/shop" className="text-xs uppercase tracking-widest border-b border-velmora-dark pb-1 hover:text-velmora-gold hover:border-velmora-gold transition-all">
            View All
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-12">
          {bestsellers.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Reels Section */}
      <section className="py-24 bg-velmora-beige overflow-hidden">
        <div className="px-6 md:px-12 mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-center mb-2">As Seen On You</h2>
          <p className="text-xs uppercase tracking-[0.2em] text-center text-velmora-muted">Style inspiration from our community</p>
        </div>
        
        <div className="flex overflow-x-auto gap-4 px-6 md:px-12 pb-8 scrollbar-hide snap-x snap-mandatory">
          {reels.map((reel) => (
            <div key={reel.id} className="relative min-w-[280px] md:min-w-[320px] aspect-[9/16] overflow-hidden snap-center group">
              <img
                data-strk-img-id={reel.id}
                data-strk-img={`[reel-${reel.id}-title] lifestyle jewelry on person`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 9 16'/%3E"
                alt={reel.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <h3 id={`reel-${reel.id}-title`} className="font-serif text-xl italic mb-1">{reel.title}</h3>
                <p className="text-[10px] uppercase tracking-widest opacity-80">{reel.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-24 px-6 md:px-12 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {['Earrings', 'Necklaces', 'Huggies'].map((cat) => (
            <Link key={cat} to={`/shop?category=${cat}`} className="relative aspect-[4/5] overflow-hidden group">
              <img
                data-strk-img-id={`cat-${cat}`}
                data-strk-img={`${cat} gold fine jewelry product`}
                data-strk-img-ratio="4x5"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E"
                alt={cat}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-smooth duration-500 flex items-center justify-center">
                <div className="text-center">
                   <h3 className="text-white text-3xl md:text-4xl font-serif mb-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500 opacity-0 group-hover:opacity-100 italic">{cat}</h3>
                   <span className="text-white text-[10px] uppercase tracking-[0.3em] font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100 border-b border-white pb-1">Explore</span>
                </div>
              </div>
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white text-md uppercase tracking-[0.2em] font-medium group-hover:opacity-0 transition-opacity duration-300">
                {cat}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Brand Story Section */}
      <section className="flex flex-col md:flex-row">
        <div className="md:w-1/2 aspect-square md:aspect-auto">
          <img
            data-strk-img-id="story-img"
            data-strk-img="boutique jewelry studio gold craftsmanship editorial"
            data-strk-img-ratio="1x1"
            data-strk-img-width="1200"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt="Our Story"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="md:w-1/2 bg-velmora-beige flex items-center justify-center p-12 md:p-24 lg:p-32">
          <div className="max-w-md">
            <span className="text-xs uppercase tracking-[0.3em] text-velmora-gold mb-6 block font-semibold">Our Heritage</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-10 leading-tight">Quiet Luxury, <br /> Responsibly Sourced.</h2>
            <p className="text-velmora-muted mb-12 leading-relaxed text-sm lg:text-base">
              Founded on the belief that jewelry should be both beautiful and meaningful, Velmora creates demi-fine pieces that tell your story. Our 18K gold plating process ensures longevity and a rich luster that lasts.
            </p>
            <Link to="/about" className="inline-flex items-center gap-4 text-xs uppercase tracking-widest font-bold group">
              Our Story
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {testimonials.map((t, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="flex gap-1 mb-6 text-velmora-gold">
                  {[...Array(t.stars)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="font-serif text-xl italic mb-6 leading-relaxed">"{t.text}"</p>
                <span className="text-xs uppercase tracking-[0.2em] font-bold text-velmora-dark">— {t.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 px-6 md:px-12 bg-velmora-beige">
        <div className="max-w-4xl mx-auto bg-white p-12 md:p-20 text-center shadow-xl">
           <span className="text-xs uppercase tracking-[0.3em] text-velmora-gold mb-6 block font-semibold">Stay Inspired</span>
           <h2 className="text-4xl md:text-5xl font-serif mb-6 italic">Join the Journal</h2>
           <p className="text-velmora-muted mb-10 max-w-md mx-auto">Sign up for exclusive previews of new collections and enjoy 10% off your first order.</p>
           <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
             <input 
              type="email" 
              placeholder="Email address"
              className="flex-1 bg-transparent border-b border-velmora-muted py-3 px-2 text-sm focus:outline-none focus:border-velmora-gold transition-colors"
             />
             <button className="bg-velmora-dark text-white px-8 py-4 text-xs uppercase tracking-widest font-semibold hover:bg-velmora-gold transition-colors duration-300">
               Join Us
             </button>
           </form>
        </div>
      </section>
    </div>
  );
};

export default Home;
