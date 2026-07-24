import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, ChevronRight } from 'lucide-react';
import ProductCard from '@/components/product/ProductCard';
import { useImageLoader } from '@/hooks/useImageLoader';
import { getBestsellers, CATEGORIES } from '@/data/products';

const PLACEHOLDER = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E";

const trustItems = [
  'Free Worldwide Shipping',
  '30-Day Returns',
  '18K Gold Plated',
  'Hypoallergenic',
];

const categories = [
  { key: CATEGORIES.EARRINGS, label: 'Earrings' },
  { key: CATEGORIES.NECKLACES, label: 'Necklaces' },
  { key: CATEGORIES.HUGGIES, label: 'Huggies' },
];

const ugcPosts = [
  { id: 'ugc-1', caption: 'Everyday gold', imgId: 'velmora-ugc-1' },
  { id: 'ugc-2', caption: 'Date night shine', imgId: 'velmora-ugc-2' },
  { id: 'ugc-3', caption: 'Layered moments', imgId: 'velmora-ugc-3' },
  { id: 'ugc-4', caption: 'Gift to myself', imgId: 'velmora-ugc-4' },
  { id: 'ugc-5', caption: 'Soft gold light', imgId: 'velmora-ugc-5' },
];

const testimonials = [
  { name: 'Claire M.', text: 'The quality is stunning for the price. I wear my Sphere Huggies every single day.', rating: 5 },
  { name: 'Danielle K.', text: 'Bought the Royal Heirloom Set as a gift and ended up keeping one for myself.', rating: 5 },
  { name: 'Priya S.', text: 'Quiet luxury is exactly right. Packaging, weight, finish — everything feels premium.', rating: 5 },
];

