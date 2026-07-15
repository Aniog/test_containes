import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { toast } from 'sonner';

const Home = () => {
  const { addToCart } = useCart();

  const bestsellers = products.slice(0, 5);
  
  const ugcItems = [
    { id: 1, caption: "Morning light", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80" },
    { id: 2, caption: "Golden hour", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80" },
    { id: 3, caption: "Effortless", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" },
    { id: 4, caption: "Everyday luxe", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80" },
    { id: 5, caption: "Timeless", image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&q=80" },
  ];

  const testimonials = [
    { name: "Elena M.", text: "The quality is exceptional. My huggies have become my daily signature.", rating: 5 },
    { name: "Sofia R.", text: "Beautiful packaging and even more beautiful jewelry. A gift I treasure.", rating: 5 },
    { name: "Isabella K.", text: "Finally found pieces that feel special without being ostentatious.", rating: 5 },
  ];

  const handleAddToCart = (product) => {
    addToCart(product);
    toast.success(`${product.name} added to cart`);
  };

  return (
    <div className="pt-20">
      {/* 1. Hero */}
      <section className="relative h-[90vh] flex items-center justify-center bg-[#F1EDE7]">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=2000&q=80')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 text-center px-6 max-w-3xl">
          <h1 className="serif text-6xl md:text-7xl text-white tracking-[-0.02em] mb-6">
            Crafted to be Treasured
          </h1>
          <p className="text-white/90 text-lg mb-8 tracking-wide">
            Demi-fine gold jewelry for the modern woman
          </p>
          <Link to="/shop" className="btn btn-gold inline-block">
            Shop the Collection
          </Link>
        </div>
      </section>

      {/* 2. Trust Bar */}
      <div className="trust-bar py-4 border-b border-[#E5DFD4] bg-white">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-x-8 gap-y-2 text-center">
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
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <div className="filter-label mb-2">Signature Pieces</div>
            <h2 className="serif text-4xl">Bestsellers</h2>
          </div>
          <Link to="/shop" className="text-sm tracking-[0.1em] hover:text-[#8B7355]">View All →</Link>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {bestsellers.map((product) => (
            <div key={product.id} className="product-card group">
              <Link to={`/product/${product.id}`} className="block relative aspect-[4/3] bg-[#F1EDE7] overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="primary absolute inset-0 w-full h-full object-cover"
                />
                <img 
                  src={product.imageSecondary} 
                  alt={product.name}
                  className="secondary absolute inset-0 w-full h-full object-cover opacity-0"
                />
              </Link>
              <div className="p-4">
                <Link to={`/product/${product.id}`}>
                  <div className="product-name text-sm tracking-wider mb-1">{product.name}</div>
                </Link>
                <div className="flex items-center justify-between">
                  <span className="text-sm">${product.price}</span>
                  <button 
                    onClick={() => handleAddToCart(product)}
                    className="text-xs tracking-[0.1em] px-4 py-1.5 border border-[#2C2823] hover:bg-[#2C2823] hover:text-white transition-all"
                  >
                    ADD TO CART
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. UGC Reel */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="filter-label mb-8 text-center">As Seen On You</div>
          <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
            {ugcItems.map((item) => (
              <div key={item.id} className="ugc-card flex-shrink-0 w-[180px] snap-start">
                <div className="relative aspect-[9/16] bg-[#F1EDE7] overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.caption}
                    className="w-full h-full object-cover"
                  />
                  <div className="caption absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                    <p className="serif text-white text-sm tracking-wide">{item.caption}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Shop by Category */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="filter-label mb-8 text-center">Discover</div>
        <h2 className="serif text-4xl text-center mb-12">Shop by Category</h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { name: "Earrings", path: "/shop", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80" },
            { name: "Necklaces", path: "/shop", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80" },
            { name: "Huggies", path: "/shop", image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&q=80" },
          ].map((cat) => (
            <Link key={cat.name} to={cat.path} className="category-tile group block aspect-[4/3] overflow-hidden bg-[#F1EDE7]">
              <div className="relative h-full">
                <img src={cat.image} alt={cat.name} className="w-full h-full object-cover" />
                <div className="overlay absolute inset-0 bg-black/40 flex items-center justify-center">
                  <span className="text-white serif text-3xl tracking-[0.1em] opacity-0 group-hover:opacity-100 transition-opacity">
                    {cat.name}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 6. Brand Story */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2">
          <div className="aspect-[4/3] md:aspect-auto bg-[url('https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=1200&q=80')] bg-cover bg-center" />
          <div className="px-8 md:px-16 py-16 md:py-20 flex flex-col justify-center">
            <div className="filter-label mb-4">Since 2019</div>
            <h2 className="serif text-4xl mb-6">Our Story</h2>
            <p className="text-[#6B665E] leading-relaxed mb-8">
              Velmora was born from a desire to create jewelry that feels personal, not performative. 
              Each piece is thoughtfully designed in our studio and crafted with the finest materials, 
              meant to be worn, loved, and passed down.
            </p>
            <Link to="/" className="btn btn-outline w-fit">Learn More</Link>
          </div>
        </div>
      </section>

      {/* 7. Testimonials */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="filter-label mb-8 text-center">Voices from Our Community</div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="testimonial pl-6">
              <div className="flex mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={14} className="fill-[#C5A46E] text-[#C5A46E]" />
                ))}
              </div>
              <p className="text-[#6B665E] mb-4 leading-relaxed">"{t.text}"</p>
              <p className="text-sm tracking-[0.05em]">{t.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 8. Newsletter */}
      <section className="newsletter py-16">
        <div className="max-w-md mx-auto px-6 text-center">
          <div className="serif text-3xl mb-3">Join for 10% off</div>
          <p className="text-[#9A958C] mb-8 text-sm tracking-wide">Be the first to know about new arrivals and stories</p>
          <form className="flex" onSubmit={(e) => { e.preventDefault(); toast.success('Thank you for subscribing'); }}>
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-1 px-5 py-3.5 bg-white text-[#2C2823] text-sm placeholder:text-[#9A958C] border-0 focus:outline-none"
              required
            />
            <button type="submit" className="btn btn-gold px-8">Subscribe</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;