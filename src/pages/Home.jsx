import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import ProductCard from '../components/product/ProductCard';
import Button from '../components/ui/Button';
import { products } from '../data/products';

const Home = () => {
  // Use first 5 products as bestsellers
  const bestsellers = products.slice(0, 5);

  // UGC mock data - vertical reel style
  const ugcItems = [
    { id: 1, image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&q=80", caption: "Everyday elegance" },
    { id: 2, image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&q=80", caption: "Golden hour glow" },
    { id: 3, image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&q=80", caption: "Soft light, soft shine" },
    { id: 4, image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80", caption: "Layered with love" },
    { id: 5, image: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=400&q=80", caption: "Timeless on me" },
  ];

  const categories = [
    { name: "Earrings", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80", slug: "Earrings" },
    { name: "Necklaces", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80", slug: "Necklaces" },
    { name: "Huggies", image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&q=80", slug: "Huggies" },
  ];

  const testimonials = [
    { name: "Elena M.", text: "The quality is exceptional. I wear my huggies every day and they still look brand new.", stars: 5 },
    { name: "Sofia R.", text: "Bought the Royal Heirloom Set as a gift. The packaging alone felt so luxurious.", stars: 5 },
    { name: "Aisha K.", text: "Finally found jewelry that doesn't irritate my skin. The gold tone is beautiful.", stars: 5 },
  ];

  return (
    <div className="pt-16 md:pt-20">
      {/* Hero */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[var(--velmora-bg-dark)]">
          <img 
            src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1600&q=90" 
            alt="Velmora Fine Jewelry" 
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />
        </div>
        
        <div className="relative z-10 text-center px-6">
          <h1 className="text-[var(--velmora-text-light)] text-4xl md:text-6xl mb-4 tracking-[-0.02em]">
            Crafted to be Treasured
          </h1>
          <p className="text-[var(--velmora-text-light)]/80 text-lg mb-8 max-w-md mx-auto">
            Demi-fine gold jewelry for the modern woman.
          </p>
          <Link to="/shop">
            <Button variant="outline-light">Shop the Collection</Button>
          </Link>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="w-px h-12 bg-[var(--velmora-text-light)]/40" />
        </div>
      </section>

      {/* Trust Bar */}
      <div className="trust-bar py-4 border-b border-[var(--velmora-border)]">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-center">
            <span>Free Worldwide Shipping</span>
            <span>30-Day Returns</span>
            <span>18K Gold Plated</span>
            <span>Hypoallergenic</span>
          </div>
        </div>
      </div>

      {/* Bestsellers */}
      <section className="section">
        <div className="container">
          <div className="flex items-end justify-between mb-8">
            <div>
              <div className="text-xs tracking-[0.15em] uppercase text-[var(--velmora-text-muted)] mb-1">Discover</div>
              <h2>Bestsellers</h2>
            </div>
            <Link to="/shop" className="text-sm tracking-[0.08em] uppercase hidden md:block hover:text-[var(--velmora-gold)]">
              View All →
            </Link>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {bestsellers.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* UGC Reel Row */}
      <section className="section bg-[var(--velmora-surface-warm)] py-10">
        <div className="container">
          <div className="mb-6">
            <div className="text-xs tracking-[0.15em] uppercase text-[var(--velmora-text-muted)] mb-1">As Seen On You</div>
            <h2 className="text-2xl">Real Moments</h2>
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

      {/* Shop by Category */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-10">
            <div className="text-xs tracking-[0.15em] uppercase text-[var(--velmora-text-muted)] mb-1">Find Your Piece</div>
            <h2>Shop by Category</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {categories.map((cat) => (
              <Link 
                key={cat.name} 
                to={`/shop?category=${cat.slug}`}
                className="category-tile group"
              >
                <img src={cat.image} alt={cat.name} />
                <div className="category-tile-label">
                  <span>{cat.name}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="section bg-[var(--velmora-surface)]">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="aspect-[4/3] bg-[var(--velmora-surface-warm)] overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80" 
                alt="Our atelier" 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="text-xs tracking-[0.15em] uppercase text-[var(--velmora-text-muted)] mb-2">Since 2018</div>
              <h2 className="mb-6">Our Story</h2>
              <div className="body-text space-y-4 mb-8">
                <p>
                  Velmora was born from a simple belief: that beautiful jewelry should be accessible without compromise.
                </p>
                <p>
                  We work with skilled artisans to create demi-fine pieces in 18K gold plating that feel as precious as solid gold. 
                  Each piece is designed to be worn daily, passed down, and loved for years.
                </p>
              </div>
              <Link to="/about">
                <Button variant="outline">Learn More</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-10">
            <div className="text-xs tracking-[0.15em] uppercase text-[var(--velmora-text-muted)] mb-1">Kind Words</div>
            <h2>From Our Community</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="testimonial border border-[var(--velmora-border)]">
                <div className="testimonial-stars flex gap-0.5">
                  {Array.from({ length: t.stars }).map((_, idx) => (
                    <Star key={idx} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="testimonial-text">"{t.text}"</p>
                <div className="testimonial-author">— {t.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="newsletter py-16">
        <div className="container max-w-xl text-center">
          <h2 className="text-[var(--velmora-text-light)] mb-3">Join for 10% off your first order</h2>
          <p className="text-[var(--velmora-text-light)]/70 mb-8 text-sm">
            Be the first to know about new arrivals, private sales, and styling stories.
          </p>
          
          <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => { e.preventDefault(); alert('Thank you for subscribing!'); }}>
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-1"
              required 
            />
            <Button type="submit" variant="primary">Subscribe</Button>
          </form>
          <p className="text-[10px] text-[var(--velmora-text-muted)] mt-3 tracking-wide">
            We respect your inbox. Unsubscribe anytime.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;