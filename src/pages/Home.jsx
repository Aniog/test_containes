import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import ProductCard from '../components/product/ProductCard';
import { products } from '../data/products';

// We'll assume the component will create a config dynamically for now
const dummyConfig = {};

const Home = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Try to load images when component mounts
    try {
      ImageHelper.loadImages(dummyConfig, containerRef.current);
    } catch (e) {
      console.log('ImageHelper setup pending real config');
    }
  }, []);

  const bestsellers = products.slice(0, 4); // Show first 4 for grid

  const ugcImages = [
    { id: 'ugc-1', imgId: 'ugc-img-1', caption: 'Everyday stacking.' },
    { id: 'ugc-2', imgId: 'ugc-img-2', caption: 'Golden hour.' },
    { id: 'ugc-3', imgId: 'ugc-img-3', caption: 'Signature details.' },
    { id: 'ugc-4', imgId: 'ugc-img-4', caption: 'Less is more.' },
    { id: 'ugc-5', imgId: 'ugc-img-5', caption: 'Effortless elegance.' }
  ];

  const categories = [
    { name: 'Earrings', id: 'cat-earrings', imgId: 'cat-img-earrings' },
    { name: 'Necklaces', id: 'cat-necklaces', imgId: 'cat-img-necklaces' },
    { name: 'Huggies', id: 'cat-huggies', imgId: 'cat-img-huggies' }
  ];

  return (
    <div ref={containerRef} className="w-full">
      
      {/* 1 & 2. Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-brand-950"
          data-strk-bg-id="hero-bg-main"
          data-strk-bg="[hero-headline] warm lighting gold jewelry close up editorial model"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="2000"
          style={{ backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.8 }}
        />
        <div className="absolute inset-0 bg-black/20 z-0" /> {/* Slight darkening overlay */}
        
        <div className="relative z-10 text-center text-white px-4 flex flex-col items-center mt-16">
          <h1 
            id="hero-headline"
            className="font-serif text-5xl md:text-7xl lg:text-8xl mb-6 max-w-4xl leading-tight"
          >
            Crafted to be Treasured
          </h1>
          <p className="text-lg md:text-xl font-light tracking-wide mb-10 max-w-2xl text-brand-50/90">
            Demi-fine jewelry designed for the modern romantic. Everyday luxury that matters.
          </p>
          <Link 
            to="/collections/all"
            className="bg-brand-50 text-brand-950 px-10 py-4 uppercase tracking-widest text-sm hover:bg-brand-200 transition-colors inline-block"
          >
            Shop the Collection
          </Link>
        </div>
      </section>

      {/* 3. Trust Bar */}
      <section className="bg-brand-50 border-b border-border py-4 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center items-center gap-x-8 gap-y-2 text-xs md:text-sm uppercase tracking-widest text-brand-800">
          <span className="flex whitespace-nowrap">Free Worldwide Shipping</span>
          <span className="hidden md:inline text-brand-300">•</span>
          <span className="flex whitespace-nowrap">30-Day Returns</span>
          <span className="hidden md:inline text-brand-300">•</span>
          <span className="flex whitespace-nowrap">18K Gold Plated</span>
          <span className="hidden md:inline text-brand-300">•</span>
          <span className="flex whitespace-nowrap">Hypoallergenic</span>
        </div>
      </section>

      {/* 4. Bestsellers */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl mb-4 text-center">Bestselling Pieces</h2>
            <div className="w-16 h-px bg-brand-400"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {bestsellers.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="flex justify-center mt-16">
            <Link 
              to="/collections/all"
              className="border border-brand-900 text-brand-950 px-10 py-4 uppercase tracking-widest text-sm hover:bg-brand-950 hover:text-white transition-colors"
            >
              View All Jewelry
            </Link>
          </div>
        </div>
      </section>

      {/* 5. UGC Reel Row */}
      <section className="py-12 overflow-hidden bg-brand-100/50">
        <div className="px-4 md:px-8 mb-10 flex flex-col items-center text-center">
            <h2 className="font-serif text-2xl md:text-3xl mb-3">styled by you</h2>
            <p className="text-sm tracking-wider uppercase text-muted-foreground">@velmorajewelry</p>
        </div>
        
        {/* Hide scrollbar but keep horizontal scroll */}
        <div className="flex overflow-x-auto gap-4 px-4 md:px-8 pb-8 snap-x snap-mandatory hide-scroll" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {ugcImages.map((ugc) => (
            <div key={ugc.id} className="relative flex-none w-[280px] md:w-[320px] aspect-[9/16] snap-center overflow-hidden group">
              <img 
                src={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E`}
                data-strk-img-id={ugc.imgId}
                data-strk-img="vertical video style frame instagram reel gold jewelry worn model"
                data-strk-img-ratio="9x16"
                data-strk-img-width="400"
                alt="Styled jewelry"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <p className="absolute bottom-6 left-6 right-6 font-serif text-white text-lg italic drop-shadow-md">
                "{ugc.caption}"
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Shop by Category */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <Link 
              key={cat.id} 
              to="/collections/all" 
              className="relative aspect-square group overflow-hidden bg-brand-50 block"
            >
              <img 
                src={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E`}
                data-strk-img-id={cat.imgId}
                data-strk-img={`[cat-label-${cat.id}] gold jewelry aesthetic flatlay`}
                data-strk-img-ratio="1x1"
                data-strk-img-width="600"
                alt={cat.name}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/30 transition-colors duration-500">
                <div className="bg-white/95 backdrop-blur-sm px-8 py-3 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <span id={`cat-label-${cat.id}`} className="uppercase tracking-widest text-sm font-medium text-brand-950">
                    {cat.name}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 7. Brand Story Split */}
      <section className="bg-brand-50">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="order-2 lg:order-1 relative aspect-square lg:aspect-auto">
             <img 
                src={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E`}
                data-strk-img-id="story-img-main"
                data-strk-img="[story-title] artisan workshop jewelry making gold"
                data-strk-img-ratio="1x1"
                data-strk-img-width="1000"
                alt="Jewelry making process"
                className="absolute inset-0 w-full h-full object-cover"
              />
          </div>
          <div className="order-1 lg:order-2 flex flex-col justify-center px-8 lg:px-24 py-20 lg:py-0 text-center lg:text-left">
            <h2 id="story-title" className="font-serif text-3xl md:text-5xl mb-6 text-brand-950">
              The Art of Subtlety
            </h2>
            <div className="w-16 h-px bg-brand-400 mx-auto lg:mx-0 mb-8"></div>
            <p className="text-muted-foreground leading-relaxed mb-10 max-w-md mx-auto lg:mx-0">
              We believe that luxury shouldn't be loud. Founded on the principle that the most beautiful pieces are the ones you never want to take off, Velmora bridges the gap between fast fashion and fine jewelry. Every piece is meticulously crafted to be skin-friendly, sweat-resistant, and timeless.
            </p>
            <div>
              <Link to="#" className="uppercase tracking-widest text-sm font-medium underline underline-offset-8 text-brand-900 hover:text-brand-600 transition-colors">
                Discover Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Testimonials */}
      <section className="py-24 px-4 bg-brand-950 text-brand-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-3xl text-center mb-16">Notes from our clients</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center px-4">
            
            <div className="flex flex-col items-center">
              <div className="flex text-brand-400 mb-6 space-x-1">
                {'★★★★★'.split('').map((star, i) => <span key={i}>{star}</span>)}
              </div>
              <p className="font-serif text-xl italic mb-6 leading-relaxed">
                "The Vivid Aura cuff hasn't left my ear since I bought it. It looks so high-end but didn't break the bank."
              </p>
              <p className="uppercase tracking-widest text-xs font-medium">— Sarah M.</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="flex text-brand-400 mb-6 space-x-1">
                {'★★★★★'.split('').map((star, i) => <span key={i}>{star}</span>)}
              </div>
              <p className="font-serif text-xl italic mb-6 leading-relaxed">
                "I have sensitive skin and usually react to anything that isn't solid gold. These huggies have been a dream. So comfortable."
              </p>
              <p className="uppercase tracking-widest text-xs font-medium">— Elena T.</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="flex text-brand-400 mb-6 space-x-1">
                {'★★★★★'.split('').map((star, i) => <span key={i}>{star}</span>)}
              </div>
              <p className="font-serif text-xl italic mb-6 leading-relaxed">
                "Bought the set for my sister's birthday and she cried. The packaging is just as gorgeous as the jewelry itself."
              </p>
              <p className="uppercase tracking-widest text-xs font-medium">— Chloe R.</p>
            </div>

          </div>
        </div>
      </section>

      {/* 9. Newsletter Capture */}
      <section className="py-24 px-4 bg-brand-200/30">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl mb-4 text-brand-950">Join the Inner Circle</h2>
          <p className="text-muted-foreground mb-10">
            Sign up for early access to new collections, exclusive events, and 10% off your first order.
          </p>
          <form className="flex flex-col sm:flex-row max-w-md mx-auto gap-4 sm:gap-0" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-1 bg-transparent border border-brand-800 text-brand-950 px-6 py-4 outline-none focus:border-brand-950 placeholder:text-brand-800/50"
              required
            />
            <button 
              type="submit"
              className="bg-brand-950 text-white px-8 py-4 uppercase tracking-widest text-sm hover:bg-brand-800 transition-colors"
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
