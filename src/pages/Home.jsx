import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { products } from '../data/products';
import { toast } from 'sonner';

const Home = () => {
  const { addToCart } = useCart();
  const bestsellers = products.slice(0, 5);

  const ugcItems = [
    { id: 1, caption: "Morning light", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80" },
    { id: 2, caption: "Golden hour", img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&q=80" },
    { id: 3, caption: "Effortless", img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&q=80" },
    { id: 4, caption: "Timeless", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80" },
    { id: 5, caption: "Everyday luxury", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" },
  ];

  const handleAddToCart = (product) => {
    addToCart(product);
    toast.success(`${product.name} added to cart`);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[100dvh] min-h-[700px] flex items-center justify-center pt-20">
        <div className="absolute inset-0 bg-[#2C2825]">
          <img 
            src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=2000&q=90" 
            alt="Velmora Jewelry"
            className="w-full h-full object-cover opacity-90"
          />
        </div>
        <div className="relative z-10 text-center px-6 max-w-3xl">
          <h1 className="serif text-6xl md:text-7xl text-white tracking-[-0.02em] mb-6">
            Crafted to be Treasured
          </h1>
          <p className="text-white/90 text-lg md:text-xl mb-8 tracking-wide">
            Demi-fine gold jewelry, thoughtfully designed for the modern woman.
          </p>
          <Link 
            to="/shop" 
            className="inline-block px-10 py-4 bg-[#C5A26F] text-white text-sm tracking-[0.15em] uppercase hover:bg-[#8B7355] transition-colors"
          >
            Shop the Collection
          </Link>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="border-b border-[#D4C9B8] py-4">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-xs tracking-[0.1em] uppercase text-[#6B665F]">
            <span>Free Worldwide Shipping</span>
            <span>30-Day Returns</span>
            <span>18K Gold Plated</span>
            <span>Hypoallergenic</span>
          </div>
        </div>
      </div>

      {/* Bestsellers */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex items-end justify-between mb-8">
          <div>
            <span className="text-xs tracking-[0.15em] uppercase text-[#8B7355]">Signature Pieces</span>
            <h2 className="serif text-4xl mt-1">Bestsellers</h2>
          </div>
          <Link to="/shop" className="text-sm tracking-[0.08em] uppercase hover:text-[#8B7355]">View All →</Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {bestsellers.map((product) => (
            <div key={product.id} className="product-card group">
              <Link to={`/product/${product.id}`} className="block relative aspect-[4/3.5] overflow-hidden bg-[#E5DFD6]">
                <img
                  src={product.image1}
                  alt={product.name}
                  className="product-image primary absolute inset-0 w-full h-full object-cover"
                />
                <img
                  src={product.image2}
                  alt={product.name}
                  className="product-image secondary absolute inset-0 w-full h-full object-cover opacity-0"
                />
              </Link>
              <div className="p-4">
                <Link to={`/product/${product.id}`}>
                  <h3 className="serif text-sm tracking-[0.1em] uppercase mb-1 group-hover:text-[#8B7355] transition-colors">{product.name}</h3>
                </Link>
                <p className="text-sm text-[#6B665F] mb-3">${product.price}</p>
                <button 
                  onClick={() => handleAddToCart(product)}
                  className="w-full py-2.5 text-xs tracking-[0.1em] uppercase border border-[#2C2825] hover:bg-[#2C2825] hover:text-white transition-all"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* UGC Reel Row */}
      <section className="bg-[#F8F5F1] py-12 border-y border-[#D4C9B8]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <span className="text-xs tracking-[0.15em] uppercase text-[#8B7355]">Real Moments</span>
              <h2 className="serif text-3xl mt-1">As Seen on You</h2>
            </div>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
            {ugcItems.map((item) => (
              <div key={item.id} className="flex-shrink-0 w-[180px] snap-start">
                <div className="relative aspect-[9/16] overflow-hidden bg-[#E5DFD6] rounded-sm">
                  <img src={item.img} alt={item.caption} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/40" />
                  <p className="absolute bottom-4 left-4 right-4 serif text-white text-sm tracking-wide">{item.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shop by Category */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-10">
          <span className="text-xs tracking-[0.15em] uppercase text-[#8B7355]">Discover</span>
          <h2 className="serif text-4xl mt-2">Shop by Category</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { name: "Earrings", path: "/shop", img: "https://picsum.photos/id/1011/800/600" },
            { name: "Necklaces", path: "/shop", img: "https://picsum.photos/id/106/800/600" },
            { name: "Huggies", path: "/shop", img: "https://picsum.photos/id/160/800/600" },
          ].map((cat, idx) => (
            <Link key={idx} to={cat.path} className="group relative aspect-[16/10] overflow-hidden bg-[#E5DFD6]">
              <img src={cat.img} alt={cat.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="serif text-white text-3xl tracking-wide">{cat.name}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Brand Story */}
      <section className="max-w-7xl mx-auto px-6 py-16 border-t border-[#D4C9B8]">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="aspect-[4/3] bg-[#E5DFD6]">
            <img 
              src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=1000&q=80" 
              alt="Our Craft" 
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <span className="text-xs tracking-[0.15em] uppercase text-[#8B7355]">Since 2018</span>
            <h2 className="serif text-4xl mt-3 mb-6">Our Story</h2>
            <p className="text-[#6B665F] leading-relaxed mb-8">
              Velmora was born from a simple belief: that beautiful, lasting jewelry should be accessible. 
              Each piece is crafted with intention, using 18K gold plating and hypoallergenic materials 
              that feel as good as they look.
            </p>
            <Link to="/about" className="inline-block text-sm tracking-[0.1em] uppercase border-b border-[#2C2825] pb-0.5 hover:text-[#8B7355] hover:border-[#8B7355]">Read More →</Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-[#F8F5F1] py-16 border-y border-[#D4C9B8]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-10">
            <span className="text-xs tracking-[0.15em] uppercase text-[#8B7355]">Kind Words</span>
            <h2 className="serif text-4xl mt-2">From Our Community</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Elena M.", text: "The quality is exceptional. My huggies have become my everyday staple." },
              { name: "Sofia R.", text: "Beautiful packaging and even more beautiful jewelry. Perfect gift for my sister." },
              { name: "Maya K.", text: "Finally found pieces that don't irritate my sensitive skin. Thank you!" },
            ].map((review, idx) => (
              <div key={idx} className="text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-[#C5A26F] text-[#C5A26F]" />)}
                </div>
                <p className="text-[#6B665F] italic mb-4">"{review.text}"</p>
                <p className="text-sm tracking-[0.05em] uppercase">{review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="max-w-3xl mx-auto px-6 py-16 text-center">
        <span className="text-xs tracking-[0.15em] uppercase text-[#8B7355]">Stay Connected</span>
        <h2 className="serif text-4xl mt-3 mb-4">Join for 10% Off</h2>
        <p className="text-[#6B665F] mb-8">Be the first to know about new arrivals and exclusive offers.</p>
        <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => { e.preventDefault(); toast.success("Thank you for subscribing!"); }}>
          <input 
            type="email" 
            placeholder="Your email address" 
            className="flex-1 px-5 py-3 border border-[#D4C9B8] focus:outline-none focus:border-[#8B7355] text-sm"
            required 
          />
          <button type="submit" className="px-8 py-3 bg-[#2C2825] text-white text-sm tracking-[0.1em] uppercase hover:bg-[#8B7355] transition-colors">
            Subscribe
          </button>
        </form>
      </section>
    </div>
  );
};

export default Home;
