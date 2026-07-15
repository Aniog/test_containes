import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { products } from '../data/products';

const Home = () => {
  const bestsellers = products.slice(0, 5);
  
  const ugcCaptions = [
    "Golden hour glow",
    "Everyday elegance",
    "Treasured moments",
    "Effortless beauty",
    "Worn with love",
  ];

  const testimonials = [
    { name: "Elena M.", text: "The quality is exceptional. My necklace has become my signature piece." },
    { name: "Sophia R.", text: "Beautiful packaging and the jewelry exceeded my expectations." },
    { name: "Isabella K.", text: "I wear my huggies every day. They never tarnish or irritate." },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[100dvh] min-h-[700px] flex items-center justify-center bg-[#2C2522] overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=2000&q=80')] bg-cover bg-center opacity-70" />
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="serif text-[72px] md:text-[88px] text-white tracking-[0.05em] leading-[1.05] mb-6">
            Crafted to be<br />Treasured
          </h1>
          <p className="text-white/80 text-lg mb-10 tracking-[0.05em]">
            Demi-fine jewelry for the modern woman
          </p>
          <Link to="/shop" className="btn btn-gold inline-block">
            Shop the Collection
          </Link>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <div className="w-px h-12 bg-white/40" />
        </div>
      </section>

      {/* Trust Bar */}
      <div className="trust-bar py-4 border-b border-[#E5DFD6] bg-white">
        <div className="max-w-[1400px] mx-auto px-6 flex flex-wrap justify-center gap-x-8 gap-y-2 text-center">
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
      <section className="max-w-[1400px] mx-auto px-6 py-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-xs tracking-[0.2em] text-[#6B605A] mb-2">DISCOVER</p>
            <h2 className="serif text-4xl tracking-[0.05em]">Bestsellers</h2>
          </div>
          <Link to="/shop" className="text-sm tracking-[0.1em] underline hidden md:block">
            View All
          </Link>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {bestsellers.map((product) => (
            <Link key={product.id} to={`/product/${product.id}`} className="product-card group block">
              <div className="relative aspect-[4/3] bg-[#F0EBE3] overflow-hidden">
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
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    // Quick add handled in product detail
                  }}
                  className="absolute bottom-4 left-1/2 -translate-x-1/2 btn btn-primary text-xs opacity-0 group-hover:opacity-100 transition-all"
                >
                  Quick Add
                </button>
              </div>
              <div className="p-4">
                <p className="product-name text-sm tracking-[0.1em] mb-1">{product.name}</p>
                <p className="text-[#6B605A] text-sm">${product.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* UGC Reel Row */}
      <section className="bg-[#F0EBE3] py-16">
        <div className="max-w-[1400px] mx-auto px-6">
          <p className="text-xs tracking-[0.2em] text-[#6B605A] mb-8 text-center">AS SEEN ON YOU</p>
          <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
            {ugcCaptions.map((caption, idx) => (
              <div key={idx} className="ugc-card flex-shrink-0 w-[180px] md:w-[200px] aspect-[9/16] bg-[#2C2522] snap-start overflow-hidden">
                <img
                  src={['https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80','https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&q=80','https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&q=80','https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80','https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&q=80'][idx]}
                  alt={caption}
                  className="w-full h-full object-cover"
                />
                <div className="caption">{caption}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shop by Category */}
      <section className="max-w-[1400px] mx-auto px-6 py-20">
        <p className="text-xs tracking-[0.2em] text-[#6B605A] mb-8 text-center">EXPLORE</p>
        <h2 className="serif text-4xl tracking-[0.05em] text-center mb-12">Shop by Category</h2>
        
        <div className="grid md:grid-cols-3 gap-4">
          {['Earrings', 'Necklaces', 'Huggies'].map((cat, idx) => (
            <Link
              key={idx}
              to={`/shop?category=${cat}`}
              className="category-tile aspect-[16/10] bg-[#2C2522] relative overflow-hidden group block"
            >
              <img
                src={products[idx * 2]?.image || products[0].image}
                alt={cat}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="label absolute bottom-8 left-8 z-10">
                <span className="text-white text-2xl serif tracking-[0.1em]">{cat}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Brand Story */}
      <section className="max-w-[1400px] mx-auto px-6 py-16 border-t border-[#E5DFD6]">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="aspect-[4/3] bg-[#F0EBE3]">
            <img
              src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=1200&q=80"
              alt="Our atelier"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="text-xs tracking-[0.2em] text-[#6B605A] mb-4">SINCE 2018</p>
            <h2 className="serif text-5xl tracking-[0.05em] mb-8">Our Story</h2>
            <p className="text-[#6B605A] leading-relaxed mb-8">
              Velmora was born from a desire to create jewelry that feels as precious as the moments it marks. 
              Each piece is thoughtfully designed in our studio and crafted with the finest materials, 
              ensuring beauty that lasts a lifetime.
            </p>
            <Link to="/" className="text-sm tracking-[0.1em] underline">Learn more about our craft →</Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-20">
        <div className="max-w-[1000px] mx-auto px-6 text-center">
          <p className="text-xs tracking-[0.2em] text-[#6B605A] mb-8">LOVED BY MANY</p>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <div key={idx} className="px-4">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="fill-[#C5A46E] text-[#C5A46E]" />
                  ))}
                </div>
                <p className="text-[#6B605A] italic mb-4">"{t.text}"</p>
                <p className="text-sm tracking-[0.1em]">{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-[#2C2522] py-16">
        <div className="max-w-md mx-auto px-6 text-center">
          <h3 className="serif text-white text-3xl tracking-[0.05em] mb-3">Join for 10% off</h3>
          <p className="text-white/60 text-sm mb-8 tracking-[0.05em]">Be the first to know about new arrivals and special offers.</p>
          <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Your email address"
              className="newsletter-input text-white placeholder:text-white/40 w-full"
            />
            <button type="submit" className="btn btn-gold w-full">Subscribe</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#F8F5F1] border-t border-[#E5DFD6] py-16">
        <div className="max-w-[1400px] mx-auto px-6 grid md:grid-cols-4 gap-y-12">
          <div>
            <div className="serif text-xl tracking-[0.2em] mb-4">VELMORA</div>
            <p className="text-xs text-[#6B605A]">Fine Jewelry</p>
          </div>
          <div>
            <p className="text-xs tracking-[0.15em] mb-4 text-[#6B605A]">SHOP</p>
            <div className="space-y-2 text-sm">
              <Link to="/shop" className="block hover:text-[#8B7355]">All Jewelry</Link>
              <Link to="/shop?category=Earrings" className="block hover:text-[#8B7355]">Earrings</Link>
              <Link to="/shop?category=Necklaces" className="block hover:text-[#8B7355]">Necklaces</Link>
              <Link to="/shop?category=Huggies" className="block hover:text-[#8B7355]">Huggies</Link>
            </div>
          </div>
          <div>
            <p className="text-xs tracking-[0.15em] mb-4 text-[#6B605A]">HELP</p>
            <div className="space-y-2 text-sm">
              <a href="#" className="block hover:text-[#8B7355]">Shipping</a>
              <a href="#" className="block hover:text-[#8B7355]">Returns</a>
              <a href="#" className="block hover:text-[#8B7355]">Care Guide</a>
              <a href="#" className="block hover:text-[#8B7355]">Contact</a>
            </div>
          </div>
          <div>
            <p className="text-xs tracking-[0.15em] mb-4 text-[#6B605A]">COMPANY</p>
            <div className="space-y-2 text-sm">
              <a href="#" className="block hover:text-[#8B7355]">Our Story</a>
              <a href="#" className="block hover:text-[#8B7355]">Journal</a>
              <a href="#" className="block hover:text-[#8B7355]">Stockists</a>
            </div>
            <div className="flex gap-4 mt-6 text-[#6B605A]">
              <a href="#" className="hover:text-[#8B7355]">IG</a>
              <a href="#" className="hover:text-[#8B7355]">PIN</a>
            </div>
          </div>
        </div>
        <div className="max-w-[1400px] mx-auto px-6 mt-16 pt-8 border-t border-[#E5DFD6] text-center text-xs text-[#6B605A]">
          © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Home;