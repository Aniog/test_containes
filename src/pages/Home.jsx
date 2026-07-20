import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useCartStore } from '@/store/cartStore';
import { products } from '@/data/products';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Star, ArrowRight } from 'lucide-react';

const Home = () => {
  const containerRef = useRef(null);
  const { addItem, openCart } = useCartStore();

  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const bestsellers = products.filter(p => p.isBestseller).slice(0, 4);

  const handleAddToCart = (e, product) => {
    e.preventDefault(); // Prevent navigating to product page
    addItem(product);
  };

  return (
    <div className="bg-background" ref={containerRef}>
      
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-[#2A2A2A]">
           <div className="absolute inset-0 bg-black/30 z-10" />
           <img 
              data-strk-bg-id="home-hero-bg"
              src={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 9'/%3E`}
              alt="Model wearing gold jewelry"
              className="w-full h-full object-cover object-top opacity-80"
              style={{backgroundColor: '#2A2A2A'}}
            />
        </div>
        
        <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto flex flex-col items-center">
          <h1 id="hero-title" className="text-5xl md:text-7xl lg:text-8xl mb-6 leading-[1.1] tracking-wide drop-shadow-sm font-serif">
            Crafted to be Treasured
          </h1>
          <p id="hero-subtitle" className="text-lg md:text-xl font-sans font-light tracking-wide drop-shadow-sm mb-12 max-w-2xl">
            Demi-fine gold jewelry for the modern woman. Everyday elegance, premium quality.
          </p>
          <Link to="/shop">
            <Button className="bg-brand-gold border-none text-white hover:bg-[#B39045] rounded-none px-12 py-7 uppercase tracking-[0.2em] text-sm transition-colors duration-300">
              Shop the Collection
            </Button>
          </Link>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="bg-brand-charcoal text-white py-5 border-b border-brand-charcoal">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 text-[10px] md:text-xs uppercase tracking-widest text-center">
            <span className="flex items-center gap-2"><Star className="w-3 h-3 text-brand-gold" /> Free Worldwide Shipping</span>
            <span className="hidden md:inline opacity-30">|</span>
            <span className="flex items-center gap-2"><Star className="w-3 h-3 text-brand-gold" /> 30-Day Returns</span>
            <span className="hidden md:inline opacity-30">|</span>
            <span className="flex items-center gap-2"><Star className="w-3 h-3 text-brand-gold" /> 18K Gold Plated</span>
            <span className="hidden md:inline opacity-30">|</span>
            <span className="flex items-center gap-2"><Star className="w-3 h-3 text-brand-gold" /> Hypoallergenic</span>
          </div>
        </div>
      </div>

      {/* Bestsellers */}
      <section className="py-24 max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 id="bestsellers-title" className="font-serif text-3xl md:text-4xl mb-3 text-brand-charcoal">Current Obsessions</h2>
            <p id="bestsellers-subtitle" className="text-brand-muted text-sm tracking-wide">Our most loved pieces right now.</p>
          </div>
          <Link to="/shop" className="hidden md:flex items-center gap-2 text-sm uppercase tracking-widest hover:text-brand-gold transition-colors font-medium">
            Shop All <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {bestsellers.map((product) => (
            <Link key={product.id} to={`/product/${product.id}`} className="group group/card cursor-pointer flex flex-col">
              <div className="relative aspect-[3/4] overflow-hidden bg-stone-100 mb-4">
                <img 
                  data-strk-img-id={`product-${product.id}-img`}
                  data-strk-img={`[product-${product.id}-name]`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="600"
                  src={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E`}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-105"
                  style={{backgroundColor: '#e5e5e5'}}
                />
                
                <div className="absolute inset-0 bg-black/0 group-hover/card:bg-black/5 transition-colors duration-300" />
                
                <button 
                  onClick={(e) => handleAddToCart(e, product)}
                  className="absolute bottom-0 left-0 w-full bg-white/95 backdrop-blur-sm text-brand-charcoal py-4 text-xs uppercase tracking-widest translate-y-full group-hover/card:translate-y-0 transition-transform duration-300 ease-out hover:bg-brand-charcoal hover:text-white"
                >
                  Quick Add
                </button>
              </div>
              
              <div className="flex flex-col flex-1">
                <h3 id={`product-${product.id}-name`} className="font-serif uppercase tracking-widest text-sm mb-1 line-clamp-1">{product.name}</h3>
                <span className="text-brand-charcoal font-medium text-sm mt-auto">${product.price}</span>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-8 text-center md:hidden">
           <Link to="/shop" className="inline-flex items-center gap-2 text-sm uppercase tracking-widest hover:text-brand-gold transition-colors border-b border-brand-charcoal pb-1">
            Shop All <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 bg-white">
        <div className="max-w-[1400px] mx-auto overflow-hidden">
          <div className="flex flex-col md:flex-row h-[70vh] min-h-[500px]">
            {/* Category 1 */}
            <Link to="/shop?category=earrings" className="group relative flex-1 overflow-hidden h-full">
              <img 
                data-strk-bg-id="category-earrings"
                src={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E`}
                alt="Earrings Category"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                style={{backgroundColor: '#d1d1d1'}}
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-white text-3xl md:text-4xl font-serif tracking-[0.15em] uppercase pointer-events-none drop-shadow-md">Earrings</h3>
              </div>
            </Link>

            {/* Category 2 */}
            <Link to="/shop?category=necklaces" className="group relative flex-1 overflow-hidden h-full">
              <img 
                data-strk-bg-id="category-necklaces"
                src={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E`}
                alt="Necklaces Category"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                style={{backgroundColor: '#c1c1c1'}}
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-white text-3xl md:text-4xl font-serif tracking-[0.15em] uppercase pointer-events-none drop-shadow-md">Necklaces</h3>
              </div>
            </Link>

            {/* Category 3 */}
            <Link to="/shop?category=huggies" className="group relative flex-1 overflow-hidden h-full">
              <img 
                data-strk-bg-id="category-huggies"
                src={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E`}
                alt="Huggies Category"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                style={{backgroundColor: '#b1b1b1'}}
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-white text-3xl md:text-4xl font-serif tracking-[0.15em] uppercase pointer-events-none drop-shadow-md">Huggies</h3>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Brand Story Split */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">
            <div className="flex-1 w-full aspect-[4/5] relative">
              <img 
                data-strk-img-id="brand-story-img"
                data-strk-img="[brand-story-title] [brand-story-subtitle]"
                data-strk-img-ratio="4x5"
                data-strk-img-width="800"
                src={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E`}
                alt="Brand Story"
                className="w-full h-full object-cover shadow-lg"
                style={{backgroundColor: '#e5e5e5'}}
              />
            </div>
            
            <div className="flex-1 max-w-lg">
              <span id="brand-story-subtitle" className="text-brand-gold uppercase tracking-[0.2em] text-xs font-semibold mb-4 block">The Velmora Ethos</span>
              <h2 id="brand-story-title" className="text-4xl lg:text-5xl font-serif mb-6 leading-tight text-brand-charcoal">Design that defies time.</h2>
              <p className="text-brand-muted mb-8 text-lg font-light leading-relaxed">
                We believe that fine jewelry shouldn't be reserved for special occasions. It should be lived in, loved, and layered. 
                Our demi-fine collection bridges the gap between fast fashion and fine jewelry, offering you enduring pieces crafted to keep up with your life.
              </p>
              <Link to="/about">
                <Button variant="outline" className="border-brand-charcoal text-brand-charcoal hover:bg-brand-charcoal hover:text-white rounded-none px-8 py-6 uppercase tracking-widest text-xs transition-colors border">
                  Read Our Story
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* UGC / Instagram Reel Style */}
      <section className="py-24 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-4 md:px-8 mb-12 text-center">
          <h2 className="font-serif text-3xl md:text-4xl mb-3 text-brand-charcoal">How You Wear Velmora</h2>
          <p className="text-brand-muted text-sm tracking-wide">Tag @velmorajewelry to be featured.</p>
        </div>
        
        <div className="flex overflow-x-auto pb-8 snap-x snap-mandatory hide-scrollbar gap-4 md:gap-6 px-4 md:px-8 max-w-[1600px] mx-auto">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="relative flex-shrink-0 w-[240px] md:w-[300px] aspect-[9/16] snap-start bg-stone-100 group cursor-pointer overflow-hidden">
               <img 
                  data-strk-img-id={`ugc-img-${i}`}
                  data-strk-img={`woman wearing gold jewelry lifestyle ${i}`}
                  data-strk-img-ratio="9x16"
                  data-strk-img-width="400"
                  src={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 9 16'/%3E`}
                  alt={`UGC ${i}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  style={{backgroundColor: '#e5e5e5'}}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-6 left-6 right-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                  <p className="font-serif italic text-lg shadow-sm">"In love with these..." • @customer_{i}</p>
                </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl mb-16 text-brand-charcoal">A Word From Our Muses</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { text: "The quality is unmatched. I haven't taken the Aura ear cuff off since it arrived.", name: "Sarah M.", stars: 5 },
              { text: "Finally, jewelry that doesn't tarnish and doesn't break the bank. Absolutely stunning packaging too.", name: "Elena R.", stars: 5 },
              { text: "My new everyday staples. The gold tone is warm and rich, looks exactly like my solid pieces.", name: "Jessica T.", stars: 5 }
            ].map((review, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="flex gap-1 mb-6 text-brand-gold">
                  {[...Array(review.stars)].map((_, j) => <Star key={j} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="font-serif text-lg leading-relaxed mb-6 font-medium italic text-brand-charcoal">"{review.text}"</p>
                <span className="text-xs uppercase tracking-[0.2em] text-brand-muted">{review.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;