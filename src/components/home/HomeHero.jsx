import { Link } from 'react-router-dom'
import { useStrkImages } from '@/lib/useStrkImages'

export default function HomeHero() {
  const ref = useStrkImages([])

  return (
    <section ref={ref} className="relative h-[100svh] min-h-[600px] w-full overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-velmora-1a2b"
        data-strk-bg="[hero-subtitle] [hero-title] warm gold jewelry worn on model close up editorial"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      {/* Warm overlay for legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-espresso/50 via-espresso/20 to-espresso/60" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-5 text-center">
        <p className="fade-up mb-5 text-[11px] uppercase tracking-widest2 text-ivory/80">
          Demi-Fine Gold Jewelry
        </p>
        <h1
          id="hero-title"
          className="fade-up font-serif text-5xl leading-[1.05] text-ivory md:text-7xl lg:text-8xl"
          style={{ animationDelay: '0.1s' }}
        >
          Crafted to be
          <br />
          <span className="italic text-gold-light">Treasured</span>
        </h1>
        <p
          id="hero-subtitle"
          className="fade-up mt-6 max-w-md text-sm leading-relaxed text-ivory/85 md:text-base"
          style={{ animationDelay: '0.2s' }}
        >
          18K gold plated earrings, necklaces and huggies — designed for everyday
          radiance and the moments worth marking.
        </p>
        <div className="fade-up mt-9" style={{ animationDelay: '0.3s' }}>
          <Link
            to="/shop"
            className="inline-block bg-gold px-10 py-4 text-[11px] uppercase tracking-widest2 text-ivory transition-all duration-300 hover:bg-gold-deep"
          >
            Shop the Collection
          </Link>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-ivory/40 p-1.5">
          <div className="h-2 w-1 animate-bounce rounded-full bg-ivory/70" />
        </div>
      </div>
    </section>
  )
}
