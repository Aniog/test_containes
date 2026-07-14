import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

const Home = () => {
  // Use first 5 products for bestsellers
  const bestsellers = products.slice(0, 5);

  // UGC mock data - vertical reel-style images
  const ugcItems = [
    { id: 1, caption: "Morning light", img: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=400&q=80" },
    { id: 2, caption: "Golden hour", img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&q=80" },
    { id: 3, caption: "Everyday elegance", img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&q=80" },
    { id: 4, caption: "Soft details", img: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=400&q=80" },
    { id: 5, caption: "Timeless", img: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=400&q=80" },
  ];

  const testimonials = [
    { name: "Elena M.", text: "The quality is exceptional. I wear my huggies every day and they still look brand new." },
    { name: "Sofia R.", text: "Bought the Royal Heirloom Set as a gift. The packaging alone made it feel so special." },
    { name: "Aisha K.", text: "Finally found jewelry that doesn't irritate my skin. The gold is so warm and beautiful." },
  ];

  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      {/* 1. Sticky Navigation is handled globally in Layout */}

      {/* 2. Full-bleed Hero */}
      <section className="relative h-[100dvh] min-h-[620px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[#2A2522]">
          <img
            src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=2000&q=85"
            alt="Velmora Fine Jewelry - Woman wearing elegant gold jewelry"
            className="absolute inset-0 w-full h-full object-cover opacity-85"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-3xl">
          <h1 className="text-white font-serif text-4xl md:text-6xl tracking-[-0.02em] mb-4">
            Crafted to be Treasured
          </h1>
          <p className="text-white/90 text-lg md:text-xl mb-8 font-light tracking-wide">
            Demi-fine gold jewelry for the modern woman
          </p>
          <Link to="/shop" className="btn btn-primary inline-block">
            Shop the Collection
          </Link>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 text-xs tracking-[3px]">
          SCROLL TO EXPLORE
        </div>
      </section>

      {/* 3. Trust Bar */}
      <div className="trust-bar border-b border-[#E5DDD3] py-4">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-x-8 gap-y-2 text-center">
          <span>Free Worldwide Shipping</span>
          <span className="hidden md:inline text-[#C5A46E]">·</span>
          <span>30-Day Returns</span>
          <span className="hidden md:inline text-[#C5A46E]">·</span>
          <span>18K Gold Plated</span>
          <span className="hidden md:inline text-[#C5A46E]">·</span>
          <span>Hypoallergenic</span>
        </div>
      </div>

      {/* 4. Bestsellers */}
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-12">
        <div className="flex items-end justify-between mb-8">
          <div>
            <div className="uppercase tracking-[0.2em] text-xs text-[#6B625B] mb-1">Curated for You</div>
            <h2 className="font-serif text-3xl">Bestsellers</h2>
          </div>
          <Link to="/shop" className="text-sm tracking-widest text-[#A68A5A] hover:text-[#C5A46E] hidden md:block">
            VIEW ALL →
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-5 gap-y-10">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-8 md:hidden">
          <Link to="/shop" className="text-sm tracking-widest text-[#A68A5A]">VIEW ALL →</Link>
        </div>
      </section>

      {/* 5. UGC Reel-style Row */}
      <section className="bg-[#F2EDE6] py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <div className="uppercase tracking-[0.2em] text-xs text-[#6B625B]">As Seen On</div>
              <h3 className="font-serif text-2xl">Real Moments</h3>
            </div>
          </div>
          
          <div className="flex gap-3 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
            {ugcItems.map((item) => (
              <div key={item.id} className="ugc-card snap-start rounded-sm overflow-hidden">
                <img src={item.img} alt={item.caption} />
                <div className="ugc-caption">{item.caption}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Shop by Category */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-10">
          <div className="uppercase tracking-[0.2em] text-xs text-[#6B625B] mb-1">Discover</div>
          <h2 className="font-serif text-3xl">Shop by Category</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { label: 'Earrings', slug: 'Earrings', img: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=900&q=80' },
            { label: 'Necklaces', slug: 'Necklaces', img: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=900&q=80' },
            { label: 'Huggies', slug: 'Huggies', img: 'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=900&q=80' },
          ].map((cat) => (
            <Link
              key={cat.slug}
              to={`/shop?category=${cat.slug}`}
              className="category-tile group rounded-sm overflow-hidden"
            >
              <img src={cat.img} alt={cat.label} />
              <div className="category-tile-label group-hover:bg-black/50">
                {cat.label}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 7. Brand Story Split */}
      <section className="max-w-7xl mx-auto px-6 pb-16">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="aspect-[4/3] bg-[#F2EDE6] overflow-hidden rounded-sm">
            <img
              src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=1200&q=80"
              alt="Velmora atelier — hands crafting delicate gold jewelry"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="py-4 md:py-8">
            <div className="uppercase tracking-[0.2em] text-xs text-[#6B625B] mb-3">Since 2018</div>
            <h2 className="font-serif text-3xl mb-6">Our Story</h2>
            <div className="text-[#6B625B] space-y-4 text-[15px] leading-relaxed max-w-prose">
              <p>
                Velmora was born from a simple belief: that beautiful jewelry should be accessible without compromise.
              </p>
              <p>
                We work with skilled artisans to create demi-fine pieces in 18K gold plate — each one designed to be worn daily, passed down, and loved for years.
              </p>
            </div>
            <Link to="/about" className="btn btn-outline mt-8 inline-block">
              Read More
            </Link>
          </div>
        </div>
      </section>

      {/* 8. Testimonials */}
      <section className="bg-[#F2EDE6] py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-10">
            <div className="uppercase tracking-[0.2em] text-xs text-[#6B625B] mb-1">Voices</div>
            <h2 className="font-serif text-3xl">What Our Customers Say</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {testimonials.map((t, idx) => (
              <div key={idx} className="testimonial">
                <div className="stars mb-4">★★★★★</div>
                <p className="text-[#2A2522] mb-6 leading-relaxed">"{t.text}"</p>
                <div className="text-sm text-[#6B625B]">— {t.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Newsletter */}
      <section className="newsletter py-16">
        <div className="max-w-md mx-auto px-6 text-center">
          <div className="font-serif text-2xl mb-3 tracking-tight">Join for 10% off your first order</div>
          <p className="text-white/70 text-sm mb-6">Be the first to know about new arrivals and stories from the atelier.</p>
          
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const email = e.target.email.value;
              if (email) {
                alert(`Thank you. We'll send your 10% code to ${email}`);
                e.target.reset();
              }
            }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <input
              type="email"
              name="email"
              placeholder="Your email address"
              className="input flex-1"
              required
            />
            <button type="submit" className="btn btn-primary whitespace-nowrap">
              Subscribe
            </button>
          </form>
          <p className="text-[10px] text-white/50 mt-3 tracking-wide">We respect your inbox. Unsubscribe anytime.</p>
        </div>
      </section>

      {/* 10. Footer is handled globally */}
    </div>
  );
};

export default Home;
