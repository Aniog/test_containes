import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';
import { useEffect, useRef } from 'react';

// Seed product data
const BESTSELLERS = [
  {
    id: "1",
    name: "VIVID AURA JEWELS",
    price: 42,
    category: "Ear Cuffs",
  },
  {
    id: "2",
    name: "MAJESTIC FLORA NECTAR",
    price: 68,
    category: "Necklaces",
  },
  {
    id: "3",
    name: "GOLDEN SPHERE HUGGIES",
    price: 38,
    category: "Huggies",
  },
  {
    id: "4",
    name: "AMBER LACE EARRINGS",
    price: 54,
    category: "Earrings",
  },
  {
    id: "5",
    name: "ROYAL HEIRLOOM SET",
    price: 95,
    category: "Sets",
  }
];

export default function HomePage() {
  const containerRef = useRef(null);

  return (
    <div className="flex flex-col w-full" ref={containerRef}>
      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center text-center">
        {/* Absolute Background */}
        <div 
          className="absolute inset-0 z-0 bg-[#352c23]" // temporary fallback color
        >
          {/* We'll use a placeholder image if needed, or an Unsplash image via standard src for the prototype. */}
          <img 
            src="https://images.unsplash.com/photo-1599643477874-5c866f4369e1?q=80&w=2000&auto=format&fit=crop" 
            alt="Gold jewelry close up" 
            className="w-full h-full object-cover opacity-60"
          />
        </div>
        
        <div className="relative z-10 max-w-3xl px-6 flex flex-col items-center">
          <h1 className="font-serif text-5xl md:text-7xl text-white mb-6 leading-tight drop-shadow-md">
            Crafted to be Treasured
          </h1>
          <p className="text-white/90 text-lg md:text-xl font-light max-w-xl mb-10 drop-shadow-md">
            Discover our collection of demi-fine gold jewelry. Designed for everyday elegance.
          </p>
          <Link 
            to="/shop" 
            className="px-10 py-4 bg-accent text-accent-foreground font-semibold tracking-[0.2em] text-xs uppercase hover:bg-white hover:text-primary transition-all duration-300"
          >
            Shop the Collection
          </Link>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="bg-secondary py-4 px-6 border-b border-border/50">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-x-8 gap-y-2 text-xs tracking-widest uppercase font-medium text-foreground/80 text-center">
          <span>Free Worldwide Shipping</span>
          <span className="hidden sm:inline">•</span>
          <span>30-Day Returns</span>
          <span className="hidden sm:inline">•</span>
          <span>18K Gold Plated</span>
          <span className="hidden sm:inline">•</span>
          <span>Hypoallergenic</span>
        </div>
      </div>

      {/* Bestsellers Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto w-full">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="font-serif text-4xl mb-4">Bestsellers</h2>
            <p className="text-muted-foreground font-light">Our most loved everyday essentials.</p>
          </div>
          <Link to="/shop" className="hidden md:flex items-center gap-2 text-sm font-semibold uppercase tracking-widest hover:text-accent transition-colors">
            View All <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-5 md:grid-cols-4 gap-x-4 gap-y-12">
          {BESTSELLERS.map((product) => (
            <div key={product.id} className="group flex flex-col cursor-pointer">
              <div className="relative aspect-[3/4] bg-secondary mb-4 overflow-hidden">
                <img 
                  src={`https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=600&auto=format&fit=crop`} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-opacity duration-500"
                />
                <img 
                  src={`https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?q=80&w=600&auto=format&fit=crop`} 
                  alt={`${product.name} worn`}
                  className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
                <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <button className="w-full py-3 bg-white/90 backdrop-blur-sm text-primary uppercase text-[10px] font-bold tracking-widest hover:bg-primary hover:text-white transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
              <div className="flex flex-col flex-1">
                <span className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1">{product.category}</span>
                <Link to={`/product/${product.id}`} className="font-serif uppercase tracking-widest text-sm mb-2 hover:text-accent transition-colors line-clamp-2 leading-snug">
                  {product.name}
                </Link>
                <span className="mt-auto font-serif text-sm">${product.price}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Categories Row */}
      <section className="py-12 px-6 max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { name: "Earrings", img: "1611591437281-460bfbe1220a" },
          { name: "Necklaces", img: "1599643477874-5c866f4369e1" },
          { name: "Huggies", img: "1596944924616-7b38e7cfac36" }
        ].map((cat) => (
          <Link to={`/shop?category=${cat.name.toLowerCase()}`} key={cat.name} className="relative aspect-square group overflow-hidden bg-secondary">
            <img 
              src={`https://images.unsplash.com/photo-${cat.img}?q=80&w=800&auto=format&fit=crop`} 
              alt={cat.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500 flex items-center justify-center">
              <h3 className="text-white font-serif text-3xl uppercase tracking-widest drop-shadow-md">
                {cat.name}
              </h3>
            </div>
          </Link>
        ))}
      </section>

      {/* Brand Story Split Section */}
      <section className="py-24 px-6 w-full bg-secondary mt-12 border-y border-border/50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="aspect-[4/5] bg-muted relative">
            <img 
              src="https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?q=80&w=1000&auto=format&fit=crop" 
              alt="Artisan crafting jewelry"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col items-start max-w-lg lg:ml-12">
            <h2 className="font-serif text-4xl mb-6 leading-tight">Elevating the Everyday.</h2>
            <p className="text-muted-foreground font-light mb-8 leading-relaxed text-sm md:text-base">
              Velmora was born from a desire to bridge the gap between costume jewelry and fine heirlooms. 
              We create demi-fine pieces using high-quality 18K gold vermeil over sterling silver—giving you the rich color and feel of solid gold, at an accessible price point.
              <br/><br/>
              Every piece is designed to be lived in, layered, and loved.
            </p>
            <Link to="/about" className="group flex items-center gap-3 font-serif uppercase tracking-widest text-sm hover:text-accent transition-colors">
              <span className="border-b border-current pb-1">Read Our Story</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 px-6 max-w-7xl mx-auto w-full text-center">
        <h2 className="font-serif text-3xl md:text-4xl mb-20 tracking-wide">Loved by Our Community</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {[
            { text: "The Golden Sphere Huggies haven't left my ears since they arrived. Exceptional quality for the price.", name: "Sarah J." },
            { text: "Beautiful packaging and the Amber Lace earrings look like vintage heirlooms. So happy with my purchase.", name: "Emily R." },
            { text: "I wear the Majestic Flora necklace everyday. It hasn't tarnished even in the shower. Truly high-end feel.", name: "Jessica T." }
          ].map((review, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="flex gap-1 text-accent mb-8">
                {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="font-serif text-lg md:text-xl italic mb-8 leading-relaxed">"{review.text}"</p>
              <p className="uppercase tracking-widest text-xs font-semibold text-muted-foreground">{review.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-32 px-6 bg-primary text-primary-foreground text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl mb-6 tracking-wide">Join the Inner Circle</h2>
          <p className="text-primary-foreground/80 mb-12 font-light text-sm md:text-base px-4">
            Subscribe to receive 10% off your first order, plus exclusive access to new arrivals and private sales.
          </p>
          <form className="flex flex-col sm:flex-row gap-6 max-w-lg mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 bg-transparent border-b border-primary-foreground/30 px-2 py-3 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:border-accent transition-colors"
              required
            />
            <button 
              type="submit" 
              className="px-10 py-4 bg-accent text-accent-foreground uppercase tracking-widest text-xs font-bold hover:bg-white transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}