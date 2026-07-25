import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import ProductCard from '@/components/ProductCard';
import Button from '@/components/ui/Button';
import { products } from '@/data/products';

// UGC images - vertical 9:16 style jewelry worn shots
const ugcItems = [
  { id: 1, caption: "Morning light", img: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&q=80" },
  { id: 2, caption: "Golden hour", img: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=400&q=80" },
  { id: 3, caption: "Everyday elegance", img: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&q=80" },
  { id: 4, caption: "Soft details", img: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=400&q=80" },
  { id: 5, caption: "Treasured", img: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=400&q=80" },
];

const testimonials = [
  { name: "Elena M.", text: "The most beautiful pieces I've ever owned. I wear my huggies every single day.", rating: 5 },
  { name: "Sofia R.", text: "Bought the Royal Heirloom Set as a gift for my sister. She cried. Worth every penny.", rating: 5 },
  { name: "Aisha K.", text: "Finally, jewelry that doesn't turn my skin green. The quality is exceptional.", rating: 5 },
];

export default function Home() {
  const bestsellers = products.slice(0, 5);

  return (
    <div className="min-h-screen bg-[#F7F3EB]">
      {/* 1. Sticky Navigation - handled in Layout */}

      {/* 2. Full-bleed Hero */}
      <section className="relative h-[100dvh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[#0D0C0A]">
          <img 
            src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=2000&q=85" 
            alt="Velmora Fine Jewelry - Warm lit gold jewelry on model"
            className="absolute inset-0 w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="hero-headline font-serif text-5xl md:text-7xl text-white tracking-[2px] mb-6">
            Crafted to be Treasured
          </h1>
          <p className="text-white/90 text-lg md:text-xl mb-10 tracking-[0.5px]">
            Demi-fine gold jewelry for the woman who values quiet luxury.
          </p>
          <Link to="/shop">
            <Button size="lg" className="tracking-[2px] px-10">
              SHOP THE COLLECTION
            </Button>
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 text-xs tracking-[2px]">
          SCROLL TO EXPLORE
        </div>
      </section>

      {/* 3. Trust Bar */}
      <div className="trust-bar bg-white border-b border-[#E5DFD3] py-4">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center items-center gap-x-8 gap-y-2 text-center text-[#6B6259]">
          <span>FREE WORLDWIDE SHIPPING</span>
          <span className="hidden md:inline text-[#E5DFD3]">·</span>
          <span>30-DAY RETURNS</span>
          <span className="hidden md:inline text-[#E5DFD3]">·</span>
          <span>18K GOLD PLATED</span>
          <span className="hidden md:inline text-[#E5DFD3]">·</span>
          <span>HYPOALLERGENIC</span>
        </div>
      </div>

      {/* 4. Bestsellers */}
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-12">
        <div className="flex items-end justify-between mb-8">
          <div>
            <span className="filter-label">Curated for you</span>
            <h2 className="font-serif text-4xl text-[#1C1B19] mt-1">Bestsellers</h2>
          </div>
          <Link to="/shop" className="hidden md:block text-sm tracking-[1px] text-[#C5A46E] hover:underline">
            VIEW ALL →
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-8 md:hidden">
          <Link to="/shop" className="text-sm tracking-[1px] text-[#C5A46E]">VIEW ALL →</Link>
        </div>
      </section>

      {/* 5. UGC Reel-style Row */}
      <section className="bg-white py-12 border-y border-[#E5DFD3]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <span className="filter-label">As seen on you</span>
              <h3 className="font-serif text-3xl text-[#1C1B19]">Worn & Loved</h3>
            </div>
          </div>

          <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
            {ugcItems.map((item) => (
              <div 
                key={item.id} 
                className="ugc-card flex-shrink-0 w-[160px] md:w-[180px] snap-start"
              >
                <div className="relative aspect-[9/16] bg-[#E5DFD3] overflow-hidden rounded">
                  <img 
                    src={item.img} 
                    alt={item.caption}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <p className="font-serif text-white text-sm tracking-wide">{item.caption}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Shop by Category */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-10">
          <span className="filter-label">Find your piece</span>
          <h2 className="font-serif text-4xl text-[#1C1B19] mt-1">Shop by Category</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { name: "Earrings", slug: "Earrings", img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80" },
            { name: "Necklaces", slug: "Necklaces", img: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80" },
            { name: "Huggies", slug: "Huggies", img: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80" },
          ].map((cat) => (
            <Link 
              key={cat.slug} 
              to={`/shop?category=${cat.slug}`}
              className="category-tile group block aspect-[16/10] md:aspect-[4/2.5] overflow-hidden bg-[#E5DFD3]"
            >
              <img 
                src={cat.img} 
                alt={cat.name}
                className="editorial-img absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <span className="label font-serif text-3xl text-white tracking-[3px] drop-shadow-lg">
                  {cat.name}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 7. Brand Story Split */}
      <section className="bg-white border-y border-[#E5DFD3]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2">
          <div className="aspect-[4/3] md:aspect-auto bg-[#E5DFD3] overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1200&q=80" 
              alt="Velmora atelier - hands crafting gold jewelry"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="px-8 md:px-12 py-12 md:py-16 flex flex-col justify-center">
            <span className="filter-label">Since 2018</span>
            <h2 className="font-serif text-4xl text-[#1C1B19] mt-2 mb-6">Our Story</h2>
            <div className="prose prose-sm text-[#6B6259] max-w-prose space-y-4 text-[15px] leading-relaxed">
              <p>
                Velmora was born from a simple belief: that beautiful jewelry should be worn, not saved for special occasions.
              </p>
              <p>
                We design demi-fine pieces in 18K gold plating that feel as precious as solid gold, but accessible enough to become part of your everyday.
              </p>
            </div>
            <Link to="/about" className="mt-8 inline-block text-sm tracking-[1px] text-[#C5A46E] hover:underline">
              READ OUR FULL STORY →
            </Link>
          </div>
        </div>
      </section>

      {/* 8. Testimonials */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="text-center mb-10">
          <span className="filter-label">In their words</span>
          <h2 className="font-serif text-4xl text-[#1C1B19] mt-1">Loved by Many</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="text-center px-4">
              <div className="flex justify-center mb-4">
                {[...Array(t.rating)].map((_, idx) => (
                  <Star key={idx} className="w-4 h-4 star fill-current" />
                ))}
              </div>
              <p className="text-[#1C1B19] italic leading-relaxed mb-4">"{t.text}"</p>
              <p className="text-sm text-[#6B6259]">— {t.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 9. Newsletter */}
      <section className="bg-[#0D0C0A] py-14">
        <div className="max-w-md mx-auto px-6 text-center">
          <h3 className="font-serif text-3xl text-white tracking-wide mb-2">Join for 10% off</h3>
          <p className="text-[#E5DFD3] text-sm mb-6">Be the first to know about new arrivals and private events.</p>
          
          <form 
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thank you. You've been added to our list and your 10% code is VELMORA10.");
            }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <input 
              type="email" 
              required
              placeholder="Your email address"
              className="newsletter-input flex-1 px-5 py-3 text-sm text-white placeholder:text-[#6B6259] focus:bg-white focus:text-[#1C1B19]"
            />
            <Button type="submit" variant="solid" className="whitespace-nowrap tracking-[1px]">
              SUBSCRIBE
            </Button>
          </form>
          <p className="text-[10px] text-[#6B6259] mt-3">We respect your inbox. Unsubscribe anytime.</p>
        </div>
      </section>
    </div>
  );
}