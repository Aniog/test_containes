import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

const Home = () => {
  const bestsellers = products.slice(0, 5);
  
  const ugcItems = [
    { id: 1, caption: "My everyday staple", img: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400&q=80" },
    { id: 2, caption: "Gifted to my sister", img: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&q=80" },
    { id: 3, caption: "Obsessed with these", img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80" },
    { id: 4, caption: "Perfect for date night", img: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&q=80" },
    { id: 5, caption: "My new favorite", img: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400&q=80" },
  ];

  const testimonials = [
    { name: "Elena M.", text: "The quality is exceptional. I've worn my huggies every day for six months and they still look brand new." },
    { name: "Sofia R.", text: "Bought the Royal Heirloom Set as a gift. The packaging alone made it feel so special." },
    { name: "Maya K.", text: "Finally found jewelry that doesn't irritate my sensitive skin. The gold tone is beautiful." },
  ];

  return (
    <div>
      {/* 1. Sticky Nav - handled in Navbar component */}

      {/* 2. Full-bleed Hero */}
      <section className="relative h-[100dvh] min-h-[700px] flex items-center justify-center bg-[#2C2825] overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=2000&q=80')] bg-cover bg-center opacity-90" />
        <div className="relative z-10 text-center px-6 max-w-3xl">
          <h1 className="serif text-6xl md:text-7xl text-white tracking-[-0.02em] mb-6">
            Crafted to be Treasured
          </h1>
          <p className="text-white/80 text-lg mb-10 max-w-md mx-auto">
            Demi-fine jewelry for the modern woman who values quiet luxury.
          </p>
          <Link to="/shop" className="btn-primary inline-block">
            Shop the Collection
          </Link>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 text-xs tracking-[0.2em] uppercase">
          Scroll to explore
        </div>
      </section>

      {/* 3. Trust Bar */}
      <div className="trust-bar py-4 border-b border-[#D4CFC6] text-center tracking-[0.15em]">
        Free Worldwide Shipping · 30-Day Returns · 18K Gold Plated · Hypoallergenic
      </div>

      {/* 4. Bestsellers */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 py-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <div className="uppercase tracking-[0.15em] text-xs text-[#6B665F] mb-2">Signature Pieces</div>
            <h2 className="serif text-4xl">Bestsellers</h2>
          </div>
          <Link to="/shop" className="text-sm tracking-[0.08em] underline underline-offset-4">View All</Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* 5. UGC Reel Row */}
      <section className="bg-[#2C2825] py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-8 mb-8">
          <div className="uppercase tracking-[0.15em] text-xs text-[#B89778] mb-2">As Seen On You</div>
          <h2 className="serif text-4xl text-white">Real Moments</h2>
        </div>
        <div className="flex gap-3 overflow-x-auto pb-4 pl-6 md:pl-8 scrollbar-hide">
          {ugcItems.map(item => (
            <div key={item.id} className="ugc-card w-[170px] md:w-[190px]">
              <img src={item.img} alt={item.caption} className="w-full h-full object-cover" />
              <div className="caption">{item.caption}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Shop by Category */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 py-20">
        <div className="uppercase tracking-[0.15em] text-xs text-[#6B665F] mb-2 text-center">Discover</div>
        <h2 className="serif text-4xl text-center mb-12">Shop by Category</h2>
        
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { name: "Earrings", link: "/shop?category=Earrings", img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80" },
            { name: "Necklaces", link: "/shop?category=Necklaces", img: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80" },
            { name: "Huggies", link: "/shop?category=Huggies", img: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80" },
          ].map(cat => (
            <Link key={cat.name} to={cat.link} className="category-tile group block">
              <img src={cat.img} alt={cat.name} className="w-full h-full object-cover" />
              <div className="overlay" />
              <div className="label group-hover:opacity-100">{cat.name}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* 7. Brand Story */}
      <section id="about" className="max-w-7xl mx-auto px-6 md:px-8 py-20 border-t border-[#D4CFC6]">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="aspect-[4/3] bg-[#EDE9E3]">
            <img 
              src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=1200&q=80" 
              alt="Velmora atelier" 
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <div className="uppercase tracking-[0.15em] text-xs text-[#6B665F] mb-3">Since 2019</div>
            <h2 className="serif text-5xl mb-8">Our Story</h2>
            <div className="space-y-5 text-[#4A4640] leading-relaxed">
              <p>Velmora was born from a simple belief: that beautiful jewelry should be accessible without compromise.</p>
              <p>Each piece is thoughtfully designed in our New York studio and crafted with the finest materials—18K gold plating, ethically sourced crystals, and hypoallergenic findings.</p>
            </div>
            <a href="#journal" className="inline-block mt-8 text-sm tracking-[0.08em] underline underline-offset-4">Read more about our process →</a>
          </div>
        </div>
      </section>

      {/* 8. Testimonials */}
      <section className="bg-[#F8F5F1] py-20 border-y border-[#D4CFC6]">
        <div className="max-w-5xl mx-auto px-6 md:px-8">
          <div className="uppercase tracking-[0.15em] text-xs text-[#6B665F] mb-2 text-center">Voices</div>
          <h2 className="serif text-4xl text-center mb-14">What Our Community Says</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="space-y-4">
                <div className="flex gap-0.5 text-[#B89778]">
                  {[...Array(5)].map((_, j) => <Star key={j} size={16} fill="currentColor" />)}
                </div>
                <p className="testimonial text-[#4A4640]">"{t.text}"</p>
                <div className="text-sm tracking-[0.05em] text-[#6B665F]">— {t.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Newsletter */}
      <section className="newsletter py-20 px-6 md:px-8">
        <div className="max-w-md mx-auto text-center">
          <div className="uppercase tracking-[0.15em] text-xs text-[#B89778] mb-3">Stay Close</div>
          <h2 className="serif text-4xl text-white mb-4">Join for 10% off your first order</h2>
          <p className="text-white/70 mb-8">Be the first to know about new arrivals and exclusive offers.</p>
          
          <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Your email address" 
              className="input flex-1 bg-white/95 border-0 text-[#2C2825]"
              required 
            />
            <button type="submit" className="btn-primary whitespace-nowrap">Subscribe</button>
          </form>
          <p className="text-[10px] text-white/50 mt-4 tracking-[0.05em]">We respect your inbox. Unsubscribe anytime.</p>
        </div>
      </section>

      {/* 10. Footer - handled in Footer component */}
    </div>
  );
};

export default Home;