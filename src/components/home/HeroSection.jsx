import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-ink text-ivory">
      <div
        className="absolute inset-0 opacity-80"
        data-strk-bg-id="hero-bg-velmora-4ad21f"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1800"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/70 to-ink/20" />
      <div className="relative mx-auto flex min-h-screen max-w-7xl items-end px-5 pb-16 pt-32 md:px-8 md:pb-24 md:pt-40">
        <div className="max-w-2xl space-y-6 md:space-y-8">
          <span className="inline-flex rounded-full border border-ivory/20 bg-ivory/10 px-4 py-2 text-xs uppercase tracking-[0.32em] text-ivory/80 backdrop-blur-sm">
            Quiet Luxury · Demi-Fine Gold Jewelry
          </span>
          <div className="space-y-5">
            <h1 id="hero-title" className="font-display text-6xl leading-[0.92] text-ivory md:text-8xl">
              Crafted to be Treasured
            </h1>
            <p id="hero-subtitle" className="max-w-xl text-base leading-8 text-ivory/78 md:text-lg">
              Warm gold finishes, sculptural silhouettes, and thoughtful details made for gifting and self-purchase alike.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              to="/shop"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-bronze bg-bronze px-6 py-4 text-xs font-medium uppercase tracking-[0.24em] text-ink transition hover:translate-y-[-1px] hover:bg-ivory"
            >
              Shop the Collection
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/product/royal-heirloom-set"
              className="inline-flex items-center justify-center rounded-full border border-ivory/20 px-6 py-4 text-xs font-medium uppercase tracking-[0.24em] text-ivory transition hover:bg-ivory/10"
            >
              Discover the Gift Edit
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
