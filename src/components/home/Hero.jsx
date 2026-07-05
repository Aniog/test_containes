import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { useStrkImages } from "@/hooks/useStrkImages"

export default function Hero() {
  const containerRef = useStrkImages([])

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-espresso-950"
    >
      {/* Background image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-velmora-7f2a9c"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      {/* Warm overlay for legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-espresso-950/50 via-espresso-950/30 to-espresso-950/70" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-3xl px-5 text-center text-cream">
        <p className="font-sans text-[11px] uppercase tracking-ultra text-gold-300 opacity-0 animate-fade-in">
          Velmora Fine Jewelry
        </p>
        <h1
          id="hero-title"
          className="mt-5 font-serif text-5xl leading-[1.05] opacity-0 animate-fade-up md:text-7xl lg:text-8xl"
        >
          Crafted to be
          <br />
          <span className="italic text-gold-200">Treasured</span>
        </h1>
        <p
          id="hero-subtitle"
          className="mx-auto mt-6 max-w-md font-sans text-sm leading-relaxed text-cream/80 opacity-0 animate-fade-up md:text-base"
          style={{ animationDelay: "0.15s" }}
        >
          Demi-fine gold jewelry, designed in studio and made for everyday
          luxury. Quietly radiant pieces for gifting and for keeping.
        </p>
        <div
          className="mt-9 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.3s" }}
        >
          <Link
            to="/shop"
            className="group inline-flex items-center gap-3 bg-cream px-9 py-4 font-sans text-xs uppercase tracking-widest text-espresso-950 transition-colors hover:bg-gold-300"
          >
            Shop the Collection
            <ArrowRight
              size={15}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-cream/40 p-1.5">
          <span className="h-2 w-1 animate-bounce rounded-full bg-cream/70" />
        </div>
      </div>
    </section>
  )
}
