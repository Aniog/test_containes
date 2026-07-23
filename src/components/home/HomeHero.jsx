import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const HomeHero = () => {
  return (
    <section className="relative min-h-[88vh] overflow-hidden bg-obsidian text-pearl">
      <div
        className="absolute inset-0"
        data-strk-bg-id="velmora-hero-bg-a17v44"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-obsidian via-obsidian/70 to-obsidian/15" />
      <div className="relative mx-auto flex min-h-[88vh] max-w-7xl items-end px-6 pb-16 pt-28 md:px-8 md:pb-24">
        <div className="max-w-2xl">
          <p className="mb-6 text-xs uppercase tracking-brand text-sand">
            Premium demi-fine jewelry
          </p>
          <h1
            id="hero-title"
            className="max-w-xl font-display text-6xl leading-[0.92] text-pearl md:text-8xl"
          >
            Crafted to be Treasured
          </h1>
          <p
            id="hero-subtitle"
            className="mt-6 max-w-lg text-sm leading-7 text-sand md:text-lg"
          >
            Warm gold earrings, necklaces, and huggies designed to feel quietly luxurious every day.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              to="/shop"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-champagne px-7 py-4 text-xs font-semibold uppercase tracking-[0.22em] text-obsidian transition duration-300 hover:bg-pearl"
            >
              Shop the Collection
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/#story"
              className="inline-flex items-center justify-center rounded-full border border-pearl/30 px-7 py-4 text-xs font-semibold uppercase tracking-[0.22em] text-pearl transition duration-300 hover:border-champagne hover:text-champagne"
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
