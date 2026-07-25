import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';
import { getBestSellers } from '../data/products';
import { useCart } from '../context/CartContext';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json'; // Will add a dummy or handle missing config

const Home = () => {
  const containerRef = useRef(null);
  const { addToCart } = useCart();
  const bestSellers = getBestSellers();

  useEffect(() => {
    window.requestAnimationFrame(() => {
      setTimeout(() => {
        try {
          if (strkImgConfig && containerRef.current) {
            ImageHelper.loadImages(strkImgConfig, containerRef.current);
          }
        } catch (e) {}
      }, 0);
    });
  }, []);

  return (
    <div ref={containerRef} className="bg-background">
      {/* 1 & 2. Full-bleed Hero */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          data-strk-bg-id="hero-bg-velmora"
          data-strk-bg="[hero-title] [hero-subtitle] close-up warm-lit gold jewelry model editorial"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1611085583191-a3b181a88401?q=80&w=2000')", // Fallback
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-velmora-ink/30" />
        </div>
        
        <div className="relative z-10 text-center text-white px-6 mt-16 max-w-3xl mx-auto">
          <h1 id="hero-title" className="text-5xl md:text-6xl lg:text-7xl mb-6 text-white leading-tight font-light drop-shadow-md">
            Crafted to be Treasured
          </h1>
          <p id="hero-subtitle" className="font-sans text-lg md:text-xl tracking-wide mb-10 text-white/90 drop-shadow">
            Demi-fine gold jewelry for the modern romantic.
          </p>
          <Link 
            to="/shop" 
            className="inline-block bg-background text-foreground px-10 py-4 tracking-[0.2em] text-sm uppercase hover:bg-velmora-gold hover:text-white transition-all duration-300"
          >
            Shop the Collection
          </Link>
        </div>
      </section>

      {/* 3. Trust Bar */}
      <section className="bg-velmora-sand/30 border-b border-border py-4">
        <div className="max-w-7xl mx-auto px-4 overflow-x-auto hide-scrollbar">
          <div className="flex justify-between items-center min-w-max space-x-8 lg:space-x-4 text-xs tracking-widest uppercase text-muted-foreground whitespace-nowrap px-4">
            <span className="flex items-center gap-2"><span className="w-1 h-1 bg-velmora-gold rounded-full"></span> Free Worldwide Shipping</span>
            <span className="flex items-center gap-2"><span className="w-1 h-1 bg-velmora-gold rounded-full"></span> 30-Day Returns</span>
            <span className="flex items-center gap-2"><span className="w-1 h-1 bg-velmora-gold rounded-full"></span> 18K Gold Plated</span>
            <span className="flex items-center gap-2"><span className="w-1 h-1 bg-velmora-gold rounded-full"></span> Hypoallergenic</span>
          </div>
        </div>
      </section>

      {/* 4. Bestsellers Product Grid */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <h2 id="bestsellers-title" className="text-3xl md:text-4xl">Featured Pieces</h2>
          <Link to="/shop" className="hidden md:flex items-center gap-2 text-sm tracking-widest uppercase hover:text-velmora-gold transition-colors pb-1 border-b border-foreground hover:border-velmora-gold">
            Shop All <ArrowRight size={16} />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {bestSellers.map((product) => (
            <div key={product.id} className="group flex flex-col relative">
              <Link to={`/product/${product.id}`} className="block relative aspect-[4/5] bg-secondary overflow-hidden mb-4">
                <img 
                  data-strk-img-id={product.bestsellerImg}
                  data-strk-img={`[bestseller-title-${product.id}] gold jewelry`}
                  data-strk-img-ratio="4x5"
                  data-strk-img-width="600"
                  src={"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  alt={product.name}
                  style={{
                    // Fallbacks for dev without img plugin
                    backgroundImage: `url('https://images.unsplash.com/photo-1611085583191-a3b181a88401?q=80&w=600')`,
                    backgroundSize: 'cover'
                  }}
                />
                {/* Second/Hover Image mechanism - mock implementation via opacity */}
                <div 
                   className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-black/10"
                   style={{
                      backgroundImage: `url('https://images.unsplash.com/photo-1611085583191-a3b181a88401?auto=format&fit=crop&q=80&w=600')`,
                      backgroundSize: 'cover'
                   }}
                />
              </Link>
              
              <div className="flex flex-col flex-1">
                <Link to={`/product/${product.id}`}>
                  <h3 id={`bestseller-title-${product.id}`} className="text-sm font-medium tracking-wide uppercase mb-1">{product.name}</h3>
                </Link>
                <div className="flex justify-between items-center mt-auto pt-2">
                  <span className="text-velmora-charcoal">${product.price}</span>
                  <button 
                    onClick={() => addToCart(product)}
                    className="text-xs tracking-widest uppercase border border-border px-3 py-1.5 hover:bg-foreground hover:text-background hover:border-foreground transition-all"
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. UGC Reels Row */}
      <section className="py-12 bg-velmora-sand/20 overflow-hidden">
        <h2 id="ugc-title" className="text-center text-2xl mb-10 tracking-widest uppercase font-sans text-xs">As seen on you</h2>
        <div className="flex overflow-x-auto hide-scrollbar gap-4 px-6 pb-8 -mx-6 md:mx-0 snap-x">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="relative shrink-0 w-64 h-[28rem] rounded-md overflow-hidden snap-center group cursor-pointer">
              <img 
                data-strk-img-id={`ugc-img-${i}`}
                data-strk-img="vertical woman wearing gold jewelry lifestyle instagram reel"
                data-strk-img-ratio="9x16"
                data-strk-img-width="400"
                src={"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                alt="Jewelry on model"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1543294001-f7cd5d7fb516?auto=format&fit=crop&q=80&w=400')`,
                  backgroundSize: 'cover'
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-velmora-ink/80 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="font-serif text-lg leading-snug">"The perfect layering piece for every day."</p>
                <p className="text-xs tracking-widest uppercase mt-3 text-white/70">@velmorastyle</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Shop by Category */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
          {[
            { id: "cat-earrings", title: "Earrings", q: "gold statement drop earrings" },
            { id: "cat-necklaces", title: "Necklaces", q: "layered gold necklaces pendant" },
            { id: "cat-huggies", title: "Huggies", q: "small gold hoop huggie earrings ear" }
          ].map((cat) => (
            <Link key={cat.id} to="/shop" className="group relative aspect-[3/4] overflow-hidden bg-secondary flex items-center justify-center">
              <img 
                data-strk-img-id={cat.id}
                data-strk-img={cat.q}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src={"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                alt={cat.title}
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80&w=800')`,
                  backgroundSize: 'cover'
                }}
              />
              <div className="absolute inset-0 bg-velmora-ink/20 transition-opacity duration-300 group-hover:bg-velmora-ink/10" />
              <h3 className="relative z-10 font-serif text-4xl text-white drop-shadow-md pb-2 border-b border-transparent group-hover:border-white transition-all duration-300">
                {cat.title}
              </h3>
            </Link>
          ))}
        </div>
      </section>

      {/* 7. Brand Story Split */}
      <section className="py-0 flex flex-col lg:flex-row bg-background border-y border-border">
        <div className="w-full lg:w-1/2 aspect-square lg:aspect-auto">
          <img 
            data-strk-img-id="brand-story-img"
            data-strk-img="jewelry artisan drawing crafting gold warm studio"
            data-strk-img-ratio="1x1"
            data-strk-img-width="1000"
            src={"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"}
            className="w-full h-full object-cover"
            alt="Crafting Velmora Jewelry"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?auto=format&fit=crop&q=80&w=1000')`,
              backgroundSize: 'cover'
            }}
          />
        </div>
        <div className="w-full lg:w-1/2 flex items-center justify-center p-12 lg:p-24 bg-velmora-bone">
          <div className="max-w-md">
            <h2 className="font-serif text-3xl lg:text-4xl mb-8 leading-tight">Elevating the Everyday.</h2>
            <div className="space-y-6 text-muted-foreground font-light leading-relaxed">
              <p>
                Velmora was born from a desire for jewelry that feels simultaneously timeless and completely of the moment. We believe luxury shouldn't be reserved for special occasions.
              </p>
              <p>
                Each piece is carefully sculpted and 18K gold-plated over hypoallergenic materials, creating accessible demi-fine jewelry designed to keep its luster life's daily moments.
              </p>
            </div>
            <Link to="#" className="inline-flex items-center gap-2 mt-10 tracking-widest uppercase text-sm border-b border-foreground pb-1 hover:text-velmora-gold hover:border-velmora-gold transition-colors">
              Our Story <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 8. Testimonials */}
      <section className="py-24 px-6 max-w-7xl mx-auto text-center">
        <h2 className="text-sm font-sans tracking-widest uppercase mb-16 text-muted-foreground">Words from our muses</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { text: "The quality is simply unmatched. The gold has a beautiful, rich tone that doesn't look cheap at all. I haven't taken my huggies off since they arrived.", name: "Eleanor T." },
            { text: "I bought the Heirloom set for my sister's birthday and had to order one for myself. Minimalist, elegant, and the packaging was a stunning experience.", name: "Sarah J." },
            { text: "Finally found necklaces that I can layer without them tarnishing after a week. Velmora is my new go-to for gifting.", name: "Marie L." }
          ].map((review, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="flex text-velmora-gold mb-6">
                {[...Array(5)].map((_, j) => <Star key={j} size={16} fill="currentColor" />)}
              </div>
              <p className="font-serif text-xl italic leading-relaxed mb-6 text-velmora-charcoal">"{review.text}"</p>
              <p className="text-sm tracking-widest uppercase text-muted-foreground">— {review.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 9. Newsletter */}
      <section className="bg-velmora-sand/40 py-24 px-6 border-t border-border">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="font-serif text-3xl mb-4">Join the Inner Circle</h2>
          <p className="text-muted-foreground mb-10 font-light">Subscribe for early access to new collections, exclusive events, and 10% off your first order.</p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" onSubmit={e => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Email address" 
              className="flex-1 bg-transparent border-b border-velmora-ink/30 px-4 py-3 focus:outline-none focus:border-velmora-ink transition-colors placeholder:text-muted-foreground"
              required
            />
            <button type="submit" className="bg-foreground text-background px-8 py-3 tracking-widest text-sm uppercase hover:bg-velmora-gold transition-colors whitespace-nowrap">
              Subscribe
            </button>
          </form>
        </div>
      </section>

    </div>
  );
};

export default Home;
