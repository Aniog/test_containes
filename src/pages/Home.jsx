import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import ProductCard from '../components/ui/ProductCard';
import Button from '../components/ui/Button';

const Home = () => {
  const bestsellers = products.slice(0, 5);

  // UGC-style images (using jewelry on models)
  const ugcItems = [
    { id: 1, caption: "Morning light", img: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&q=80" },
    { id: 2, caption: "Golden hour", img: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=400&q=80" },
    { id: 3, caption: "Everyday elegance", img: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&q=80" },
    { id: 4, caption: "Soft moments", img: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=400&q=80" },
    { id: 5, caption: "Timeless", img: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=400&q=80" },
  ];

  const categories = [
    { name: "Earrings", slug: "Earrings", img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=80" },
    { name: "Necklaces", slug: "Necklaces", img: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=80" },
    { name: "Huggies", slug: "Huggies", img: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=600&q=80" },
  ];

  const testimonials = [
    { name: "Elena M.", text: "The quality is exceptional. I wear my huggies every day and they still look brand new.", rating: 5 },
    { name: "Sofia R.", text: "Bought the Royal Heirloom Set as a gift for my sister. She cried. Worth every penny.", rating: 5 },
    { name: "Aisha K.", text: "Finally found jewelry that doesn't irritate my sensitive skin. The gold is so warm and beautiful.", rating: 5 },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center bg-bg-deep overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1600&q=90" 
            alt="Velmora Fine Jewelry - Woman wearing gold necklace"
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-3xl">
          <h1 className="text-white text-5xl md:text-6xl mb-6 tracking-[-0.02em]">
            Crafted to be Treasured
          </h1>
          <p className="text-white/90 text-lg md:text-xl mb-10 max-w-md mx-auto">
            Demi-fine jewelry for the woman who values quiet beauty.
          </p>
          <Link to="/shop">
            <Button variant="primary" size="lg" className="bg-white text-text hover:bg-white/90 hover:text-text border-white">
              Shop the Collection
            </Button>
          </Link>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 text-xs tracking-[3px]">
          SCROLL TO DISCOVER
        </div>
      </section>

      {/* Trust Bar */}
      <div className="trust-bar py-4">
        <div className="container">
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-2 text-xs tracking-[0.15em] text-text-muted text-center">
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

      {/* Bestsellers */}
      <section className="section container">
        <div className="flex items-end justify-between mb-8">
          <div>
            <span className="caption">Curated for you</span>
            <h2 className="mt-1">Bestsellers</h2>
          </div>
          <Link to="/shop" className="text-sm underline underline-offset-4 hidden md:block">
            View all
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-8 md:hidden">
          <Link to="/shop" className="text-sm underline underline-offset-4">
            View all products →
          </Link>
        </div>
      </section>

      {/* UGC Reel Row */}
      <section className="py-12 bg-surface-warm">
        <div className="container">
          <div className="flex items-center justify-between mb-6">
            <div>
              <span className="caption">As seen on you</span>
              <h3 className="mt-1">Real moments, real beauty</h3>
            </div>
          </div>
          
          <div className="flex gap-3 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
            {ugcItems.map((item) => (
              <div key={item.id} className="ugc-card snap-start">
                <img src={item.img} alt={item.caption} />
                <div className="ugc-overlay">
                  <p className="ugc-caption">{item.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shop by Category */}
      <section className="section container">
        <div className="text-center mb-10">
          <span className="caption">Find your piece</span>
          <h2 className="mt-1">Shop by Category</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {categories.map((cat) => (
            <Link 
              key={cat.slug} 
              to={`/shop?category=${cat.slug}`}
              className="category-tile aspect-[16/10] md:aspect-[4/3] block"
            >
              <img src={cat.img} alt={cat.name} className="w-full h-full object-cover" />
              <div className="overlay" />
              <span className="category-label">{cat.name}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Brand Story */}
      <section className="section bg-surface">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="aspect-[4/3] bg-surface-warm overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=900&q=80" 
                alt="Velmora atelier - hands crafting jewelry"
                className="w-full h-full object-cover"
              />
            </div>
            
            <div>
              <span className="caption">Since 2019</span>
              <h2 className="mt-2 mb-6">Our Story</h2>
              <div className="body-text text-text-muted space-y-4 mb-8">
                <p>
                  Velmora was born from a simple belief: that beautiful jewelry shouldn't require compromise.
                </p>
                <p>
                  We design demi-fine pieces that feel precious but live in the real world—worn daily, 
                  passed down, loved for years. Each piece is crafted with intention in small batches, 
                  using responsibly sourced materials and traditional techniques.
                </p>
              </div>
              <Link to="/about">
                <Button variant="gold-outline">Read Our Story</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section container">
        <div className="text-center mb-10">
          <span className="caption">Kind words</span>
          <h2 className="mt-1">From our community</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {testimonials.map((t, i) => (
            <div key={i} className="testimonial">
              <div className="stars mb-4">★★★★★</div>
              <p className="text-sm leading-relaxed mb-6">"{t.text}"</p>
              <p className="text-xs text-text-muted">— {t.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="newsletter py-16">
        <div className="container max-w-md text-center">
          <h3 className="text-white text-2xl mb-3">Join for 10% off your first order</h3>
          <p className="text-white/70 text-sm mb-8">
            Be the first to know about new arrivals, private sales, and stories from the atelier.
          </p>
          
          <form 
            className="flex flex-col sm:flex-row gap-3"
            onSubmit={(e) => {
              e.preventDefault();
              alert('Thank you! You are now subscribed (demo).');
              e.target.reset();
            }}
          >
            <input 
              type="email" 
              placeholder="Your email address" 
              required
              className="flex-1 px-4 py-3 text-sm"
            />
            <Button type="submit" variant="primary" className="bg-white text-text hover:bg-white/90">
              Subscribe
            </Button>
          </form>
          
          <p className="text-[10px] text-white/50 mt-4 tracking-widest">
            WE RESPECT YOUR INBOX. UNSUBSCRIBE ANYTIME.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
