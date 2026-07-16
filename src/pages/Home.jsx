import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products, ugcImages, testimonials } from '../data/products';

const Home = () => {
  const bestsellers = products.slice(0, 5);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center bg-[#1A1816] overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=2000&q=80" 
          alt="Velmora Jewelry"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="font-serif text-6xl md:text-7xl text-white tracking-[0.1em] mb-6">
            Crafted to be Treasured
          </h1>
          <p className="text-white/80 text-lg mb-10 tracking-wide">
            Demi-fine gold jewelry, designed for the moments that matter.
          </p>
          <Link to="/shop" className="btn btn-gold inline-block">
            Shop the Collection
          </Link>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="trust-bar py-4 border-b border-[#E5DFD6] bg-white">
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

      {/* Bestsellers */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="uppercase tracking-[0.2em] text-xs text-[#B8976D] mb-2">Signature Pieces</p>
            <h2 className="font-serif text-4xl tracking-[0.05em]">Bestsellers</h2>
          </div>
          <Link to="/shop" className="text-sm tracking-[0.1em] uppercase hover:text-[#B8976D] transition-colors hidden md:block">
            View All →
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* UGC Reel */}
      <section className="bg-[#F5F2ED] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <p className="uppercase tracking-[0.2em] text-xs text-[#B8976D] mb-8 text-center">As Seen On You</p>
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
            {ugcImages.map((ugc) => (
              <div key={ugc.id} className="ugc-card">
                <img src={ugc.image} alt={ugc.caption} />
                <div className="ugc-caption">{ugc.caption}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shop by Category */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <p className="uppercase tracking-[0.2em] text-xs text-[#B8976D] mb-8 text-center">Discover</p>
        <h2 className="font-serif text-4xl tracking-[0.05em] text-center mb-12">Shop by Category</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { name: "Earrings", link: "/shop?category=Earrings", img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80" },
            { name: "Necklaces", link: "/shop?category=Necklaces", img: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80" },
            { name: "Huggies", link: "/shop?category=Huggies", img: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&q=80" },
          ].map((cat) => (
            <Link key={cat.name} to={cat.link} className="category-tile group">
              <img src={cat.img} alt={cat.name} />
              <div className="category-overlay">
                <span className="text-white text-lg tracking-[0.15em] font-serif">{cat.name}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Brand Story */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="aspect-[4/3] bg-[#F5F2ED]">
            <img 
              src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=1000&q=80" 
              alt="Our Story"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="uppercase tracking-[0.2em] text-xs text-[#B8976D] mb-4">Since 2019</p>
            <h2 className="font-serif text-4xl tracking-[0.05em] mb-6">Our Story</h2>
            <p className="text-[#6B6560] leading-relaxed mb-8">
              Velmora was born from a simple belief: that beautiful jewelry should be accessible, 
              not exclusive. We craft demi-fine pieces that honor tradition while embracing the 
              modern woman who values both elegance and ease.
            </p>
            <Link to="/" className="btn btn-outline inline-block">Learn More</Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-20 border-y border-[#E5DFD6]">
        <div className="max-w-5xl mx-auto px-6">
          <p className="uppercase tracking-[0.2em] text-xs text-[#B8976D] mb-8 text-center">Voices of Velmora</p>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div key={t.id} className="text-center">
                <div className="flex justify-center mb-4 text-[#B8976D]">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="text-[#6B6560] italic mb-4">"{t.text}"</p>
                <p className="text-sm tracking-[0.1em]">{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="newsletter py-20">
        <div className="max-w-md mx-auto px-6 text-center">
          <h3 className="font-serif text-3xl tracking-[0.05em] mb-4">Join for 10% off</h3>
          <p className="text-white/70 mb-8 text-sm tracking-wide">
            Be the first to know about new arrivals and exclusive offers.
          </p>
          <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Your email address"
              className="flex-1 px-4 py-3 bg-white/10 border border-white/30 text-white placeholder:text-white/50 text-sm focus:outline-none focus:border-white/60"
            />
            <button type="submit" className="btn btn-gold">Subscribe</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1A1816] text-white/60 py-16">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-y-12">
          <div>
            <p className="font-serif text-2xl tracking-[0.2em] text-white mb-4">VELMORA</p>
            <p className="text-sm">Fine Jewelry</p>
          </div>
          <div>
            <p className="text-white text-sm tracking-[0.1em] mb-4">Shop</p>
            <div className="space-y-2 text-sm">
              <Link to="/shop" className="block hover:text-white">All Jewelry</Link>
              <Link to="/shop?category=Earrings" className="block hover:text-white">Earrings</Link>
              <Link to="/shop?category=Necklaces" className="block hover:text-white">Necklaces</Link>
              <Link to="/shop?category=Huggies" className="block hover:text-white">Huggies</Link>
            </div>
          </div>
          <div>
            <p className="text-white text-sm tracking-[0.1em] mb-4">Help</p>
            <div className="space-y-2 text-sm">
              <a href="#" className="block hover:text-white">Shipping</a>
              <a href="#" className="block hover:text-white">Returns</a>
              <a href="#" className="block hover:text-white">Care Guide</a>
              <a href="#" className="block hover:text-white">Contact</a>
            </div>
          </div>
          <div>
            <p className="text-white text-sm tracking-[0.1em] mb-4">Company</p>
            <div className="space-y-2 text-sm">
              <a href="#" className="block hover:text-white">Our Story</a>
              <a href="#" className="block hover:text-white">Journal</a>
              <a href="#" className="block hover:text-white">Stockists</a>
            </div>
            <div className="flex gap-4 mt-6 text-white">
              <a href="#" className="hover:opacity-70">IG</a>
              <a href="#" className="hover:opacity-70">TT</a>
              <a href="#" className="hover:opacity-70">PI</a>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/10 text-xs tracking-[0.1em] text-center">
          © {new Date().getFullYear()} Velmora. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Home;