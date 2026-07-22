import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import ProductCard from '../components/ProductCard';

const Home = ({ products, addToCart, onCartClick }) => {
  const bestsellers = products.slice(0, 5);
  
  const ugcItems = [
    { id: 1, caption: "Morning light", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80" },
    { id: 2, caption: "Golden hour", image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&q=80" },
    { id: 3, caption: "Effortless", image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&q=80" },
    { id: 4, caption: "Everyday luxury", image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&q=80" },
    { id: 5, caption: "Timeless", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80" },
  ];

  const testimonials = [
    { name: "Elena M.", text: "The quality is exceptional. My huggies have become my everyday staple." },
    { name: "Sofia R.", text: "Beautiful packaging and even more beautiful jewelry. A gift that truly felt special." },
    { name: "Isabella T.", text: "Finally found pieces that don't irritate my sensitive skin. Thank you, Velmora." },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[100dvh] flex items-center justify-center pt-20">
        <div className="absolute inset-0 bg-[#2C2825]">
          <img 
            src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=2000&q=80" 
            alt="Velmora Jewelry"
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="serif text-6xl md:text-7xl text-white tracking-[0.05em] mb-6">
            Crafted to be Treasured
          </h1>
          <p className="text-white/90 text-lg mb-10 tracking-wide">
            Demi-fine gold jewelry, made with intention.
          </p>
          <Link to="/shop" className="btn btn-accent inline-block">
            Shop the Collection
          </Link>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
          <div className="w-px h-12 bg-white/50" />
        </div>
      </section>

      {/* Trust Bar */}
      <div className="border-b border-[#E5E0D8] py-4">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-xs tracking-[0.15em] text-[#8A847D] uppercase text-center">
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
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <span className="text-xs tracking-[0.2em] text-[#8A847D] uppercase">Signature Pieces</span>
            <h2 className="serif text-4xl mt-2">Bestsellers</h2>
          </div>
          <Link to="/shop" className="text-sm tracking-[0.1em] uppercase border-b border-[#8B7355] hover:text-[#8B7355]">
            View All
          </Link>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {bestsellers.map(product => (
            <ProductCard key={product.id} product={product} addToCart={addToCart} />
          ))}
        </div>
      </section>

      {/* UGC Reel Row */}
      <section className="bg-[#F0EDE6] py-16">
        <div className="max-w-7xl mx-auto px-6 mb-8">
          <span className="text-xs tracking-[0.2em] text-[#8A847D] uppercase">As Seen On You</span>
          <h2 className="serif text-3xl mt-2">Moments in Gold</h2>
        </div>
        
        <div className="overflow-x-auto pb-6 scrollbar-hide">
          <div className="flex gap-4 pl-6 md:pl-12">
            {ugcItems.map(item => (
              <div key={item.id} className="ugc-card w-[180px] aspect-[9/16] bg-[#2C2825]">
                <img 
                  src={item.image} 
                  alt={item.caption}
                  className="w-full h-full object-cover opacity-90"
                />
                <div className="ugc-caption">
                  <p className="text-sm tracking-wide">{item.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shop by Category */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <span className="text-xs tracking-[0.2em] text-[#8A847D] uppercase">Discover</span>
          <h2 className="serif text-4xl mt-2">Shop by Category</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { name: "Earrings", path: "/shop?category=Earrings", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80" },
            { name: "Necklaces", path: "/shop?category=Necklaces", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80" },
            { name: "Huggies", path: "/shop?category=Huggies", image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&q=80" },
          ].map((cat, idx) => (
            <Link key={idx} to={cat.path} className="category-tile aspect-[4/3] overflow-hidden block">
              <img src={cat.image} alt={cat.name} className="w-full h-full object-cover" />
              <div className="category-label">
                <span className="text-xl serif tracking-[0.1em]">{cat.name}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Brand Story */}
      <section id="about" className="border-t border-[#E5E0D8]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2">
          <div className="aspect-[4/3] md:aspect-auto bg-[#F0EDE6]">
            <img 
              src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=1200&q=80" 
              alt="Our Story"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex items-center px-8 md:px-16 py-16 md:py-0">
            <div>
              <span className="text-xs tracking-[0.2em] text-[#8A847D] uppercase">Since 2019</span>
              <h2 className="serif text-4xl mt-4 mb-6">Our Story</h2>
              <p className="text-[#5A5650] leading-relaxed mb-8 max-w-md">
                Velmora was born from a simple belief: that beautiful, lasting jewelry should be accessible. 
                We craft demi-fine pieces in 18K gold plating, designed to be worn every day and treasured for years.
              </p>
              <Link to="/shop" className="btn">Explore Our Collection</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <span className="text-xs tracking-[0.2em] text-[#8A847D] uppercase">Voices</span>
          <h2 className="serif text-4xl mt-2">What Our Clients Say</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="testimonial">
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="fill-[#C5A46E] text-[#C5A46E]" />
                ))}
              </div>
              <p className="text-[#5A5650] italic mb-4">"{t.text}"</p>
              <p className="text-sm tracking-[0.1em] uppercase">{t.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="newsletter py-16">
        <div className="max-w-xl mx-auto px-6 text-center">
          <h2 className="serif text-3xl text-white mb-3">Join for 10% off your first order</h2>
          <p className="text-white/70 mb-8 text-sm tracking-wide">Be the first to know about new arrivals and special collections.</p>
          
          <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Your email address"
              className="flex-1 px-6 py-3.5 bg-white/10 border border-white/30 text-white placeholder:text-white/50 focus:outline-none focus:border-white/60"
            />
            <button type="submit" className="btn btn-outline whitespace-nowrap">
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2C2825] text-white/70 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-y-12">
          <div>
            <div className="serif text-2xl tracking-[0.2em] text-white mb-4">VELMORA</div>
            <p className="text-sm">Fine jewelry, thoughtfully made.</p>
          </div>
          
          <div>
            <div className="text-white text-sm tracking-[0.15em] mb-4">SHOP</div>
            <div className="space-y-2 text-sm">
              <Link to="/shop?category=Earrings" className="block hover:text-white">Earrings</Link>
              <Link to="/shop?category=Necklaces" className="block hover:text-white">Necklaces</Link>
              <Link to="/shop?category=Huggies" className="block hover:text-white">Huggies</Link>
              <Link to="/shop" className="block hover:text-white">All Jewelry</Link>
            </div>
          </div>
          
          <div>
            <div className="text-white text-sm tracking-[0.15em] mb-4">HELP</div>
            <div className="space-y-2 text-sm">
              <a href="#" className="block hover:text-white">Shipping</a>
              <a href="#" className="block hover:text-white">Returns</a>
              <a href="#" className="block hover:text-white">Care Guide</a>
              <a href="#" className="block hover:text-white">Contact</a>
            </div>
          </div>
          
          <div>
            <div className="text-white text-sm tracking-[0.15em] mb-4">COMPANY</div>
            <div className="space-y-2 text-sm">
              <a href="#about" className="block hover:text-white">Our Story</a>
              <a href="#journal" className="block hover:text-white">Journal</a>
              <a href="#" className="block hover:text-white">Sustainability</a>
              <a href="#" className="block hover:text-white">Wholesale</a>
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs tracking-[0.1em]">
          <div>© 2026 Velmora. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Instagram</a>
            <a href="#" className="hover:text-white">Pinterest</a>
            <a href="#" className="hover:text-white">TikTok</a>
          </div>
          <div>Visa · Mastercard · Amex · Apple Pay</div>
        </div>
      </footer>
    </div>
  );
};

export default Home;