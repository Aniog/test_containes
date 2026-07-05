import { Link } from "react-router-dom"
import StrkBackground from "@/components/ui/StrkBackground"

export default function Hero() {
  return (
    <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
      <StrkBackground
        bgId="hero-bg-velmora-7f2a"
        query="[hero-subtitle] [hero-title]"
        ratio="16x9"
        width={1920}
        className="absolute inset-0"
      >
        {/* Warm overlay for legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/25 to-ink/55" />
      </StrkBackground>

      <div className="relative h-full max-w-7xl mx-auto px-6 md:px-10 flex flex-col justify-end pb-20 md:pb-28">
        <div className="max-w-2xl text-cream animate-fade-up">
          <p className="text-[11px] md:text-xs uppercase tracking-[0.3em] text-champagne mb-5">
            Demi-Fine Gold Jewelry
          </p>
          <h1
            id="hero-title"
            className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.02] font-light"
          >
            Crafted to be
            <br />
            <span className="italic text-champagne">Treasured</span>
          </h1>
          <p
            id="hero-subtitle"
            className="mt-6 text-base md:text-lg text-cream/85 max-w-md leading-relaxed"
          >
            Warm, wearable gold — designed in studio and made for every day.
            Quietly luxurious, endlessly giftable.
          </p>
          <div className="mt-9">
            <Link
              to="/shop"
              className="inline-block bg-gold text-cream px-9 py-4 text-[11px] uppercase tracking-[0.25em] font-medium hover:bg-gold-deep transition-colors"
            >
              Shop the Collection
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-cream/70 text-[10px] uppercase tracking-[0.3em] hidden md:block">
        Scroll
      </div>
    </section>
  )
}
