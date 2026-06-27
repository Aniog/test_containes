import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useCart } from '../lib/CartContext';
import { toast } from 'sonner';
import { DataClient, API } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../strk-img-config.json';
import { Star, ArrowRight, Instagram } from 'lucide-react';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const Home = () => {
  const containerRef = useRef(null);
  const { addToCart } = useCart();
  const [bestsellers, setBestsellers] = useState([]);

  useEffect(() => {
    const fetchBestsellers = async () => {
      try {
        const { data: response } = await client
          .from('Products')
          .select('*')
          .eq('bestseller', true)
          .limit(5);
        
        if (response?.data?.list) {
          setBestsellers(response.data.list);
        }
      } catch (e) {
        console.error('Failed to fetch bestsellers', e);
      }
    };
    fetchBestsellers();
  }, []);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [bestsellers]);

  const categories = [
    { title: 'Earrings', id: 'cat-earrings' },
    { title: 'Necklaces', id: 'cat-necklaces' },
    { title: 'Huggies', id: 'cat-huggies' }
  ];

  const ugc = [
    { id: '1', title: 'Amber Lace on Sarah' },
    { id: '2', title: 'Golden Sphere close up' },
    { id: '3', title: 'Flora Nectar layered' },
    { id: '4', title: 'Vivid Aura stacking' }
  ];

  const testimonials = [
    { name: 'Elena R.', text: 'Absolutely love the quality. The gold plating is rich and has not tarnished after months of wear.' },
    { name: 'Sophia M.', text: 'Fast shipping and beautiful packaging. It felt like a true luxury experience.' },
    { name: 'Isabella G.', text: 'The huggies are my new everyday staple. So comfortable and effortlessly chic.' }
  ];

  return (
    <div ref={containerRef} className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[90vh] md:h-screen min-h-[600px] flex items-center justify-center -mt-20">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          data-strk-bg-id="hero-bg"
          data-strk-bg="[hero-title] close-up gold jewelry elegant model"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        />
        <div className="absolute inset-0 bg-black/30" />
        
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            id="hero-title"
            className="text-white text-5xl md:text-7xl font-serif tracking-wide leading-tight mb-6"
          >
            Crafted to be Treasured
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-white/90 font-sans text-xs md:text-sm tracking-[0.3em] uppercase mb-10"
          >
            Demi-fine gold jewelry for the modern woman
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <Link 
              to="/shop" 
              className="px-10 py-4 bg-brand-gold text-white font-sans text-xs tracking-widest uppercase hover:bg-brand-gold/90 transition-all rounded-sm inline-block"
            >
              Shop the Collection
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="bg-brand-cream py-4 border-b border-black/5">
        <div className="max-w-7xl mx-auto px-6 overflow-x-auto">
          <div className="flex justify-between items-center min-w-[600px] space-x-12 text-[10px] md:text-xs font-sans tracking-[0.2em] uppercase text-brand-slate whitespace-nowrap">
            <span>Free Worldwide Shipping</span>
            <span>30-Day Returns</span>
            <span>18K Gold Plated</span>
            <span>Hypoallergenic</span>
          </div>
        </div>
      </div>

      {/* Bestsellers */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 id="bestsellers-title" className="text-3xl md:text-4xl font-serif tracking-wide mb-2">Bestsellers</h2>
            <div className="w-12 h-px bg-brand-gold" />
          </div>
          <Link to="/shop" className="text-xs font-sans tracking-widest uppercase underline hover:text-brand-gold transition-colors">
            View All
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
          {bestsellers.map((product) => (
            <div key={product.id} className="group flex flex-col">
              <Link to={`/product/${product.id}`} className="relative aspect-[3/4] bg-brand-cream overflow-hidden mb-6">
                <img 
                  data-strk-img-id={`bestseller-img-${product.id}`}
                  data-strk-img={`[product-title-${product.id}] [bestsellers-title] gold jewelry`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.data.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <button 
                    onClick={(e) => {
                      e.preventDefault();
                      addToCart({
                        id: product.id,
                        name: product.data.name,
                        price: product.data.price,
                        category: product.data.category
                      });
                      toast.success(`${product.data.name} added to bag`, {
                        description: "Elegantly added to your collection."
                      });
                    }}
                    className="w-full py-3 bg-white/90 backdrop-blur-sm text-brand-ebony text-[10px] tracking-widest uppercase font-sans font-semibold hover:bg-brand-ebony hover:text-white transition-colors"
                  >
                    Quick Add
                  </button>
                </div>
              </Link>
              <h3 id={`product-title-${product.id}`} className="text-xs font-serif tracking-[0.15em] uppercase font-medium mb-1">
                {product.data.name}
              </h3>
              <p className="text-xs font-sans text-brand-slate tracking-wide">
                ${product.data.price}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* UGC Strip */}
      <section className="bg-brand-ebony py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-12 flex items-center space-x-3">
          <Instagram className="text-white" size={20} />
          <h2 className="text-white font-serif text-xl tracking-widest font-light">#InVelmora</h2>
        </div>
        <div className="flex space-x-4 px-6 md:px-12 animate-scroll-x hover:pause-animation">
          {[...ugc, ...ugc].map((item, idx) => (
            <div key={`${item.id}-${idx}`} className="relative w-64 md:w-80 aspect-[9/16] flex-shrink-0 bg-brand-slate/20">
              <img 
                data-strk-img-id={`ugc-img-${item.id}-${idx}`}
                data-strk-img={`[ugc-cap-${item.id}-${idx}] gold jewelry worn by woman`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={item.title}
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute bottom-6 left-6 right-6">
                <p id={`ugc-cap-${item.id}-${idx}`} className="text-white font-serif text-lg leading-snug drop-shadow-lg">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Shop By Category */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <h2 className="text-3xl font-serif text-center mb-16 tracking-wide underline underline-offset-8 decoration-brand-gold/30">Shop by Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat) => (
            <Link to={`/shop?category=${cat.title}`} key={cat.id} className="relative group aspect-square overflow-hidden bg-brand-cream">
              <img 
                data-strk-img-id={`cat-img-${cat.id}`}
                data-strk-img={`[cat-title-${cat.id}] gold jewelry editorial close up`}
                data-strk-img-ratio="1x1"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 id={`cat-title-${cat.id}`} className="text-white text-3xl font-serif tracking-widest uppercase drop-shadow-md group-hover:translate-y-[-4px] transition-transform duration-500">
                  {cat.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-24 bg-brand-cream border-y border-black/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2 aspect-[4/5] bg-brand-slate/10 relative overflow-hidden">
            <img 
              data-strk-img-id="story-img"
              data-strk-img="jewelry artisan workshop elegant hands gold"
              data-strk-img-ratio="4x5"
              data-strk-img-width="1000"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Our Story"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full md:w-1/2 max-w-xl text-center md:text-left">
            <h2 id="story-title" className="text-4xl md:text-5xl font-serif mb-8 leading-tight">Modern Luxury, Consciously Created.</h2>
            <p className="text-brand-slate font-sans leading-relaxed mb-10 text-pretty">
              VELMORA was born from a desire for jewelry that balances high-end design with ethical accessibility. Each piece is a testament to the quiet strength of fine materials, designed to accompany you through every moment—big or small.
            </p>
            <Link to="/" className="inline-flex items-center space-x-2 text-xs font-sans tracking-[0.2em] uppercase font-bold border-b border-brand-ebony pb-2 hover:text-brand-gold hover:border-brand-gold transition-all">
              <span>Read Our Story</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 max-w-5xl mx-auto px-6 text-center">
        <div className="flex justify-center space-x-1 text-brand-gold mb-8">
          {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="currentColor" />)}
        </div>
        <div className="relative">
          <div className="text-2xl md:text-3xl font-serif italic mb-12 px-10">
            {testimonials[0].text}
          </div>
          <p className="text-xs font-sans tracking-widest uppercase font-semibold">— {testimonials[0].name}</p>
        </div>
        <div className="flex justify-center space-x-4 mt-12">
          {testimonials.map((_, i) => (
            <span key={i} className={`w-1.5 h-1.5 rounded-full ${i === 0 ? 'bg-brand-ebony' : 'bg-black/10'}`} />
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-brand-ebony text-white text-center">
        <div className="max-w-xl mx-auto px-6">
          <h2 className="text-3xl font-serif mb-4">Join the Club</h2>
          <p className="text-white/60 font-sans text-xs tracking-widest uppercase mb-10">Subscribe for early access and 10% off your first order.</p>
          <form className="flex flex-col md:flex-row gap-4" onSubmit={e => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="YOUR EMAIL" 
              className="flex-1 bg-transparent border border-white/20 px-6 py-4 text-xs font-sans tracking-widest outline-none focus:border-brand-gold transition-colors"
            />
            <button className="bg-white text-brand-ebony px-10 py-4 text-xs font-sans font-bold tracking-[0.2em] uppercase hover:bg-brand-gold hover:text-white transition-all">
              Join
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;
