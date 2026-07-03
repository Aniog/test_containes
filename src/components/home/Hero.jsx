import { Link } from "react-router-dom"
import { useStrkImages } from "@/hooks/useStrkImages"

export default function Hero() {
  const ref = useStrkImages([])

  return (
    <section ref={ref} className="relative h-[100svh] min-h-[600px] w-full overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-ink"
        data-strk-bg-id="hero-bg-velmora-9a3f"
        data-strk-bg="[hero-subtitle] [hero-title] gold jewelry worn on model warm editorial"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      {/* Warm overlay for legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/20 to-ink/60" />

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-5">
        <p className="text-[11px] uppercase tracking-[0.4em] text-cream/80 mb-6 fade-up">
          Demi-Fine Gold Jewelry
        </p>
        <h1
          id="hero-title"
          className="font-serif text-cream text-5xl md:text-7xl lg:text-8xl leading-[1.05] max-w-4xl fade-up"
          style={{ animationDelay: "0.1s" }}
        >
          Crafted to be
          <br />
          <em className="italic text-cream">Treasured</em>
        </h1>
        <p
          id="hero-subtitle"
          className="mt-7 text-cream/80 text-base md:text-lg max-w-md leading-relaxed fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          18K gold plated earrings, necklaces and huggies — designed for the
          everyday and the unforgettable.
        </p>
        <div className="mt-9 fade-up" style={{ animationDelay: "0.3s" }}>
          <Link
            to="/shop"
            className="inline-block bg-cream text-ink px-10 py-4 text-[11px] uppercase tracking-[0.3em] hover:bg-gold hover:text-cream transition-colors duration-300"
          >
            Shop the Collection
          </Link>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block">
        <div className="w-px h-12 bg-cream/40" />
      </div>
    </section>
  )
}
