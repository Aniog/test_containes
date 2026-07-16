import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

const Home = () => {
  const bestsellers = products.slice(0, 5);
  
  const ugcItems = [
    { id: 1, image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&q=80", caption: "Golden hour glow" },
    { id: 2, image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=400&q=80", caption: "Everyday elegance" },
    { id: 3, image: "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=400&q=80", caption: "Soft light, soft gold" },
    { id: 4, image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&q=80", caption: "Effortless beauty" },
    { id: 5, image: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=400&q=80", caption: "Treasured moments" },
  ];

  const testimonials = [
    { name: "Elena M.", text: "The quality is exceptional. My huggies have become my signature piece.", rating: 5 },
    { name: "Sofia R.", text: "Beautiful packaging and even more beautiful jewelry. A gift I'll treasure.", rating: 5 },
    { name: "Isabella T.", text: "Finally found pieces that feel truly special without being ostentatious.", rating: 5 },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[100dvh] min-h-[700px] flex items-center justify-center bg-[#2C2823] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=2000&q=90" 
            alt="Warm-lit close-up of gold jewelry on model"
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-3xl">
          <h1 className="heading-serif text-6xl md:text-7xl text-white tracking-[0.04em] mb-6">
            Crafted to be Treasured
          </h1>
          <p className="text-white/90 text-lg mb-10 tracking-wide">
            Demi-fine gold jewelry for the modern woman
          </p>
          <Link to="/shop" className="btn btn-accent inline-block">
            Shop the Collection
          </Link>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <div className="w-px h-12 bg-white/40" />
        </div>
      </section>

      {/* Trust Bar */}
      <div className="border-b border-[#E5DFD3] py-4">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-xs tracking-[0.12em] uppercase text-[#7A7368]">
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
      <section className="max-w-[1400px] mx-auto px-6 py-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <span className="uppercase tracking-[0.15em] text-xs text-[#8B7355]">Signature Pieces</span>
            <h2 className="heading-serif text-4xl mt-2">Bestsellers</h2>
          </div>
          <Link to="/shop" className="hidden md:block text-sm tracking-[0.08em] uppercase hover:text-[#8B7355]">View All →</Link>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* UGC Reel Row */}
      <section className="bg-[#F0EBE3] py-16">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="mb-8">
            <span className="uppercase tracking-[0.15em] text-xs text-[#8B7355]">As Seen On You</span>
            <h3 className="heading-serif text-3xl mt-1">Moments in Gold</h3>
          </div>
          
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory">
            {ugcItems.map((item) => (
              <div key={item.id} className="ugc-card snap-start">
                <img src={item.image} alt={item.caption} />
                <div className="ugc-caption">{item.caption}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shop by Category */}
      <section className="max-w-[1400px] mx-auto px-6 py-20">
        <div className="mb-10 text-center">
          <span className="uppercase tracking-[0.15em] text-xs text-[#8B7355]">Discover</span>
          <h2 className="heading-serif text-4xl mt-2">Shop by Category</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { name: "Earrings", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80", link: "/shop?category=Earrings" },
            { name: "Necklaces", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80", link: "/shop?category=Necklaces" },
            { name: "Huggies", image: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80", link: "/shop?category=Huggies" },
          ].map((cat) => (
            <Link key={cat.name} to={cat.link} className="category-tile group">
              <img src={cat.image} alt={cat.name} className="w-full h-full object-cover" />
              <div className="category-overlay">
                <span className="text-white text-xl tracking-[0.1em] font-medium">{cat.name}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Brand Story */}
      <section className="border-t border-[#E5DFD3]">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-2">
          <div className="aspect-[4/3] md:aspect-auto bg-[#F0EBE3]">
            <img 
              src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=1000&q=80" 
              alt="Artisan crafting jewelry"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center px-8 md:px-16 py-16 md:py-0">
            <span className="uppercase tracking-[0.15em] text-xs text-[#8B7355]">Since 2019</span>
            <h2 className="heading-serif text-4xl mt-3 mb-6">Our Story</h2>
            <p className="text-[#5A5348] leading-relaxed mb-8 max-w-md">
              Velmora was born from a desire to create jewelry that feels both timeless and contemporary. 
              Each piece is thoughtfully designed in our studio and crafted with care using the finest materials.
            </p>
            <Link to="/" className="btn btn-outline w-fit">Learn More About Us</Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-[1400px] mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <span className="uppercase tracking-[0.15em] text-xs text-[#8B7355]">Voices</span>
          <h2 className="heading-serif text-4xl mt-2">What Our Clients Say</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="testimonial">
              <div className="stars flex gap-0.5 mb-5">
                {Array.from({ length: t.rating }).map((_, idx) => (
                  <Star key={idx} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="text-[#5A5348] italic leading-relaxed mb-6">"{t.text}"</p>
              <div className="text-sm tracking-[0.05em]">{t.name}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="newsletter py-20">
        <div className="max-w-md mx-auto px-6 text-center">
          <h3 className="heading-serif text-3xl text-white mb-3">Join for 10% off</h3>
          <p className="text-white/70 text-sm mb-8 tracking-wide">Be the first to know about new arrivals and exclusive offers.</p>
          
          <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Your email address" 
              className="input flex-1 bg-white/95 border-white/20 text-[#2C2823]"
              required 
            />
            <button type="submit" className="btn btn-accent whitespace-nowrap">Subscribe</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2C2823] text-[#A89F8F] pt-16 pb-8">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 pb-12 border-b border-white/10">
            <div>
              <div className="heading-serif text-2xl tracking-[0.15em] text-white mb-6">VELMORA</div>
            </div>
            
            <div>
              <div className="uppercase tracking-[0.12em] text-xs mb-4 text-white">Shop</div>
              <div className="space-y-2 text-sm">
                <Link to="/shop" className="block hover:text-white">All Jewelry</Link>
                <Link to="/shop?category=Earrings" className="block hover:text-white">Earrings</Link>
                <Link to="/shop?category=Necklaces" className="block hover:text-white">Necklaces</Link>
                <Link to="/shop?category=Huggies" className="block hover:text-white">Huggies</Link>
              </div>
            </div>
            
            <div>
              <div className="uppercase tracking-[0.12em] text-xs mb-4 text-white">Help</div>
              <div className="space-y-2 text-sm">
                <a href="#" className="block hover:text-white">Shipping</a>
                <a href="#" className="block hover:text-white">Returns</a>
                <a href="#" className="block hover:text-white">Care Guide</a>
                <a href="#" className="block hover:text-white">Contact</a>
              </div>
            </div>
            
            <div>
              <div className="uppercase tracking-[0.12em] text-xs mb-4 text-white">Company</div>
              <div className="space-y-2 text-sm">
                <a href="#" className="block hover:text-white">Our Story</a>
                <a href="#" className="block hover:text-white">Journal</a>
                <a href="#" className="block hover:text-white">Stockists</a>
                <a href="#" className="block hover:text-white">Careers</a>
              </div>
            </div>
          </div>
          
          <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs tracking-[0.08em]">
            <div>© {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white">Instagram</a>
              <a href="#" className="hover:text-white">Pinterest</a>
              <a href="#" className="hover:text-white">TikTok</a>
            </div>
            <div>Visa · Mastercard · Amex · Apple Pay</div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;