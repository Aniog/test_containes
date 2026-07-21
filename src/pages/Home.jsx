import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Truck, RotateCcw, Gem, Leaf } from 'lucide-react'
import { Button } from '@/components/ui/button'
import ProductCard, { StarRating } from '@/components/product/ProductCard.jsx'
import { ImageRoot } from '@/components/Img.jsx'
import { resolveStrkImg } from '@/lib/strkImg.js'
import { fetchProducts } from '@/api/products.js'
import { toast } from 'sonner'

const TRUST_ITEMS = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Gem, label: '18K Gold Plated' },
  { icon: Leaf, label: 'Hypoallergenic' },
]

const REELS = [
  { id: 'reel-ear-cuff', caption: 'Golden hour, on the ear', query: 'close-up of woman wearing gold ear cuff, warm sunlight, editorial jewelry reels' },
  { id: 'reel-necklace', caption: 'Layered for the everyday', query: 'woman neck with layered gold necklaces, soft warm light, editorial photography' },
  { id: 'reel-huggies', caption: 'The huggie she never takes off', query: 'woman ear wearing chunky gold huggie earrings, warm tone close up' },
  { id: 'reel-evening', caption: 'Dressed for candlelight', query: 'elegant woman wearing gold drop earrings evening look, warm dark background' },
  { id: 'reel-gift', caption: 'Made to be given', query: 'hands opening luxury gold jewelry gift box, warm elegant light' },
]

const CATEGORIES = [
  { id: 'earrings', label: 'Earrings', query: 'elegant gold earrings on dark neutral background, luxury jewelry still life' },
  { id: 'necklaces', label: 'Necklaces', query: 'elegant gold necklace on neutral linen background, luxury jewelry still life' },
  { id: 'huggies', label: 'Huggies', query: 'small gold huggie hoop earrings macro on dark background, luxury jewelry still life' },
]

const TESTIMONIALS = [
  { name: 'Sophia M.', text: 'The huggies are even more beautiful in person. I have worn them every single day for three months — no tarnish, no irritation.' },
  { name: 'Elena R.', text: 'Bought the Heirloom Set for my sister\u2019s birthday. The packaging alone made her cry. Quiet luxury at a price that feels honest.' },
  { name: 'Priya K.', text: 'Finally, demi-fine jewelry that looks truly fine. The Flora necklace layers perfectly with pieces I have owned for years.' },
]

