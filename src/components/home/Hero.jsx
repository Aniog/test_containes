import { Link } from 'react-router-dom'
import { useStrkImages } from '@/lib/strk-image'

export default function Hero() {
  const ref = useStrkImages([])

  return (
    <section ref={ref} className="relative h-screen min-h-[640px] w-full overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-velmora-7f3a9c"
        data-strk-bg="[hero-subtitle] [hero-title] warm lit close up gold jewelry worn on model editorial"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      {/* Warm overlay for legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/20 to-ink/60" />

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-5">
        <p className="text-cream/80 text-xs md:text-sm uppercase tracking-[0.35em] mb-5 fade-up">
          Demi-Fine Gold Jewelry
        </p>
        <h1
          id="hero-title"
          className="font-serif text-cream text-5xl md:text-7xl lg:text-8xl font-light leading-[1.05] max-w-4xl fade-up"
          style={{ animationDelay: '0.1s' }}
        >
          Crafted to be Treasured
        </h1>
        <p
          id="hero-subtitle"
          className="text-cream/85 text-base md:text-lg mt-6 max-w-xl leading-relaxed fade-up"
          style={{ animationDelay: '0.2s' }}
        >
          Hand-finished 18K gold plated pieces, designed to be worn every day and
          kept for a lifetime.
        </p>
        <div className="mt-9 fade-up" style={{ animationDelay: '0.3s' }}>
          <Link
            to="/shop"
            className="inline-block bg-gold text-ink px-10 py-4 text-xs uppercase tracking-[0.25em] font-semibold hover:bg-gold-deep hover:text-cream transition-colors"
          >
            Shop the Collection
          </Link>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block">
        <div className="w-px h-12 bg-cream/40" />
      </div>
    </section>
  )
}
