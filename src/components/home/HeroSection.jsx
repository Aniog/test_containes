import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const HeroSection = () => {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-stone-900 text-stone-50">
      <div
        className="absolute inset-0"
        data-strk-bg-id="velmora-hero-bg-9d1a4f"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1800"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-950/60 to-stone-900/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(245,158,11,0.24),transparent_28%)]" />
      </div>

      <div className="relative mx-auto flex min-h-[100svh] max-w-7xl items-end px-4 pb-16 pt-32 sm:px-6 md:items-center md:pb-24 lg:px-8">
        <div className="max-w-2xl">
          <p
            id="hero-subtitle"
            className="text-xs font-medium uppercase tracking-[0.36em] text-stone-200"
          >
            Premium demi-fine jewelry for gifting and self-purchase
          </p>
          <h1
            id="hero-title"
            className="mt-6 max-w-xl font-serif text-6xl leading-[0.92] text-stone-50 sm:text-7xl md:text-8xl"
          >
            Crafted to be Treasured
          </h1>
          <p className="mt-6 max-w-lg text-base leading-7 text-stone-200 md:text-lg">
            Warm gold tones, sculptural silhouettes, and luminous details designed
            to feel special every single day.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              to="/shop"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-amber-700 px-7 py-4 text-xs font-medium uppercase tracking-[0.28em] text-stone-50 transition duration-300 hover:bg-amber-800"
            >
              Shop the Collection
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="#story"
              className="inline-flex items-center justify-center rounded-full border border-white/30 px-7 py-4 text-xs font-medium uppercase tracking-[0.28em] text-stone-50 transition duration-300 hover:border-white hover:bg-white/10"
            >
              Our Story
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
