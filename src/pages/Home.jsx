import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/Button';
import { ProductCard } from '@/components/ProductCard';
import { getProducts } from '@/lib/data';

const TRUST_ICONS = [
  { text: 'Free Worldwide Shipping', icon: '✈️' },
  { text: '30-Day Returns', icon: '⟲' },
  { text: '18K Gold Plated', icon: '✨' },
  { text: 'Hypoallergenic', icon: '✦' }
];

const CATEGORIES = [
  { name: 'Earrings', image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=800&auto=format&fit=crop' },
  { name: 'Necklaces', image: 'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?q=80&w=800&auto=format&fit=crop' },
  { name: 'Huggies', image: 'https://images.unsplash.com/photo-1617038220319-276d3cfab638?q=80&w=800&auto=format&fit=crop' }
];

export const Home = () => {
  const products = getProducts();

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=2000&auto=format&fit=crop" 
            alt="Model wearing Velmora fine jewelry" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20" /> {/* Subtle overlay for text readability */}
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto mt-20">
          <h1 className="font-serif text-5xl md:text-7xl text-white mb-6 drop-shadow-sm">Crafted to be Treasured</h1>
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-xl mx-auto font-light">
            Everyday luxury designed for the modern woman. Discover our collection of demi-fine gold jewelry.
          </p>
          <Button asChild variant="accent" size="lg" className="px-12 text-sm uppercase tracking-widest">
            <Link to="/shop">Shop the Collection</Link>
          </Button>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="bg-muted py-4 border-b border-border">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 md:justify-between items-center text-sm font-medium tracking-wide text-primary/80">
            {TRUST_ICONS.map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className="text-accent">{item.icon}</span>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bestsellers */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl mb-4">Bestsellers</h2>
          <div className="w-16 h-[1px] bg-accent mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {products.slice(0, 5).map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Editorial UGC Row */}
      <section className="py-16 bg-primary text-primary-foreground overflow-hidden">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl mb-4 italic">As Seen On You</h2>
          <p className="text-primary-foreground/70 text-sm">@velmorajewelry</p>
        </div>
        
        {/* Simple horizontal scroll without custom scrollbar styling for clean look */}
        <div className="flex overflow-x-auto gap-4 px-4 sm:px-8 pb-8 snap-x w-full" style={{ scrollbarWidth: 'none' }}>
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="shrink-0 w-64 md:w-72 aspect-[9/16] relative snap-center overflow-hidden rounded-sm group">
              <img 
                src={products[i % products.length].images[1]} 
                alt="Customer wearing jewelry" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6">
                <p className="font-serif text-lg italic text-white drop-shadow-md">
                  "Everyday elegance"
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CATEGORIES.map((cat) => (
            <Link key={cat.name} to={`/shop?category=${cat.name}`} className="group block relative aspect-[4/5] overflow-hidden">
              <img 
                src={cat.image} 
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300" />
              <div className="absolute inset-x-0 bottom-10 flex justify-center">
                <span className="bg-white/95 backdrop-blur-sm px-8 py-3 font-serif text-xl tracking-widest uppercase shadow-sm">
                  {cat.name}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-24 bg-muted border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="aspect-[4/5] relative overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?q=80&w=1000&auto=format&fit=crop" 
                alt="Jewelry making process"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="lg:pl-8">
              <h2 className="font-serif text-4xl lg:text-5xl mb-6">Quiet Luxury, <br/><span className="italic text-accent">Redefined.</span></h2>
              <div className="w-12 h-[1px] bg-accent mb-8"></div>
              <p className="text-muted-foreground leading-relaxed mb-8 text-lg">
                Founded on the belief that fine jewelry should be worn every day, not just special occasions. We craft approachable, premium pieces using sustainable 18K gold vermeil and sterling silver.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-10">
                Each piece in the Velmora collection is designed to be layered, lived in, and loved deeply. We bypass traditional retail markups to bring you exceptional quality at an accessible price.
              </p>
              <Button asChild variant="outline" className="px-8 tracking-widest uppercase">
                <Link to="/about">Our Story</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-4 max-w-5xl mx-auto text-center">
        <h2 className="font-serif text-3xl mb-16">Loved by You</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {[
            { name: 'Sarah M.', text: 'The quality is unmatched for the price point. The Amber Lace earrings are my new daily go-to.' },
            { name: 'Elena R.', text: 'Beautiful packaging, incredibly fast shipping, and the jewelry itself is stunning. Highly recommend the Huggies.' },
            { name: 'Jessica T.', text: 'I received the Majestic Flora necklace as a gift and I haven\'t taken it off since. It has not tarnished at all.' }
          ].map((review, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="flex text-accent mb-6">
                {[...Array(5)].map((_, j) => <span key={j}>★</span>)}
              </div>
              <p className="font-serif text-xl italic mb-6 leading-relaxed">"{review.text}"</p>
              <p className="text-sm font-medium tracking-widest uppercase">— {review.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 bg-primary text-primary-foreground text-center px-4">
        <div className="max-w-2xl mx-auto flex flex-col items-center">
          <h2 className="font-serif text-4xl mb-4">Join the Inner Circle</h2>
          <p className="text-primary-foreground/80 mb-10">Sign up to receive 10% off your first order, plus early access to new collections and exclusive events.</p>
          
          <form className="w-full flex flex-col sm:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-1 bg-transparent border border-primary-foreground/30 px-6 py-3 md:py-4 text-white placeholder:text-primary-foreground/50 focus:outline-none focus:border-accent transition-colors"
              required
            />
            <Button variant="accent" type="submit" className="md:py-4 md:px-8 tracking-widest uppercase h-auto">
              Subscribe
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
};
