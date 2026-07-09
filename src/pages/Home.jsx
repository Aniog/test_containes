import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Star, Truck, RotateCcw, Shield, Sparkles } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import SectionHeading from '@/components/SectionHeading.jsx'
import ProductCard from '@/components/ProductCard.jsx'
import { useProducts } from '@/hooks/useProducts.js'
import { cn } from '@/lib/utils.js'

const trustItems = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Shield, label: '18K Gold Plated' },
  { icon: Sparkles, label: 'Hypoallergenic' },
]

const ugcPosts = [
  { id: 'ugc-1', caption: 'Everyday gold, elevated' },
  { id: 'ugc-2', caption: 'Layered and loved' },
  { id: 'ugc-3', caption: 'Gifts that last' },
  { id: 'ugc-4', caption: 'Minimal, meaningful' },
  { id: 'ugc-5', caption: 'Treasured moments' },
]

const categories = [
  { id: 'earrings', label: 'Earrings', slug: 'earrings' },
  { id: 'necklaces', label: 'Necklaces', slug: 'necklaces' },
  { id: 'huggies', label: 'Huggies', slug: 'huggies' },
]

const testimonials = [
  { name: 'Sophia M.', text: 'The quality exceeded my expectations. I wear my huggies every single day.' },
  { name: 'Emma L.', text: 'Beautiful packaging and even more beautiful jewelry. My new go-to gift.' },
  { name: 'Olivia R.', text: 'Quiet luxury at its best. The gold finish still looks brand new months later.' },
]

