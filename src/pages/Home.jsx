import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

const Home = () => {
  const bestsellers = products.slice(0, 5);
  
  const ugcItems = [
    { id: 1, caption: "Morning light", img: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&q=80" },
    { id: 2, caption: "Golden hour", img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&q=80" },
    { id: 3, caption: "Effortless", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80" },
    { id: 4, caption: "Timeless", img: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&q=80" },
    { id: 5, caption: "Everyday", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" },
  ];

  const testimonials = [
    { name: "Elena M.", text: "The quality is exceptional. My huggies have become my daily signature piece." },
    { name: "Sofia R.", text: "Beautiful packaging and even more beautiful jewelry. A gift I'll treasure." },
    { name: "Isabella T.", text: "Finally found pieces that feel luxurious without the luxury price tag." },
  ];

  return (
    <div className="min-h-screen">
      {/* 2. Full-bleed Hero */}
      <section className="relative h-[100dvh] min-h-[700px] flex items-center justify-center bg-[#2C2823] overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=2000&q=80')] bg-cover bg-center opacity-90" />
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="heading-serif text-white text-6xl md:text-7xl tracking-[0.05em] mb-6">
            Crafted to be Treasured
          </h1>
          <p className="text-white/90 text-lg mb-10 tracking-wide">Demi-fine jewelry for the modern woman</p>
          <Link to="/shop" className="btn-gold inline-block">
            Shop the Collection
          </Link>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <div className="w-px h-12 bg-white/40" />
        </div>
      </section>

      {/* 3. Trust Bar */}
      <div className="trust-bar py-4 border-b border-[#E5E0D8] bg-white">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-x-8 gap-y-2 text-center">
          <span>Free Worldwide Shipping</span>
          <span className="hidden md:inline text-[#E5E0D8]">·</span>
          <span>30-Day Returns</span>
          <span className="hidden md:inline text-[#E5E0D8]">·</span>
          <span>18K Gold Plated</span>
          <span className="hidden md:inline text-[#E5E0D8]">·</span>
          <span>Hypoallergenic</span>
        </div>
      </div>

      {/* 4. Bestsellers */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <span className="text-xs tracking-[0.2em] uppercase text-[#8B7355]">Signature Pieces</span>
            <h2 className="heading-serif text-4xl mt-2">Bestsellers</h2>
          </div>
          <Link to="/shop" className="text-sm tracking-wider hover:text-[#8B7355] transition-colors hidden md:block">
            View All →
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* 5. UGC Reel Row */}
      <section className="bg-[#F8F5F1] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-8">
            <span className="text-xs tracking-[0.2em] uppercase text-[#8B7355]">As Seen On You</span>
            <h2 className="heading-serif text-4xl mt-2">Moments in Gold</h2>
          </div>
          <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide -mx-1 px-1">
            {ugcItems.map(item => (
              <div key={item.id} className="ugc-card rounded-sm">
                <img src={item.img} alt={item.caption} />
                <div className="ugc-caption">{item.caption}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Shop by Category */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <span className="text-xs tracking-[0.2em] uppercase text-[#8B7355]">Discover</span>
          <h2 className="heading-serif text-4xl mt-2">Shop by Category</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { label: 'Earrings', path: '/shop?category=Earrings', img: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80' },
            { label: 'Necklaces', path: '/shop?category=Necklaces', img: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80' },
            { label: 'Huggies', path: '/shop?category=Huggies', img: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80' },
          ].map(cat => (
            <Link key={cat.label} to={cat.path} className="category-tile group rounded-sm overflow-hidden">
              <img src={cat.img} alt={cat.label} />
              <div className="category-overlay">
                <span className="category-label">{cat.label}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 7. Brand Story */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="aspect-[4/3] bg-[#2C2823] rounded-sm overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=1000&q=80" 
              alt="Velmora atelier" 
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <span className="text-xs tracking-[0.2em] uppercase text-[#8B7355]">Since 2019</span>
            <h2 className="heading-serif text-5xl mt-3 mb-6">Our Story</h2>
            <div className="space-y-4 text-[#6B665F] leading-relaxed">
              <p>Velmora was born from a simple belief: that beautiful, well-crafted jewelry should be accessible without compromise.</p>
              <p>Each piece is thoughtfully designed in our studio and brought to life by artisans who share our commitment to quality and detail.</p>
            </div>
            <Link to="/about" className="btn-outline mt-8 inline-block">Learn More</Link>
          </div>
        </div>
      </section>

      {/* 8. Testimonials */}
      <section className="bg-white py-20 border-y border-[#E5E0D8]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs tracking-[0.2em] uppercase text-[#8B7355]">Voices</span>
            <h2 className="heading-serif text-4xl mt-2">From Our Community</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, idx) => (
                    <Star key={idx} size={14} className="fill-[#C5A46E] text-[#C5A46E]" />
                  ))}
                </div>
                <p className="text-[#6B665F] italic mb-4">"{t.text}"</p>
                <p className="text-sm tracking-wider">— {t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Newsletter */}
      <section className="newsletter py-20">
        <div className="max-w-xl mx-auto px-6 text-center">
          <h2 className="heading-serif text-4xl text-white mb-4">Join the Circle</h2>
          <p className="text-white/80 mb-8">Be the first to know about new arrivals, stories, and receive 10% off your first order.</p>
          <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-1 px-5 py-4 bg-white/10 border border-white/30 text-white placeholder:text-white/50 focus:outline-none focus:border-white/60"
            />
            <button type="submit" className="btn-gold whitespace-nowrap">Subscribe</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;