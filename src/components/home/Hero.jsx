import { Link } from 'react-router-dom'
import { useStrkImages } from '@/hooks/useStrkImages'

export default function Hero() {
  const ref = useStrkImages([])

  return (
    <section ref={ref} className="relative h-[100svh] min-h-[600px] w-full overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-7f3a2c"
        data-strk-bg="[hero-subtitle] [hero-title] warm lit gold jewelry worn on model editorial"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/20 to-ink/60" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <p className="mb-5 text-[11px] uppercase tracking-widest3 text-cream-soft/80 animate-fade-in">
          Demi-Fine Gold Jewelry
        </p>
        <h1
          id="hero-title"
          className="max-w-4xl font-serif text-5xl font-light leading-[1.05] text-cream-soft sm:text-6xl md:text-7xl lg:text-8xl animate-fade-up"
        >
          Crafted to be
          <br />
          <span className="italic">Treasured</span>
        </h1>
        <p
          id="hero-subtitle"
          className="mt-6 max-w-md text-sm leading-relaxed text-cream-soft/85 md:text-base animate-fade-up"
          style={{ animationDelay: '0.15s' }}
        >
          Warm-lit, hand-finished gold pieces designed for everyday wear and the moments worth marking.
        </p>
        <Link
          to="/shop"
          className="mt-9 bg-gold px-10 py-4 text-[11px] uppercase tracking-widest2 text-cream-soft transition-colors duration-300 hover:bg-gold-deep animate-fade-up"
          style={{ animationDelay: '0.3s' }}
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-cream-soft/40 p-1.5">
          <div className="h-2 w-px animate-bounce bg-cream-soft/60" />
        </div>
      </div>
    </section>
  )
}
