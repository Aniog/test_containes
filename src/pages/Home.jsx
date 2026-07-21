import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import productsData from '../data.json';
import { useCart } from '../context/CartContext.jsx';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../strk-img-config.json';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  const containerRef = useRef(null);
  const { addToCart } = useCart();
  const bestsellers = productsData.products.slice(0, 5);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center text-center text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div 
            className="w-full h-full bg-black/20 absolute inset-0 z-10" 
            data-strk-bg-id="hero-bg-overlay"
            data-strk-bg="[hero-subhead]"
            data-strk-bg-ratio="16x9"
            data-strk-bg-width="1920"
          />
          <div 
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            data-strk-bg-id="hero-bg-image"
            data-strk-bg="[hero-subhead] [hero-title] warm-lit close-up of gold jewelry on a model"
            data-strk-bg-ratio="16x9"
            data-strk-bg-width="1920"
          />
        </div>
        
        <div className="relative z-20 px-4 max-w-3xl mx-auto mt-16">
          <h1 id="hero-title" className="text-5xl md:text-7xl font-serif mb-6 leading-tight">
            Crafted to be Treasured
          </h1>
          <p id="hero-subhead" className="text-lg md:text-xl font-sans mb-10 max-w-xl mx-auto font-light tracking-wide">
            Discover our collection of premium demi-fine gold jewelry, designed for your everyday moments.
          </p>
          <Link 
            to="/shop" 
            className="inline-block bg-white text-foreground px-8 py-4 uppercase tracking-[0.15em] text-sm font-medium hover:bg-white/90 transition-colors"
          >
            Shop the Collection
          </Link>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="bg-primary text-primary-foreground py-3 border-y border-border/20">
        <div className="container mx-auto">
          <ul className="flex flex-wrap justify-center items-center gap-x-8 gap-y-2 text-xs md:text-sm tracking-widest uppercase font-medium">
             <li>Free Worldwide Shipping</li>
             <li className="hidden sm:block opacity-50">&middot;</li>
             <li>30-Day Returns</li>
             <li className="hidden sm:block opacity-50">&middot;</li>
             <li>18K Gold Plated</li>
             <li className="hidden sm:block opacity-50">&middot;</li>
             <li>Hypoallergenic</li>
          </ul>
        </div>
      </div>

      {/* Best Sellers */}
      <section className="py-24 px-4 lg:px-8 container mx-auto">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-3xl md:text-4xl font-serif">Bestsellers</h2>
          <Link to="/shop" className="text-sm tracking-widest uppercase pb-1 border-b border-foreground hover:opacity-70 transition-opacity hidden md:block">
            Shop All
          </Link>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
          {bestsellers.map((product) => (
            <div key={product.id} className="group flex flex-col">
              <Link to={`/product/${product.id}`} className="relative aspect-[3/4] mb-4 bg-muted overflow-hidden flex-shrink-0 block">
                 <img 
                    src={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E`}
                    data-strk-img-id={product.imageHome || product.image}
                    data-strk-img={product.imageQuery}
                    data-strk-img-ratio="2x3"
                    data-strk-img-width="400"
                    alt={product.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                 />
                 <button 
                  onClick={(e) => {
                    e.preventDefault();
                    addToCart(product);
                  }}
                  className="absolute bottom-4 left-4 right-4 bg-background/95 backdrop-blur text-foreground py-3 text-xs uppercase tracking-widest font-medium translate-y-[150%] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 pointer-events-auto shadow-sm"
                 >
                   Quick Add - ${product.price}
                 </button>
              </Link>
              <div className="flex flex-col flex-1">
                <Link to={`/product/${product.id}`} className="block flex-1">
                   <h3 className="text-sm font-serif mb-1 uppercase tracking-wide" id={`bs-name-${product.id}`}>{product.name}</h3>
                   <p className="text-muted-foreground text-sm font-light">${product.price}</p>
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center md:hidden">
            <Link to="/shop" className="text-sm tracking-widest uppercase pb-1 border-b border-foreground">
              Shop All Bestsellers
            </Link>
        </div>
      </section>

      {/* UGC / Editorial Reel */}
      <section className="py-16 bg-muted/30 overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 mb-10 text-center">
            <h2 className="text-2xl md:text-3xl font-serif">As Seen On You</h2>
            <p className="text-muted-foreground mt-2 font-sans font-light">@velmorajewelry</p>
        </div>
        
        {/* Horizontal scroll container */}
        <div className="flex gap-4 overflow-x-auto pb-8 px-4 lg:px-8 snap-x snap-mandatory hide-scrollbar" style={{ scrollbarWidth: 'none' }}>
           {[
             {id: "ugc-1", caption: "The perfect everyday pieces. Haven't taken them off."},
             {id: "ugc-2", caption: "Obsessed with this new necklace."},
             {id: "ugc-3", caption: "Gold huggies that actually stay in!"},
             {id: "ugc-4", caption: "My current ear stack courtesy of Velmora."},
             {id: "ugc-5", caption: "Quality is 10/10."},
             {id: "ugc-6", caption: "The only jewelry I travel with."}
           ].map((ugc) => (
              <div key={ugc.id} className="relative aspect-[9/16] w-64 sm:w-72 flex-shrink-0 snap-center bg-muted">
                <img 
                  src={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E`}
                  data-strk-img-id={ugc.id}
                  data-strk-img="influencer wearing minimalist gold jewelry close up instagram style"
                  data-strk-img-ratio="9x16"
                  data-strk-img-width="400"
                  alt="Customer wearing Velmora"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent p-6 flex flex-col justify-end text-white">
                  <p className="font-serif italic text-lg leading-snug">"{ugc.caption}"</p>
                </div>
             </div>
           ))}
        </div>
      </section>

      {/* Category Tiles */}
      <section className="py-24 container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {[
            { tag: "Necklaces", title: "Layered Perfection", imgId: "cat-necklaces", sub: "Shop Necklaces", query: "gold necklace on model editorial close up" },
            { tag: "Earrings", title: "Statement Makers", imgId: "cat-earrings", sub: "Shop Earrings", query: "gold statement earrings on model profile" },
            { tag: "Huggies", title: "Everyday Essentials", imgId: "cat-huggies", sub: "Shop Huggies", query: "gold huggie earrings close up ear" }
          ].map((cat) => (
            <Link to={`/shop?category=${cat.tag}`} key={cat.tag} className="group relative aspect-square sm:aspect-[4/5] overflow-hidden bg-muted block">
               <img 
                  src={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E`}
                  data-strk-img-id={cat.imgId}
                  data-strk-img={cat.query}
                  data-strk-img-ratio="4x5"
                  data-strk-img-width="600"
                  alt={cat.tag}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
               />
               <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
               <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                 <p className="text-xs tracking-widest uppercase mb-2 font-medium opacity-80">{cat.tag}</p>
                 <h2 className="text-3xl font-serif mb-4 flex items-center justify-between">
                    {cat.title}
                    <ArrowRight className="w-6 h-6 transform translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300" />
                 </h2>
               </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Brand Story */}
      <section className="bg-secondary text-secondary-foreground">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 aspect-square md:aspect-auto relative bg-muted">
               <img 
                  src={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E`}
                  data-strk-img-id="brand-story-img-main"
                  data-strk-img="jewelry designer working in studio aesthetic warm light"
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="800"
                  alt="Velmora Studio"
                  className="absolute inset-0 w-full h-full object-cover"
               />
            </div>
            <div className="md:w-1/2 p-12 md:p-20 lg:p-32 flex flex-col justify-center">
              <h2 className="text-sm tracking-widest uppercase font-medium mb-6">Our Story</h2>
              <p className="font-serif text-3xl md:text-4xl lg:text-5xl leading-tight mb-8">
                Designed to be worn, lived in, and loved.
              </p>
              <p className="font-sans font-light text-muted-foreground leading-relaxed mb-10 text-lg">
                Velmora was born from the desire to create demi-fine jewelry that bridges the gap between fast fashion and out-of-reach luxury. We believe in pieces that feel as good as they look.
              </p>
              <Link to="/about" className="inline-flex items-center gap-3 text-sm uppercase tracking-widest font-medium hover:opacity-70 transition-opacity w-fit">
                Discover Velmora <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 container mx-auto px-4 max-w-4xl text-center">
        <h2 className="text-3xl lg:text-4xl font-serif mb-4">Join the Inner Circle</h2>
        <p className="text-muted-foreground mb-10 font-light">Sign up to receive 10% off your first order, plus early access to new collections.</p>
        <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
           <input 
             type="email" 
             placeholder="Your email address" 
             required
             className="flex-1 bg-transparent border-b border-border py-3 px-4 focus:outline-none focus:border-foreground transition-colors placeholder:text-muted-foreground/50 rounded-none"
           />
           <button type="submit" className="bg-foreground text-background px-8 py-3 uppercase tracking-widest text-sm font-medium hover:bg-foreground/90 transition-colors whitespace-nowrap">
             Subscribe
           </button>
        </form>
      </section>
    </div>
  );
}