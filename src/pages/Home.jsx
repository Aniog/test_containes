import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, MoveRight, Heart } from 'lucide-react';
import { cn } from '@/lib/utils';
import { products } from '@/data/products';
import ImageLoader from '@/components/ImageLoader';
import ProductCard from '@/components/ProductCard';
import StarRating from '@/components/StarRating';

const PLACEHOLDER = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E";

const trustItems = [
  'Free Worldwide Shipping',
  '30-Day Returns',
  '18K Gold Plated',
  'Hypoallergenic',
];

const ugcItems = [
  { id: 'ugc-1', caption: 'Quiet luxury for every day', query: 'gold huggie earrings ear close-up warm lighting lifestyle jewelry' },
  { id: 'ugc-2', caption: 'Layered & loved', query: 'gold layered necklaces on model warm lighting editorial jewelry' },
  { id: 'ugc-3', caption: 'A little sparkle', query: 'gold ear cuff crystal worn on ear close-up jewelry lifestyle' },
  { id: 'ugc-4', caption: 'Gift-worthy moments', query: 'gold jewelry gift box earrings necklace warm editorial' },
  { id: 'ugc-5', caption: 'Self-purchase ritual', query: 'woman holding gold necklace jewelry editorial warm tones' },
];

const categoryTiles = [
  { id: 'earrings', label: 'Earrings', query: 'gold earrings flat lay dark background editorial jewelry' },
  { id: 'necklaces', label: 'Necklaces', query: 'gold necklaces layered on model editorial warm lighting jewelry' },
  { id: 'huggies', label: 'Huggies', query: 'gold huggie earrings close-up warm neutral background jewelry' },
];

const testimonials = [
  { name: 'Sarah M.', text: 'The packaging alone felt like a gift. I wear my huggies every single day.' },
  { name: 'Emily R.', text: 'Finally, demi-fine jewelry that actually looks expensive without the markup.' },
  { name: 'Priya K.', text: 'Bought the set for my sister and ended up ordering one for myself. Stunning.' },
];

