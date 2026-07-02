import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { products } from '../data/products';
import { formatPrice } from '../lib/utils';
import ProductCard from '../components/ProductCard';

function Home() {
  const bestsellers = products.slice(0, 5);

  // UGC-style images (using jewelry on models)
  const ugcItems = [
    { id: 1, image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&q=80", caption: "My everyday staple" },
    { id: 2, image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=80", caption: "Gifted to myself" },
    { id: 3, image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=80", caption: "Wedding day sparkle" },
    { id: 4, image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=600&q=80", caption: "Layering goals" },
    { id: 5, image: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=600&q=80", caption: "Timeless elegance" },
  ];

  const testimonials = [
    { name: "Elena M.", text: "The quality is exceptional. I've worn my huggies every day for six months and they still look brand new.", rating: 5 },
    { name: "Sofia R.", text: "Bought the Royal Heirloom Set as a gift for my sister. She cried. Worth every penny.", rating: 5 },
    { name: "Aisha K.", text: "Finally found jewelry that doesn't irritate my sensitive skin. The gold is so warm and beautiful.", rating: 5 },
  ];

  return (
    <div className="pt-20">
      {/* 1. HERO */}
      <section className="relative h-[92vh] min-h-[620px] flex items-center justify-center overflow-hidden bg-base-950">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=2000&q=85" 
            alt="Velmora Fine Jewelry - Woman wearing elegant gold necklace"
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="hero-headline font-serif text-5xl md:text-6xl lg:text-7xl text-white tracking-[0.02em] leading-[1.05] mb-6">
            Crafted to be<br />Treasured
          </h1>
          <p className="text-white/90 text-lg md:text-xl mb-8 max-w-md mx-auto">
            Demi-fine gold jewelry for the woman who values quiet luxury.
          </p>
          <Link 
            to="/shop" 
            className="btn-premium btn-premium-solid inline-block px-10 py-3.5 text-sm tracking-[0.1em]"
          >
            SHOP THE COLLECTION
          </Link>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 text-xs tracking-[0.2em]">
          SCROLL TO EXPLORE
        </div>
      </section>

      {/* 2. TRUST BAR */}
      <div className="border-b border-gold-400 bg-base-50 py-3.5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-2 text-xs tracking-[0.1em] text-muted text-center">
            <span>FREE WORLDWIDE SHIPPING</span>
            <span className="hidden sm:inline text-gold-400">·</span>
            <span>30-DAY RETURNS</span>
            <span className="hidden sm:inline text-gold-400">·</span>
            <span>18K GOLD PLATED</span>
            <span className="hidden sm:inline text-gold-400">·</span>
            <span>HYPOALLERGENIC</span>
          </div>
        </div>
      </div>

      {/* 3. BESTSELLERS */}
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-12">
        <div className="flex items-end justify-between mb-8">
          <div>
            <div className="text-xs tracking-[0.15em] text-gold-600 mb-1">DISCOVER</div>
            <h2 className="font-serif text-4xl tracking-[0.02em]">Bestsellers</h2>
          </div>
          <Link to="/shop" className="hidden sm:block text-sm text-muted hover:text-gold-600 transition-colors tracking-[0.05em]">
            VIEW ALL →
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-5">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} showQuickAdd />
          ))}
        </div>

        <div className="text-center mt-8 sm:hidden">
          <Link to="/shop" className="text-sm text-muted hover:text-gold-600">VIEW ALL →</Link>
        </div>
      </section>

      {/* 4. UGC REEL-STYLE ROW */}
      <section className="bg-base-100 py-12 border-y border-gold-400">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <div className="text-xs tracking-[0.15em] text-gold-600 mb-1">AS SEEN ON</div>
              <h3 className="font-serif text-2xl tracking-[0.02em]">Real Moments</h3>
            </div>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-sm text-muted hover:text-gold-600 hidden sm:block">
              @VELMORA →
            </a>
          </div>

          <div className="reel-scroll flex gap-3 overflow-x-auto pb-2 snap-x snap-mandatory">
            {ugcItems.map((item) => (
              <div key={item.id} className="ugc-card flex-shrink-0 w-[160px] sm:w-[180px] snap-start">
                <div className="relative aspect-[9/16] rounded-lg overflow-hidden bg-base-900">
                  <img 
                    src={item.image} 
                    alt={item.caption}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                    <p className="text-white text-xs font-serif tracking-wide">"{item.caption}"</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SHOP BY CATEGORY */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-10">
          <div className="text-xs tracking-[0.15em] text-gold-600 mb-1">EXPLORE</div>
          <h2 className="font-serif text-4xl tracking-[0.02em]">Shop by Category</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { name: "Earrings", path: "/shop?category=Earrings", img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=900&q=80" },
            { name: "Necklaces", path: "/shop?category=Necklaces", img: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=900&q=80" },
            { name: "Huggies", path: "/shop?category=Huggies", img: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=900&q=80" },
          ].map((cat) => (
            <Link key={cat.name} to={cat.path} className="category-tile group block aspect-[16/10] rounded-lg overflow-hidden">
              <img src={cat.img} alt={cat.name} className="w-full h-full object-cover" />
              <div className="overlay absolute inset-0 bg-black/40 flex items-center justify-center">
                <span className="text-white font-serif text-3xl tracking-[0.08em] group-hover:text-gold-400 transition-colors">
                  {cat.name}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 6. BRAND STORY */}
      <section className="bg-base-100 border-y border-gold-400">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2">
          <div className="aspect-[4/3] md:aspect-auto overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1200&q=80" 
              alt="Velmora atelier" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="px-8 py-12 md:px-12 md:py-16 flex flex-col justify-center">
            <div className="text-xs tracking-[0.15em] text-gold-600 mb-2">EST. 2018</div>
            <h2 className="font-serif text-4xl tracking-[0.02em] mb-6">Our Story</h2>
            <div className="text-muted leading-relaxed space-y-4 text-[15px]">
              <p>
                Velmora was born from a desire to create jewelry that feels personal, not performative. 
                Each piece is designed in our New York studio and crafted with 18K gold plating over 
                hypoallergenic brass.
              </p>
              <p>
                We believe the most meaningful pieces are the ones you reach for every day — the ones 
                that become part of your story.
              </p>
            </div>
            <Link to="/about" className="mt-8 inline-block text-sm tracking-[0.08em] text-gold-600 hover:text-gold-700">
              READ MORE ABOUT US →
            </Link>
          </div>
        </div>
      </section>

      {/* 7. TESTIMONIALS */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="text-center mb-10">
          <div className="text-xs tracking-[0.15em] text-gold-600 mb-1">LOVED BY MANY</div>
          <h2 className="font-serif text-4xl tracking-[0.02em]">What Our Customers Say</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="border border-gold-400 p-6 rounded">
              <div className="flex gap-0.5 mb-4 text-gold-600">
                {Array.from({ length: t.rating }).map((_, idx) => (
                  <Star key={idx} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="text-[15px] leading-relaxed mb-4">"{t.text}"</p>
              <div className="text-sm text-muted">— {t.name}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. NEWSLETTER */}
      <section className="bg-base-950 text-base-50 py-14">
        <div className="max-w-md mx-auto px-6 text-center">
          <div className="font-serif text-3xl tracking-[0.02em] mb-3">Join for 10% off</div>
          <p className="text-white/70 text-sm mb-6">Be the first to know about new arrivals, private sales, and styling stories.</p>
          
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
              required
              placeholder="Your email address"
              className="newsletter-input flex-1 px-4 py-3 text-sm text-base-900 placeholder:text-muted rounded"
            />
            <button 
              type="submit"
              className="btn-premium btn-premium-solid px-8 py-3 text-sm tracking-[0.08em] whitespace-nowrap"
            >
              SUBSCRIBE
            </button>
          </form>
          <p className="text-[10px] text-white/50 mt-3 tracking-wide">We respect your inbox. Unsubscribe anytime.</p>
        </div>
      </section>
    </div>
  );
}

export default Home;