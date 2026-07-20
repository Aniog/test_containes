import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { seedProducts } from '../data/products';
import { ArrowRight, Star } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../strk-img-config.json';

export default function Home() {
  const { addItem } = useCart();
  const bestsellers = seedProducts.slice(0, 4);
  const containerRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div className="w-full -mt-[100px]" ref={containerRef}>
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] w-full flex items-center justify-center overflow-hidden pt-[100px]">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center"
          data-strk-bg-id="hero-bg"
          data-strk-bg="[hero-title] [hero-desc]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="2000"
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4 flex flex-col items-center mt-32">
          <h1 id="hero-title" className="text-5xl md:text-7xl font-serif mb-6 leading-tight max-w-3xl">Crafted to be Treasured</h1>
          <p id="hero-desc" className="text-lg md:text-xl mb-8 max-w-xl font-light tracking-wide">
            Demi-fine jewelry for the modern romantic. Meticulously designed for your everyday and forever.
          </p>
          <Link 
            to="/collections" 
            className="bg-accent text-accent-foreground px-10 py-4 uppercase tracking-widest text-sm font-medium hover:bg-accent/90 transition-colors"
          >
            Shop the Collection
          </Link>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="bg-secondary text-secondary-foreground py-4 border-y border-border">
        <div className="container mx-auto px-4 flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm uppercase tracking-wider font-medium text-center">
          <span>Free Worldwide Shipping</span>
          <span className="hidden md:inline">·</span>
          <span>30-Day Returns</span>
          <span className="hidden md:inline">·</span>
          <span>18K Gold Plated</span>
          <span className="hidden md:inline">·</span>
          <span>Hypoallergenic</span>
        </div>
      </div>

      {/* Bestsellers Grid */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 id="bestsellers-title" className="text-4xl font-serif mb-4">Our Bestsellers</h2>
              <p className="text-muted-foreground uppercase tracking-widest text-sm">Most loved pieces</p>
            </div>
            <Link to="/collections" className="hidden md:flex items-center gap-2 hover:text-accent transition-colors uppercase tracking-widest text-sm font-medium">
              Shop All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {bestsellers.map(product => (
              <div key={product.id} className="group cursor-pointer">
                <div className="relative aspect-[3/4] overflow-hidden bg-secondary mb-4">
                  <Link to={`/product/${product.id}`}>
                    <img 
                      data-strk-img-id={`best-${product.id}`}
                      data-strk-img={`[best-${product.id}-name] [bestsellers-title]`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="600"
                      src={product.image} 
                      alt={product.name}
                      className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                    />
                    <img 
                      data-strk-img-id={`best-hover-${product.id}`}
                      data-strk-img={`[best-${product.id}-name] [bestsellers-title]`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="600"
                      src={product.imageHover} 
                      alt={`${product.name} worn`}
                      className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    />
                  </Link>
                  <button 
                    onClick={(e) => { e.preventDefault(); e.stopPropagation(); addItem(product, 1, { tone: 'Gold' }); }}
                    className="absolute bottom-4 left-4 right-4 bg-background/95 backdrop-blur text-foreground py-3 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 uppercase tracking-widest text-xs font-medium"
                  >
                    Quick Add
                  </button>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 id={`best-${product.id}-name`} className="font-serif text-lg mb-1"><Link to={`/product/${product.id}`} className="hover:text-accent transition-colors">{product.name}</Link></h3>
                    <p className="text-muted-foreground text-sm uppercase tracking-wider">{product.material}</p>
                  </div>
                  <span className="font-medium">${product.price}</span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center md:hidden">
            <Link to="/collections" className="inline-flex items-center gap-2 border border-border px-8 py-3 hover:border-foreground transition-colors uppercase tracking-widest text-sm font-medium">
              Shop All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 id="categories-title" className="text-4xl font-serif mb-4">Shop by Category</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
               { id: 'cat-earrings', title: 'Earrings' },
               { id: 'cat-necklaces', title: 'Necklaces' },
               { id: 'cat-huggies', title: 'Huggies' }
            ].map(cat => (
              <Link to={`/collections?category=${cat.title.toLowerCase()}`} key={cat.id} className="relative aspect-[4/5] group overflow-hidden bg-background block">
                <img 
                  data-strk-img-id={cat.id}
                  data-strk-img={`[${cat.id}-title] [categories-title]`}
                  data-strk-img-ratio="4x5"
                  data-strk-img-width="600"
                  src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                  alt={cat.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 id={`${cat.id}-title`} className="bg-background/95 px-8 py-3 font-serif text-2xl tracking-wider select-none text-foreground">{cat.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* UGC / Social Row */}
      <section className="py-20 md:py-32 overflow-hidden bg-background">
        <div className="container mx-auto px-4 md:px-8 mb-12">
           <h2 className="text-4xl font-serif">In The Wild</h2>
           <p className="text-muted-foreground uppercase tracking-widest text-sm mt-4">@velmorajewelry</p>
        </div>
        <div className="flex gap-4 px-4 overflow-x-auto pb-8 snap-x snap-mandatory no-scrollbar">
          {[1,2,3,4,5].map(i => (
             <div key={i} className="relative min-w-[280px] w-[280px] aspect-[9/16] bg-secondary flex-shrink-0 snap-start overflow-hidden group cursor-pointer">
                <img 
                  data-strk-img-id={`ugc-${i}`}
                  data-strk-img="[ugc-title]"
                  data-strk-img-ratio="9x16"
                  data-strk-img-width="400"
                  src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" 
                  className="w-full h-full object-cover" 
                  alt="UGC content" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <p id="ugc-title" className="text-white font-serif text-lg w-full">"Absolutely obsessed with these everyday pieces."</p>
                </div>
             </div>
          ))}
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-20 md:py-32 bg-[#1C1918] text-[#FAF9F6]">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
             <div className="order-2 md:order-1 aspect-[3/4] overflow-hidden">
                <img 
                  data-strk-img-id="brand-story"
                  data-strk-img="[story-title]"
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="800"
                  src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" 
                  alt="Jewelry making context" 
                  className="w-full h-full object-cover" 
                />
             </div>
             <div className="order-1 md:order-2 md:pl-12">
                <h2 id="story-title" className="text-4xl md:text-5xl font-serif mb-8 leading-tight">Elevating<br/>the Everyday.</h2>
                <div className="space-y-6 text-[#E8E4D8]/80 text-lg leading-relaxed font-light mb-10">
                  <p>
                    Velmora was born from a simple belief: fine jewelry shouldn't be reserved for special occasions. We craft pieces that bridge the gap between accessible fashion jewelry and unreachable fine jewelry.
                  </p>
                  <p>
                    Every design is thoughtfully imagined, ethically sourced, and heavily plated in 18k gold over sterling silver or brass, ensuring pieces that resist tarnishing and look beautiful layer after layer.
                  </p>
                </div>
                <Link to="/about" className="inline-flex items-center gap-2 border-b border-[#B89B66] pb-1 font-medium tracking-widest uppercase text-sm text-[#B89B66] hover:bg-[#B89B66] hover:text-[#1C1918] transition-colors leading-none">
                  Read Our Story <ArrowRight className="w-4 h-4" />
                </Link>
             </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                text: "The quality is unmatched for this price point. My huggies haven't left my ears since I bought them.",
                author: "Sarah M."
              },
              {
                text: "I get compliments on my Vivid Aura cuff everywhere I go. It looks like it cost 10x what I paid.",
                author: "Elena R."
              },
              {
                text: "Beautiful packaging, stunning jewelry. Velmora is my new go-to for gifting my bridesmaids.",
                author: "Jessica T."
              }
            ].map((review, i) => (
              <div key={i} className="text-center px-6">
                <div className="flex justify-center gap-1 mb-6 text-accent">
                   {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="font-serif text-xl italic mb-6 leading-relaxed">"{review.text}"</p>
                <p className="uppercase tracking-widest text-xs font-semibold text-muted-foreground">— {review.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-32 bg-background border-t border-border mt-auto">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-serif mb-4">Join our inner circle</h2>
          <p className="text-muted-foreground mb-8">Sign up for early access to new collections and receive 10% off your first order.</p>
          <form className="flex flex-col md:flex-row justify-center max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Your email address" 
              className="px-6 py-4 flex-1 border border-border bg-transparent focus:outline-none focus:border-accent transition-colors md:border-r-0"
              required
            />
            <button type="submit" className="bg-foreground text-background px-8 py-4 uppercase tracking-widest text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors border border-foreground md:border-l-0">
              Subscribe
            </button>
          </form>
        </div>
      </section>

    </div>
  );
}