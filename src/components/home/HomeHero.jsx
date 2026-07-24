import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const HomeHero = () => {
  return (
    <section className="relative isolate overflow-hidden bg-brand-ink text-stone-50">
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-velmora-84bc"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1800"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-ink via-brand-ink/70 to-brand-ink/20" />
      <div className="relative mx-auto grid min-h-[88vh] max-w-7xl items-end px-5 pb-14 pt-32 sm:px-6 md:pb-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:pb-24 lg:pt-36">
        <div className="max-w-2xl space-y-8">
          <span className="inline-flex rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.35em] text-brand-gold backdrop-blur-sm">
            Quiet Luxury, Made Wearable
          </span>
          <div className="space-y-6">
            <h1 id="hero-title" className="max-w-xl font-serif text-6xl leading-[0.9] sm:text-7xl lg:text-8xl">
              Crafted to be Treasured
            </h1>
            <p id="hero-subtitle" className="max-w-lg text-base leading-8 text-stone-200 sm:text-lg">
              Warm-lit gold essentials and giftable statement pieces designed to feel refined, personal, and easy to wear every day.
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              to="/shop"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-gold px-7 py-4 text-sm font-medium uppercase tracking-[0.24em] text-brand-ink transition hover:bg-brand-mist"
            >
              Shop the Collection
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-7 py-4 text-sm font-medium uppercase tracking-[0.24em] text-stone-50 transition hover:border-brand-gold hover:text-brand-gold"
            >
              Discover Velmora
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeHero
