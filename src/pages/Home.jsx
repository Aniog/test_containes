import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import ProductCard from '@/components/ProductCard';
import Button from '@/components/ui/Button';
import { products } from '@/data/products';

// UGC Reel data - simulated Instagram-style content
const ugcReels = [
  { id: 1, image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&q=80", caption: "Golden hour glow" },
  { id: 2, image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=400&q=80", caption: "Everyday elegance" },
  { id: 3, image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&q=80", caption: "Soft light, soft gold" },
  { id: 4, image: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=400&q=80", caption: "Layered with love" },
  { id: 5, image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=400&q=80", caption: "Timeless moments" },
];

// Testimonials
const testimonials = [
  { name: "Elena M.", text: "The quality is exceptional. I wear my huggies every day and they still look brand new.", rating: 5 },
  { name: "Sofia R.", text: "Bought the Royal Heirloom Set as a gift. My sister cried. Worth every penny.", rating: 5 },
  { name: "Aisha K.", text: "Finally found jewelry that doesn't irritate my sensitive skin. Beautiful and hypoallergenic.", rating: 5 },
];

const Home = () => {
  const bestsellers = products.slice(0, 5);

  return (
    <div className="min-h-screen bg-[#F8F5F0]">
      {/* 1. Sticky Navigation - handled in Layout */}

      {/* 2. Full-bleed Hero */}
      <section className="relative h-[100dvh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[#1C1C1C]">
          <img 
            src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=2000&q=85" 
            alt="Velmora Fine Jewelry - Woman wearing elegant gold necklace"
            className="absolute inset-0 w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="font-serif text-5xl md:text-7xl text-white tracking-[2px] leading-[1.1] mb-6">
            Crafted to be<br />Treasured
          </h1>
          <p className="text-white/90 text-lg md:text-xl mb-10 tracking-wide">
            Demi-fine jewelry for the moments that matter.
          </p>
          <Link to="/shop">
            <Button size="lg" className="bg-white text-[#1C1C1C] hover:bg-[#F8F5F0] hover:text-[#1C1C1C]">
              SHOP THE COLLECTION
            </Button>
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 text-xs tracking-[3px]">
          SCROLL TO EXPLORE
        </div>
      </section>

      {/* 3. Trust Bar */}
      <div className="trust-bar bg-white border-b border-[#EDE8E0] py-4">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center items-center gap-x-8 gap-y-2 text-[#6B665F] text-center">
          <span>FREE WORLDWIDE SHIPPING</span>
          <span className="hidden sm:inline text-[#EDE8E0]">·</span>
          <span>30-DAY RETURNS</span>
          <span className="hidden sm:inline text-[#EDE8E0]">·</span>
          <span>18K GOLD PLATED</span>
          <span className="hidden sm:inline text-[#EDE8E0]">·</span>
          <span>HYPOALLERGENIC</span>
        </div>
      </div>

      {/* 4. Bestsellers */}
      <section className="max-w-7xl mx-auto px-6 pt-20 pb-16">
        <div className="flex items-end justify-between mb-10">
          <div>
            <span className="text-xs tracking-[3px] text-[#B89778]">DISCOVER</span>
            <h2 className="font-serif text-4xl tracking-[1px] mt-1">Bestsellers</h2>
          </div>
          <Link to="/shop" className="hidden md:block text-sm tracking-[1.5px] text-[#B89778] hover:underline">
            VIEW ALL →
          </Link>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-10">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="text-center mt-10 md:hidden">
          <Link to="/shop" className="text-sm tracking-[1.5px] text-[#B89778]">VIEW ALL →</Link>
        </div>
      </section>

      {/* 5. UGC Reel-style Row */}
      <section className="bg-[#F5F2ED] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-8">
            <div>
              <span className="text-xs tracking-[3px] text-[#B89778]">AS SEEN ON</span>
              <h2 className="font-serif text-3xl tracking-[1px] mt-1">Real Moments</h2>
            </div>
          </div>
          
          <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
            {ugcReels.map((reel) => (
              <div key={reel.id} className="ugc-card flex-shrink-0 w-[160px] md:w-[180px] aspect-[9/16] bg-[#EDE8E0] snap-start overflow-hidden">
                <img 
                  src={reel.image} 
                  alt={reel.caption}
                  className="w-full h-full object-cover"
                />
                <div className="ugc-caption">
                  <p className="text-white text-xs tracking-widest font-serif">{reel.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Shop by Category */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <span className="text-xs tracking-[3px] text-[#B89778]">EXPLORE</span>
          <h2 className="font-serif text-4xl tracking-[1px] mt-1">Shop by Category</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { label: "Earrings", category: "Earrings", img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80" },
            { label: "Necklaces", category: "Necklaces", img: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80" },
            { label: "Huggies", category: "Huggies", img: "https://images.unsplash.com/photo-1535632787350-4e68b0bdad6e?w=800&q=80" },
          ].map((cat) => (
            <Link 
              key={cat.label} 
              to={`/shop?category=${cat.category}`}
              className="category-tile group block aspect-[16/10] md:aspect-[4/3] overflow-hidden bg-[#EDE8E0]"
            >
              <img 
                src={cat.img} 
                alt={cat.label}
                className="w-full h-full object-cover editorial-img"
              />
              <div className="label">
                <span className="text-white font-serif text-2xl tracking-[2px]">{cat.label}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 7. Brand Story Split */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2">
          <div className="aspect-[4/3] md:aspect-auto bg-[#EDE8E0]">
            <img 
              src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=1200&q=80" 
              alt="Velmora atelier - hands crafting fine jewelry"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex items-center px-8 md:px-16 py-16 md:py-0">
            <div className="max-w-md">
              <span className="text-xs tracking-[3px] text-[#B89778]">SINCE 2018</span>
              <h2 className="font-serif text-4xl tracking-[1px] mt-3 mb-6">Our Story</h2>
              <p className="text-[#6B665F] leading-relaxed mb-8">
                Velmora was born from a simple belief: that beautiful jewelry should be accessible without compromise. 
                We craft demi-fine pieces in 18K gold plating that feel as precious as solid gold — because every woman 
                deserves to feel treasured.
              </p>
              <Link to="/about">
                <Button variant="outline">READ OUR STORY</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Testimonials */}
      <section className="max-w-5xl mx-auto px-6 py-20 text-center">
        <span className="text-xs tracking-[3px] text-[#B89778]">LOVED BY MANY</span>
        <h2 className="font-serif text-4xl tracking-[1px] mt-2 mb-12">What Our Customers Say</h2>
        
        <div className="grid md:grid-cols-3 gap-8 text-left">
          {testimonials.map((t, i) => (
            <div key={i} className="border border-[#EDE8E0] p-8 bg-white">
              <div className="flex mb-4">
                {Array.from({ length: t.rating }).map((_, idx) => (
                  <Star key={idx} className="h-4 w-4 star fill-current" />
                ))}
              </div>
              <p className="text-[#6B665F] text-sm leading-relaxed mb-6">"{t.text}"</p>
              <p className="text-xs tracking-[1px] text-[#1C1C1C]">— {t.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 9. Newsletter */}
      <section className="bg-[#1C1C1C] py-16">
        <div className="max-w-md mx-auto px-6 text-center">
          <h3 className="font-serif text-3xl text-white tracking-[1px] mb-3">Join for 10% off</h3>
          <p className="text-[#9A958E] text-sm mb-8">Be the first to know about new arrivals and exclusive offers.</p>
          
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
              placeholder="YOUR EMAIL ADDRESS" 
              required
              className="newsletter-input flex-1 h-12 px-5 text-sm tracking-[1px] placeholder:text-[#9A958E]"
            />
            <Button type="submit" className="sm:w-auto">SUBSCRIBE</Button>
          </form>
          <p className="text-[10px] text-[#6B665F] mt-4 tracking-widest">WE RESPECT YOUR INBOX. UNSUBSCRIBE ANYTIME.</p>
        </div>
      </section>

      {/* 10. Footer - handled in Layout */}
    </div>
  );
};

export default Home;
