import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0" data-strk-bg-id="velmora-hero-bg" data-strk-bg="[hero-subtitle] [hero-title]" data-strk-bg-ratio="16x9" data-strk-bg-width="1800" />
      <div className="absolute inset-0 bg-hero-overlay" />
      <div className="section-shell relative flex min-h-screen items-end py-28 sm:items-center sm:py-32">
        <div className="max-w-2xl space-y-7 pb-10 sm:pb-0">
          <p className="eyebrow">Velmora Fine Jewelry</p>
          <div className="space-y-5">
            <h1 id="hero-title" className="luxe-heading max-w-xl text-6xl leading-[0.9] text-stone-50 sm:text-7xl lg:text-8xl">
              Crafted to be Treasured
            </h1>
            <p id="hero-subtitle" className="max-w-xl text-base leading-8 text-stone-200 sm:text-lg">
              Quietly luminous demi-fine jewelry designed for gifting, collecting, and everyday elegance.
            </p>
          </div>
          <Link to="/shop" className="inline-flex items-center gap-3 rounded-full bg-amber-200 px-7 py-4 text-sm font-semibold uppercase tracking-[0.22em] text-stone-950 shadow-xl shadow-amber-200/20 transition hover:bg-amber-100">
            Shop the Collection
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
