import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';
import { products } from '@/lib/data';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { useCart } from '@/context/CartContext';
import { toast } from 'sonner';

const Home = () => {
  const { addToCart } = useCart();
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const handleAddToCart = (product) => {
    addToCart(product);
    toast.success(`${product.name} added to your bag`);
  };

  return (
    <div ref={containerRef} className="bg-white">
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-velmora-charcoal"
          data-strk-bg-id="hero-bg-928e"
          data-strk-bg="[hero-title] [hero-subtitle]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        />
        <div className="absolute inset-0 bg-black/20 z-[1]" />
        
        <div className="container mx-auto px-4 z-10 text-center text-white">
          <h1 id="hero-title" className="text-5xl md:text-7xl lg:text-8xl font-serif mb-6 leading-tight opacity-0 animate-in fade-in slide-in-from-bottom-8 duration-1000 fill-mode-forwards">
            Crafted to be <br /> Treasured
          </h1>
          <p id="hero-subtitle" className="text-sm md:text-base font-sans uppercase tracking-[0.3em] font-light mb-10 opacity-0 animate-in fade-in slide-in-from-bottom-4 delay-500 duration-1000 fill-mode-forwards">
            demi-fine jewelry for your everyday journey
          </p>
          <div className="opacity-0 animate-in fade-in slide-in-from-bottom-2 delay-700 duration-1000 fill-mode-forwards">
            <Link 
              to="/shop"
              className="inline-block bg-white text-velmora-charcoal px-10 py-4 text-xs uppercase tracking-ultra-wide font-semibold hover:bg-gold hover:text-white transition-all duration-500"
            >
              Shop the Collection
            </Link>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce">
            <div className="w-[1px] h-12 bg-white/30 mx-auto" />
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-velmora-cream border-y border-velmora-charcoal/5 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center text-[10px] md:text-[11px] uppercase tracking-ultra-wide text-velmora-charcoal/60 font-sans gap-y-2">
            <div className="flex items-center space-x-2">
              <div className="w-1 h-1 bg-gold rounded-full" />
              <span>Free Worldwide Shipping</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-1 h-1 bg-gold rounded-full" />
              <span>30-Day Returns</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-1 h-1 bg-gold rounded-full" />
              <span>18K Gold Plated</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-1 h-1 bg-gold rounded-full" />
              <span>Hypoallergenic</span>
            </div>
          </div>
        </div>
      </section>

      {/* Bestsellers */}
      <section className="py-24 md:py-32 container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-16 space-y-4 md:space-y-0">
          <div className="max-w-xl">
            <h2 id="bestsellers-title" className="text-3xl md:text-5xl font-serif mb-4">The Essentials</h2>
            <p id="bestsellers-desc" className="text-sm text-velmora-charcoal/60 leading-relaxed font-sans uppercase tracking-widest italic">
              Our most-loved pieces, chosen by you.
            </p>
          </div>
          <Link to="/shop" className="text-sm uppercase tracking-ultra-wide border-b border-velmora-charcoal/20 pb-1 font-semibold hover:text-gold hover:border-gold transition-all flex items-center group">
            View All <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-x-4 md:gap-x-8 gap-y-12">
          {products.slice(0, 5).map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <Link to={`/product/${product.id}`} className="block relative aspect-[3/4] overflow-hidden mb-6 bg-velmora-cream">
                <img 
                  data-strk-img-id={`prod-img-${product.id}`}
                  data-strk-img={`[prod-title-${product.id}] [bestsellers-title] jewelry`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="600"
                  src={product.images[0]} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/5" />
                <button 
                  onClick={(e) => {
                    e.preventDefault();
                    handleAddToCart(product);
                  }}
                  className="absolute bottom-4 left-4 right-4 bg-white text-velmora-charcoal py-3 text-[10px] uppercase tracking-ultra-wide font-semibold opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 hover:bg-velmora-charcoal hover:text-white"
                >
                  Quick Add
                </button>
              </Link>
              <h3 id={`prod-title-${product.id}`} className="text-xs uppercase tracking-ultra-wide mb-2 font-medium font-sans">{product.name}</h3>
              <p className="text-sm font-sans tracking-tight">${product.price}</p>
            </div>
          ))}
        </div>
      </section>

      {/* UGC Reel Row */}
      <section className="py-24 bg-velmora-charcoal overflow-hidden">
        <div className="container mx-auto px-4 mb-12 flex flex-col items-center">
            <h2 id="ugc-title" className="text-3xl font-serif text-white mb-2 italic">Muse Moments</h2>
            <p className="text-[10px] text-white/50 uppercase tracking-[0.3em] font-sans">tagged by you @velmora</p>
        </div>
        
        <div className="flex overflow-x-auto pb-8 snap-x hide-scrollbar">
            <div className="flex flex-nowrap space-x-4 pl-4 md:pl-[10vw]">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div key={i} className="flex-shrink-0 w-[70vw] md:w-[20vw] aspect-[9/16] relative snap-center group">
                        <div 
                          className="absolute inset-0 bg-velmora-sand" 
                          data-strk-bg-id={`ugc-bg-${i}`}
                          data-strk-bg={`[ugc-title] woman wearing gold jewelry`}
                          data-strk-bg-ratio="9x16"
                          data-strk-bg-width="600"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                        <div className="absolute bottom-6 left-6 right-6">
                            <p className="text-white font-serif italic text-lg opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                                "The perfect addition to my morning routine. Never taking them off."
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-24 container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {['Earrings', 'Necklaces', 'Huggies'].map((cat) => (
            <Link key={cat} to={`/shop?category=${cat}`} className="group relative aspect-[4/5] overflow-hidden bg-velmora-cream">
              <div 
                className="absolute inset-0"
                data-strk-bg-id={`cat-bg-${cat}`}
                data-strk-bg={`[cat-title-${cat}] model wearing luxury gold jewelry`}
                data-strk-bg-ratio="4x5"
                data-strk-bg-width="800"
              />
              <div className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-black/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 id={`cat-title-${cat}`} className="text-white text-3xl md:text-4xl font-serif uppercase tracking-widest relative">
                  {cat}
                  <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-white transition-all duration-500 group-hover:w-full" />
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-24 bg-velmora-cream">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="w-full md:w-1/2 aspect-square relative overflow-hidden">
                <div 
                  className="absolute inset-0 bg-velmora-gold/10"
                  data-strk-bg-id="story-bg"
                  data-strk-bg="[story-title] jewelry artisan workspace editorial"
                  data-strk-bg-ratio="1x1"
                  data-strk-bg-width="1000"
                />
            </div>
            <div className="w-full md:w-1/2">
                <span className="text-xs uppercase tracking-[0.3em] text-gold font-semibold mb-6 block">Our Story</span>
                <h2 id="story-title" className="text-4xl md:text-6xl font-serif mb-8 leading-tight">Modern Heirlooms for the Conscious Woman</h2>
                <p className="text-sm text-velmora-charcoal/70 leading-[1.8] font-sans mb-10 max-w-lg">
                    Born from a desire to bridge the gap between costume jewelry and fine jewelry, Velmora creates pieces that are meant to be lived in. We use only the highest quality materials—recycled silver, 18k gold plating, and ethically sourced gems—to create demi-fine treasures that don't compromise on quality or conscience.
                </p>
                <Link to="#" className="text-xs uppercase tracking-ultra-wide border-b border-velmora-charcoal pt-4 pb-1 inline-block font-semibold hover:text-gold hover:border-gold transition-all">
                    Meet the Founder
                </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                {[
                    { name: "Elena K.", text: "The quality is beyond what I expected for the price. The gold tone is so rich and authentic. It's my fourth purchase and definitely not my last!" },
                    { name: "Sarah M.", text: "Received my Golden Sphere Huggies and haven't taken them off since. They are the perfect weight and look so high-end." },
                    { name: "Jessica R.", text: "Beautifully packaged and even more stunning in person. These make the most incredible gifts for my bridesmaids." }
                ].map((t, idx) => (
                    <div key={idx} className="flex flex-col items-center text-center">
                        <div className="flex space-x-1 mb-6">
                            {[1, 2, 3, 4, 5].map(s => <Star key={s} size={14} className="fill-gold text-gold" />)}
                        </div>
                        <p className="text-lg md:text-xl font-serif italic mb-6 leading-relaxed">"{t.text}"</p>
                        <p className="text-[10px] uppercase tracking-widest font-sans font-semibold text-velmora-charcoal/50">— {t.name}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 md:pt-32 pb-0">
        <div className="container mx-auto px-4 md:px-8">
            <div className="bg-velmora-charcoal text-white py-20 px-4 md:px-20 relative overflow-hidden flex flex-col md:flex-row items-center justify-between text-center md:text-left">
                <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="z-10 mb-10 md:mb-0">
                    <h2 className="text-3xl md:text-5xl font-serif mb-4">Join the Inner Circle</h2>
                    <p className="text-sm text-white/60 font-sans tracking-wide">Receive 10% off your first order and early access to our new collections.</p>
                </div>
                <div className="w-full md:w-1/3 z-10">
                    <form className="flex">
                        <input 
                            type="email" 
                            placeholder="YOUR EMAIL" 
                            className="bg-transparent border-b border-white/20 py-4 w-full text-xs tracking-widest focus:border-white transition-colors focus:outline-none"
                        />
                        <button type="submit" className="border-b border-white/20 px-4 hover:text-gold transition-colors">
                            <ArrowRight size={20} strokeWidth={1} />
                        </button>
                    </form>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