const Home = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const bestsellers = getBestsellers();
  const containerRef = useImageLoader();

  const handleNewsletter = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="relative h-[85vh] min-h-[600px] w-full overflow-hidden bg-charcoal">
        <div
          className="absolute inset-0"
          data-strk-bg-id="hero-bg-velmora"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-espresso/30" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 sm:px-6">
          <p className="font-sans text-xs md:text-sm uppercase tracking-[0.25em] text-cream/80 mb-5">
            Demi-Fine Gold Jewelry
          </p>
          <h1
            id="hero-title"
            className="font-serif text-4xl md:text-6xl lg:text-7xl text-cream font-light max-w-4xl leading-[1.1] mb-6"
          >
            Crafted to be Treasured
          </h1>
          <p
            id="hero-subtitle"
            className="font-sans text-base md:text-lg text-cream/85 max-w-xl mb-10 font-light"
          >
            Timeless pieces for the modern wardrobe — designed for layering,
            gifting, and everyday luxury.
          </p>
          <Link to="/shop" className="btn-primary">
            Shop the Collection
          </Link>
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-cream border-b border-line">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-center">
            {trustItems.map((item, i) => (
              <span
                key={item}
                className={`font-sans text-[11px] md:text-xs uppercase tracking-widest text-stone ${
                  i !== trustItems.length - 1 ? 'md:border-r md:border-line md:pr-8' : ''
                }`}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Bestsellers */}
      <section className="py-16 md:py-24 lg:py-32 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <p className="font-sans text-xs uppercase tracking-[0.25em] text-gold mb-3">Curated Favorites</p>
            <h2 id="section-bestsellers" className="section-title">
              Bestsellers
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-10 md:gap-x-6 md:gap-y-12">
            {bestsellers.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-12 md:mt-16">
            <Link to="/shop" className="btn-secondary">
              Shop All
            </Link>
          </div>
        </div>
      </section>

      {/* UGC Reel Row */}
      <section className="py-16 md:py-20 bg-espresso overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 flex items-end justify-between">
          <div>
            <p className="font-sans text-xs uppercase tracking-[0.25em] text-gold mb-3">@velmorafine</p>
            <h2 className="font-serif text-2xl md:text-4xl text-cream font-light">Worn by You</h2>
          </div>
          <Link to="#" className="hidden md:flex items-center text-cream/80 text-xs uppercase tracking-widest hover:text-gold transition-colors">
            Follow Us <ArrowRight size={14} className="ml-2" />
          </Link>
        </div>
        <div className="flex gap-4 overflow-x-auto hide-scrollbar px-4 sm:px-6 lg:px-8 pb-4">
          {ugcPosts.map((post, i) => (
            <div
              key={post.id}
              className="relative flex-shrink-0 w-[160px] md:w-[220px] aspect-[9/16] rounded-sm overflow-hidden group"
            >
              <img
                data-strk-img-id={post.imgId}
                data-strk-img={`[ugc-caption-${post.id}]`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="500"
                src={PLACEHOLDER}
                alt={post.caption}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/70 via-transparent to-transparent" />
              <p
                id={`ugc-caption-${post.id}`}
                className="absolute bottom-4 left-4 right-4 font-serif text-cream text-sm md:text-base italic"
              >
                {post.caption}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Shop by Category */}
      <section className="py-16 md:py-24 lg:py-32 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <p className="font-sans text-xs uppercase tracking-[0.25em] text-gold mb-3">Explore</p>
            <h2 className="section-title">Shop by Category</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            <Link
              to={`/shop?category=${CATEGORIES.EARRINGS}`}
              className="group relative aspect-[4/5] overflow-hidden bg-charcoal"
            >
              <img
                data-strk-img-id="velmora-cat-earrings"
                data-strk-img="[category-label-earrings]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src={PLACEHOLDER}
                alt="Earrings"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-espresso/20 group-hover:bg-espresso/10 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3
                  id="category-label-earrings"
                  className="font-serif text-2xl md:text-3xl text-cream tracking-wide border-b border-transparent group-hover:border-gold pb-1 transition-all duration-300"
                >
                  Earrings
                </h3>
              </div>
            </Link>

            <Link
              to={`/shop?category=${CATEGORIES.NECKLACES}`}
              className="group relative aspect-[4/5] overflow-hidden bg-charcoal"
            >
              <img
                data-strk-img-id="velmora-cat-necklaces"
                data-strk-img="[category-label-necklaces]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src={PLACEHOLDER}
                alt="Necklaces"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-espresso/20 group-hover:bg-espresso/10 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3
                  id="category-label-necklaces"
                  className="font-serif text-2xl md:text-3xl text-cream tracking-wide border-b border-transparent group-hover:border-gold pb-1 transition-all duration-300"
                >
                  Necklaces
                </h3>
              </div>
            </Link>

            <Link
              to={`/shop?category=${CATEGORIES.HUGGIES}`}
              className="group relative aspect-[4/5] overflow-hidden bg-charcoal"
            >
              <img
                data-strk-img-id="velmora-cat-huggies"
                data-strk-img="[category-label-huggies]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src={PLACEHOLDER}
                alt="Huggies"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-espresso/20 group-hover:bg-espresso/10 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3
                  id="category-label-huggies"
                  className="font-serif text-2xl md:text-3xl text-cream tracking-wide border-b border-transparent group-hover:border-gold pb-1 transition-all duration-300"
                >
                  Huggies
                </h3>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-16 md:py-24 lg:py-32 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
            <div className="relative aspect-[4/5] bg-charcoal overflow-hidden">
              <img
                data-strk-img-id="brand-story-velmora"
                data-strk-img="[brand-story-title] [brand-story-text]"
                data-strk-img-ratio="3x4"
                data-strk-img-width="900"
                src={PLACEHOLDER}
                alt="Velmora jewelry craftsmanship"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="lg:pl-8">
              <p className="font-sans text-xs uppercase tracking-[0.25em] text-gold mb-4">Our Story</p>
              <h2 id="brand-story-title" className="section-title mb-6">
                Designed for Modern Heirlooms
              </h2>
              <p id="brand-story-text" className="font-sans text-stone leading-relaxed mb-6">
                Velmora was born from a simple belief: fine jewelry should feel accessible,
                wearable, and deeply personal. Each piece is crafted in 18k gold plate with
                responsibly sourced materials, then finished by hand in small batches.
              </p>
              <p className="font-sans text-stone leading-relaxed mb-8">
                We design for the quiet moments — morning coffee, a meeting that matters,
                a gift that says what words cannot.
              </p>
              <Link to="/about" className="inline-flex items-center font-serif text-lg text-espresso hover:text-gold transition-colors group">
                Read Our Story <ChevronRight size={18} className="ml-1 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-cream border-t border-line">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <p className="font-sans text-xs uppercase tracking-[0.25em] text-gold mb-3">Reviews</p>
            <h2 className="section-title">Loved by Our Customers</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white p-8 shadow-card text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="fill-gold text-gold" strokeWidth={1.5} />
                  ))}
                </div>
                <p className="font-sans text-stone leading-relaxed mb-6 italic">“{t.text}”</p>
                <p className="font-serif text-sm tracking-widest uppercase text-espresso">{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 md:py-24 bg-gold">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-espresso mb-4">
            Join for 10% Off
          </h2>
          <p className="font-sans text-espresso/80 mb-8">
            Be the first to know about new arrivals, exclusive offers, and styling notes.
          </p>
          {subscribed ? (
            <div className="max-w-md mx-auto px-6 py-4 bg-white/30 text-espresso text-center">
              <p className="font-serif text-lg mb-1">Welcome to Velmora</p>
              <p className="font-sans text-sm">Your 10% code is <span className="font-semibold">VELMORA10</span></p>
            </div>
          ) : (
            <form onSubmit={handleNewsletter} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                required
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-3.5 bg-white border-0 text-espresso placeholder:text-taupe font-sans text-sm focus:outline-none focus:ring-2 focus:ring-espresso"
              />
              <button type="submit" className="btn-secondary border-espresso text-espresso hover:bg-espresso hover:text-cream">
                Subscribe
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};

export default Home;
