import { Link } from "react-router-dom"
import { useStrkImages } from "@/hooks/useStrkImages"

export default function Hero() {
  const containerRef = useStrkImages([])

  return (
    <section ref={containerRef} className="relative h-[100svh] min-h-[600px] w-full overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-velmora-7f3a"
        data-strk-bg="[hero-subtitle] [hero-title] warm lit close up gold jewelry worn on model editorial"
        data-strk-bg-ratio="9x16"
        data-strk-bg-width="1600"
      />
      {/* Gradient overlay for legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink/50 via-ink/20 to-ink/60" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <p
          id="hero-eyebrow"
          className="mb-5 text-[11px] font-medium uppercase tracking-widest3 text-cream/80"
        >
          Demi-Fine Gold Jewelry
        </p>
        <h1
          id="hero-title"
          className="font-serif text-5xl font-light leading-[1.05] text-cream sm:text-6xl md:text-7xl lg:text-8xl"
        >
          Crafted to be
          <br />
          <span className="italic">Treasured</span>
        </h1>
        <p
          id="hero-subtitle"
          className="mt-6 max-w-md text-sm leading-relaxed text-cream/85 md:text-base"
        >
          18K gold plated earrings, necklaces, and huggies — designed in studio
          for the everyday and the unforgettable.
        </p>
        <Link
          to="/shop"
          className="mt-9 bg-gold px-10 py-4 text-[11px] font-medium uppercase tracking-widest2 text-cream transition-all duration-300 hover:bg-gold-deep hover:shadow-soft"
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-cream/40 p-1.5">
          <div className="h-2 w-1 animate-bounce rounded-full bg-cream/70" />
        </div>
      </div>
    </section>
  )
}
