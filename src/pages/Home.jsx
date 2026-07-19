import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

// UGC images - vertical format jewelry on models
const ugcItems = [
  { id: 1, image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&q=80", caption: "Morning light with my new huggies" },
  { id: 2, image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=400&q=80", caption: "The perfect gift from my sister" },
  { id: 3, image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&q=80", caption: "Wearing these every day" },
  { id: 4, image: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=400&q=80", caption: "My go-to for special occasions" },
  { id: 5, image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=400&q=80", caption: "Layering the flora necklace" },
];

const testimonials = [
  { id: 1, name: "Elena M.", text: "The quality is exceptional. I've worn my huggies daily for months and they still look brand new.", rating: 5 },
  { id: 2, name: "Sofia R.", text: "Bought the Royal Heirloom Set as a gift. The packaging alone made it feel so special.", rating: 5 },
  { id: 3, name: "Maya K.", text: "Finally found jewelry that doesn't irritate my sensitive skin. The gold tone is so warm and beautiful.", rating: 5 },
];

const Home = () => {
  // Use first 5 products for bestsellers
  const bestsellers = products.slice(0, 5);

  return (
    <div className="pt-20">
      {/* 1. HERO */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[#2C2522]">
          <img 
            src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=2000&q=90" 
            alt="Velmora Fine Jewelry - Woman wearing elegant gold jewelry"
            className="absolute inset-0 w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="serif text-5xl md:text-7xl text-white tracking-[0.05em] mb-6">
            Crafted to be Treasured
          </h1>
          <p className="text-white/90 text-lg md:text-xl mb-10 max-w-md mx-auto">
            Demi-fine jewelry for the moments that matter.
          </p>
          <Link to="/shop" className="btn btn-gold inline-block">
            SHOP THE COLLECTION
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 text-xs tracking-[0.2em]">
          SCROLL TO EXPLORE
        </div>
      </section>

      {/* 2. TRUST BAR */}
      <div className="border-b border-velmora-border bg-velmora-surface py-4">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-2 text-xs tracking-[0.15em] text-velmora-text-light text-center">
            <span>FREE WORLDWIDE SHIPPING</span>
            <span className="hidden sm:inline">·</span>
            <span>30-DAY RETURNS</span>
            <span className="hidden sm:inline">·</span>
            <span>18K GOLD PLATED</span>
            <span className="hidden sm:inline">·</span>
            <span>HYPOALLERGENIC</span>
          </div>
        </div>
      </div>

      {/* 3. BESTSELLERS */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-xs tracking-[0.15em] text-velmora-text-light mb-2">DISCOVER</p>
            <h2 className="serif text-4xl tracking-[0.05em]">Bestsellers</h2>
          </div>
          <Link to="/shop" className="hidden md:block text-sm tracking-widest hover:text-velmora-accent">
            VIEW ALL →
          </Link>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-8 md:hidden">
          <Link to="/shop" className="text-sm tracking-widest hover:text-velmora-accent">
            VIEW ALL →
          </Link>
        </div>
      </section>

      {/* 4. UGC REEL ROW */}
      <section className="bg-velmora-surface py-16 border-y border-velmora-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-8">
            <div>
              <p className="text-xs tracking-[0.15em] text-velmora-text-light mb-1">AS SEEN ON</p>
              <h3 className="serif text-2xl tracking-[0.05em]">Real Moments</h3>
            </div>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-sm tracking-widest hover:text-velmora-accent hidden md:block">
              @VELMORA →
            </a>
          </div>
          
          <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
            {ugcItems.map((item) => (
              <div key={item.id} className="ugc-card aspect-[9/16] snap-start">
                <img 
                  src={item.image} 
                  alt={item.caption}
                  className="w-full h-full object-cover"
                />
                <div className="ugc-caption">
                  {item.caption}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SHOP BY CATEGORY */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.15em] text-velmora-text-light mb-2">EXPLORE</p>
          <h2 className="serif text-4xl tracking-[0.05em]">Shop by Category</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { name: "Earrings", path: "/shop?category=Earrings", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80" },
            { name: "Necklaces", path: "/shop?category=Necklaces", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80" },
            { name: "Huggies", path: "/shop?category=Huggies", image: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80" },
          ].map((cat) => (
            <Link key={cat.name} to={cat.path} className="category-tile aspect-[16/10] block">
              <img src={cat.image} alt={cat.name} className="w-full h-full object-cover" />
              <div className="category-label">{cat.name}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* 6. BRAND STORY */}
      <section className="bg-velmora-surface border-y border-velmora-border">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2">
          <div className="aspect-[4/3] md:aspect-auto">
            <img 
              src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1200&q=80" 
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex items-center p-10 md:p-16 lg:p-20">
            <div>
              <p className="text-xs tracking-[0.15em] text-velmora-text-light mb-4">SINCE 2018</p>
              <h2 className="serif text-4xl tracking-[0.03em] mb-6">Our Story</h2>
              <div className="space-y-4 text-velmora-text-light leading-relaxed">
                <p>
                  Velmora was born from a simple belief: that beautiful jewelry should be accessible, 
                  not just for special occasions, but for every day.
                </p>
                <p>
                  We design demi-fine pieces that honor traditional craftsmanship while embracing 
                  modern sensibilities. Each piece is plated in 18K gold over hypoallergenic brass, 
                  designed to be worn and loved for years.
                </p>
              </div>
              <Link to="/about" className="btn btn-outline mt-8 inline-block">
                READ OUR STORY
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 7. TESTIMONIALS */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.15em] text-velmora-text-light mb-2">LOVED BY MANY</p>
          <h2 className="serif text-4xl tracking-[0.05em]">What Our Customers Say</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.id} className="testimonial">
              <div className="flex mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 star fill-current" />
                ))}
              </div>
              <p className="text-sm leading-relaxed mb-6">"{t.text}"</p>
              <p className="text-xs tracking-widest text-velmora-text-light">— {t.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 8. NEWSLETTER */}
      <section className="newsletter py-16">
        <div className="max-w-xl mx-auto px-6 text-center">
          <h3 className="serif text-3xl tracking-[0.05em] mb-3">Join for 10% off your first order</h3>
          <p className="text-sm text-white/70 mb-8">
            Be the first to know about new arrivals, exclusive offers, and styling inspiration.
          </p>
          <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="YOUR EMAIL ADDRESS" 
              className="input-dark flex-1 text-sm"
              required
            />
            <button type="submit" className="btn btn-gold whitespace-nowrap">
              SUBSCRIBE
            </button>
          </form>
          <p className="text-[10px] text-white/50 mt-4 tracking-widest">
            WE RESPECT YOUR INBOX. UNSUBSCRIBE ANYTIME.
          </p>
        </div>
      </section>

      {/* 9. FOOTER */}
      {/* Footer is rendered in Layout */}
    </div>
  );
};

export default Home;