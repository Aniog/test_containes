import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

const Home = () => {
  // Use first 5 products as bestsellers
  const bestsellers = products.slice(0, 5);

  // UGC mock data - vertical reel-style images
  const ugcItems = [
    { id: 1, caption: "Morning light", img: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&q=80" },
    { id: 2, caption: "Golden hour", img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&q=80" },
    { id: 3, caption: "Everyday elegance", img: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&q=80" },
    { id: 4, caption: "Soft details", img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&q=80" },
    { id: 5, caption: "Timeless", img: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=400&q=80" },
  ];

  const testimonials = [
    { name: "Elena M.", text: "The quality is exceptional. I wear my huggies every day and they still look brand new.", rating: 5 },
    { name: "Sofia R.", text: "Bought the Flora necklace as a gift for my sister. She hasn't taken it off since.", rating: 5 },
    { name: "Aisha K.", text: "Beautiful packaging and the pieces feel so special. Worth every penny.", rating: 5 },
  ];

  return (
    <div className="pt-20">
      {/* 1. HERO */}
      <section className="relative h-[92vh] flex items-center justify-center bg-velmora-base overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#3a3632_0.8px,transparent_1px)] bg-[length:4px_4px] opacity-40" />
        
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1600&q=80')",
            filter: "brightness(0.85) saturate(1.1)"
          }}
        />
        
        <div className="relative z-10 text-center px-6 max-w-3xl hero-content">
          <h1 className="serif text-5xl md:text-6xl text-white tracking-[0.05em] mb-6">
            Crafted to be Treasured
          </h1>
          <p className="text-white/80 text-lg mb-10 max-w-md mx-auto">
            Demi-fine gold jewelry, made for the moments that matter.
          </p>
          <Link to="/shop" className="btn btn-gold inline-block">
            Shop the Collection
          </Link>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 text-xs tracking-[0.2em] uppercase">
          Scroll to explore
        </div>
      </section>

      {/* 2. TRUST BAR */}
      <div className="border-b border-velmora-border py-4">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center md:justify-between gap-x-8 gap-y-2 text-xs tracking-[0.15em] uppercase text-velmora-text-secondary text-center">
            <span>Free Worldwide Shipping</span>
            <span>30-Day Returns</span>
            <span>18K Gold Plated</span>
            <span>Hypoallergenic</span>
          </div>
        </div>
      </div>

      {/* 3. BESTSELLERS */}
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-12">
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="uppercase tracking-[0.2em] text-xs text-velmora-muted mb-1">Signature Pieces</p>
            <h2 className="serif text-3xl tracking-[0.05em]">Bestsellers</h2>
          </div>
          <Link to="/shop" className="hidden md:block text-sm uppercase tracking-[0.1em] hover:text-velmora-gold-dark">
            View All →
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* 4. UGC REEL ROW */}
      <section className="bg-velmora-surface py-12">
        <div className="max-w-7xl mx-auto px-6">
          <p className="uppercase tracking-[0.2em] text-xs text-velmora-muted mb-6">As Seen On You</p>
          
          <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory">
            {ugcItems.map((item) => (
              <div key={item.id} className="ugc-card snap-start">
                <img src={item.img} alt={item.caption} />
                <div className="ugc-caption">{item.caption}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SHOP BY CATEGORY */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <p className="uppercase tracking-[0.2em] text-xs text-velmora-muted mb-6">Discover</p>
        <h2 className="serif text-3xl tracking-[0.05em] mb-8">Shop by Category</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { label: "Earrings", category: "Earrings", img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80" },
            { label: "Necklaces", category: "Necklaces", img: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80" },
            { label: "Huggies", category: "Huggies", img: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=800&q=80" },
          ].map((cat) => (
            <Link 
              key={cat.label} 
              to={`/shop?category=${cat.category}`}
              className="category-tile aspect-[16/10] block"
            >
              <img src={cat.img} alt={cat.label} className="w-full h-full object-cover" />
              <div className="category-label">{cat.label}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* 6. BRAND STORY */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="aspect-[4/3] bg-velmora-surface overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=900&q=80" 
              alt="Velmora atelier" 
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="uppercase tracking-[0.2em] text-xs text-velmora-muted mb-3">Since 2019</p>
            <h2 className="serif text-4xl tracking-[0.03em] mb-6">Our Story</h2>
            <div className="space-y-4 text-velmora-text-secondary leading-relaxed">
              <p>
                Velmora was born from a simple belief: that beautiful jewelry should be worn, not saved for special occasions.
              </p>
              <p>
                We design demi-fine pieces that feel as good as they look — crafted from responsibly sourced materials, 
                finished by hand, and made to last.
              </p>
            </div>
            <Link to="/about" className="btn btn-outline mt-8 inline-block">
              Read More
            </Link>
          </div>
        </div>
      </section>

      {/* 7. TESTIMONIALS */}
      <section className="bg-velmora-surface py-16">
        <div className="max-w-5xl mx-auto px-6">
          <p className="uppercase tracking-[0.2em] text-xs text-velmora-muted mb-8 text-center">Kind Words</p>
          
          <div className="grid md:grid-cols-3 gap-4">
            {testimonials.map((t, i) => (
              <div key={i} className="testimonial">
                <div className="stars flex gap-0.5 mb-4">
                  {Array.from({ length: t.rating }).map((_, idx) => (
                    <Star key={idx} size={14} fill="currentColor" />
                  ))}
                </div>
                <p className="text-sm leading-relaxed mb-6">"{t.text}"</p>
                <p className="text-xs uppercase tracking-[0.1em] text-velmora-muted">— {t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. NEWSLETTER */}
      <section className="newsletter py-16">
        <div className="max-w-md mx-auto px-6 text-center">
          <h3 className="serif text-2xl tracking-[0.05em] mb-3">Join for 10% off your first order</h3>
          <p className="text-sm text-white/70 mb-6">Be the first to know about new arrivals and stories from the studio.</p>
          
          <form 
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thank you. You've been added to our list.");
              e.target.reset();
            }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <input 
              type="email" 
              placeholder="Your email address" 
              required
              className="flex-1 bg-transparent border border-white/30 px-4 py-3 text-sm placeholder:text-white/50 focus:outline-none focus:border-white"
            />
            <button type="submit" className="btn btn-gold whitespace-nowrap">
              Subscribe
            </button>
          </form>
          <p className="text-[10px] text-white/50 mt-3 tracking-wide">We respect your inbox. Unsubscribe anytime.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;