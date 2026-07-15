import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

const Home = () => {
  // Select 5 products for bestsellers (all of them for this small catalog)
  const bestsellers = products;

  // UGC Reel data — vertical 9:16 style cards
  const ugcItems = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80",
      caption: "Golden hour with my new huggies",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&q=80",
      caption: "The necklace I never take off",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=400&q=80",
      caption: "Wedding day details",
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=400&q=80",
      caption: "Everyday elegance",
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&q=80",
      caption: "Gifted to myself",
    },
  ];

  // Testimonials
  const testimonials = [
    {
      id: 1,
      text: "The quality is exceptional. I wear my huggies every day and they still look brand new.",
      name: "Elena M.",
      rating: 5,
    },
    {
      id: 2,
      text: "Bought the Royal Heirloom Set as a gift for my sister. She cried. Worth every penny.",
      name: "Sofia R.",
      rating: 5,
    },
    {
      id: 3,
      text: "Finally found jewelry that doesn't irritate my sensitive skin. The gold tone is so warm and beautiful.",
      name: "Aisha K.",
      rating: 5,
    },
  ];

  // Categories for tiles
  const categories = [
    { name: "Earrings", image: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=600&q=80", slug: "Earrings" },
    { name: "Necklaces", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=80", slug: "Necklaces" },
    { name: "Huggies", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=80", slug: "Huggies" },
  ];

  return (
    <div>
      {/* 1. Full-bleed Hero */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-velmora-black">
          <img
            src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=2000&q=80"
            alt="Velmora Fine Jewelry — Warm lit gold jewelry on model"
            className="absolute inset-0 w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-3xl">
          <h1 className="serif text-white text-5xl md:text-6xl lg:text-7xl tracking-[-0.02em] mb-6">
            Crafted to be Treasured
          </h1>
          <p className="text-white/90 text-lg md:text-xl mb-8 max-w-md mx-auto">
            Demi-fine gold jewelry for the modern woman. Timeless pieces, thoughtfully made.
          </p>
          <Link to="/shop" className="btn btn-primary">
            Shop the Collection
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 text-xs tracking-[3px]">
          SCROLL TO EXPLORE
        </div>
      </section>

      {/* 2. Trust Bar */}
      <div className="trust-bar border-b border-velmora-border py-4">
        <div className="container flex flex-wrap justify-center items-center gap-x-8 gap-y-2 text-center">
          <span>Free Worldwide Shipping</span>
          <span className="hidden md:inline text-velmora-border">·</span>
          <span>30-Day Returns</span>
          <span className="hidden md:inline text-velmora-border">·</span>
          <span>18K Gold Plated</span>
          <span className="hidden md:inline text-velmora-border">·</span>
          <span>Hypoallergenic</span>
        </div>
      </div>

      {/* 3. Bestsellers */}
      <section className="section container">
        <div className="flex items-end justify-between mb-8">
          <div>
            <div className="uppercase tracking-[3px] text-xs text-velmora-text-muted mb-1">Curated for You</div>
            <h2 className="serif text-3xl md:text-4xl">Bestsellers</h2>
          </div>
          <Link to="/shop" className="hidden md:block text-sm tracking-widest hover:text-velmora-gold-dark">
            VIEW ALL →
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Link to="/shop" className="text-sm tracking-widest hover:text-velmora-gold-dark">
            VIEW ALL →
          </Link>
        </div>
      </section>

      {/* 4. Reel-style UGC Row */}
      <section className="section-sm bg-velmora-surface">
        <div className="container">
          <div className="mb-6">
            <div className="uppercase tracking-[3px] text-xs text-velmora-text-muted mb-1">As Seen On You</div>
            <h2 className="serif text-2xl md:text-3xl">Real Moments</h2>
          </div>

          <div className="flex gap-3 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
            {ugcItems.map((item) => (
              <div key={item.id} className="ugc-card aspect-[9/16] snap-start">
                <img
                  src={item.image}
                  alt={item.caption}
                  className="w-full h-full object-cover"
                />
                <div className="caption">
                  {item.caption}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Shop by Category */}
      <section className="section container">
        <div className="text-center mb-10">
          <div className="uppercase tracking-[3px] text-xs text-velmora-text-muted mb-1">Find Your Piece</div>
          <h2 className="serif text-3xl md:text-4xl">Shop by Category</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              to={`/shop?category=${cat.slug}`}
              className="category-tile aspect-[4/3] md:aspect-[3/2] block overflow-hidden"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover"
              />
              <div className="overlay" />
              <div className="label serif">{cat.name}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* 6. Brand Story Split */}
      <section className="section bg-velmora-surface">
        <div className="container grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="aspect-[4/3] md:aspect-auto md:h-[520px] overflow-hidden bg-velmora-white">
            <img
              src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=900&q=80"
              alt="Velmora atelier — hands crafting fine jewelry"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="py-4 md:py-8">
            <div className="uppercase tracking-[3px] text-xs text-velmora-text-muted mb-3">Since 2018</div>
            <h2 className="serif text-3xl md:text-4xl mb-6">Our Story</h2>
            <div className="prose prose-sm text-velmora-text-muted space-y-4 text-[15px] leading-relaxed">
              <p>
                Velmora was born from a simple belief: that beautiful jewelry should be accessible without compromise.
              </p>
              <p>
                We design demi-fine pieces in 18K gold plating that feel as luxurious as solid gold — but at a price that lets you collect, layer, and gift freely.
              </p>
              <p>
                Every piece is crafted with intention, designed to be worn daily and treasured for years.
              </p>
            </div>
            <Link to="/about" className="btn btn-outline mt-8 inline-block">
              Read Our Story
            </Link>
          </div>
        </div>
      </section>

      {/* 7. Testimonials */}
      <section className="section container">
        <div className="text-center mb-10">
          <div className="uppercase tracking-[3px] text-xs text-velmora-text-muted mb-1">Kind Words</div>
          <h2 className="serif text-3xl md:text-4xl">From Our Community</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.id} className="testimonial border border-velmora-border">
              <div className="stars">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="text-[15px] leading-relaxed my-4 text-velmora-text">"{t.text}"</p>
              <div className="text-sm text-velmora-text-muted">— {t.name}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. Newsletter */}
      <section className="newsletter py-16 md:py-20">
        <div className="container max-w-xl text-center">
          <div className="serif text-3xl md:text-4xl text-white mb-3">Join for 10% off</div>
          <p className="text-white/70 mb-8 text-sm tracking-wide">
            Be the first to know about new arrivals, private sales, and styling stories.
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const email = e.target.email.value;
              if (email) {
                alert(`Thank you. A 10% code has been sent to ${email}.`);
                e.target.reset();
              }
            }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <input
              type="email"
              name="email"
              placeholder="Your email address"
              required
              className="input flex-1"
            />
            <button type="submit" className="btn btn-primary whitespace-nowrap">
              Subscribe
            </button>
          </form>
          <p className="text-[10px] text-white/40 mt-4 tracking-widest">
            WE RESPECT YOUR INBOX. UNSUBSCRIBE ANYTIME.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
