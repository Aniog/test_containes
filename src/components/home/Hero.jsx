import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative h-[100svh] min-h-[600px] w-full overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-7f3a2c"
        data-strk-bg="[hero-subtitle] [hero-title] gold jewelry model warm"
        data-strk-bg-ratio="9x16"
        data-strk-bg-width="1600"
      />
      {/* Warm overlay for legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-velmora-ink/40 via-velmora-ink/20 to-velmora-ink/60" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-5 text-center">
        <p className="mb-5 text-[11px] uppercase tracking-[0.35em] text-velmora-cream/80">
          Demi-Fine Gold Jewelry
        </p>
        <h1
          id="hero-title"
          className="max-w-4xl font-serif text-[2.75rem] leading-[1.05] text-velmora-cream sm:text-6xl md:text-7xl"
        >
          Crafted to be Treasured
        </h1>
        <p
          id="hero-subtitle"
          className="mt-6 max-w-xl text-sm leading-relaxed text-velmora-cream/85 md:text-base"
        >
          Warm, wearable gold — designed in studio and made for the everyday.
          Quiet luxury, accessible by design.
        </p>
        <Link
          to="/shop"
          className="mt-9 bg-velmora-gold px-10 py-4 text-[11px] uppercase tracking-[0.2em] text-white transition-colors duration-300 hover:bg-velmora-gold-deep"
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-velmora-cream/40 p-1.5">
          <span className="h-2 w-px animate-bounce bg-velmora-cream/70" />
        </div>
      </div>
    </section>
  )
}
