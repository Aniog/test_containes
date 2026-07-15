import { Link } from "react-router-dom"
import { useStrkImages } from "@/components/ui/StrkImage"

export default function HomeHero() {
  const ref = useStrkImages([])

  return (
    <section ref={ref} className="relative h-screen min-h-[640px] w-full overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-velmora-7f3a9c"
        data-strk-bg="[hero-subtitle] [hero-title] warm gold jewelry worn on model editorial closeup"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/50 via-ink/20 to-ink/60" />

      <div className="relative h-full max-w-content mx-auto px-6 md:px-10 flex flex-col justify-end pb-24 md:pb-32">
        <div className="max-w-2xl animate-fade-up">
          <p className="text-cream/80 text-xs uppercase tracking-widest3 mb-5">
            Demi-Fine Gold Jewelry
          </p>
          <h1
            id="hero-title"
            className="font-serif text-cream text-5xl md:text-7xl lg:text-8xl font-light leading-[1.05] tracking-tight"
          >
            Crafted to be
            <br />
            <span className="italic text-gold-soft">Treasured</span>
          </h1>
          <p
            id="hero-subtitle"
            className="mt-6 text-cream/85 text-base md:text-lg max-w-md leading-relaxed font-light"
          >
            Warm-lit, hand-finished gold pieces designed for everyday luxury —
            and the moments worth marking.
          </p>
          <Link
            to="/shop"
            className="inline-block mt-9 bg-gold text-cream text-xs uppercase tracking-widest2 px-10 py-4 rounded-full hover:bg-gold-deep transition-colors duration-300"
          >
            Shop the Collection
          </Link>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-cream/60">
        <span className="text-[10px] uppercase tracking-widest2">Scroll</span>
        <span className="w-px h-10 bg-cream/40 animate-pulse" />
      </div>
    </section>
  )
}
