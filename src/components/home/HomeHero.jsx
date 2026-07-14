import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function HomeHero() {
  return (
    <section className="relative isolate -mt-[72px] overflow-hidden bg-stone-950 pt-[72px] text-stone-50 md:-mt-[80px] md:pt-[80px]">
      <div
        className="absolute inset-0"
        data-strk-bg-id="home-hero-bg"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1800"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(28,25,23,0.82)_0%,rgba(28,25,23,0.52)_45%,rgba(28,25,23,0.32)_100%)]" />

      <div className="relative mx-auto flex min-h-[88vh] max-w-7xl items-end px-5 pb-16 pt-24 md:px-8 md:pb-20 md:pt-28">
        <div className="max-w-2xl space-y-8">
          <p
            id="hero-subtitle"
            className="text-xs uppercase tracking-[0.38em] text-amber-200"
          >
            Premium Demi-Fine Jewelry
          </p>
          <div className="space-y-6">
            <h1
              id="hero-title"
              className="max-w-xl font-serif text-5xl leading-[0.95] text-stone-50 md:text-7xl"
            >
              Crafted to be Treasured
            </h1>
            <p className="max-w-lg text-base leading-7 text-stone-200 md:text-lg">
              Warm gold finishes, refined silhouettes, and gift-ready details for
              everyday luxury at an accessible price.
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              to="/shop"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-200 px-7 py-4 text-sm font-medium uppercase tracking-[0.2em] text-stone-950 transition duration-300 hover:bg-amber-100"
            >
              Shop the Collection
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/collections"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-7 py-4 text-sm font-medium uppercase tracking-[0.2em] text-stone-50 transition duration-300 hover:bg-white/10"
            >
              Explore Bestsellers
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
