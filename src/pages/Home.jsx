import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import UGCRow from '../components/UGCRow';
import { products } from '../data/products';

const Home = () => {
  // Show 5 bestsellers (all products for now, could be curated)
  const bestsellers = products.slice(0, 5);

  const testimonials = [
    {
      id: 1,
      text: "The most beautiful jewelry I've ever owned. Worn daily for months and still looks brand new.",
      name: "Elena M.",
      rating: 5,
    },
    {
      id: 2,
      text: "Bought the Royal Heirloom Set as a gift for my sister. She hasn't taken it off since.",
      name: "Sofia R.",
      rating: 5,
    },
    {
      id: 3,
      text: "The quality is exceptional for the price. My new go-to for meaningful gifts.",
      name: "Aisha K.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* 1. HERO */}
      <section className="relative h-[100dvh] min-h-[620px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[#1A1816]">
          <img
            src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1600&q=85"
            alt="Velmora Fine Jewelry — Warm gold jewelry on model"
            className="absolute inset-0 w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-3xl">
          <h1 className="heading-serif text-white text-5xl md:text-6xl lg:text-7xl tracking-[-0.02em] leading-[1.05]">
            Crafted to be<br />Treasured
          </h1>
          <p className="mt-6 text-white/90 text-lg md:text-xl max-w-md mx-auto">
            Demi-fine gold jewelry for the moments that matter.
          </p>
          <Link 
            to="/shop" 
            className="btn btn-primary mt-8 inline-block"
          >
            Shop the Collection
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 text-xs tracking-[0.2em] uppercase hidden md:block">
          Scroll to explore
        </div>
      </section>

      {/* 2. TRUST BAR */}
      <div className="trust-bar py-4 border-b border-[#D9D2C8] bg-white">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center items-center gap-x-8 gap-y-2 text-center">
          <span>Free Worldwide Shipping</span>
          <span className="hidden sm:inline text-[#D9D2C8]">·</span>
          <span>30-Day Returns</span>
          <span className="hidden sm:inline text-[#D9D2C8]">·</span>
          <span>18K Gold Plated</span>
          <span className="hidden sm:inline text-[#D9D2C8]">·</span>
          <span>Hypoallergenic</span>
        </div>
      </div>

      {/* 3. BESTSELLERS */}
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-12">
        <div className="flex items-end justify-between mb-8">
          <div>
            <span className="text-xs tracking-[0.12em] uppercase text-[#B89778]">Discover</span>
            <h2 className="heading-serif text-3xl md:text-4xl mt-1">Bestsellers</h2>
          </div>
          <Link to="/shop" className="hidden md:block text-sm tracking-[0.06em] uppercase hover:text-[#B89778] transition-colors">
            View All →
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Link to="/shop" className="text-sm tracking-[0.06em] uppercase hover:text-[#B89778]">
            View All →
          </Link>
        </div>
      </section>

      {/* 4. UGC REEL ROW */}
      <section className="bg-[#F1EDE6] py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <span className="text-xs tracking-[0.12em] uppercase text-[#B89778]">As Seen On</span>
              <h3 className="heading-serif text-2xl mt-1">Real Moments</h3>
            </div>
          </div>
          <UGCRow />
        </div>
      </section>

      {/* 5. SHOP BY CATEGORY */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-10">
          <span className="text-xs tracking-[0.12em] uppercase text-[#B89778]">Find Your Piece</span>
          <h2 className="heading-serif text-3xl md:text-4xl mt-2">Shop by Category</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { label: "Earrings", category: "Earrings", img: "https://images.unsplash.com/photo-1535632787350-4e68b0f247b2?w=800&q=80" },
            { label: "Necklaces", category: "Necklaces", img: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80" },
            { label: "Huggies", category: "Huggies", img: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80" },
          ].map((cat) => (
            <Link 
              key={cat.label} 
              to={`/shop?category=${cat.category}`}
              className="category-tile aspect-[16/10] md:aspect-[4/3] rounded-sm overflow-hidden block"
            >
              <img src={cat.img} alt={cat.label} className="w-full h-full object-cover" />
              <div className="overlay" />
              <div className="label">{cat.label}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* 6. BRAND STORY */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            <div className="aspect-[4/3] bg-[#F1EDE6] overflow-hidden rounded-sm">
              <img 
                src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=900&q=80" 
                alt="Velmora atelier — hands crafting fine jewelry" 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <span className="text-xs tracking-[0.12em] uppercase text-[#B89778]">Since 2019</span>
              <h2 className="heading-serif text-4xl md:text-5xl mt-3 leading-none">Our Story</h2>
              <div className="mt-6 text-[#6B635C] text-[15px] leading-relaxed space-y-4">
                <p>
                  Velmora was born from a simple belief: that beautiful jewelry should be accessible, 
                  not exclusive. We design demi-fine pieces that feel like heirlooms — crafted with 
                  intention, meant to be worn every day.
                </p>
                <p>
                  Each piece is plated in 18K gold over hypoallergenic brass, designed in our 
                  studio and brought to life by artisans who share our commitment to quiet luxury.
                </p>
              </div>
              <Link to="/about" className="btn btn-gold mt-8 inline-block">
                Read Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 7. TESTIMONIALS */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-10">
          <span className="text-xs tracking-[0.12em] uppercase text-[#B89778]">In Their Words</span>
          <h2 className="heading-serif text-3xl md:text-4xl mt-2">Loved by You</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.id} className="testimonial">
              <div className="stars flex mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="text-[#6B635C] leading-relaxed">"{t.text}"</p>
              <p className="mt-4 text-sm tracking-wide">— {t.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 8. NEWSLETTER */}
      <section className="newsletter py-16">
        <div className="max-w-md mx-auto px-6 text-center">
          <h3 className="heading-serif text-3xl text-white">Join for 10% off</h3>
          <p className="mt-3 text-white/70 text-sm">Be the first to know about new arrivals and private events.</p>
          
          <form 
            onSubmit={(e) => {
              e.preventDefault();
              const email = e.target.email.value;
              if (email) {
                alert(`Thank you. A 10% code has been sent to ${email}.`);
                e.target.reset();
              }
            }}
            className="mt-6 flex flex-col sm:flex-row gap-3"
          >
            <input 
              type="email" 
              name="email"
              required
              placeholder="Your email address" 
              className="input flex-1 text-sm"
            />
            <button type="submit" className="btn btn-primary whitespace-nowrap">
              Subscribe
            </button>
          </form>
          <p className="text-[10px] text-white/50 mt-3 tracking-wide">We respect your inbox. Unsubscribe anytime.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
