import { Link } from 'react-router-dom';
import { Star, ArrowRight } from 'lucide-react';
import { useRef, useEffect, useState } from 'react';
import ProductCard from '@/components/shared/ProductCard';
import { products } from '@/data/products';

/* ───────── Hero ───────── */
function Hero() {
  return (
    <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        data-strk-bg-id="hero-bg-main"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      >
        <div className="absolute inset-0 bg-charcoal/40" />
      </div>

      <div className="relative z-10 text-center text-ivory px-6 max-w-3xl">
        <p className="text-xs md:text-sm uppercase tracking-[0.2em] font-medium mb-4 opacity-90">
          New Season Collection
        </p>
        <h1
          id="hero-title"
          className="font-serif text-4xl md:text-6xl lg:text-7xl font-medium leading-[1.05] mb-6"
        >
          Crafted to be Treasured
        </h1>
        <p id="hero-subtitle" className="text-sm md:text-base font-light opacity-90 mb-10 max-w-md mx-auto leading-relaxed">
          Demi-fine jewelry designed for everyday luxury. 18K gold-plated,
          hypoallergenic, and made to last.
        </p>
        <Link to="/shop" className="btn-primary inline-block">
          Shop the Collection
        </Link>
      </div>
    </section>
  );
}

/* ───────── Trust Bar ───────── */
function TrustBar() {
  const items = [
    'Free Worldwide Shipping',
    '30-Day Returns',
    '18K Gold Plated',
    'Hypoallergenic',
  ];
  return (
    <div className="bg-ivory border-b border-border">
      <div className="container-main py-4 flex flex-wrap items-center justify-center gap-6 md:gap-10">
        {items.map((item) => (
          <span
            key={item}
            className="text-[11px] md:text-xs uppercase tracking-widest text-taupe font-medium"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ───────── Bestsellers ───────── */
function Bestsellers() {
  const bestsellers = products.slice(0, 5);
  return (
    <section className="section-padding bg-ivory">
      <div className="container-main">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-medium mb-3">
            Bestsellers
          </h2>
          <p className="text-sm text-taupe max-w-md mx-auto">
            Our most-loved pieces, chosen by you.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="text-center mt-10 md:mt-12">
          <Link to="/shop" className="btn-secondary inline-block">
            View All
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ───────── UGC Reel ───────── */
function UGCReel() {
  const reels = [
    { id: 'ugc-1', caption: 'Everyday gold', user: '@lily.m' },
    { id: 'ugc-2', caption: 'Date night stack', user: '@noah.r' },
    { id: 'ugc-3', caption: 'Minimal mood', user: '@sophie.k' },
    { id: 'ugc-4', caption: 'Gift worthy', user: '@emma.t' },
    { id: 'ugc-5', caption: 'Layering love', user: '@ava.j' },
    { id: 'ugc-6', caption: 'Office chic', user: '@mia.b' },
  ];

  const scrollRef = useRef(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    let isDown = false;
    let startX;
    let scrollLeft;

    const onMouseDown = (e) => {
      isDown = true;
      el.classList.add('cursor-grabbing');
      startX = e.pageX - el.offsetLeft;
      scrollLeft = el.scrollLeft;
    };
    const onMouseLeave = () => {
      isDown = false;
      el.classList.remove('cursor-grabbing');
    };
    const onMouseUp = () => {
      isDown = false;
      el.classList.remove('cursor-grabbing');
    };
    const onMouseMove = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - el.offsetLeft;
      const walk = (x - startX) * 1.5;
      el.scrollLeft = scrollLeft - walk;
    };

    el.addEventListener('mousedown', onMouseDown);
    el.addEventListener('mouseleave', onMouseLeave);
    el.addEventListener('mouseup', onMouseUp);
    el.addEventListener('mousemove', onMouseMove);
    return () => {
      el.removeEventListener('mousedown', onMouseDown);
      el.removeEventListener('mouseleave', onMouseLeave);
      el.removeEventListener('mouseup', onMouseUp);
      el.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container-main mb-8">
        <h2 className="font-serif text-2xl md:text-3xl font-medium">
          Styled by You
        </h2>
      </div>
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto px-6 md:px-12 pb-4 scrollbar-hide cursor-grab select-none"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {reels.map((reel) => (
          <div
            key={reel.id}
            className="flex-shrink-0 w-[200px] md:w-[240px] aspect-[9/16] relative rounded overflow-hidden group"
          >
            <img
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={reel.caption}
              data-strk-img-id={reel.id}
              data-strk-img={`[${reel.id}-caption] [${reel.id}-user]`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="500"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-ivory">
              <p
                id={`${reel.id}-caption`}
                className="font-serif text-sm md:text-base italic"
              >
                {reel.caption}
              </p>
              <p
                id={`${reel.id}-user`}
                className="text-[10px] uppercase tracking-wider mt-1 opacity-80"
              >
                {reel.user}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ───────── Category Tiles ───────── */
function CategoryTiles() {
  const tiles = [
    { id: 'cat-earrings', label: 'Earrings', query: 'gold earrings on model dark background' },
    { id: 'cat-necklaces', label: 'Necklaces', query: 'gold necklace close up warm light editorial' },
    { id: 'cat-huggies', label: 'Huggies', query: 'gold huggie earrings ear close up' },
  ];

  return (
    <section className="section-padding bg-ivory">
      <div className="container-main">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="font-serif text-3xl md:text-4xl font-medium mb-3">
            Shop by Category
          </h2>
          <p className="text-sm text-taupe max-w-md mx-auto">
            Find the perfect piece for every moment.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {tiles.map((tile) => (
            <Link
              key={tile.id}
              to="/shop"
              className="relative aspect-[3/4] md:aspect-[4/5] overflow-hidden group"
            >
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={tile.label}
                data-strk-img-id={tile.id}
                data-strk-img={`[${tile.id}-label]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-charcoal/30 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span
                  id={`${tile.id}-label`}
                  className="text-ivory font-serif text-xl md:text-2xl tracking-widest uppercase font-medium opacity-90 group-hover:opacity-100 transition-opacity"
                >
                  {tile.label}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────── Brand Story ───────── */
function BrandStory() {
  return (
    <section className="section-padding bg-white">
      <div className="container-main">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div
            className="relative aspect-[4/5] md:aspect-square overflow-hidden bg-[#F2EDE6]"
            data-strk-bg-id="brand-story-bg"
            data-strk-bg="[brand-story-title] [brand-story-body]"
            data-strk-bg-ratio="1x1"
            data-strk-bg-width="900"
          />
          <div className="max-w-md mx-auto md:mx-0">
            <p className="text-xs uppercase tracking-[0.2em] text-taupe font-medium mb-4">
              Our Story
            </p>
            <h2
              id="brand-story-title"
              className="font-serif text-3xl md:text-4xl font-medium mb-6 leading-tight"
            >
              Quiet Luxury, Made Accessible
            </h2>
            <p
              id="brand-story-body"
              className="text-sm md:text-base text-taupe leading-relaxed mb-8"
            >
              Velmora was born from a belief that fine jewelry should not be
              reserved for special occasions. Each piece is thoughtfully designed
              in small batches, using 18K gold plating and responsibly sourced
              materials. We create jewelry that feels personal, lasts for years,
              and becomes part of your everyday story.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-widest text-charcoal hover:text-champagne transition-colors"
            >
              Read Our Story
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────── Testimonials ───────── */
function Testimonials() {
  const reviews = [
    {
      id: 'rev-1',
      name: 'Sarah M.',
      text: 'The quality is incredible for the price. I wear my Vivid Aura cuff every single day and it still looks brand new.',
    },
    {
      id: 'rev-2',
      name: 'Jessica T.',
      text: 'Bought the Royal Heirloom Set as a gift and she absolutely loved it. The packaging alone felt like a luxury experience.',
    },
    {
      id: 'rev-3',
      name: 'Amanda L.',
      text: 'Finally, demi-fine jewelry that does not turn my skin green. These huggies are my new everyday staple.',
    },
  ];

  return (
    <section className="section-padding bg-ivory">
      <div className="container-main">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-medium mb-3">
            What Our Customers Say
          </h2>
          <p className="text-sm text-taupe max-w-md mx-auto">
            Real stories from real women.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white p-8 border border-border text-center"
            >
              <div className="flex items-center justify-center gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-champagne text-champagne"
                  />
                ))}
              </div>
              <p className="text-sm text-charcoal leading-relaxed mb-6">
                &ldquo;{review.text}&rdquo;
              </p>
              <p className="text-xs uppercase tracking-widest text-taupe font-medium">
                {review.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────── Newsletter ───────── */
function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) setSubmitted(true);
  };

  return (
    <section className="py-16 md:py-20 bg-champagne">
      <div className="container-main text-center max-w-xl mx-auto">
        <h2 className="font-serif text-2xl md:text-3xl font-medium text-charcoal mb-3">
          Join for 10% Off
        </h2>
        <p className="text-sm text-charcoal/80 mb-8">
          Subscribe to receive exclusive offers, early access to new collections,
          and styling inspiration.
        </p>
        {submitted ? (
          <p className="text-sm font-medium text-charcoal">
            Thank you! Check your inbox for your welcome offer.
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3"
          >
            <input
              type="email"
              required
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-3 bg-white border border-charcoal/10 text-charcoal text-sm placeholder:text-charcoal/40 focus:outline-none focus:ring-1 focus:ring-charcoal/30"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-charcoal text-ivory text-xs font-medium uppercase tracking-widest hover:bg-charcoal/90 transition-colors"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

/* ───────── Home Page ───────── */
export default function Home() {
  return (
    <main>
      <Hero />
      <TrustBar />
      <Bestsellers />
      <UGCReel />
      <CategoryTiles />
      <BrandStory />
      <Testimonials />
      <Newsletter />
    </main>
  );
}
