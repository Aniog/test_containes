import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Instagram } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../strk-img-config.json';
import { products } from '../api/products';
import { useCart } from '../context/CartContext';
import { Button } from '../components/ui/button';

const Home = () => {
  const containerRef = useRef(null);
  const { addToCart } = useCart();

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const bestsellers = products.slice(0, 5);

  const categories = [
    { name: 'Earrings', imageId: 'cat-earrings' },
    { name: 'Necklaces', imageId: 'cat-necklaces' },
    { name: 'Huggies', imageId: 'cat-huggies' },
  ];

  const ugcPosts = [
    { id: 1, caption: 'Golden hues on a sunny morning.' },
    { id: 2, caption: 'The perfect layering piece.' },
    { id: 3, caption: 'Details that matter.' },
    { id: 4, caption: 'A touch of luxury for the everyday.' },
    { id: 5, caption: 'Crafted to be treasured.' },
  ];

  return (
    <div ref={containerRef} className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center overflow-hidden text-cream">
        <div className="absolute inset-0 z-0 scale-105">
          <img
            className="w-full h-full object-cover"
            data-strk-img-id="hero-bg"
            data-strk-img="[hero-headline] [hero-subheadline] gold jewelry model editorial portrait warm lighting"
            data-strk-img-ratio="16x9"
            data-strk-img-width="1920"
            src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
            alt="Velmora Hero"
          />
          <div className="absolute inset-0 bg-charcoal/30 z-10" />
        </div>

        <div className="relative z-20 px-6 max-w-4xl animate-fade-in-up">
          <h1 id="hero-headline" className="text-5xl md:text-7xl lg:text-8xl font-serif text-cream mb-6 tracking-tight">
            Crafted to be Treasured
          </h1>
          <p id="hero-subheadline" className="text-cream/90 text-lg md:text-xl font-light tracking-[0.1em] mb-10 max-w-2xl mx-auto uppercase">
            Meaningful pieces designed for life's golden moments.
          </p>
          <Link to="/shop">
            <Button size="lg" className="rounded-none px-12 h-14 bg-cream text-charcoal hover:bg-gold hover:text-white transition-all uppercase tracking-[0.2em] text-sm">
              Shop the Collection
            </Button>
          </Link>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-charcoal text-cream/70 py-4 border-y border-white/10 overflow-x-auto whitespace-nowrap scrollbar-hide">
        <div className="flex justify-center items-center space-x-12 px-6 min-w-max md:w-full">
          {['Free Worldwide Shipping', '30-Day Returns', '18K Gold Plated', 'Hypoallergenic'].map((text) => (
            <div key={text} className="flex items-center text-[10px] md:text-xs uppercase tracking-[0.2em]">
              <span className="w-1 h-1 bg-gold rounded-full mr-3 opacity-50" />
              {text}
            </div>
          ))}
        </div>
      </section>

      {/* Bestsellers Product Grid */}
      <section className="py-24 px-6 md:px-12 max-w-screen-2xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-serif mb-4 leading-tight">Featured Bestsellers</h2>
            <p className="text-charcoal/60 font-light tracking-wide uppercase text-sm">The most-loved pieces from our latest collection.</p>
          </div>
          <Link to="/shop" className="group flex items-center space-x-3 text-sm uppercase tracking-widest text-charcoal hover:text-gold transition-colors pb-1 border-b border-charcoal/20">
            <span>View All Products</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-12">
          {bestsellers.map((product) => (
            <div key={product.id} className="group flex flex-col">
              <Link to={`/product/${product.id}`} className="relative aspect-[3/4] overflow-hidden bg-taupe/10 mb-6">
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  data-strk-bg-id={`product-${product.id}-main`}
                  data-strk-bg={`[product-${product.id}-name] jewelry gold backdrop shot`}
                  data-strk-bg-ratio="3x4"
                  data-strk-bg-width="600"
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-cover bg-center"
                  data-strk-bg-id={`product-${product.id}-hover`}
                  data-strk-bg={`[product-${product.id}-name] on model editorial`}
                  data-strk-bg-ratio="3x4"
                  data-strk-bg-width="600"
                />
                <button
                   onClick={(e) => {
                     e.preventDefault();
                     addToCart(product);
                   }}
                   className="absolute bottom-0 left-0 w-full h-12 bg-white/95 backdrop-blur-sm text-charcoal text-[10px] uppercase font-bold tracking-[0.2em] transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 hover:bg-gold hover:text-white"
                >
                  Quick Add
                </button>
              </Link>
              <Link to={`/product/${product.id}`} className="text-center">
                <h3 id={`product-${product.id}-name`} className="font-serif uppercase text-sm tracking-widest mb-1 group-hover:text-gold transition-colors">
                  {product.name}
                </h3>
                <p className="text-sm font-light text-charcoal/60">${product.price}</p>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Reel-style UGC Row */}
      <section className="py-24 bg-charcoal text-white overflow-hidden">
        <div className="px-6 md:px-12 max-w-screen-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-center mb-2 italic">Velmora Muse</h2>
          <p className="text-center text-white/40 uppercase tracking-[0.2em] text-xs">As seen on you.</p>
        </div>

        <div className="flex overflow-x-auto scrollbar-hide gap-4 px-6 md:px-12">
          {ugcPosts.map((post) => (
            <div key={post.id} className="relative min-w-[280px] md:min-w-[320px] aspect-[9/16] overflow-hidden group">
              <div
                 className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                 data-strk-bg-id={`ugc-${post.id}`}
                 data-strk-bg="jewelry portrait aesthetic mirror selfie"
                 data-strk-bg-ratio="9x16"
                 data-strk-bg-width="400"
              />
              <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-sm font-serif italic text-white/90 leading-relaxed">
                  "{post.caption}"
                </p>
                <div className="flex items-center space-x-2 mt-4 text-[10px] uppercase tracking-widest text-white/50">
                   <Instagram className="w-3 h-3" />
                   <span>@velmora_jewelry</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Shop by Category Tiles */}
      <section className="py-24 px-6 md:px-12 max-w-screen-2xl mx-auto">
        <h2 className="text-4xl font-serif text-center mb-16">Store Favorites</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat) => (
            <Link key={cat.name} to="/shop" className="relative aspect-[4/5] md:aspect-[3/4] overflow-hidden group">
               <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                  data-strk-bg-id={cat.imageId}
                  data-strk-bg={`${cat.name} jewelry gold close up`}
                  data-strk-bg-ratio="3x4"
                  data-strk-bg-width="800"
               />
               <div className="absolute inset-0 bg-charcoal/20 transition-colors group-hover:bg-charcoal/40" />
               <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
                  <h3 className="text-3xl font-serif mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{cat.name}</h3>
                  <div className="w-12 h-[1px] bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                  <span className="mt-4 text-[10px] uppercase tracking-[0.3em] opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">Explore Collection</span>
               </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Brand Story Split Section */}
      <section className="bg-cream">
        <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 aspect-square md:aspect-auto overflow-hidden">
             <div
                className="w-full h-full bg-cover bg-center"
                data-strk-bg-id="brand-story-img"
                data-strk-bg="fine jewelry designer studio aesthetic workspace tools"
                data-strk-bg-ratio="1x1"
                data-strk-bg-width="1200"
             />
          </div>
          <div className="w-full md:w-1/2 p-12 md:p-24 flex flex-col justify-center items-start">
             <h4 className="text-gold uppercase tracking-[0.3em] text-xs mb-6">Our Philosophy</h4>
             <h2 id="story-title" className="text-4xl md:text-6xl font-serif mb-8 leading-tight">Quiet luxury, crafted for the modern woman.</h2>
             <p className="text-charcoal/70 font-light leading-relaxed mb-10 size-lg">
                At Velmora, we believe that fine jewelry should be a part of your daily ritual, not just reserved for special occasions. Our pieces are crafted from 18K gold vermeil and ethically sourced stones to ensure durability and lasting brilliance.
             </p>
             <Link to="/about">
               <Button variant="outline" className="rounded-none border-charcoal/20 px-10 h-12 uppercase tracking-[0.2em] text-xs hover:bg-charcoal hover:text-white transition-all">
                 Read Our Story
               </Button>
             </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 px-6 md:px-12 bg-white text-charcoal overflow-hidden relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 text-[15rem] md:text-[20rem] font-serif text-charcoal/[0.03] pointer-events-none select-none -translate-y-1/2">
          "
        </div>
        <div className="max-w-screen-xl mx-auto text-center relative z-10">
          <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-24">
            {[
              { text: "Absolutely stunning pieces. The weight and shine feel so premium for the price.", author: "Sophia R." },
              { text: "The perfect everyday huggies. I haven't taken them off in three weeks!", author: "Isabella K." },
              { text: "Fast shipping and the packaging is editorial-worthy. A perfect gift.", author: "Elena M." }
            ].map((item, idx) => (
              <div key={idx} className="max-w-xs flex flex-col items-center">
                <div className="flex text-gold mb-6">
                   {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-xl font-serif italic mb-8 leading-relaxed">"{item.text}"</p>
                <p className="text-xs uppercase tracking-[0.2em] font-medium">— {item.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Capture */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-4xl mx-auto bg-charcoal text-white p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full -mr-32 -mt-32 blur-3xl" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-serif mb-6 tracking-wide">Join the Inner Circle</h2>
            <p className="text-white/60 mb-10 max-w-lg mx-auto font-light tracking-wide italic">Receive 10% off your first order and stay updated on our latest collections.</p>
            <form className="flex flex-col md:flex-row gap-4 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
               <input
                 type="email"
                 placeholder="your@email.com"
                 className="flex-grow bg-white/5 border border-white/20 px-6 h-14 text-white focus:outline-none focus:border-gold transition-colors font-light"
               />
               <button className="h-14 bg-white text-charcoal px-10 uppercase tracking-[0.2em] text-xs font-bold hover:bg-gold hover:text-white transition-all whitespace-nowrap">
                 Sign Up
               </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
