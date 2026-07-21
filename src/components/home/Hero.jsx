import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative flex min-h-[92vh] items-end overflow-hidden md:min-h-screen md:items-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        data-strk-bg-id="hero-bg-velmora-01"
        data-strk-bg="[hero-subtitle] [hero-title] warm-lit close-up of gold jewelry on a model elegant editorial"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-velmora-bg via-velmora-bg/45 to-velmora-bg/20" />
      <div className="absolute inset-0 bg-gradient-to-r from-velmora-bg/70 via-transparent to-transparent" />

      <div className="velmora-container relative z-10 pb-20 pt-40 md:pb-0">
        <div className="max-w-2xl animate-fade-up">
          <p className="eyebrow">Demi-Fine · 18K Gold Plated</p>
          <h1
            id="hero-title"
            className="mt-5 font-display text-5xl font-medium leading-[1.05] text-velmora-ink md:text-7xl"
          >
            Crafted to be{' '}
            <em className="gold-gradient-text not-italic md:italic">Treasured</em>
          </h1>
          <p
            id="hero-subtitle"
            className="mt-6 max-w-md text-base leading-relaxed text-velmora-ink/80 md:text-lg"
          >
            Quietly luxurious earrings, necklaces and huggies — warm gold,
            honest materials, and prices that invite everyday wear.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link to="/shop" className="btn-gold">
              Shop the Collection
              <ArrowRight className="h-4 w-4" strokeWidth={2} />
            </Link>
            <Link to="/about" className="btn-outline">
              Our Story
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 right-8 z-10 hidden items-center gap-3 md:flex">
        <span className="h-px w-16 bg-velmora-gold/50" />
        <span className="text-[10px] uppercase tracking-[0.3em] text-velmora-ink/60">
          Est. 2019 — Atelier Velmora
        </span>
      </div>
    </section>
  )
}
