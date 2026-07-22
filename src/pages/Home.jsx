import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

const Home = ({ onCartClick }) => {
  const bestsellers = products.slice(0, 5);
  
  const ugcItems = [
    { id: 1, caption: "Morning light", image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&q=80" },
    { id: 2, caption: "Golden hour", image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=400&q=80" },
    { id: 3, caption: "Effortless", image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&q=80" },
    { id: 4, caption: "Timeless", image: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=400&q=80" },
    { id: 5, caption: "Everyday", image: "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=400&q=80" },
  ];

  const testimonials = [
    { name: "Elena M.", text: "The quality is exceptional. My huggies have become my everyday staple." },
    { name: "Sofia R.", text: "Beautiful packaging and even more beautiful jewelry. A gift I'll treasure." },
    { name: "Isabella T.", text: "Finally found pieces that feel premium without the luxury markup." },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[100dvh] min-h-[700px] flex items-center justify-center pt-20">
        <div className="absolute inset-0 bg-[#1A1816]">
          <img 
            src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=2000&q=80" 
            alt="Velmora Fine Jewelry"
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-3xl">
          <h1 className="font-serif text-[56px] md:text-[72px] text-white tracking-[0.02em] leading-[1.05] mb-6">
            Crafted to be<br />Treasured
          </h1>
          <p className="text-white/90 text-lg mb-10 tracking-[0.02em]">
            Demi-fine gold jewelry, made to last a lifetime.
          </p>
          <Link to="/shop" className="btn-primary inline-block">
            Shop the Collection
          </Link>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
          <div className="w-px h-12 bg-white/40" />
        </div>
      </section>

      {/* Trust Bar */}
      <div className="border-b border-[#E5E1D9] py-4">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-xs tracking-[0.12em] text-[#6B6763] uppercase text-center">
            <span>Free Worldwide Shipping</span>
            <span className="hidden md:inline">·</span>
            <span>30-Day Returns</span>
            <span className="hidden md:inline">·</span>
            <span>18K Gold Plated</span>
            <span className="hidden md:inline">·</span>
            <span>Hypoallergenic</span>
          </div>
        </div>
      </div>

      {/* Bestsellers */}
      <section className="max-w-[1400px] mx-auto px-6 pt-20 pb-16">
        <div className="flex items-end justify-between mb-10">
          <div>
            <span className="text-xs tracking-[0.15em] text-[#B89778] uppercase">Signature Pieces</span>
            <h2 className="font-serif text-4xl tracking-[0.02em] mt-1">Bestsellers</h2>
          </div>
          <Link to="/shop" className="text-sm tracking-[0.08em] underline-offset-4 hover:underline hidden md:block">
            View All
          </Link>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {bestsellers.map(product => (
            <ProductCard key={product.id} product={product} onCartClick={onCartClick} />
          ))}
        </div>
      </section>

      {/* UGC Reel Row */}
      <section className="bg-[#1A1816] py-16">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex items-center justify-between mb-8">
            <span className="text-white/60 text-xs tracking-[0.15em] uppercase">As Seen On You</span>
            <a href="#journal" className="text-white text-sm tracking-[0.08em] underline-offset-4 hover:underline">Follow @velmora</a>
          </div>
          <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide">
            {ugcItems.map(item => (
              <div key={item.id} className="ugc-card">
                <img src={item.image} alt={item.caption} />
                <div className="ugc-caption">{item.caption}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shop by Category */}
      <section className="max-w-[1400px] mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <span className="text-xs tracking-[0.15em] text-[#B89778] uppercase">Discover</span>
          <h2 className="font-serif text-4xl tracking-[0.02em] mt-1">Shop by Category</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { name: "Earrings", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80", link: "/shop?category=Earrings" },
            { name: "Necklaces", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80", link: "/shop?category=Necklaces" },
            { name: "Huggies", image: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&q=80", link: "/shop?category=Huggies" },
          ].map((cat, idx) => (
            <Link key={idx} to={cat.link} className="category-tile group">
              <img src={cat.image} alt={cat.name} className="w-full h-full object-cover" />
              <div className="category-label group-hover:opacity-100">{cat.name}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* Brand Story */}
      <section id="about" className="border-t border-[#E5E1D9]">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-2">
          <div className="aspect-[4/3] md:aspect-auto bg-[#F0EDE7]">
            <img 
              src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=1200&q=80" 
              alt="Our Story" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex items-center px-8 md:px-16 py-16 md:py-0">
            <div className="max-w-md">
              <span className="text-xs tracking-[0.15em] text-[#B89778] uppercase">Since 2019</span>
              <h2 className="font-serif text-4xl tracking-[0.02em] mt-3 mb-6">Our Story</h2>
              <p className="text-[#6B6763] leading-relaxed mb-8">
                Velmora was born from a simple belief: that beautiful, lasting jewelry shouldn't require compromise. 
                We design demi-fine pieces that feel as precious as fine jewelry, at a price that makes them wearable every day.
              </p>
              <Link to="/shop" className="btn-outline text-sm py-3 px-8 inline-block">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-[1400px] mx-auto px-6 py-20 border-t border-[#E5E1D9]">
        <div className="text-center mb-12">
          <span className="text-xs tracking-[0.15em] text-[#B89778] uppercase">Voices</span>
          <h2 className="font-serif text-4xl tracking-[0.02em] mt-1">What Our Clients Say</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="text-center px-4">
              <div className="flex justify-center gap-0.5 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="fill-[#B89778] text-[#B89778]" />
                ))}
              </div>
              <p className="text-[#6B6763] italic leading-relaxed mb-4">"{t.text}"</p>
              <p className="text-sm tracking-[0.08em]">{t.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-[#1A1816] py-16">
        <div className="max-w-md mx-auto px-6 text-center">
          <h3 className="font-serif text-3xl text-white tracking-[0.02em] mb-3">Join for 10% off</h3>
          <p className="text-white/60 text-sm mb-8 tracking-[0.02em]">Be the first to know about new arrivals and private sales.</p>
          <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => { e.preventDefault(); alert('Thank you for subscribing!'); }}>
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-1 px-5 py-3.5 bg-white/10 border border-white/20 text-white placeholder:text-white/40 text-sm focus:outline-none focus:border-white/40"
              required
            />
            <button type="submit" className="btn-primary whitespace-nowrap">Subscribe</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#F8F6F3] border-t border-[#E5E1D9] pt-16 pb-8">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 mb-16">
            <div>
              <div className="font-serif text-xl tracking-[0.15em] mb-6">VELMORA</div>
            </div>
            <div>
              <div className="text-xs tracking-[0.12em] uppercase mb-4 text-[#6B6763]">Shop</div>
              <div className="space-y-2 text-sm">
                <Link to="/shop" className="block hover:text-[#B89778]">All Jewelry</Link>
                <Link to="/shop?category=Earrings" className="block hover:text-[#B89778]">Earrings</Link>
                <Link to="/shop?category=Necklaces" className="block hover:text-[#B89778]">Necklaces</Link>
                <Link to="/shop?category=Huggies" className="block hover:text-[#B89778]">Huggies</Link>
              </div>
            </div>
            <div>
              <div className="text-xs tracking-[0.12em] uppercase mb-4 text-[#6B6763]">Help</div>
              <div className="space-y-2 text-sm">
                <a href="#" className="block hover:text-[#B89778]">Shipping</a>
                <a href="#" className="block hover:text-[#B89778]">Returns</a>
                <a href="#" className="block hover:text-[#B89778]">Care Guide</a>
                <a href="#" className="block hover:text-[#B89778]">Contact</a>
              </div>
            </div>
            <div>
              <div className="text-xs tracking-[0.12em] uppercase mb-4 text-[#6B6763]">Company</div>
              <div className="space-y-2 text-sm">
                <a href="#about" className="block hover:text-[#B89778]">Our Story</a>
                <a href="#journal" className="block hover:text-[#B89778]">Journal</a>
                <a href="#" className="block hover:text-[#B89778]">Sustainability</a>
                <a href="#" className="block hover:text-[#B89778]">Careers</a>
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-[#E5E1D9] flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#6B6763] tracking-[0.08em]">
            <div>© {new Date().getFullYear()} Velmora. All rights reserved.</div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-[#2C2A28]">Instagram</a>
              <a href="#" className="hover:text-[#2C2A28]">Pinterest</a>
              <a href="#" className="hover:text-[#2C2A28]">TikTok</a>
            </div>
            <div>Visa · Mastercard · Amex · Apple Pay</div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;