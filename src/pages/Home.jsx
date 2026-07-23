import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

const Home = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);

  const bestsellers = products;

  const ugcItems = [
    { id: 1, image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&q=80", caption: "My everyday staple" },
    { id: 2, image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&q=80", caption: "Gifted to myself" },
    { id: 3, image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&q=80", caption: "Perfect for date night" },
    { id: 4, image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80", caption: "Worn for my wedding" },
    { id: 5, image: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=400&q=80", caption: "My mother's favorite" },
  ];

  const categories = [
    { name: "Earrings", slug: "Earrings", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80" },
    { name: "Necklaces", slug: "Necklaces", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80" },
    { name: "Huggies", slug: "Huggies", image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&q=80" },
  ];

  const testimonials = [
    { id: 1, text: "The quality is exceptional. I've worn my huggies every day for six months and they still look brand new.", author: "Sarah M." },
    { id: 2, text: "Bought the Royal Heirloom Set as a gift for my sister. She cried. Best purchase I've made this year.", author: "Elena R." },
    { id: 3, text: "Finally, jewelry that doesn't turn my skin green. The gold tone is so rich and warm. I'm obsessed.", author: "Maya K." },
  ];

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (newsletterEmail) {
      setNewsletterSubmitted(true);
      setTimeout(() => {
        setNewsletterSubmitted(false);
        setNewsletterEmail('');
      }, 2000);
    }
  };

  return (
    <div>
      {/* 1. Hero */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[#2C2522]">
          <img 
            src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=2000&q=80" 
            alt="Velmora Fine Jewelry - Woman wearing gold jewelry"
            className="absolute inset-0 w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="heading-serif text-5xl md:text-7xl text-white mb-6 tracking-[-0.02em]">
            Crafted to be Treasured
          </h1>
          <p className="text-white/90 text-lg md:text-xl mb-8 max-w-md mx-auto">
            Demi-fine jewelry for the woman who values quiet luxury.
          </p>
          <Link to="/shop" className="btn btn-primary inline-block">
            Shop the Collection
          </Link>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="w-px h-12 bg-white/40" />
        </div>
      </section>

      {/* 2. Trust Bar */}
      <div className="trust-bar border-b border-[#D4C9B9] py-4">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-center">
            <span>Free Worldwide Shipping</span>
            <span className="hidden sm:inline text-[#D4C9B9]">·</span>
            <span>30-Day Returns</span>
            <span className="hidden sm:inline text-[#D4C9B9]">·</span>
            <span>18K Gold Plated</span>
            <span className="hidden sm:inline text-[#D4C9B9]">·</span>
            <span>Hypoallergenic</span>
          </div>
        </div>
      </div>

      {/* 3. Bestsellers */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <span className="text-xs tracking-[0.2em] uppercase text-[#8B7355]">Curated for you</span>
            <h2 className="heading-serif text-4xl mt-1">Bestsellers</h2>
          </div>
          <Link to="/shop" className="hidden md:block text-sm tracking-[0.1em] uppercase hover:text-[#8B7355]">
            View All →
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-8 md:hidden">
          <Link to="/shop" className="text-sm tracking-[0.1em] uppercase hover:text-[#8B7355]">
            View All →
          </Link>
        </div>
      </section>

      {/* 4. UGC Reel Row */}
      <section className="bg-[#F1EDE6] py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-10">
            <span className="text-xs tracking-[0.2em] uppercase text-[#8B7355]">As seen on you</span>
            <h2 className="heading-serif text-4xl mt-1">Real Moments</h2>
          </div>

          <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
            {ugcItems.map((item) => (
              <div key={item.id} className="ugc-card snap-start">
                <img src={item.image} alt={item.caption} />
                <div className="ugc-overlay">
                  <p className="ugc-caption">{item.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Shop by Category */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <div className="mb-10">
          <span className="text-xs tracking-[0.2em] uppercase text-[#8B7355]">Find your piece</span>
          <h2 className="heading-serif text-4xl mt-1">Shop by Category</h2>
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
                <span>{cat.name}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 6. Brand Story */}
      <section className="bg-[#F1EDE6]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2">
          <div className="aspect-[4/3] md:aspect-auto overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=1200&q=80" 
              alt="Velmora atelier - hands crafting jewelry"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex items-center p-8 md:p-16 lg:p-20">
            <div>
              <span className="text-xs tracking-[0.2em] uppercase text-[#8B7355]">Since 2018</span>
              <h2 className="heading-serif text-4xl mt-2 mb-6">Our Story</h2>
              <div className="space-y-4 text-[#6B6058] leading-relaxed">
                <p>
                  Velmora was born from a simple belief: that beautiful jewelry should be accessible, 
                  not exclusive. We design demi-fine pieces that feel like heirlooms from the first wear.
                </p>
                <p>
                  Each piece is crafted with 18K gold plating over solid brass, set with carefully 
                  selected crystals. Hypoallergenic, tarnish-resistant, and made to last.
                </p>
              </div>
              <Link to="/about" className="inline-block mt-8 text-sm tracking-[0.1em] uppercase border-b border-[#8B7355] pb-0.5 hover:text-[#8B7355]">
                Read More About Us →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Testimonials */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <div className="mb-10 text-center">
          <span className="text-xs tracking-[0.2em] uppercase text-[#8B7355]">Kind words</span>
          <h2 className="heading-serif text-4xl mt-1">From Our Community</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {testimonials.map((t) => (
            <div key={t.id} className="testimonial">
              <div className="testimonial-stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="inline" fill="currentColor" />
                ))}
              </div>
              <p className="testimonial-text">"{t.text}"</p>
              <p className="testimonial-author">— {t.author}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 8. Newsletter */}
      <section className="newsletter py-16 md:py-20">
        <div className="max-w-xl mx-auto px-6 text-center">
          <h2 className="heading-serif text-3xl md:text-4xl text-white mb-3">Join for 10% off</h2>
          <p className="text-white/80 mb-8">Be the first to know about new arrivals and exclusive offers.</p>
          
          {newsletterSubmitted ? (
            <p className="text-white text-lg">Thank you. Welcome to the circle.</p>
          ) : (
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="Your email address"
                className="input flex-1"
                required
              />
              <button type="submit" className="btn btn-outline border-white text-white hover:bg-white hover:text-[#8B7355]">
                Subscribe
              </button>
            </form>
          )}
          <p className="text-white/50 text-xs mt-4 tracking-wide">We respect your inbox. Unsubscribe anytime.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
