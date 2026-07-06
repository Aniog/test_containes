import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ArrowRight, Mail, Truck, RotateCcw, Shield, Heart } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products, testimonials, categories } from '@/data/products';
import ProductCard from '@/components/ProductCard';

const trustItems = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Shield, label: '18K Gold Plated' },
  { icon: Heart, label: 'Hypoallergenic' },
];

const ugcItems = [
  { id: 'ugc-1', caption: 'Everyday elegance' },
  { id: 'ugc-2', caption: 'Stacked & styled' },
  { id: 'ugc-3', caption: 'Soft gold glow' },
  { id: 'ugc-4', caption: 'Minimal magic' },
  { id: 'ugc-5', caption: 'Gift-ready' },
];

export default function Home() {
  const containerRef = useRef(null);
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <div ref={containerRef}>
      {/* 1. Hero */}
      <section className="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden">
        <img
          alt="Velmora hero"
          className="absolute inset-0 w-full h-full object-cover"
          data-strk-img-id="hero-img-velmora"
          data-strk-img={`[hero-headline] [hero-subheadline]`}
          data-strk-img-ratio="16x9"
          data-strk-img-width="1600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <p className="text-xs md:text-sm font-medium tracking-[0.3em] uppercase text-goldlight mb-4">
            Velmora Fine Jewelry
          </p>
          <h1
            id="hero-headline"
            className="font-serif text-4xl md:text-6xl lg:text-7xl text-white max-w-3xl leading-[1.1]"
          >
            Crafted to be Treasured
          </h1>
          <p
            id="hero-subheadline"
            className="mt-5 text-sm md:text-base text-white/80 max-w-md font-light"
          >
            Demi-fine gold jewelry designed for the modern woman. Small-batch, consciously crafted.
          </p>
          <Link
            to="/shop"
            className="mt-8 px-10 py-3.5 bg-gold text-espresso text-xs font-semibold tracking-widest uppercase hover:bg-goldlight transition-colors duration-300"
          >
            Shop the Collection
          </Link>
        </div>
      </section>

      {/* 2. Trust Bar */}
      <section className="bg-cream border-b border-sand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 md:gap-x-10">
            {trustItems.map((item) => (
              <div key={item.label} className="flex items-center gap-2 text-warmgray">
                <item.icon className="w-4 h-4 text-gold" />
                <span className="text-[11px] md:text-xs font-medium tracking-wide">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Bestsellers */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs font-medium tracking-[0.25em] uppercase text-gold mb-2">Curated For You</p>
            <h2 className="font-serif text-3xl md:text-4xl text-charcoal">Bestsellers</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            {products.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase text-charcoal hover:text-gold transition-colors"
            >
              View All Products <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. UGC Reel Row */}
      <section className="py-12 md:py-16 bg-parchment">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <h2 className="font-serif text-2xl md:text-3xl text-charcoal text-center">Styled by You</h2>
          <p className="text-center text-sm text-warmgray mt-2">Share your look with #VelmoraWoman</p>
        </div>
        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex gap-4 px-4 sm:px-6 lg:px-8 pb-2 max-w-7xl mx-auto">
            {ugcItems.map((ugc) => (
              <div
                key={ugc.id}
                className="relative flex-shrink-0 w-[180px] md:w-[220px] aspect-[9/16] rounded-sm overflow-hidden group"
              >
                <img
                  alt={ugc.caption}
                  className="absolute inset-0 w-full h-full object-cover"
                  data-strk-img-id={`ugc-img-${ugc.id}`}
                  data-strk-img={`[ugc-caption-${ugc.id}]`}
                  data-strk-img-ratio="9x16"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <p
                  id={`ugc-caption-${ugc.id}`}
                  className="absolute bottom-4 left-4 right-4 font-serif text-sm text-white italic"
                >
                  {ugc.caption}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Shop by Category */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs font-medium tracking-[0.25em] uppercase text-gold mb-2">Explore</p>
            <h2 className="font-serif text-3xl md:text-4xl text-charcoal">Shop by Category</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {categories.map((cat) => (
              <Link
                key={cat.id}
                to={`/shop?category=${cat.id}`}
                className="group relative aspect-[4/5] md:aspect-[3/4] overflow-hidden rounded-sm"
              >
                <img
                  alt={cat.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  data-strk-img-id={`cat-img-${cat.id}`}
                  data-strk-img={`[cat-name-${cat.id}]`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3
                    id={`cat-name-${cat.id}`}
                    className="font-serif text-2xl md:text-3xl text-white tracking-widest uppercase"
                  >
                    {cat.name}
                  </h3>
                </div>
                <div className="absolute bottom-6 left-0 right-0 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-xs text-white tracking-widest uppercase border-b border-white/60 pb-1">
                    Shop Now
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Brand Story */}
      <section className="py-16 md:py-24 bg-parchment">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
            <div className="relative aspect-[4/5] md:aspect-[3/4] rounded-sm overflow-hidden">
              <img
                alt="Velmora brand story"
                className="absolute inset-0 w-full h-full object-cover"
                data-strk-img-id="story-img-velmora"
                data-strk-img={`[story-title] [story-text]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="700"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
            </div>
            <div className="md:py-8">
              <p className="text-xs font-medium tracking-[0.25em] uppercase text-gold mb-3">Our Story</p>
              <h2
                id="story-title"
                className="font-serif text-3xl md:text-4xl lg:text-5xl text-charcoal leading-tight"
              >
                Jewelry With Intention
              </h2>
              <p
                id="story-text"
                className="mt-6 text-warmgray leading-relaxed text-sm md:text-base"
              >
                Velmora was born from a simple belief: beautiful jewelry should not be out of reach. 
                We design demi-fine pieces in small batches, using 18K gold plating and responsibly sourced materials. 
                Every curve, clasp, and crystal is chosen to make you feel radiant — every single day.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 mt-8 text-xs font-medium tracking-widest uppercase text-charcoal hover:text-gold transition-colors"
              >
                Read Our Story <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Testimonials */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs font-medium tracking-[0.25em] uppercase text-gold mb-2">Reviews</p>
            <h2 className="font-serif text-3xl md:text-4xl text-charcoal">Loved By Many</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((t) => (
              <div key={t.id} className="bg-parchment p-8 rounded-sm">
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                  ))}
                </div>
                <p className="text-sm text-charcoal leading-relaxed italic">"{t.text}"</p>
                <p className="mt-5 text-xs font-medium tracking-widest uppercase text-warmgray">
                  {t.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Newsletter */}
      <section className="py-16 md:py-20 bg-charcoal">
        <div className="max-w-xl mx-auto px-4 sm:px-6 text-center">
          <Mail className="w-8 h-8 text-gold mx-auto mb-4" />
          <h2 className="font-serif text-2xl md:text-3xl text-white">Join for 10% Off</h2>
          <p className="mt-3 text-sm text-taupe">
            Subscribe for exclusive early access to new drops, styling tips, and a welcome gift.
          </p>
          {subscribed ? (
            <p className="mt-6 text-gold text-sm font-medium">Thank you for subscribing!</p>
          ) : (
            <form onSubmit={handleSubscribe} className="mt-6 flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/10 text-white placeholder:text-taupe text-sm focus:outline-none focus:border-gold transition-colors"
              />
              <button
                type="submit"
                className="px-8 py-3 bg-gold text-espresso text-xs font-semibold tracking-widest uppercase hover:bg-goldlight transition-colors"
              >
                Subscribe
              </button>
            </form>
          )}
          <p className="mt-4 text-[11px] text-warmgray/60">No spam. Unsubscribe anytime.</p>
        </div>
      </section>
    </div>
  );
}
