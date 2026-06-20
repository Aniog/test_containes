import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import Button from '../components/ui/Button';
import { products } from '../data/products';

// Editorial placeholder images for UGC and hero
const heroImage = 'https://picsum.photos/id/1011/2000/1400';
const storyImage = 'https://picsum.photos/id/106/1200/1400';

const ugcImages = [
  { id: 1, img: 'https://picsum.photos/id/1005/600/900', caption: 'Morning light' },
  { id: 2, img: 'https://picsum.photos/id/1009/600/900', caption: 'Golden hour' },
  { id: 3, img: 'https://picsum.photos/id/1012/600/900', caption: 'Everyday elegance' },
  { id: 4, img: 'https://picsum.photos/id/160/600/900', caption: 'Soft layers' },
  { id: 5, img: 'https://picsum.photos/id/201/600/900', caption: 'Effortless' },
];

const testimonials = [
  { name: 'Elena M.', text: 'The most beautiful pieces I own. I wear my huggies every single day.', rating: 5 },
  { name: 'Sofia R.', text: 'Gifted the Royal Heirloom Set to my sister. She cried. Worth every penny.', rating: 5 },
  { name: 'Aisha K.', text: 'Finally jewelry that feels expensive but doesn\'t break the bank. Obsessed.', rating: 5 },
];

const Home = () => {
  // Show 5 bestsellers (all products for demo)
  const bestsellers = products.slice(0, 5);

  return (
    <div className="pt-20">
      {/* 1. HERO */}
      <section className="relative h-[100dvh] min-h-[620px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-velmora-bg-dark">
          <img
            src={heroImage}
            alt="Velmora Fine Jewelry — Warm-lit gold jewelry on model"
            className="absolute inset-0 w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="text-white font-serif text-[clamp(2.75rem,7vw,4.5rem)] leading-[1.05] tracking-[-0.02em] mb-6">
            Crafted to be<br />Treasured
          </h1>
          <p className="text-white/90 text-lg md:text-xl mb-8 max-w-md mx-auto">
            Demi-fine gold jewelry for the woman who values quiet luxury.
          </p>
          <Link to="/shop">
            <Button variant="primary" size="lg">
              Shop the Collection
            </Button>
          </Link>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 text-xs tracking-[3px] uppercase">
          Scroll to explore
        </div>
      </section>

      {/* 2. TRUST BAR */}
      <div className="trust-bar py-4">
        <div className="container">
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-2 text-center">
            {[
              'Free Worldwide Shipping',
              '30-Day Returns',
              '18K Gold Plated',
              'Hypoallergenic',
            ].map((item, i) => (
              <div key={i} className="trust-item">{item}</div>
            ))}
          </div>
        </div>
      </div>

      {/* 3. BESTSELLERS */}
      <section className="section container">
        <div className="flex items-end justify-between mb-8">
          <div>
            <span className="caption">Curated for you</span>
            <h2 className="mt-1">Bestsellers</h2>
          </div>
          <Link to="/shop" className="hidden md:block text-sm uppercase tracking-widest hover:text-velmora-gold">
            View All →
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-8 md:hidden">
          <Link to="/shop" className="text-sm uppercase tracking-widest hover:text-velmora-gold">
            View All →
          </Link>
        </div>
      </section>

      {/* 4. UGC REEL */}
      <section className="section bg-velmora-surface-warm">
        <div className="container">
          <div className="mb-8">
            <span className="caption">As seen on you</span>
            <h2 className="mt-1">Real moments, real beauty</h2>
          </div>
          
          <div className="ugc-reel">
            {ugcImages.map((item) => (
              <div key={item.id} className="ugc-card">
                <img src={item.img} alt={item.caption} />
                <div className="ugc-overlay">
                  <p className="ugc-caption">{item.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SHOP BY CATEGORY */}
      <section className="section container">
        <div className="mb-8 text-center">
          <span className="caption">Find your signature piece</span>
          <h2 className="mt-1">Shop by Category</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { name: 'Earrings', slug: 'Earrings', img: 'https://picsum.photos/id/106/800/600' },
            { name: 'Necklaces', slug: 'Necklaces', img: 'https://picsum.photos/id/201/800/600' },
            { name: 'Huggies', slug: 'Huggies', img: 'https://picsum.photos/id/180/800/600' },
          ].map((cat) => (
            <Link
              key={cat.slug}
              to={`/shop?category=${cat.slug}`}
              className="category-tile group"
            >
              <img src={cat.img} alt={cat.name} />
              <div className="category-tile-label">
                <span>{cat.name}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 6. BRAND STORY */}
      <section className="section bg-velmora-surface">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div className="aspect-[4/3] bg-velmora-surface-warm overflow-hidden">
              <img
                src={storyImage}
                alt="Velmora atelier — hands crafting fine jewelry"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="py-4">
              <span className="caption">Since 2019</span>
              <h2 className="mt-2 mb-6">Our Story</h2>
              <div className="body-text space-y-4 max-w-prose">
                <p>
                  Velmora was born from a simple belief: that beautiful jewelry should be accessible without compromise.
                </p>
                <p>
                  We source the finest materials and work with master artisans to create pieces that feel like heirlooms from the very first wear.
                </p>
              </div>
              <Link to="/about" className="inline-block mt-6 text-sm uppercase tracking-[2px] border-b border-current pb-px hover:text-velmora-gold hover:border-velmora-gold">
                Read Our Story →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 7. TESTIMONIALS */}
      <section className="section container">
        <div className="text-center mb-10">
          <span className="caption">Loved by many</span>
          <h2 className="mt-1">What Our Clients Say</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {testimonials.map((t, i) => (
            <div key={i} className="testimonial">
              <div className="testimonial-stars">
                {Array.from({ length: t.rating }).map((_, idx) => (
                  <Star key={idx} size={16} className="inline" />
                ))}
              </div>
              <p className="testimonial-text">"{t.text}"</p>
              <div className="testimonial-author">— {t.name}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. NEWSLETTER */}
      <section className="newsletter py-16">
        <div className="container max-w-xl text-center">
          <h2 className="text-white mb-3">Join for 10% off your first order</h2>
          <p className="text-white/70 mb-8 text-sm">
            Be the first to know about new arrivals, private sales, and stories from the atelier.
          </p>
          
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
              placeholder="Your email address"
              required
              className="flex-1"
            />
            <Button variant="primary" type="submit">
              Subscribe
            </Button>
          </form>
          <p className="text-[10px] text-white/50 mt-3 tracking-widest">We respect your inbox. Unsubscribe anytime.</p>
        </div>
      </section>

      {/* 9. FOOTER is rendered globally in App */}
    </div>
  );
};

export default Home;