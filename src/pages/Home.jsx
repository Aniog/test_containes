import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../strk-img-config.json';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx';
import ProductCard from '../components/ProductCard';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const Home = () => {
  const containerRef = useRef(null);
  const [bestsellers, setBestsellers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [bestsellers]);

  useEffect(() => {
    const fetchBestsellers = async () => {
      try {
        const { data: response, error } = await client
          .from('Product')
          .select('*')
          .limit(5);
        
        if (error) throw error;
        setBestsellers(response?.data?.list || []);
      } catch (err) {
        console.error('Failed to fetch bestsellers:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchBestsellers();
  }, []);

  const trustBarItems = [
    'Free Worldwide Shipping',
    '30-Day Returns',
    '18K Gold Plated',
    'Hypoallergenic'
  ];

  const ugcItems = [
    { id: 1, caption: 'Golden Glow', img: 'earring worn closeup' },
    { id: 2, caption: 'Layered Classics', img: 'necklace layered closeup' },
    { id: 3, caption: 'Daily Sparkle', img: 'huggies worn closeup' },
    { id: 4, caption: 'Elegant Details', img: 'jewelry model portrait' },
    { id: 5, caption: 'Treasure Found', img: 'gold jewelry aesthetic' }
  ];

  const categories = [
    { title: 'Earrings', id: 'cat-earrings' },
    { title: 'Necklaces', id: 'cat-necklaces' },
    { title: 'Huggies', id: 'cat-huggies' }
  ];

  const testimonials = [
    { name: 'Sarah M.', text: 'Absolutely stunning quality. These have become my everyday essentials.', stars: 5 },
    { name: 'Elena R.', text: 'The packaging and the jewelry feel so premium. Perfect for gifting.', stars: 5 },
    { name: 'Jessica K.', text: 'Beautiful designs that dont tarnish. I get compliments every time I wear them.', stars: 5 }
  ];

  return (
    <div ref={containerRef} className="pb-20">
      {/* 1. Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          data-strk-bg-id="hero-bg"
          data-strk-bg="[hero-headline] jewelry model closeup"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        />
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative z-10 text-center text-white px-6">
          <h1 id="hero-headline" className="text-4xl md:text-6xl lg:text-7xl font-serif tracking-[0.2em] mb-6 animate-fade-in uppercase">
            Crafted to be <br /> Treasured
          </h1>
          <p className="text-sm md:text-base font-sans tracking-[0.3em] uppercase mb-12 opacity-90">
            Timeless demi-fine jewelry for every story.
          </p>
          <Button asChild className="bg-white hover:bg-stone-100 text-primary rounded-none h-14 px-10 uppercase tracking-[0.2em] text-xs transition-all duration-300 hover:tracking-[0.3em]">
            <Link to="/shop">Shop the Collection</Link>
          </Button>
        </div>
      </section>

      {/* 2. Trust Bar */}
      <div className="bg-velmora-cream border-y border-stone-200 py-4 overflow-hidden">
        <div className="flex justify-center items-center gap-12 whitespace-nowrap px-6">
          {trustBarItems.map((item, idx) => (
            <span key={idx} className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-muted flex items-center gap-2">
              <span className="w-1 h-1 bg-accent rounded-full" />
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* 4. "Bestsellers" product grid */}
      <section className="py-24 container mx-auto px-6">
        <div className="flex justify-between items-end mb-16">
          <div className="max-w-md">
            <h2 id="bestsellers-title" className="text-3xl font-serif uppercase tracking-[0.2em] mb-4">The Essentials</h2>
            <p className="text-sm text-muted font-sans leading-relaxed tracking-wide">
              Our most coveted pieces, loved for their timeless design and exceptional quality.
            </p>
          </div>
          <Link to="/shop" className="text-xs uppercase tracking-[0.2em] font-bold flex items-center gap-2 hover:opacity-70 transition-opacity mb-2">
            View All <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8">
          {loading ? (
            Array(5).fill(0).map((_, i) => (
              <div key={i} className="animate-pulse bg-stone-100 aspect-[3/4]" />
            ))
          ) : (
            bestsellers.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          )}
        </div>
      </section>

      {/* 5. Reel-style UGC row */}
      <section className="py-24 bg-velmora-chalk overflow-hidden">
        <div className="container mx-auto px-6 mb-12 text-center">
            <h2 className="text-2xl font-serif italic mb-2 tracking-wide">Inspired by You</h2>
            <p className="text-xs uppercase tracking-[0.2em] text-muted">Tag #VELMORA to be featured</p>
        </div>
        <div className="flex gap-4 px-6 overflow-x-auto no-scrollbar scroll-smooth pb-8">
          {ugcItems.map((item) => (
            <div key={item.id} className="relative flex-shrink-0 w-[240px] md:w-[320px] aspect-[9/16] group cursor-pointer overflow-hidden">
              <img 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                data-strk-img-id={`ugc-${item.id}`}
                data-strk-img={item.img}
                data-strk-img-ratio="9x16"
                data-strk-img-width="600"
                alt={item.caption}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-8 left-8 right-8 text-white opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                <p className="text-lg font-serif italic mb-1">{item.caption}</p>
                <p className="text-[10px] uppercase tracking-widest opacity-80">Shop the look</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Shop by category tiles */}
      <section className="py-24 container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <Link key={cat.id} to="/shop" className="relative aspect-[4/5] group overflow-hidden bg-stone-100">
               <img 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                data-strk-img-id={`cat-img-${cat.id}`}
                data-strk-img={`${cat.title} jewelry photoshoot`}
                data-strk-img-ratio="4x5"
                data-strk-img-width="800"
                alt={cat.title}
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
              <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white text-xl md:text-2xl font-serif uppercase tracking-[0.3em] font-medium transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    {cat.title}
                  </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 7. Brand story split section */}
      <section className="py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center">
          <div className="aspect-square relative overflow-hidden bg-stone-100">
              <img 
                className="w-full h-full object-cover"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                data-strk-img-id="brand-story-img"
                data-strk-img="minimalist jewelry workshop background"
                data-strk-img-ratio="1x1"
                data-strk-img-width="1200"
                alt="Velmora Craftsmanship"
              />
          </div>
          <div className="p-12 md:p-24 bg-velmora-cream flex flex-col items-start justify-center">
            <h4 className="text-[10px] uppercase tracking-[0.3em] text-accent font-bold mb-6">Honest Craftsmanship</h4>
            <h2 className="text-3xl md:text-4xl font-serif uppercase tracking-[0.15em] leading-snug mb-8">
              Beautifully Made, <br /> Mindfully Sourced
            </h2>
            <p className="text-sm md:text-base text-muted leading-relaxed font-sans mb-10 max-w-md tracking-wide">
              At Velmora, we believe jewelry should be more than just an accessory. It's a reflection of your journey, crafted to endure and designed to be treasured for generations. We use only the finest 18K gold plating and ethically sourced materials.
            </p>
            <Button variant="outline" asChild className="rounded-none border-primary text-primary hover:bg-primary hover:text-white px-10 h-12 uppercase tracking-[0.2em] text-xs transition-all">
              <Link to="#">Our Story</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* 8. Testimonials */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {testimonials.map((t, idx) => (
              <div key={idx} className="text-center group">
                <div className="flex justify-center gap-1 mb-6 text-accent">
                  {Array(t.stars).fill(0).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-lg font-serif italic mb-6 leading-relaxed text-primary/80">
                  "{t.text}"
                </p>
                <p className="text-[10px] uppercase tracking-[0.25em] font-bold text-muted">
                  {t.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Newsletter capture */}
      <section className="py-24 container mx-auto px-6">
        <div className="bg-primary text-white p-12 md:p-20 text-center relative overflow-hidden">
           <div 
            className="absolute inset-0 opacity-10 mix-blend-overlay bg-cover bg-center sm-hidden"
            data-strk-bg-id="newsletter-bg"
            data-strk-bg="jewelry texture gold"
          />
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl font-serif uppercase tracking-[0.2em] mb-6">Join the Circle</h2>
            <p className="text-sm font-sans tracking-widest uppercase opacity-80 mb-10">
              Receive 10% off your first order and stay updated on new collections.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 justify-center">
              <input 
                type="email" 
                placeholder="EMAIL ADDRESS" 
                className="bg-transparent border-b border-white/30 text-white placeholder:text-white/50 py-3 px-4 focus:outline-none focus:border-white transition-colors uppercase tracking-[0.2em] text-xs flex-1 max-w-md"
              />
              <Button className="bg-white text-primary hover:bg-stone-100 rounded-none h-12 px-12 uppercase tracking-[0.2em] text-xs">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
