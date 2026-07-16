import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

// UGC images - vertical format jewelry worn
const ugcItems = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&q=80",
    caption: "My everyday staple",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&q=80",
    caption: "Gifted to myself",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&q=80",
    caption: "Wedding day details",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=400&q=80",
    caption: "Layered with love",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=400&q=80",
    caption: "Golden hour glow",
  },
];

const testimonials = [
  {
    id: 1,
    text: "The quality is exceptional. I wear my huggies every day and they still look brand new.",
    name: "Elena M.",
    rating: 5,
  },
  {
    id: 2,
    text: "Bought the Royal Heirloom Set as a gift. My sister hasn't taken it off since.",
    name: "Sofia R.",
    rating: 5,
  },
  {
    id: 3,
    text: "Beautiful packaging and the pieces feel so special. Worth every penny.",
    name: "Aisha K.",
    rating: 5,
  },
];

const categories = [
  {
    name: "Earrings",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
    path: "/shop?category=Earrings",
  },
  {
    name: "Necklaces",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
    path: "/shop?category=Necklaces",
  },
  {
    name: "Huggies",
    image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&q=80",
    path: "/shop?category=Huggies",
  },
];

const Home = () => {
  // Bestsellers - first 5 products
  const bestsellers = products.slice(0, 5);

  return (
    <div className="pt-20">
      {/* 1. HERO */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-charcoal">
          <img
            src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=2000&q=80"
            alt="Woman wearing elegant gold jewelry"
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-3xl">
          <h1 className="heading-serif text-5xl md:text-6xl text-white mb-6 tracking-[-0.02em]">
            Crafted to be Treasured
          </h1>
          <p className="text-white/90 text-lg md:text-xl mb-8 max-w-md mx-auto">
            Demi-fine gold jewelry for the moments that matter.
          </p>
          <Link to="/shop" className="btn btn-gold inline-block">
            Shop the Collection
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 text-xs tracking-[0.2em] hidden md:block">
          SCROLL TO EXPLORE
        </div>
      </section>

      {/* 2. TRUST BAR */}
      <div className="trust-bar bg-surface border-b border-border py-4">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-2 text-center">
            <span>Free Worldwide Shipping</span>
            <span className="hidden md:inline text-border">·</span>
            <span>30-Day Returns</span>
            <span className="hidden md:inline text-border">·</span>
            <span>18K Gold Plated</span>
            <span className="hidden md:inline text-border">·</span>
            <span>Hypoallergenic</span>
          </div>
        </div>
      </div>

      {/* 3. BESTSELLERS */}
      <section className="section-padding max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-8">
          <div>
            <span className="uppercase tracking-[0.15em] text-xs text-muted">Discover</span>
            <h2 className="heading-serif text-3xl md:text-4xl mt-1">Bestsellers</h2>
          </div>
          <Link to="/shop" className="hidden md:block text-sm uppercase tracking-widest hover:text-gold">
            View All →
          </Link>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-8 md:hidden">
          <Link to="/shop" className="text-sm uppercase tracking-widest hover:text-gold">
            View All →
          </Link>
        </div>
      </section>

      {/* 4. UGC REEL-STYLE ROW */}
      <section className="bg-bg-alt py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-8">
            <span className="uppercase tracking-[0.15em] text-xs text-muted">As Seen On</span>
            <h2 className="heading-serif text-3xl md:text-4xl mt-1">Real Moments</h2>
          </div>
          
          <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
            {ugcItems.map((item) => (
              <div key={item.id} className="ugc-card snap-start">
                <img src={item.image} alt={item.caption} />
                <div className="ugc-caption">{item.caption}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SHOP BY CATEGORY */}
      <section className="section-padding max-w-7xl mx-auto px-6">
        <div className="mb-8">
          <span className="uppercase tracking-[0.15em] text-xs text-muted">Browse</span>
          <h2 className="heading-serif text-3xl md:text-4xl mt-1">Shop by Category</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {categories.map((cat) => (
            <Link key={cat.name} to={cat.path} className="category-tile group">
              <img src={cat.image} alt={cat.name} />
              <div className="category-tile-label group-hover:bg-black/60">
                {cat.name}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 6. BRAND STORY */}
      <section className="bg-surface section-padding">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="aspect-[4/3] bg-bg-alt overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=1200&q=80"
                alt="Velmora atelier - hands crafting fine jewelry"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <span className="uppercase tracking-[0.15em] text-xs text-muted">Since 2018</span>
              <h2 className="heading-serif text-4xl mt-2 mb-6">Our Story</h2>
              <div className="space-y-4 text-muted leading-relaxed">
                <p>
                  Velmora was born from a simple belief: that beautiful jewelry should be worn, 
                  not saved for special occasions. We design demi-fine pieces that feel as 
                  precious as they are practical.
                </p>
                <p>
                  Each piece is crafted with 18K gold plating over sterling silver, 
                  set with carefully selected crystals, and finished by hand. 
                  Designed to last, made to be treasured.
                </p>
              </div>
              <Link to="/" className="inline-block mt-6 text-sm uppercase tracking-widest hover:text-gold">
                Read More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 7. TESTIMONIALS */}
      <section className="section-padding max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <span className="uppercase tracking-[0.15em] text-xs text-muted">Loved By</span>
          <h2 className="heading-serif text-3xl md:text-4xl mt-1">Our Community</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {testimonials.map((t) => (
            <div key={t.id} className="testimonial">
              <div className="stars mb-4">★★★★★</div>
              <p className="text-sm leading-relaxed mb-4">"{t.text}"</p>
              <p className="text-xs uppercase tracking-widest text-muted">— {t.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 8. NEWSLETTER */}
      <section className="newsletter py-16">
        <div className="max-w-md mx-auto px-6 text-center">
          <h2 className="heading-serif text-3xl mb-3">Join for 10% off</h2>
          <p className="text-white/70 text-sm mb-6">
            Be the first to know about new arrivals, private sales, and styling stories.
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert('Thank you! You are now subscribed.');
              e.target.reset();
            }}
            className="flex"
          >
            <input
              type="email"
              placeholder="Your email address"
              required
              className="flex-1"
            />
            <button type="submit" className="btn btn-gold">
              Subscribe
            </button>
          </form>
          <p className="text-[10px] text-white/50 mt-3 tracking-wider">
            We respect your inbox. Unsubscribe anytime.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
