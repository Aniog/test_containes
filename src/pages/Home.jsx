import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

const Home = () => {
  const bestsellers = products.slice(0, 5);
  
  const ugcItems = [
    { id: 1, caption: "Everyday elegance", image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=400&q=80" },
    { id: 2, caption: "Golden hour glow", image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&q=80" },
    { id: 3, caption: "Timeless beauty", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80" },
    { id: 4, caption: "Effortless charm", image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400&q=80" },
    { id: 5, caption: "Quiet luxury", image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=400&q=80" },
  ];

  const testimonials = [
    { name: "Elena M.", text: "The quality is exceptional. These pieces feel like heirlooms.", rating: 5 },
    { name: "Sophia R.", text: "Beautiful packaging and the jewelry exceeded my expectations.", rating: 5 },
    { name: "Isabella T.", text: "My go-to for meaningful gifts. Always receives compliments.", rating: 5 },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center bg-[#2C2823] overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=2000&q=80')] bg-cover bg-center opacity-60"></div>
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="heading-serif text-6xl md:text-7xl text-white mb-6 tracking-[0.05em]">
            Crafted to be Treasured
          </h1>
          <p className="text-white/90 text-lg mb-10 max-w-md mx-auto">
            Demi-fine jewelry for the modern woman who values quiet luxury.
          </p>
          <Link to="/shop" className="btn btn-primary inline-block">
            Shop the Collection
          </Link>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="border-b border-[#E5DFD4] py-4">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-xs tracking-[0.15em] text-[#6B665F] text-center">
            <span>FREE WORLDWIDE SHIPPING</span>
            <span className="hidden md:inline">·</span>
            <span>30-DAY RETURNS</span>
            <span className="hidden md:inline">·</span>
            <span>18K GOLD PLATED</span>
            <span className="hidden md:inline">·</span>
            <span>HYPOALLERGENIC</span>
          </div>
        </div>
      </div>

      {/* Bestsellers */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <span className="text-[#B8976D] text-xs tracking-[0.2em]">DISCOVER</span>
            <h2 className="heading-serif text-4xl mt-2">Bestsellers</h2>
          </div>
          <Link to="/shop" className="text-sm tracking-[0.1em] hover:text-[#B8976D] transition-colors hidden md:block">
            VIEW ALL →
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {bestsellers.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* UGC Reel Row */}
      <section className="bg-[#F5F1EA] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-8">
            <span className="text-[#B8976D] text-xs tracking-[0.2em]">AS SEEN ON</span>
            <h3 className="heading-serif text-3xl mt-2">Worn by You</h3>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
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
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <span className="text-[#B8976D] text-xs tracking-[0.2em]">EXPLORE</span>
          <h2 className="heading-serif text-4xl mt-2">Shop by Category</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { name: "Earrings", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80" },
            { name: "Necklaces", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80" },
            { name: "Huggies", image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80" },
          ].map(cat => (
            <Link key={cat.name} to="/shop" className="category-tile group">
              <img src={cat.image} alt={cat.name} className="w-full h-full object-cover" />
              <div className="category-overlay">
                <span className="product-name text-white text-lg tracking-[0.2em]">{cat.name}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Brand Story */}
      <section className="max-w-7xl mx-auto px-6 py-20 border-t border-[#E5DFD4]">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="aspect-[4/3] bg-[#F5F1EA]">
            <img 
              src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=1000&q=80" 
              alt="Velmora atelier" 
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <span className="text-[#B8976D] text-xs tracking-[0.2em]">OUR HERITAGE</span>
            <h2 className="heading-serif text-4xl mt-4 mb-6">Our Story</h2>
            <p className="text-[#6B665F] leading-relaxed mb-8">
              Founded on the belief that true luxury lies in the details, Velmora creates demi-fine jewelry 
              that bridges the gap between precious and accessible. Each piece is thoughtfully designed 
              in our atelier and crafted with the finest materials.
            </p>
            <Link to="/about" className="btn btn-outline inline-block">Learn More</Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-7xl mx-auto px-6 py-20 bg-[#F5F1EA]">
        <div className="text-center mb-12">
          <span className="text-[#B8976D] text-xs tracking-[0.2em]">IN THEIR WORDS</span>
          <h2 className="heading-serif text-4xl mt-2">What Our Clients Say</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="testimonial">
              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} size={14} fill="#B8976D" color="#B8976D" />
                ))}
              </div>
              <p className="text-[#6B665F] mb-6 leading-relaxed">"{t.text}"</p>
              <div className="text-sm tracking-[0.1em]">{t.name}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="newsletter py-20">
        <div className="max-w-xl mx-auto px-6 text-center">
          <h2 className="heading-serif text-3xl text-white mb-4">Join for 10% off your first order</h2>
          <p className="text-white/70 mb-8">Be the first to discover new collections and exclusive offers.</p>
          <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-1 px-6 py-4 bg-white/10 border border-white/30 text-white placeholder:text-white/50 focus:outline-none focus:border-white/50"
            />
            <button type="submit" className="btn btn-gold whitespace-nowrap">Subscribe</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2C2823] text-[#F8F5F1] pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-y-12 mb-16">
            <div>
              <div className="heading-serif text-2xl tracking-[0.2em] mb-4">VELMORA</div>
              <p className="text-sm text-white/60">Fine jewelry, thoughtfully made.</p>
            </div>
            <div>
              <div className="text-xs tracking-[0.15em] mb-4 text-white/60">SHOP</div>
              <div className="space-y-2 text-sm">
                <Link to="/shop" className="block hover:text-[#B8976D]">All Jewelry</Link>
                <Link to="/shop" className="block hover:text-[#B8976D]">Earrings</Link>
                <Link to="/shop" className="block hover:text-[#B8976D]">Necklaces</Link>
                <Link to="/shop" className="block hover:text-[#B8976D]">Huggies</Link>
              </div>
            </div>
            <div>
              <div className="text-xs tracking-[0.15em] mb-4 text-white/60">HELP</div>
              <div className="space-y-2 text-sm">
                <a href="#" className="block hover:text-[#B8976D]">Shipping</a>
                <a href="#" className="block hover:text-[#B8976D]">Returns</a>
                <a href="#" className="block hover:text-[#B8976D]">Care Guide</a>
                <a href="#" className="block hover:text-[#B8976D]">Contact</a>
              </div>
            </div>
            <div>
              <div className="text-xs tracking-[0.15em] mb-4 text-white/60">COMPANY</div>
              <div className="space-y-2 text-sm">
                <Link to="/about" className="block hover:text-[#B8976D]">Our Story</Link>
                <Link to="/journal" className="block hover:text-[#B8976D]">Journal</Link>
                <a href="#" className="block hover:text-[#B8976D]">Sustainability</a>
                <a href="#" className="block hover:text-[#B8976D]">Careers</a>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/50">
            <div>© 2026 Velmora Fine Jewelry. All rights reserved.</div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white">Instagram</a>
              <a href="#" className="hover:text-white">Pinterest</a>
              <a href="#" className="hover:text-white">TikTok</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;