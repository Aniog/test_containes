import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

const Home = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const bestsellers = products.slice(0, 5);

  const ugcItems = [
    { id: 1, caption: "Morning light", img: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=400&q=80" },
    { id: 2, caption: "Golden hour", img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&q=80" },
    { id: 3, caption: "Everyday elegance", img: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&q=80" },
    { id: 4, caption: "Soft details", img: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=400&q=80" },
    { id: 5, caption: "Timeless", img: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=400&q=80" },
  ];

  const categories = [
    { name: "Earrings", path: "/shop?category=Earrings", img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80" },
    { name: "Necklaces", path: "/shop?category=Necklaces", img: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80" },
    { name: "Huggies", path: "/shop?category=Huggies", img: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80" },
  ];

  const testimonials = [
    { name: "Elena M.", text: "The quality is exceptional. I wear my huggies every day and they still look brand new." },
    { name: "Sofia R.", text: "Bought the Royal Heirloom Set as a gift. The packaging alone made it feel so special." },
    { name: "Aisha K.", text: "Finally found jewelry that doesn't irritate my skin. The gold tone is beautiful." },
  ];

  const handleNewsletter = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail('');
      }, 2500);
    }
  };

  return (
    <div className="pt-20">
      {/* 1. Hero */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-velmora-bg-alt">
          <img
            src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1600&q=80"
            alt="Velmora Fine Jewelry"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/30" />
        </div>
        
        <div className="relative z-10 text-center px-6">
          <h1 className="text-5xl md:text-6xl lg:text-7xl text-white font-medium tracking-[-0.02em] mb-4">
            Crafted to be<br />Treasured
          </h1>
          <p className="text-white/90 text-lg md:text-xl mb-8 max-w-md mx-auto">
            Demi-fine jewelry for the woman who values quiet luxury.
          </p>
          <Link to="/shop" className="btn btn-primary">
            Shop the Collection
          </Link>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="w-px h-12 bg-white/50" />
        </div>
      </section>

      {/* 2. Trust Bar */}
      <div className="trust-bar border-b border-velmora-border py-4">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-2 text-center">
            <span>Free Worldwide Shipping</span>
            <span className="hidden md:inline text-velmora-border">·</span>
            <span>30-Day Returns</span>
            <span className="hidden md:inline text-velmora-border">·</span>
            <span>18K Gold Plated</span>
            <span className="hidden md:inline text-velmora-border">·</span>
            <span>Hypoallergenic</span>
          </div>
        </div>
      </div>

      {/* 3. Bestsellers */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="flex items-end justify-between mb-8">
            <div>
              <span className="text-xs tracking-[0.15em] uppercase text-velmora-gold">Curated for You</span>
              <h2 className="text-3xl md:text-4xl mt-1">Bestsellers</h2>
            </div>
            <Link to="/shop" className="hidden md:block text-sm tracking-[0.08em] uppercase hover:text-velmora-gold">
              View All →
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {bestsellers.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <Link to="/shop" className="text-sm tracking-[0.08em] uppercase hover:text-velmora-gold">
              View All →
            </Link>
          </div>
        </div>
      </section>

      {/* 4. UGC Reel Row */}
      <section className="pb-12 md:pb-16 bg-velmora-bg-alt">
        <div className="container-custom">
          <div className="flex items-center justify-between mb-6 pt-8">
            <h3 className="text-xl tracking-[0.02em]">As Seen On You</h3>
            <span className="text-xs tracking-[0.1em] uppercase text-velmora-text-muted">Instagram @velmora</span>
          </div>
          
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory">
            {ugcItems.map((item) => (
              <div key={item.id} className="ugc-card snap-start">
                <img src={item.img} alt={item.caption} />
                <div className="ugc-caption">{item.caption}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Shop by Category */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-10">
            <span className="text-xs tracking-[0.15em] uppercase text-velmora-gold">Discover</span>
            <h2 className="text-3xl md:text-4xl mt-1">Shop by Category</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {categories.map((cat) => (
              <Link key={cat.name} to={cat.path} className="category-tile group">
                <img src={cat.img} alt={cat.name} />
                <div className="category-tile-label">
                  <span>{cat.name}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Brand Story */}
      <section className="bg-velmora-bg-alt">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center py-16 md:py-20">
            <div className="aspect-[4/3] bg-velmora-border overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80"
                alt="Our Story"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="pr-4">
              <span className="text-xs tracking-[0.15em] uppercase text-velmora-gold">Since 2019</span>
              <h2 className="text-3xl md:text-4xl mt-2 mb-6">Our Story</h2>
              <div className="body-text text-velmora-text-muted space-y-4">
                <p>
                  Velmora was born from a simple belief: that fine jewelry should be accessible without compromise.
                </p>
                <p>
                  We work with skilled artisans to create pieces in 18K gold plating that feel as luxurious as solid gold, 
                  but designed for the rhythm of real life—everyday wear, special moments, and everything in between.
                </p>
              </div>
              <Link to="/about" className="inline-block mt-6 text-sm tracking-[0.08em] uppercase border-b border-velmora-gold pb-0.5 hover:text-velmora-gold">
                Read More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Testimonials */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-10">
            <span className="text-xs tracking-[0.15em] uppercase text-velmora-gold">In Their Words</span>
            <h2 className="text-3xl md:text-4xl mt-1">What Our Clients Say</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {testimonials.map((t, idx) => (
              <div key={idx} className="testimonial">
                <div className="testimonial-stars flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" />
                  ))}
                </div>
                <p className="testimonial-text">"{t.text}"</p>
                <p className="testimonial-author">— {t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Newsletter */}
      <section className="newsletter-block py-16 md:py-20">
        <div className="container-custom text-center max-w-lg mx-auto px-6">
          <h3 className="text-2xl md:text-3xl text-white mb-3">Join for 10% off your first order</h3>
          <p className="text-white/70 text-sm mb-8">Be the first to know about new arrivals and exclusive offers.</p>
          
          {subscribed ? (
            <p className="text-velmora-gold-light">Thank you. Welcome to the circle.</p>
          ) : (
            <form onSubmit={handleNewsletter} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="input flex-1"
                required
              />
              <button type="submit" className="btn btn-primary whitespace-nowrap">
                Subscribe
              </button>
            </form>
          )}
          <p className="text-[10px] text-white/50 mt-4 tracking-wider">We respect your inbox. Unsubscribe anytime.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
