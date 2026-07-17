import { useMemo, useRef } from 'react'
import { Link, useOutletContext } from 'react-router-dom'
import { ArrowRight, Star } from 'lucide-react'
import ProductCard from '@/components/storefront/ProductCard'
import { categories, products, testimonials, trustBadges, ugcStories } from '@/data/products'
import { useCart } from '@/context/CartContext'
import { useStrkImages } from '@/hooks/useStrkImages'

export default function HomePage() {
  const { addItem } = useCart()
  const { openCart } = useOutletContext()
  const containerRef = useRef(null)

  const bestsellers = useMemo(() => products.slice(0, 5), [])

  useStrkImages(containerRef, [])

  const handleAddToCart = (product) => {
    addItem(product)
    openCart()
  }

  return (
    <main ref={containerRef} className="bg-brand-ivory text-brand-ink">
      <section className="relative overflow-hidden bg-brand-noir text-brand-cream">
        <div
          className="absolute inset-0"
          data-strk-bg-id="hero-velmora-bg-6h3m1q"
          data-strk-bg="[home-hero-subtitle] [home-hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1800"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-noir/90 via-brand-noir/55 to-brand-noir/35" />
        <div className="relative mx-auto flex min-h-[92vh] max-w-7xl items-end px-4 pb-16 pt-32 md:px-8 md:pb-24 lg:px-10 lg:pb-28">
          <div className="max-w-2xl">
            <p className="mb-5 text-xs uppercase tracking-[0.36em] text-brand-cream/70">
              Velmora Fine Jewelry
            </p>
            <h1 id="home-hero-title" className="font-display text-5xl leading-none text-brand-cream md:text-7xl lg:text-[5.6rem]">
              Crafted to be Treasured
            </h1>
            <p
              id="home-hero-subtitle"
              className="mt-6 max-w-xl text-base leading-8 text-brand-cream/78 md:text-lg"
            >
              Elevated demi-fine jewelry in warm gold finishes, designed for gifting, layering, and every quietly luminous day.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/shop"
                className="inline-flex items-center gap-3 rounded-full bg-brand-gold px-7 py-4 text-[11px] uppercase tracking-[0.28em] text-brand-noir transition hover:bg-brand-gold-soft"
              >
                Shop the Collection
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-3 rounded-full border border-brand-cream/25 bg-brand-cream/8 px-7 py-4 text-[11px] uppercase tracking-[0.28em] text-brand-cream transition hover:bg-brand-cream/14"
              >
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="border-y border-brand-line bg-brand-surface">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-6 gap-y-3 px-4 py-4 text-center text-[11px] uppercase tracking-[0.28em] text-brand-mist md:px-8 lg:px-10">
          {trustBadges.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>

      <section className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24 lg:px-10 lg:py-28">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.32em] text-brand-mist">Bestsellers</p>
            <h2 className="mt-4 font-display text-4xl text-brand-ink md:text-5xl">
              Modern heirlooms with everyday ease
            </h2>
          </div>
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.26em] text-brand-ink transition hover:text-brand-gold"
          >
            View All
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {bestsellers.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              priority={index < 2}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>
      </section>

      <section className="border-y border-brand-line bg-brand-surface py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.32em] text-brand-mist">Seen on Velmora</p>
              <h2 className="mt-4 font-display text-4xl text-brand-ink md:text-5xl">
                A reel of softly golden moments
              </h2>
            </div>
            <p className="max-w-lg text-sm leading-7 text-brand-mist">
              Scroll through our editorial-inspired UGC strip for gifting ideas, ear stacks, and understated necklace styling.
            </p>
          </div>

          <div className="mt-10 flex gap-5 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {ugcStories.map((story) => (
              <article
                key={story.id}
                className="relative min-w-[74vw] overflow-hidden rounded-[2rem] bg-brand-noir text-brand-cream shadow-luxe md:min-w-[23rem]"
              >
                <span id={story.titleId} className="sr-only">
                  Velmora jewelry styling story
                </span>
                <span id={story.captionId} className="sr-only">
                  {story.caption}
                </span>
                <img
                  alt={story.caption}
                  className="aspect-[9/16] w-full object-cover"
                  data-strk-img-id={story.imageId}
                  data-strk-img={`[${story.captionId}] [${story.titleId}] [home-hero-title]`}
                  data-strk-img-ratio="9x16"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-noir/88 via-brand-noir/40 to-transparent px-5 pb-6 pt-16">
                  <p className="font-display text-3xl leading-tight text-brand-cream">
                    {story.caption}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24 lg:px-10 lg:py-28">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.32em] text-brand-mist">Shop by Category</p>
            <h2 className="mt-4 font-display text-4xl text-brand-ink md:text-5xl">
              Curated for daily layering and gifting
            </h2>
          </div>
          <p className="max-w-lg text-sm leading-7 text-brand-mist">
            Choose the silhouette that suits the moment, from polished huggies to delicate pendant layers.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {categories.map((category) => (
            <Link
              key={category.slug}
              to={`/shop?category=${category.name}`}
              className="group relative overflow-hidden rounded-[2rem] bg-brand-noir text-brand-cream shadow-soft"
            >
              <span id={category.titleId} className="sr-only">
                {category.name}
              </span>
              <span id={category.descId} className="sr-only">
                {category.description}
              </span>
              <img
                alt={category.name}
                className="aspect-[4/5] w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                data-strk-img-id={category.imageId}
                data-strk-img={`[${category.descId}] [${category.titleId}] [home-hero-title]`}
                data-strk-img-ratio="4x5"
                data-strk-img-width="1000"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-noir/85 via-brand-noir/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between px-6 py-6">
                <div>
                  <h3 className="font-display text-3xl text-brand-cream">{category.name}</h3>
                  <p className="mt-2 text-sm text-brand-cream/72 opacity-0 transition duration-300 group-hover:opacity-100">
                    {category.description}
                  </p>
                </div>
                <ArrowRight className="h-5 w-5 text-brand-cream transition duration-300 group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-y border-brand-line bg-brand-champagne/55">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:px-8 md:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:px-10 lg:py-28">
          <div className="relative overflow-hidden rounded-[2.2rem] bg-brand-noir shadow-luxe">
            <span id="brand-story-image-title" className="sr-only">
              Velmora artisanship and warm gold jewelry
            </span>
            <span id="brand-story-image-subtitle" className="sr-only">
              Editorial close-up of jewelry craftsmanship and packaging
            </span>
            <img
              alt="Velmora brand story"
              className="aspect-[5/4] w-full object-cover"
              data-strk-img-id="velmora-brand-story-a1c4f6"
              data-strk-img="[brand-story-image-subtitle] [brand-story-image-title] [home-hero-title]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="1200"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-xs uppercase tracking-[0.32em] text-brand-mist">The Velmora World</p>
            <h2 className="mt-4 font-display text-4xl text-brand-ink md:text-5xl">
              Jewelry with an editorial calm and a wearable glow
            </h2>
            <p className="mt-6 max-w-xl text-sm leading-8 text-brand-mist md:text-base">
              Velmora Fine Jewelry was created for women who want pieces that elevate the everyday without feeling overdone. Each silhouette is designed to move easily from morning meetings to candlelit dinners, with gift-ready packaging that feels considered from start to finish.
            </p>
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 text-xs uppercase tracking-[0.26em] text-brand-ink transition hover:text-brand-gold"
            >
              Our Story
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24 lg:px-10 lg:py-28">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.32em] text-brand-mist">Testimonials</p>
          <h2 className="mt-4 font-display text-4xl text-brand-ink md:text-5xl">
            Loved for the details that feel considered
          </h2>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.author}
              className="rounded-[2rem] border border-brand-line bg-brand-surface p-8 text-brand-ink shadow-soft"
            >
              <div className="flex gap-1 text-brand-gold">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={`${testimonial.author}-${index}`} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-6 text-sm leading-8 text-brand-mist">“{testimonial.quote}”</p>
              <p className="mt-6 text-xs uppercase tracking-[0.24em] text-brand-ink">{testimonial.author}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 md:px-8 md:pb-24 lg:px-10 lg:pb-28">
        <div className="rounded-[2.4rem] bg-brand-noir px-6 py-10 text-brand-cream shadow-luxe md:px-10 md:py-14">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.32em] text-brand-cream/65">Private Access</p>
              <h2 className="mt-4 font-display text-4xl md:text-5xl">
                Join for 10% off your first order
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-8 text-brand-cream/75">
                Receive new-drop notes, styling inspiration, and gifting edits before anyone else.
              </p>
            </div>
            <form className="grid gap-3 sm:grid-cols-[minmax(0,22rem)_auto]">
              <input
                type="email"
                placeholder="Email address"
                className="h-14 rounded-full border border-brand-cream/18 bg-brand-cream px-5 text-sm text-brand-ink placeholder:text-brand-mist focus:outline-none focus:ring-2 focus:ring-brand-gold"
              />
              <button
                type="button"
                className="h-14 rounded-full bg-brand-gold px-6 text-[11px] uppercase tracking-[0.28em] text-brand-noir transition hover:bg-brand-gold-soft"
              >
                Join Now
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}
