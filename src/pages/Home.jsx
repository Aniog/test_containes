import { Link } from 'react-router-dom'
import { Star, ArrowRight, ChevronRight } from 'lucide-react'
import { products, categories } from '@/data/products'
import { useImageLoader } from '@/hooks/useImageLoader'
import ProductCard from '@/components/ProductCard'

const trustItems = [
  'Free Worldwide Shipping',
  '30-Day Returns',
  '18K Gold Plated',
  'Hypoallergenic',
]

const testimonials = [
  {
    name: 'Elena M.',
    text: 'The packaging alone felt like a gift. The huggies are my new everyday staple.',
  },
  {
    name: 'Sarah K.',
    text: 'Quiet luxury at a price that feels fair. Already planning my next order.',
  },
  {
    name: 'Priya T.',
    text: 'Bought the set for my sister and she has not taken it off. Beautiful quality.',
  },
]

const ugcItems = [
  { id: 'ugc-1', caption: 'Golden hour essentials', category: 'earrings' },
  { id: 'ugc-2', caption: 'Layered and lovely', category: 'necklaces' },
  { id: 'ugc-3', caption: 'Minimal but make it luxe', category: 'huggies' },
  { id: 'ugc-4', caption: 'A little sparkle, always', category: 'earrings' },
  { id: 'ugc-5', caption: 'Gift-worthy moments', category: 'sets' },
]

