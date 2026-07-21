import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import ProductCard from '../components/ui/ProductCard';

export default function Home() {
  const bestsellers = products.slice(0, 5);
  
  const ugcItems = [
    { id: 1, caption: "Morning light", img: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600&q=80" },
    { id: 2, caption: "Golden hour", img: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=600&q=80" },
    { id: 3, caption: "Everyday elegance", img: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&q=80" },
    { id: 4, caption: "Soft details", img: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&q=80" },
    { id: 5, caption: "Timeless", img: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&q=80" },
  ];

  const categories = [
    { name: "Earrings", slug: "earrings", img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=85" },
    { name: "Necklaces", slug: "necklaces", img: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=85" },
    { name: "Huggies", slug: "huggies", img: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=85" },
  ];

  const testimonials = [
    { name: "Elena M.", text: "The quality is exceptional. I wear my huggies every day and they still look brand new." },
    { name: "Sofia R.", text: "Bought the Royal Heirloom Set as a gift. The packaging alone felt so special." },
    { name: "Aisha K.", text: "Finally found jewelry that doesn't irritate my skin. The gold tone is beautiful." },
  ];

  return (
    <div className="pt-20">
      {/* 1. Hero */}
      <section className="relative h-[100dvh] min-h-[620px] flex items-center justify-center bg-[var(--velmora-bg-alt)] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=2000&q=90" 
            alt="Velmora jewelry on model"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/30" />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-3xl">
          <h1 className="serif text-5xl md:text-6xl text-white tracking-[-0.02em] mb-4">
            Crafted to be Treasured
          </h1>
          <p className="text-white/90 text-lg md:text-xl mb-8 max-w-md mx-auto">
            Demi-fine gold jewelry for the woman who values quiet luxury.
          </p>
          <Link to="/shop" className="btn btn-primary inline-block">
            Shop the Collection
          </Link>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 text-xs tracking-[0.2em] uppercase">
          Scroll to explore
        </div>
      </section>

      {/* 2. Trust Bar */}
      <div className="border-b border-[var(--velmora-border)] py-4">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-xs tracking-[0.1em] uppercase text-[var(--velmora-text-muted)] text-center">
            <span>Free Worldwide Shipping</span>
            <span className="hidden sm:inline">·</span>
            <span>30-Day Returns</span>
            <span className="hidden sm:inline">·</span>
            <span>18K Gold Plated</span>
            <span className="hidden sm:inline">·</span>
            <span>Hypoallergenic</span>
          </div>
        </div>
      </div>

      {/* 3. Bestsellers */}
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-12">
        <div className="flex items-end justify-between mb-8">
          <div>
            <div className="text-xs tracking-[0.15em] uppercase text-[var(--velmora-gold)] mb-1">Signature Pieces</div>
            <h2 className="serif text-3xl">Bestsellers</h2>
          </div>
          <Link to="/shop" className="text-sm tracking-[0.05em] hover:text-[var(--velmora-gold-dark)] hidden sm:block">
            View All →
          </Link>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="text-center mt-8 sm:hidden">
          <Link to="/shop" className="text-sm tracking-[0.05em]">View All →</Link>
        </div>
      </section>

      {/* 4. UGC Reel Row */}
      <section className="bg-[var(--velmora-bg-alt)] py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <div className="text-xs tracking-[0.15em] uppercase text-[var(--velmora-gold)] mb-1">In the Wild</div>
              <h3 className="serif text-2xl">As Seen on You</h3>
            </div>
            <a href="#instagram" className="text-sm tracking-[0.05em] hidden sm:block">@velmora</a>
          </div>
          
          <div className="flex gap-3 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
            {ugcItems.map((item) => (
              <div key={item.id} className="ugc-card snap-start rounded-sm overflow-hidden">
                <img src={item.img} alt={item.caption} />
                <div className="ugc-overlay">
                  <p className="ugc-caption">{item.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Shop by Category */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-10">
          <div className="text-xs tracking-[0.15em] uppercase text-[var(--velmora-gold)] mb-1">Discover</div>
          <h2 className="serif text-3xl">Shop by Category</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {categories.map((cat) => (
            <Link 
              key={cat.slug} 
              to={`/shop?category=${cat.slug}`}
              className="category-tile group rounded-sm overflow-hidden"
            >
              <img src={cat.img} alt={cat.name} className="w-full h-full object-cover" />
              <div className="category-label">
                <span>{cat.name}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 6. Brand Story */}
      <section className="border-t border-[var(--velmora-border)]">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8 md:gap-16 py-16 items-center">
          <div className="aspect-[16/10] bg-[var(--velmora-bg-alt)] rounded-sm overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=1200&q=85" 
              alt="Velmora atelier" 
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <div className="text-xs tracking-[0.15em] uppercase text-[var(--velmora-gold)] mb-3">Since 2019</div>
            <h2 className="serif text-4xl mb-6">Our Story</h2>
            <div className="text-[var(--velmora-text-muted)] leading-relaxed space-y-4 text-[15px]">
              <p>Velmora was born from a desire to create jewelry that feels personal, not performative. We believe the most meaningful pieces are the ones you reach for every day.</p>
              <p>Each piece is designed in our studio and crafted with care using responsibly sourced materials. We skip the middlemen so we can offer true demi-fine quality at accessible prices.</p>
            </div>
            <Link to="/about" className="btn btn-outline mt-8 inline-block">Read More</Link>
          </div>
        </div>
      </section>

      {/* 7. Testimonials */}
      <section className="bg-[var(--velmora-bg-alt)] py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-10">
            <div className="text-xs tracking-[0.15em] uppercase text-[var(--velmora-gold)] mb-1">Kind Words</div>
            <h2 className="serif text-3xl">From Our Community</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="testimonial">
                <div className="flex text-[var(--velmora-gold)] mb-3">
                  {[...Array(5)].map((_, i) => <span key={i}>★</span>)}
                </div>
                <p className="text-[15px] leading-relaxed mb-4">"{t.text}"</p>
                <p className="text-sm text-[var(--velmora-text-muted)]">— {t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Newsletter */}
      <section className="newsletter py-16">
        <div className="max-w-md mx-auto px-6 text-center">
          <h3 className="serif text-2xl mb-3">Join for 10% off your first order</h3>
          <p className="text-sm text-[var(--velmora-gold-light)] mb-6">Be the first to know about new arrivals and private events.</p>
          
          <form className="flex gap-2" onSubmit={(e) => { e.preventDefault(); alert('Thank you for subscribing!'); }}>
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-1"
              required 
            />
            <button type="submit" className="btn btn-gold whitespace-nowrap">Subscribe</button>
          </form>
          <p className="text-[10px] text-[var(--velmora-gold-light)] mt-3">We respect your inbox. Unsubscribe anytime.</p>
        </div>
      </section>
    </div>
  );
}
