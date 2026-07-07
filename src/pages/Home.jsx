import { Link } from 'react-router-dom'
import { ArrowRight, Truck, RotateCcw, Gem, ShieldCheck, Star } from 'lucide-react'
import { products, categories, testimonials, reels } from '@/data/products'
import ProductCard from '@/components/ProductCard'
import StarRating from '@/components/StarRating'
import { useStrkImages } from '@/lib/strk-images'


const TRUST_ITEMS = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Gem, label: '18K Gold Plated' },
  { icon: ShieldCheck, label: 'Hypoallergenic' },
]

export default function Home() {
  // Single container ref wraps the whole page so all strk-img slots are scanned.
  const ref = useStrkImages([])

  return (
    <div ref={ref}>
      {/* 1. Hero */}
      <section className="relative h-[100svh] min-h-[640px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          data-strk-bg-id="hero-bg-velmora-1a2b"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-ink/45" />
        <div className="relative z-10 text-center px-5 max-w-3xl">
          <p className="text-[11px] uppercase tracking-[0.3em] text-cream/80 mb-6 animate-fade-up">
            Demi-Fine Gold Jewelry
          </p>
          <h1
            id="hero-title"
            className="font-serif text-cream text-5xl md:text-7xl lg:text-8xl font-light leading-[1.05] animate-fade-up"
            style={{ animationDelay: '0.1s' }}
          >
            Crafted to be
            <br />
            <span className="italic">Treasured</span>
          </h1>
          <p
            id="hero-subtitle"
            className="mt-7 text-cream/85 text-base md:text-lg max-w-xl mx-auto leading-relaxed animate-fade-up"
            style={{ animationDelay: '0.2s' }}
          >
            Warm-lit gold, made for everyday heirlooms. Designed in studio, worn for a lifetime.
          </p>
          <div className="mt-10 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 bg-champagne text-ink text-[11px] uppercase tracking-[0.2em] font-semibold px-10 py-4 hover:bg-gold-deep transition-colors"
            >
              Shop the Collection
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <div className="w-px h-12 bg-cream/40" />
        </div>
      </section>

      {/* 2. Trust bar */}
      <section className="bg-ink text-cream">
        <div className="max-w-8xl mx-auto px-5 md:px-8 py-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-4 gap-x-6">
            {TRUST_ITEMS.map((item) => (
              <div key={item.label} className="flex items-center justify-center gap-2.5">
                <item.icon className="w-4 h-4 text-champagne shrink-0" strokeWidth={1.5} />
                <span className="text-[11px] md:text-xs uppercase tracking-[0.15em] text-cream/90 text-center">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Bestsellers */}
      <section className="py-20 md:py-28">
        <div className="max-w-8xl mx-auto px-5 md:px-8">
          <div className="text-center mb-14">
            <p className="text-[11px] uppercase tracking-[0.3em] text-champagne mb-3">Most Loved</p>
            <h2 className="font-serif text-4xl md:text-5xl text-ink">Bestsellers</h2>
            <div className="w-12 h-px bg-champagne mx-auto mt-6" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-5 gap-y-10">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-14">
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] font-medium text-ink border-b border-ink/30 pb-1 hover:border-champagne hover:text-champagne transition-colors"
            >
              View All Jewelry
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Reel-style UGC row */}
      <section className="py-20 md:py-24 bg-sand/60">
        <div className="max-w-8xl mx-auto px-5 md:px-8 mb-10">
          <div className="text-center">
            <p className="text-[11px] uppercase tracking-[0.3em] text-champagne mb-3">As Worn By You</p>
            <h2 className="font-serif text-4xl md:text-5xl text-ink">#VelmoraMoments</h2>
          </div>
        </div>
        <div className="overflow-x-auto no-scrollbar">
          <div className="flex gap-4 px-5 md:px-8 pb-2" style={{ width: 'max-content' }}>
            {reels.map((reel) => (
              <div
                key={reel.id}
                className="relative w-[240px] md:w-[280px] aspect-[9/16] overflow-hidden bg-ink shrink-0 group"
              >
                <img
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={reel.caption}
                  data-strk-img-id={reel.imgId}
                  data-strk-img={`[reel-${reel.id}-caption]`}
                  data-strk-img-ratio="9x16"
                  data-strk-img-width="500"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-luxury group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
                <p
                  id={`reel-${reel.id}-caption`}
                  className="absolute bottom-5 left-5 right-5 font-serif text-cream text-lg italic leading-snug"
                >
                  {reel.caption}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Shop by category */}
      <section className="py-20 md:py-28">
        <div className="max-w-8xl mx-auto px-5 md:px-8">
          <div className="text-center mb-14">
            <p className="text-[11px] uppercase tracking-[0.3em] text-champagne mb-3">Explore</p>
            <h2 className="font-serif text-4xl md:text-5xl text-ink">Shop by Category</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {categories.map((cat) => (
              <Link
                key={cat.id}
                to={`/shop?category=${cat.id}`}
                className="group relative overflow-hidden aspect-[4/5] bg-sand"
              >
                <img
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={cat.name}
                  data-strk-img-id={cat.imgId}
                  data-strk-img={`[cat-${cat.id}-name] [cat-${cat.id}-desc]`}
                  data-strk-img-ratio="4x5"
                  data-strk-img-width="700"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-luxury group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-ink/25 group-hover:bg-ink/40 transition-colors duration-500" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                  <h3
                    id={`cat-${cat.id}-name`}
                    className="font-serif text-cream text-3xl uppercase tracking-[0.15em] translate-y-2 group-hover:translate-y-0 transition-transform duration-500 ease-luxury"
                  >
                    {cat.name}
                  </h3>
                  <p
                    id={`cat-${cat.id}-desc`}
                    className="text-cream/80 text-xs uppercase tracking-[0.2em] mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-75"
                  >
                    {cat.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Brand story split */}
      <section className="py-20 md:py-28 bg-ink text-cream">
        <div className="max-w-8xl mx-auto px-5 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="relative aspect-[4/5] overflow-hidden bg-espresso">
            <img
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora atelier"
              data-strk-img-id="story-img-velmora-9f8e"
              data-strk-img="[story-heading] [story-body]"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-[0.3em] text-champagne mb-4">Our Story</p>
            <h2
              id="story-heading"
              className="font-serif text-4xl md:text-5xl text-cream leading-tight"
            >
              Quiet luxury, made to last
            </h2>
            <p id="story-body" className="mt-6 text-stone-light leading-relaxed">
              Velmora began with a simple belief: that fine craftsmanship shouldn’t be reserved for
              rare occasions. Each piece is drawn by hand, finished in 18K gold, and made to be worn —
              really worn — through the everyday moments that matter most.
            </p>
            <p className="mt-4 text-stone-light leading-relaxed">
              From the first sketch to the final polish, we obsess over the details you feel but
              rarely see: the weight of a huggie, the catch of a clasp, the warmth of the gold.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 mt-8 text-[11px] uppercase tracking-[0.2em] font-medium text-cream border-b border-cream/40 pb-1 hover:border-champagne hover:text-champagne transition-colors"
            >
              Read Our Story
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 7. Testimonials */}
      <section className="py-20 md:py-28">
        <div className="max-w-8xl mx-auto px-5 md:px-8">
          <div className="text-center mb-14">
            <p className="text-[11px] uppercase tracking-[0.3em] text-champagne mb-3">Kind Words</p>
            <h2 className="font-serif text-4xl md:text-5xl text-ink">Loved by Thousands</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="border border-ink/10 p-8 md:p-10 bg-cream flex flex-col items-center text-center"
              >
                <StarRating rating={t.rating} size={16} />
                <Star className="w-5 h-5 text-champagne/30 -mt-1 mb-4" fill="currentColor" strokeWidth={0} />
                <p className="font-serif text-lg md:text-xl text-ink italic leading-relaxed">
                  “{t.text}”
                </p>
                <p className="mt-6 text-[11px] uppercase tracking-[0.2em] text-stone font-medium">
                  {t.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Newsletter */}
      <section className="py-20 md:py-24 bg-champagne/15">
        <div className="max-w-3xl mx-auto px-5 text-center">
          <p className="text-[11px] uppercase tracking-[0.3em] text-champagne mb-3">Join Velmora</p>
          <h2 className="font-serif text-4xl md:text-5xl text-ink">10% Off Your First Order</h2>
          <p className="mt-4 text-stone leading-relaxed">
            Be the first to know about new collections, private sales, and styling notes — and enjoy
            10% off your first piece.
          </p>
          <form
            className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              required
              placeholder="Your email address"
              className="flex-1 bg-cream border border-ink/20 px-5 py-3.5 text-sm text-ink placeholder:text-stone/70 focus:outline-none focus:border-champagne transition-colors"
            />
            <button
              type="submit"
              className="bg-ink text-cream text-[11px] uppercase tracking-[0.2em] font-semibold px-8 py-3.5 hover:bg-espresso transition-colors"
            >
              Subscribe
            </button>
          </form>
          <p className="mt-4 text-xs text-stone">No spam, ever. Unsubscribe anytime.</p>
        </div>
      </section>
    </div>
  )
}
