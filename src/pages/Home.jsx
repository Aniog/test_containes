import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

const Home = () => {
  const { addToCart } = useCart();
  const bestsellers = products.slice(0, 5);

  const ugcItems = [
    { id: 1, caption: "Morning light", img: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400&q=80" },
    { id: 2, caption: "Everyday elegance", img: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&q=80" },
    { id: 3, caption: "Golden hour", img: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400&q=80" },
    { id: 4, caption: "Timeless", img: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&q=80" },
    { id: 5, caption: "Soft glow", img: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400&q=80" },
  ];

  const testimonials = [
    { name: "Elena M.", text: "The quality is exceptional. My necklace has become my signature piece." },
    { name: "Sofia R.", text: "Beautiful packaging and even more beautiful jewelry. A gift I'll treasure." },
    { name: "Isabella K.", text: "Finally found earrings that don't irritate my sensitive ears. Love them." },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[100dvh] min-h-[700px] flex items-center justify-center bg-[#2C2825] overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=2000&q=80')] bg-cover bg-center opacity-70" />
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="serif text-6xl md:text-7xl text-white tracking-[-0.02em] mb-6">
            Crafted to be Treasured
          </h1>
          <p className="text-white/80 text-lg mb-10 max-w-md mx-auto">
            Demi-fine gold jewelry, made with intention for the modern woman.
          </p>
          <Link to="/shop" className="btn btn-accent inline-block">
            Shop the Collection
          </Link>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <div className="w-px h-12 bg-white/40" />
        </div>
      </section>

      {/* Trust Bar */}
      <div className="trust-bar py-4 border-b border-[#E5E1DB] bg-white">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-x-8 gap-y-2 text-[#6B6763] text-center">
          <span>Free Worldwide Shipping</span>
          <span className="hidden md:inline">·</span>
          <span>30-Day Returns</span>
          <span className="hidden md:inline">·</span>
          <span>18K Gold Plated</span>
          <span className="hidden md:inline">·</span>
          <span>Hypoallergenic</span>
        </div>
      </div>

      {/* Bestsellers */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-xs tracking-[0.2em] text-[#8B7355] mb-2">DISCOVER</p>
            <h2 className="serif text-4xl">Bestsellers</h2>
          </div>
          <Link to="/shop" className="text-sm tracking-widest hover:text-[#8B7355] hidden md:block">VIEW ALL →</Link>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {bestsellers.map((product) => (
            <div key={product.id} className="product-card group">
              <Link to={`/product/${product.id}`} className="block relative aspect-[4/3] bg-[#F8F6F3] overflow-hidden">
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
              <div className="pt-4 pb-2 px-1">
                <Link to={`/product/${product.id}`}>
                  <p className="product-name text-sm tracking-wider mb-1">{product.name}</p>
                </Link>
                <p className="text-sm text-[#6B6763]">${product.price}</p>
              </div>
              <button 
                onClick={() => addToCart(product, product.variants[0])}
                className="quick-add btn btn-primary text-xs py-2.5 px-8"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* UGC Reel */}
      <section className="bg-white py-16 border-y border-[#E5E1DB]">
        <div className="max-w-7xl mx-auto px-6 mb-8">
          <p className="text-xs tracking-[0.2em] text-[#8B7355] mb-2">AS SEEN ON YOU</p>
          <h2 className="serif text-3xl">Moments in Gold</h2>
        </div>
        <div className="ugc-scroll flex gap-4 overflow-x-auto pb-4 pl-6 md:pl-6 snap-x snap-mandatory">
          {ugcItems.map((item) => (
            <div key={item.id} className="relative flex-shrink-0 w-[180px] aspect-[9/16] overflow-hidden snap-start">
              <img src={item.img} alt={item.caption} className="w-full h-full object-cover" />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                <p className="serif text-white text-sm tracking-wide">{item.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Shop by Category */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.2em] text-[#8B7355] mb-2">EXPLORE</p>
          <h2 className="serif text-4xl">Shop by Category</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { name: "Earrings", path: "/shop?category=Earrings", img: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80" },
            { name: "Necklaces", path: "/shop?category=Necklaces", img: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80" },
            { name: "Huggies", path: "/shop?category=Huggies", img: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80" },
          ].map((cat) => (
            <Link key={cat.name} to={cat.path} className="category-tile group block aspect-[16/10] overflow-hidden">
              <img src={cat.img} alt={cat.name} className="w-full h-full object-cover" />
              <div className="overlay absolute inset-0 bg-black/40 flex items-center justify-center">
                <span className="text-white text-xl tracking-[0.15em] serif group-hover:underline">{cat.name}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Brand Story */}
      <section className="bg-white border-y border-[#E5E1DB]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2">
          <div className="aspect-[4/3] md:aspect-auto bg-[#F8F6F3]">
            <img 
              src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=1200&q=80" 
              alt="Our atelier" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex items-center p-10 md:p-16">
            <div>
              <p className="text-xs tracking-[0.2em] text-[#8B7355] mb-4">EST. 2019</p>
              <h2 className="serif text-4xl mb-6">Our Story</h2>
              <p className="text-[#6B6763] leading-relaxed mb-8">
                Velmora was born from a desire to create jewelry that feels both special and wearable. 
                Each piece is thoughtfully designed in our studio and crafted with the finest materials, 
                meant to be worn every day and passed down for generations.
              </p>
              <Link to="/" className="text-sm tracking-widest hover:text-[#8B7355]">READ MORE →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-5xl mx-auto px-6 py-20 text-center">
        <p className="text-xs tracking-[0.2em] text-[#8B7355] mb-3">LOVED BY MANY</p>
        <h2 className="serif text-4xl mb-14">What Our Clients Say</h2>
        <div className="grid md:grid-cols-3 gap-10 text-left">
          {testimonials.map((t, i) => (
            <div key={i} className="border-l-2 border-[#C5A46E] pl-6">
              <div className="stars flex mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
              </div>
              <p className="text-[#6B6763] mb-4 leading-relaxed">"{t.text}"</p>
              <p className="text-sm tracking-wider">— {t.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="newsletter py-16">
        <div className="max-w-md mx-auto px-6 text-center">
          <h3 className="serif text-3xl mb-3 text-white">Join for 10% off</h3>
          <p className="text-white/70 mb-8 text-sm">Be the first to know about new arrivals and special offers.</p>
          <form className="flex" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-1 px-5 py-3.5 bg-white/10 border border-white/30 text-white placeholder:text-white/50 text-sm focus:outline-none focus:border-white/60"
            />
            <button type="submit" className="btn btn-accent px-8">Subscribe</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2C2825] text-white/70 py-16">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-y-12">
          <div>
            <div className="serif text-2xl tracking-[0.2em] text-white mb-4">VELMORA</div>
            <p className="text-sm">Fine jewelry for the modern woman.</p>
          </div>
          <div>
            <div className="text-white text-sm tracking-widest mb-4">SHOP</div>
            <div className="space-y-2 text-sm">
              <Link to="/shop" className="block hover:text-white">All Jewelry</Link>
              <Link to="/shop?category=Earrings" className="block hover:text-white">Earrings</Link>
              <Link to="/shop?category=Necklaces" className="block hover:text-white">Necklaces</Link>
              <Link to="/shop?category=Huggies" className="block hover:text-white">Huggies</Link>
            </div>
          </div>
          <div>
            <div className="text-white text-sm tracking-widest mb-4">HELP</div>
            <div className="space-y-2 text-sm">
              <a href="#" className="block hover:text-white">Shipping</a>
              <a href="#" className="block hover:text-white">Returns</a>
              <a href="#" className="block hover:text-white">Care Guide</a>
              <a href="#" className="block hover:text-white">Contact</a>
            </div>
          </div>
          <div>
            <div className="text-white text-sm tracking-widest mb-4">COMPANY</div>
            <div className="space-y-2 text-sm">
              <a href="#" className="block hover:text-white">Our Story</a>
              <a href="#" className="block hover:text-white">Journal</a>
              <a href="#" className="block hover:text-white">Stockists</a>
            </div>
            <div className="flex gap-4 mt-6 text-white">
              <a href="#" className="hover:opacity-70">IG</a>
              <a href="#" className="hover:opacity-70">PIN</a>
            </div>
          </div>
        </div>
        <div className="text-center text-xs mt-16 tracking-widest">© {new Date().getFullYear()} VELMORA. ALL RIGHTS RESERVED.</div>
      </footer>
    </div>
  );
};

export default Home;