import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full h-[100svh] min-h-[640px] max-h-[920px] overflow-hidden bg-espresso"
    >
      {/* Background image */}
      <div
        data-strk-bg-id="hero-bg-main"
        data-strk-bg="[hero-headline] [hero-subheadline] [home-hero-eyebrow]"
        data-strk-bg-ratio="3x4"
        data-strk-bg-width="1600"
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(31,24,20,0.20) 0%, rgba(31,24,20,0.30) 50%, rgba(31,24,20,0.70) 100%)",
        }}
      >
        <img
          alt=""
          aria-hidden="true"
          data-strk-img-id="hero-img"
          data-strk-img="[hero-headline] [hero-subheadline] [home-hero-eyebrow] editorial gold jewelry on woman closeup warm light"
          data-strk-img-ratio="3x4"
          data-strk-img-width="1800"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative h-full max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 flex flex-col justify-end pb-20 md:pb-28">
        <div className="max-w-2xl">
          <p
            id="home-hero-eyebrow"
            className="eyebrow eyebrow-light reveal reveal-1"
          >
            Demi-fine · 18K Gold Plated
          </p>
          <h1
            id="hero-headline"
            className="font-serif text-cream mt-5 text-[44px] sm:text-6xl md:text-7xl lg:text-[88px] leading-[1.02] font-light tracking-tight reveal reveal-2"
          >
            Crafted to be{' '}
            <em className="font-serif italic text-gold-light font-light">
              treasured
            </em>
            .
          </h1>
          <p
            id="hero-subheadline"
            className="mt-7 text-cream/80 text-base md:text-lg max-w-lg font-light leading-relaxed reveal reveal-3"
          >
            Demi-fine 18K gold-plated jewelry, designed in small batches and
            finished by hand. The pieces you'll reach for — every day, and on
            the days that matter.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4 reveal reveal-4">
            <Link to="/shop" className="btn-gold">
              Shop the Collection
              <ArrowRight size={14} strokeWidth={1.5} />
            </Link>
            <Link
              to="/about"
              className="text-[11px] tracking-widest2 uppercase font-medium text-cream/90 hover:text-gold-light transition-colors border-b border-cream/40 hover:border-gold-light pb-1"
            >
              Our Story
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 right-6 md:bottom-10 md:right-16 hidden sm:flex flex-col items-center gap-3 text-cream/60">
        <span className="text-[9px] tracking-widest3 uppercase">Scroll</span>
        <span className="block w-px h-12 bg-cream/30 relative overflow-hidden">
          <span className="absolute top-0 left-0 w-full h-1/2 bg-gold-light animate-pulse" />
        </span>
      </div>
    </section>
  )
}
