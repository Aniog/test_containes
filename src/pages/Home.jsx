import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

const Home = () => {
  const bestsellers = products.slice(0, 5);
  
  const ugcItems = [
    { id: 1, caption: "Morning light", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&q=80" },
    { id: 2, caption: "Golden hour", img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600&q=80" },
    { id: 3, caption: "Effortless", img: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=600&q=80" },
    { id: 4, caption: "Everyday luxury", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&q=80" },
    { id: 5, caption: "Soft glow", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&q=80" },
  ];

  const testimonials = [
    { name: "Elena M.", text: "The quality is exceptional. I've worn my huggies every day for six months and they still look brand new." },
    { name: "Sofia R.", text: "Bought the Royal Heirloom Set as a gift for my sister. She cried. Worth every penny." },
    { name: "Aisha K.", text: "Finally found jewelry that doesn't irritate my skin. The gold tone is so warm and beautiful." },
  ];

  return (
    <div className="pt-20">
      {/* 1. Hero */}
      <section className="relative h-[92vh] min-h-[620px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[#2C2824]">
          <img 
            src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=2000&q=85" 
            alt="Velmora Fine Jewelry"
            className="absolute inset-0 w-full h-full object-cover opacity-75"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="heading-serif text-white text-5xl md:text-6xl lg:text-7xl tracking-[-0.02em] mb-6">
            Crafted to be Treasured
          </h1>
          <p className="text-white/90 text-lg md:text-xl mb-10 max-w-md mx-auto">
            Demi-fine gold jewelry for the woman who values quiet luxury.
          </p>
          <Link to="/shop" className="btn btn-primary inline-block">
            Shop the Collection
          </Link>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <div className="w-px h-12 bg-white/40" />
        </div>
      </section>

      {/* 2. Trust Bar */}
      <div className="trust-bar border-b border-[#E5DFD6] py-4">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-x-8 gap-y-2 text-center">
          <span>Free Worldwide Shipping</span>
          <span className="hidden sm:inline text-[#E5DFD6]">·</span>
          <span>30-Day Returns</span>
          <span className="hidden sm:inline text-[#E5DFD6]">·</span>
          <span>18K Gold Plated</span>
          <span className="hidden sm:inline text-[#E5DFD6]">·</span>
          <span>Hypoallergenic</span>
        </div>
      </div>

      {/* 3. Bestsellers */}
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-12">
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="uppercase tracking-[0.12em] text-xs text-[#6B665F] mb-1">Signature Pieces</p>
            <h2 className="heading-serif text-3xl">Bestsellers</h2>
          </div>
          <Link to="/shop" className="text-sm tracking-widest hover:text-[#C5A46E] hidden sm:block">
            VIEW ALL →
          </Link>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-10">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* 4. UGC Reel */}
      <section className="bg-[#F5F2ED] py-14">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="heading-serif text-2xl">As Seen On You</h3>
            <span className="text-xs tracking-[0.1em] text-[#6B665F] hidden sm:block">INSTAGRAM @VELMORA</span>
          </div>
          
          <div className="ugc-scroll">
            {ugcItems.map((item) => (
              <div key={item.id} className="ugc-card">
                <img src={item.img} alt={item.caption} />
                <div className="ugc-overlay">
                  <p className="text-xs tracking-[0.08em] font-light">{item.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Shop by Category */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="heading-serif text-3xl mb-8 text-center">Shop by Category</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { name: "Earrings", slug: "Earrings", img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=900&q=80" },
            { name: "Necklaces", slug: "Necklaces", img: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=900&q=80" },
            { name: "Huggies", slug: "Huggies", img: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=900&q=80" },
          ].map((cat) => (
            <Link 
              key={cat.slug} 
              to={`/shop?category=${cat.slug}`}
              className="category-tile group"
            >
              <img src={cat.img} alt={cat.name} className="w-full h-full object-cover" />
              <div className="label">
                <span>{cat.name}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 6. Brand Story */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="aspect-[16/11] bg-[#F5F2ED] overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=1200&q=80" 
              alt="Velmora atelier" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="pr-4">
            <p className="uppercase tracking-[0.12em] text-xs text-[#6B665F] mb-3">EST. 2019</p>
            <h2 className="heading-serif text-4xl mb-6">Our Story</h2>
            <div className="space-y-4 text-[#6B665F] leading-relaxed">
              <p>
                Velmora was born from a desire to create jewelry that feels like an extension of the self — 
                not a statement, but a quiet affirmation.
              </p>
              <p>
                Each piece is hand-finished in small batches using 18K gold plating over hypoallergenic metals. 
                We believe luxury should be worn daily, not saved for special occasions.
              </p>
            </div>
            <Link to="/about" className="inline-block mt-6 text-sm tracking-widest hover:text-[#C5A46E]">
              READ MORE →
            </Link>
          </div>
        </div>
      </section>

      {/* 7. Testimonials */}
      <section className="bg-[#FAF7F2] py-16 border-y border-[#E5DFD6]">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="heading-serif text-3xl text-center mb-12">Words from our community</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, idx) => (
                    <Star key={idx} size={15} className="text-[#C5A46E] fill-[#C5A46E]" />
                  ))}
                </div>
                <p className="text-[#6B665F] italic leading-relaxed mb-4">"{t.text}"</p>
                <p className="text-sm tracking-widest">{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Newsletter */}
      <section className="newsletter py-16">
        <div className="max-w-md mx-auto px-6 text-center">
          <h3 className="heading-serif text-2xl mb-3 text-white">Join for 10% off your first order</h3>
          <p className="text-white/70 text-sm mb-6">Be the first to know about new arrivals and private releases.</p>
          
          <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-1"
              required 
            />
            <button type="submit" className="btn btn-primary whitespace-nowrap">
              Subscribe
            </button>
          </form>
          <p className="text-[10px] text-white/50 mt-3 tracking-widest">WE RESPECT YOUR INBOX</p>
        </div>
      </section>

      {/* 9. Footer */}
      <footer className="footer pt-14 pb-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 pb-10 border-b border-[#E5DFD6]">
            <div>
              <div className="heading-serif text-xl tracking-[0.12em] mb-4">VELMORA</div>
              <p className="text-xs leading-relaxed pr-4">Demi-fine jewelry for the modern woman.</p>
            </div>
            
            <div>
              <div className="filter-label mb-3">Shop</div>
              <div className="space-y-1.5 text-sm">
                <Link to="/shop" className="block hover:text-[#C5A46E]">All Jewelry</Link>
                <Link to="/shop?category=Earrings" className="block hover:text-[#C5A46E]">Earrings</Link>
                <Link to="/shop?category=Necklaces" className="block hover:text-[#C5A46E]">Necklaces</Link>
                <Link to="/shop?category=Huggies" className="block hover:text-[#C5A46E]">Huggies</Link>
              </div>
            </div>
            
            <div>
              <div className="filter-label mb-3">Help</div>
              <div className="space-y-1.5 text-sm">
                <a href="#" className="block hover:text-[#C5A46E]">Shipping</a>
                <a href="#" className="block hover:text-[#C5A46E]">Returns</a>
                <a href="#" className="block hover:text-[#C5A46E]">Care Guide</a>
                <a href="#" className="block hover:text-[#C5A46E]">Contact</a>
              </div>
            </div>
            
            <div>
              <div className="filter-label mb-3">Company</div>
              <div className="space-y-1.5 text-sm">
                <Link to="/about" className="block hover:text-[#C5A46E]">Our Story</Link>
                <Link to="/journal" className="block hover:text-[#C5A46E]">Journal</Link>
                <a href="#" className="block hover:text-[#C5A46E]">Sustainability</a>
                <a href="#" className="block hover:text-[#C5A46E]">Wholesale</a>
              </div>
            </div>
          </div>
          
          <div className="pt-8 flex flex-col md:flex-row md:items-center justify-between gap-4 text-xs">
            <div className="flex gap-4">
              <a href="#" aria-label="Instagram">IG</a>
              <a href="#" aria-label="Pinterest">PT</a>
              <a href="#" aria-label="TikTok">TT</a>
            </div>
            <div className="flex gap-4 text-[#9A948C]">
              <span>© {new Date().getFullYear()} Velmora</span>
              <span>·</span>
              <a href="#">Privacy</a>
              <a href="#">Terms</a>
            </div>
            <div className="flex gap-2 text-[#9A948C]">
              <span>VISA</span>
              <span>MC</span>
              <span>AMEX</span>
              <span>PP</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
