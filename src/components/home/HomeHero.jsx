import { Link } from "react-router-dom"

export default function HomeHero() {
  return (
    <section className="relative h-[100svh] min-h-[600px] w-full overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 h-full w-full"
        data-strk-bg-id="hero-bg-velmora-1a2b3c"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-espresso/50 via-espresso/20 to-espresso/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-5 text-center">
        <p className="fade-up font-sans text-[11px] uppercase tracking-[0.3em] text-ivory/80">
          Demi-Fine Gold Jewelry
        </p>
        <h1
          id="hero-title"
          className="fade-up mt-5 font-serif text-5xl font-light leading-[1.05] text-ivory sm:text-6xl md:text-7xl lg:text-8xl"
          style={{ animationDelay: "0.1s" }}
        >
          Crafted to be
          <br />
          <span className="italic">Treasured</span>
        </h1>
        <p
          id="hero-subtitle"
          className="fade-up mt-6 max-w-md font-sans text-sm leading-relaxed text-ivory/80 md:text-base"
          style={{ animationDelay: "0.2s" }}
        >
          Warm 18K gold plated pieces, designed in studio and made to be worn
          every single day.
        </p>
        <div className="fade-up mt-9" style={{ animationDelay: "0.3s" }}>
          <Link
            to="/shop"
            className="inline-flex items-center bg-gold px-10 py-4 font-sans text-[11px] uppercase tracking-[0.2em] text-ivory transition-colors duration-300 hover:bg-gold-dark"
          >
            Shop the Collection
          </Link>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-ivory/40 p-1.5">
          <div className="h-2 w-px animate-bounce bg-ivory/60" />
        </div>
      </div>
    </section>
  )
}
