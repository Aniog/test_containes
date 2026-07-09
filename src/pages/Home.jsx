import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';
import { seedProducts, ugcData, reviews } from '@/data';
import { useCart } from '@/lib/CartContext';

export default function Home() {
  const { addItem } = useCart();
  const bestsellers = seedProducts.slice(0, 5);

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=2000&auto=format&fit=crop" 
            alt="Velmora Jewelry Collection" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30" /> {/* Dark overlay for text readability */}
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-4 flex flex-col items-center mt-16">
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl mb-6 max-w-4xl tracking-wide">
            Crafted to be Treasured
          </h1>
          <p className="text-lg md:text-xl font-light mb-10 max-w-xl mx-auto text-white/90">
            Demi-fine gold jewelry for the modern romantic. Responsibly sourced, beautifully designed.
          </p>
          <Link 
            to="/collections/all" 
            className="inline-flex items-center justify-center px-8 py-4 bg-accent text-accent-foreground hover:bg-white hover:text-foreground transition-all duration-300 text-sm tracking-widest uppercase font-medium min-w-[200px]"
          >
            Shop the Collection
          </Link>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-secondary py-4 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 overflow-hidden">
          <div className="flex justify-between items-center text-xs md:text-sm tracking-widest uppercase text-secondary-foreground font-medium hide-scrollbar overflow-x-auto whitespace-nowrap gap-8 md:gap-4">
            <span className="flex-shrink-0">Free Worldwide Shipping</span>
            <span className="hidden md:inline text-secondary-foreground/30">•</span>
            <span className="flex-shrink-0">30-Day Returns</span>
            <span className="hidden md:inline text-secondary-foreground/30">•</span>
            <span className="flex-shrink-0">18K Gold Plated</span>
            <span className="hidden md:inline text-secondary-foreground/30">•</span>
            <span className="flex-shrink-0">Hypoallergenic</span>
          </div>
        </div>
      </section>

      {/* Bestsellers Grid */}
      <section className="py-20 md:py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex justify-between items-end mb-12">
          <h2 className="font-serif text-4xl md:text-5xl">Bestsellers</h2>
          <Link to="/collections/all" className="hidden md:flex items-center text-sm tracking-widest uppercase uppercase hover:opacity-70 transition-opacity">
            Shop All <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {bestsellers.map((product) => (
            <div key={product.id} className="group relative flex flex-col">
              <Link to={`/product/${product.id}`} className="block relative aspect-[4/5] bg-secondary mb-4 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                />
                <img 
                  src={product.hoverImage || product.image} 
                  alt={`${product.name} alternate view`} 
                  className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />
                {/* Quick Add Button Overlay */}
                <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <button 
                    onClick={(e) => {
                      e.preventDefault();
                      addItem(product);
                    }}
                    className="w-full py-3 bg-background/95 backdrop-blur text-foreground text-xs uppercase tracking-widest hover:bg-foreground hover:text-background transition-colors"
                  >
                    Quick Add
                  </button>
                </div>
              </Link>
              <div className="flex flex-col flex-1">
                <h3 className="font-serif text-sm tracking-wider uppercase mb-1">
                  <Link to={`/product/${product.id}`}>{product.name}</Link>
                </h3>
                <p className="text-foreground/70">${product.price}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center md:hidden">
          <Link to="/collections/all" className="inline-flex items-center text-sm tracking-widest uppercase uppercase underline underline-offset-4">
            Shop All <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
      </section>

      {/* UGC Reel Section */}
      <section className="py-20 bg-muted overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <h2 className="font-serif text-4xl text-center">Spotted in Velmora</h2>
          <p className="text-center text-foreground/60 mt-4 text-sm tracking-widest uppercase">@velmorajewelry</p>
        </div>
        <div className="flex gap-4 px-4 overflow-x-auto hide-scrollbar pb-8 -mb-8 snap-x snap-mandatory">
          {/* Add empty padding elements to center the first/last items if desired, but a simple scroll works well */}
          {ugcData.map((item) => (
            <div key={item.id} className="relative w-64 md:w-80 flex-shrink-0 aspect-[9/16] snap-center rounded-sm overflow-hidden group">
              <img src={item.image} alt="User generated content" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
              <p className="absolute bottom-6 left-6 right-6 font-serif text-white text-xl text-balance">
                "{item.caption}"
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Category Tiles */}
      <section className="py-20 md:py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: 'Earrings', path: '/collections/earrings', img: 'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?q=80&w=800&auto=format&fit=crop' },
            { title: 'Necklaces', path: '/collections/necklaces', img: 'https://images.unsplash.com/photo-1599643478524-fb52199b053c?q=80&w=800&auto=format&fit=crop' },
            { title: 'Huggies', path: '/collections/huggies', img: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=800&auto=format&fit=crop' }
          ].map((category) => (
            <Link key={category.title} to={category.path} className="group relative aspect-square md:aspect-[3/4] overflow-hidden">
              <img src={category.img} alt={category.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-serif text-3xl text-white tracking-wider">{category.title}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Brand Story */}
      <section className="bg-background">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="aspect-square md:aspect-auto h-[50vh] md:h-[80vh]">
            <img 
              src="https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?q=80&w=1200&auto=format&fit=crop" 
              alt="Jewelry making process" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col items-center justify-center p-12 md:p-24 text-center border-l border-border">
            <h2 className="font-serif text-4xl md:text-5xl mb-8">Our Philosophy</h2>
            <p className="text-foreground/80 mb-8 max-w-md leading-relaxed text-balance">
              We believe that fine jewelry shouldn't be reserved for special occasions. 
              Velmora was born from a desire to create accessible, editorial-quality pieces 
              that elevate the everyday. Hand-finished and thoughtfully sourced, our pieces are designed to be lived in.
            </p>
            <Link 
              to="/about" 
              className="inline-block border-b border-foreground pb-1 text-sm tracking-widest uppercase hover:text-foreground/60 transition-colors"
            >
              Read Our Story
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {reviews.map((review) => (
              <div key={review.id} className="flex flex-col items-center text-center">
                <div className="flex space-x-1 mb-6 text-primary">
                  {[...Array(review.stars)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="font-serif text-xl md:text-2xl mb-6 italic text-balance">"{review.text}"</p>
                <p className="text-xs tracking-widest uppercase text-foreground/60">{review.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 md:py-32 bg-primary text-primary-foreground text-center px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl mb-6">Join the Insider List</h2>
          <p className="mb-10 text-primary-foreground/80 text-balance">
            Subscribe for styling inspiration, early access to new collections, and 10% off your first order.
          </p>
          <form className="flex flex-col sm:flex-row max-w-md mx-auto gap-4" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Email address" 
              className="flex-1 bg-transparent border border-primary-foreground/30 px-6 py-4 outline-none focus:border-primary-foreground placeholder:text-primary-foreground/50 transition-colors"
              required
            />
            <button 
              type="submit" 
              className="px-8 py-4 bg-primary-foreground text-primary text-sm tracking-widest uppercase hover:bg-accent transition-colors whitespace-nowrap font-medium"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

    </div>
  );
}
