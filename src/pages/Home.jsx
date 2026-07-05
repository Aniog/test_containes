import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ChevronLeft, ChevronRight, Mail, Star } from 'lucide-react'
import { cn } from '@/lib/utils'
import { categories, products, PLACEHOLDER_SVG } from '@/data/products'
import { useCart } from '@/context/CartContext'
import ProductCard from '@/components/ProductCard'
import StarRating from '@/components/StarRating'

const trustItems = [
  'Free Worldwide Shipping',
  '30-Day Returns',
  '18K Gold Plated',
  'Hypoallergenic',
]

const ugcSlides = [
  { id: 'ugc-1', caption: 'Everyday gold moments', titleId: 'ugc-title-1' },
  { id: 'ugc-2', caption: 'Layered and loved', titleId: 'ugc-title-2' },
  { id: 'ugc-3', caption: 'Effortless elegance', titleId: 'ugc-title-3' },
  { id: 'ugc-4', caption: 'A little luxury', titleId: 'ugc-title-4' },
  { id: 'ugc-5', caption: 'Treasured details', titleId: 'ugc-title-5' },
]

const testimonials = [
  {
    id: 't1',
    name: 'Sophia M.',
    text: 'The quality exceeded my expectations. I wear my huggies every day and they still look brand new.',
    rating: 5,
  },
  {
    id: 't2',
    name: 'Elena R.',
    text: 'Beautiful packaging and even more beautiful jewelry. Already planning my next purchase.',
    rating: 5,
  },
  {
    id: 't3',
    name: 'Naomi K.',
    text: 'Quiet luxury at an accessible price. I gifted the Heirloom Set and she cried.',
    rating: 5,
  },
]

