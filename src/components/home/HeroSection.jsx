import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

function HeroSection() {
  return (
    <section className="relative -mt-[76px] min-h-[100svh] overflow-hidden bg-velmora-ink text-white">
      <div
        className="absolute inset-0"
        data-strk-bg-id="velmora-home-hero-bg-1f2d3a"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-velmora-fade" />

      <div className="relative mx-auto flex min-h-[100svh] max-w-7xl items-end px-5 pb-16 pt-32 md:px-8 md:pb-20 lg:px-10">
        <div className="max-w-2xl">
          <p className="mb-5 text-xs font-semibold uppercase tracking-luxe text-velmora-sand">
            Premium demi-fine jewelry
          </p>
          <h1 id="hero-title" className="max-w-xl text-5xl leading-none md:text-7xl">
            Crafted to be Treasured
          </h1>
          <p id="hero-subtitle" className="mt-6 max-w-lg text-base leading-7 text-white/85 md:text-lg">
            Quietly luminous earrings, necklaces, and huggies for self-purchase and meaningful gifting.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              className="inline-flex items-center justify-center gap-2 rounded-full bg-velmora-champagne px-6 py-4 text-xs font-semibold uppercase tracking-[0.22em] text-velmora-ink transition hover:bg-velmora-sand"
              to="/shop"
            >
              Shop the Collection
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-4 text-xs font-semibold uppercase tracking-[0.22em] text-white transition hover:bg-white/10"
              to="/shop"
            >
              Explore Bestsellers
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
