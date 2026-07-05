import { Link } from "react-router-dom"
import { StrkBackground } from "@/components/ui/StrkImage"
import { useStrkImages } from "@/hooks/useStrkImages"

export default function HomeHero() {
  const ref = useStrkImages([])

  return (
    <section ref={ref} className="relative h-[100svh] min-h-[600px] w-full overflow-hidden">
      <StrkBackground
        bgId="hero-bg-velmora-1a2b"
        query="[hero-subtitle] [hero-title]"
        ratio="16x9"
        width={1920}
        className="absolute inset-0"
      />
      {/* Warm overlay for legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/25 to-ink/55" />

      <div className="relative h-full mx-auto max-w-content px-5 md:px-8 flex flex-col justify-end pb-20 md:pb-28">
        <div className="max-w-2xl text-cream">
          <p className="text-[11px] md:text-xs uppercase tracking-widest2 text-champagne mb-5">
            Demi-Fine Gold Jewelry
          </p>
          <h1
            id="hero-title"
            className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.02] font-medium"
          >
            Crafted to be
            <br />
            <span className="italic text-champagne">Treasured</span>
          </h1>
          <p
            id="hero-subtitle"
            className="mt-6 text-base md:text-lg text-cream/85 max-w-md leading-relaxed"
          >
            Warm, wearable gold — designed in studio and made for the everyday.
            Quietly luxurious, endlessly giftable.
          </p>
          <div className="mt-9">
            <Link
              to="/shop"
              className="inline-flex items-center justify-center bg-gold text-cream uppercase tracking-widest2 text-[11px] md:text-xs px-8 py-4 hover:bg-gold-deep transition-colors"
            >
              Shop the Collection
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-cream/60 text-[10px] uppercase tracking-widest2 hidden md:block">
        Scroll
      </div>
    </section>
  )
}
