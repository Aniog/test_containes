import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-stone-950 text-stone-100">
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-velmora-bg-7f1a9e"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1800"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-950/75 to-stone-950/35" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(253,230,138,0.18),transparent_28%)]" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl items-end px-6 pb-20 pt-32 md:px-8 md:pb-24">
        <div className="max-w-2xl space-y-8">
          <p className="text-xs uppercase tracking-[0.34em] text-stone-300">
            Velmora Fine Jewelry
          </p>
          <div className="space-y-6">
            <h1
              id="hero-title"
              className="font-display text-6xl leading-[0.92] text-stone-100 md:text-7xl lg:text-8xl"
            >
              Crafted to be Treasured
            </h1>
            <p id="hero-subtitle" className="max-w-xl text-base leading-8 text-stone-300 md:text-lg">
              Warm-toned demi-fine jewelry for gifting, layering, and everyday ritual — designed to feel quietly luxurious from morning light to evening plans.
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              to="/shop"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-amber-200 px-7 py-4 text-xs uppercase tracking-[0.28em] text-stone-950 transition duration-300 hover:bg-amber-100"
            >
              Shop the Collection
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="#story"
              className="inline-flex items-center justify-center rounded-full border border-stone-400/50 px-7 py-4 text-xs uppercase tracking-[0.28em] text-stone-100 transition duration-300 hover:border-stone-100"
            >
              Discover Velmora
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