export default function Home() {
  const { products, status } = useProducts()
  const bestsellers = products.filter((p) => p.data?.bestseller)
  const heroRef = useRef(null)
  const ugcRef = useRef(null)
  const categoryRef = useRef(null)
  const storyRef = useRef(null)

  useEffect(() => {
    const cleanups = []
    ;[heroRef, ugcRef, categoryRef, storyRef].forEach((ref) => {
      if (ref.current) {
        cleanups.push(ImageHelper.loadImages(strkImgConfig, ref.current))
      }
    })
    return () => cleanups.forEach((cleanup) => cleanup && cleanup())
  }, [products])

  return (
    <div className="bg-background">
      {/* Hero */}
      <section ref={heroRef} className="relative h-screen min-h-[600px]">
        <div
          className="absolute inset-0"
          data-strk-bg-id="hero-bg-main"
          data-strk-bg="[hero-subtitle] [hero-title] gold jewelry on model"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/20 to-background" />

        <div className="relative flex h-full flex-col items-center justify-center px-6 text-center">
          <p
            id="hero-subtitle"
            className="mb-4 text-xs uppercase tracking-widest text-foreground/80"
          >
            Velmora Fine Jewelry
          </p>
          <h1
            id="hero-title"
            className="max-w-4xl font-serif text-5xl font-normal leading-[1.05] tracking-wide text-foreground md:text-7xl lg:text-8xl"
          >
            Crafted to be Treasured
          </h1>
          <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-foreground/80 md:text-lg">
            Demi-fine gold jewelry designed for the everyday and the extraordinary.
          </p>
          <Link
            to="/shop"
            className="mt-10 inline-flex items-center gap-2 bg-accent px-8 py-4 text-xs font-medium uppercase tracking-widest text-background transition-colors hover:bg-accent-hover"
          >
            Shop the Collection
            <ArrowRight size={16} strokeWidth={1.5} />
          </Link>
        </div>
      </section>

      {/* Trust bar */}
      <section className="border-b border-muted-subtle/30 bg-surface">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-6 px-6 py-4 md:gap-12 md:py-5">
          {trustItems.map((item) => (
            <div key={item.label} className="flex items-center gap-2 text-foreground/90">
              <item.icon size={16} strokeWidth={1.5} className="text-accent" />
              <span className="text-xs uppercase tracking-wider">{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Bestsellers */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <SectionHeading title="Bestsellers" subtitle="Curated for You" centered />
        {status === 'loading' && (
          <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 lg:grid-cols-5">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="aspect-[4/5] animate-pulse bg-surface" />
            ))}
          </div>
        )}
        {status === 'ready' && (
          <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 lg:grid-cols-5">
            {bestsellers.map((product) => (
              <ProductCard key={product.id} product={{ ...product.data, id: product.id }} />
            ))}
          </div>
        )}
      </section>

      {/* UGC Reels */}
      <section className="border-y border-muted-subtle/30 bg-surface py-14">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <SectionHeading title="Worn by You" subtitle="@velmorajewelry" centered />
          <div
            ref={ugcRef}
            className="hide-scrollbar -mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 md:-mx-10 md:px-10"
          >
            {ugcPosts.map((post, index) => (
              <div
                key={post.id}
                className="group relative aspect-[9/16] w-40 flex-shrink-0 snap-center overflow-hidden md:w-52"
              >
                <img
                  data-strk-img-id={post.id}
                  data-strk-img={`[${post.id}-caption] gold jewelry worn`}
                  data-strk-img-ratio="9x16"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={post.caption}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <p
                  id={`${post.id}-caption`}
                  className="absolute bottom-4 left-4 right-4 font-serif text-sm italic leading-snug text-foreground"
                >
                  {post.caption}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shop by Category */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <SectionHeading title="Shop by Category" centered />
        <div ref={categoryRef} className="grid gap-4 md:grid-cols-3">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/shop?category=${category.slug}`}
              className="group relative aspect-[3/4] overflow-hidden bg-surface"
            >
              <div
                className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                data-strk-bg-id={`category-bg-${category.id}`}
                data-strk-bg={`[category-label-${category.id}] [category-section-title] gold jewelry`}
                data-strk-bg-ratio="3x4"
                data-strk-bg-width="600"
              />
              <div className="absolute inset-0 bg-black/30 transition-colors group-hover:bg-black/40" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span
                  id={`category-label-${category.id}`}
                  className="font-serif text-2xl uppercase tracking-widest-custom text-foreground md:text-3xl"
                >
                  {category.label}
                </span>
              </div>
            </Link>
          ))}
        </div>
        <span id="category-section-title" className="sr-only">
          Shop by Category
        </span>
      </section>

      {/* Brand Story */}
      <section className="bg-surface">
        <div className="mx-auto grid max-w-7xl md:grid-cols-2">
          <div
            ref={storyRef}
            className="relative aspect-square min-h-[400px] md:aspect-auto"
          >
            <div
              className="absolute inset-0"
              data-strk-bg-id="story-bg"
              data-strk-bg="[story-desc] [story-title] fine jewelry craftsmanship"
              data-strk-bg-ratio="1x1"
              data-strk-bg-width="800"
            />
          </div>
          <div className="flex flex-col justify-center px-6 py-16 md:px-16 md:py-24">
            <p className="mb-3 text-xs uppercase tracking-widest text-accent">Our Story</p>
            <h2
              id="story-title"
              className="font-serif text-3xl font-normal uppercase tracking-widest-custom text-foreground md:text-4xl"
            >
              Designed for the Modern Muse
            </h2>
            <p id="story-desc" className="mt-6 leading-relaxed text-muted">
              Velmora was born from a simple belief: jewelry should feel personal, not precious.
              Each piece is designed in-house and finished in 18k gold plate to bring a touch of
              everyday luxury to your collection—without the traditional markup.
            </p>
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 text-xs uppercase tracking-widest text-accent transition-colors hover:text-accent-hover"
            >
              Read Our Story
              <ArrowRight size={14} strokeWidth={1.5} />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <SectionHeading title="What They’re Saying" centered />
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="border border-muted-subtle/30 bg-surface p-8 transition-shadow duration-300 hover:shadow-lg"
            >
              <div className="mb-4 flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className="fill-accent text-accent"
                    strokeWidth={1.5}
                  />
                ))}
              </div>
              <p className="mb-6 text-sm leading-relaxed text-foreground/90">“{t.text}”</p>
              <p className="text-xs uppercase tracking-widest text-muted">{t.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-accent-soft">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center md:py-28">
          <p className="mb-3 text-xs uppercase tracking-widest text-accent">The Inner Circle</p>
          <h2 className="font-serif text-3xl font-normal uppercase tracking-widest-custom text-foreground md:text-4xl">
            Join for 10% Off
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm text-muted">
            Be the first to know about new drops, styling notes, and exclusive offers.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
          >
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 border-b border-foreground/20 bg-transparent px-4 py-3 text-sm text-foreground placeholder:text-muted/60 focus:border-accent focus:outline-none"
            />
            <button
              type="submit"
              className="bg-accent px-6 py-3 text-xs font-medium uppercase tracking-widest text-background transition-colors hover:bg-accent-hover"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}
