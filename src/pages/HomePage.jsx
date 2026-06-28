import { ArrowRight } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import ProductCard from '@/components/layout/ProductCard.jsx'
import Stars from '@/components/layout/Stars.jsx'
import StockBackground from '@/components/layout/StockBackground.jsx'
import StockImage from '@/components/layout/StockImage.jsx'
import {
  categories,
  productCatalog,
  testimonials,
  trustPoints,
  ugcMoments,
} from '@/data/products.js'

export default function HomePage() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!email.trim()) return
    setIsSubmitted(true)
    setEmail('')
  }

  return (
    <>
      <section className="relative min-h-[92vh] overflow-hidden bg-stone-950 text-stone-50">
        <StockBackground
          slotId="hero-velmora"
          imageId="hero-velmora-a1"
          title="Velmora hero image"
          description="Warm-lit close-up of gold jewelry on a model with editorial luxury styling"
          ratio="16x9"
          width="1800"
          className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-950/70 to-stone-900 bg-cover bg-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-950/70 to-stone-950/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-stone-950/20" />

        <div className="relative mx-auto flex min-h-[92vh] max-w-7xl items-end px-5 pb-16 pt-32 sm:px-6 md:items-center lg:px-10">
          <div className="max-w-2xl space-y-7">
            <p className="text-[0.72rem] uppercase tracking-[0.4em] text-amber-200">
              Premium demi-fine jewelry for gifting and self-purchase
            </p>
            <h1 className="font-serif text-5xl leading-none text-stone-50 sm:text-6xl lg:text-7xl">
              Crafted to be Treasured
            </h1>
            <p className="max-w-xl text-base leading-8 text-stone-200 sm:text-lg">
              Velmora pairs sculptural silhouettes, warm gold finishes, and thoughtful
              detailing in pieces designed to feel quietly luxurious from morning to evening.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                to="/shop"
                className="inline-flex items-center justify-center rounded-full bg-amber-200 px-7 py-4 text-xs uppercase tracking-[0.28em] text-stone-950 transition hover:bg-amber-100"
              >
                Shop the Collection
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-7 py-4 text-xs uppercase tracking-[0.28em] text-stone-50 transition hover:bg-white/10"
              >
                Discover the Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-stone-200 bg-stone-100/80">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-6 gap-y-3 px-5 py-4 text-[0.68rem] uppercase tracking-[0.32em] text-stone-700 sm:px-6 lg:px-10">
          {trustPoints.map((point, index) => (
            <span key={point} className="flex items-center gap-6">
              {point}
              {index < trustPoints.length - 1 ? (
                <span className="hidden h-3 w-px bg-stone-300 sm:inline-block" />
              ) : null}
            </span>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 md:py-24 lg:px-10">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="space-y-3">
            <p className="text-[0.68rem] uppercase tracking-[0.34em] text-stone-500">
              Bestsellers
            </p>
            <h2 className="font-serif text-4xl text-stone-950 sm:text-5xl">
              Modern signatures, softly statement-making
            </h2>
          </div>
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.24em] text-stone-700 transition hover:text-stone-950"
          >
            View All <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-5">
          {productCatalog.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="border-y border-stone-200 bg-stone-950 py-16 text-stone-50 md:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div className="space-y-3">
              <p className="text-[0.68rem] uppercase tracking-[0.34em] text-amber-200">
                Worn by our community
              </p>
              <h2 className="font-serif text-4xl text-stone-50 sm:text-5xl">
                A reels-style edit of everyday glow
              </h2>
            </div>
          </div>
          <div className="flex snap-x gap-5 overflow-x-auto pb-2">
            {ugcMoments.map((moment) => (
              <article
                key={moment.id}
                className="group relative min-w-[240px] snap-start overflow-hidden rounded-[2rem] border border-white/10 bg-stone-900 shadow-xl sm:min-w-[280px]"
              >
                <div className="relative aspect-[9/16] overflow-hidden">
                  <StockImage
                    slotId={`ugc-${moment.id}`}
                    imageId={moment.id}
                    title={moment.caption}
                    description={moment.description}
                    ratio="9x16"
                    width="700"
                    alt={moment.caption}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/10 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <p className="font-serif text-2xl leading-tight text-stone-50">
                      {moment.caption}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 md:py-24 lg:px-10">
        <div className="mb-10 space-y-3">
          <p className="text-[0.68rem] uppercase tracking-[0.34em] text-stone-500">
            Shop by category
          </p>
          <h2 className="font-serif text-4xl text-stone-950 sm:text-5xl">
            Made for collecting, layering, and gifting
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {categories.map((category) => (
            <Link
              key={category.slug}
              to={`/shop?category=${category.name}`}
              className="group relative overflow-hidden rounded-[2rem] bg-stone-200"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <StockBackground
                  slotId={`category-${category.slug}`}
                  imageId={category.imageId}
                  title={category.name}
                  description={category.description}
                  ratio="4x3"
                  width="1000"
                  className="absolute inset-0 bg-gradient-to-t from-stone-950/60 via-stone-900/10 to-transparent bg-cover bg-center transition duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/75 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6">
                  <div>
                    <p className="font-serif text-3xl text-stone-50">{category.name}</p>
                    <p className="mt-2 text-sm leading-6 text-stone-200">
                      {category.description}
                    </p>
                  </div>
                  <span className="text-xs uppercase tracking-[0.3em] text-amber-200">
                    Shop
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-stone-100 py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-2 lg:px-10">
          <div className="overflow-hidden rounded-[2rem] bg-stone-200 shadow-[0_24px_60px_rgba(28,25,23,0.1)]">
            <div className="relative aspect-[4/5]">
              <StockImage
                slotId="story-velmora"
                imageId="story-velmora-j2"
                title="Velmora brand story image"
                description="Editorial still life of gold jewelry arranged on warm stone and silk textures"
                ratio="4x3"
                width="1200"
                alt="Velmora brand story"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="flex items-center">
            <div className="max-w-xl space-y-6">
              <p className="text-[0.68rem] uppercase tracking-[0.34em] text-stone-500">
                Our story
              </p>
              <h2 className="font-serif text-4xl text-stone-950 sm:text-5xl">
                Jewelry that feels intimate, giftable, and enduring.
              </h2>
              <p className="text-base leading-8 text-stone-600">
                Velmora was built around the idea that premium-looking jewelry should
                still feel easy to wear, easy to gift, and easy to love. Each piece is
                designed with warm tones, elegant proportions, and everyday versatility
                in mind.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.24em] text-stone-800 transition hover:text-stone-950"
              >
                Our Story <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 md:py-24 lg:px-10">
        <div className="mb-10 space-y-3 text-center">
          <p className="text-[0.68rem] uppercase tracking-[0.34em] text-stone-500">
            Testimonials
          </p>
          <h2 className="font-serif text-4xl text-stone-950 sm:text-5xl">
            Loved for the way it feels
          </h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="rounded-[2rem] border border-stone-200 bg-white p-8 shadow-sm"
            >
              <Stars rating={5} reviews={5} />
              <p className="mt-6 text-base leading-8 text-stone-700">
                “{testimonial.quote}”
              </p>
              <p className="mt-6 text-[0.68rem] uppercase tracking-[0.3em] text-stone-500">
                {testimonial.name}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="px-5 pb-16 sm:px-6 md:pb-24 lg:px-10">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-[2.25rem] bg-stone-950 px-6 py-12 text-stone-50 shadow-[0_24px_80px_rgba(28,25,23,0.18)] sm:px-10 lg:px-14">
          <div className="grid gap-8 lg:grid-cols-[1.1fr,1fr] lg:items-center">
            <div className="space-y-4">
              <p className="text-[0.68rem] uppercase tracking-[0.34em] text-amber-200">
                Velmora letters
              </p>
              <h2 className="font-serif text-4xl text-stone-50 sm:text-5xl">
                Join for 10% off your first order
              </h2>
              <p className="max-w-xl text-base leading-8 text-stone-300">
                Early access to limited drops, gifting edits, and styling notes curated
                for effortless layering.
              </p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <div className="flex flex-col gap-3 sm:flex-row">
                <input
                  id="newsletter-email"
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="Email address"
                  className="h-14 flex-1 rounded-full border border-white/10 bg-white px-5 text-sm text-stone-950 placeholder:text-stone-500 focus:border-amber-200 focus:outline-none"
                />
                <button
                  type="submit"
                  className="h-14 rounded-full bg-amber-200 px-7 text-xs uppercase tracking-[0.28em] text-stone-950 transition hover:bg-amber-100"
                >
                  Join Now
                </button>
              </div>
              <p className="text-sm text-stone-300">
                {isSubmitted
                  ? 'You are in. Your welcome offer is on its way.'
                  : 'No spam, only considered updates and occasional offers.'}
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
