import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../strk-img-config.json';
import { ArrowRight, Star, Truck, RotateCcw, ShieldCheck, Droplets } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import StarRating from '../components/StarRating';
import { products } from '../data/products';

/* ─── Trust bar items ─── */
const trustItems = [
  { icon: Truck,       label: 'Free Worldwide Shipping' },
  { icon: RotateCcw,   label: '30-Day Returns' },
  { icon: ShieldCheck,  label: '18K Gold Plated' },
  { icon: Droplets,     label: 'Hypoallergenic' },
];

/* ─── UGC reel data ─── */
const ugcCards = [
  { id: 'ugc-1', caption: 'Golden hour glow', query: 'gold jewelry closeup on woman ear' },
  { id: 'ugc-2', caption: 'Everyday elegance', query: 'gold huggie earrings portrait' },
  { id: 'ugc-3', caption: 'Layered & loved', query: 'gold necklace layering portrait warm light' },
  { id: 'ugc-4', caption: 'Gift yourself', query: 'woman opening jewelry gift box' },
  { id: 'ugc-5', caption: 'Effortless beauty', query: 'gold earrings minimal portrait' },
  { id: 'ugc-6', caption: 'Made to shine', query: 'crystal necklace closeup model' },
];

/* ─── Testimonials ─── */
const testimonials = [
  {
    name: 'Sarah M.',
    rating: 5,
    text: 'The Golden Sphere Huggies are my new everyday pair. Light, comfortable, and so much more elevated than I expected at this price point.',
  },
  {
    name: 'Priya K.',
    rating: 5,
    text: 'Bought the Royal Heirloom Set as a birthday gift for my sister — the packaging was gorgeous and she absolutely loved it.',
  },
  {
    name: 'Emily R.',
    rating: 5,
    text: 'Three months in and my Amber Lace Earrings still look brand new. Velmora is now my go-to for gifting.',
  },
];

/* ─── Categories ─── */
const categories = [
  { id: 'earrings',  label: 'Earrings',  query: 'gold earrings product flatlay warm tone' },
  { id: 'necklaces', label: 'Necklaces', query: 'gold necklace jewelry editorial dark background' },
  { id: 'huggies',   label: 'Huggies',   query: 'gold huggie earrings closeup product photo' },
];

