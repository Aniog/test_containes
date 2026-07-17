import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import StarRating from '../components/ui/StarRating';

const Home = () => {
  const bestsellers = products.slice(0, 5);

  const ugcItems = [
    { id: 1, image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=600&q=80", caption: "Morning light" },
    { id: 2, image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=80", caption: "Golden hour" },
    { id: 3, image: "https://images.unsplash.com/photo-1506634572416-48cdfe530110?w=600&q=80", caption: "Everyday elegance" },
    { id: 4, image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&q=80", caption: "Soft details" },
    { id: 5, image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&q=80", caption: "Treasured moments" },
  ];

  const categories = [
    { name: "Earrings", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80", slug: "Earrings" },
    { name: "Necklaces", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80", slug: "Necklaces" },
    { name: "Huggies", image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80", slug: "Huggies" },
  ];

  const testimonials = [
    { name: "Elena M.", text: "The quality is exceptional. I've worn my huggies every day for six months and they still look brand new.", rating: 5 },
    { name: "Sofia R.", text: "Bought the Flora Nectar for my sister's birthday. She hasn't taken it off since. Beautiful packaging too.", rating: 5 },
    { name: "Aisha K.", text: "Finally found jewelry that doesn't irritate my skin. The gold tone is so warm and rich. Will be back for more.", rating: 5 },
  ];

  return (
    <div className="pt-20">
      {/* 1. HERO */}
      <section className="relative h-[92vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[#2C2522]">
          <img
            src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=2000&q=90"
            alt="Velmora Fine Jewelry"
            className="absolute inset-0 w-full h-full object-cover opacity-75"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="serif text-white text-5xl md:text-7xl tracking-[0.05em] mb-6">
            Crafted to be Treasured
          </h1>
          <p className="text-white/90 text-lg md:text-xl mb-10 max-w-md mx-auto">
            Demi-fine jewelry for the woman who values quiet luxury.
          </p>
          <Link to="/shop" className="btn btn-gold inline-block">
            SHOP THE COLLECTION
          </Link>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/60 text-xs tracking-[0.2em]">
          SCROLL TO EXPLORE
        </div>
      </section>

      {/* 2. TRUST BAR */}
      <div className="border-b border-velmora-border bg-velmora-surface py-4">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-x-8 gap-y-2 text-xs tracking-[0.1em] text-velmora-text-muted text-center">
            <span>FREE WORLDWIDE SHIPPING</span>
            <span className="hidden md:inline">·</span>
            <span>30-DAY RETURNS</span>
            <span className="hidden md:inline">·</span>
            <span>18K GOLD PLATED</span>
            <span className="hidden md:inline">·</span>
            <span>HYPOALLERGENIC</span>
          </div>
        </div>
      </div>

      {/* 3. BESTSELLERS */}
      <section className="max-w-7xl mx-auto px-6 pt-20 pb-16">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-xs tracking-[0.15em] text-velmora-accent mb-2">CURATED FOR YOU</p>
            <h2 className="serif text-4xl tracking-[0.02em]">Bestsellers</h2>
          </div>
          <Link to="/shop" className="hidden md:block text-sm underline hover:text-velmora-accent">
            VIEW ALL
          </Link>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-5 gap-y-12">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="text-center mt-10 md:hidden">
          <Link to="/shop" className="text-sm underline">VIEW ALL</Link>
        </div>
      </section>

      {/* 4. UGC REEL ROW */}
      <section className="bg-velmora-surface py-16 border-y border-velmora-border">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs tracking-[0.15em] text-velmora-accent mb-2">AS SEEN ON YOU</p>
          <h2 className="serif text-3xl mb-8">Moments in Gold</h2>
          
          <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
            {ugcItems.map((item) => (
              <div key={item.id} className="ugc-card w-[160px] md:w-[180px] aspect-[9/16] rounded-sm overflow-hidden snap-start">
                <img src={item.image} alt={item.caption} className="w-full h-full object-cover" />
                <div className="ugc-caption">
                  <p className="serif text-sm tracking-wide">{item.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SHOP BY CATEGORY */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.15em] text-velmora-accent mb-2">DISCOVER</p>
          <h2 className="serif text-4xl">Shop by Category</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {categories.map((cat) => (
            <Link
              key={cat.name}
              to={`/shop?category=${cat.slug}`}
              className="category-tile group block aspect-[16/10] overflow-hidden rounded-sm"
            >
              <img src={cat.image} alt={cat.name} className="w-full h-full object-cover" />
              <div className="category-label">
                <span className="serif text-2xl tracking-[0.05em]">{cat.name}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 6. BRAND STORY */}
      <section className="bg-velmora-surface border-y border-velmora-border">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2">
          <div className="aspect-[4/3] md:aspect-auto overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=1200&q=80"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="px-8 md:px-16 py-16 md:py-20 flex flex-col justify-center">
            <p className="text-xs tracking-[0.15em] text-velmora-accent mb-3">SINCE 2019</p>
            <h2 className="serif text-4xl mb-6">Our Story</h2>
            <div className="text-velmora-text-muted leading-relaxed space-y-4 text-[15px]">
              <p>
                Velmora was born from a simple belief: that beautiful jewelry should be worn every day, 
                not saved for special occasions.
              </p>
              <p>
                We craft demi-fine pieces in 18K gold plate over sterling silver — substantial enough 
                to feel precious, light enough to never take off.
              </p>
            </div>
            <Link to="/about" className="mt-8 inline-block text-sm underline hover:text-velmora-accent">
              READ MORE ABOUT US →
            </Link>
          </div>
        </div>
      </section>

      {/* 7. TESTIMONIALS */}
      <section className="max-w-5xl mx-auto px-6 py-20 text-center">
        <p className="text-xs tracking-[0.15em] text-velmora-accent mb-2">WORDS FROM OUR COMMUNITY</p>
        <h2 className="serif text-3xl mb-14">What Our Customers Say</h2>

        <div className="grid md:grid-cols-3 gap-8 text-left">
          {testimonials.map((t, i) => (
            <div key={i} className="border border-velmora-border p-8">
              <StarRating rating={t.rating} size={14} />
              <p className="mt-5 text-[15px] leading-relaxed text-velmora-text">"{t.text}"</p>
              <p className="mt-6 text-sm text-velmora-text-muted">— {t.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 8. NEWSLETTER */}
      <section className="bg-velmora-text text-white py-16">
        <div className="max-w-md mx-auto px-6 text-center">
          <h3 className="serif text-3xl mb-3">Join for 10% off</h3>
          <p className="text-white/70 text-sm mb-8">Be the first to know about new arrivals and private events.</p>
          
          <form onSubmit={(e) => { e.preventDefault(); alert('Thank you! You are now subscribed.'); }} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="YOUR EMAIL"
              required
              className="input flex-1 bg-white/10 border-white/30 text-white placeholder:text-white/50"
            />
            <button type="submit" className="btn bg-white text-velmora-text hover:bg-white/90 whitespace-nowrap">
              SUBSCRIBE
            </button>
          </form>
          <p className="text-[10px] text-white/50 mt-4 tracking-wider">WE RESPECT YOUR INBOX. UNSUBSCRIBE ANYTIME.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