export default function Home() {
  const { addToCart } = useCart()
  const scrollRef = useRef(null)
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const scrollUgc = (dir) => {
    if (!scrollRef.current) return
    const scrollAmount = 280
    scrollRef.current.scrollBy({ left: dir === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' })
  }

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email) setSubscribed(true)
  }

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[85vh] min-h-[600px]">
        <div
          className="absolute inset-0 bg-foreground/30"
          data-strk-bg-id="hero-bg"
          data-strk-bg="[hero-title] [hero-subtitle]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/40 via-foreground/20 to-foreground/50" />
        <div className="relative mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-4 text-center text-white md:px-6">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-white/90">
            New Collection
          </p>
          <h1
            id="hero-title"
            className="max-w-4xl font-serif text-5xl font-light leading-[1.1] md:text-7xl lg:text-8xl"
          >
            Crafted to be Treasured
          </h1>
          <p
            id="hero-subtitle"
            className="mx-auto mt-5 max-w-lg text-base font-light leading-relaxed text-white/90 md:text-lg"
          >
            Demi-fine gold jewelry for the moments worth remembering.
          </p>
          <Link
            to="/shop"
            className="mt-8 rounded-md bg-accent px-8 py-4 text-sm font-semibold uppercase tracking-widest text-accent-foreground transition-all hover:bg-accent/90"
          >
            Shop the Collection
          </Link>
        </div>
      </section>

      {/* Trust bar */}
      <section className="border-b border-border bg-card">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-8 gap-y-3 px-4 py-4 md:justify-between md:px-6">
          {trustItems.map((item) => (
            <span
              key={item}
              className="text-center text-[11px] font-medium uppercase tracking-widest text-muted-foreground"
            >
              {item}
            </span>
          ))}
        </div>
      </section>

      {/* Bestsellers */}
      <section className="mx-auto max-w-7xl px-4 py-16 md:py-24 md:px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="mb-2 text-xs font-medium uppercase tracking-widest text-muted-foreground">
              Curated Favorites
            </p>
            <h2 className="font-serif text-3xl font-light md:text-4xl">
              Bestsellers
            </h2>
          </div>
          <Link
            to="/shop"
            className="hidden items-center gap-1 text-sm font-medium underline underline-offset-4 transition-opacity hover:opacity-70 md:flex"
          >
            View all <ArrowRight size={16} />
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-3 lg:grid-cols-5">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="mt-8 text-center md:hidden">
          <Link
            to="/shop"
            className="inline-flex items-center gap-1 text-sm font-medium underline underline-offset-4"
          >
            View all <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* UGC Reel strip */}
      <section className="border-y border-border bg-card py-12">
        <div className="mx-auto mb-6 flex max-w-7xl items-end justify-between px-4 md:px-6">
          <div>
            <p className="mb-1 text-xs font-medium uppercase tracking-widest text-muted-foreground">
              @velmorafinejewelry
            </p>
            <h2 className="font-serif text-2xl font-light md:text-3xl">
              Styled by You
            </h2>
          </div>
          <div className="hidden gap-2 md:flex">
            <button
              onClick={() => scrollUgc('left')}
              className="rounded-full border border-border p-2 transition-colors hover:bg-muted"
              aria-label="Scroll left"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => scrollUgc('right')}
              className="rounded-full border border-border p-2 transition-colors hover:bg-muted"
              aria-label="Scroll right"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
        <div
          ref={scrollRef}
          className="hide-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 md:px-6"
        >
          {ugcSlides.map((slide) => (
            <div
              key={slide.id}
              className="group relative aspect-[9/16] w-56 flex-shrink-0 snap-center overflow-hidden rounded-lg bg-muted"
            >
              <img
                data-strk-img-id={slide.id}
                data-strk-img={`[${slide.titleId}]`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="500"
                src={PLACEHOLDER_SVG}
                alt={slide.caption}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent" />
              <p
                id={slide.titleId}
                className="absolute bottom-4 left-4 right-4 font-serif text-lg italic text-white"
              >
                {slide.caption}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Shop by category */}
      <section className="mx-auto max-w-7xl px-4 py-16 md:py-24 md:px-6">
        <h2 className="mb-10 text-center font-serif text-3xl font-light md:text-4xl">
          Shop by Category
        </h2>
        <div className="grid gap-4 md:grid-cols-3">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative aspect-[4/5] overflow-hidden rounded-lg bg-muted"
            >
              <div
                className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                data-strk-bg-id={`category-${cat.id}-bg`}
                data-strk-bg={`[category-${cat.id}-title]`}
                data-strk-bg-ratio="4x5"
                data-strk-bg-width="800"
              />
              <div className="absolute inset-0 bg-foreground/20 transition-colors group-hover:bg-foreground/30" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span
                  id={`category-${cat.id}-title`}
                  className="border-b border-transparent pb-1 font-serif text-2xl font-light text-white transition-all group-hover:border-white"
                >
                  {cat.label}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Brand story */}
      <section id="story" className="bg-card">
        <div className="mx-auto grid max-w-7xl md:grid-cols-2">
          <div className="relative aspect-square md:aspect-auto">
            <img
              data-strk-img-id="brand-story-img"
              data-strk-img="[story-title] [story-body]"
              data-strk-img-ratio="1x1"
              data-strk-img-width="900"
              src={PLACEHOLDER_SVG}
              alt="Velmora jewelry craftsmanship"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center px-6 py-14 md:px-14 lg:px-20">
            <p className="mb-3 text-xs font-medium uppercase tracking-widest text-muted-foreground">
              Our Philosophy
            </p>
            <h2
              id="story-title"
              className="font-serif text-3xl font-light leading-tight md:text-4xl lg:text-5xl"
            >
              Designed for the Modern Heirloom
            </h2>
            <p
              id="story-body"
              className="mt-6 leading-relaxed text-muted-foreground"
            >
              Velmora was born from a simple belief: fine-feeling jewelry should
              feel attainable. Every piece is designed in-house, plated in 18K
              gold, and finished by hand. We create demi-fine treasures meant to
              be worn, loved, and eventually passed down.
            </p>
            <Link
              to="#"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest underline underline-offset-4 transition-opacity hover:opacity-70"
            >
              Our Story <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-7xl px-4 py-16 md:py-24 md:px-6">
        <h2 className="mb-10 text-center font-serif text-3xl font-light md:text-4xl">
          What Our Community Says
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="rounded-lg border border-border bg-card p-6 transition-shadow hover:shadow-sm"
            >
              <StarRating rating={t.rating} className="mb-4" />
              <p className="font-serif text-lg italic leading-relaxed">
                “{t.text}”
              </p>
              <p className="mt-5 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                {t.name}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-primary py-16 text-primary-foreground">
        <div className="mx-auto max-w-2xl px-4 text-center md:px-6">
          <Mail className="mx-auto mb-4 text-accent" size={32} />
          <h2 className="font-serif text-3xl font-light md:text-4xl">
            Join for 10% Off
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-primary-foreground/80">
            Subscribe for early access to new collections, styling notes, and
            10% off your first order.
          </p>
          {subscribed ? (
            <p className="mt-6 text-sm font-medium text-accent">
              Welcome to Velmora. Check your inbox for your code.
            </p>
          ) : (
            <form
              onSubmit={handleSubscribe}
              className="mt-6 flex flex-col gap-3 sm:flex-row"
            >
              <input
                type="email"
                required
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 rounded-md border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-3 text-sm text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:ring-1 focus:ring-accent"
              />
              <button
                type="submit"
                className="rounded-md bg-accent px-6 py-3 text-sm font-semibold uppercase tracking-widest text-accent-foreground transition-colors hover:bg-accent/90"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  )
}
