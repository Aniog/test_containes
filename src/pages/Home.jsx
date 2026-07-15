import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import products from '../data/products.json';
import { useCart } from '../context/CartContext';

const Home = ({ onCartClick }) => {
  const { addToCart } = useCart();

  const bestsellers = products.slice(0, 5);
  
  const ugcItems = [
    { id: 1, caption: "Morning light", image: "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=400&q=80" },
    { id: 2, caption: "Golden hour", image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&q=80" },
    { id: 3, caption: "Effortless elegance", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80" },
    { id: 4, caption: "Timeless beauty", image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&q=80" },
    { id: 5, caption: "Quiet luxury", image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&q=80" },
  ];

  const categories = [
    { name: "Earrings", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=80" },
    { name: "Necklaces", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=80" },
    { name: "Huggies", image: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=600&q=80" },
  ];

  const testimonials = [
    { name: "Elena M.", text: "The quality is exceptional. My necklace has become my everyday signature piece." },
    { name: "Sophia R.", text: "Beautifully packaged and even more stunning in person. Worth every penny." },
    { name: "Isabella K.", text: "I bought the huggies for my sister. She wears them constantly. Perfect gift." },
  ];

  const handleAddToCart = (product, e) => {
    e.preventDefault();
    addToCart(product);
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center bg-[#1A1816] overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=2000&q=80')] bg-cover bg-center opacity-70"></div>
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="font-serif text-6xl md:text-7xl text-white tracking-[0.1em] mb-6">
            Crafted to be Treasured
          </h1>
          <p className="text-white/80 text-lg tracking-wide mb-10 max-w-md mx-auto">
            Demi-fine gold jewelry, made with intention for the modern woman.
          </p>
          <Link to="/shop" className="btn-primary inline-block">
            SHOP THE COLLECTION
          </Link>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="border-b border-[#E5E0D8] py-4">
        <div className="max-w-[1400px] mx-auto px-6 flex flex-wrap justify-center gap-x-10 gap-y-2 text-xs tracking-[0.15em] text-[#6B6763]">
          <span>FREE WORLDWIDE SHIPPING</span>
          <span>30-DAY RETURNS</span>
          <span>18K GOLD PLATED</span>
          <span>HYPOALLERGENIC</span>
        </div>
      </div>

      {/* Bestsellers */}
      <section className="max-w-[1400px] mx-auto px-6 py-20">
        <div className="flex justify-between items-end mb-10">
          <div>
            <p className="text-xs tracking-[0.2em] text-[#8B7355] mb-2">DISCOVER</p>
            <h2 className="font-serif text-4xl tracking-[0.05em]">Bestsellers</h2>
          </div>
          <Link to="/shop" className="text-sm tracking-wide hover:text-[#8B7355] transition-colors hidden md:block">
            VIEW ALL →
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {bestsellers.map((product) => (
            <Link key={product.id} to={`/product/${product.id}`} className="product-card group">
              <div className="product-image-container aspect-[4/3.5] bg-[#F0EDE8]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-image product-image-primary w-full h-full object-cover"
                />
                <img
                  src={product.image2}
                  alt={product.name}
                  className="product-image product-image-secondary w-full h-full object-cover"
                />
                <button
                  onClick={(e) => handleAddToCart(product, e)}
                  className="quick-add text-xs tracking-[0.1em] hover:bg-[#2C2A28] hover:text-white hover:border-[#2C2A28]"
                >
                  ADD TO CART
                </button>
              </div>
              <div className="p-5">
                <p className="product-name text-sm tracking-[0.15em] mb-1">{product.name}</p>
                <p className="text-[#6B6763] text-sm">${product.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* UGC Reel Row */}
      <section className="bg-[#1A1816] py-16">
        <div className="max-w-[1400px] mx-auto px-6">
          <p className="text-center text-white/60 text-xs tracking-[0.2em] mb-8">AS SEEN ON YOU</p>
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
            {ugcItems.map((item) => (
              <div key={item.id} className="ugc-card w-[180px] aspect-[9/16] rounded-sm overflow-hidden">
                <img src={item.image} alt={item.caption} className="w-full h-full object-cover" />
                <div className="ugc-caption">{item.caption}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shop by Category */}
      <section className="max-w-[1400px] mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.2em] text-[#8B7355] mb-2">EXPLORE</p>
          <h2 className="font-serif text-4xl tracking-[0.05em]">Shop by Category</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.name}
              to={`/shop?category=${cat.name}`}
              className="category-tile aspect-[4/3] rounded-sm overflow-hidden"
            >
              <img src={cat.image} alt={cat.name} className="w-full h-full object-cover" />
              <span className="category-label tracking-[0.2em]">{cat.name}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Brand Story */}
      <section className="max-w-[1400px] mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="aspect-[4/3] bg-[#F0EDE8] rounded-sm overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=1000&q=80"
              alt="Our atelier"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="text-xs tracking-[0.2em] text-[#8B7355] mb-4">EST. 2018</p>
            <h2 className="font-serif text-5xl tracking-[0.05em] mb-8">Our Story</h2>
            <div className="space-y-5 text-[#6B6763] leading-relaxed">
              <p>
                Velmora was born from a simple belief: that beautiful jewelry should be accessible without compromise.
              </p>
              <p>
                Each piece is thoughtfully designed in our atelier and crafted with 18K gold plating over hypoallergenic materials. We believe in quiet luxury—the kind that feels personal, not performative.
              </p>
            </div>
            <Link to="/shop" className="btn-outline mt-8 inline-block text-sm">
              LEARN MORE
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-20">
        <div className="max-w-[1000px] mx-auto px-6 text-center">
          <p className="text-xs tracking-[0.2em] text-[#8B7355] mb-4">IN THEIR WORDS</p>
          <h2 className="font-serif text-4xl tracking-[0.05em] mb-14">What Our Clients Say</h2>
          <div className="grid md:grid-cols-3 gap-10">
            {testimonials.map((t, i) => (
              <div key={i} className="text-left">
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="#C5A46E" color="#C5A46E" />
                  ))}
                </div>
                <p className="text-[#6B6763] mb-4 leading-relaxed">"{t.text}"</p>
                <p className="text-sm tracking-wide">— {t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-[#1A1816] py-20">
        <div className="max-w-md mx-auto px-6 text-center">
          <p className="text-[#C5A46E] text-xs tracking-[0.2em] mb-3">MEMBERS ONLY</p>
          <h3 className="font-serif text-white text-4xl tracking-[0.05em] mb-4">Join for 10% off</h3>
          <p className="text-white/60 text-sm mb-8">Be the first to discover new arrivals and exclusive offers.</p>
          <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => { e.preventDefault(); alert('Thank you for subscribing!'); }}>
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 bg-white/10 border border-white/20 px-5 py-3 text-white placeholder:text-white/40 text-sm focus:outline-none focus:border-white/40"
              required
            />
            <button type="submit" className="btn-primary whitespace-nowrap">SUBSCRIBE</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#F8F6F3] border-t border-[#E5E0D8] pt-16 pb-10">
        <div className="max-w-[1400px] mx-auto px-6 grid md:grid-cols-4 gap-y-12 text-sm">
          <div>
            <p className="font-serif text-xl tracking-[0.3em] mb-4">VELMORA</p>
            <p className="text-[#6B6763] text-xs tracking-wide">Fine Jewelry</p>
          </div>
          <div>
            <p className="tracking-[0.1em] mb-4 text-[#2C2A28]">SHOP</p>
            <div className="space-y-2 text-[#6B6763]">
              <Link to="/shop" className="block hover:text-[#8B7355]">All Jewelry</Link>
              <Link to="/shop?category=Earrings" className="block hover:text-[#8B7355]">Earrings</Link>
              <Link to="/shop?category=Necklaces" className="block hover:text-[#8B7355]">Necklaces</Link>
              <Link to="/shop?category=Huggies" className="block hover:text-[#8B7355]">Huggies</Link>
            </div>
          </div>
          <div>
            <p className="tracking-[0.1em] mb-4 text-[#2C2A28]">HELP</p>
            <div className="space-y-2 text-[#6B6763]">
              <a href="#" className="block hover:text-[#8B7355]">Shipping</a>
              <a href="#" className="block hover:text-[#8B7355]">Returns</a>
              <a href="#" className="block hover:text-[#8B7355]">Care Guide</a>
              <a href="#" className="block hover:text-[#8B7355]">Contact</a>
            </div>
          </div>
          <div>
            <p className="tracking-[0.1em] mb-4 text-[#2C2A28]">COMPANY</p>
            <div className="space-y-2 text-[#6B6763]">
              <a href="#" className="block hover:text-[#8B7355]">Our Story</a>
              <a href="#" className="block hover:text-[#8B7355]">Journal</a>
              <a href="#" className="block hover:text-[#8B7355]">Sustainability</a>
            </div>
          </div>
        </div>
        <div className="max-w-[1400px] mx-auto px-6 mt-16 pt-8 border-t border-[#E5E0D8] flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#6B6763]">
          <p>© 2026 Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex gap-6">
            <span>MC • VISA • AMEX</span>
            <span>INSTAGRAM • PINTEREST</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;