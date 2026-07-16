import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

const Home = () => {
  const { addToCart } = useCart();
  const bestsellers = products.slice(0, 5);

  const ugcItems = [
    { id: 1, caption: "Morning light" },
    { id: 2, caption: "Everyday elegance" },
    { id: 3, caption: "Golden hour" },
    { id: 4, caption: "Effortless beauty" },
    { id: 5, caption: "Timeless pieces" }
  ];

  const categories = [
    { name: "Earrings", path: "/shop" },
    { name: "Necklaces", path: "/shop" },
    { name: "Huggies", path: "/shop" }
  ];

  const testimonials = [
    { name: "Elena M.", text: "The quality is exceptional. My necklace has become my signature piece." },
    { name: "Sophia R.", text: "Beautiful packaging and even more beautiful jewelry. A gift I treasure." },
    { name: "Isabella K.", text: "Finally found pieces that feel both special and wearable every day." }
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[100dvh] min-h-[700px] flex items-center justify-center bg-[#1C1C1C] overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=2000&q=80')] bg-cover bg-center opacity-70" />
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="serif text-6xl md:text-7xl text-white tracking-[0.05em] mb-6">
            Crafted to be Treasured
          </h1>
          <p className="text-[#F8F5F0] text-lg mb-10 tracking-wide">
            Demi-fine jewelry for the modern woman
          </p>
          <Link to="/shop" className="btn btn-primary inline-block">
            Shop the Collection
          </Link>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <div className="w-px h-12 bg-white/40" />
        </div>
      </section>

      {/* Trust Bar */}
      <div className="border-b border-[#E5E0D8] py-4">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-xs tracking-[0.15em] uppercase text-[#8B7E74]">
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

      {/* Bestsellers */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex justify-between items-end mb-10">
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-[#C5A46E] mb-2">Signature Pieces</p>
            <h2 className="serif text-4xl">Bestsellers</h2>
          </div>
          <Link to="/shop" className="text-sm tracking-wider hover:text-[#C5A46E]">View All →</Link>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {bestsellers.map((product) => (
            <div key={product.id} className="product-card group">
              <Link to={`/product/${product.id}`} className="block relative aspect-[4/3] bg-[#FAF8F4] overflow-hidden">
                <img 
                  src={product.images.primary} 
                  alt={product.name}
                  className="primary absolute inset-0 w-full h-full object-cover"
                />
                <img 
                  src={product.images.secondary} 
                  alt={product.name}
                  className="secondary absolute inset-0 w-full h-full object-cover opacity-0"
                />
              </Link>
              <div className="p-4">
                <Link to={`/product/${product.id}`}>
                  <p className="product-name text-sm tracking-wider mb-1">{product.name}</p>
                </Link>
                <p className="text-[#8B7E74] text-sm mb-3">${product.price}</p>
                <button 
                  onClick={() => addToCart(product)}
                  className="quick-add btn btn-primary w-full text-xs py-2.5"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* UGC Reel */}
      <section className="bg-[#FAF8F4] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-xs tracking-[0.2em] uppercase text-[#C5A46E] mb-8">As Seen On You</p>
          <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
            {ugcItems.map((item, idx) => (
              <div key={item.id} className="ugc-card flex-shrink-0 w-[180px] aspect-[9/16] bg-[#1C1C1C] relative snap-start overflow-hidden">
                <img 
                  src={bestsellers[idx % bestsellers.length].images.primary} 
                  alt={item.caption}
                  className="w-full h-full object-cover opacity-90"
                />
                <div className="caption absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                  <p className="serif text-white text-sm tracking-wide">{item.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shop by Category */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.2em] uppercase text-[#C5A46E] mb-2">Discover</p>
          <h2 className="serif text-4xl">Shop by Category</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {categories.map((cat, idx) => (
            <Link key={idx} to={cat.path} className="category-tile aspect-[16/10] bg-[#1C1C1C] relative overflow-hidden block">
              <img 
                src={bestsellers[idx].images.primary} 
                alt={cat.name}
                className="w-full h-full object-cover opacity-80"
              />
              <div className="overlay" />
              <div className="label">
                <span className="text-white text-sm tracking-[0.15em] uppercase border-b border-white pb-1">{cat.name}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Brand Story */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="aspect-[4/3] bg-[#FAF8F4]">
            <img 
              src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=1200&q=80" 
              alt="Our atelier"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-[#C5A46E] mb-4">Since 2018</p>
            <h2 className="serif text-4xl mb-6">Our Story</h2>
            <p className="text-[#8B7E74] leading-relaxed mb-8">
              Velmora was born from a simple belief: that beautiful jewelry should be accessible without compromise. 
              Each piece is thoughtfully designed in our studio and crafted with the finest materials, 
              creating treasures meant to be worn, loved, and passed down.
            </p>
            <Link to="/" className="btn btn-outline inline-block">Learn More</Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-xs tracking-[0.2em] uppercase text-[#C5A46E] mb-2">Voices of Velmora</p>
            <h2 className="serif text-4xl">What Our Clients Say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <div key={idx} className="text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#C5A46E] text-[#C5A46E]" />
                  ))}
                </div>
                <p className="text-[#8B7E74] italic mb-4">"{t.text}"</p>
                <p className="text-sm tracking-wider">— {t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="max-w-3xl mx-auto px-6 py-20 text-center">
        <div className="bg-[#1C1C1C] text-white p-12 md:p-16">
          <p className="text-xs tracking-[0.2em] uppercase text-[#C5A46E] mb-4">Stay Connected</p>
          <h2 className="serif text-3xl mb-4">Join for 10% off your first order</h2>
          <p className="text-[#8B7E74] mb-8">Be the first to know about new arrivals and special collections.</p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-1 px-5 py-3.5 bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-[#C5A46E]"
            />
            <button type="submit" className="btn btn-primary">Subscribe</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;