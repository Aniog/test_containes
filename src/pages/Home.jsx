import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

const Home = () => {
  // Select 5 products for bestsellers (all of them for this small catalog)
  const bestsellers = products;

  // UGC mock data - vertical reel style
  const ugcItems = [
    { id: 1, image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&q=80", caption: "My everyday staple" },
    { id: 2, image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=400&q=80", caption: "Gifted myself this beauty" },
    { id: 3, image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&q=80", caption: "Perfect for date night" },
    { id: 4, image: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=400&q=80", caption: "Obsessed with the detail" },
    { id: 5, image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=400&q=80", caption: "Wore this all summer" },
  ];

  // Testimonials
  const testimonials = [
    { name: "Elena M.", text: "The quality is exceptional. I've worn my huggies every day for months and they still look brand new.", rating: 5 },
    { name: "Sofia R.", text: "Bought the Royal Heirloom Set as a gift for my sister. She hasn't taken it off since. Beautiful packaging too.", rating: 5 },
    { name: "Aisha K.", text: "Finally found jewelry that doesn't irritate my sensitive skin. The gold tone is so rich and warm.", rating: 5 },
  ];

  return (
    <div className="bg-velmora-cream">
      {/* 1. Sticky Nav is handled globally in Layout */}

      {/* 2. Full-bleed Hero */}
      <section className="relative h-[100dvh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-velmora-bg">
          <img 
            src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1600&q=90" 
            alt="Velmora Fine Jewelry - Warm lit gold jewelry on model"
            className="absolute inset-0 w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="serif text-5xl md:text-7xl text-white mb-6 tracking-[-0.02em]">
            Crafted to be Treasured
          </h1>
          <p className="text-white/90 text-lg md:text-xl mb-10 max-w-md mx-auto">
            Demi-fine gold jewelry for the modern woman. Timeless pieces, thoughtfully made.
          </p>
          <Link to="/shop" className="btn btn-gold text-sm px-10">
            Shop the Collection
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 text-xs tracking-[0.2em]">
          SCROLL TO EXPLORE
        </div>
      </section>

      {/* 3. Trust Bar */}
      <div className="trust-bar py-4">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-2 text-center">
            <span>Free Worldwide Shipping</span>
            <span className="hidden md:inline text-velmora-gold">·</span>
            <span>30-Day Returns</span>
            <span className="hidden md:inline text-velmora-gold">·</span>
            <span>18K Gold Plated</span>
            <span className="hidden md:inline text-velmora-gold">·</span>
            <span>Hypoallergenic</span>
          </div>
        </div>
      </div>

      {/* 4. Bestsellers */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-xs tracking-[0.15em] text-velmora-text-muted mb-2">CURATED FOR YOU</p>
            <h2 className="serif text-4xl">Bestsellers</h2>
          </div>
          <Link to="/shop" className="hidden md:block text-sm text-velmora-gold hover:underline">
            View All →
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-10 md:hidden">
          <Link to="/shop" className="text-sm text-velmora-gold hover:underline">
            View All →
          </Link>
        </div>
      </section>

      {/* 5. UGC Reel-style Row */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-8">
            <p className="text-xs tracking-[0.15em] text-velmora-text-muted mb-2">AS SEEN ON YOU</p>
            <h2 className="serif text-3xl">Real Moments</h2>
          </div>
          
          <div className="flex gap-3 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
            {ugcItems.map((item) => (
              <div key={item.id} className="ugc-card snap-start flex-shrink-0 rounded-sm overflow-hidden">
                <img src={item.image} alt={item.caption} />
                <div className="ugc-caption">
                  {item.caption}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Shop by Category */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.15em] text-velmora-text-muted mb-2">DISCOVER</p>
          <h2 className="serif text-4xl">Shop by Category</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { name: "Earrings", path: "/shop?category=Earrings", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80" },
            { name: "Necklaces", path: "/shop?category=Necklaces", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80" },
            { name: "Huggies", path: "/shop?category=Huggies", image: "https://images.unsplash.com/photo-1535632787350-4e68b0f9b8b7?w=800&q=80" },
          ].map((cat) => (
            <Link key={cat.name} to={cat.path} className="category-tile group rounded-sm overflow-hidden">
              <img src={cat.image} alt={cat.name} />
              <div className="category-tile-label">
                <span className="text-white text-xl serif tracking-wider">{cat.name}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 7. Brand Story Split */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2">
          <div className="aspect-[4/3] md:aspect-auto overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=1000&q=80" 
              alt="Velmora atelier - hands crafting fine jewelry"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex items-center p-10 md:p-16 lg:p-20">
            <div>
              <p className="text-xs tracking-[0.15em] text-velmora-text-muted mb-3">EST. 2019</p>
              <h2 className="serif text-4xl mb-6">Our Story</h2>
              <div className="prose prose-sm text-velmora-text-muted max-w-prose">
                <p className="mb-4">
                  Velmora was born from a simple belief: that beautiful jewelry shouldn't require compromise. 
                  We create demi-fine pieces that feel precious but live in the real world.
                </p>
                <p className="mb-8">
                  Each piece is designed in our New York studio and crafted with care using responsibly 
                  sourced materials. We believe in jewelry that becomes part of your story.
                </p>
              </div>
              <Link to="/about" className="btn btn-outline text-sm">
                Read More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Testimonials */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.15em] text-velmora-text-muted mb-2">LOVED BY MANY</p>
          <h2 className="serif text-4xl">What Our Customers Say</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="text-center">
              <div className="stars flex justify-center mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="text-sm text-velmora-text-muted mb-4 leading-relaxed">"{t.text}"</p>
              <p className="text-sm font-medium">— {t.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 9. Newsletter */}
      <section className="bg-velmora-bg py-16">
        <div className="max-w-md mx-auto px-6 text-center">
          <h3 className="serif text-3xl text-white mb-3">Join for 10% off</h3>
          <p className="text-velmora-stone text-sm mb-8">
            Be the first to know about new arrivals, private sales, and styling stories.
          </p>
          <form 
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thank you! You've been added to our list. (Demo)");
              e.target.reset();
            }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <input 
              type="email" 
              placeholder="Your email address" 
              required
              className="input flex-1 bg-white/95 border-white/20 text-velmora-text"
            />
            <button type="submit" className="btn btn-gold whitespace-nowrap">
              Subscribe
            </button>
          </form>
          <p className="text-[10px] text-velmora-stone mt-4 tracking-wide">
            We respect your inbox. Unsubscribe anytime.
          </p>
        </div>
      </section>

      {/* 10. Footer is handled globally */}
    </div>
  );
};

export default Home;