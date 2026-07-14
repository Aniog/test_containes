import { Link } from 'react-router-dom'
import { useStrkImages } from '@/lib/useStrkImages'

export default function Hero() {
  const ref = useStrkImages([])

  return (
    <section ref={ref} className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-ink">
      {/* Background image */}
      <div
        data-strk-bg-id="hero-bg-velmora-1a"
        data-strk-bg="[hero-subtitle] [hero-title] gold jewelry worn on model warm light"
        data-strk-bg-ratio="9x16"
        data-strk-bg-width="1600"
        className="absolute inset-0 bg-cover bg-center"
      />
      {/* Warm overlay for legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/20 to-ink/70" />

      <div className="relative h-full max-w-content mx-auto px-6 md:px-10 flex flex-col justify-end pb-20 md:pb-28">
        <div className="max-w-2xl fade-up">
          <p className="text-ivory/80 text-[11px] md:text-xs uppercase tracking-widest2 mb-5">
            Demi-Fine Gold Jewelry
          </p>
          <h1
            id="hero-title"
            className="font-serif text-ivory text-5xl md:text-7xl lg:text-8xl leading-[1.02] font-medium"
          >
            Crafted to be
            <br />
            <span className="italic text-champagne">Treasured</span>
          </h1>
          <p
            id="hero-subtitle"
            className="mt-6 text-ivory/85 text-base md:text-lg max-w-md leading-relaxed"
          >
            Warm, wearable gold — designed in studio and made for the everyday,
            the once-in-a-lifetime, and everything between.
          </p>
          <Link
            to="/shop"
            className="mt-9 inline-flex items-center justify-center px-9 py-4 text-xs font-medium uppercase tracking-widest2 bg-champagne text-ink hover:bg-gold transition-colors duration-300"
          >
            Shop the Collection
          </Link>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-ivory/60">
        <span className="text-[10px] uppercase tracking-widest2">Scroll</span>
        <span className="w-px h-10 bg-ivory/40 animate-pulse" />
      </div>
    </section>
  )
}
