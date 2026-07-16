import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function HomeHero() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="absolute inset-0"
        data-strk-bg-id="velmora-hero-bg-a1"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1800"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-truffle/90 via-truffle/55 to-truffle/15" />
      <div className="section-shell relative flex min-h-screen items-end py-24 sm:items-center sm:py-32">
        <div className="max-w-2xl space-y-8 text-[rgba(247,241,232,0.98)] drop-shadow-[0_6px_24px_rgba(36,25,21,0.22)]">
          <span className="eyebrow text-[rgba(216,198,174,0.98)]">Demi-fine jewelry for every day</span>
          <div className="space-y-5">
            <h1 id="hero-title" className="font-serif text-6xl leading-none text-[rgba(247,241,232,0.98)] sm:text-7xl lg:text-8xl">
              Crafted to be Treasured
            </h1>
            <p id="hero-subtitle" className="max-w-xl text-base leading-8 text-[rgba(247,241,232,0.86)] sm:text-lg">
              Quietly luminous gold jewelry designed for gifting, self-purchase, and the moments that stay with you.
            </p>
          </div>
          <Link
            to="/shop"
            className="inline-flex items-center gap-3 rounded-full bg-gold px-7 py-4 text-sm font-medium uppercase tracking-[0.18em] text-pearl transition duration-300 hover:bg-champagne hover:text-truffle"
          >
            Shop the Collection
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
