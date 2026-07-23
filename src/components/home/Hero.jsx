import { Link } from 'react-router-dom'
import { resolveStrkImageUrl } from '@/lib/strk-image'

export default function Hero() {
  return (
    <section className="relative h-[100svh] min-h-[600px] w-full overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${resolveStrkImageUrl('hero-bg-velmora-1a2b')})` }}
      />
      {/* Warm overlay for legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/20 to-ink/60" />

      <div className="relative h-full max-w-7xl mx-auto px-5 md:px-8 flex flex-col justify-end pb-24 md:pb-28">
        <div className="max-w-2xl text-cream animate-fade-up">
          <p className="text-[11px] uppercase tracking-[0.3em] text-champagne mb-5">
            Demi-Fine Gold Jewelry
          </p>
          <h1
            id="hero-title"
            className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.05] font-medium"
          >
            Crafted to be
            <br />
            Treasured
          </h1>
          <p
            id="hero-subtitle"
            className="mt-6 text-base md:text-lg text-cream/85 max-w-md leading-relaxed"
          >
            Hand-finished 18K gold plated pieces, designed in studio and made to be
            worn every day — for yourself, or someone loved.
          </p>
          <Link
            to="/shop"
            className="inline-block mt-9 bg-gold text-cream text-[11px] uppercase tracking-[0.25em] px-10 py-4 hover:bg-gold-deep transition-colors"
          >
            Shop the Collection
          </Link>
        </div>
      </div>
    </section>
  )
}
