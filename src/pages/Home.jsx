import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

// UGC images - vertical format jewelry on models
const ugcItems = [
  { id: 1, image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&q=80", caption: "Wearing my new huggies every day" },
  { id: 2, image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=400&q=80", caption: "The perfect gift from my sister" },
  { id: 3, image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&q=80", caption: "Layering the flora necklace" },
  { id: 4, image: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=400&q=80", caption: "My everyday ear cuff" },
  { id: 5, image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=400&q=80", caption: "Obsessed with this set" },
];

const testimonials = [
  { name: "Elena M.", text: "The quality is exceptional. I've worn my huggies daily for months and they still look brand new.", rating: 5 },
  { name: "Sofia R.", text: "Bought the Royal Heirloom Set as a gift. The packaging alone made it feel so special.", rating: 5 },
  { name: "Aisha K.", text: "Finally found jewelry that doesn't irritate my sensitive skin. The gold tone is beautiful.", rating: 5 },
];

const Home = () => {
  const bestsellers = products.slice(0, 5);

  return (
    <div className="min-h-screen bg-velmora-cream">
      {/* 1. Sticky Nav is in Layout */}

      {/* 2. Full-bleed Hero */}
      <section className="relative h-[100dvh] min-h-[600px] flex items-center justify-center pt-20">
        <div className="absolute inset-0 bg-velmora-charcoal">
          <img 
            src="https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=1600&q=85" 
            alt="Velmora Fine Jewelry - Woman wearing elegant gold jewelry"
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="font-serif-custom text-5xl md:text-7xl text-white tracking-[-0.02em] mb-6">
            Crafted to be Treasured
          </h1>
          <p className="text-white/90 text-lg md:text-xl mb-10 max-w-md mx-auto">
            Demi-fine jewelry for the moments that matter.
          </p>
          <Link to="/shop" className="btn btn-primary inline-block">
            Shop the Collection
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block">
          <div className="w-px h-12 bg-white/40" />
        </div>
      </section>

      {/* 3. Trust Bar */}
      <div className="trust-bar border-b border-velmora-taupe py-4">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center md:justify-between gap-x-8 gap-y-2 text-center">
            <span>Free Worldwide Shipping</span>
            <span>30-Day Returns</span>
            <span>18K Gold Plated</span>
            <span>Hypoallergenic</span>
          </div>
        </div>
      </div>

      {/* 4. Bestsellers */}
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-12">
        <div className="flex items-end justify-between mb-8">
          <div>
            <span className="text-xs tracking-[0.15em] text-velmora-muted uppercase">Curated for You</span>
            <h2 className="font-serif-custom text-4xl mt-1">Bestsellers</h2>
          </div>
          <Link to="/shop" className="hidden md:block text-sm tracking-[0.05em] hover:text-velmora-gold transition-colors">
            View All →
          </Link>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="text-center mt-8 md:hidden">
          <Link to="/shop" className="text-sm tracking-[0.05em] hover:text-velmora-gold transition-colors">
            View All →
          </Link>
        </div>
      </section>

      {/* 5. UGC Reel-style Row */}
      <section className="bg-velmora-surface py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-8">
            <span className="text-xs tracking-[0.15em] text-velmora-muted uppercase">As Seen On You</span>
            <h2 className="font-serif-custom text-3xl mt-1">Real Moments</h2>
          </div>
          
          <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
            {ugcItems.map((item) => (
              <div key={item.id} className="ugc-card snap-start">
                <img src={item.image} alt={item.caption} />
                <div className="ugc-caption">
                  {item.caption}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Shop by Category */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="mb-8">
          <span className="text-xs tracking-[0.15em] text-velmora-muted uppercase">Find Your Piece</span>
          <h2 className="font-serif-custom text-4xl mt-1">Shop by Category</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { name: "Earrings", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80", category: "Earrings" },
            { name: "Necklaces", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80", category: "Necklaces" },
            { name: "Huggies", image: "https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?w=800&q=80", category: "Huggies" },
          ].map((cat) => (
            <Link 
              key={cat.category} 
              to={`/shop?category=${cat.category}`}
              className="category-tile aspect-[16/10] md:aspect-[4/3] block overflow-hidden"
            >
              <img src={cat.image} alt={cat.name} className="w-full h-full object-cover" />
              <div className="category-label">
                {cat.name}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 7. Brand Story Split */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="aspect-[4/3] bg-velmora-surface overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80" 
              alt="Velmora atelier - hands crafting fine jewelry"
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="max-w-lg">
            <span className="text-xs tracking-[0.15em] text-velmora-muted uppercase">Since 2018</span>
            <h2 className="font-serif-custom text-4xl mt-2 mb-6">Our Story</h2>
            
            <div className="space-y-4 text-velmora-muted leading-relaxed">
              <p>
                Velmora was born from a simple belief: that beautiful jewelry should be accessible without compromise.
              </p>
              <p>
                We craft demi-fine pieces using 18K gold plating over hypoallergenic brass, set with carefully selected crystals. 
                Each piece is designed to be worn daily, treasured for years, and passed down as heirlooms.
              </p>
            </div>
            
            <Link to="/about" className="inline-block mt-8 text-sm tracking-[0.05em] border-b border-velmora-ink pb-0.5 hover:text-velmora-gold hover:border-velmora-gold transition-colors">
              Read Our Story →
            </Link>
          </div>
        </div>
      </section>

      {/* 8. Testimonials */}
      <section className="bg-velmora-surface py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <span className="text-xs tracking-[0.15em] text-velmora-muted uppercase">Kind Words</span>
            <h2 className="font-serif-custom text-4xl mt-1">From Our Community</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {testimonials.map((t, i) => (
              <div key={i} className="testimonial">
                <div className="stars flex gap-0.5 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-sm leading-relaxed mb-4">"{t.text}"</p>
                <p className="text-xs tracking-[0.05em] text-velmora-muted">— {t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Newsletter */}
      <section className="newsletter py-16">
        <div className="max-w-md mx-auto px-6 text-center">
          <h2 className="font-serif-custom text-3xl mb-3">Join for 10% off</h2>
          <p className="text-white/70 text-sm mb-8">
            Be the first to know about new arrivals, exclusive offers, and styling tips.
          </p>
          
          <form 
            onSubmit={(e) => {
              e.preventDefault();
              const email = e.target.email.value;
              if (email) {
                alert(`Thank you! 10% off code sent to ${email}`);
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
              className="flex-1 bg-white/10 border border-white/30 px-4 py-3 text-sm placeholder:text-white/50 focus:outline-none focus:border-white/60"
            />
            <button type="submit" className="btn btn-primary whitespace-nowrap">
              Subscribe
            </button>
          </form>
          <p className="text-[10px] text-white/50 mt-3 tracking-[0.05em]">We respect your inbox. Unsubscribe anytime.</p>
        </div>
      </section>

      {/* 10. Footer is in Layout */}
    </div>
  );
};

export default Home;
