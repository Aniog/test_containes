import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative w-full h-[100svh] min-h-[640px] overflow-hidden bg-ink">
      {/* Background image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-9f2a3c"
        data-strk-bg="[hero-eyebrow] [hero-subhead] [hero-headline] gold jewelry editorial close up model warm light"
        data-strk-bg-ratio="3x4"
        data-strk-bg-width="1600"
        aria-hidden="true"
      />
      {/* Gradient overlay for legibility */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(27,23,20,0.25) 0%, rgba(27,23,20,0.10) 35%, rgba(27,23,20,0.55) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 h-full max-w-8xl mx-auto px-5 md:px-8 lg:px-12 flex flex-col justify-end pb-16 md:pb-24">
        <div className="max-w-2xl text-cream">
          <p id="hero-eyebrow" className="eyebrow text-gold-soft">
            Velmora · Demi-Fine Collection
          </p>
          <h1
            id="hero-headline"
            className="mt-5 font-serif font-medium text-cream leading-[0.95] text-[clamp(3rem,8vw,6rem)]"
          >
            Crafted to be
            <br />
            <span className="italic font-normal text-gold-soft">treasured</span>
          </h1>
          <p
            id="hero-subhead"
            className="mt-6 text-cream/85 text-base md:text-lg max-w-md leading-relaxed"
          >
            Demi-fine 18K gold-plated jewelry, hand-finished for everyday wear — from the women you are to the woman you're becoming.
          </p>
          <div className="mt-9 flex items-center gap-4">
            <Link to="/shop" className="btn btn-accent group">
              Shop the Collection
              <ArrowRight size={14} strokeWidth={1.5} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              to="/shop?cat=earrings"
              className="hidden sm:inline-flex btn btn-outline-light"
            >
              Earrings
            </Link>
          </div>
        </div>
      </div>

      {/* Subtle scroll cue */}
      <div className="hidden md:flex absolute right-8 bottom-10 z-10 flex-col items-center gap-3 text-cream/70">
        <span className="eyebrow-sm">Scroll</span>
        <span className="w-px h-12 bg-cream/40" />
      </div>
    </section>
  )
}
