import React, { useState } from 'react';
import { seedProducts } from '../data/products';
import { ArrowRight } from 'lucide-react';
import { useStore } from '../lib/store';

const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart } = useStore();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1, 'gold');
  };

  return (
    <a 
      href={`/product/${product.id}`}
      className="group cursor-pointer flex flex-col block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-secondary/20 mb-4">
        <img 
          src={isHovered ? product.hoverImage : product.image} 
          alt={product.name}
          className="w-full h-full object-cover transition-opacity duration-500"
        />
        <div className={`absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out`}>
          <button 
            onClick={handleQuickAdd}
            className="w-full bg-accent text-accent-foreground py-3 text-sm tracking-widest font-medium uppercase hover:bg-accent/90 transition-colors"
          >
            Quick Add
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center text-center">
        <h3 className="font-serif text-sm tracking-widest uppercase mb-2 group-hover:text-accent transition-colors">{product.name}</h3>
        <p className="text-sm text-foreground/80">${product.price}</p>
      </div>
    </a>
  );
};

const Homepage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center -mt-[88px] md:-mt-[104px]">
        {/* Background Image / Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?q=80&w=2000&auto=format&fit=crop" 
            alt="Gold jewelry on model" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-4 flex flex-col items-center mt-20">
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl mb-6 tracking-wide drop-shadow-sm">Crafted to be Treasured</h1>
          <p className="font-sans text-lg md:text-xl font-light mb-10 max-w-xl drop-shadow-sm">
            Discover demi-fine solid gold layers designed for your everyday moments and special occasions.
          </p>
          <a href="/shop" className="inline-block bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 text-sm tracking-widest uppercase transition-colors">
            Shop the Collection
          </a>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="bg-secondary text-secondary-foreground py-4 border-b border-border/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-12 text-xs md:text-sm tracking-widest uppercase">
            <span>Free Worldwide Shipping</span>
            <span className="hidden md:inline">•</span>
            <span>30-Day Returns</span>
            <span className="hidden md:inline">•</span>
            <span>18K Gold Plated</span>
            <span className="hidden md:inline">•</span>
            <span>Hypoallergenic</span>
          </div>
        </div>
      </div>

      {/* Bestsellers Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl tracking-wide mb-4">Bestsellers</h2>
            <p className="text-muted-foreground text-sm tracking-widest uppercase">Loved by many</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-8">
            {seedProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <a href="/shop" className="inline-flex items-center justify-center gap-2 text-sm tracking-widest uppercase border-b border-foreground pb-1 hover:text-accent hover:border-accent transition-colors">
              View All Bestsellers <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* Shop by Category */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
            {[
              { title: 'Earrings', img: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=800&auto=format&fit=crop' },
              { title: 'Necklaces', img: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?q=80&w=800&auto=format&fit=crop' },
              { title: 'Huggies', img: 'https://placehold.co/800x800/E5C158/fff' }
            ].map(category => (
              <a href={`/category/${category.title.toLowerCase()}`} key={category.title} className="group relative aspect-square overflow-hidden block">
                <img 
                  src={category.img} 
                  alt={category.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="font-serif text-2xl md:text-3xl text-white tracking-widest uppercase drop-shadow-md">
                    {category.title}
                  </h3>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Story Split */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
            <div className="w-full md:w-1/2">
              <div className="aspect-[4/5] relative">
                <img 
                  src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?q=80&w=1000&auto=format&fit=crop" 
                  alt="Velmora Jewelry Crafting" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 md:pr-12">
              <h2 className="font-serif text-3xl md:text-5xl tracking-wide mb-8">Quiet Luxury, Everyday.</h2>
              <p className="text-base text-foreground/80 leading-relaxed mb-6">
                At Velmora, we believe that fine jewelry shouldn't be reserved just for special occasions. We craft demi-fine solid gold pieces designed to be lived in, loved, and layered.
              </p>
              <p className="text-base text-foreground/80 leading-relaxed mb-10">
                Ethically sourced materials meet editorial design. It's accessible luxury that doesn't compromise on quality or conscience.
              </p>
              <a href="/about" className="inline-block border border-foreground text-foreground px-8 py-4 text-sm tracking-widest uppercase hover:bg-foreground hover:text-background transition-colors">
                Our Story
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* UGC / Instagram Reel Style */}
      <section className="py-20 overflow-hidden bg-secondary/20 border-t border-border/50">
        <div className="text-center mb-12 px-4">
          <h2 className="font-serif text-3xl tracking-wide mb-4">Worn by You</h2>
          <p className="text-muted-foreground text-sm tracking-widest uppercase">@VelmoraJewelry</p>
        </div>
        
        {/* Horizontal scroll container */}
        <div className="flex overflow-x-auto pb-8 snap-x snap-mandatory hide-scrollbar gap-4 px-4 md:px-8">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="relative flex-none w-[70vw] md:w-[300px] aspect-[9/16] snap-center bg-secondary/50">
              <img 
                src={`https://images.unsplash.com/photo-1599643477877-530eb83abc8e?q=80&w=600&auto=format&fit=crop`}
                alt="UGC Style" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6">
                <p className="font-serif text-white/90 text-sm md:text-base leading-snug">
                  "The most perfect everyday hugs. Haven't taken them off since."
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-primary text-primary-foreground py-24 border-b border-white/10">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <h2 className="font-serif text-3xl md:text-4xl tracking-wide mb-4">Join our inner circle</h2>
          <p className="text-secondary/80 mb-10 text-sm md:text-base">
            Subscribe to receive 10% off your first order, plus early access to new collections and exclusive editorial content.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-1 bg-transparent border border-white/30 px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:border-accent"
              required
            />
            <button type="submit" className="bg-accent text-accent-foreground px-8 py-3 text-sm tracking-widest uppercase hover:bg-accent/90 transition-colors">
              Subscribe
            </button>
          </form>
        </div>
      </section>

    </div>
  );
};

export default Homepage;
