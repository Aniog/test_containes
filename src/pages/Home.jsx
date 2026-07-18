import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Star } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products, categories, testimonials, ugcPosts } from '@/data/products'
import { ProductCard } from '@/components/ui/ProductCard'
import { Button } from '@/components/ui/Button'
import { StarRating } from '@/components/ui/StarRating'

const trustItems = [
  'Free Worldwide Shipping',
  '30-Day Returns',
  '18K Gold Plated',
  'Hypoallergenic',
]

export default function Home() {
  const bestsellers = products.filter((p) => p.tags.includes('bestseller'))
  const pageRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, pageRef.current)
  }, [])

  return (
    <div ref={pageRef} className="bg-paper">
      {/* Hero */}
      <section className="relative h-[85vh] min-h-[600px] w-full overflow-hidden">
        <div
          className="absolute inset-0"
          data-strk-bg-id="velmora-hero-bg"
          data-strk-bg="[hero-subtitle] [hero-title] velmora fine jewelry gold"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-ink/30" />
        <div className="relative mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center text-cream">
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-cream/90">
            Demi-Fine Gold Jewelry
          </p>
          <h1
            id="hero-title"
            className="max-w-3xl font-serif text-5xl font-light md:text-7xl lg:text-8xl"
          >
            Crafted to be Treasured
          </h1>
          <p
            id="hero-subtitle"
            className="mx-auto mt-6 max-w-md text-base font-light leading-relaxed text-cream/90 md:text-lg"
          >
            Timeless gold pieces for everyday rituals and forever moments.
          </p>
          <Button
            variant="solid"
            size="lg"
            className="mt-10 bg-gold text-cream hover:bg-cream hover:text-ink"
            asChild
          >
            <Link to="/shop">Shop the Collection</Link>
          </Button>
        </div>
      </section>

      {/* Trust bar */}
      <section className="border-b border-ink/10 bg-paper">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-6 px-6 py-4 md:justify-between md:gap-8">
          {trustItems.map((item) => (
            <span
              key={item}
              className="text-center text-[10px] uppercase tracking-[0.2em] text-stone md:text-xs"
            >
              {item}
            </span>
          ))}
        </div>
      </section>

      {/* Bestsellers */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="mb-12 flex flex-col items-center text-center">
          <h2 className="font-serif text-3xl md:text-4xl">Bestsellers</h2>
          <p className="mt-3 max-w-md text-sm text-stone">
            The pieces our customers wear on repeat.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 lg:grid-cols-5">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button variant="outline" asChild>
            <Link to="/shop">Shop All</Link>
          </Button>
        </div>
      </section>

      {/* UGC Reels strip */}
      <section className="border-y border-ink/10 bg-paper py-12">
        <div className="mx-auto max-w-7xl px-6">
          <p className="mb-6 text-center text-xs uppercase tracking-[0.25em] text-stone">
            @velmorafinejewelry
          </p>
        </div>
        <div className="hide-scrollbar flex gap-4 overflow-x-auto px-6 pb-2 md:gap-6">
          {ugcPosts.map((post) => (
            <div
              key={post.id}
              className="group relative w-[220px] flex-shrink-0 overflow-hidden rounded-sm md:w-[260px]"
            >
              <div className="aspect-[9/16] w-full">
                <img
                  alt="Velmora customer style"
                  data-strk-img-id={post.imgId}
                  data-strk-img={`[${post.captionId}] velmora fine jewelry worn`}
                  data-strk-img-ratio="9x16"
                  data-strk-img-width="500"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
              <p
                id={post.captionId}
                className="absolute bottom-4 left-4 right-4 font-serif text-base italic text-cream md:text-lg"
              >
                {post.caption}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Shop by category */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <h2 className="mb-10 text-center font-serif text-3xl md:text-4xl">
          Shop by Category
        </h2>
        <div className="grid gap-4 md:grid-cols-3">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/shop?category=${category.id}`}
              className="group relative aspect-[4/5] overflow-hidden bg-champagne/40"
            >
              <img
                alt={category.label}
                data-strk-img-id={category.imgId}
                data-strk-img={`[${category.titleId}] velmora fine jewelry gold`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="700"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-ink/20 transition-colors group-hover:bg-ink/30" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3
                  id={category.titleId}
                  className="font-serif text-2xl text-cream md:text-3xl"
                >
                  {category.label}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Brand story split */}
      <section className="bg-champagne/30">
        <div className="mx-auto grid max-w-7xl md:grid-cols-2">
          <div className="relative aspect-[4/5] md:aspect-auto md:min-h-[600px]">
            <img
              alt="Velmora jewelry craftsmanship"
              data-strk-img-id="velmora-brand-story"
              data-strk-img="[brand-story-title] [brand-story-body] velmora fine jewelry artisan gold"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center px-6 py-16 md:px-16 md:py-24">
            <p className="text-xs uppercase tracking-[0.25em] text-gold">
              Our Story
            </p>
            <h2
              id="brand-story-title"
              className="mt-4 font-serif text-3xl md:text-5xl"
            >
              Jewelry Made to Live In
            </h2>
            <p
              id="brand-story-body"
              className="mt-6 leading-relaxed text-stone"
            >
              Velmora was born from a simple belief: fine-looking jewelry
              shouldn't require a special occasion. We design demi-fine pieces
              in 18k gold-plated finishes, using hypoallergenic materials and
              thoughtful details that feel elevated yet wearable every day.
            </p>
            <p className="mt-4 leading-relaxed text-stone">
              Every piece is made to be treasured—by you, or by someone you
              love.
            </p>
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-ink transition-colors hover:text-gold"
            >
              Read Our Story <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <h2 className="mb-12 text-center font-serif text-3xl md:text-4xl">
          Loved By You
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((review) => (
            <div
              key={review.id}
              className="border border-ink/10 bg-paper p-8 text-center transition-shadow duration-300 hover:shadow-sm"
            >
              <StarRating rating={review.rating} size={16} />
              <p className="mt-5 font-serif text-lg italic leading-relaxed text-ink">
                "{review.text}"
              </p>
              <p className="mt-5 text-xs uppercase tracking-[0.2em] text-stone">
                {review.name}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-gold">
        <div className="mx-auto max-w-3xl px-6 py-16 text-center text-cream md:py-20">
          <h2 className="font-serif text-3xl md:text-4xl">
            Join for 10% Off Your First Order
          </h2>
          <p className="mt-4 text-sm text-cream/90">
            Be the first to know about new drops, styling notes, and member-only
            exclusives.
          </p>
          <form
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border-b border-cream/40 bg-transparent px-4 py-3 text-sm text-cream placeholder:text-cream/60 focus:border-cream focus:outline-none sm:w-80"
              required
            />
            <Button
              variant="outline"
              className="border-cream text-cream hover:bg-cream hover:text-gold"
            >
              Subscribe
            </Button>
          </form>
        </div>
      </section>
    </div>
  )
}