export default function Home() {
  const [email, setEmail] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState('idle');
  const [hoveredTile, setHoveredTile] = useState(null);

  const handleNewsletter = (e) => {
    e.preventDefault();
    if (!email) return;
    setNewsletterStatus('success');
    setEmail('');
    setTimeout(() => setNewsletterStatus('idle'), 4000);
  };

  return (
    <ImageLoader>
      <section className="relative min-h-[90vh] lg:min-h-screen flex items-center">
        <div
          className="absolute inset-0 z-0 bg-espresso"
          data-strk-bg-id="hero-background"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-espresso/40 z-[1]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
          <div className="max-w-2xl text-cream">
            <p className="text-xs sm:text-sm uppercase tracking-extra-wide text-cream/80 mb-4">
              Demi-Fine Gold Jewelry
            </p>
            <h1 id="hero-title" className="font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[0.95]">
              Crafted to be Treasured
            </h1>
            <p id="hero-subtitle" className="mt-6 text-base sm:text-lg text-cream/80 max-w-md font-light">
              Modern heirlooms designed for everyday luxury. 18k gold-plated pieces made to layer, gift, and love.
            </p>
            <Link
              to="/shop"
              className="inline-flex items-center gap-3 mt-8 bg-gold text-cream px-8 py-4 text-xs uppercase tracking-extra-wide font-medium hover:bg-gold-hover transition-colors"
            >
              Shop the Collection
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-hairline bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-hairline">
            {trustItems.map((item) => (
              <div key={item} className="py-4 text-center text-[10px] sm:text-xs uppercase tracking-extra-wide text-taupe">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
            <div>
              <p className="text-xs uppercase tracking-extra-wide text-gold mb-2">Curated Favorites</p>
              <h2 className="font-serif text-4xl lg:text-5xl text-espresso">Bestsellers</h2>
            </div>
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-extra-wide text-espresso hover:text-gold transition-colors"
            >
              View All <MoveRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-10">
            {products.slice(0, 5).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-sand overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <p className="text-xs uppercase tracking-extra-wide text-gold mb-2">@velmorajewelry</p>
          <h2 className="font-serif text-3xl lg:text-4xl text-espresso">Worn by You</h2>
        </div>
        <div className="pl-4 sm:pl-6 lg:pl-[max(1.5rem,calc((100vw-80rem)/2+1.5rem))] pr-4">
          <div className="flex gap-4 overflow-x-auto hide-scrollbar pb-4">
            {ugcItems.map((item) => (
              <div
                key={item.id}
                className="relative flex-shrink-0 w-[200px] sm:w-[240px] aspect-[9/16] overflow-hidden group"
              >
                <img
                  data-strk-img-id={item.id}
                  data-strk-img={`[${item.id}-caption]`}
                  data-strk-img-ratio="9x16"
                  data-strk-img-width="500"
                  src={PLACEHOLDER}
                  alt={item.caption}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span id={`${item.id}-caption`} className="sr-only">
                  {item.query}
                </span>
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/70 via-transparent to-transparent" />
                <p className="absolute bottom-4 left-4 right-4 font-serif text-lg text-cream leading-tight">
                  {item.caption}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-extra-wide text-gold mb-2">Explore</p>
            <h2 className="font-serif text-4xl lg:text-5xl text-espresso">Shop by Category</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
            {categoryTiles.map((tile) => (
              <Link
                key={tile.id}
                to={`/collections/${tile.id}`}
                className="relative aspect-[3/4] overflow-hidden group"
                onMouseEnter={() => setHoveredTile(tile.id)}
                onMouseLeave={() => setHoveredTile(null)}
              >
                <img
                  data-strk-img-id={`category-${tile.id}`}
                  data-strk-img={`[category-${tile.id}-label]`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="700"
                  src={PLACEHOLDER}
                  alt={tile.label}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span id={`category-${tile.id}-label`} className="sr-only">
                  {tile.query}
                </span>
                <div
                  className={cn(
                    'absolute inset-0 bg-espresso/30 transition-opacity duration-500',
                    hoveredTile === tile.id ? 'opacity-60' : 'opacity-20'
                  )}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-serif text-2xl lg:text-3xl uppercase tracking-extra-wide text-cream border-b border-cream pb-1">
                    {tile.label}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-sand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
            <div className="relative aspect-[4/5] lg:aspect-[3/4] overflow-hidden bg-cream">
              <img
                data-strk-img-id="brand-story-image"
                data-strk-img="[brand-story-title] [brand-story-body]"
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src={PLACEHOLDER}
                alt="Velmora jewelry craftsmanship"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="lg:py-10">
              <p className="text-xs uppercase tracking-extra-wide text-gold mb-4">Our Story</p>
              <h2 id="brand-story-title" className="font-serif text-4xl lg:text-5xl text-espresso mb-6">
                Designed for the Moments That Matter
              </h2>
              <p id="brand-story-body" className="text-taupe leading-relaxed mb-6">
                Velmora was born from a love of quiet elegance — jewelry that feels special enough to gift, yet wearable enough to never take off. Each piece is 18k gold-plated and finished by hand, balancing contemporary lines with timeless warmth.
              </p>
              <p className="text-taupe leading-relaxed mb-8">
                We believe luxury should feel approachable. No gatekeeping, no seasonal trends — just thoughtful, beautifully made pieces you will reach for again and again.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-extra-wide text-espresso border-b border-espresso pb-1 hover:text-gold hover:border-gold transition-colors"
              >
                Read Our Story <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs uppercase tracking-extra-wide text-gold mb-2">Reviews</p>
            <h2 className="font-serif text-4xl lg:text-5xl text-espresso">Loved by You</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-linen border border-hairline p-8 text-center">
                <StarRating rating={5} size={14} className="justify-center mb-4" />
                <p className="font-serif text-lg text-espresso italic mb-6">“{t.text}”</p>
                <div className="flex items-center justify-center gap-2">
                  <span className="w-8 h-8 rounded-full bg-sand flex items-center justify-center text-xs font-medium text-espresso">
                    {t.name.charAt(0)}
                  </span>
                  <span className="text-xs uppercase tracking-extra-wide text-taupe">{t.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24 bg-espresso text-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Heart className="mx-auto mb-4 text-gold" size={28} />
          <h2 className="font-serif text-3xl lg:text-4xl mb-3">Join for 10% Off Your First Order</h2>
          <p className="text-cream/70 mb-8">Be the first to know about new drops, styling notes, and exclusive offers.</p>
          <form onSubmit={handleNewsletter} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              required
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-transparent border-b border-cream/30 px-3 py-3 text-sm placeholder:text-cream/40 focus:border-gold outline-none"
            />
            <button
              type="submit"
              className="bg-gold text-cream px-8 py-3 text-xs uppercase tracking-extra-wide font-medium hover:bg-gold-hover transition-colors"
            >
              Subscribe
            </button>
          </form>
          {newsletterStatus === 'success' && (
            <p className="mt-4 text-sm text-gold">Welcome — your 10% code is on its way.</p>
          )}
        </div>
      </section>
    </ImageLoader>
  );
}
