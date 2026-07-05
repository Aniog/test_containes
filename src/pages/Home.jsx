import React from 'react';
import { Link } from 'react-router-dom';
import { getBestsellers } from '../data/products';
import ProductCard from '../components/product/ProductCard';
import StarRating from '../components/ui/StarRating';

const Home = () => {
  const bestsellers = getBestsellers();

  // UGC mock data - vertical reel-style images
  const ugcItems = [
    { id: 1, caption: "My everyday staple", img: "https://picsum.photos/id/1005/400/600" },
    { id: 2, caption: "Wore this to my sister's wedding", img: "https://picsum.photos/id/1009/400/600" },
    { id: 3, caption: "The perfect gift from my husband", img: "https://picsum.photos/id/1012/400/600" },
    { id: 4, caption: "Stacking these forever", img: "https://picsum.photos/id/1027/400/600" },
    { id: 5, caption: "Feels so special", img: "https://picsum.photos/id/1033/400/600" },
  ];

  const testimonials = [
    { name: "Elena M.", text: "The quality is exceptional. I've worn my huggies every day for six months and they still look brand new.", rating: 5 },
    { name: "Sofia R.", text: "Bought the Royal Heirloom Set as a gift. The packaging alone made it feel so special. She loved it.", rating: 5 },
    { name: "Maya K.", text: "Finally found jewelry that doesn't irritate my sensitive skin. The gold tone is beautiful and subtle.", rating: 5 },
  ];

  return (
    <div className="pt-20">
      {/* 1. HERO */}
      <section className="relative h-[100dvh] min-h-[620px] flex items-center justify-center bg-[#1C1917] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://picsum.photos/id/1011/2000/1400" 
            alt="Velmora jewelry on model" 
            className="w-full h-full object-cover opacity-75"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-3xl">
          <h1 className="heading-serif text-5xl md:text-6xl text-white tracking-[-0.02em] mb-6">
            Crafted to be Treasured
          </h1>
          <p className="text-[#F5F2ED] text-lg md:text-xl mb-10 max-w-md mx-auto">
            Demi-fine jewelry for the moments that matter.
          </p>
          <Link to="/shop" className="btn btn-primary btn-lg inline-block">
            SHOP THE COLLECTION
          </Link>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 text-xs tracking-[0.2em]">
          SCROLL TO EXPLORE
        </div>
      </section>

      {/* 2. TRUST BAR */}
      <div className="trust-bar border-b border-[#E5DFD6] py-4">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-x-8 gap-y-2 text-center">
          <span>FREE WORLDWIDE SHIPPING</span>
          <span className="hidden sm:inline text-[#E5DFD6]">·</span>
          <span>30-DAY RETURNS</span>
          <span className="hidden sm:inline text-[#E5DFD6]">·</span>
          <span>18K GOLD PLATED</span>
          <span className="hidden sm:inline text-[#E5DFD6]">·</span>
          <span>HYPOALLERGENIC</span>
        </div>
      </div>

      {/* 3. BESTSELLERS */}
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-12">
        <div className="flex items-end justify-between mb-8">
          <div>
            <div className="text-xs tracking-[0.15em] text-[#9A9288] mb-1">DISCOVER</div>
            <h2 className="heading-serif text-3xl">Bestsellers</h2>
          </div>
          <Link to="/shop" className="hidden sm:block text-sm tracking-[0.05em] hover:text-[#B8976A] transition-colors">
            VIEW ALL →
          </Link>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="text-center mt-8 sm:hidden">
          <Link to="/shop" className="text-sm tracking-[0.05em] hover:text-[#B8976A]">
            VIEW ALL →
          </Link>
        </div>
      </section>

      {/* 4. UGC REEL ROW */}
      <section className="bg-[#F5F2ED] py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-6">
            <div className="text-xs tracking-[0.15em] text-[#9A9288] mb-1">AS SEEN ON</div>
            <h2 className="heading-serif text-2xl">Real Moments</h2>
          </div>
          
          <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
            {ugcItems.map((item) => (
              <div key={item.id} className="ugc-card snap-start">
                <img src={item.img} alt={item.caption} />
                <div className="ugc-caption">{item.caption}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SHOP BY CATEGORY */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="mb-8">
          <div className="text-xs tracking-[0.15em] text-[#9A9288] mb-1">EXPLORE</div>
          <h2 className="heading-serif text-3xl">Shop by Category</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { label: 'Earrings', path: '/shop?category=Earrings', img: 'https://picsum.photos/id/29/800/600' },
            { label: 'Necklaces', path: '/shop?category=Necklaces', img: 'https://picsum.photos/id/160/800/600' },
            { label: 'Huggies', path: '/shop?category=Huggies', img: 'https://picsum.photos/id/180/800/600' },
          ].map((cat) => (
            <Link key={cat.label} to={cat.path} className="category-tile group">
              <img src={cat.img} alt={cat.label} />
              <div className="category-tile-label">
                <span>{cat.label}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 6. BRAND STORY */}
      <section className="border-t border-[#E5DFD6]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2">
          <div className="aspect-[4/3] md:aspect-auto bg-[#F5F2ED]">
            <img 
              src="https://picsum.photos/id/106/1200/1000" 
              alt="Velmora craftsmanship" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center px-8 py-12 md:px-12 lg:px-16">
            <div className="max-w-md">
              <div className="text-xs tracking-[0.15em] text-[#9A9288] mb-2">SINCE 2019</div>
              <h2 className="heading-serif text-3xl mb-6">Our Story</h2>
              <p className="text-[#5C5752] leading-relaxed mb-6">
                Velmora was born from a simple belief: that beautiful jewelry shouldn't be reserved for special occasions. 
                We design demi-fine pieces that feel as good as they look—meant to be worn daily, passed down, and loved for years.
              </p>
              <Link to="/about" className="btn btn-outline inline-block">
                READ OUR STORY
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 7. TESTIMONIALS */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-10">
          <div className="text-xs tracking-[0.15em] text-[#9A9288] mb-1">LOVED BY MANY</div>
          <h2 className="heading-serif text-3xl">What Our Customers Say</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="text-center px-4">
              <StarRating rating={t.rating} />
              <p className="mt-4 text-[#5C5752] italic leading-relaxed">"{t.text}"</p>
              <p className="mt-4 text-sm tracking-[0.05em] text-[#9A9288]">— {t.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 8. NEWSLETTER */}
      <section className="newsletter py-16">
        <div className="max-w-md mx-auto px-6 text-center">
          <h2 className="heading-serif text-2xl text-white mb-3">Join for 10% off your first order</h2>
          <p className="text-[#9A9288] text-sm mb-6">Be the first to know about new arrivals and exclusive offers.</p>
          
          <form 
            onSubmit={(e) => {
              e.preventDefault();
              const email = e.target.email.value;
              if (email) {
                alert(`Thank you! A 10% code has been sent to ${email}.`);
                e.target.reset();
              }
            }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <input 
              type="email" 
              name="email"
              placeholder="YOUR EMAIL ADDRESS" 
              className="input flex-1 text-sm" 
              required 
            />
            <button type="submit" className="btn btn-primary whitespace-nowrap">
              SUBSCRIBE
            </button>
          </form>
          <p className="text-[10px] text-[#9A9288] mt-3 tracking-[0.05em]">We respect your inbox. Unsubscribe anytime.</p>
        </div>
      </section>

      {/* 9. FOOTER is rendered in Layout */}
    </div>
  );
};

export default Home;
