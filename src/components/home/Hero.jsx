import { Link } from "react-router-dom"
import { useStrkImages } from "@/lib/useStrkImages"

export default function Hero() {
  const ref = useStrkImages([])

  return (
    <section ref={ref} className="relative h-[100svh] min-h-[600px] w-full overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-7f3a2c"
        data-strk-bg="[hero-subtitle] [hero-title] warm lit close up gold jewelry worn on model editorial"
        data-strk-bg-ratio="9x16"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/20 to-ink/60" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-5 text-center">
        <p className="reveal text-[11px] uppercase tracking-widest2 text-cream/80">
          Demi-Fine Gold Jewelry
        </p>
        <h1
          id="hero-title"
          className="reveal mt-5 font-serif text-5xl leading-[1.05] text-white sm:text-6xl md:text-7xl lg:text-8xl"
          style={{ animationDelay: "0.1s" }}
        >
          Crafted to be
          <br />
          <span className="italic">Treasured</span>
        </h1>
        <p
          id="hero-subtitle"
          className="reveal mt-6 max-w-md text-sm leading-relaxed text-cream/85 md:text-base"
          style={{ animationDelay: "0.2s" }}
        >
          Warm-lit, hand-finished gold pieces designed for everyday luxury —
          and the moments worth keeping.
        </p>
        <Link
          to="/shop"
          className="reveal mt-9 bg-gold px-10 py-4 text-[11px] uppercase tracking-widest2 text-white transition-colors duration-300 hover:bg-gold-deep"
          style={{ animationDelay: "0.3s" }}
        >
          Shop the Collection
        </Link>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-cream/50 p-1">
          <div className="h-2 w-1 animate-bounce rounded-full bg-cream/70" />
        </div>
      </div>
    </section>
  )
}