export default function HomePage({ navigate }) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <main ref={containerRef} className="page-enter">
      {/* ═══ HERO ═══ */}
      <section className="relative w-full h-[85vh] md:h-screen overflow-hidden bg-velmora-charcoal">
        <div
          className="absolute inset-0"
          data-strk-bg-id="velmora-hero-bg"
          data-strk-bg="gold jewelry luxury editorial warm lighting closeup"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-velmora-charcoal/80 via-velmora-charcoal/30 to-transparent" />

        {/* Hero content */}
        <div className="relative z-10 flex flex-col items-center justify-end h-full pb-20 md:pb-28 text-center px-6">
          <p className="text-velmora-gold text-xs tracking-[0.25em] uppercase font-medium mb-4">
            Velmora Fine Jewelry
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-[4rem] lg:text-[4.5rem] font-light text-white leading-[1.1] mb-5">
            Crafted to be Treasured
          </h1>
          <p className="text-white/70 text-sm md:text-base max-w-md leading-relaxed mb-8">
            Demi-fine 18K gold jewelry designed for the moments that matter — and every day in between.
          </p>
          <button
            onClick={() => navigate('/shop')}
            className="inline-flex items-center gap-2 px-8 h-12 bg-velmora-gold hover:bg-velmora-gold-light text-white text-xs tracking-[0.15em] uppercase font-medium rounded transition-all duration-300 border-none"
          >
            Shop the Collection
            <ArrowRight size={15} />
          </button>
        </div>
      </section>

      {/* ═══ TRUST BAR ═══ */}
      <section className="bg-velmora-cream hairline-b">
        <div className="max-w-7xl mx-auto px-5 md:px-10 py-5 flex flex-wrap justify-center items-center gap-x-10 gap-y-3">
          {trustItems.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2 text-velmora-charcoal/70">
              <Icon size={16} strokeWidth={1.5} className="text-velmora-gold" />
              <span className="text-xs tracking-[0.06em] font-medium">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ BESTSELLERS ═══ */}
      <section className="max-w-7xl mx-auto px-5 md:px-10 py-20 md:py-28">
        <div className="text-center mb-12">
          <p className="text-velmora-gold text-xs tracking-[0.25em] uppercase mb-3">Bestsellers</p>
          <h2 className="font-serif text-3xl md:text-[2.75rem] text-velmora-charcoal">
            Most Loved Pieces
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 md:gap-7">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} navigate={navigate} />
          ))}
        </div>
      </section>

      {/* ═══ UGC REEL STRIP ═══ */}
      <section className="bg-velmora-charcoal py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-5 md:px-10 mb-8">
          <p className="text-velmora-gold text-xs tracking-[0.25em] uppercase mb-2">Worn & Loved</p>
          <h2 className="font-serif text-2xl md:text-3xl text-white">
            From Our Community
          </h2>
        </div>
        <div className="dark-section overflow-x-auto px-5 md:px-10 pb-4">
          <div className="flex gap-4" style={{ width: 'max-content' }}>
            {ugcCards.map((card) => (
              <div
                key={card.id}
                className="relative w-[160px] md:w-[180px] aspect-[9/16] rounded-xl overflow-hidden flex-shrink-0"
              >
                <img
                  data-strk-img-id={card.id}
                  data-strk-img={card.query}
                  data-strk-img-ratio="9x16"
                  data-strk-img-width="320"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={card.caption}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <p className="absolute bottom-4 left-3 right-3 font-serif text-white text-sm italic leading-snug">
                  {card.caption}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SHOP BY CATEGORY ═══ */}
      <section className="max-w-7xl mx-auto px-5 md:px-10 py-20 md:py-28">
        <div className="text-center mb-12">
          <p className="text-velmora-gold text-xs tracking-[0.25em] uppercase mb-3">Shop by Category</p>
          <h2 className="font-serif text-3xl md:text-[2.75rem] text-velmora-charcoal">
            Find Your Style
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 md:gap-7">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => navigate(`/shop?cat=${cat.id}`)}
              className="group relative aspect-[4/3] rounded-xl overflow-hidden border-none p-0 bg-velmora-cream cursor-pointer"
            >
              <img
                data-strk-img-id={`cat-${cat.id}`}
                data-strk-img={cat.query}
                data-strk-img-ratio="4x3"
                data-strk-img-width="700"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.label}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-velmora-charcoal/25 group-hover:bg-velmora-charcoal/40 transition-colors duration-300 flex items-center justify-center">
                <span className="font-serif text-2xl md:text-3xl text-white tracking-[0.1em]">
                  {cat.label}
                </span>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* ═══ BRAND STORY ═══ */}
      <section id="about" className="bg-velmora-cream">
        <div className="max-w-7xl mx-auto px-5 md:px-10 py-20 md:py-28 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-velmora-ivory">
            <img
              data-strk-img-id="velmora-brand-story"
              data-strk-img="jewelry artisan workshop gold hands crafting warm light"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora artisan at work"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div>
            <p className="text-velmora-gold text-xs tracking-[0.25em] uppercase mb-4">Our Story</p>
            <h2 className="font-serif text-3xl md:text-[2.5rem] text-velmora-charcoal leading-tight mb-6">
              Jewelry That Feels Like You
            </h2>
            <p className="text-velmora-warm text-[15px] leading-relaxed mb-5">
              Velmora was born from a simple belief: beautiful jewelry shouldn't cost a month's rent.
              Every piece in our collection is crafted from 18K gold-plated sterling silver, designed
              to last through everyday wear while looking effortlessly elevated.
            </p>
            <p className="text-velmora-warm text-[15px] leading-relaxed mb-8">
              We work directly with skilled artisans — cutting out traditional retail markups — so you
              get premium demi-fine jewelry at prices that make self-purchase feel just as good as gifting.
            </p>
            <button
              onClick={() => navigate('/shop')}
              className="inline-flex items-center gap-2 px-7 h-11 border border-velmora-charcoal text-velmora-charcoal hover:bg-velmora-charcoal hover:text-white text-xs tracking-[0.12em] uppercase font-medium rounded transition-all duration-300 bg-transparent"
            >
              Explore Our Pieces
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </section>

      {/* ═══ TESTIMONIALS ═══ */}
      <section id="journal" className="max-w-7xl mx-auto px-5 md:px-10 py-20 md:py-28">
        <div className="text-center mb-12">
          <p className="text-velmora-gold text-xs tracking-[0.25em] uppercase mb-3">Reviews</p>
          <h2 className="font-serif text-3xl md:text-[2.75rem] text-velmora-charcoal">
            What Our Customers Say
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-7 shadow-lux border border-velmora-charcoal/5"
            >
              <StarRating rating={t.rating} size={15} />
              <p className="text-velmora-warm text-[14px] leading-relaxed mt-4 mb-5 italic">
                "{t.text}"
              </p>
              <p className="text-sm font-medium text-velmora-charcoal">
                — {t.name}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ NEWSLETTER ═══ */}
      <section className="bg-velmora-charcoal">
        <div className="max-w-2xl mx-auto px-5 md:px-10 py-20 md:py-24 text-center">
          <p className="text-velmora-gold text-xs tracking-[0.25em] uppercase mb-3">
            Stay in Touch
          </p>
          <h2 className="font-serif text-3xl md:text-[2.5rem] text-white mb-3">
            Join for 10% Off Your First Order
          </h2>
          <p className="text-white/60 text-sm mb-8">
            Exclusive access to new drops, styling tips, and members-only offers.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
          >
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 h-12 px-5 rounded bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm focus:outline-none focus:border-velmora-gold transition-colors"
            />
            <button
              type="submit"
              className="h-12 px-8 bg-velmora-gold hover:bg-velmora-gold-light text-white text-xs tracking-[0.12em] uppercase font-medium rounded transition-colors border-none"
            >
              Subscribe
            </button>
          </form>
          <p className="text-white/30 text-[11px] mt-4">
            Unsubscribe anytime. We respect your inbox.
          </p>
        </div>
      </section>
    </main>
  );
}
