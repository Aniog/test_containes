import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative h-[100svh] min-h-[600px] w-full overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-ink"
        data-strk-bg-id="hero-bg-velmora-7f2a"
        data-strk-bg="[hero-subtitle] [hero-title] warm lit close up gold jewelry worn on model editorial"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      {/* Gradient overlay for legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/20 to-ink/60" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-5 text-center">
        <p className="fade-up text-[11px] uppercase tracking-widest2 text-cream/80">
          Velmora Fine Jewelry
        </p>
        <h1
          id="hero-title"
          className="fade-up mt-5 max-w-3xl font-serif text-5xl leading-[1.05] text-cream md:text-7xl"
          style={{ animationDelay: '0.1s' }}
        >
          Crafted to be Treasured
        </h1>
        <p
          id="hero-subtitle"
          className="fade-up mt-6 max-w-xl text-sm leading-relaxed text-cream/85 md:text-base"
          style={{ animationDelay: '0.2s' }}
        >
          Demi-fine gold jewelry, designed in studio and made for everyday luxury.
          Quiet pieces that earn a place in your daily ritual.
        </p>
        <Link
          to="/shop"
          className="fade-up mt-9 inline-flex items-center gap-2 bg-gold px-9 py-4 text-xs uppercase tracking-wide2 text-cream transition-all duration-300 hover:bg-gold-deep"
          style={{ animationDelay: '0.3s' }}
        >
          Shop the Collection <ArrowRight size={14} />
        </Link>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-cream/40 p-1.5">
          <div className="h-2 w-1 animate-bounce rounded-full bg-cream/70" />
        </div>
      </div>
    </section>
  )
}
