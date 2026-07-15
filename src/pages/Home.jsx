import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import UGCCard from '../components/UGCCard';
import { products } from '../data/products';

const Home = () => {
  // Use first 5 products as bestsellers
  const bestsellers = products.slice(0, 5);

  const ugcCaptions = [
    "Morning light on gold",
    "Everyday elegance",
    "A gift from her",
    "Soft curves, strong lines",
    "Worn with intention",
  ];

  const categories = [
    { name: 'Earrings', slug: 'Earrings' },
    { name: 'Necklaces', slug: 'Necklaces' },
    { name: 'Huggies', slug: 'Huggies' },
  ];

  const testimonials = [
    {
      text: "The most beautiful pieces I've ever owned. The quality is exceptional and they feel so special.",
      author: "Elena M.",
      stars: 5,
    },
    {
      text: "Bought the Royal Heirloom Set for my sister. She cried when she opened it. Worth every penny.",
      author: "Sofia R.",
      stars: 5,
    },
    {
      text: "I wear my Golden Sphere Huggies every single day. They never tarnish and always look perfect.",
      author: "Amara K.",
      stars: 5,
    },
  ];

  return (
    <div className="pt-20">
      {/* 1. Full-bleed Hero */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center bg-[#E8E0D5] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#C5B5A0] via-[#B89778]/60 to-[#8C6F52]/40" />
        
        {/* Hero content */}
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="text-[#2C2522] text-5xl md:text-6xl mb-6 tracking-[-0.02em]">
            Crafted to be Treasured
          </h1>
          <p className="text-[#2C2522]/80 text-lg md:text-xl mb-10 max-w-md mx-auto">
            Demi-fine gold jewelry for the moments that matter.
          </p>
          <Link to="/shop" className="btn btn-primary inline-block">
            Shop the Collection
          </Link>
        </div>

        {/* Subtle scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#2C2522]/50 text-xs tracking-[0.2em] uppercase">
          Scroll to explore
        </div>
      </section>

      {/* 2. Trust Bar */}
      <div className="trust-bar py-4 border-b border-[#D9D0C4] bg-[#F8F5F1]">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-x-8 gap-y-2 text-center">
          <span>Free Worldwide Shipping</span>
          <span className="hidden md:inline text-[#D9D0C4]">·</span>
          <span>30-Day Returns</span>
          <span className="hidden md:inline text-[#D9D0C4]">·</span>
          <span>18K Gold Plated</span>
          <span className="hidden md:inline text-[#D9D0C4]">·</span>
          <span>Hypoallergenic</span>
        </div>
      </div>

      {/* 3. Bestsellers */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <div className="text-xs tracking-[0.15em] uppercase text-[#B89778] mb-2">Discover</div>
            <h2 className="text-3xl md:text-4xl">Bestsellers</h2>
          </div>
          <Link to="/shop" className="hidden md:flex items-center gap-2 text-sm tracking-[0.05em] uppercase text-[#6B6058] hover:text-[#2C2522]">
            View All <span>→</span>
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Link to="/shop" className="btn btn-outline btn-sm">View All</Link>
        </div>
      </section>

      {/* 4. UGC Reel Row */}
      <section className="bg-[#F1EDE6] py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-8">
            <div className="text-xs tracking-[0.15em] uppercase text-[#B89778] mb-2">In the Wild</div>
            <h2 className="text-2xl md:text-3xl">Moments, Captured</h2>
          </div>
        </div>

        <div className="overflow-x-auto pb-4 scrollbar-hide">
          <div className="flex gap-4 pl-6 md:pl-[calc((100vw-1280px)/2+24px)] pr-6">
            {ugcCaptions.map((caption, index) => (
              <UGCCard key={index} caption={caption} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* 5. Shop by Category */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <div className="mb-10">
          <div className="text-xs tracking-[0.15em] uppercase text-[#B89778] mb-2">Find Your Piece</div>
          <h2 className="text-3xl md:text-4xl">Shop by Category</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {categories.map((cat, index) => (
            <Link
              key={index}
              to={`/shop?category=${cat.slug}`}
              className="category-tile group"
            >
              <div className="w-full h-full bg-gradient-to-br from-[#E8E0D5] to-[#C5B5A0] flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full border border-[#B89778]/40" />
                </div>
              </div>
              <div className="category-tile-label">
                <span>{cat.name}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 6. Brand Story Split */}
      <section className="bg-[#F1EDE6]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2">
          {/* Image side */}
          <div className="aspect-[4/3] md:aspect-auto bg-gradient-to-br from-[#B89778] via-[#8C6F52] to-[#6B6058] flex items-center justify-center">
            <div className="text-center text-white/70">
              <div className="text-xs tracking-[0.2em] mb-2">EST. 2019</div>
              <div className="font-serif text-2xl tracking-[0.1em]">VELMORA</div>
            </div>
          </div>

          {/* Text side */}
          <div className="px-6 py-12 md:p-16 flex flex-col justify-center">
            <div className="max-w-md">
              <div className="text-xs tracking-[0.15em] uppercase text-[#B89778] mb-3">Our Philosophy</div>
              <h2 className="text-3xl md:text-4xl mb-6">Jewelry that feels like you.</h2>
              <p className="text-[#6B6058] mb-8 leading-relaxed">
                Velmora was born from a simple belief: beautiful jewelry shouldn't be reserved for special occasions. 
                We craft demi-fine pieces that become part of your everyday story—timeless, wearable, and made to last.
              </p>
              <Link to="/about" className="btn btn-outline inline-block">
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Testimonials */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <div className="mb-10 text-center">
          <div className="text-xs tracking-[0.15em] uppercase text-[#B89778] mb-2">Kind Words</div>
          <h2 className="text-3xl md:text-4xl">From Our Community</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, index) => (
            <div key={index} className="testimonial bg-white border border-[#D9D0C4]">
              <div className="testimonial-stars">
                {'★'.repeat(t.stars)}
              </div>
              <p className="testimonial-text">"{t.text}"</p>
              <div className="testimonial-author">— {t.author}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. Newsletter */}
      <section className="newsletter py-16 md:py-20">
        <div className="max-w-xl mx-auto px-6 text-center">
          <div className="text-xs tracking-[0.15em] uppercase text-[#B89778] mb-3">Stay Close</div>
          <h2 className="text-white text-3xl md:text-4xl mb-4">Join for 10% off your first order</h2>
          <p className="text-[#D9D0C4] mb-8">Be the first to know about new arrivals and stories from the studio.</p>

          <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => { e.preventDefault(); alert('Thank you for subscribing!'); }}>
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-5 py-3 text-[#2C2522] placeholder-[#9A8F85]"
              required
            />
            <button type="submit" className="btn btn-primary whitespace-nowrap">
              Subscribe
            </button>
          </form>
          <p className="text-[#9A8F85] text-xs mt-4">We respect your inbox. Unsubscribe anytime.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
