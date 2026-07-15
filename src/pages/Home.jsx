import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

const Home = () => {
  const { addToCart } = useCart();
  const bestsellers = products.slice(0, 5);

  const ugcItems = [
    { id: 1, caption: "Morning light", img: "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=400&q=80" },
    { id: 2, caption: "Golden hour", img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&q=80" },
    { id: 3, caption: "Effortless elegance", img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&q=80" },
    { id: 4, caption: "Timeless beauty", img: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&q=80" },
    { id: 5, caption: "Quiet luxury", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80" },
  ];

  const testimonials = [
    { name: "Elena M.", text: "The quality is exceptional. My necklace has become my everyday signature piece." },
    { name: "Sofia R.", text: "Beautiful packaging and even more beautiful jewelry. A gift I'll treasure." },
    { name: "Isabella K.", text: "Finally found hypoallergenic earrings that don't compromise on style." },
  ];

  return (
    <div>
      {/* 1. Sticky Nav - handled in Layout */}

      {/* 2. Full-bleed Hero */}
      <section className="relative h-[100dvh] min-h-[700px] flex items-center justify-center bg-[#EDE9E3]">
        <img 
          src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=2000&q=90" 
          alt="Velmora Jewelry"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/25" />
        <div className="relative z-10 text-center px-6 max-w-3xl">
          <h1 className="font-serif text-6xl md:text-7xl text-white tracking-[-0.02em] mb-6">
            Crafted to be Treasured
          </h1>
          <p className="text-white/90 text-lg mb-10 tracking-wide">Demi-fine jewelry for the modern woman</p>
          <Link to="/shop" className="btn btn-accent inline-block">Shop the Collection</Link>
        </div>
      </section>

      {/* 3. Trust Bar */}
      <div className="trust-bar bg-white py-4 border-b border-[#E5E0D8]">
        <div className="max-w-[1400px] mx-auto px-6 flex flex-wrap justify-center gap-x-8 gap-y-2 text-center text-[#6B6560]">
          <span>Free Worldwide Shipping</span>
          <span className="hidden md:inline">·</span>
          <span>30-Day Returns</span>
          <span className="hidden md:inline">·</span>
          <span>18K Gold Plated</span>
          <span className="hidden md:inline">·</span>
          <span>Hypoallergenic</span>
        </div>
      </div>

      {/* 4. Bestsellers */}
      <section className="max-w-[1400px] mx-auto px-6 py-20">
        <div className="flex justify-between items-end mb-10">
          <div>
            <div className="uppercase tracking-[0.2em] text-sm text-[#8B7355] mb-2">Signature Pieces</div>
            <h2 className="font-serif text-4xl">Bestsellers</h2>
          </div>
          <Link to="/shop" className="text-sm tracking-widest uppercase hover:text-[#8B7355]">View All →</Link>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {bestsellers.map((product) => (
            <div key={product.id} className="product-card group">
              <Link to={`/product/${product.id}`} className="block">
                <div className="img-container aspect-[4/3] relative">
                  <img src={product.images[0]} alt={product.name} className="absolute inset-0 w-full h-full object-cover" />
                  <img src={product.images[1]} alt={product.name} className="absolute inset-0 w-full h-full object-cover opacity-0" />
                </div>
              </Link>
              <div className="p-5">
                <Link to={`/product/${product.id}`}>
                  <div className="product-name text-sm tracking-wider mb-1">{product.name}</div>
                </Link>
                <div className="flex justify-between items-center">
                  <span className="text-[#6B6560]">${product.price}</span>
                  <button 
                    onClick={(e) => { e.preventDefault(); addToCart(product, product.variants[0]); }}
                    className="text-xs uppercase tracking-widest px-4 py-1.5 border border-[#2C2825] hover:bg-[#2C2825] hover:text-white transition-all"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. UGC Reel */}
      <section className="bg-[#F5F3EF] py-16">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="uppercase tracking-[0.2em] text-sm text-[#8B7355] mb-8 text-center">As Seen On You</div>
          <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
            {ugcItems.map((item) => (
              <div key={item.id} className="ugc-card w-[220px] aspect-[9/16] rounded-sm overflow-hidden snap-start">
                <img src={item.img} alt={item.caption} className="w-full h-full object-cover" />
                <div className="ugc-caption">{item.caption}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Shop by Category */}
      <section className="max-w-[1400px] mx-auto px-6 py-20">
        <div className="uppercase tracking-[0.2em] text-sm text-[#8B7355] mb-8 text-center">Discover</div>
        <h2 className="font-serif text-4xl text-center mb-12">Shop by Category</h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { name: "Earrings", category: "Earrings", img: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80" },
            { name: "Necklaces", category: "Necklaces", img: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80" },
            { name: "Huggies", category: "Huggies", img: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80" },
          ].map((cat) => (
            <Link key={cat.name} to={`/shop?category=${cat.category}`} className="category-tile aspect-[4/3] overflow-hidden rounded-sm block">
              <img src={cat.img} alt={cat.name} className="w-full h-full object-cover" />
              <div className="label">{cat.name}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* 7. Brand Story */}
      <section className="max-w-[1400px] mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="aspect-[4/3] bg-[#EDE9E3]">
            <img 
              src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=1000&q=80" 
              alt="Our Craft" 
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <div className="uppercase tracking-[0.2em] text-sm text-[#8B7355] mb-4">Since 2018</div>
            <h2 className="font-serif text-5xl mb-8">Our Story</h2>
            <div className="space-y-5 text-[#6B6560] leading-relaxed">
              <p>Velmora was born from a simple belief: that fine jewelry should be accessible without compromise.</p>
              <p>Each piece is thoughtfully designed in our studio and crafted with the highest quality materials—18K gold plating, ethically sourced crystals, and hypoallergenic metals.</p>
            </div>
            <Link to="/" className="inline-block mt-8 text-sm tracking-[0.15em] uppercase border-b border-[#2C2825] pb-1 hover:text-[#8B7355] hover:border-[#8B7355]">Learn More →</Link>
          </div>
        </div>
      </section>

      {/* 8. Testimonials */}
      <section className="bg-white py-20 border-y border-[#E5E0D8]">
        <div className="max-w-[1000px] mx-auto px-6 text-center">
          <div className="uppercase tracking-[0.2em] text-sm text-[#8B7355] mb-8">Voices of Velmora</div>
          <div className="grid md:grid-cols-3 gap-10">
            {testimonials.map((t, i) => (
              <div key={i}>
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, j) => <Star key={j} size={14} fill="#C5A46E" className="text-[#C5A46E]" />)}
                </div>
                <p className="text-[#6B6560] italic mb-4">"{t.text}"</p>
                <div className="text-sm tracking-widest">— {t.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Newsletter */}
      <section className="max-w-[600px] mx-auto px-6 py-20 text-center">
        <div className="uppercase tracking-[0.2em] text-sm text-[#8B7355] mb-4">Stay Connected</div>
        <h2 className="font-serif text-4xl mb-4">Join for 10% off your first order</h2>
        <p className="text-[#6B6560] mb-8">Be the first to know about new arrivals and exclusive offers.</p>
        <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
          <input 
            type="email" 
            placeholder="Your email address" 
            className="input flex-1" 
            required 
          />
          <button type="submit" className="btn btn-accent whitespace-nowrap">Subscribe</button>
        </form>
      </section>
    </div>
  );
};

export default Home;