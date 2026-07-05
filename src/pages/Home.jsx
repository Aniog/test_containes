import { Link } from 'react-router-dom'
import { ArrowRight, Truck, RefreshCw, Sparkles, ShieldCheck, Star } from 'lucide-react'
import { products } from '@/data/products'
import ProductCard from '@/components/ProductCard'
import StarRating from '@/components/ui/StarRating'

const PLACEHOLDER =
  'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"/%3E'

const trustItems = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RefreshCw, label: '30-Day Returns' },
  { icon: Sparkles, label: '18K Gold Plated' },
  { icon: ShieldCheck, label: 'Hypoallergenic' },
]

const reels = [
  { id: 'r1', caption: 'Everyday gold, on the ear', imgId: 'reel-ear-1a2b', titleId: 'reel-ear-1-title' },
  { id: 'r2', caption: 'Layered, never loud', imgId: 'reel-neck-2b3c', titleId: 'reel-neck-2-title' },
  { id: 'r3', caption: 'The huggie that stays', imgId: 'reel-huggie-3c4d', titleId: 'reel-huggie-3-title' },
  { id: 'r4', caption: 'A gift, kept', imgId: 'reel-gift-4d5e', titleId: 'reel-gift-4-title' },
  { id: 'r5', caption: 'Warm light, warm gold', imgId: 'reel-warm-5e6f', titleId: 'reel-warm-5-title' },
]

const categoryTiles = [
  { name: 'Earrings', to: '/shop?category=Earrings', imgId: 'cat-earrings-1f2g', desc: 'Ear cuffs, drops & huggies' },
  { name: 'Necklaces', to: '/shop?category=Necklaces', imgId: 'cat-neck-2g3h', desc: 'Pendants & layered chains' },
  { name: 'Huggies', to: '/shop?category=Huggies', imgId: 'cat-huggie-3h4i', desc: 'Everyday close-fit hoops' },
]

const testimonials = [
  { name: 'Sofia M.', text: 'The gold doesn’t fade and the weight feels real. I wear my huggies every single day.', rating: 5 },
  { name: 'Amara K.', text: 'Gifting this set felt like giving an heirloom. The box alone is beautiful.', rating: 5 },
  { name: 'Lena R.', text: 'Quietly luxurious. I get compliments every time I wear the filigree drops.', rating: 5 },
]

