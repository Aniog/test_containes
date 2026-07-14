import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

const Home = () => {
  const { addToCart } = useCart();
  const bestsellers = products.slice(0, 5);

  const ugcItems = [
    { id: 1, caption: "Everyday elegance", image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&q=80" },
    { id: 2, caption: "Golden hour glow", image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=400&q=80" },
    { id: 3, caption: "Timeless beauty", image: "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=400&q=80" },
    { id: 4, caption: "Effortless luxury", image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&q=80" },
    { id: 5, caption: "Modern heirloom", image: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=400&q=80" },
  ];

  const testimonials = [
    { name: "Elena M.", text: "The quality is exceptional. These pieces feel like true heirlooms.", rating: 5 },
    { name: "Sophia R.", text: "Beautiful packaging and even more beautiful jewelry. My go-to for gifts.", rating: 5 },
    { name: "Isabella T.", text: "I wear my huggies every day. They never tarnish and always get compliments.", rating: 5 },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[90vh] flex items-center justify-center bg-[#F4F1EB]">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=2000&q=80')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="font-serif text-6xl md:text-7xl text-white tracking-[0.1em] mb-6">
            Crafted to be Treasured
          </h1>
          <p className="text-white/90 text-lg mb-10 tracking-[0.05em]">
            Demi-fine jewelry for the modern woman
          </p>
          <Link to="/shop" className="btn btn-gold inline-block">
            Shop the Collection
          </Link>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="border-y border-[#E5E0D8] py-4">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-x-12 gap-y-2 text-xs tracking-[0.15em] text-[#6B665F] uppercase">
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
            <p className="text-xs tracking-[0.2em] text-[#8B7355] mb-2">DISCOVER</p>
            <h2 className="font-serif text-4xl tracking-[0.05em]">Bestsellers</h2>
          </div>
          <Link to="/shop" className="text-sm tracking-[0.1em] hover:text-[#8B7355] transition-colors hidden md:block">
            VIEW ALL →
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {bestsellers.map((product) => (
            <div key={product.id} className="product-card group">
              <Link to={`/product/${product.id}`} className="block relative aspect-[4/3] bg-[#F4F1EB] overflow-hidden">
                <img 
                  src={product.images[0]} 
                  alt={product.name}
                  className="product-image product-image-primary absolute inset-0 w-full h-full object-cover"
                />
                <img 
                  src={product.images[1]} 
                  alt={product.name}
                  className="product-image product-image-secondary absolute inset-0 w-full h-full object-cover opacity-0"
                />
              </Link>
              <div className="pt-4 pb-2">
                <Link to={`/product/${product.id}`}>
                  <p className="product-name text-sm tracking-[0.1em] mb-1">{product.name}</p>
                </Link>
                <p className="text-[#6B665F] text-sm">${product.price}</p>
              </div>
              <button 
                onClick={() => addToCart(product, product.variants[0])}
                className="quick-add btn btn-primary text-xs py-2.5 px-6"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* UGC Reel */}
      <section className="bg-[#F4F1EB] py-16">
        <div className="max-w-7xl mx-auto px-6 mb-8">
          <p className="text-xs tracking-[0.2em] text-[#8B7355] mb-2">AS SEEN ON</p>
          <h2 className="font-serif text-4xl tracking-[0.05em]">Real Moments</h2>
        </div>
        <div className="overflow-x-auto pb-4 hide-scrollbar">
          <div className="flex gap-4 pl-6 pr-12">
            {ugcItems.map((item) => (
              <div key={item.id} className="ugc-card w-[180px] aspect-[9/16] bg-[#E5E0D8]">
                <img src={item.image} alt={item.caption} className="w-full h-full object-cover" />
                <div className="ugc-caption">
                  <p className="font-serif text-sm tracking-[0.1em]">{item.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shop by Category */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.2em] text-[#8B7355] mb-2">EXPLORE</p>
          <h2 className="font-serif text-4xl tracking-[0.05em]">Shop by Category</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {['Earrings', 'Necklaces', 'Huggies'].map((cat, idx) => (
            <Link 
              key={idx} 
              to={`/shop?category=${cat}`}
              className="category-tile aspect-[4/3] bg-[#F4F1EB] overflow-hidden block relative"
            >
              <img 
                src={bestsellers[idx % 2]?.images[0] || bestsellers[0]?.images[0]} 
                alt={cat}
                className="w-full h-full object-cover"
              />
              <div className="label font-serif tracking-[0.15em]">{cat}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* Brand Story */}
      <section className="border-t border-[#E5E0D8]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2">
          <div className="aspect-[4/3] md:aspect-auto bg-[url('https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=1200&q=80')] bg-cover bg-center" />
          <div className="flex items-center px-8 md:px-16 py-16 md:py-0">
            <div>
              <p className="text-xs tracking-[0.2em] text-[#8B7355] mb-4">EST. 2018</p>
              <h2 className="font-serif text-4xl tracking-[0.05em] mb-6">Our Story</h2>
              <p className="text-[#6B665F] leading-relaxed mb-8 max-w-md">
                Velmora was born from a desire to create jewelry that feels both precious and wearable. 
                Each piece is thoughtfully designed in our studio and crafted with the finest materials.
              </p>
              <Link to="/about" className="btn btn-outline text-sm">Learn More</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-5xl mx-auto px-6 py-20 text-center">
        <p className="text-xs tracking-[0.2em] text-[#8B7355] mb-4">LOVED BY MANY</p>
        <h2 className="font-serif text-4xl tracking-[0.05em] mb-12">What Our Clients Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="px-4">
              <div className="stars flex justify-center mb-4">
                {[...Array(t.rating)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <p className="text-[#6B665F] italic mb-4">"{t.text}"</p>
              <p className="text-sm tracking-[0.1em]">{t.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-[#2C2825] py-16">
        <div className="max-w-md mx-auto px-6 text-center">
          <p className="text-[#C5A46E] text-xs tracking-[0.2em] mb-3">MEMBERS ONLY</p>
          <h3 className="font-serif text-3xl text-white tracking-[0.05em] mb-4">Join for 10% off</h3>
          <p className="text-white/70 text-sm mb-8">Be the first to know about new arrivals and exclusive offers.</p>
          <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Your email address" 
              className="input flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/50"
            />
            <button type="submit" className="btn btn-gold">Subscribe</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#F4F1EB] pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-y-12">
          <div>
            <p className="font-serif text-2xl tracking-[0.3em] mb-4">VELMORA</p>
            <p className="text-sm text-[#6B665F]">Fine jewelry, thoughtfully made.</p>
          </div>
          <div>
            <p className="text-xs tracking-[0.15em] mb-4 text-[#8B7355]">SHOP</p>
            <div className="space-y-2 text-sm text-[#6B665F]">
              <Link to="/shop" className="block hover:text-[#2C2825]">All Jewelry</Link>
              <Link to="/shop?category=Earrings" className="block hover:text-[#2C2825]">Earrings</Link>
              <Link to="/shop?category=Necklaces" className="block hover:text-[#2C2825]">Necklaces</Link>
              <Link to="/shop?category=Huggies" className="block hover:text-[#2C2825]">Huggies</Link>
            </div>
          </div>
          <div>
            <p className="text-xs tracking-[0.15em] mb-4 text-[#8B7355]">HELP</p>
            <div className="space-y-2 text-sm text-[#6B665F]">
              <a href="#" className="block hover:text-[#2C2825]">Shipping</a>
              <a href="#" className="block hover:text-[#2C2825]">Returns</a>
              <a href="#" className="block hover:text-[#2C2825]">Care Guide</a>
              <a href="#" className="block hover:text-[#2C2825]">Contact</a>
            </div>
          </div>
          <div>
            <p className="text-xs tracking-[0.15em] mb-4 text-[#8B7355]">COMPANY</p>
            <div className="space-y-2 text-sm text-[#6B665F]">
              <Link to="/about" className="block hover:text-[#2C2825]">Our Story</Link>
              <Link to="/journal" className="block hover:text-[#2C2825]">Journal</Link>
              <a href="#" className="block hover:text-[#2C2825]">Sustainability</a>
              <a href="#" className="block hover:text-[#2C2825]">Careers</a>
            </div>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-[#E5E0D8] text-center text-xs text-[#6B665F] tracking-[0.1em]">
          © 2026 Velmora Fine Jewelry. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Home;