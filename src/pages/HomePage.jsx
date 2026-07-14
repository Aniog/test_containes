import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products, ugcImages, testimonials } from '../data/products';

const HomePage = ({ onAddToCart }) => {
  const bestsellers = products.slice(0, 5);

  return (
    <div>
      {/* 1. Sticky Nav - handled in App */}

      {/* 2. Full-bleed Hero */}
      <section className="relative h-[100dvh] min-h-[700px] flex items-center justify-center pt-20">
        <div className="absolute inset-0 bg-[#1C1C1C]">
          <img 
            src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=2000&q=90" 
            alt="Velmora Jewelry"
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="serif text-[72px] md:text-[88px] leading-[0.95] tracking-[-0.02em] text-white mb-6">
            Crafted to be<br />Treasured
          </h1>
          <p className="text-white/90 text-lg mb-10 tracking-[0.05em]">Demi-fine jewelry for the modern woman</p>
          <Link to="/shop" className="btn btn-primary inline-block">
            Shop the Collection
          </Link>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
          <div className="w-px h-12 bg-white/40" />
        </div>
      </section>

      {/* 3. Trust Bar */}
      <div className="trust-bar bg-white py-4 border-b border-[#E8E4DC]">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-x-10 gap-y-2 text-center text-[#6B6B6B]">
          <span>Free Worldwide Shipping</span>
          <span>30-Day Returns</span>
          <span>18K Gold Plated</span>
          <span>Hypoallergenic</span>
        </div>
      </div>

      {/* 4. Bestsellers */}
      <section className="max-w-7xl mx-auto px-6 pt-20 pb-16">
        <div className="flex items-end justify-between mb-10">
          <div>
            <div className="uppercase tracking-[0.2em] text-xs text-[#C5A26F] mb-2">Signature Pieces</div>
            <h2 className="serif text-5xl tracking-[-0.01em]">Bestsellers</h2>
          </div>
          <Link to="/shop" className="hidden md:block text-sm tracking-[0.1em] uppercase hover:text-[#C5A26F]">View All →</Link>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {bestsellers.map(product => (
            <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
          ))}
        </div>
      </section>

      {/* 5. UGC Reel */}
      <section className="bg-[#1C1C1C] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-8">
            <div className="text-white">
              <div className="uppercase tracking-[0.2em] text-xs text-[#C5A26F] mb-1">As Seen On You</div>
              <div className="serif text-4xl">Real Moments</div>
            </div>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white/70 text-sm tracking-[0.1em] hover:text-white">Follow @velmora →</a>
          </div>
          
          <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide">
            {ugcImages.map((ugc, idx) => (
              <div key={idx} className="ugc-card rounded-sm">
                <img src={ugc.image} alt={ugc.caption} />
                <div className="ugc-overlay">
                  <div className="serif text-sm tracking-[0.1em]">{ugc.caption}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Shop by Category */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <div className="uppercase tracking-[0.2em] text-xs text-[#C5A26F] mb-2">Discover</div>
          <h2 className="serif text-5xl tracking-[-0.01em]">Shop by Category</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { name: 'Earrings', cat: 'Earrings', img: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80' },
            { name: 'Necklaces', cat: 'Necklaces', img: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80' },
            { name: 'Huggies', cat: 'Huggies', img: 'https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?w=800&q=80' },
          ].map((cat, idx) => (
            <Link key={idx} to={`/shop?category=${cat.cat}`} className="category-tile group">
              <img src={cat.img} alt={cat.name} />
              <div className="category-label">{cat.name}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* 7. Brand Story */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="aspect-[4/3] bg-[#F0EBE3]">
            <img 
              src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=1000&q=80" 
              alt="Our Craft" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="max-w-lg">
            <div className="uppercase tracking-[0.2em] text-xs text-[#C5A26F] mb-3">Since 2019</div>
            <h2 className="serif text-6xl tracking-[-0.01em] leading-none mb-8">Our Story</h2>
            <div className="space-y-5 text-[#4A4A4A] leading-relaxed">
              <p>Velmora was born from a simple belief: that fine jewelry should be accessible without compromise.</p>
              <p>Each piece is thoughtfully designed in our New York studio and hand-finished by artisans who share our commitment to quiet luxury.</p>
            </div>
            <Link to="/about" className="btn btn-outline mt-8 inline-block">Learn More About Us</Link>
          </div>
        </div>
      </section>

      {/* 8. Testimonials */}
      <section className="bg-white py-20 border-y border-[#E8E4DC]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="uppercase tracking-[0.2em] text-xs text-[#C5A26F] mb-2">Voices</div>
            <h2 className="serif text-5xl tracking-[-0.01em]">What Our Clients Say</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <div key={idx} className="text-center">
                <div className="flex justify-center gap-0.5 mb-5">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-[#C5A26F] text-[#C5A26F]" />
                  ))}
                </div>
                <p className="text-[#4A4A4A] italic leading-relaxed mb-6">"{t.text}"</p>
                <div className="text-sm tracking-[0.1em] text-[#6B6B6B]">— {t.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Newsletter */}
      <section className="newsletter py-20">
        <div className="max-w-xl mx-auto px-6 text-center">
          <div className="serif text-5xl tracking-[-0.01em] mb-4">Join the Circle</div>
          <p className="text-[#C5A26F] mb-8 tracking-[0.05em]">Receive 10% off your first order, plus early access to new collections.</p>
          
          <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => { e.preventDefault(); alert('Thank you for subscribing!'); }}>
            <input type="email" placeholder="Your email address" className="input flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/50" required />
            <button type="submit" className="btn btn-primary whitespace-nowrap">Subscribe</button>
          </form>
          <div className="text-[10px] tracking-[0.15em] text-white/50 mt-4">We respect your inbox. Unsubscribe anytime.</div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;