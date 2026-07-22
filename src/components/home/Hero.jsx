import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { makeStrkImageLoaderRef } from "@/components/ui/StrkImage"

const HERO_IMG_ID = "hero-main"

export default function Hero() {
  return (
    <section
      ref={makeStrkImageLoaderRef()}
      className="relative min-h-[100svh] w-full overflow-hidden bg-espresso-800"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          data-strk-img-id={HERO_IMG_ID}
          data-strk-img="[hero-subhead] [hero-headline]"
          data-strk-img-ratio="3x4"
          data-strk-img-width="1600"
          alt="Model wearing gold jewelry editorial"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 overlay-top" />
        <div className="absolute inset-0 bg-espresso-800/15" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-editorial flex-col justify-end px-5 md:px-10 pb-16 md:pb-24">
        <div className="max-w-2xl">
          <p className="eyebrow text-gold-300">Velmora — Fine Jewelry, Spring Collection</p>
          <h1
            id="hero-headline"
            className="mt-5 font-serif text-cream-50 text-[44px] leading-[1.05] sm:text-6xl md:text-7xl lg:text-[88px] text-balance"
          >
            Crafted to be<br />
            <span className="italic font-light">Treasured</span>.
          </h1>
          <p
            id="hero-subhead"
            className="mt-6 max-w-md text-cream-100/80 text-base md:text-lg leading-relaxed text-pretty"
          >
            Demi-fine 18K gold plated jewelry, made in small batches for the moments
            — and the women — that last.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link to="/shop" className="btn-outline-light">
              Shop the Collection
              <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.6} />
            </Link>
            <Link
              to="/about"
              className="text-[11px] uppercase tracking-widest3 text-cream-100/80 hover:text-gold-300 transition-colors"
            >
              Our Story →
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 md:bottom-8 hidden md:flex flex-col items-center gap-2 text-cream-100/60">
        <span className="text-[10px] uppercase tracking-widest3">Scroll</span>
        <span className="block h-10 w-px bg-cream-100/30" />
      </div>
    </section>
  )
}
