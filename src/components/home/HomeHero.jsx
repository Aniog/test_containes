import { Link } from "react-router-dom"
import { useStrkImages } from "@/lib/useStrkImages"

const PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E"

export default function HomeHero() {
  const ref = useStrkImages([])

  return (
    <section ref={ref} className="relative h-screen min-h-[640px] w-full overflow-hidden">
      {/* Background image */}
      <div
        data-strk-bg-id="hero-bg-velmora-7f2a9c"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        className="absolute inset-0 bg-ink"
      />
      {/* Warm overlay for legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink/50 via-ink/20 to-ink/60" />

      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-5 md:px-8 flex flex-col justify-end pb-20 md:pb-28">
        <div className="max-w-2xl">
          <p
            id="hero-eyebrow"
            className="text-[11px] uppercase tracking-[0.3em] text-gold-soft mb-5"
          >
            Demi-Fine Gold Jewelry
          </p>
          <h1
            id="hero-title"
            className="font-serif text-cream text-5xl md:text-7xl leading-[1.05] font-light"
          >
            Crafted to be
            <br />
            <span className="italic">Treasured</span>
          </h1>
          <p
            id="hero-subtitle"
            className="mt-6 text-cream/85 text-base md:text-lg max-w-md leading-relaxed"
          >
            Hand-finished 18K gold plated pieces, designed in studio and made
            to be worn every day — and kept for a lifetime.
          </p>
          <div className="mt-9">
            <Link
              to="/shop"
              className="inline-flex items-center justify-center bg-gold text-cream px-10 py-4 text-xs uppercase tracking-[0.2em] font-medium hover:bg-gold-soft transition-all duration-300"
            >
              Shop the Collection
            </Link>
          </div>
        </div>
      </div>

      {/* Hidden text refs for image query (hero-title/subtitle already visible above) */}
      <span className="sr-only" aria-hidden>
        <img
          alt=""
          data-strk-img-id="hero-fallback-img"
          data-strk-img="[hero-subtitle] [hero-title]"
          data-strk-img-ratio="16x9"
          data-strk-img-width="1600"
          src={PLACEHOLDER}
        />
      </span>
    </section>
  )
}
