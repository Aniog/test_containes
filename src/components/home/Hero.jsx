import { Link } from "react-router-dom"
import { useStrkImages, StrkBg } from "@/components/ui/StrkImage"

export default function Hero() {
  const ref = useStrkImages([])

  return (
    <section ref={ref} className="relative h-screen min-h-[600px] w-full overflow-hidden">
      <StrkBg
        bgId="hero-bg-velmora-01"
        query="[hero-subtitle] [hero-title]"
        ratio="16x9"
        width={1920}
        className="absolute inset-0 bg-ink"
      />
      {/* Warm overlay for legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink/50 via-ink/20 to-ink/60" />

      <div className="relative h-full max-w-7xl mx-auto px-6 md:px-8 flex flex-col justify-center">
        <div className="max-w-2xl fade-up">
          <p className="text-cream/80 text-xs uppercase tracking-[0.3em] mb-5">
            Demi-Fine Gold Jewelry
          </p>
          <h1
            id="hero-title"
            className="font-serif text-cream text-5xl md:text-7xl leading-[1.05] mb-6"
          >
            Crafted to be
            <br />
            <span className="italic text-gold-soft">Treasured</span>
          </h1>
          <p
            id="hero-subtitle"
            className="text-cream/85 text-base md:text-lg max-w-md leading-relaxed mb-9"
          >
            Hand-finished 18K gold plated pieces, designed in-house and made to
            be worn every day — and kept for a lifetime.
          </p>
          <Link
            to="/shop"
            className="inline-block bg-gold text-cream text-xs uppercase tracking-[0.2em] px-10 py-4 hover:bg-gold-soft transition-colors"
          >
            Shop the Collection
          </Link>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-cream/60 text-[10px] uppercase tracking-[0.3em] hidden md:block">
        Scroll
      </div>
    </section>
  )
}
