import { Link } from "react-router-dom"
import { useStrkImages } from "@/hooks/useStrkImages"

export default function Hero() {
  const containerRef = useStrkImages([])

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-ink"
    >
      {/* Background image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-velmora-7f3a9c"
        data-strk-bg="[hero-subtitle] [hero-title] gold jewelry model warm light"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      {/* Dark gradient overlay for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-ink/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-ink/20" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pt-20 md:px-8">
        <div className="max-w-xl">
          <p className="animate-fade-up text-xs uppercase tracking-[0.3em] text-champagne">
            Demi-Fine Gold Jewelry
          </p>
          <h1
            id="hero-title"
            className="animate-fade-up mt-5 font-serif text-5xl leading-[1.05] text-cream md:text-7xl"
            style={{ animationDelay: "0.1s" }}
          >
            Crafted to be
            <br />
            Treasured
          </h1>
          <p
            id="hero-subtitle"
            className="animate-fade-up mt-6 max-w-md text-base leading-relaxed text-cream/80 md:text-lg"
            style={{ animationDelay: "0.2s" }}
          >
            Hand-finished 18K gold plated pieces designed for everyday
            elegance — quiet luxury, made to be worn and adored.
          </p>
          <div
            className="animate-fade-up mt-9"
            style={{ animationDelay: "0.3s" }}
          >
            <Link
              to="/shop"
              className="inline-block bg-champagne px-10 py-4 text-xs uppercase tracking-[0.2em] text-ink transition-colors duration-300 hover:bg-cream"
            >
              Shop the Collection
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex">
        <span className="text-[10px] uppercase tracking-[0.3em] text-cream/60">
          Scroll
        </span>
        <span className="h-10 w-px bg-cream/40" />
      </div>
    </section>
  )
}
