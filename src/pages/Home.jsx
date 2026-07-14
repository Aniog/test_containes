import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import Navbar from '../components/Navbar';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

const Home = () => {
  const bestsellers = products.slice(0, 5);
  
  const ugcItems = [
    { id: 1, caption: "Morning light", image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&q=80" },
    { id: 2, caption: "Golden hour", image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=400&q=80" },
    { id: 3, caption: "Effortless", image: "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=400&q=80" },
    { id: 4, caption: "Timeless", image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&q=80" },
    { id: 5, caption: "Everyday", image: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=400&q=80" },
  ];

  const testimonials = [
    { name: "Elena M.", text: "The quality is exceptional. I've worn my huggies daily for months and they still look brand new." },
    { name: "Sofia R.", text: "Beautiful packaging and even more beautiful jewelry. My go-to for gifting." },
    { name: "Isabella T.", text: "Finally found pieces that don't irritate my sensitive skin. The gold tone is perfect." },
  ];

  return (
    <div className="min-h-screen bg-[#F8F5F1]">
      <Navbar />

      {/* 1. Hero Section */}
      <section className="relative h-[100dvh] min-h-[700px] flex items-center justify-center pt-20">
        <div className="absolute inset-0 bg-[#2C2522]">
          <img 
            src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=2000&q=80" 
            alt="Velmora Jewelry"
            className="w-full h-full object-cover opacity-90"
          />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="serif text-6xl md:text-7xl text-white mb-6 tracking-[0.02em]">
            Crafted to be Treasured
          </h1>
          <p className="text-white/90 text-lg mb-10 tracking-wide">
            Demi-fine jewelry for the modern woman
          </p>
          <Link to="/shop" className="btn btn-primary inline-block">
            Shop the Collection
          </Link>
        </div>
      </section>

      {/* 2. Trust Bar */}
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

      {/* 3. Bestsellers */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-xs tracking-[0.2em] text-[#8B7355] mb-2">DISCOVER</p>
            <h2 className="serif text-4xl">Bestsellers</h2>
          </div>
          <Link to="/shop" className="text-sm tracking-widest hover:text-[#8B7355] transition-colors hidden md:block">
            VIEW ALL →
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {bestsellers.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* 4. UGC Reel Row */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-xs tracking-[0.2em] text-[#8B7355] mb-8">AS SEEN ON YOU</p>
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

      {/* 5. Shop by Category */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.2em] text-[#8B7355] mb-2">EXPLORE</p>
          <h2 className="serif text-4xl">Shop by Category</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { name: "Earrings", image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&q=80" },
            { name: "Necklaces", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80" },
            { name: "Huggies", image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&q=80" },
          ].map(cat => (
            <Link key={cat.name} to="/shop" className="category-tile group">
              <img src={cat.image} alt={cat.name} />
              <div className="category-overlay">
                <span className="text-white text-lg tracking-[0.15em] font-medium">{cat.name}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 6. Brand Story */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2">
          <div className="aspect-[4/3] md:aspect-auto">
            <img 
              src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=1200&q=80" 
              alt="Our Story"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex items-center p-10 md:p-16">
            <div>
              <p className="text-xs tracking-[0.2em] text-[#8B7355] mb-4">EST. 2019</p>
              <h2 className="serif text-4xl mb-6">Our Story</h2>
              <p className="text-[#6B6058] leading-relaxed mb-8">
                Velmora was born from a desire to create jewelry that feels as special as the moments it marks. 
                Each piece is thoughtfully designed in our studio and crafted with the finest materials.
              </p>
              <Link to="/about" className="btn btn-outline text-sm inline-block">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Testimonials */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.2em] text-[#8B7355] mb-2">LOVED BY MANY</p>
          <h2 className="serif text-4xl">What Our Customers Say</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="text-center">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={16} className="text-[#C5A46E] fill-[#C5A46E]" />
                ))}
              </div>
              <p className="text-[#6B6058] italic mb-4">"{t.text}"</p>
              <p className="text-sm tracking-widest">— {t.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 8. Newsletter */}
      <section className="bg-[#2C2522] py-16">
        <div className="max-w-md mx-auto px-6 text-center">
          <p className="text-[#C5A46E] text-xs tracking-[0.2em] mb-3">BECOME PART OF OUR STORY</p>
          <h3 className="serif text-3xl text-white mb-4">Join for 10% off your first order</h3>
          <p className="text-white/70 text-sm mb-8">Receive early access to new collections and styling inspiration.</p>
          <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Your email address" 
              className="input flex-1 bg-white/95 border-white/20"
              required
            />
            <button type="submit" className="btn btn-gold whitespace-nowrap">Subscribe</button>
          </form>
        </div>
      </section>

      {/* 9. Footer */}
      <footer className="bg-[#F8F5F1] border-t border-[#E5DFD6] pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 mb-16">
            <div>
              <p className="logo text-xl mb-6">VELMORA</p>
            </div>
            <div>
              <p className="text-xs tracking-[0.15em] mb-4 text-[#8B7355]">SHOP</p>
              <div className="space-y-2 text-sm text-[#6B6058]">
                <Link to="/shop" className="block hover:text-[#2C2522]">All Jewelry</Link>
                <Link to="/shop" className="block hover:text-[#2C2522]">Earrings</Link>
                <Link to="/shop" className="block hover:text-[#2C2522]">Necklaces</Link>
                <Link to="/shop" className="block hover:text-[#2C2522]">Huggies</Link>
              </div>
            </div>
            <div>
              <p className="text-xs tracking-[0.15em] mb-4 text-[#8B7355]">HELP</p>
              <div className="space-y-2 text-sm text-[#6B6058]">
                <a href="#" className="block hover:text-[#2C2522]">Shipping</a>
                <a href="#" className="block hover:text-[#2C2522]">Returns</a>
                <a href="#" className="block hover:text-[#2C2522]">Care Guide</a>
                <a href="#" className="block hover:text-[#2C2522]">Contact</a>
              </div>
            </div>
            <div>
              <p className="text-xs tracking-[0.15em] mb-4 text-[#8B7355]">COMPANY</p>
              <div className="space-y-2 text-sm text-[#6B6058]">
                <Link to="/about" className="block hover:text-[#2C2522]">Our Story</Link>
                <Link to="/journal" className="block hover:text-[#2C2522]">Journal</Link>
                <a href="#" className="block hover:text-[#2C2522]">Sustainability</a>
                <a href="#" className="block hover:text-[#2C2522]">Careers</a>
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-[#E5DFD6] flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#6B6058]">
            <p>© {new Date().getFullYear()} Velmora. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-[#2C2522]">Instagram</a>
              <a href="#" className="hover:text-[#2C2522]">Pinterest</a>
              <a href="#" className="hover:text-[#2C2522]">TikTok</a>
            </div>
            <div className="flex gap-4">
              <span>Visa</span>
              <span>MC</span>
              <span>Amex</span>
              <span>PayPal</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;