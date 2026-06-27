import { Link } from "react-router-dom"

export default function Hero() {
  return (
    <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
      {/* Background image */}
      <div
        data-strk-bg-id="hero-bg-velmora-7f3a"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="9x16"
        data-strk-bg-width="1600"
        className="absolute inset-0 h-full w-full bg-ink"
      />
      {/* Warm overlay for text contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/20 to-ink/70" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-end px-5 pb-20 text-center sm:px-8 sm:pb-28">
        <p className="mb-5 text-[11px] uppercase tracking-[0.35em] text-champagne animate-fade-up">
          Demi-Fine Gold Jewelry
        </p>
        <h1
          id="hero-title"
          className="font-serif text-5xl font-light leading-[1.05] text-ivory sm:text-7xl lg:text-8xl animate-fade-up"
          style={{ animationDelay: "120ms" }}
        >
          Crafted to be
          <br />
          <span className="italic">Treasured</span>
        </h1>
        <p
          id="hero-subtitle"
          className="mt-6 max-w-md text-sm leading-relaxed text-ivory/80 sm:text-base animate-fade-up"
          style={{ animationDelay: "240ms" }}
        >
          18K gold plated pieces designed for the everyday — warm, weightless, and
          made to be worn from morning to night.
        </p>
        <Link
          to="/shop"
          className="mt-9 bg-gold px-10 py-4 text-[11px] uppercase tracking-[0.22em] text-ink transition-all duration-300 hover:bg-gold-deep hover:text-ivory animate-fade-up"
          style={{ animationDelay: "360ms" }}
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-ivory/60 sm:flex">
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <span className="h-10 w-px bg-ivory/40" />
      </div>
    </section>
  )
}
