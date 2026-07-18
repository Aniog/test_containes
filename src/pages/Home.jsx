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
    { id: 2, caption: "Golden hour" },
    { id: 3, caption: "Everyday elegance" },
    { id: 4, caption: "Timeless beauty" },
    { id: 5, caption: "Effortless charm" },
  ];

  const testimonials = [
    { name: "Elena M.", text: "The quality is exceptional. My necklace has become my signature piece." },
    { name: "Sophia R.", text: "Beautiful craftsmanship. I wear my huggies every single day." },
    { name: "Isabella K.", text: "The perfect gift. My sister hasn't taken off her earrings since." },
  ];

  return (
    <div className="pt-20">
      {/* 1. Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center bg-[#1C1A17] overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1600&q=80')] bg-cover bg-center opacity-70" />
        <div className="relative z-10 text-center px-6 max-w-3xl">
          <h1 className="serif text-6xl md:text-7xl text-white tracking-[-0.02em] mb-6">
            Crafted to be Treasured
          </h1>
          <p className="text-[#F8F5F1] text-lg mb-10 tracking-wide">
            Demi-fine gold jewelry, made to last a lifetime.
          </p>
          <Link to="/shop" className="velmora-btn inline-block">
            Shop the Collection
          </Link>
        </div>
      </section>

      {/* 2. Trust Bar */}
      <div className="trust-bar bg-white border-b border-[#E5DFD4] py-4">
        <div className="max-w-[1400px] mx-auto px-6 flex flex-wrap justify-center gap-x-8 gap-y-2 text-center text-[#6B665F]">
          <span>Free Worldwide Shipping</span>
          <span className="hidden md:inline">·</span>
          <span>30-Day Returns</span>
          <span className="hidden md:inline">·</span>
          <span>18K Gold Plated</span>
          <span className="hidden md:inline">·</span>
          <span>Hypoallergenic</span>
        </div>
      </div>

      {/* 3. Bestsellers */}
      <section className="max-w-[1400px] mx-auto px-6 py-20">
        <div className="flex justify-between items-end mb-10">
          <div>
            <span className="text-xs tracking-[0.2em] text-[#B8976F]">DISCOVER</span>
            <h2 className="serif text-4xl mt-2">Bestsellers</h2>
          </div>
          <Link to="/shop" className="text-sm tracking-[0.1em] hover:text-[#B8976F] transition-colors">View All →</Link>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {bestsellers.map((product) => (
            <div key={product.id} className="velmora-card bg-white group">
              <div className="product-image-container aspect-[4/3.5] bg-[#F5F1EA] relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="product-image w-full h-full object-cover"
                />
                <img 
                  src={product.imageSecondary} 
                  alt={product.name}
                  className="product-image-secondary w-full h-full object-cover"
                />
                <button 
                  onClick={() => addToCart(product)}
                  className="quick-add-btn velmora-btn text-xs"
                >
                  Add to Cart
                </button>
              </div>
              <div className="p-5">
                <Link to={`/product/${product.id}`} className="product-name text-sm block hover:text-[#B8976F] transition-colors">
                  {product.name}
                </Link>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-sm text-[#6B665F]">${product.price}</span>
                  <div className="flex text-[#B8976F]">
                    {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. UGC Reel Row */}
      <section className="bg-[#1C1A17] py-16">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex items-center justify-between mb-8">
            <span className="text-[#B8976F] text-xs tracking-[0.2em]">AS SEEN ON YOU</span>
            <a href="https://instagram.com" target="_blank" className="text-[#F8F5F1] text-sm tracking-[0.1em] hover:text-[#B8976F]">@velmora →</a>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
            {ugcItems.map((item, idx) => (
              <div key={item.id} className="ugc-card aspect-[9/16] bg-[#2C2823]">
                <div className="w-full h-full bg-gradient-to-br from-[#B8976F]/20 to-transparent flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-12 h-12 mx-auto mb-4 rounded-full border border-[#B8976F]/40" />
                  </div>
                </div>
                <div className="ugc-caption text-center">{item.caption}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Shop by Category */}
      <section className="max-w-[1400px] mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <span className="text-xs tracking-[0.2em] text-[#B8976F]">EXPLORE</span>
          <h2 className="serif text-4xl mt-2">Shop by Category</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {['Earrings', 'Necklaces', 'Huggies'].map((cat, idx) => (
            <Link key={idx} to="/shop" className="category-tile aspect-[4/3] bg-[#1C1A17] flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full border border-[#B8976F]/30" />
              </div>
              <span className="category-label">{cat}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* 6. Brand Story */}
      <section className="max-w-[1400px] mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="aspect-[4/3] bg-[#F5F1EA]" />
          <div>
            <span className="text-xs tracking-[0.2em] text-[#B8976F]">OUR HERITAGE</span>
            <h2 className="serif text-4xl mt-3 mb-6">Our Story</h2>
            <p className="text-[#6B665F] leading-relaxed mb-8">
              Founded in 2018, Velmora was born from a desire to create jewelry that feels both timeless and modern. 
              Each piece is thoughtfully designed in our studio and crafted with the finest materials, 
              ensuring beauty that endures.
            </p>
            <Link to="/" className="velmora-btn-outline inline-block">Learn More</Link>
          </div>
        </div>
      </section>

      {/* 7. Testimonials */}
      <section className="bg-white py-20">
        <div className="max-w-[1000px] mx-auto px-6 text-center">
          <span className="text-xs tracking-[0.2em] text-[#B8976F]">LOVED BY MANY</span>
          <h2 className="serif text-4xl mt-3 mb-14">What Our Clients Say</h2>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            {testimonials.map((t, idx) => (
              <div key={idx} className="border-l-2 border-[#B8976F] pl-6">
                <div className="flex mb-4 text-[#B8976F]">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                <p className="text-[#6B665F] mb-4 leading-relaxed">"{t.text}"</p>
                <p className="text-sm tracking-[0.1em]">{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Newsletter */}
      <section className="bg-[#1C1A17] py-20">
        <div className="max-w-md mx-auto px-6 text-center">
          <span className="text-[#B8976F] text-xs tracking-[0.2em]">MEMBERS ONLY</span>
          <h2 className="serif text-3xl text-white mt-3 mb-4">Join for 10% off your first order</h2>
          <p className="text-[#6B665F] mb-8">Be the first to discover new collections and exclusive offers.</p>
          <div className="flex">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="newsletter-input flex-1"
            />
            <button className="velmora-btn">Subscribe</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;