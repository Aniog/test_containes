import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

// UGC Reel data - simulating Instagram-style vertical content
const ugcItems = [
  { id: 1, caption: "My everyday staple", product: "Golden Sphere Huggies" },
  { id: 2, caption: "Perfect for date night", product: "Majestic Flora Nectar" },
  { id: 3, caption: "Gifted myself this beauty", product: "Amber Lace Earrings" },
  { id: 4, caption: "The only ear cuff I wear", product: "Vivid Aura Jewels" },
  { id: 5, caption: "My go-to gift for friends", product: "Royal Heirloom Set" },
];

// Testimonials
const testimonials = [
  { id: 1, name: "Elena M.", text: "The quality is exceptional. I've worn my huggies every day for six months and they still look brand new.", rating: 5 },
  { id: 2, name: "Sofia R.", text: "Bought the Flora necklace as a gift for my sister. She hasn't taken it off since. Beautiful packaging too.", rating: 5 },
  { id: 3, name: "Aisha K.", text: "Finally found jewelry that doesn't irritate my sensitive skin. The gold tone is so warm and elegant.", rating: 5 },
];

const Home = () => {
  // Use first 5 products for bestsellers
  const bestsellers = products;

  return (
    <div>
      {/* 1. HERO - Full Bleed */}
      <section className="relative h-[100dvh] min-h-[600px] flex items-center justify-center bg-[#EDE7DE] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/20" />
        
        {/* Hero Image Placeholder - Warm editorial style */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full h-full bg-gradient-to-br from-[#D4C9B8] via-[#C5B5A0] to-[#B8A68F] flex items-center justify-center">
            <div className="text-center text-[#5C5146] opacity-40">
              <div className="text-[10px] tracking-[4px] mb-2">EDITORIAL PHOTOGRAPHY</div>
              <div className="text-2xl font-serif">Gold Jewelry on Model</div>
            </div>
          </div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 
            className="text-white mb-6" 
            style={{ 
              fontSize: 'clamp(2.5rem, 8vw, 4.5rem)', 
              fontFamily: 'var(--font-serif)',
              letterSpacing: '-0.02em',
              textShadow: '0 2px 20px rgba(0,0,0,0.3)'
            }}
          >
            Crafted to be Treasured
          </h1>
          <p className="text-white/90 text-lg mb-8 max-w-md mx-auto" style={{ letterSpacing: '0.02em' }}>
            Demi-fine gold jewelry for the woman who values quiet luxury.
          </p>
          <Link to="/shop" className="btn btn-primary btn-lg inline-block">
            SHOP THE COLLECTION
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 text-xs tracking-[3px]">
          SCROLL TO EXPLORE
        </div>
      </section>

      {/* 2. TRUST BAR */}
      <div className="trust-bar">
        <span>Free Worldwide Shipping</span>
        <span className="hidden sm:inline">•</span>
        <span>30-Day Returns</span>
        <span className="hidden sm:inline">•</span>
        <span>18K Gold Plated</span>
        <span className="hidden sm:inline">•</span>
        <span>Hypoallergenic</span>
      </div>

      {/* 3. BESTSELLERS */}
      <section className="section container">
        <div className="flex items-end justify-between mb-8">
          <div>
            <div className="uppercase text-xs tracking-[3px] text-gold mb-1">Curated for You</div>
            <h2>Bestsellers</h2>
          </div>
          <Link to="/shop" className="text-sm uppercase tracking-widest text-gold hover:underline hidden sm:block">
            View All →
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-8">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-8 sm:hidden">
          <Link to="/shop" className="text-sm uppercase tracking-widest text-gold">
            View All →
          </Link>
        </div>
      </section>

      {/* 4. UGC REEL-STYLE ROW */}
      <section className="section bg-[#F5F2ED] py-12">
        <div className="container">
          <div className="flex items-end justify-between mb-6">
            <div>
              <div className="uppercase text-xs tracking-[3px] text-gold mb-1">As Seen On You</div>
              <h2 className="text-2xl">Real Moments</h2>
            </div>
            <span className="text-xs text-text-muted hidden sm:block">@velmora</span>
          </div>

          <div className="ugc-scroll">
            {ugcItems.map((item) => (
              <div key={item.id} className="ugc-card">
                <div className="img-placeholder h-full">
                  <span className="text-[10px] opacity-50">9:16 UGC</span>
                </div>
                <div className="ugc-overlay">
                  <p className="ugc-caption">"{item.caption}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SHOP BY CATEGORY */}
      <section className="section container">
        <div className="text-center mb-10">
          <div className="uppercase text-xs tracking-[3px] text-gold mb-1">Find Your Piece</div>
          <h2>Shop by Category</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { name: "Earrings", slug: "Earrings", desc: "Cuffs, drops & studs" },
            { name: "Necklaces", slug: "Necklaces", desc: "Pendants & chains" },
            { name: "Huggies", slug: "Huggies", desc: "Everyday essentials" }
          ].map((cat) => (
            <Link 
              key={cat.slug} 
              to={`/shop?category=${cat.slug}`}
              className="category-tile group"
            >
              <div className="img-placeholder h-full">
                <span className="text-sm opacity-40">{cat.name} Imagery</span>
              </div>
              <div className="category-tile-label">
                <span>{cat.name}</span>
              </div>
              <div className="absolute bottom-4 left-4 text-white z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="text-xs tracking-widest">{cat.desc}</div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 6. BRAND STORY SPLIT */}
      <section className="section bg-[#F5F2ED]">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image Side */}
            <div className="aspect-[4/3] bg-[#D4C9B8] flex items-center justify-center">
              <div className="text-center text-[#5C5146] opacity-40">
                <div className="text-xs tracking-[3px] mb-2">FOUNDRY PHOTOGRAPHY</div>
                <div className="font-serif text-xl">Our Atelier</div>
              </div>
            </div>

            {/* Text Side */}
            <div className="py-4">
              <div className="uppercase text-xs tracking-[3px] text-gold mb-3">Since 2019</div>
              <h2 className="mb-6">Our Story</h2>
              <div className="body-text body-muted space-y-4 max-w-prose">
                <p>
                  Velmora was born from a simple belief: that fine jewelry should be accessible, 
                  not ostentatious. We design pieces that feel like quiet declarations of self-worth.
                </p>
                <p>
                  Each piece is plated in 18K gold over hypoallergenic brass, crafted to be worn 
                  daily and treasured for years. No logos. No flash. Just beautiful objects made well.
                </p>
              </div>
              <Link to="/about" className="btn btn-gold-outline mt-8 inline-block">
                READ OUR STORY
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 7. TESTIMONIALS */}
      <section className="section container">
        <div className="text-center mb-10">
          <div className="uppercase text-xs tracking-[3px] text-gold mb-1">In Their Words</div>
          <h2>From Our Community</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {testimonials.map((t) => (
            <div key={t.id} className="testimonial">
              <div className="stars">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="star w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="body-text mb-4">"{t.text}"</p>
              <p className="text-sm text-text-muted">— {t.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 8. NEWSLETTER */}
      <section className="newsletter">
        <div className="container max-w-xl text-center">
          <h3 className="text-2xl mb-3">Join for 10% off your first order</h3>
          <p className="text-sm opacity-80 mb-6">
            Be the first to know about new arrivals, private sales, and stories from the atelier.
          </p>
          <form 
            className="flex flex-col sm:flex-row gap-3" 
            onSubmit={(e) => {
              e.preventDefault();
              const email = e.target.email.value;
              if (email) {
                alert(`Thank you. We'll send your 10% code to ${email}`);
                e.target.reset();
              }
            }}
          >
            <input 
              type="email" 
              name="email"
              placeholder="YOUR EMAIL ADDRESS" 
              className="input flex-1" 
              required 
            />
            <button type="submit" className="btn btn-primary whitespace-nowrap">
              SUBSCRIBE
            </button>
          </form>
          <p className="text-[10px] opacity-50 mt-4 tracking-widest">WE RESPECT YOUR INBOX</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
