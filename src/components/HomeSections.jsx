import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight, Star, Truck, RotateCcw, Shield, Sparkles } from 'lucide-react';
import ProductCard from './ProductCard';
import { products, getBestsellers } from '../data/products';

/* ======================== HERO ======================== */
export function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] flex items-center">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        data-strk-bg-id="hero-background-velmora"
        data-strk-bg="[hero-title] [hero-subtitle]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
        style={{
          backgroundImage: 'linear-gradient(to right, rgba(26,23,20,0.7) 0%, rgba(26,23,20,0.3) 100%)',
        }}
      />
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-img-a8f2c1"
        data-strk-bg="[hero-title] [hero-subtitle]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=1920&h=1080&fit=crop&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          mixBlendMode: 'soft-light',
          opacity: 0.4,
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-site mx-auto section-padding w-full">
        <div className="max-w-xl">
          <p className="font-sans text-xs uppercase tracking-[0.2em] text-gold-300 mb-4 animate-fade-in">
            Demi-Fine Jewelry
          </p>
          <h1
            id="hero-title"
            className="font-serif text-display text-white mb-6 animate-fade-in"
            style={{ animationDelay: '0.1s' }}
          >
            Crafted to be Treasured
          </h1>
          <p
            id="hero-subtitle"
            className="font-sans text-body-lg text-white/70 mb-8 max-w-md animate-fade-in"
            style={{ animationDelay: '0.2s' }}
          >
            Timeless 18K gold plated jewelry, designed for the modern woman. Accessible luxury that lasts.
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <Link to="/shop" className="btn-primary">
              Shop the Collection
            </Link>
            <Link to="/about" className="btn-gold-outline border-white/30 text-white hover:bg-white hover:text-charcoal hover:border-white">
              Our Story
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in" style={{ animationDelay: '0.6s' }}>
        <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-white/40">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent" />
      </div>
    </section>
  );
}

