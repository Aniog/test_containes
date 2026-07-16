import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { products } from '../data/products';

const Home = ({ onAddToCart }) => {
  const bestsellers = products.slice(0, 5);
  
  const ugcItems = [
    { id: 1, caption: "Morning light", image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&q=80" },
    { id: 2, caption: "Golden hour", image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&q=80" },
    { id: 3, caption: "Effortless elegance", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80" },
    { id: 4, caption: "Timeless beauty", image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&q=80" },
    { id: 5, caption: "Quiet luxury", image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&q=80" },
  ];

  const testimonials = [
    { name: "Elena M.", text: "The quality is exceptional. I've worn my huggies daily for months and they still look brand new." },
    { name: "Sophia R.", text: "Beautiful packaging and even more beautiful jewelry. The perfect gift for my sister." },
    { name: "Isabella T.", text: "Finally found jewelry that doesn't irritate my sensitive skin. The gold tone is so rich." },
  ];

  return (
    <div className="pt-20">
      {/* 1. Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center bg-[#1C1917] overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=2000&q=80')] bg-cover bg-center opacity-70" />
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="font-serif text-6xl md:text-7xl text-white tracking-[0.05em] mb-6">
            Crafted to be Treasured
          </h1>
          <p className="text-white/80 text-lg mb-10 tracking-wide">
            Demi-fine jewelry for the modern woman
          </p>
          <Link to="/shop" className="btn-gold inline-block">
            Shop the Collection
          </Link>
        </div>
      </section>

      {/* 2. Trust Bar */}
      <div className="border-b border-[#E5DFD3] py-4">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-xs tracking-[0.15em] text-[#6B665F] uppercase text-center">
            <span>Free Worldwide Shipping</span>
            <span className="hidden md:inline">·</span>
            <span>30-Day Returns</span>
            <span className="hidden md:inline">·</span>
            <span>18K Gold Plated</span>
            <span className="hidden md:inline">·</span>
            <span>Hypoallergenic</span>
          </div>
        </div>
      </div>

      {/* 3. Bestsellers */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-xs tracking-[0.2em] text-[#6B665F] uppercase mb-2">Signature Pieces</p>
            <h2 className="font-serif text-4xl tracking-[0.02em]">Bestsellers</h2>
          </div>
          <Link to="/shop" className="text-sm tracking-wide underline hover:text-[#B8976F]">View All</Link>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {bestsellers.map((product) => (
            <div key={product.id} className="product-card group">
              <div className="product-image-container aspect-[4/3] mb-4">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="product-image absolute inset-0 w-full h-full object-cover"
                />
                <img 
                  src={product.imageSecondary} 
                  alt={product.name}
                  className="product-image-secondary absolute inset-0 w-full h-full object-cover"
                />
                <button 
                  onClick={() => onAddToCart(product)}
                  className="quick-add btn-gold text-xs px-6 py-2.5"
                >
                  Quick Add
                </button>
              </div>
              <Link to={`/product/${product.id}`}>
                <p className="product-name text-sm tracking-[0.1em] mb-1 group-hover:text-[#B8976F] transition-colors">{product.name}</p>
              </Link>
              <p className="text-sm text-[#6B665F]">${product.price}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. UGC Reel Row */}
      <section className="bg-[#F5F1E9] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs tracking-[0.2em] text-[#6B665F] uppercase mb-8 text-center">As Seen On You</p>
          <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
            {ugcItems.map((item) => (
              <div key={item.id} className="ugc-card w-[180px] aspect-[9/16] bg-[#1C1917] snap-start">
                <img src={item.image} alt={item.caption} className="w-full h-full object-cover" />
                <div className="ugc-caption">
                  <p>{item.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Shop by Category */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <p className="text-xs tracking-[0.2em] text-[#6B665F] uppercase mb-8 text-center">Discover</p>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { name: "Earrings", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80" },
            { name: "Necklaces", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80" },
            { name: "Huggies", image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&q=80" },
          ].map((cat) => (
            <Link key={cat.name} to={`/shop?category=${cat.name}`} className="category-tile aspect-[16/10] bg-[#1C1917]">
              <img src={cat.image} alt={cat.name} className="w-full h-full object-cover" />
              <span className="category-label">{cat.name}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* 6. Brand Story */}
      <section className="bg-[#1C1917] text-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2">
          <div className="aspect-[4/3] md:aspect-auto">
            <img 
              src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1200&q=80" 
              alt="Velmora atelier" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center p-12 md:p-16">
            <p className="text-xs tracking-[0.2em] text-[#B8976F] uppercase mb-4">Since 2019</p>
            <h2 className="font-serif text-4xl tracking-[0.02em] mb-6">Our Story</h2>
            <p className="text-white/70 leading-relaxed mb-8 max-w-md">
              Velmora was born from a desire to create jewelry that feels as precious as the moments it marks. 
              Each piece is thoughtfully designed in our atelier and crafted with the finest materials.
            </p>
            <Link to="/" className="text-sm tracking-wide underline hover:text-[#B8976F] inline-block w-fit">
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>

      {/* 7. Testimonials */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <p className="text-xs tracking-[0.2em] text-[#6B665F] uppercase mb-10 text-center">Voices of Velmora</p>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="text-center">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={14} className="text-[#B8976F] fill-[#B8976F]" />
                ))}
              </div>
              <p className="text-sm text-[#2C2825] leading-relaxed mb-4">"{t.text}"</p>
              <p className="text-xs tracking-[0.1em] text-[#6B665F]">{t.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 8. Newsletter */}
      <section className="bg-[#F5F1E9] py-16">
        <div className="max-w-md mx-auto px-6 text-center">
          <h3 className="font-serif text-3xl tracking-[0.02em] mb-3">Join for 10% off</h3>
          <p className="text-sm text-[#6B665F] mb-8">Be the first to know about new arrivals and exclusive offers.</p>
          <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-1 px-5 py-3.5 text-sm border border-[#E5DFD3] bg-white focus:outline-none focus:border-[#B8976F]"
            />
            <button type="submit" className="btn-gold whitespace-nowrap">Subscribe</button>
          </form>
        </div>
      </section>

      {/* 9. Footer */}
      <footer className="bg-[#1C1917] text-white/60 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-y-12 text-sm">
          <div>
            <p className="font-serif text-white text-xl tracking-[0.2em] mb-6">VELMORA</p>
          </div>
          
          <div>
            <p className="text-white tracking-[0.1em] uppercase text-xs mb-4">Shop</p>
            <div className="space-y-2">
              <Link to="/shop?category=Earrings" className="block hover:text-white">Earrings</Link>
              <Link to="/shop?category=Necklaces" className="block hover:text-white">Necklaces</Link>
              <Link to="/shop?category=Huggies" className="block hover:text-white">Huggies</Link>
            </div>
          </div>
          
          <div>
            <p className="text-white tracking-[0.1em] uppercase text-xs mb-4">Help</p>
            <div className="space-y-2">
              <a href="#" className="block hover:text-white">Shipping</a>
              <a href="#" className="block hover:text-white">Returns</a>
              <a href="#" className="block hover:text-white">Care Guide</a>
              <a href="#" className="block hover:text-white">Contact</a>
            </div>
          </div>
          
          <div>
            <p className="text-white tracking-[0.1em] uppercase text-xs mb-4">Company</p>
            <div className="space-y-2">
              <a href="#" className="block hover:text-white">Our Story</a>
              <a href="#" className="block hover:text-white">Journal</a>
              <a href="#" className="block hover:text-white">Stockists</a>
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs tracking-[0.1em]">
          <p>© {new Date().getFullYear()} Velmora. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Instagram</a>
            <a href="#" className="hover:text-white">Pinterest</a>
            <a href="#" className="hover:text-white">TikTok</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;