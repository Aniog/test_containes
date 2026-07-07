import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import UGCCard from '../components/UGCCard';
import { products } from '../data/products';

const Home = () => {
  const bestsellers = products.slice(0, 5);
  const testimonials = [
    { name: "Elena M.", text: "The quality is exceptional. My huggies have become my everyday signature." },
    { name: "Sofia R.", text: "Beautiful packaging and even more beautiful jewelry. A gift that truly felt special." },
    { name: "Maya K.", text: "Finally found pieces that feel luxurious without being loud. Exactly what I was looking for." },
  ];

  return (
    <div>
      {/* 1. Sticky Nav - handled in Navbar component */}

      {/* 2. Full-bleed Hero */}
      <section className="relative h-[100dvh] min-h-[700px] flex items-center justify-center pt-20">
        <div className="absolute inset-0 bg-[#2c2522]">
          <img 
            src="https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=2000&q=90" 
            alt="Warm-lit close-up of gold jewelry on model"
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-3xl">
          <h1 className="serif text-white text-6xl md:text-7xl tracking-[0.02em] mb-6">
            Crafted to be Treasured
          </h1>
          <p className="text-white/90 text-lg mb-10 tracking-wide">
            Demi-fine gold jewelry, made with intention.
          </p>
          <Link to="/shop" className="btn-primary inline-block">
            Shop the Collection
          </Link>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <div className="w-px h-12 bg-white/40" />
        </div>
      </section>

      {/* 3. Trust Bar */}
      <div className="border-b border-[#e5e0d8] py-4">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-xs tracking-[0.1em] text-[#6b635e] uppercase text-center">
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

      {/* 4. Bestsellers */}
      <section className="max-w-[1400px] mx-auto px-6 pt-20 pb-16">
        <div className="flex items-end justify-between mb-10">
          <div>
            <span className="text-xs tracking-[0.15em] uppercase text-[#8a8178]">Signature Pieces</span>
            <h2 className="serif text-4xl mt-2">Bestsellers</h2>
          </div>
          <Link to="/shop" className="text-sm tracking-[0.06em] underline underline-offset-4 hover:text-[#8b7355]">
            View All
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* 5. UGC Reel Row */}
      <section className="bg-[#2c2522] py-16">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="mb-8">
            <span className="text-[#c5a46e] text-xs tracking-[0.15em] uppercase">As Seen On You</span>
            <h3 className="serif text-white text-3xl mt-2">Moments in Gold</h3>
          </div>
          <UGCCard />
        </div>
      </section>

      {/* 6. Shop by Category */}
      <section className="max-w-[1400px] mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <span className="text-xs tracking-[0.15em] uppercase text-[#8a8178]">Discover</span>
          <h2 className="serif text-4xl mt-2">Shop by Category</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {[
            { name: "Earrings", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80" },
            { name: "Necklaces", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80" },
            { name: "Huggies", image: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&q=80" },
          ].map((cat) => (
            <Link 
              key={cat.name} 
              to={`/shop?category=${cat.name}`}
              className="category-tile group rounded-sm overflow-hidden bg-[#f0ede6]"
            >
              <img 
                src={cat.image} 
                alt={cat.name}
                className="w-full h-full object-cover"
              />
              <div className="category-overlay">
                <span className="text-white text-lg tracking-[0.15em] serif">{cat.name}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 7. Brand Story */}
      <section id="about" className="max-w-[1400px] mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="aspect-[4/3] bg-[#f0ede6] overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=1200&q=80" 
              alt="Velmora atelier"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="max-w-lg">
            <span className="text-xs tracking-[0.15em] uppercase text-[#8a8178]">Since 2019</span>
            <h2 className="serif text-5xl mt-3 mb-6">Our Story</h2>
            <div className="space-y-4 text-[#6b635e] text-[15px] leading-relaxed">
              <p>Velmora was born from a simple belief: that beautiful jewelry should feel personal, not precious.</p>
              <p>We design demi-fine pieces that honor the quiet rituals of getting dressed—small moments of beauty that belong to you alone.</p>
            </div>
            <Link to="/shop" className="inline-block mt-8 text-sm tracking-[0.08em] underline underline-offset-4">
              Explore the Collection →
            </Link>
          </div>
        </div>
      </section>

      {/* 8. Testimonials */}
      <section className="bg-[#f0ede6] py-16">
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs tracking-[0.15em] uppercase text-[#8a8178]">In Their Words</span>
            <h2 className="serif text-4xl mt-2">What Our Clients Say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white p-8">
                <div className="flex gap-0.5 mb-5 text-[#c5a46e]">
                  {[...Array(5)].map((_, idx) => <Star key={idx} size={16} fill="currentColor" />)}
                </div>
                <p className="text-[#6b635e] italic leading-relaxed">"{t.text}"</p>
                <p className="mt-6 text-sm tracking-[0.06em]">{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Newsletter */}
      <section className="max-w-[700px] mx-auto px-6 py-20 text-center">
        <div className="bg-[#2c2522] text-white px-8 py-14">
          <span className="text-[#c5a46e] text-xs tracking-[0.15em] uppercase">Stay Close</span>
          <h3 className="serif text-4xl mt-3 mb-4">Join for 10% off your first order</h3>
          <p className="text-white/70 text-sm mb-8">Receive seasonal stories and early access to new collections.</p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-1 px-5 py-3.5 bg-white/10 border border-white/20 text-sm placeholder:text-white/50 focus:outline-none focus:border-white/40"
            />
            <button type="submit" className="btn-primary whitespace-nowrap">Subscribe</button>
          </form>
        </div>
      </section>

      {/* 10. Footer */}
      <footer className="border-t border-[#e5e0d8] bg-white pt-14 pb-10">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-y-12">
            <div>
              <div className="serif text-2xl tracking-[0.2em]">VELMORA</div>
              <p className="text-xs text-[#8a8178] mt-3 tracking-wide">Fine Jewelry</p>
            </div>
            
            <div>
              <div className="text-xs tracking-[0.12em] uppercase mb-4 text-[#8a8178]">Shop</div>
              <div className="space-y-2 text-sm text-[#6b635e]">
                <Link to="/shop" className="block hover:text-[#2c2522]">All Jewelry</Link>
                <Link to="/shop?category=Earrings" className="block hover:text-[#2c2522]">Earrings</Link>
                <Link to="/shop?category=Necklaces" className="block hover:text-[#2c2522]">Necklaces</Link>
                <Link to="/shop?category=Huggies" className="block hover:text-[#2c2522]">Huggies</Link>
              </div>
            </div>

            <div>
              <div className="text-xs tracking-[0.12em] uppercase mb-4 text-[#8a8178]">Help</div>
              <div className="space-y-2 text-sm text-[#6b635e]">
                <a href="#" className="block hover:text-[#2c2522]">Shipping</a>
                <a href="#" className="block hover:text-[#2c2522]">Returns</a>
                <a href="#" className="block hover:text-[#2c2522]">Care Guide</a>
                <a href="#" className="block hover:text-[#2c2522]">Contact</a>
              </div>
            </div>

            <div>
              <div className="text-xs tracking-[0.12em] uppercase mb-4 text-[#8a8178]">Company</div>
              <div className="space-y-2 text-sm text-[#6b635e]">
                <a href="#about" className="block hover:text-[#2c2522]">Our Story</a>
                <a href="#journal" className="block hover:text-[#2c2522]">Journal</a>
                <a href="#" className="block hover:text-[#2c2522]">Sustainability</a>
              </div>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-[#e5e0d8] flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#8a8178]">
            <div>© {new Date().getFullYear()} Velmora. All rights reserved.</div>
            <div className="flex gap-6">
              <span>Instagram</span>
              <span>Pinterest</span>
            </div>
            <div>Visa · Mastercard · Amex · Apple Pay</div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
