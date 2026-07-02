import React from 'react';
import { ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCartStore } from '../lib/cart';

// Sample Product Data
const bestsellers = [
  {
    id: '1',
    name: 'Vivid Aura Jewels',
    price: 42,
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=600&auto=format&fit=crop',
    imageHover: 'https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: '2',
    name: 'Majestic Flora Nectar',
    price: 68,
    image: 'https://images.unsplash.com/photo-1599643478524-fb66f45209f9?q=80&w=600&auto=format&fit=crop',
    imageHover: 'https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: '3',
    name: 'Golden Sphere Huggies',
    price: 38,
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=600&auto=format&fit=crop',
    imageHover: 'https://images.unsplash.com/photo-1629224316810-9d8805b95e76?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: '4',
    name: 'Amber Lace Earrings',
    price: 54,
    image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?q=80&w=600&auto=format&fit=crop',
    imageHover: 'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: '5',
    name: 'Royal Heirloom Set',
    price: 95,
    image: 'https://images.unsplash.com/photo-1591209627710-d2427565a41f?q=80&w=600&auto=format&fit=crop',
    imageHover: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=600&auto=format&fit=crop',
  }
];

export default function Home() {
  const addItem = useCartStore((state) => state.addItem);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/30 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1543294001-f7cd5d7fb516?q=80&w=2000&auto=format&fit=crop" 
            alt="Model wearing gold jewelry" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-20 text-center text-white px-4 flex flex-col items-center">
          <h1 className="text-5xl md:text-7xl font-serif mb-6 leading-tight max-w-4xl mx-auto">
            Crafted to be Treasured
          </h1>
          <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto font-light tracking-wide text-white/90">
            Demi-fine gold jewelry for everyday elegance. Designed to layer, made to last.
          </p>
          <Link 
            to="/shop" 
            className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors uppercase tracking-widest text-sm font-medium"
          >
            Shop the Collection
          </Link>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-secondary text-secondary-foreground py-4 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-xs md:text-sm tracking-widest uppercase font-medium">
            <span>Free Worldwide Shipping</span>
            <span className="hidden md:inline text-muted-foreground">•</span>
            <span>30-Day Returns</span>
            <span className="hidden md:inline text-muted-foreground">•</span>
            <span>18K Gold Plated</span>
            <span className="hidden md:inline text-muted-foreground">•</span>
            <span>Hypoallergenic</span>
          </div>
        </div>
      </section>

      {/* Bestsellers Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif mb-4">Bestsellers</h2>
              <p className="text-muted-foreground">Our most loved pieces, chosen by you.</p>
            </div>
            <Link to="/shop" className="hidden md:flex items-center text-sm uppercase tracking-widest hover:text-primary transition-colors gap-2">
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {bestsellers.map((product) => (
              <div key={product.id} className="group relative flex flex-col group cursor-pointer">
                <Link to={`/product/${product.id}`} className="relative aspect-[4/5] overflow-hidden bg-muted mb-4">
// Removed hover image on mobile for products to prevent double taps and weird UI states.
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out md:group-hover:opacity-0"
                  />
                  <img 
                    src={product.imageHover} 
                    alt={`${product.name} on model`}
                    className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 ease-in-out md:group-hover:opacity-100 scale-105 md:group-hover:scale-100 transition-transform hidden md:block"
                  />
                  <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full md:group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
                    <button 
                      onClick={(e) => {
                        e.preventDefault();
                        addItem(product, product.material || 'gold', 1);
                      }}
                      className="w-full py-3 bg-white text-black text-sm uppercase tracking-widest hover:bg-primary hover:text-primary-foreground transition-colors shadow-lg"
                    >
                      Quick Add
                    </button>
                  </div>
                </Link>
                <div className="flex flex-col gap-1 items-center text-center">
                  <Link to={`/product/${product.id}`} className="font-serif text-lg tracking-wider hover:text-primary transition-colors">
                    {product.name}
                  </Link>
                  <span className="text-muted-foreground font-medium">${product.price}</span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-10 flex justify-center md:hidden">
            <Link to="/shop" className="inline-flex items-center border-b border-foreground pb-1 text-sm uppercase tracking-widest hover:text-primary transition-colors gap-2">
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link to="/shop?category=earrings" className="group relative aspect-[3/4] overflow-hidden bg-muted flex items-center justify-center">
              <img 
                src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=800&auto=format&fit=crop" 
                alt="Earrings"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
              <h3 className="relative z-10 text-white font-serif text-4xl tracking-widest opacity-90 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0 duration-500">Earrings</h3>
            </Link>
            
            <Link to="/shop?category=necklaces" className="group relative aspect-[3/4] overflow-hidden bg-muted flex items-center justify-center">
              <img 
                src="https://images.unsplash.com/photo-1599643478524-fb66f45209f9?q=80&w=800&auto=format&fit=crop" 
                alt="Necklaces"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
              <h3 className="relative z-10 text-white font-serif text-4xl tracking-widest opacity-90 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0 duration-500">Necklaces</h3>
            </Link>
            
            <Link to="/shop?category=huggies" className="group relative aspect-[3/4] overflow-hidden bg-muted flex items-center justify-center">
              <img 
                src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=800&auto=format&fit=crop" 
                alt="Huggies"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
              <h3 className="relative z-10 text-white font-serif text-4xl tracking-widest opacity-90 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0 duration-500">Huggies</h3>
            </Link>
          </div>
        </div>
      </section>

      {/* UGC / Reels Row */}
      <section className="py-24 bg-background overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-4">#VelmoraJewelry</h2>
          <p className="text-muted-foreground">Follow us on Instagram for daily inspiration.</p>
        </div>
        
        <div className="flex gap-4 overflow-x-auto pb-8 scrollbar-hide px-4 md:px-8 snap-x">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="relative w-64 md:w-80 flex-shrink-0 aspect-[9/16] bg-muted overflow-hidden snap-center group">
              <img 
                src={`https://images.unsplash.com/photo-${1600000000000 + i * 1000}?q=80&w=600&auto=format&fit=crop`} 
                alt="UGC"
                className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
                onError={(e) => {
                  e.target.src = "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=600&auto=format&fit=crop"
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                <p className="text-white font-serif italic text-lg leading-snug">"The perfect everyday gold layering."</p>
                <div className="mt-4 inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-white text-xs tracking-widest uppercase hover:bg-white hover:text-black transition-colors cursor-pointer">
                  Shop Look
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div className="aspect-[4/5] md:aspect-[3/4] overflow-hidden bg-muted">
              <img 
                src="https://images.unsplash.com/photo-1596755486807-68b31a396263?q=80&w=1000&auto=format&fit=crop" 
                alt="Jewelry making process"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-center max-w-xl">
              <h2 className="text-3xl md:text-5xl font-serif mb-8 leading-tight">Elevating the Everyday</h2>
              <div className="space-y-6 text-muted-foreground text-lg font-light leading-relaxed">
                <p>
                  Velmora was born from a simple belief: fine jewelry shouldn't be reserved for special occasions. We design demi-fine pieces that blur the line between luxury and everyday wear.
                </p>
                <p>
                  Crafted carefully with 18k gold vermeil over sterling silver, our collection is hypoallergenic, water-resistant, and created to move with you from morning coffee to evening cocktails.
                </p>
              </div>
              <div className="mt-12">
                <Link to="/about" className="inline-flex items-center text-sm uppercase tracking-widest border-b border-foreground pb-1 hover:text-primary hover:border-primary transition-colors">
                  Read Our Story
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif mb-4">Loved by Many</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { text: "The quality is outstanding. They look exactly like solid gold but without the huge price tag. My new daily staples.", name: "Sarah M." },
              { text: "I have sensitive ears but the huggies haven't irritated them at all. So comfortable I sleep in them.", name: "Elena R." },
              { text: "Fast shipping, gorgeous packaging, and the necklace is stunning. Already looking at what to order next!", name: "Jessica T." }
            ].map((review, i) => (
              <div key={i} className="flex flex-col items-center text-center p-8 border border-border/50 bg-secondary/30 rounded-lg">
                <div className="flex gap-1 mb-6 text-primary">
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                </div>
                <p className="flex-1 font-serif text-xl italic mb-6 leading-relaxed">"{review.text}"</p>
                <p className="text-sm tracking-widest uppercase text-muted-foreground">{review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-primary text-primary-foreground py-24">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl text-center">
          <h2 className="text-3xl md:text-5xl font-serif mb-6 text-white">Join the Club</h2>
          <p className="text-primary-foreground/80 mb-10 text-lg">
            Sign up to receive 10% off your first order, plus early access to new collections and exclusive events.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-1 px-6 py-4 bg-transparent border border-primary-foreground/30 text-white placeholder:text-primary-foreground/60 focus:outline-none focus:border-white transition-colors"
              required
            />
            <button 
              type="submit" 
              className="px-8 py-4 bg-white text-primary hover:bg-white/90 transition-colors uppercase tracking-widest text-sm font-medium whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}