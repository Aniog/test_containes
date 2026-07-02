import React from 'react'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import HeroSection from '@/components/home/HeroSection'
import TrustBar from '@/components/home/TrustBar'
import UgcReel from '@/components/home/UgcReel'
import CategoryTiles from '@/components/home/CategoryTiles'
import StorySection from '@/components/home/StorySection'
import ProductCard from '@/components/product/ProductCard'
import Button from '@/components/ui/Button'
import { IMAGE_PLACEHOLDER, journalEntries, products, testimonials } from '@/data/products'
import { useStrkImages } from '@/lib/useStrkImages'

function TestimonialCard({ item }) {
  return (
    <article className="rounded-[1.75rem] border border-stone-200 bg-stone-50 p-6 text-stone-900 shadow-[0_16px_50px_-38px_rgba(28,25,23,0.4)]">
      <div className="flex gap-1 text-amber-300">
        {Array.from({ length: 5 }).map((_, index) => (
          <span key={index}>★</span>
        ))}
      </div>
      <p className="mt-5 text-base leading-8 text-stone-700">“{item.quote}”</p>
      <div className="mt-6 border-t border-stone-200 pt-4">
        <p className="text-sm font-medium text-stone-950">{item.name}</p>
        <p className="mt-1 text-xs uppercase tracking-[0.24em] text-stone-500">
          Purchased {item.product}
        </p>
      </div>
    </article>
  )
}

function NewsletterSection() {
  return (
    <section className="rounded-[2rem] bg-stone-900 px-6 py-10 text-stone-50 sm:px-8 lg:px-12 lg:py-12">
      <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-amber-200">Newsletter</p>
          <h2 className="mt-3 font-display text-4xl text-stone-50">
            Join for 10% off your first order
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-stone-300">
            Receive first access to new drops, gift edits, and styling notes with a warm editorial touch.
          </p>
        </div>
        <form className="flex w-full max-w-xl flex-col gap-3 sm:flex-row">
          <input
            type="email"
            placeholder="Email address"
            className="min-h-12 flex-1 rounded-full border border-white/15 bg-white/10 px-5 text-sm text-stone-50 placeholder:text-stone-300 focus:border-amber-200 focus:outline-none"
          />
          <Button className="sm:min-w-44">Join Velmora</Button>
        </form>
      </div>
    </section>
  )
}

export default function Home() {
  const containerRef = React.useRef(null)

  useStrkImages(containerRef, [])

  return (
    <div ref={containerRef} className="bg-stone-100 text-stone-900">
      <HeroSection />
      <TrustBar />

      <div className="mx-auto max-w-7xl space-y-24 px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <section className="space-y-8">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-stone-500">Bestsellers</p>
              <h2 className="mt-3 font-display text-4xl text-stone-950 sm:text-5xl">
                Pieces our customers return to
              </h2>
            </div>
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.28em] text-stone-900 transition hover:text-amber-700"
            >
              View all jewelry
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-5">
            {products.map((product, index) => (
              <ProductCard key={product.id} product={product} priority={index === 0} />
            ))}
          </div>
        </section>

        <UgcReel />
        <CategoryTiles />
        <StorySection />

        <section className="space-y-8">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-stone-500">What they’re saying</p>
            <h2 className="mt-3 font-display text-4xl text-stone-950">Loved for gifting and self-purchase alike</h2>
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            {testimonials.map((item) => (
              <TestimonialCard key={item.id} item={item} />
            ))}
          </div>
        </section>

        <section className="space-y-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-stone-500">Journal</p>
              <h2 className="mt-3 font-display text-4xl text-stone-950">The editorial side of everyday jewelry</h2>
            </div>
            <Link
              to="/journal"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.28em] text-stone-900 transition hover:text-amber-700"
            >
              Read the journal
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            {journalEntries.map((entry) => {
              const titleId = `journal-${entry.id}-title`
              const categoryId = `journal-${entry.id}-category`

              return (
                <article
                  key={entry.id}
                  className="overflow-hidden rounded-[1.75rem] border border-stone-200 bg-stone-50 text-stone-900 shadow-[0_18px_60px_-40px_rgba(28,25,23,0.4)]"
                >
                  <img
                    alt={entry.title}
                    className="aspect-[4/3] h-full w-full object-cover"
                    data-strk-img-id={`journal-${entry.id}`}
                    data-strk-img={`[${categoryId}] [${titleId}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="760"
                    src={IMAGE_PLACEHOLDER}
                  />
                  <div className="space-y-4 p-6">
                    <p id={categoryId} className="text-xs uppercase tracking-[0.28em] text-stone-500">
                      {entry.category}
                    </p>
                    <h3 id={titleId} className="font-display text-2xl text-stone-950">
                      {entry.title}
                    </h3>
                    <p className="text-sm leading-7 text-stone-600">
                      Styling notes, gifting ideas, and simple rituals to help your demi-fine pieces stay treasured.
                    </p>
                  </div>
                </article>
              )
            })}
          </div>
        </section>

        <NewsletterSection />
      </div>
    </div>
  )
}
