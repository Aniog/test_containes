import { Link } from 'react-router-dom';
import { seedProducts } from '@/lib/data';
import { useCartStore } from '@/lib/cart';
import { ArrowRight, Star, Heart } from 'lucide-react';
import { useState } from 'react';

export default function Home() {
  const addItem = useCartStore(state => state.addItem);

  const testimonials = [
    { name: "Sarah M.", quote: "Absolutely stunning quality. These huggies have become my daily staple.", rating: 5 },
    { name: "Elena R.", quote: "The packaging is so luxurious. I gifted the Royal set to my sister and she cried.", rating: 5 },
    { name: "Chloe T.", quote: "Beautiful, weighty, but doesn't pull on my ears. Will definitely buy again.", rating: 5 },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center text-white">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/30 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
            alt="Model wearing gold jewelry"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto mt-16">
          <h1 className="text-5xl md:text-7xl mb-6">Crafted to be Treasured</h1>
          <p className="text-lg md:text-xl font-light tracking-wide mb-10 max-w-xl mx-auto opacity-90">
            Demi-fine gold jewelry designed for the modern romantic. Quiet luxury you can wear every day.
          </p>
          <Link to="/collection" className="btn-primary">
            Shop the Collection
          </Link>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="bg-muted text-foreground py-4 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-x-8 gap-y-2 text-xs md:text-sm tracking-wider uppercase">
          <span>Free Worldwide Shipping</span>
          <span className="hidden md:inline">&middot;</span>
          <span>30-Day Returns</span>
          <span className="hidden md:inline">&middot;</span>
          <span>18K Gold Plated</span>
          <span className="hidden md:inline">&middot;</span>
          <span>Hypoallergenic</span>
        </div>
      </div>

      {/* Bestsellers Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-3xl md:text-4xl text-foreground">Bestsellers</h2>
          <Link to="/collection" className="flex items-center text-sm tracking-wide uppercase hover:text-primary transition-colors">
            Shop All <ArrowRight className="w-4 h-4 w-4 h-4 ml-2" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {seedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <CategoryCard 
              title="Earrings" 
              image="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
            />
            <CategoryCard 
              title="Necklaces" 
              image="https://images.unsplash.com/photo-1599643478514-4a1209b5ce42?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
            />
            <CategoryCard 
              title="Huggies" 
              image="https://images.unsplash.com/photo-1635767798638-3e25b68261e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
            />
          </div>
        </div>
      </section>

      {/* UGC / Reel Row */}
      <section className="py-24 max-w-full overflow-hidden">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl">Styled by You</h2>
          <p className="mt-4 text-muted-foreground">@velmorajewelry</p>
        </div>
        
        <div className="flex overflow-x-auto pb-8 hide-scrollbar px-4 md:px-8 gap-6 snap-x">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="flex-none w-[280px] h-[500px] relative group cursor-pointer snap-center">
              <img 
                src={`https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80&sig=${i}`} 
                alt="UGC" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Heart className="text-white w-8 h-8" />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
                <p className="text-white font-serif text-lg">Everyday Elegance</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <img 
              src="https://images.unsplash.com/photo-1599643477874-5fe5a5704fd8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Jewelry making" 
              className="w-full h-full object-cover rounded-sm"
            />
          </div>
          <div className="order-1 md:order-2 flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl mb-6">Our Story</h2>
            <div className="w-12 h-[1px] bg-primary mb-8" />
            <p className="text-muted-foreground leading-relaxed mb-6 font-light">
              Velmora was born from a desire to bridge the gap between inaccessible fine jewelry and quickly tarnishing fashion pieces. We believe everyone deserves to wear pieces that look and feel like solid gold, without the luxury markup.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-10 font-light">
              Each piece is thoughtfully designed in our studio, crafted with a thick layer of 18K gold over a hypoallergenic core, ensuring your jewelry remains a daily companion for years to come.
            </p>
            <div>
              <Link to="/collection" className="btn-outline">
                Read More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-muted/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl text-center mb-16">Loved by Thousands</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {testimonials.map((t, i) => (
              <div key={i} className="text-center flex flex-col items-center">
                <div className="flex gap-1 mb-6 text-primary">
                  {[...Array(t.rating)].map((_, j) => <Star key={j} className="w-5 h-5 fill-current" />)}
                </div>
                <p className="font-serif text-xl md:text-2xl leading-relaxed mb-6 italic">"{t.quote}"</p>
                <p className="text-sm tracking-widest uppercase text-muted-foreground">{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 px-4 bg-primary text-primary-foreground text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl mb-4 text-white">Join for 10% off</h2>
          <p className="mb-10 text-white/90 font-light">Sign up to receive our latest updates, exclusive offers, and early access to new collections.</p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-1 bg-transparent border border-white/40 focus:border-white px-6 py-3 outline-none text-white placeholder:text-white/60 rounded-sm"
              required
            />
            <button type="submit" className="bg-white text-primary px-8 py-3 font-medium uppercase tracking-wide text-sm hover:bg-white/90 transition-colors rounded-sm">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

// Subcomponents

function ProductCard({ product }) {
  const addItem = useCartStore(state => state.addItem);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group flex flex-col"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="relative aspect-[3/4] mb-4 overflow-hidden bg-muted block">
        <img 
          src={isHovered ? product.hoverImage : product.image} 
          alt={product.name}
          className="w-full h-full object-cover transition-opacity duration-300"
        />
        <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <button 
            className="w-full bg-background/95 backdrop-blur text-foreground py-3 text-sm tracking-wide uppercase font-medium hover:bg-background"
            onClick={(e) => {
              e.preventDefault();
              addItem({ ...product, variant: product.variants[0], quantity: 1 });
            }}
          >
            Quick Add
          </button>
        </div>
      </Link>
      <div className="flex flex-col items-center text-center">
        <Link to={`/product/${product.id}`} className="font-serif text-sm md:text-base uppercase tracking-wider mb-2">
          {product.name}
        </Link>
        <p className="text-muted-foreground">${product.price}</p>
      </div>
    </div>
  );
}

function CategoryCard({ title, image }) {
  return (
    <Link to="/collection" className="relative group block overflow-hidden aspect-[4/5] rounded-sm">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
      <div className="absolute inset-x-0 bottom-0 p-8 flex justify-center">
        <div className="bg-white/95 backdrop-blur px-8 py-3 uppercase tracking-widest text-sm font-medium transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          {title}
        </div>
      </div>
    </Link>
  );
}