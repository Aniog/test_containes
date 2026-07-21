import { Link } from 'react-router-dom'
import { useImageLoader } from '@/lib/useImageLoader'

export default function Hero() {
  const ref = useImageLoader([])

  return (
    <section ref={ref} className="relative h-screen min-h-[640px] w-full overflow-hidden bg-ink">
      {/* Background image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-velmora-9f2a"
        data-strk-bg="[hero-subtitle] [hero-headline] warm gold jewelry worn on model editorial close up"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      {/* Warm overlay for legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink/50 via-ink/20 to-ink/60" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <p
          id="hero-eyebrow"
          className="text-[11px] uppercase tracking-[0.3em] text-cream/80 mb-6 fade-up"
        >
          Demi-Fine Gold Jewelry
        </p>
        <h1
          id="hero-headline"
          className="font-serif text-cream text-5xl md:text-7xl lg:text-8xl leading-[1.05] max-w-4xl fade-up"
          style={{ animationDelay: '0.1s' }}
        >
          Crafted to be Treasured
        </h1>
        <p
          id="hero-subtitle"
          className="text-cream/85 text-base md:text-lg mt-6 max-w-xl leading-relaxed fade-up"
          style={{ animationDelay: '0.2s' }}
        >
          Hand-finished 18K gold plating, hypoallergenic by design. Pieces made for
          the everyday and the once-in-a-lifetime.
        </p>
        <div className="mt-10 fade-up" style={{ animationDelay: '0.3s' }}>
          <Link
            to="/shop"
            className="inline-block bg-cream text-ink text-[11px] uppercase tracking-[0.2em] px-10 py-4 hover:bg-gold hover:text-white transition-colors duration-300"
          >
            Shop the Collection
          </Link>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-px h-12 bg-cream/40" />
      </div>
    </section>
  )
}
