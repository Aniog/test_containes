import { Link } from 'react-router-dom'
import { useStrkImages } from '@/components/StrkImage'

export default function HomeHero() {
  const ref = useStrkImages([])

  return (
    <section ref={ref} className="relative h-[100svh] min-h-[600px] w-full overflow-hidden">
      {/* Background image (dark fallback so ivory text stays legible before load) */}
      <div
        data-strk-bg-id="hero-bg-velmora-7f2a9c"
        data-strk-bg="[hero-subtitle] [hero-title] gold jewelry worn on model warm editorial"
        data-strk-bg-ratio="9x16"
        data-strk-bg-width="1600"
        className="absolute inset-0 bg-ink"
      />
      {/* Warm overlay for legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/20 to-ink/55" />

      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-6 md:px-10 flex flex-col justify-end pb-20 md:pb-28">
        <div className="max-w-2xl animate-fade-up">
          <p className="text-[11px] uppercase tracking-[0.3em] text-champagne mb-5">
            Demi-Fine Gold Jewelry
          </p>
          <h1
            id="hero-title"
            className="font-serif text-ivory text-5xl md:text-7xl lg:text-8xl font-light leading-[1.05]"
          >
            Crafted to be
            <br />
            <span className="italic">Treasured</span>
          </h1>
          <p
            id="hero-subtitle"
            className="mt-6 text-ivory/85 text-base md:text-lg max-w-md leading-relaxed"
          >
            Hand-finished 18K gold-plated pieces designed for everyday luxury — quiet,
            warm, and made to last.
          </p>
          <div className="mt-9">
            <Link
              to="/shop"
              className="inline-block bg-gold text-ivory text-[11px] uppercase tracking-[0.25em] font-medium px-9 py-4 hover:bg-gold-deep transition-colors duration-300"
            >
              Shop the Collection
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-ivory/60">
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <span className="w-px h-10 bg-ivory/40 animate-pulse" />
      </div>
    </section>
  )
}
