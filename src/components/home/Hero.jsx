import { Link } from 'react-router-dom'
import { useStrkImages, StrkBg } from '@/components/StrkImage'

export default function Hero() {
  const ref = useStrkImages([])

  return (
    <section ref={ref} className="relative h-[100svh] min-h-[600px] w-full overflow-hidden">
      {/* Background */}
      <StrkBg
        bgId="hero-bg-velmora-7f2a9c"
        query="[hero-subtitle] [hero-title]"
        ratio="9x16"
        width={1600}
        className="absolute inset-0"
      />
      {/* Warm overlay for legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-espresso/40 via-espresso/20 to-espresso/60" />

      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-5 md:px-8 flex flex-col justify-end pb-24 md:pb-28">
        <div className="max-w-2xl fade-up">
          <p className="text-[11px] uppercase tracking-widest2 text-ivory/80 mb-5">
            Demi-Fine Gold Jewelry
          </p>
          <h1
            id="hero-title"
            className="font-serif text-ivory text-5xl md:text-7xl lg:text-8xl leading-[1.02] tracking-tight"
          >
            Crafted to be
            <br />
            <span className="italic text-gold-soft">Treasured</span>
          </h1>
          <p
            id="hero-subtitle"
            className="mt-6 text-base md:text-lg text-ivory/85 max-w-md leading-relaxed"
          >
            Warm-lit, hand-finished gold jewelry made for everyday luxury —
            designed in studio, worn for a lifetime.
          </p>
          <div className="mt-9">
            <Link
              to="/shop"
              className="inline-block bg-gold text-ivory text-[11px] uppercase tracking-widest2 font-medium px-10 py-4 hover:bg-gold-soft transition-colors"
            >
              Shop the Collection
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2">
        <span className="text-[10px] uppercase tracking-widest2 text-ivory/60">Scroll</span>
        <span className="w-px h-8 bg-ivory/40" />
      </div>
    </section>
  )
}
