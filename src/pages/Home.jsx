import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/api/products';
import ProductCard from '@/components/ProductCard';

const Home = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const bestsellers = products.slice(0, 5);

  return (
    <div ref={containerRef} className="overflow-hidden">
      <section className="relative h-screen w-full flex items-center px-6 md:px-20 overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-brand-dark"
          data-strk-bg-id="hero-bg"
          data-strk-bg="elegant gold jewelry model close up warm lighting"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        />
        <div className="absolute inset-0 bg-black/20 z-0" />
        
        <div className="relative z-10 max-w-2xl text-white space-y-8 animate-fadeIn">
          <h1 id="hero-title" className="text-5xl md:text-7xl font-serif leading-tight">
            Crafted to be <br /> <span className="italic">Treasured</span>
          </h1>
          <p id="hero-subtitle" className="text-lg md:text-xl font-light opacity-90 max-w-lg leading-relaxed">
            Discover our collection of demi-fine jewelry designed for your everyday moments and special occasions.
          </p>
          <Link 
            to="/shop" 
            className="inline-block bg-brand-gold text-white px-10 py-5 text-sm uppercase tracking-widest hover:bg-white hover:text-brand-dark transition-all duration-500 shadow-xl"
          >
            Shop the Collection
          </Link>
        </div>
      </section>

      <div className="bg-brand-stone py-4 border-b border-brand-gold/10">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-between items-center text-[10px] md:text-xs uppercase tracking-widest text-brand-dark/60 font-medium">
          <div className="px-4 py-2">Free Worldwide Shipping</div>
          <div className="hidden md:block border-l border-brand-gold/20 h-4" />
          <div className="px-4 py-2">30-Day Returns</div>
          <div className="hidden md:block border-l border-brand-gold/20 h-4" />
          <div className="px-4 py-2">18K Gold Plated</div>
          <div className="hidden md:block border-l border-brand-gold/20 h-4" />
          <div className="px-4 py-2">Hypoallergenic</div>
        </div>
      </div>

      <section className="py-24 px-6 md:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-16">
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-[0.3em] text-brand-gold font-semibold">The Essentials</span>
              <h2 id="bestsellers-title" className="text-4xl md:text-5xl font-serif">Our Bestsellers</h2>
            </div>
            <Link to="/shop" className="text-sm uppercase tracking-widest border-b border-black pb-1 hover:text-brand-gold hover:border-brand-gold transition-colors">
              View All
            </Link>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8">
            {bestsellers.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-brand-stone/30 overflow-hidden">
        <div className="px-6 mb-12 flex flex-col items-center text-center">
          <h2 id="ugc-title" className="text-3xl font-serif mb-4 italic">Worn by You</h2>
          <p className="text-xs uppercase tracking-widest opacity-60">Tag @VelmoraJewelry to be featured</p>
        </div>
        
        <div className="flex gap-4 overflow-x-auto pb-8 px-6 no-scrollbar snap-x">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="relative flex-shrink-0 w-64 md:w-80 aspect-[9/16] bg-white group snap-start">
              <img 
                data-strk-img-id={`ugc-img-${i}`}
                data-strk-img={`woman wearing gold jewelry aesthetic video frame`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 9 16'/%3E"
                alt="Community feature"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/60 to-transparent text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="font-serif italic text-lg">"Absolutely divine. The gold is so rich."</p>
                <p className="text-[10px] mt-2 tracking-widest uppercase">— ELEANOR R.</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 px-6 md:px-20 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: 'Earrings', id: 'cat-earrings' },
            { name: 'Necklaces', id: 'cat-necklaces' },
            { name: 'Huggies', id: 'cat-huggies' }
          ].map((cat) => (
            <Link key={cat.id} to={`/shop?category=${cat.name.toLowerCase()}`} className="group relative aspect-square overflow-hidden bg-brand-stone">
              <img 
                data-strk-img-id={`cat-img-${cat.id}`}
                data-strk-img={`${cat.name} jewelry close up elegant`}
                data-strk-img-ratio="1x1"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/5 group-hover:bg-black/20 transition-all duration-300">
                <span className="text-white text-2xl font-serif tracking-widest opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  {cat.name}
                </span>
              </div>
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-sm px-6 py-2 text-[10px] tracking-widest uppercase group-hover:opacity-0 transition-opacity">
                {cat.name}
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="py-24 px-6 md:px-20 flex flex-col md:flex-row items-center gap-16 max-w-7xl mx-auto">
        <div className="w-full md:w-1/2 aspect-[4/5] bg-brand-stone overflow-hidden">
          <img 
            data-strk-img-id="story-img"
            data-strk-img="jewelry designer working workshop elegant"
            data-strk-img-ratio="4x5"
            data-strk-img-width="1200"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E"
            alt="Our Story"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 space-y-8 text-center md:text-left">
          <span className="text-xs uppercase tracking-[0.3em] text-brand-gold font-semibold">Our Journey</span>
          <h2 id="story-title" className="text-4xl md:text-5xl font-serif leading-tight">Elevating the <br /> <span className="italic">Everyday Ritual</span></h2>
          <p className="text-lg text-black/70 font-light leading-relaxed">
            Velmora was born from a desire to create jewelry that feels both precious and personal. We believe that fine craftsmanship shouldn't be reserved for special occasions—it should be part of your daily expression.
          </p>
          <Link to="/about" className="inline-flex items-center space-x-4 text-sm uppercase tracking-widest border-b border-black pb-1 hover:text-brand-gold hover:border-brand-gold transition-colors">
            <span>Discover Our Story</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <section className="py-24 bg-brand-stone/40">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-16">
          <div className="flex flex-col items-center">
            <h2 id="testimonials-title" className="text-4xl font-serif italic mb-2">What they say</h2>
            <div className="w-12 h-px bg-brand-gold/30" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { text: "The quality is simply unmatched for the price. My new go-to for gifts.", name: "Sophia L." },
              { text: "Velmora jewelry has such a beautiful, soft glow. I never take my huggies off.", name: "Isabella K." },
              { text: "Stunning packaging and even more stunning jewelry. Such a premium experience.", name: "Emma G." }
            ].map((review, i) => (
              <div key={i} className="space-y-4">
                <div className="flex justify-center text-brand-gold">
                  {[...Array(5)].map((_, j) => <Star key={j} size={14} fill="currentColor" />)}
                </div>
                <p className="text-lg font-serif italic text-black/80 leading-relaxed">"{review.text}"</p>
                <p className="text-[10px] tracking-widest uppercase opacity-40">— {review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 md:px-20">
        <div className="max-w-5xl mx-auto bg-brand-dark p-12 md:p-24 text-center text-white space-y-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-gold/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />
          
          <div className="relative z-10 space-y-4">
            <h2 className="text-4xl font-serif">A Gilded Invitation</h2>
            <p className="text-lg font-light opacity-70">Join our inner circle and receive 10% off your first order.</p>
          </div>
          
          <form className="relative z-10 max-w-md mx-auto flex flex-col md:flex-row gap-4 mt-8" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Email address" 
              className="flex-grow bg-white/5 border border-white/20 px-6 py-4 outline-none focus:border-brand-gold transition-colors text-sm font-light text-center md:text-left"
            />
            <button className="bg-brand-gold text-white px-10 py-4 text-xs uppercase tracking-widest font-semibold hover:bg-white hover:text-brand-dark transition-all duration-500">
              Subscribe
            </button>
          </form>
          <p className="text-[10px] tracking-widest uppercase opacity-40">Privacy is our priority. Unsubscribe at any time.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
