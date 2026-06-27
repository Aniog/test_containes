import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import Button from '../components/ui/Button';
import { products } from '../data/products';

const Home = () => {
  // Bestsellers: first 5 products
  const bestsellers = products.slice(0, 5);

  // UGC mock data - vertical reel style
  const ugcItems = [
    { id: 1, caption: "My everyday staple", img: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400&q=80" },
    { id: 2, caption: "Gifted to myself", img: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&q=80" },
    { id: 3, caption: "Wedding day details", img: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=400&q=80" },
    { id: 4, caption: "Layering goals", img: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&q=80" },
    { id: 5, caption: "Golden hour glow", img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80" },
  ];

  const testimonials = [
    { name: "Elena M.", text: "The quality is exceptional. I wear my huggies every day and they still look brand new." },
    { name: "Sofia R.", text: "Bought the Royal Heirloom Set as a gift for my sister. She cried. Worth every penny." },
    { name: "Aisha K.", text: "Finally found jewelry that doesn't irritate my skin. The gold tone is so warm and beautiful." },
  ];

  return (
    <div className="bg-[#F8F5F1]">
      {/* 1. HERO */}
      <section className="relative h-[92vh] min-h-[620px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[#1C1917]">
          <img 
            src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1600&q=80" 
            alt="Velmora Fine Jewelry - Warm lit gold jewelry on model"
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-3xl">
          <h1 className="font-serif text-5xl md:text-6xl text-white tracking-[-0.02em] mb-6">
            Crafted to be Treasured
          </h1>
          <p className="text-white/90 text-lg md:text-xl mb-10 max-w-md mx-auto">
            Demi-fine gold jewelry for the woman who values quiet luxury.
          </p>
          <Link to="/shop">
            <Button variant="primary" className="bg-white text-[#1C1917] hover:bg-[#F8F5F1] border-white">
              Shop the Collection
            </Button>
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/60 text-xs tracking-[0.2em]">
          SCROLL TO EXPLORE
        </div>
      </section>

      {/* 2. TRUST BAR */}
      <div className="trust-bar border-b border-[#E5E0D8] py-4">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-x-8 gap-y-2 text-center">
          <span>Free Worldwide Shipping</span>
          <span className="hidden sm:inline text-[#E5E0D8]">·</span>
          <span>30-Day Returns</span>
          <span className="hidden sm:inline text-[#E5E0D8]">·</span>
          <span>18K Gold Plated</span>
          <span className="hidden sm:inline text-[#E5E0D8]">·</span>
          <span>Hypoallergenic</span>
        </div>
      </div>

      {/* 3. BESTSELLERS */}
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-12">
        <div className="flex items-end justify-between mb-8">
          <h2 className="section-title">Bestsellers</h2>
          <Link to="/shop" className="text-sm tracking-[0.1em] text-[#5C5752] hover:text-[#B89778] hidden sm:block">
            VIEW ALL →
          </Link>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="text-center mt-8 sm:hidden">
          <Link to="/shop" className="text-sm tracking-[0.1em] text-[#5C5752]">VIEW ALL →</Link>
        </div>
      </section>

      {/* 4. UGC REEL-STYLE ROW */}
      <section className="bg-[#F5F2ED] py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="section-title text-xl md:text-2xl">As Seen On You</h2>
            <span className="text-xs tracking-[0.15em] text-[#8A8178] hidden md:block">INSTAGRAM @VELMORA</span>
          </div>
          
          <div className="ugc-scroll">
            {ugcItems.map((item) => (
              <div key={item.id} className="ugc-card">
                <img src={item.img} alt={item.caption} />
                <div className="ugc-caption">{item.caption}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SHOP BY CATEGORY */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="section-title mb-8 text-center">Shop by Category</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { label: 'Earrings', category: 'Earrings', img: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80' },
            { label: 'Necklaces', category: 'Necklaces', img: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80' },
            { label: 'Huggies', category: 'Huggies', img: 'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80' },
          ].map((cat) => (
            <Link 
              key={cat.label} 
              to={`/shop?category=${cat.category}`}
              className="category-tile group"
            >
              <img src={cat.img} alt={cat.label} />
              <div className="category-overlay">
                <span className="category-label">{cat.label}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 6. BRAND STORY */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="aspect-[4/3] bg-[#F5F2ED] overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=900&q=80" 
              alt="Velmora craftsmanship" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="max-w-lg">
            <h2 className="section-title mb-6">Our Story</h2>
            <div className="body-text text-[#5C5752] space-y-4 text-[15px]">
              <p>
                Velmora was born from a simple belief: that beautiful jewelry should be worn every day, 
                not saved for special occasions.
              </p>
              <p>
                We design demi-fine pieces in 18K gold plate that feel as precious as solid gold, 
                but accessible enough to become part of your daily ritual.
              </p>
            </div>
            <Link to="/about" className="inline-block mt-6 text-sm tracking-[0.1em] text-[#B89778] hover:text-[#8C6F4E]">
              READ OUR STORY →
            </Link>
          </div>
        </div>
      </section>

      {/* 7. TESTIMONIALS */}
      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="section-title text-center mb-12">What Our Customers Say</h2>
          
          <div className="grid md:grid-cols-3 gap-4">
            {testimonials.map((t, i) => (
              <div key={i} className="testimonial">
                <div className="stars mb-4">★★★★★</div>
                <p className="text-[#5C5752] text-[15px] leading-relaxed mb-6">"{t.text}"</p>
                <p className="text-sm tracking-[0.05em] text-[#1C1917]">— {t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. NEWSLETTER */}
      <section className="newsletter-block py-16">
        <div className="max-w-md mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl text-white mb-3 tracking-[-0.01em]">Join for 10% off</h2>
          <p className="text-white/70 text-sm mb-8">Be the first to know about new arrivals and private events.</p>
          
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
              required
              className="input flex-1"
            />
            <Button variant="primary" type="submit" className="bg-[#B89778] hover:bg-[#8C6F4E] border-[#B89778]">
              Subscribe
            </Button>
          </form>
          <p className="text-[10px] text-white/50 mt-4 tracking-[0.05em]">We respect your inbox. Unsubscribe anytime.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;