/* ======================== TRUST BAR ======================== */
export function TrustBar() {
  const items = [
    { icon: Truck, text: 'Free Worldwide Shipping' },
    { icon: RotateCcw, text: '30-Day Returns' },
    { icon: Sparkles, text: '18K Gold Plated' },
    { icon: Shield, text: 'Hypoallergenic' },
  ];

  return (
    <section className="bg-charcoal py-4 lg:py-5">
      <div className="max-w-site mx-auto section-padding">
        <div className="flex flex-wrap items-center justify-center gap-x-8 lg:gap-x-14 gap-y-2">
          {items.map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-2.5">
              <Icon size={14} strokeWidth={1.5} className="text-gold-400" />
              <span className="font-sans text-[11px] uppercase tracking-[0.1em] text-white/70">
                {text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ======================== BESTSELLERS ======================== */
export function Bestsellers() {
  const bestsellers = getBestsellers();

  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-site mx-auto section-padding">
        <div className="text-center mb-12 lg:mb-16">
          <p className="font-sans text-xs uppercase tracking-[0.2em] text-gold-600 mb-3">
            Most Loved
          </p>
          <h2 className="font-serif text-heading-2 lg:text-heading-1 text-charcoal mb-4">
            Bestsellers
          </h2>
          <p className="font-sans text-body text-charcoal/50 max-w-md mx-auto">
            Our customers&apos; favorite pieces — timeless designs that speak for themselves.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
          {bestsellers.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/shop" className="btn-outline">
            View All Jewelry
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ======================== UGC REEL ======================== */
export function UGCReel() {
  const scrollRef = useRef(null);

  const reels = [
    { caption: 'Golden hour vibes', color: '#d4a84e', imgUrl: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=700&fit=crop' },
    { caption: 'Everyday elegance', color: '#b87333', imgUrl: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=700&fit=crop' },
    { caption: 'Stack & layer', color: '#c4943a', imgUrl: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=400&h=700&fit=crop' },
    { caption: 'Gift yourself', color: '#d4935a', imgUrl: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=400&h=700&fit=crop' },
    { caption: 'Minimal & chic', color: '#e8c67a', imgUrl: 'https://images.unsplash.com/photo-1629224316810-9d8805b95e76?w=400&h=700&fit=crop' },
    { caption: 'Date night ready', color: '#a67528', imgUrl: 'https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?w=400&h=700&fit=crop' },
  ];

  const scroll = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir * 240, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-charcoal overflow-hidden">
      <div className="max-w-site mx-auto section-padding">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="font-sans text-xs uppercase tracking-[0.2em] text-gold-400 mb-3">
              @VelmoraJewelry
            </p>
            <h2 className="font-serif text-heading-2 text-white">
              Styled by You
            </h2>
          </div>
          <div className="hidden sm:flex gap-2">
            <button
              onClick={() => scroll(-1)}
              className="w-10 h-10 flex items-center justify-center border border-white/20 text-white/60 hover:border-gold-400 hover:text-gold-400 transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => scroll(1)}
              className="w-10 h-10 flex items-center justify-center border border-white/20 text-white/60 hover:border-gold-400 hover:text-gold-400 transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide pb-4 px-4 sm:px-6 lg:px-8 snap-x snap-mandatory"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {/* Leading spacer */}
        <div className="flex-shrink-0 w-0 lg:w-[calc((100vw-1440px)/2+16px)]" />
        {reels.map((reel, i) => (
          <div
            key={i}
            className="relative flex-shrink-0 w-[180px] sm:w-[220px] lg:w-[260px] aspect-[9/16] overflow-hidden snap-start group"
          >
            <div
              className="absolute inset-0 bg-gradient-to-b from-transparent to-charcoal/80"
              data-strk-bg-id={`ugc-reel-bg-${i}`}
              data-strk-bg="[ugc-caption-${i}]"
              data-strk-bg-ratio="9x16"
              data-strk-bg-width="500"
              style={{
                backgroundColor: reel.color,
                opacity: 0.3,
              }}
            />
            <div
              className="absolute inset-0"
              data-strk-bg-id={`ugc-reel-img-${i}`}
              data-strk-bg="[ugc-caption-${i}]"
              data-strk-bg-ratio="9x16"
              data-strk-bg-width="500"
              style={{
                backgroundImage: `url(${reel.imgUrl})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <p
                id={`ugc-caption-${i}`}
                className="font-serif text-base text-white/90 leading-snug"
              >
                {reel.caption}
              </p>
            </div>
            <div className="absolute inset-0 bg-gold-600/0 group-hover:bg-gold-600/10 transition-colors duration-300" />
          </div>
        ))}
        <div className="flex-shrink-0 w-4" />
      </div>
    </section>
  );
}

/* ======================== CATEGORY TILES ======================== */
export function CategoryTiles() {
  const categories = [
    {
      id: 'earrings',
      name: 'Earrings',
      description: 'From studs to statement drops',
      imgId: 'cat-tile-earrings-7d2f',
    },
    {
      id: 'necklaces',
      name: 'Necklaces',
      description: 'Layering essentials & pendants',
      imgId: 'cat-tile-necklaces-3e9a',
    },
    {
      id: 'huggies',
      name: 'Huggies',
      description: 'Everyday hoop perfection',
      imgId: 'cat-tile-huggies-1b4c',
    },
  ];

  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-site mx-auto section-padding">
        <div className="text-center mb-12">
          <p className="font-sans text-xs uppercase tracking-[0.2em] text-gold-600 mb-3">
            Explore
          </p>
          <h2 className="font-serif text-heading-2 lg:text-heading-1 text-charcoal">
            Shop by Category
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
          {categories.map(cat => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative aspect-[4/5] overflow-hidden bg-ivory-warm"
            >
              <img
                data-strk-img-id={cat.imgId}
                data-strk-img={`[cat-name-${cat.id}] [cat-desc-${cat.id}]`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-luxury group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                <h3
                  id={`cat-name-${cat.id}`}
                  className="font-serif text-2xl lg:text-3xl text-white tracking-[0.04em] mb-1"
                >
                  {cat.name}
                </h3>
                <p
                  id={`cat-desc-${cat.id}`}
                  className="font-sans text-sm text-white/60 mb-4"
                >
                  {cat.description}
                </p>
                <span className="inline-flex items-center gap-2 font-sans text-xs uppercase tracking-[0.12em] text-white/80 group-hover:text-gold-300 transition-colors">
                  Explore
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ======================== BRAND STORY ======================== */
export function BrandStory() {
  return (
    <section className="py-16 lg:py-24 bg-ivory-warm">
      <div className="max-w-site mx-auto section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          <div className="relative aspect-[4/5] lg:aspect-[3/4] overflow-hidden bg-ivory-dark">
            <img
              data-strk-img-id="brand-story-img-c4e8a2"
              data-strk-img="[brand-story-title] [brand-story-text]"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora brand story"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="lg:py-8">
            <p className="font-sans text-xs uppercase tracking-[0.2em] text-gold-600 mb-4">
              Our Story
            </p>
            <h2
              id="brand-story-title"
              className="font-serif text-heading-2 lg:text-heading-1 text-charcoal mb-6"
            >
              Jewelry That Feels Like You
            </h2>
            <p
              id="brand-story-text"
              className="font-sans text-body-lg text-charcoal/60 mb-6 leading-relaxed"
            >
              Velmora was born from a simple belief: luxury shouldn&apos;t be out of reach. We create demi-fine jewelry that bridges the gap between costume and fine jewelry — pieces that feel special every single day.
            </p>
            <p className="font-sans text-body text-charcoal/50 mb-8 leading-relaxed">
              Every piece is crafted with 18K gold plating over hypoallergenic surgical steel, designed to last without the luxury price tag. From our studio to your jewelry box, each design is made to be treasured.
            </p>
            <Link to="/about" className="btn-outline">
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ======================== TESTIMONIALS ======================== */
export function Testimonials() {
  const reviews = [
    {
      name: 'Sarah M.',
      text: 'The quality is incredible for the price. I wear my Golden Sphere Huggies every single day and they still look brand new after 6 months.',
      rating: 5,
    },
    {
      name: 'Jessica L.',
      text: 'Bought the Royal Heirloom Set as a gift for my sister and she absolutely loved it. The packaging is beautiful and the jewelry is stunning.',
      rating: 5,
    },
    {
      name: 'Amanda K.',
      text: 'Finally found jewelry that doesn\'t irritate my sensitive skin. The Amber Lace Earrings are my new favorite — so elegant and lightweight.',
      rating: 5,
    },
  ];

  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-site mx-auto section-padding">
        <div className="text-center mb-12 lg:mb-16">
          <p className="font-sans text-xs uppercase tracking-[0.2em] text-gold-600 mb-3">
            Customer Love
          </p>
          <h2 className="font-serif text-heading-2 lg:text-heading-1 text-charcoal">
            What They Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {reviews.map((review, i) => (
            <div
              key={i}
              className="bg-white p-8 lg:p-10 border border-ivory-dark/50"
            >
              <div className="flex gap-0.5 mb-4">
                {[...Array(review.rating)].map((_, j) => (
                  <Star key={j} size={14} fill="#d4a84e" className="text-gold-400" />
                ))}
              </div>
              <p className="font-sans text-body text-charcoal/70 mb-6 leading-relaxed">
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gold-100 flex items-center justify-center">
                  <span className="font-serif text-sm text-gold-700">
                    {review.name.charAt(0)}
                  </span>
                </div>
                <span className="font-sans text-sm text-charcoal font-medium">
                  {review.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ======================== NEWSLETTER ======================== */
export function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section className="py-16 lg:py-20 bg-charcoal">
      <div className="max-w-site mx-auto section-padding">
        <div className="max-w-lg mx-auto text-center">
          <p className="font-sans text-xs uppercase tracking-[0.2em] text-gold-400 mb-3">
            Stay in Touch
          </p>
          <h2 className="font-serif text-heading-2 text-white mb-3">
            Join for 10% Off
          </h2>
          <p className="font-sans text-sm text-white/50 mb-8">
            Subscribe to our newsletter for exclusive offers, new arrivals, and styling tips.
          </p>
          {submitted ? (
            <p className="font-sans text-sm text-gold-400">
              Thank you for subscribing! Check your email for your discount code.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-4 py-3 bg-white/10 border border-white/15 text-white placeholder:text-white/30 font-sans text-sm focus:outline-none focus:border-gold-400 transition-colors"
              />
              <button type="submit" className="btn-primary whitespace-nowrap">
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