export default function Home() {
  return (
    <div>
      {/* 1. Hero */}
      <section className="relative h-screen min-h-[600px] w-full overflow-hidden">
        <div
          data-strk-bg-id="hero-bg-velmora-9a8b"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
          className="absolute inset-0 bg-ink"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/50 via-ink/20 to-ink/60" />
        <div className="relative h-full max-w-7xl mx-auto px-6 flex flex-col justify-end pb-20 md:pb-28">
          <div className="max-w-2xl animate-fade-up">
            <p className="text-cream/80 text-xs uppercase tracking-widest2 mb-5">Demi-Fine Gold Jewelry</p>
            <h1
              id="hero-title"
              className="font-serif text-cream text-5xl md:text-7xl lg:text-8xl font-light leading-[1.05] mb-6"
            >
              Crafted to be<br />Treasured
            </h1>
            <p id="hero-subtitle" className="text-cream/85 text-base md:text-lg max-w-md mb-8 leading-relaxed">
              Warm-lit, hand-finished gold jewelry made for the everyday and the unforgettable.
            </p>
            <Link
              to="/shop"
              className="inline-block bg-gold text-cream text-xs uppercase tracking-widest2 px-10 py-4 hover:bg-gold-soft transition-colors duration-300"
            >
              Shop the Collection
            </Link>
          </div>
        </div>
      </section>

      {/* 3. Trust bar */}
      <section className="bg-ink text-cream border-y border-gold/20">
        <div className="max-w-7xl mx-auto px-6 py-5 grid grid-cols-2 md:grid-cols-4 gap-4">
          {trustItems.map((t) => (
            <div key={t.label} className="flex items-center justify-center gap-2 text-center">
              <t.icon size={16} className="text-gold flex-shrink-0" strokeWidth={1.5} />
              <span className="text-[11px] md:text-xs uppercase tracking-widest2 text-cream/90">{t.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Bestsellers */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12 md:mb-16">
            <p className="text-xs uppercase tracking-widest2 text-gold mb-3">Most Loved</p>
            <h2 className="font-serif text-4xl md:text-5xl text-ink">Bestsellers</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-5 gap-y-10">
            {products.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
          <div className="text-center mt-14">
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest2 text-ink border-b border-gold pb-1 hover:text-gold transition-colors"
            >
              View All <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Reel-style UGC row */}
      <section className="py-16 md:py-20 bg-sand/40">
        <div className="max-w-7xl mx-auto px-6 mb-8">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-xs uppercase tracking-widest2 text-gold mb-2">As Worn</p>
              <h2 className="font-serif text-3xl md:text-4xl text-ink">#VelmoraOnYou</h2>
            </div>
            <p className="hidden md:block text-sm text-muted max-w-xs text-right">
              Real pieces, real wear. Swipe through moments from our community.
            </p>
          </div>
        </div>
        <div className="overflow-x-auto no-scrollbar">
          <div className="flex gap-4 px-6 pb-2 max-w-7xl mx-auto">
            {reels.map((r) => (
              <div
                key={r.id}
                className="relative flex-shrink-0 w-[200px] md:w-[240px] aspect-[9/16] bg-ink overflow-hidden group"
              >
                <img
                  data-strk-img-id={r.imgId}
                  data-strk-img={`[${r.titleId}] gold jewelry worn on model`}
                  data-strk-img-ratio="9x16"
                  data-strk-img-width="480"
                  src={PLACEHOLDER}
                  alt={r.caption}
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
                <p
                  id={r.titleId}
                  className="absolute bottom-5 left-5 right-5 font-serif text-cream text-lg italic leading-snug"
                >
                  {r.caption}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Shop by category */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12 md:mb-16">
            <p className="text-xs uppercase tracking-widest2 text-gold mb-3">Find Your Piece</p>
            <h2 className="font-serif text-4xl md:text-5xl text-ink">Shop by Category</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {categoryTiles.map((c) => (
              <Link key={c.name} to={c.to} className="group relative aspect-[4/5] md:aspect-[3/4] overflow-hidden bg-sand">
                <img
                  data-strk-img-id={c.imgId}
                  data-strk-img={`${c.name} ${c.desc} gold jewelry`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="600"
                  src={PLACEHOLDER}
                  alt={c.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-ink/30 group-hover:bg-ink/45 transition-colors duration-500" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                  <h3 className="font-serif text-cream text-3xl md:text-4xl uppercase tracking-wider mb-2">
                    {c.name}
                  </h3>
                  <p className="text-cream/80 text-xs uppercase tracking-widest2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {c.desc}
                  </p>
                  <span className="mt-4 text-cream text-[11px] uppercase tracking-widest2 border-b border-cream/60 pb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    Shop Now
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Brand story split */}
      <section className="py-20 md:py-28 bg-sand/40">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="relative aspect-[4/5] overflow-hidden bg-ink">
            <img
              data-strk-img-id="story-img-velmora-7g8h"
              data-strk-img="[story-heading] [story-body] gold jewelry craftsmanship atelier"
              data-strk-img-ratio="4x5"
              data-strk-img-width="700"
              src={PLACEHOLDER}
              alt="Velmora atelier"
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest2 text-gold mb-4">Our Story</p>
            <h2 id="story-heading" className="font-serif text-4xl md:text-5xl text-ink leading-tight mb-6">
              Quiet luxury, made to be lived in.
            </h2>
            <p id="story-body" className="text-muted leading-relaxed mb-5">
              Velmora began with a simple belief: that fine-feeling gold jewelry shouldn’t require a fine-jewelry
              price. Each piece is hand-finished in small batches, plated in 18K gold over a hypoallergenic base,
              and made to move with you — from morning coffee to evening light.
            </p>
            <p className="text-muted leading-relaxed mb-8">
              We design for the woman who values restraint over noise, and warmth over shine. Nothing loud.
              Nothing disposable. Only pieces crafted to be treasured.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest2 text-ink border-b border-gold pb-1 hover:text-gold transition-colors"
            >
              Read Our Story <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* 8. Testimonials */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12 md:mb-16">
            <p className="text-xs uppercase tracking-widest2 text-gold mb-3">Worn & Loved</p>
            <h2 className="font-serif text-4xl md:text-5xl text-ink">Kind Words</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div key={t.name} className="text-center px-4">
                <StarRating rating={t.rating} size={16} className="justify-center mb-5" />
                <p className="font-serif text-xl md:text-2xl text-ink italic leading-relaxed mb-6">
                  “{t.text}”
                </p>
                <p className="text-xs uppercase tracking-widest2 text-muted">{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Newsletter */}
      <section className="bg-ink text-cream py-20 md:py-24">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <p className="text-xs uppercase tracking-widest2 text-gold mb-4">Join Velmora</p>
          <h2 className="font-serif text-4xl md:text-5xl mb-4">10% off your first order</h2>
          <p className="text-cream/70 mb-8">
            Be first to know about new collections, private sales, and styling notes. Plus, enjoy 10% off your first order.
          </p>
          <form
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            onSubmit={(e) => {
              e.preventDefault()
              const input = e.target.elements.email
              if (input.value) {
                input.value = ''
                alert('Thank you for joining Velmora.')
              }
            }}
          >
            <input
              type="email"
              name="email"
              required
              placeholder="Your email address"
              className="flex-1 bg-transparent border border-cream/30 px-4 py-3 text-sm text-cream placeholder:text-cream/50 outline-none focus:border-gold transition-colors"
            />
            <button
              type="submit"
              className="bg-gold text-cream text-xs uppercase tracking-widest2 px-8 py-3 hover:bg-gold-soft transition-colors"
            >
              Subscribe
            </button>
          </form>
          <p className="text-[11px] text-cream/40 mt-4">By subscribing you agree to our Privacy Policy.</p>
        </div>
      </section>
    </div>
  )
}
