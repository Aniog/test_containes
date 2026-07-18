import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

const Home = () => {
  const bestsellers = products.slice(0, 5);
  
  const ugcItems = [
    { id: 1, caption: "My everyday staple", image: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=400&q=80" },
    { id: 2, caption: "Perfect for date night", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&q=80" },
    { id: 3, caption: "Gifted to myself", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80" },
    { id: 4, caption: "Obsessed with these", image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&q=80" },
    { id: 5, caption: "Timeless elegance", image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400&q=80" },
  ];

  const testimonials = [
    { name: "Elena M.", text: "The quality is exceptional. These pieces feel like heirlooms.", rating: 5 },
    { name: "Sophia R.", text: "Beautiful packaging and even more beautiful jewelry. My go-to for gifts.", rating: 5 },
    { name: "Isabella T.", text: "Finally found jewelry that doesn't irritate my sensitive skin.", rating: 5 },
  ];

  return (
    <div>
      {/* 1. Sticky Nav - handled in Navbar component */}

      {/* 2. Full-bleed Hero */}
      <section className="relative h-[100dvh] min-h-[700px] flex items-center justify-center pt-20">
        <div className="absolute inset-0 bg-[#2C2823]">
          <img 
            src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=2000&q=90" 
            alt="Velmora Fine Jewelry"
            className="w-full h-full object-cover opacity-75"
          />
        </div>
        <div className="relative z-10 text-center px-6 max-w-3xl">
          <h1 className="heading-serif text-white text-6xl md:text-7xl tracking-[-0.02em] mb-6">
            Crafted to be Treasured
          </h1>
          <p className="text-white/80 text-lg mb-10 tracking-[0.02em]">
            Demi-fine gold jewelry, made with intention.
          </p>
          <Link to="/shop" className="btn-gold inline-block">
            Shop the Collection
          </Link>
        </div>
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
          <div className="w-px h-12 bg-white/40" />
        </div>
      </section>

      {/* 3. Trust Bar */}
      <div className="trust-bar py-5 border-b border-[#E5DFD3] bg-white">
        <div className="max-w-[1400px] mx-auto px-6 flex flex-wrap justify-center gap-x-10 gap-y-2 text-center">
          <span>Free Worldwide Shipping</span>
          <span>30-Day Returns</span>
          <span>18K Gold Plated</span>
          <span>Hypoallergenic</span>
        </div>
      </div>

      {/* 4. Bestsellers */}
      <section className="max-w-[1400px] mx-auto px-6 pt-20 pb-16">
        <div className="flex items-end justify-between mb-10">
          <div>
            <span className="uppercase tracking-[0.2em] text-xs text-[#B8976E]">Signature Pieces</span>
            <h2 className="heading-serif text-4xl mt-2">Bestsellers</h2>
          </div>
          <Link to="/shop" className="hidden md:block text-sm tracking-[0.08em] uppercase hover:text-[#B8976E] transition-colors">
            View All →
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {bestsellers.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* 5. UGC Reel Row */}
      <section className="bg-[#2C2823] py-16 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 mb-8">
          <span className="uppercase tracking-[0.2em] text-xs text-[#B8976E]">As Seen On You</span>
          <h3 className="heading-serif text-white text-3xl mt-2">Moments in Gold</h3>
        </div>
        <div className="flex gap-3 overflow-x-auto pb-4 pl-6 scrollbar-hide">
          {ugcItems.map(item => (
            <div key={item.id} className="ugc-card">
              <img src={item.image} alt={item.caption} />
              <div className="ugc-caption">{item.caption}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Shop by Category */}
      <section id="collections" className="max-w-[1400px] mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <span className="uppercase tracking-[0.2em] text-xs text-[#B8976E]">Discover</span>
          <h2 className="heading-serif text-4xl mt-2">Shop by Category</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { label: "Earrings", href: "/shop?category=Earrings", img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80" },
            { label: "Necklaces", href: "/shop?category=Necklaces", img: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80" },
            { label: "Huggies", href: "/shop?category=Huggies", img: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&q=80" },
          ].map((cat, idx) => (
            <Link key={idx} to={cat.href} className="category-tile group">
              <img src={cat.img} alt={cat.label} />
              <div className="category-overlay">
                <span className="category-label">{cat.label}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 7. Brand Story */}
      <section id="story" className="bg-white">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-2">
          <div className="aspect-[4/3] md:aspect-auto bg-[#F5F1EA]">
            <img 
              src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=1200&q=80" 
              alt="Our atelier"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex items-center px-8 md:px-16 py-16 md:py-0">
            <div className="max-w-md">
              <span className="uppercase tracking-[0.2em] text-xs text-[#B8976E]">Since 2019</span>
              <h2 className="heading-serif text-4xl mt-4 mb-6">Our Story</h2>
              <p className="text-[#6B665F] leading-relaxed mb-8">
                Velmora was born from a desire to create jewelry that feels both precious and wearable. 
                Each piece is thoughtfully designed in our studio and crafted with the finest materials, 
                meant to be cherished for years to come.
              </p>
              <a href="#journal" className="text-sm tracking-[0.08em] uppercase border-b border-[#2C2823] pb-0.5 hover:text-[#B8976E] hover:border-[#B8976E] transition-colors">
                Read more about our craft →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Testimonials */}
      <section className="max-w-[1400px] mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <span className="uppercase tracking-[0.2em] text-xs text-[#B8976E]">In Their Words</span>
          <h2 className="heading-serif text-4xl mt-2">What Our Clients Say</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="text-center px-4">
              <div className="flex justify-center gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={16} className="fill-[#B8976E] text-[#B8976E]" />
                ))}
              </div>
              <p className="text-[#6B665F] italic mb-4">"{t.text}"</p>
              <p className="text-sm tracking-[0.05em]">{t.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 9. Newsletter */}
      <section className="bg-[#2C2823] py-16">
        <div className="max-w-md mx-auto px-6 text-center">
          <span className="uppercase tracking-[0.2em] text-xs text-[#B8976E]">Stay Close</span>
          <h3 className="heading-serif text-white text-3xl mt-3 mb-3">Join for 10% off your first order</h3>
          <p className="text-white/60 text-sm mb-8">Receive early access to new collections and stories from our studio.</p>
          <form className="flex flex-col gap-4" onSubmit={(e) => { e.preventDefault(); alert('Thank you for subscribing!'); }}>
            <input 
              type="email" 
              placeholder="Your email address" 
              className="newsletter-input text-white placeholder:text-white/40 border-white/30"
              required 
            />
            <button type="submit" className="btn-gold">Subscribe</button>
          </form>
        </div>
      </section>

      {/* 10. Footer */}
      <footer id="journal" className="bg-[#F8F5F1] border-t border-[#E5DFD3] pt-16 pb-10">
        <div className="max-w-[1400px] mx-auto px-6 grid md:grid-cols-4 gap-y-12 text-sm">
          <div>
            <div className="heading-serif text-xl tracking-[0.2em] mb-6">VELMORA</div>
            <p className="text-[#6B665F] text-xs tracking-[0.05em]">Fine jewelry for the modern woman.</p>
          </div>
          
          <div>
            <div className="uppercase tracking-[0.15em] text-xs mb-4 text-[#B8976E]">Shop</div>
            <div className="space-y-2 text-[#6B665F]">
              <Link to="/shop" className="block hover:text-[#2C2823]">All Jewelry</Link>
              <Link to="/shop?category=Earrings" className="block hover:text-[#2C2823]">Earrings</Link>
              <Link to="/shop?category=Necklaces" className="block hover:text-[#2C2823]">Necklaces</Link>
              <Link to="/shop?category=Huggies" className="block hover:text-[#2C2823]">Huggies</Link>
            </div>
          </div>

          <div>
            <div className="uppercase tracking-[0.15em] text-xs mb-4 text-[#B8976E]">Help</div>
            <div className="space-y-2 text-[#6B665F]">
              <a href="#" className="block hover:text-[#2C2823]">Shipping</a>
              <a href="#" className="block hover:text-[#2C2823]">Returns</a>
              <a href="#" className="block hover:text-[#2C2823]">Care Guide</a>
              <a href="#" className="block hover:text-[#2C2823]">Contact</a>
            </div>
          </div>

          <div>
            <div className="uppercase tracking-[0.15em] text-xs mb-4 text-[#B8976E]">Company</div>
            <div className="space-y-2 text-[#6B665F]">
              <a href="#story" className="block hover:text-[#2C2823]">Our Story</a>
              <a href="#" className="block hover:text-[#2C2823]">Journal</a>
              <a href="#" className="block hover:text-[#2C2823]">Sustainability</a>
              <a href="#" className="block hover:text-[#2C2823]">Stockists</a>
            </div>
          </div>
        </div>

        <div className="max-w-[1400px] mx-auto px-6 mt-16 pt-8 border-t border-[#E5DFD3] flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#A39B8F]">
          <div>© {new Date().getFullYear()} Velmora. All rights reserved.</div>
          <div className="flex gap-6">
            <span>Instagram</span>
            <span>Pinterest</span>
            <span>Visa · Mastercard · Amex</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
