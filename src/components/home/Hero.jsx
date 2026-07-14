import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { StockBackground } from "@/components/ui/StockImage"

export function Hero() {
  return (
    <section
      id="home-hero"
      className="relative flex h-[88vh] min-h-[640px] w-full items-end overflow-hidden bg-ink-600 text-ivory-50 md:h-[92vh]"
    >
      {/* Background image — warm gold jewelry editorial */}
      <StockBackground
        bgId="home-hero-bg"
        query="home-hero-headline home-hero-subhead"
        ratio="3x2"
        width="1800"
        className="opacity-90"
      />

      {/* Warm gradient overlay for legibility */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-ink-700/55 via-ink-600/30 to-ink-700/80"
      />

      <div className="container-x relative z-10 pb-20 md:pb-28 lg:pb-32">
        <div className="max-w-3xl">
          <p className="eyebrow text-gold-300">New · The Heirloom Collection</p>
          <h1
            id="home-hero-headline"
            className="mt-5 font-serif text-[44px] font-light leading-[1.05] tracking-[-0.01em] text-ivory-50 sm:text-6xl md:text-7xl lg:text-[88px]"
          >
            Crafted to be
            <br className="hidden sm:block" />{" "}
            <em className="font-medium not-italic text-gold-200">Treasured</em>
          </h1>
          <p
            id="home-hero-subhead"
            className="mt-6 max-w-xl font-sans text-[15px] leading-relaxed text-ivory-50/80 md:text-[17px]"
          >
            Demi-fine gold jewelry, hand-finished and made to live in.
            From a quiet morning to a candlelit evening — pieces that go with you,
            and last.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link to="/shop" className="btn-gold">
              Shop the Collection
              <ArrowRight size={14} strokeWidth={1.5} />
            </Link>
            <Link
              to="/shop?category=sets"
              className="btn-outline-light sm:bg-transparent"
            >
              Discover the Sets
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-ivory-50/60 md:flex">
        <span className="text-[10px] font-semibold uppercase tracking-wider3">Scroll</span>
        <span className="h-10 w-px bg-ivory-50/40" />
      </div>
    </section>
  )
}
