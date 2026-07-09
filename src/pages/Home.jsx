import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

const Home = () => {
  const bestsellers = products.slice(0, 5);
  
  const ugcImages = [
    { id: 1, caption: "Morning light", img: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&q=80" },
    { id: 2, caption: "Golden hour", img: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=400&q=80" },
    { id: 3, caption: "Effortless", img: "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=400&q=80" },
    { id: 4, caption: "Timeless", img: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&q=80" },
    { id: 5, caption: "Everyday", img: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=400&q=80" },
  ];

  const testimonials = [
    { name: "Elena M.", text: "The quality is exceptional. My huggies have become my everyday signature.", rating: 5 },
    { name: "Sofia R.", text: "Beautiful packaging and even more beautiful jewelry. A gift I'll treasure.", rating: 5 },
    { name: "Isabella T.", text: "Finally found pieces that feel luxurious without the luxury price tag.", rating: 5 },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[100dvh] min-h-[700px] flex items-center justify-center bg-[#2C2823] overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=2000&q=80')] bg-cover bg-center opacity-90" />
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="heading-serif text-6xl md:text-7xl text-white tracking-[-0.02em] mb-6">
            Crafted to be Treasured
          </h1>
          <p className="text-white/80 text-lg mb-10 max-w-md mx-auto">
            Demi-fine gold jewelry, thoughtfully designed for the modern woman.
          </p>
          <Link to="/shop" className="btn btn-primary inline-block">
            Shop the Collection
          </Link>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <div className="w-px h-12 bg-white/40" />
        </div>
      </section>

      {/* Trust Bar */}
      <div className="trust-bar bg-white border-b border-[#E5DFD3] py-4">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-x-8 gap-y-2 text-center text-[#7A7368]">
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
            <span className="text-xs tracking-[0.2em] text-[#8B7355] uppercase">Signature Pieces</span>
            <h2 className="heading-serif text-4xl mt-2">Bestsellers</h2>
          </div>
          <Link to="/shop" className="text-sm tracking-[0.1em] uppercase hover:text-[#8B7355] hidden md:block">
            View All →
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* UGC Reel */}
      <section className="bg-[#F0EBE3] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-8">
            <span className="text-xs tracking-[0.2em] text-[#8B7355] uppercase">As Seen On You</span>
            <h3 className="heading-serif text-3xl mt-2">Real Moments, Real Jewelry</h3>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory">
            {ugcImages.map((item) => (
              <div key={item.id} className="ugc-card snap-start rounded-sm overflow-hidden">
                <img src={item.img} alt={item.caption} />
                <div className="ugc-overlay">
                  <p className="text-sm tracking-[0.1em]">{item.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shop by Category */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <span className="text-xs tracking-[0.2em] text-[#8B7355] uppercase">Discover</span>
          <h2 className="heading-serif text-4xl mt-2">Shop by Category</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { name: "Earrings", link: "/shop?category=Earrings", img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80" },
            { name: "Necklaces", link: "/shop?category=Necklaces", img: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80" },
            { name: "Huggies", link: "/shop?category=Huggies", img: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&q=80" },
          ].map((cat) => (
            <Link key={cat.name} to={cat.link} className="category-tile group rounded-sm overflow-hidden">
              <img src={cat.img} alt={cat.name} />
              <div className="category-label">
                <span className="font-medium tracking-[0.15em]">{cat.name}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Brand Story */}
      <section className="max-w-7xl mx-auto px-6 py-20 border-t border-[#E5DFD3]">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="aspect-[4/3] bg-[#F0EBE3] rounded-sm overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=1000&q=80" 
              alt="Velmora atelier" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="max-w-lg">
            <span className="text-xs tracking-[0.2em] text-[#8B7355] uppercase">Our Philosophy</span>
            <h2 className="heading-serif text-4xl mt-3 mb-6">Jewelry that endures.</h2>
            <p className="text-[#7A7368] leading-relaxed mb-8">
              Velmora was born from a simple belief: beautiful jewelry shouldn't be reserved for special occasions. 
              We craft demi-fine pieces that feel as precious as fine jewelry, designed to be worn every day.
            </p>
            <Link to="/about" className="btn btn-outline inline-block">Our Story</Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-7xl mx-auto px-6 py-20 bg-[#F8F5F1]">
        <div className="text-center mb-12">
          <span className="text-xs tracking-[0.2em] text-[#8B7355] uppercase">Voices</span>
          <h2 className="heading-serif text-4xl mt-2">What Our Community Says</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="testimonial bg-white">
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, idx) => (
                  <Star key={idx} size={16} fill="#C5A46E" color="#C5A46E" />
                ))}
              </div>
              <p className="text-[#2C2823] mb-6 leading-relaxed">"{t.text}"</p>
              <p className="text-sm tracking-[0.1em] text-[#7A7368]">— {t.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="newsletter py-20">
        <div className="max-w-md mx-auto px-6 text-center">
          <h3 className="heading-serif text-3xl text-white mb-3">Join the Circle</h3>
          <p className="text-white/70 mb-8">Be the first to know about new arrivals and receive 10% off your first order.</p>
          <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-1 bg-white/10 border border-white/30 px-5 py-3 text-white placeholder:text-white/50 focus:outline-none focus:border-white/60"
            />
            <button type="submit" className="btn btn-gold whitespace-nowrap">Subscribe</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2C2823] text-[#F8F5F1]/70 py-16">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-y-12">
          <div>
            <div className="heading-serif text-xl tracking-[0.2em] text-white mb-4">VELMORA</div>
            <p className="text-sm">Fine jewelry for the modern woman.</p>
          </div>
          <div>
            <div className="text-white text-sm tracking-[0.1em] mb-4">SHOP</div>
            <div className="space-y-2 text-sm">
              <Link to="/shop" className="block hover:text-white">All Jewelry</Link>
              <Link to="/shop?category=Earrings" className="block hover:text-white">Earrings</Link>
              <Link to="/shop?category=Necklaces" className="block hover:text-white">Necklaces</Link>
              <Link to="/shop?category=Huggies" className="block hover:text-white">Huggies</Link>
            </div>
          </div>
          <div>
            <div className="text-white text-sm tracking-[0.1em] mb-4">HELP</div>
            <div className="space-y-2 text-sm">
              <a href="#" className="block hover:text-white">Shipping</a>
              <a href="#" className="block hover:text-white">Returns</a>
              <a href="#" className="block hover:text-white">Care Guide</a>
              <a href="#" className="block hover:text-white">Contact</a>
            </div>
          </div>
          <div>
            <div className="text-white text-sm tracking-[0.1em] mb-4">COMPANY</div>
            <div className="space-y-2 text-sm">
              <Link to="/about" className="block hover:text-white">Our Story</Link>
              <Link to="/journal" className="block hover:text-white">Journal</Link>
              <a href="#" className="block hover:text-white">Sustainability</a>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs tracking-[0.1em]">
          <div>© {new Date().getFullYear()} Velmora. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Instagram</a>
            <a href="#" className="hover:text-white">Pinterest</a>
            <a href="#" className="hover:text-white">TikTok</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
