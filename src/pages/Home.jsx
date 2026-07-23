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
    { id: 1, caption: "Morning light", image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&q=80" },
    { id: 2, caption: "Golden hour", image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&q=80" },
    { id: 3, caption: "Effortless", image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&q=80" },
    { id: 4, caption: "Everyday luxury", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80" },
    { id: 5, caption: "Timeless", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80" },
  ];

  const categories = [
    { name: "Earrings", path: "/shop", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=80" },
    { name: "Necklaces", path: "/shop", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=80" },
    { name: "Huggies", path: "/shop", image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=600&q=80" },
  ];

  const testimonials = [
    { name: "Elena M.", text: "The quality is exceptional. I've worn my huggies daily for months and they still look brand new." },
    { name: "Sophia R.", text: "Bought the Flora necklace as a gift for my sister. She hasn't taken it off since." },
    { name: "Isabella T.", text: "Velmora pieces feel like heirlooms. Beautiful packaging and thoughtful details." },
  ];

  const handleAddToCart = (product) => {
    addToCart(product, product.variants[0]);
    toast.success(`${product.name} added to cart`);
  };

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-[90vh] flex items-center justify-center bg-[#2C2825] overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=2000&q=80')] bg-cover bg-center opacity-70" />
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="font-serif text-6xl md:text-7xl text-white tracking-[0.08em] mb-6">
            Crafted to be Treasured
          </h1>
          <p className="text-white/90 text-lg mb-10 tracking-[0.05em]">
            Demi-fine jewelry made with intention. Timeless pieces for the modern woman.
          </p>
          <Link to="/shop" className="btn-primary inline-block">
            Shop the Collection
          </Link>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="border-b border-[#E5DFD6] py-4">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-x-10 gap-y-2 text-xs tracking-[0.12em] text-[#6B635C]">
          <span>Free Worldwide Shipping</span>
          <span>30-Day Returns</span>
          <span>18K Gold Plated</span>
          <span>Hypoallergenic</span>
        </div>
      </div>

      {/* Bestsellers */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex justify-between items-end mb-10">
          <div>
            <span className="text-xs tracking-[0.15em] text-[#8B7355]">DISCOVER</span>
            <h2 className="font-serif text-4xl tracking-[0.05em] mt-1">Bestsellers</h2>
          </div>
          <Link to="/shop" className="text-sm tracking-[0.08em] hover:text-[#8B7355] transition-colors hidden md:block">
            View All →
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {bestsellers.map((product) => (
            <div key={product.id} className="product-card group">
              <Link to={`/product/${product.id}`} className="block">
                <div className="product-image-container aspect-[4/3.5] bg-[#F8F5F1] mb-4 overflow-hidden">
                  <img 
                    src={product.images.primary} 
                    alt={product.name}
                    className="product-image primary absolute inset-0 w-full h-full object-cover"
                  />
                  <img 
                    src={product.images.secondary} 
                    alt={product.name}
                    className="product-image secondary absolute inset-0 w-full h-full object-cover opacity-0"
                  />
                </div>
              </Link>
              <div className="px-1">
                <Link to={`/product/${product.id}`}>
                  <p className="product-name text-sm tracking-[0.1em] mb-1 group-hover:text-[#8B7355] transition-colors">{product.name}</p>
                </Link>
                <p className="text-sm text-[#6B635C] mb-3">${product.price}</p>
                <button 
                  onClick={() => handleAddToCart(product)}
                  className="text-xs tracking-[0.1em] border-b border-[#8B7355] pb-0.5 hover:text-[#8B7355] transition-colors"
                >
                  ADD TO CART
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* UGC Reel Row */}
      <section className="bg-white py-16 border-y border-[#E5DFD6]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-8">
            <span className="text-xs tracking-[0.15em] text-[#8B7355]">AS SEEN ON</span>
            <h3 className="font-serif text-3xl tracking-[0.05em] mt-1">Worn by You</h3>
          </div>
          <div className="ugc-scroll flex gap-4 overflow-x-auto pb-4">
            {ugcItems.map((item) => (
              <div key={item.id} className="flex-shrink-0 w-[180px] relative">
                <div className="aspect-[9/16] bg-[#F8F5F1] overflow-hidden">
                  <img src={item.image} alt={item.caption} className="w-full h-full object-cover" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                  <p className="font-serif text-white text-sm tracking-[0.08em]">{item.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shop by Category */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <span className="text-xs tracking-[0.15em] text-[#8B7355]">EXPLORE</span>
          <h2 className="font-serif text-4xl tracking-[0.05em] mt-2">Shop by Category</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {categories.map((cat, idx) => (
            <Link key={idx} to={cat.path} className="group relative aspect-[16/10] overflow-hidden bg-[#F8F5F1]">
              <img src={cat.image} alt={cat.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-serif text-white text-3xl tracking-[0.15em] opacity-0 group-hover:opacity-100 transition-opacity">{cat.name}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Brand Story */}
      <section className="bg-white border-y border-[#E5DFD6]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2">
          <div className="aspect-[4/3] md:aspect-auto bg-[url('https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=1200&q=80')] bg-cover bg-center" />
          <div className="px-8 md:px-16 py-16 md:py-20 flex flex-col justify-center">
            <span className="text-xs tracking-[0.15em] text-[#8B7355]">OUR PHILOSOPHY</span>
            <h2 className="font-serif text-4xl tracking-[0.05em] mt-3 mb-6">Quiet luxury,<br />intentionally made.</h2>
            <p className="text-[#6B635C] leading-relaxed mb-8 max-w-md">
              Every piece is crafted with care using premium materials. We believe jewelry should feel personal—timeless enough to pass down, wearable enough for every day.
            </p>
            <Link to="/" className="btn-outline inline-block w-fit">Our Story</Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-5xl mx-auto px-6 py-20 text-center">
        <span className="text-xs tracking-[0.15em] text-[#8B7355]">LOVED BY MANY</span>
        <h2 className="font-serif text-4xl tracking-[0.05em] mt-2 mb-14">What Our Clients Say</h2>
        <div className="grid md:grid-cols-3 gap-10 text-left">
          {testimonials.map((t, idx) => (
            <div key={idx} className="border-l-2 border-[#C5A46E] pl-6">
              <div className="flex gap-0.5 mb-4 text-[#C5A46E]">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
              </div>
              <p className="text-[#6B635C] italic leading-relaxed mb-4">"{t.text}"</p>
              <p className="text-sm tracking-[0.08em]">{t.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-[#2C2825] py-16">
        <div className="max-w-md mx-auto px-6 text-center">
          <span className="font-serif text-white text-3xl tracking-[0.08em]">Join the Circle</span>
          <p className="text-white/70 mt-3 mb-8 text-sm tracking-[0.05em]">Receive 10% off your first order and early access to new collections.</p>
          <div className="flex">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="newsletter-input flex-1 bg-white text-[#2C2825]"
            />
            <button className="btn-primary">Subscribe</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;