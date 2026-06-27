import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import ProductCard from '../components/ProductCard';

const HomePage = ({ products, addToCart }) => {
  const bestsellers = products.slice(0, 5);
  
  const ugcItems = [
    { id: 1, caption: "Morning light", image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400&q=80" },
    { id: 2, caption: "Everyday elegance", image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce45e?w=400&q=80" },
    { id: 3, caption: "Golden hour", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&q=80" },
    { id: 4, caption: "Timeless beauty", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80" },
    { id: 5, caption: "Effortless charm", image: "https://images.unsplash.com/photo-1506630448388-4bc034007a7b?w=400&q=80" },
  ];

  const testimonials = [
    { name: "Elena M.", text: "The quality is exceptional. My necklace has become my signature piece." },
    { name: "Sophia R.", text: "Beautiful packaging and even more beautiful jewelry. A gift I'll treasure." },
    { name: "Isabella K.", text: "Finally found pieces that feel both special and wearable every day." },
  ];

  return (
    <div className="pt-20">
      {/* 1. Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center bg-[#1C1917] overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1515562141207-7a88fb7ce45e?w=2000&q=80')] bg-cover bg-center opacity-70" />
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="serif text-6xl md:text-7xl text-white tracking-[-0.02em] mb-6">
            Crafted to be Treasured
          </h1>
          <p className="text-white/80 text-lg mb-10 max-w-md mx-auto">
            Demi-fine gold jewelry, thoughtfully designed for the modern woman.
          </p>
          <Link to="/shop" className="btn btn-gold inline-block">
            Shop the Collection
          </Link>
        </div>
      </section>

      {/* 2. Trust Bar */}
      <div className="border-b border-[#E5DFD4] py-4 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-2 text-xs tracking-[0.15em] text-[#6B665F] uppercase text-center">
            <span>Free Worldwide Shipping</span>
            <span>30-Day Returns</span>
            <span>18K Gold Plated</span>
            <span>Hypoallergenic</span>
          </div>
        </div>
      </div>

      {/* 3. Bestsellers */}
      <section className="max-w-7xl mx-auto px-6 pt-20 pb-16">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-xs tracking-[0.2em] text-[#B8976E] mb-2">DISCOVER</p>
            <h2 className="serif text-4xl tracking-[-0.01em]">Bestsellers</h2>
          </div>
          <Link to="/shop" className="text-sm tracking-[0.1em] hover:text-[#B8976E] transition-colors hidden md:block">
            VIEW ALL →
          </Link>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {bestsellers.map(product => (
            <ProductCard key={product.id} product={product} addToCart={addToCart} />
          ))}
        </div>
      </section>

      {/* 4. UGC Reel */}
      <section className="bg-white py-16 border-y border-[#E5DFD4]">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs tracking-[0.2em] text-[#B8976E] mb-8 text-center">AS SEEN ON YOU</p>
          
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory">
            {ugcItems.map(item => (
              <div key={item.id} className="ugc-card w-[180px] md:w-[200px] aspect-[9/16] bg-[#F5F1EA] snap-start">
                <img 
                  src={item.image} 
                  alt={item.caption}
                  className="w-full h-full object-cover"
                />
                <div className="ugc-caption">
                  <p className="serif text-sm tracking-[0.1em]">{item.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Shop by Category */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <p className="text-xs tracking-[0.2em] text-[#B8976E] mb-8 text-center">EXPLORE</p>
        <h2 className="serif text-4xl tracking-[-0.01em] text-center mb-12">Shop by Category</h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { name: "Earrings", path: "/shop?category=Earrings", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80" },
            { name: "Necklaces", path: "/shop?category=Necklaces", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80" },
            { name: "Huggies", path: "/shop?category=Huggies", image: "https://images.unsplash.com/photo-1506630448388-4bc034007a7b?w=800&q=80" },
          ].map((cat, idx) => (
            <Link key={idx} to={cat.path} className="category-tile aspect-[4/3] bg-[#1C1917] overflow-hidden block">
              <img src={cat.image} alt={cat.name} className="w-full h-full object-cover" />
              <div className="overlay" />
              <span className="label serif tracking-[0.15em]">{cat.name}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* 6. Brand Story */}
      <section id="about" className="bg-white border-y border-[#E5DFD4]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2">
          <div className="aspect-[4/3] md:aspect-auto bg-[url('https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=1200&q=80')] bg-cover bg-center" />
          
          <div className="px-8 md:px-16 py-16 md:py-20 flex flex-col justify-center">
            <p className="text-xs tracking-[0.2em] text-[#B8976E] mb-4">OUR PHILOSOPHY</p>
            <h2 className="serif text-4xl tracking-[-0.01em] mb-8">Jewelry that feels like you.</h2>
            
            <div className="body-text text-[#6B665F] space-y-4 mb-8 max-w-md">
              <p>Founded in 2019, Velmora creates demi-fine jewelry that bridges the gap between everyday wear and special occasion pieces.</p>
              <p>Each piece is crafted with intention—using 18K gold plating over sterling silver, set with ethically sourced crystals.</p>
            </div>
            
            <Link to="/about" className="text-sm tracking-[0.1em] hover:text-[#B8976E] transition-colors inline-flex items-center gap-2">
              READ OUR STORY →
            </Link>
          </div>
        </div>
      </section>

      {/* 7. Testimonials */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <p className="text-xs tracking-[0.2em] text-[#B8976E] mb-8 text-center">IN THEIR WORDS</p>
        <h2 className="serif text-4xl tracking-[-0.01em] text-center mb-14">What Our Community Says</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="text-center">
              <div className="flex justify-center mb-4 text-[#B8976E]">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <p className="body-text text-[#6B665F] mb-6">"{t.text}"</p>
              <p className="text-sm tracking-[0.1em]">{t.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 8. Newsletter */}
      <section className="bg-[#1C1917] py-20">
        <div className="max-w-md mx-auto px-6 text-center">
          <p className="text-[#B8976E] text-xs tracking-[0.2em] mb-4">JOIN THE CIRCLE</p>
          <h3 className="serif text-3xl text-white tracking-[-0.01em] mb-4">Receive 10% off your first order</h3>
          <p className="text-white/60 text-sm mb-8">Be the first to know about new arrivals and exclusive offers.</p>
          
          <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => { e.preventDefault(); alert('Thank you for subscribing!'); }}>
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-1 px-5 py-3.5 bg-white/10 border border-white/20 text-white placeholder:text-white/40 text-sm focus:outline-none focus:border-[#B8976E]"
              required
            />
            <button type="submit" className="btn btn-gold whitespace-nowrap">Subscribe</button>
          </form>
        </div>
      </section>

      {/* 9. Footer */}
      <footer className="bg-white border-t border-[#E5DFD4] pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-y-12">
          <div>
            <p className="serif text-xl tracking-[0.2em] mb-4">VELMORA</p>
            <p className="text-xs text-[#6B665F]">Fine Jewelry</p>
          </div>
          
          <div>
            <p className="text-xs tracking-[0.15em] mb-4 text-[#6B665F]">SHOP</p>
            <div className="space-y-2 text-sm">
              <Link to="/shop" className="block hover:text-[#B8976E]">All Jewelry</Link>
              <Link to="/shop?category=Earrings" className="block hover:text-[#B8976E]">Earrings</Link>
              <Link to="/shop?category=Necklaces" className="block hover:text-[#B8976E]">Necklaces</Link>
              <Link to="/shop?category=Huggies" className="block hover:text-[#B8976E]">Huggies</Link>
            </div>
          </div>
          
          <div>
            <p className="text-xs tracking-[0.15em] mb-4 text-[#6B665F]">HELP</p>
            <div className="space-y-2 text-sm">
              <a href="#" className="block hover:text-[#B8976E]">Shipping</a>
              <a href="#" className="block hover:text-[#B8976E]">Returns</a>
              <a href="#" className="block hover:text-[#B8976E]">Care Guide</a>
              <a href="#" className="block hover:text-[#B8976E]">Contact</a>
            </div>
          </div>
          
          <div>
            <p className="text-xs tracking-[0.15em] mb-4 text-[#6B665F]">COMPANY</p>
            <div className="space-y-2 text-sm">
              <a href="#about" className="block hover:text-[#B8976E]">Our Story</a>
              <a href="#journal" className="block hover:text-[#B8976E]">Journal</a>
              <a href="#" className="block hover:text-[#B8976E]">Sustainability</a>
              <a href="#" className="block hover:text-[#B8976E]">Careers</a>
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-[#E5DFD4] flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#6B665F]">
          <p>© {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex gap-6">
            <span>Instagram</span>
            <span>Pinterest</span>
            <span> TikTok</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
