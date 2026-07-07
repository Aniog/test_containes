import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import UGCRow from '../components/UGCRow';
import { products } from '../data/products';

const Home = () => {
  // Show 5 bestsellers (all products for demo)
  const bestsellers = products.slice(0, 5);

  const testimonials = [
    { name: "Elena M.", text: "The quality is exceptional. I wear my huggies every day and they still look brand new.", rating: 5 },
    { name: "Sofia R.", text: "Bought the Royal Heirloom Set as a gift for my sister. She hasn't taken it off since.", rating: 5 },
    { name: "Aisha K.", text: "Finally found jewelry that doesn't irritate my skin. The gold is so warm and beautiful.", rating: 5 },
  ];

  const categories = [
    { name: "Earrings", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80", slug: "Earrings" },
    { name: "Necklaces", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80", slug: "Necklaces" },
    { name: "Huggies", image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&q=80", slug: "Huggies" },
  ];

  return (
    <div className="min-h-screen bg-bg">
      {/* Hero */}
      <section className="relative h-[100dvh] min-h-[620px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-deep/40 z-10" />
        <img
          src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1600&q=80"
          alt="Velmora Fine Jewelry"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 text-center px-6 max-w-3xl">
          <h1 className="text-5xl md:text-6xl text-white font-medium tracking-[-0.02em] mb-4">
            Crafted to be Treasured
          </h1>
          <p className="text-white/90 text-lg md:text-xl mb-8 max-w-md mx-auto">
            Demi-fine gold jewelry for the woman who values quiet luxury.
          </p>
          <Link to="/shop" className="btn btn-gold inline-block">
            Shop the Collection
          </Link>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
          <div className="w-px h-12 bg-white/50" />
        </div>
      </section>

      {/* Trust Bar */}
      <div className="trust-bar border-b border-border py-4 bg-surface">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-x-8 gap-y-2 text-center">
          <span>Free Worldwide Shipping</span>
          <span className="hidden md:inline text-border">·</span>
          <span>30-Day Returns</span>
          <span className="hidden md:inline text-border">·</span>
          <span>18K Gold Plated</span>
          <span className="hidden md:inline text-border">·</span>
          <span>Hypoallergenic</span>
        </div>
      </div>

      {/* Bestsellers */}
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-12">
        <div className="flex items-end justify-between mb-8">
          <div>
            <div className="uppercase tracking-[0.15em] text-xs text-text-muted mb-1">Curated for You</div>
            <h2 className="section-title">Bestsellers</h2>
          </div>
          <Link to="/shop" className="hidden md:block text-sm tracking-[0.05em] hover:text-gold transition-colors">
            View All →
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="mt-6 md:hidden text-center">
          <Link to="/shop" className="text-sm tracking-[0.05em] hover:text-gold">View All →</Link>
        </div>
      </section>

      {/* UGC Reel Row */}
      <section className="bg-bg-alt py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-6">
            <div>
              <div className="uppercase tracking-[0.15em] text-xs text-text-muted mb-1">As Seen On You</div>
              <h2 className="section-title">Moments in Gold</h2>
            </div>
          </div>
          <UGCRow />
        </div>
      </section>

      {/* Shop by Category */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-10">
          <div className="uppercase tracking-[0.15em] text-xs text-text-muted mb-1">Find Your Piece</div>
          <h2 className="section-title">Shop by Category</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              to={`/shop?category=${cat.slug}`}
              className="category-tile group"
            >
              <img src={cat.image} alt={cat.name} />
              <div className="category-tile-label">
                <span className="text-white text-lg tracking-[0.1em] font-medium">{cat.name}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Brand Story */}
      <section className="bg-surface border-y border-border">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8 md:gap-16 py-16 items-center">
          <div className="aspect-[4/3] bg-bg-alt overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=900&q=80"
              alt="Velmora atelier"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="py-4">
            <div className="uppercase tracking-[0.15em] text-xs text-text-muted mb-2">Since 2018</div>
            <h2 className="section-title mb-6">Our Story</h2>
            <div className="body-text text-text-muted space-y-4 max-w-prose">
              <p>
                Velmora was born from a simple belief: that fine jewelry should be worn, not saved. 
                We design demi-fine pieces that feel as precious as they are practical—meant for daily life, 
                not just special occasions.
              </p>
              <p>
                Each piece is crafted with 18K gold plating over hypoallergenic bases, 
                using only the finest crystals and attention to detail. From our atelier to your jewelry box, 
                every item carries the quiet confidence of thoughtful design.
              </p>
            </div>
            <Link to="/about" className="btn btn-outline mt-8 inline-block">
              Read More
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-10">
          <div className="uppercase tracking-[0.15em] text-xs text-text-muted mb-1">In Their Words</div>
          <h2 className="section-title">What Our Clients Say</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {testimonials.map((t, idx) => (
            <div key={idx} className="testimonial">
              <div className="stars flex gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" />
                ))}
              </div>
              <p className="text-sm text-text-muted mb-4">"{t.text}"</p>
              <div className="text-sm font-medium">— {t.name}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="newsletter-block py-16">
        <div className="max-w-md mx-auto px-6 text-center">
          <h2 className="text-2xl font-medium tracking-[-0.01em] mb-3 text-bg">Join for 10% off your first order</h2>
          <p className="text-bg/70 text-sm mb-6">Be the first to know about new arrivals, private sales, and styling stories.</p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert('Thank you! You are now subscribed (demo).');
              e.target.reset();
            }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <input
              type="email"
              placeholder="Your email address"
              className="input flex-1 bg-white/95 border-white/30 text-deep placeholder:text-deep/40"
              required
            />
            <button type="submit" className="btn btn-gold whitespace-nowrap">
              Subscribe
            </button>
          </form>
          <p className="text-[10px] text-bg/50 mt-3 tracking-wide">We respect your inbox. Unsubscribe anytime.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
