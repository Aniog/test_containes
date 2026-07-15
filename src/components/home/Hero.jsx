import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import StrkImage from "@/components/ui/StrkImage"

export default function Hero() {
  return (
    <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-night">
      {/* Background image */}
      <div className="absolute inset-0">
        <StrkImage
          id="hero-bg-7c9a2b"
          query="[hero-subtitle] [hero-title] warm-lit close-up of gold jewelry worn by a woman on neutral background"
          ratio="16x9"
          width={2000}
          eager
          alt="Model wearing Velmora demi-fine gold jewelry"
          fallback="bg-night"
        />
        {/* Subtle warm gradient overlay so the type reads on top of any image */}
        <div className="absolute inset-0 bg-gradient-to-b from-night/40 via-night/10 to-night/55" />
      </div>

      {/* Content */}
      <div className="container-content relative z-10 flex h-full flex-col justify-end pb-16 md:pb-24 lg:pb-32">
        <div className="max-w-2xl">
          <p
            id="hero-subtitle"
            className="text-[11px] font-medium uppercase tracking-[0.32em] text-gold"
          >
            Velmora Fine Jewelry · Est. 2024
          </p>
          <h1
            id="hero-title"
            className="display-xl mt-5 text-onNight text-balance"
            style={{ fontSize: "clamp(56px, 9vw, 132px)" }}
          >
            Crafted to be
            <br />
            <em className="font-light italic text-gold">treasured</em>.
          </h1>
          <p className="mt-7 max-w-md text-base font-light leading-relaxed text-onNight-soft md:text-lg">
            Demi-fine 18K gold plated jewelry, hand-finished in small batches.
            Designed to be worn every day — and gifted for the moments that matter.
          </p>
          <div id="hero-cta" className="mt-10 flex flex-wrap items-center gap-4">
            <Link to="/shop" className="btn-gold">
              Shop the Collection
              <ArrowRight className="h-4 w-4" strokeWidth={1.6} />
            </Link>
            <Link
              to="/shop?category=sets"
              className="text-[12px] font-semibold uppercase tracking-[0.22em] text-onNight/80 transition-colors duration-300 hover:text-gold"
            >
              Discover Gift Sets
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-6 right-6 z-10 hidden flex-col items-center gap-2 md:flex">
        <span className="text-[10px] font-medium uppercase tracking-[0.32em] text-onNight-soft">
          Scroll
        </span>
        <span className="block h-10 w-px bg-onNight/30" />
      </div>
    </section>
  )
}
