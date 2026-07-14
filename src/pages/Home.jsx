import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import ProductCard from '../components/product/ProductCard';
import { products } from '../data/products';
import { ugcItems } from '../data/ugc';

const Home = () => {
  // Bestsellers: first 5 products
  const bestsellers = products.slice(0, 5);

  // Testimonials
  const testimonials = [
    {
      id: 1,
      text: "The most beautiful everyday pieces I've ever owned. I wear my huggies every single day.",
      author: "Elena M.",
      rating: 5,
    },
    {
      id: 2,
      text: "Bought the Royal Heirloom Set as a gift for my sister. She cried. Worth every penny.",
      author: "Sofia R.",
      rating: 5,
    },
    {
      id: 3,
      text: "Finally found jewelry that doesn't turn my skin green. The quality is exceptional.",
      author: "Aisha K.",
      rating: 5,
    },
  ];

  // Categories
  const categories = [
    { id: 'earrings', label: 'Earrings', image: 'earrings' },
    { id: 'necklaces', label: 'Necklaces', image: 'necklaces' },
    { id: 'huggies', label: 'Huggies', image: 'huggies' },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* 1. HERO */}
      <section className="relative h-[92vh] min-h-[620px] flex items-center justify-center overflow-hidden bg-[#EDE6D9]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'linear-gradient(135deg, #D4C5A8 0%, #B8976A 40%, #9A7A52 100%)',
          }}
        >
          <div className="absolute inset-0 bg-black/20" />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-medium tracking-[0.02em] mb-6">
            Crafted to be<br />Treasured
          </h1>
          <p className="text-white/90 text-lg md:text-xl mb-8 max-w-md mx-auto">
            Demi-fine gold jewelry for the modern woman.
          </p>
          <Link to="/shop" className="btn btn-primary inline-block">
            Shop the Collection
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 text-xs tracking-[0.2em] uppercase">
          Scroll to explore
        </div>
      </section>

      {/* 2. TRUST BAR */}
      <div className="trust-bar border-b border-velmora-border py-4">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-x-8 gap-y-2 text-center">
          <span>Free Worldwide Shipping</span>
          <span className="hidden md:inline text-velmora-border-dark">·</span>
          <span>30-Day Returns</span>
          <span className="hidden md:inline text-velmora-border-dark">·</span>
          <span>18K Gold Plated</span>
          <span className="hidden md:inline text-velmora-border-dark">·</span>
          <span>Hypoallergenic</span>
        </div>
      </div>

      {/* 3. BESTSELLERS */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <div className="flex items-end justify-between mb-8">
          <div>
            <div className="uppercase tracking-[0.15em] text-xs text-velmora-gold mb-1">Signature Pieces</div>
            <h2 className="text-3xl md:text-4xl">Bestsellers</h2>
          </div>
          <Link to="/shop" className="hidden md:block text-sm uppercase tracking-[0.08em] hover:text-velmora-gold">
            View All →
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Link to="/shop" className="text-sm uppercase tracking-[0.08em] hover:text-velmora-gold">
            View All →
          </Link>
        </div>
      </section>

      {/* 4. UGC REEL-STYLE ROW */}
      <section className="bg-velmora-bg-alt py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-8">
            <div className="uppercase tracking-[0.15em] text-xs text-velmora-gold mb-1">As Seen On You</div>
            <h2 className="text-3xl md:text-4xl">Real Moments</h2>
          </div>

          <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
            {ugcItems.map((item) => (
              <div key={item.id} className="ugc-card snap-start">
                <div 
                  className="w-full h-full"
                  style={{
                    background: 'linear-gradient(180deg, #D4C5A8 0%, #B8976A 50%, #8B6F4A 100%)',
                  }}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center px-3">
                      <div className="w-10 h-10 mx-auto mb-3 rounded-full bg-white/20" />
                    </div>
                  </div>
                </div>
                <div className="ugc-caption">
                  {item.caption}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SHOP BY CATEGORY */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <div className="mb-8">
          <div className="uppercase tracking-[0.15em] text-xs text-velmora-gold mb-1">Find Your Piece</div>
          <h2 className="text-3xl md:text-4xl">Shop by Category</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="category-tile group"
            >
              <div 
                className="w-full h-full"
                style={{
                  background: cat.id === 'earrings' 
                    ? 'linear-gradient(135deg, #E8DFD0 0%, #B8976A 100%)'
                    : cat.id === 'necklaces'
                    ? 'linear-gradient(135deg, #D4C5A8 0%, #9A7A52 100%)'
                    : 'linear-gradient(135deg, #F2EDE6 0%, #B8976A 100%)',
                }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-14 h-14 mx-auto mb-3 rounded-full bg-white/25" />
                  </div>
                </div>
              </div>
              <div className="category-tile-label">
                <span>{cat.label}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 6. BRAND STORY */}
      <section className="border-t border-velmora-border">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2">
          <div className="bg-velmora-bg-alt aspect-[16/10] md:aspect-auto flex items-center justify-center p-12">
            <div 
              className="w-full max-w-[320px] aspect-[4/3] bg-gradient-to-br from-velmora-gold/30 to-velmora-gold-dark/40"
            />
          </div>
          <div className="flex flex-col justify-center px-6 py-12 md:py-16 md:pr-16 lg:pr-24">
            <div className="uppercase tracking-[0.15em] text-xs text-velmora-gold mb-2">Since 2019</div>
            <h2 className="text-3xl md:text-4xl mb-6">Our Story</h2>
            <div className="prose prose-sm text-velmora-text-muted max-w-prose">
              <p className="mb-4">
                Velmora was born from a simple belief: that beautiful jewelry should be worn every day, 
                not saved for special occasions.
              </p>
              <p className="mb-6">
                We design demi-fine pieces that feel as good as they look — crafted from 18K gold plating 
                over hypoallergenic bases, with stones chosen for their quiet brilliance.
              </p>
            </div>
            <Link to="/about" className="btn btn-outline self-start mt-2">
              Read More
            </Link>
          </div>
        </div>
      </section>

      {/* 7. TESTIMONIALS */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <div className="mb-8">
          <div className="uppercase tracking-[0.15em] text-xs text-velmora-gold mb-1">Kind Words</div>
          <h2 className="text-3xl md:text-4xl">From Our Community</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {testimonials.map((t) => (
            <div key={t.id} className="testimonial">
              <div className="testimonial-stars flex">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="testimonial-text">"{t.text}"</p>
              <div className="testimonial-author">— {t.author}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. NEWSLETTER */}
      <section className="newsletter py-16 md:py-20">
        <div className="max-w-xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl text-white mb-3">Join for 10% off</h2>
          <p className="text-white/70 mb-8 text-sm tracking-wide">
            Be the first to know about new arrivals, private sales, and stories from the studio.
          </p>
          <form 
            className="flex flex-col sm:flex-row gap-3"
            onSubmit={(e) => {
              e.preventDefault();
              const email = e.target.email.value;
              if (email) {
                alert(`Thank you! 10% off code sent to ${email} (demo)`);
                e.target.reset();
              }
            }}
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
          <p className="text-[10px] text-white/50 mt-4 tracking-wide">
            We respect your inbox. Unsubscribe anytime.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