export default function Home() {
  const containerRef = useImageLoader()
  const bestsellers = products.slice(0, 5)

  return (
    <div ref={containerRef} className="bg-velmora-cream">
      {/* Hero */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div
          data-strk-bg-id="hero-bg-velmora"
          data-strk-bg="[hero-title] [hero-subtitle]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
          className="absolute inset-0 bg-stone-800"
        />
        <div className="absolute inset-0 bg-velmora-espresso/40" />
        <div className="relative z-10 text-center text-velmora-cream px-4 max-w-3xl">
          <p
            id="hero-subtitle"
            className="text-xs sm:text-sm uppercase tracking-[0.25em] text-velmora-gold mb-5"
          >
            Demi-Fine Gold Jewelry
          </p>
          <h1
            id="hero-title"
            className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95] mb-8"
          >
            Crafted to be Treasured
          </h1>
          <p className="text-sm sm:text-base text-velmora-cream/80 max-w-md mx-auto mb-10 font-light">
            Timeless silhouettes in 18K gold plate — designed for the women who
            wear their jewelry like a signature.
          </p>
          <Link
            to="/shop"
            className="inline-block px-10 py-4 bg-velmora-gold text-velmora-espresso text-xs uppercase tracking-widest font-semibold hover:bg-velmora-gold-hover transition-colors"
          >
            Shop the Collection
          </Link>
        </div>
      </section>

      {/* Trust bar */}
      <section className="border-b border-velmora-hairline bg-velmora-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 py-4">
            {trustItems.map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 text-[11px] sm:text-xs uppercase tracking-widest text-velmora-taupe"
              >
                <Star className="w-3 h-3 text-velmora-gold fill-velmora-gold" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bestsellers */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-widest text-velmora-taupe mb-3">
              Most Loved
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl">Bestsellers</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-10">
            {bestsellers.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                queryIds={{
                  titleId: `bestseller-title-${product.id}`,
                  descId: `bestseller-desc-${product.id}`,
                }}
              />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-medium border-b border-velmora-espresso pb-1 hover:text-velmora-taupe hover:border-velmora-taupe transition-colors"
            >
              Shop All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* UGC reel */}
      <section className="py-16 sm:py-24 bg-velmora-espresso text-velmora-cream overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-10">
          <h2 className="font-serif text-3xl sm:text-4xl text-center">
            Styled by You
          </h2>
        </div>
        <div className="flex gap-4 overflow-x-auto px-4 sm:px-6 lg:px-8 pb-4 hide-scrollbar snap-x snap-mandatory">
          {ugcItems.map((item, idx) => (
            <div
              key={item.id}
              className="relative shrink-0 w-[260px] sm:w-[300px] aspect-[9/16] snap-center overflow-hidden bg-stone-700"
            >
              <img
                data-strk-img-id={item.id}
                data-strk-img={`[${item.id}-caption] gold ${item.category} jewelry worn`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="500"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={item.caption}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-velmora-espresso/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p
                  id={`${item.id}-caption`}
                  className="font-serif text-lg italic leading-snug"
                >
                  {item.caption}
                </p>
                <p className="text-[10px] uppercase tracking-widest text-velmora-gold mt-2">
                  @{['velmora', 'stylevelmora', 'velmoraedit', 'velmoraglow', 'velmoragift'][idx]}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Shop by category */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl sm:text-5xl">Shop by Category</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            {categories.map((cat) => (
              <Link
                key={cat.id}
                to={`/shop?category=${cat.id}`}
                className="group relative aspect-[4/5] overflow-hidden bg-stone-200"
              >
                <img
                  data-strk-img-id={`category-${cat.id}`}
                  data-strk-img={`[category-${cat.id}-label] gold ${cat.id} jewelry`}
                  data-strk-img-ratio="4x5"
                  data-strk-img-width="700"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={cat.label}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-velmora-espresso/20 group-hover:bg-velmora-espresso/30 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3
                    id={`category-${cat.id}-label`}
                    className="font-serif text-2xl sm:text-3xl text-velmora-cream uppercase tracking-widest-xl"
                  >
                    {cat.label}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Brand story */}
      <section className="py-16 sm:py-0 sm:min-h-[600px] grid grid-cols-1 lg:grid-cols-2">
        <div className="relative min-h-[400px] sm:min-h-full bg-stone-300">
          <img
            data-strk-img-id="brand-story-img"
            data-strk-img="[brand-story-title] [brand-story-body] gold jewelry handcrafted"
            data-strk-img-ratio="3x4"
            data-strk-img-width="900"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt="Velmora craftsmanship"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        <div className="flex items-center bg-velmora-cream px-6 sm:px-12 lg:px-20 py-16 sm:py-24">
          <div className="max-w-lg">
            <p className="text-xs uppercase tracking-widest text-velmora-taupe mb-4">
              Our Story
            </p>
            <h2
              id="brand-story-title"
              className="font-serif text-4xl sm:text-5xl mb-6"
            >
              Designed for the Everyday
            </h2>
            <p
              id="brand-story-body"
              className="text-velmora-taupe leading-relaxed mb-8"
            >
              Velmora was born from a belief that fine-looking jewelry should feel
              effortless. Each piece is designed in-house, cast in small batches,
              and finished with thick 18K gold plating so you can wear it, love
              it, and pass it on.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-medium border-b border-velmora-espresso pb-1 hover:text-velmora-taupe hover:border-velmora-taupe transition-colors"
            >
              Read Our Story <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 sm:py-24 border-t border-velmora-hairline">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl sm:text-5xl">What They Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-velmora-card border border-velmora-hairline p-8 text-center"
              >
                <div className="flex justify-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-velmora-gold text-velmora-gold"
                    />
                  ))}
                </div>
                <p className="font-serif text-lg italic text-velmora-espresso mb-5">
                  “{t.text}”
                </p>
                <p className="text-xs uppercase tracking-widest text-velmora-taupe">
                  {t.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 sm:py-20 bg-velmora-espresso text-velmora-cream">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl mb-4">
            Join for 10% Off
          </h2>
          <p className="text-velmora-cream/70 mb-8 font-light">
            Subscribe for first access to new collections, styling notes, and a
            welcome gift on your first order.
          </p>
          <form
            className="flex flex-col sm:flex-row gap-3"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              required
              placeholder="Your email address"
              className="flex-1 px-5 py-3.5 bg-transparent border border-velmora-hairline-dark text-velmora-cream placeholder:text-velmora-taupe focus:outline-none focus:border-velmora-gold text-sm"
            />
            <button
              type="submit"
              className="px-8 py-3.5 bg-velmora-gold text-velmora-espresso text-xs uppercase tracking-widest font-semibold hover:bg-velmora-gold-hover transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}
