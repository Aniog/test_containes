import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

const Home = () => {
  const bestsellers = products.slice(0, 5);
  
  const ugcItems = [
    { id: 1, caption: "Morning light", image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&q=80" },
    { id: 2, caption: "Everyday elegance", image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=400&q=80" },
    { id: 3, caption: "Golden hour", image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&q=80" },
    { id: 4, caption: "Timeless beauty", image: "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=400&q=80" },
    { id: 5, caption: "Soft details", image: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=400&q=80" },
  ];

  const testimonials = [
    { name: "Elena M.", text: "The quality is exceptional. My huggies have become my everyday go-to.", rating: 5 },
    { name: "Sofia R.", text: "Beautiful packaging and even more beautiful jewelry. A gift I'll treasure.", rating: 5 },
    { name: "Isabella K.", text: "Finally found pieces that don't irritate my sensitive skin. Thank you!", rating: 5 },
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-[90vh] flex items-center justify-center bg-[var(--color-base)] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff10_0.5px,transparent_1px)] bg-[length:4px_4px]" />
        <img 
          src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce45e?w=1600&q=80" 
          alt="Velmora Jewelry" 
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />
        <div className="relative z-10 text-center px-6 max-w-3xl">
          <h1 className="serif text-[72px] md:text-[88px] leading-[0.95] tracking-[-0.02em] text-white mb-6">
            Crafted to be<br />Treasured
          </h1>
          <p className="text-white/80 text-lg mb-10 tracking-[0.02em]">
            Demi-fine jewelry for the modern woman
          </p>
          <Link to="/shop" className="btn btn-gold inline-block">
            Shop the Collection
          </Link>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="border-b border-[var(--color-divider)] py-4">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-2 text-xs tracking-[0.1em] uppercase text-[var(--color-gray)]">
            <span>Free Worldwide Shipping</span>
            <span className="hidden md:inline">•</span>
            <span>30-Day Returns</span>
            <span className="hidden md:inline">•</span>
            <span>18K Gold Plated</span>
            <span className="hidden md:inline">•</span>
            <span>Hypoallergenic</span>
          </div>
        </div>
      </div>

      {/* Bestsellers */}
      <section className="max-w-[1400px] mx-auto px-6 py-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-xs tracking-[0.15em] uppercase text-[var(--color-gold)] mb-2">Signature Pieces</p>
            <h2 className="serif text-4xl tracking-[-0.01em]">Bestsellers</h2>
          </div>
          <Link to="/shop" className="text-sm tracking-[0.08em] uppercase hover:text-[var(--color-gold)] transition-colors hidden md:block">
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
      <section className="bg-[var(--color-base)] py-16">
        <div className="max-w-[1400px] mx-auto px-6">
          <p className="text-center text-white/60 text-xs tracking-[0.15em] uppercase mb-8">As Seen On You</p>
          <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide">
            {ugcItems.map((item) => (
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
          <p className="text-xs tracking-[0.15em] uppercase text-[var(--color-gold)] mb-2">Discover</p>
          <h2 className="serif text-4xl tracking-[-0.01em]">Shop by Category</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { name: "Earrings", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80" },
            { name: "Necklaces", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80" },
            { name: "Huggies", image: "https://images.unsplash.com/photo-1506630448388-4bc735f7d2b9?w=800&q=80" },
          ].map((cat) => (
            <Link key={cat.name} to="/shop" className="category-tile group">
              <img src={cat.image} alt={cat.name} />
              <div className="category-overlay">
                <span className="text-white text-lg tracking-[0.1em] uppercase font-medium">{cat.name}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Brand Story */}
      <section className="max-w-[1400px] mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="aspect-[4/3] bg-[var(--color-cream)] overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce45e?w=1000&q=80" 
              alt="Our Craft" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="max-w-lg">
            <p className="text-xs tracking-[0.15em] uppercase text-[var(--color-gold)] mb-4">Since 2018</p>
            <h2 className="serif text-5xl tracking-[-0.02em] leading-none mb-8">Our Story</h2>
            <div className="space-y-4 text-[var(--color-gray)] text-[15px]">
              <p>Velmora was born from a simple belief: that beautiful jewelry should be accessible without compromise.</p>
              <p>Each piece is thoughtfully designed in our studio and crafted with the finest materials—18K gold plating, hypoallergenic findings, and hand-selected crystals.</p>
            </div>
            <Link to="/" className="btn btn-outline mt-8 inline-block">Learn More</Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-[var(--color-cream)] border-y border-[var(--color-divider)] py-16">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-xs tracking-[0.15em] uppercase text-[var(--color-gold)] mb-2">Voices</p>
            <h2 className="serif text-4xl tracking-[-0.01em]">What Our Community Says</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {testimonials.map((t, i) => (
              <div key={i} className="testimonial">
                <div className="stars mb-4">★★★★★</div>
                <p className="text-[15px] mb-6 leading-relaxed">"{t.text}"</p>
                <p className="text-sm tracking-[0.06em] uppercase text-[var(--color-gray)]">— {t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="newsletter py-20">
        <div className="max-w-md mx-auto px-6 text-center">
          <p className="text-xs tracking-[0.15em] uppercase text-[var(--color-gold)] mb-3">Stay Close</p>
          <h2 className="serif text-4xl tracking-[-0.01em] mb-4 text-white">Join for 10% off<br />your first order</h2>
          <p className="text-white/60 text-sm mb-8">Be the first to know about new arrivals and special collections.</p>
          <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-1 px-5 py-3.5 bg-white/10 border border-white/20 text-white placeholder:text-white/40 text-sm focus:outline-none focus:border-white/40"
            />
            <button type="submit" className="btn btn-gold">Join</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[var(--color-base)] text-white/60 py-16">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-y-12 mb-16">
            <div>
              <div className="serif text-2xl tracking-[0.15em] text-white mb-4">VELMORA</div>
              <p className="text-sm">Fine jewelry, thoughtfully made.</p>
            </div>
            <div>
              <div className="uppercase tracking-[0.1em] text-xs mb-4 text-white">Shop</div>
              <div className="space-y-2 text-sm">
                <Link to="/shop" className="block hover:text-white">All Jewelry</Link>
                <Link to="/shop" className="block hover:text-white">Earrings</Link>
                <Link to="/shop" className="block hover:text-white">Necklaces</Link>
                <Link to="/shop" className="block hover:text-white">Huggies</Link>
              </div>
            </div>
            <div>
              <div className="uppercase tracking-[0.1em] text-xs mb-4 text-white">Help</div>
              <div className="space-y-2 text-sm">
                <a href="#" className="block hover:text-white">Shipping</a>
                <a href="#" className="block hover:text-white">Returns</a>
                <a href="#" className="block hover:text-white">Care Guide</a>
                <a href="#" className="block hover:text-white">Contact</a>
              </div>
            </div>
            <div>
              <div className="uppercase tracking-[0.1em] text-xs mb-4 text-white">Company</div>
              <div className="space-y-2 text-sm">
                <a href="#" className="block hover:text-white">Our Story</a>
                <a href="#" className="block hover:text-white">Journal</a>
                <a href="#" className="block hover:text-white">Stockists</a>
                <a href="#" className="block hover:text-white">Careers</a>
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs tracking-[0.08em]">
            <div>© {new Date().getFullYear()} Velmora. All rights reserved.</div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white">Instagram</a>
              <a href="#" className="hover:text-white">Pinterest</a>
              <a href="#" className="hover:text-white">TikTok</a>
            </div>
            <div>Visa • Mastercard • Amex • Apple Pay</div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;