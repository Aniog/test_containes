import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

const Home = () => {
  const bestsellers = products.slice(0, 5);
  
  const ugcItems = [
    { id: 1, caption: "My everyday staple", image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=600&q=80" },
    { id: 2, caption: "Obsessed with these", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=80" },
    { id: 3, caption: "Perfect for gifting", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=80" },
    { id: 4, caption: "Worn on repeat", image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce45e?w=600&q=80" },
    { id: 5, caption: "Elevated basics", image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&q=80" },
  ];

  const testimonials = [
    { name: "Elena M.", text: "The quality is exceptional. These pieces feel so much more expensive than they are.", rating: 5 },
    { name: "Sophia R.", text: "Beautiful packaging and even more beautiful jewelry. My go-to for gifts.", rating: 5 },
    { name: "Isabella T.", text: "Finally found jewelry that doesn't irritate my sensitive skin. Love every piece.", rating: 5 },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[100dvh] min-h-[700px] flex items-center justify-center pt-20">
        <div className="absolute inset-0 bg-[#1a1816]">
          <img 
            src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce45e?w=2000&q=90" 
            alt="Velmora Jewelry"
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="font-serif text-6xl md:text-7xl text-white tracking-[-0.02em] mb-6">
            Crafted to be Treasured
          </h1>
          <p className="text-white/90 text-lg md:text-xl mb-10 tracking-[0.02em]">
            Demi-fine jewelry for the modern woman
          </p>
          <Link to="/shop" className="btn btn-gold inline-block">
            Shop the Collection
          </Link>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
          <div className="w-px h-12 bg-white/40" />
        </div>
      </section>

      {/* Trust Bar */}
      <div className="trust-bar bg-white border-b border-[#e5e0d8] py-4">
        <div className="max-w-[1400px] mx-auto px-6 flex flex-wrap justify-center gap-x-8 gap-y-2 text-center text-[#6b6763]">
          <span>Free Worldwide Shipping</span>
          <span className="hidden md:inline text-[#e5e0d8]">·</span>
          <span>30-Day Returns</span>
          <span className="hidden md:inline text-[#e5e0d8]">·</span>
          <span>18K Gold Plated</span>
          <span className="hidden md:inline text-[#e5e0d8]">·</span>
          <span>Hypoallergenic</span>
        </div>
      </div>

      {/* Bestsellers */}
      <section className="max-w-[1400px] mx-auto px-6 pt-20 pb-16">
        <div className="flex items-end justify-between mb-10">
          <div>
            <span className="text-xs tracking-[0.2em] text-[#6b6763] uppercase">Signature Pieces</span>
            <h2 className="font-serif text-4xl tracking-[-0.01em] mt-2">Bestsellers</h2>
          </div>
          <Link to="/shop" className="hidden md:block text-sm tracking-[0.08em] hover:text-[#b8976e]">
            View All →
          </Link>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* UGC Reel Row */}
      <section className="bg-[#f5f3ef] py-16">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="mb-8">
            <span className="text-xs tracking-[0.2em] text-[#6b6763] uppercase">As Seen On You</span>
            <h2 className="font-serif text-4xl tracking-[-0.01em] mt-2">Real Moments</h2>
          </div>
          
          <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
            {ugcItems.map((item) => (
              <div key={item.id} className="ugc-card w-[180px] md:w-[200px] aspect-[9/16] bg-[#1a1816] snap-start">
                <img src={item.image} alt="" className="w-full h-full object-cover" />
                <div className="ugc-caption">
                  {item.caption}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shop by Category */}
      <section className="max-w-[1400px] mx-auto px-6 py-20">
        <div className="mb-10 text-center">
          <span className="text-xs tracking-[0.2em] text-[#6b6763] uppercase">Discover</span>
          <h2 className="font-serif text-4xl tracking-[-0.01em] mt-2">Shop by Category</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { label: 'Earrings', path: '/shop?category=earrings', image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80' },
            { label: 'Necklaces', path: '/shop?category=necklaces', image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80' },
            { label: 'Huggies', path: '/shop?category=huggies', image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80' },
          ].map((cat, idx) => (
            <Link key={idx} to={cat.path} className="category-tile aspect-[16/10] block overflow-hidden">
              <img src={cat.image} alt={cat.label} className="w-full h-full object-cover" />
              <div className="category-label">{cat.label}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* Brand Story */}
      <section className="max-w-[1400px] mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="aspect-[4/3] bg-[#f5f3ef]">
            <img 
              src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce45e?w=1000&q=80" 
              alt="Our Craft" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="max-w-lg">
            <span className="text-xs tracking-[0.2em] text-[#6b6763] uppercase">Our Heritage</span>
            <h2 className="font-serif text-4xl tracking-[-0.01em] mt-3 mb-6">Our Story</h2>
            <p className="text-[#6b6763] leading-relaxed mb-8">
              Founded on the belief that beautiful jewelry should be accessible, Velmora creates 
              demi-fine pieces that honor tradition while embracing the modern woman. Each piece 
              is thoughtfully designed in our studio and crafted with care.
            </p>
            <Link to="/shop" className="btn btn-outline inline-block">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-20">
        <div className="max-w-[1000px] mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs tracking-[0.2em] text-[#6b6763] uppercase">Voices of Velmora</span>
            <h2 className="font-serif text-4xl tracking-[-0.01em] mt-2">What Our Community Says</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <div key={idx} className="text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-[#b8976e] text-[#b8976e]" />
                  ))}
                </div>
                <p className="text-[#6b6763] italic mb-4">"{t.text}"</p>
                <p className="text-sm tracking-[0.05em]">{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="newsletter py-20">
        <div className="max-w-md mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl text-white tracking-[-0.01em] mb-3">Join for 10% Off</h2>
          <p className="text-white/70 mb-8 text-sm tracking-[0.02em]">
            Be the first to know about new arrivals and exclusive offers.
          </p>
          <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-1 px-5 py-3.5 bg-white/10 border border-white/30 text-white placeholder:text-white/50 text-sm focus:outline-none focus:border-white/60"
            />
            <button type="submit" className="btn btn-gold whitespace-nowrap">
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a1816] text-white/70 pt-16 pb-8">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-y-12 mb-16">
            <div>
              <div className="font-serif text-2xl tracking-[0.15em] text-white mb-4">VELMORA</div>
              <p className="text-sm">Fine jewelry for the modern woman.</p>
            </div>
            
            <div>
              <div className="text-white text-sm tracking-[0.1em] mb-4">SHOP</div>
              <div className="space-y-2 text-sm">
                <Link to="/shop" className="footer-link block">All Jewelry</Link>
                <Link to="/shop?category=earrings" className="footer-link block">Earrings</Link>
                <Link to="/shop?category=necklaces" className="footer-link block">Necklaces</Link>
                <Link to="/shop?category=huggies" className="footer-link block">Huggies</Link>
              </div>
            </div>
            
            <div>
              <div className="text-white text-sm tracking-[0.1em] mb-4">HELP</div>
              <div className="space-y-2 text-sm">
                <a href="#" className="footer-link block">Shipping</a>
                <a href="#" className="footer-link block">Returns</a>
                <a href="#" className="footer-link block">Care Guide</a>
                <a href="#" className="footer-link block">Contact</a>
              </div>
            </div>
            
            <div>
              <div className="text-white text-sm tracking-[0.1em] mb-4">COMPANY</div>
              <div className="space-y-2 text-sm">
                <a href="#" className="footer-link block">Our Story</a>
                <a href="#" className="footer-link block">Journal</a>
                <a href="#" className="footer-link block">Sustainability</a>
                <a href="#" className="footer-link block">Careers</a>
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs tracking-[0.08em]">
            <div>© 2026 Velmora. All rights reserved.</div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white">Instagram</a>
              <a href="#" className="hover:text-white">Pinterest</a>
              <a href="#" className="hover:text-white">TikTok</a>
            </div>
            <div>Visa · Mastercard · Amex · PayPal</div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;