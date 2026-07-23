import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import UGCRow from '../components/UGCRow';
import StarRating from '../components/StarRating';

const Home = () => {
  // Select 5 bestsellers (first 5 products)
  const bestsellers = products.slice(0, 5);

  const categories = [
    { name: 'Earrings', slug: 'Earrings', img: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&h=600&fit=crop' },
    { name: 'Necklaces', slug: 'Necklaces', img: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=600&fit=crop' },
    { name: 'Huggies', slug: 'Huggies', img: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&h=600&fit=crop' },
  ];

  const testimonials = [
    { name: 'Elena M.', text: 'The quality is exceptional. I wear my huggies every day and they still look brand new.', rating: 5 },
    { name: 'Sofia R.', text: 'Bought the Royal Heirloom Set as a gift for my sister. She cried. Worth every penny.', rating: 5 },
    { name: 'Aisha K.', text: 'Finally found jewelry that doesn\'t irritate my skin. The gold tone is so warm and beautiful.', rating: 5 },
  ];

  return (
    <div>
      {/* 1. HERO */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center bg-[#2C2825] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=2000&h=1200&fit=crop" 
            alt="Velmora Fine Jewelry — Warm lit gold jewelry on model"
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-3xl">
          <h1 className="text-white text-5xl md:text-6xl mb-6 tracking-[-0.02em]">
            Crafted to be Treasured
          </h1>
          <p className="text-white/90 text-lg mb-10 max-w-md mx-auto">
            Demi-fine gold jewelry for the woman who values quiet luxury.
          </p>
          <Link to="/shop" className="btn btn-primary inline-block">
            Shop the Collection
          </Link>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 text-xs tracking-[0.2em] uppercase">
          Scroll to Explore
        </div>
      </section>

      {/* 2. TRUST BAR */}
      <div className="trust-bar border-b border-[#E5DFD6] py-4">
        <div className="container flex flex-wrap justify-center gap-x-8 gap-y-2 text-center">
          <span>Free Worldwide Shipping</span>
          <span className="hidden md:inline">·</span>
          <span>30-Day Returns</span>
          <span className="hidden md:inline">·</span>
          <span>18K Gold Plated</span>
          <span className="hidden md:inline">·</span>
          <span>Hypoallergenic</span>
        </div>
      </div>

      {/* 3. BESTSELLERS */}
      <section className="py-20">
        <div className="container">
          <div className="flex items-end justify-between mb-10">
            <div>
              <div className="text-xs tracking-[0.15em] uppercase text-[#6B6560] mb-2">Signature Pieces</div>
              <h2>Bestsellers</h2>
            </div>
            <Link to="/shop" className="text-sm text-[#B8976E] hover:underline hidden md:block">
              View All →
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            {bestsellers.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-8 md:hidden">
            <Link to="/shop" className="text-sm text-[#B8976E]">View All →</Link>
          </div>
        </div>
      </section>

      {/* 4. UGC REEL ROW */}
      <section className="py-12 bg-white border-y border-[#E5DFD6]">
        <div className="container">
          <div className="flex items-center justify-between mb-6">
            <div>
              <div className="text-xs tracking-[0.15em] uppercase text-[#6B6560] mb-1">As Seen On You</div>
              <h2 className="text-2xl">Real Moments</h2>
            </div>
          </div>
          <UGCRow />
        </div>
      </section>

      {/* 5. SHOP BY CATEGORY */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <div className="text-xs tracking-[0.15em] uppercase text-[#6B6560] mb-2">Find Your Piece</div>
            <h2>Shop by Category</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {categories.map((cat) => (
              <Link 
                key={cat.slug} 
                to={`/shop?category=${cat.slug}`}
                className="category-tile group"
              >
                <img src={cat.img} alt={cat.name} />
                <div className="category-tile-label group-hover:opacity-100">
                  {cat.name}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 6. BRAND STORY */}
      <section className="py-16 border-t border-[#E5DFD6]">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="aspect-[4/3] bg-[#F5F2ED] overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=900&h=700&fit=crop" 
                alt="Velmora atelier — artisan hands working with gold jewelry"
                className="w-full h-full object-cover"
              />
            </div>
            
            <div>
              <div className="text-xs tracking-[0.15em] uppercase text-[#6B6560] mb-3">Since 2018</div>
              <h2 className="mb-6">Our Story</h2>
              <div className="body-text text-[#6B6560] space-y-4 mb-8">
                <p>
                  Velmora was born from a simple belief: that fine jewelry should be accessible, 
                  not exclusive. We design demi-fine pieces that feel like heirlooms — timeless, 
                  wearable, and made to last.
                </p>
                <p>
                  Each piece is crafted with 18K gold plating over hypoallergenic brass, 
                  set with carefully selected crystals. We believe in quiet luxury: 
                  the kind you notice on yourself, not the kind that announces itself.
                </p>
              </div>
              <Link to="/about" className="btn btn-gold-outline">
                Read Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 7. TESTIMONIALS */}
      <section className="py-20 bg-white border-y border-[#E5DFD6]">
        <div className="container">
          <div className="text-center mb-12">
            <div className="text-xs tracking-[0.15em] uppercase text-[#6B6560] mb-2">Kind Words</div>
            <h2>From Our Community</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="text-center px-4">
                <StarRating rating={t.rating} size={16} />
                <p className="mt-4 mb-4 text-[#6B6560] italic">"{t.text}"</p>
                <p className="text-sm tracking-[0.05em] text-[#2C2825]">— {t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. NEWSLETTER */}
      <section className="newsletter py-16">
        <div className="container max-w-lg text-center">
          <h2 className="text-white mb-3">Join for 10% off your first order</h2>
          <p className="text-white/70 mb-8 text-sm">
            Be the first to know about new arrivals, private sales, and styling stories.
          </p>
          
          <form 
            onSubmit={(e) => {
              e.preventDefault();
              const email = e.target.email.value;
              if (email) {
                alert(`Thank you! 10% off code sent to ${email} (demo)`);
                e.target.reset();
              }
            }}
            className="flex flex-col sm:flex-row gap-3"
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
          <p className="text-white/50 text-xs mt-4">We respect your inbox. Unsubscribe anytime.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
