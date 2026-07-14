import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

const Home = () => {
  // Bestsellers - first 5 products
  const bestsellers = products.slice(0, 5);

  // UGC mock data - vertical reel-style images
  const ugcItems = [
    { id: 1, caption: "Morning light", img: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&q=80" },
    { id: 2, caption: "Golden hour", img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&q=80" },
    { id: 3, caption: "Everyday elegance", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80" },
    { id: 4, caption: "Soft moments", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80" },
    { id: 5, caption: "Timeless", img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&q=80" },
  ];

  // Testimonials
  const testimonials = [
    { name: "Elena M.", text: "The quality is exceptional. I've worn my huggies every day for months and they still look brand new." },
    { name: "Sofia R.", text: "Bought the Royal Heirloom Set as a gift. The packaging alone made it feel so special." },
    { name: "Maya K.", text: "Finally found jewelry that doesn't irritate my skin. The gold is so warm and beautiful." },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[#1a1816]">
          <img
            src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1600&q=80"
            alt="Velmora Fine Jewelry - Woman wearing elegant gold necklace"
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />
        </div>
        
        <div className="relative z-10 text-center px-6">
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-serif tracking-[-0.02em] mb-4">
            Crafted to be Treasured
          </h1>
          <p className="text-white/90 text-lg md:text-xl mb-8 max-w-md mx-auto">
            Demi-fine jewelry for the modern woman. Timeless pieces, thoughtfully made.
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

      {/* Trust Bar */}
      <div className="trust-bar py-4">
        <div className="container">
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-2 text-center">
            <span className="trust-item">Free Worldwide Shipping</span>
            <span className="hidden md:inline text-[#e5e0d8]">·</span>
            <span className="trust-item">30-Day Returns</span>
            <span className="hidden md:inline text-[#e5e0d8]">·</span>
            <span className="trust-item">18K Gold Plated</span>
            <span className="hidden md:inline text-[#e5e0d8]">·</span>
            <span className="trust-item">Hypoallergenic</span>
          </div>
        </div>
      </div>

      {/* Bestsellers */}
      <section className="section container">
        <div className="flex items-end justify-between mb-8">
          <div>
            <span className="caption">Curated for you</span>
            <h2 className="mt-1">Bestsellers</h2>
          </div>
          <Link to="/shop" className="hidden md:inline text-sm uppercase tracking-[0.1em] hover:text-[#b89778]">
            View All →
          </Link>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="text-center mt-8 md:hidden">
          <Link to="/shop" className="text-sm uppercase tracking-[0.1em] hover:text-[#b89778]">
            View All →
          </Link>
        </div>
      </section>

      {/* UGC Reel Row */}
      <section className="py-12 bg-[#f5f2ed]">
        <div className="container">
          <div className="mb-6">
            <span className="caption">As seen on you</span>
            <h2 className="mt-1">Moments in Gold</h2>
          </div>
        </div>
        
        <div className="overflow-x-auto pb-6 scrollbar-hide">
          <div className="flex gap-4 pl-6 md:pl-[calc((100%-1280px)/2+24px)]">
            {ugcItems.map((item) => (
              <div key={item.id} className="ugc-card">
                <img src={item.img} alt={item.caption} />
                <div className="ugc-card-caption">
                  <p>{item.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shop by Category */}
      <section className="section container">
        <div className="text-center mb-10">
          <span className="caption">Find your piece</span>
          <h2 className="mt-1">Shop by Category</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { name: 'Earrings', path: '/shop?category=Earrings', img: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80' },
            { name: 'Necklaces', path: '/shop?category=Necklaces', img: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80' },
            { name: 'Huggies', path: '/shop?category=Huggies', img: 'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80' },
          ].map((cat) => (
            <Link key={cat.name} to={cat.path} className="category-tile group">
              <img src={cat.img} alt={cat.name} />
              <div className="category-tile-label">
                <span>{cat.name}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Brand Story */}
      <section className="section bg-[#f5f2ed]">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="aspect-[4/3] bg-[#e5e0d8] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&q=80"
                alt="Velmora atelier - hands crafting fine jewelry"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <span className="caption">Since 2018</span>
              <h2 className="mt-2 mb-6">Our Story</h2>
              <div className="body-text space-y-4 mb-6">
                <p>
                  Velmora was born from a simple belief: that beautiful jewelry should be accessible, 
                  not exclusive. We create demi-fine pieces that honor traditional craftsmanship while 
                  embracing modern sensibilities.
                </p>
                <p>
                  Each piece is designed in our studio and crafted with 18K gold plating over 
                  hypoallergenic brass. We believe in jewelry that becomes part of your daily ritual—
                  pieces you reach for again and again.
                </p>
              </div>
              <Link to="/about" className="btn btn-outline">
                Read More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section container">
        <div className="text-center mb-10">
          <span className="caption">Kind words</span>
          <h2 className="mt-1">From Our Community</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="testimonial">
              <div className="testimonial-stars flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="testimonial-text">"{t.text}"</p>
              <p className="testimonial-author">— {t.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="newsletter py-16">
        <div className="container max-w-md text-center">
          <h3 className="font-serif text-2xl mb-3">Join for 10% off your first order</h3>
          <p className="text-[#8a8178] text-sm mb-6">
            Be the first to know about new arrivals, exclusive offers, and styling inspiration.
          </p>
          <form 
            onSubmit={(e) => {
              e.preventDefault();
              alert('Thank you for subscribing. Welcome to the Velmora family.');
              e.target.reset();
            }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <input
              type="email"
              placeholder="Your email address"
              className="input flex-1"
              required
            />
            <button type="submit" className="btn btn-primary whitespace-nowrap">
              Subscribe
            </button>
          </form>
          <p className="text-[10px] text-[#8a8178] mt-3 tracking-wide">
            We respect your inbox. Unsubscribe anytime.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