export default function Home() {
  const [products, setProducts] = useState([])
  const [email, setEmail] = useState('')

  useEffect(() => {
    fetchProducts().then(setProducts)
  }, [])

  const handleNewsletter = (e) => {
    e.preventDefault()
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      toast.error('Please enter a valid email address')
      return
    }
    toast.success('Welcome to Velmora — your 10% code is on its way.')
    setEmail('')
  }

  return (
    <ImageRoot deps={[products.length]}>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative flex min-h-[92vh] items-end overflow-hidden bg-ink md:items-center">
        <div
          className="absolute inset-0"
          data-strk-bg-id="hero-bg-velmora"
          data-strk-bg="warm-lit close-up of gold jewelry on a model, glowing skin, luxury editorial photography, dark moody background"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/20" />

        <div className="relative mx-auto w-full max-w-7xl px-5 pb-20 pt-40 md:px-8 md:pb-32">
          <p className="animate-fade-up text-[11px] font-medium uppercase tracking-[0.35em] text-gold">
            Demi-Fine · 18K Gold Plated
          </p>
          <h1
            className="mt-5 max-w-2xl animate-fade-up font-serif text-5xl font-medium leading-[1.05] text-cream md:text-7xl"
            style={{ animationDelay: '120ms' }}
          >
            Crafted to be{' '}
            <em className="font-medium italic text-gold-soft">Treasured</em>
          </h1>
          <p
            className="mt-6 max-w-md animate-fade-up text-base leading-relaxed text-fog md:text-lg"
            style={{ animationDelay: '240ms' }}
          >
            Quiet-luxury jewelry in 18K gold — designed for the everyday,
            priced for real life. From $38.
          </p>
          <div className="mt-9 animate-fade-up" style={{ animationDelay: '360ms' }}>
            <Button asChild size="lg">
              <Link to="/shop">
                Shop the Collection
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ── Trust bar ────────────────────────────────────── */}
      <section className="border-b border-line-dark bg-espresso">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-4 px-5 py-6 md:grid-cols-4 md:px-8">
          {TRUST_ITEMS.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center justify-center gap-2.5">
              <Icon className="h-4 w-4 text-gold" />
              <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-cream/90">
                {label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Bestsellers ──────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.35em] text-bronze">
              Most Loved
            </p>
            <h2 className="mt-3 font-serif text-4xl font-medium text-ink md:text-5xl">
              The Bestsellers
            </h2>
          </div>
          <Link
            to="/shop"
            className="hidden items-center gap-2 text-[11px] font-medium uppercase tracking-[0.25em] text-ink transition-colors hover:text-bronze md:flex"
          >
            View all <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-10 md:mt-14 md:grid-cols-3 md:gap-x-6 lg:grid-cols-5">
          {products.map((p, i) => (
            <ProductCard key={p.slug} product={p} index={i} />
          ))}
        </div>

        <div className="mt-10 text-center md:hidden">
          <Button asChild variant="outline">
            <Link to="/shop">View all jewelry</Link>
          </Button>
        </div>
      </section>

      {/* ── UGC Reels ────────────────────────────────────── */}
      <section className="border-y border-line bg-sand/60 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <p className="text-[11px] font-medium uppercase tracking-[0.35em] text-bronze">
            @velmora.jewelry
          </p>
          <h2 className="mt-3 font-serif text-4xl font-medium text-ink md:text-5xl">
            Worn by You
          </h2>
        </div>

        <div className="scrollbar-none mt-10 flex gap-4 overflow-x-auto px-5 pb-2 md:mt-14 md:gap-6 md:px-8">
          {REELS.map((reel) => (
            <div
              key={reel.id}
              className="group relative aspect-[9/16] w-44 shrink-0 overflow-hidden bg-espresso md:w-60"
            >
              <img
                src={resolveStrkImg(`${reel.id}-img`, 480)}
                alt={reel.caption}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
              <p className="absolute inset-x-4 bottom-4 font-serif text-lg italic leading-snug text-cream md:text-xl">
                {reel.caption}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Shop by category ─────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <div className="text-center">
          <p className="text-[11px] font-medium uppercase tracking-[0.35em] text-bronze">
            The Collection
          </p>
          <h2 className="mt-3 font-serif text-4xl font-medium text-ink md:text-5xl">
            Shop by Category
          </h2>
        </div>

        <div className="mt-10 grid gap-4 md:mt-14 md:grid-cols-3 md:gap-6">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative block overflow-hidden bg-espresso"
            >
              <img
                src={resolveStrkImg(`category-${cat.id}-img`, 800)}
                alt={cat.label}
                loading="lazy"
                className="aspect-[3/4] w-full object-cover opacity-90 transition-all duration-700 group-hover:scale-105 group-hover:opacity-70 md:aspect-[3/3.4]"
              />
              <div className="absolute inset-0 flex items-end justify-center bg-gradient-to-t from-ink/60 to-transparent p-8">
                <div className="text-center">
                  <p className="font-serif text-2xl font-medium uppercase tracking-[0.2em] text-cream md:text-3xl">
                    {cat.label}
                  </p>
                  <span className="mt-2 inline-block translate-y-2 text-[11px] font-medium uppercase tracking-[0.25em] text-gold opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    Shop now
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Brand story ──────────────────────────────────── */}
      <section id="story" className="bg-ink py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 md:grid-cols-2 md:gap-16 md:px-8">
          <div className="overflow-hidden">
            <img
              data-strk-img-id="story-atelier-img"
              data-strk-img="jeweler hands crafting gold jewelry in warm atelier workshop, editorial photography"
              data-strk-img-ratio="4x3"
              data-strk-img-width="900"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora atelier"
              className="aspect-[4/5] w-full object-cover md:aspect-[4/4.6]"
            />
          </div>
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.35em] text-gold">
              Our Story
            </p>
            <h2 className="mt-4 font-serif text-4xl font-medium leading-tight text-cream md:text-5xl">
              Jewelry that honors the{' '}
              <em className="italic text-gold-soft">everyday</em>
            </h2>
            <p className="mt-6 leading-relaxed text-fog">
              Velmora began at a single jeweler&apos;s bench with a simple belief:
              the pieces you wear every day should be made like heirlooms —
              not priced like them. Each design is plated in a generous layer
              of 18K gold over recycled brass, hand-finished in small batches,
              and tested to be kind to sensitive skin.
            </p>
            <p className="mt-4 leading-relaxed text-fog">
              No middlemen. No markup theater. Just quiet, lasting beauty —
              delivered in packaging worth keeping.
            </p>
            <Button asChild variant="outline-gold" className="mt-8">
              <Link to="/shop">Discover the craft</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ── Testimonials ─────────────────────────────────── */}
      <section id="reviews" className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <div className="text-center">
          <p className="text-[11px] font-medium uppercase tracking-[0.35em] text-bronze">
            800+ Five-Star Reviews
          </p>
          <h2 className="mt-3 font-serif text-4xl font-medium text-ink md:text-5xl">
            Treasured by Many
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:mt-16 md:grid-cols-3 md:gap-8">
          {TESTIMONIALS.map((t, i) => (
            <figure
              key={t.name}
              className="animate-fade-up border border-line bg-cream p-8 shadow-[0_18px_50px_-30px_rgba(23,19,16,0.25)]"
              style={{ animationDelay: `${i * 120}ms` }}
            >
              <StarRating rating={5} />
              <blockquote className="mt-5 font-serif text-xl leading-relaxed text-ink">
                &ldquo;{t.text}&rdquo;
              </blockquote>
              <figcaption className="mt-6 text-[11px] font-medium uppercase tracking-[0.25em] text-bronze">
                {t.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* ── Journal teaser ───────────────────────────────── */}
      <section id="journal" className="border-t border-line bg-sand/60 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.35em] text-bronze">
                The Journal
              </p>
              <h2 className="mt-3 font-serif text-4xl font-medium text-ink md:text-5xl">
                Notes on Adornment
              </h2>
            </div>
          </div>

          <div className="mt-10 grid gap-4 md:mt-14 md:grid-cols-3 md:gap-6">
            {[
              { id: 'journal-care', title: 'How to Care for Demi-Fine Jewelry', query: 'flat lay of gold jewelry with soft cloth and care tools, warm editorial' },
              { id: 'journal-layering', title: 'The Art of Layering Necklaces', query: 'woman with layered gold necklaces styling, editorial fashion photography' },
              { id: 'journal-gifting', title: 'A Gifting Guide for Every Her', query: 'elegant gold jewelry gift box with ribbon, warm editorial photography' },
            ].map((post) => (
              <article key={post.id} className="group cursor-pointer">
                <div className="overflow-hidden bg-espresso">
                  <img
                    src={resolveStrkImg(`${post.id}-img`, 700)}
                    alt={post.title}
                    loading="lazy"
                    className="aspect-[3/2] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <h3 className="mt-5 font-serif text-2xl font-medium leading-snug text-ink transition-colors group-hover:text-bronze">
                  {post.title}
                </h3>
                <p className="mt-2 text-[11px] font-medium uppercase tracking-[0.25em] text-bronze">
                  Read more
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Newsletter ───────────────────────────────────── */}
      <section className="bg-espresso py-20 md:py-24">
        <div className="mx-auto max-w-2xl px-5 text-center md:px-8">
          <p className="text-[11px] font-medium uppercase tracking-[0.35em] text-gold">
            The Inner Circle
          </p>
          <h2 className="mt-4 font-serif text-4xl font-medium text-cream md:text-5xl">
            Join for 10% off your first order
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-fog">
            New pieces, private offers, and stories from the atelier.
            Never more than twice a month.
          </p>
          <form onSubmit={handleNewsletter} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="h-14 flex-1 border border-line-dark bg-ink px-5 text-sm text-cream placeholder:text-fog focus:border-gold focus:outline-none"
            />
            <Button type="submit" size="lg" className="shrink-0">
              Subscribe
            </Button>
          </form>
        </div>
      </section>
    </ImageRoot>
  )
}
