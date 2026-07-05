import { Link } from "react-router-dom"
import { ChevronRight } from "lucide-react"
import { PLACEHOLDERS } from "@/data/products"

export default function Hero() {
  return (
    <section className="relative bg-ink text-cream overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={PLACEHOLDERS.heroModel}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover opacity-90"
        />
        {/* warm vignette gradient for legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-transparent to-ink/60" />
      </div>

      <div className="relative container-velmora min-h-[90vh] md:min-h-screen flex flex-col justify-end pb-16 md:pb-24 pt-32">
        <div className="max-w-2xl">
          <p className="eyebrow mb-5 md:mb-7 animate-fade-up">Demi-Fine · Hand-Finished</p>
          <h1 className="display-headline text-5xl md:text-7xl lg:text-[5.5rem] text-cream mb-6 md:mb-8 animate-fade-up [animation-delay:120ms]">
            Crafted to be
            <br />
            <span className="italic font-light text-gold">Treasured</span>
          </h1>
          <p className="text-base md:text-lg text-cream/85 max-w-md leading-relaxed font-light mb-9 md:mb-12 animate-fade-up [animation-delay:240ms]">
            Heirloom-quality 18K gold plated jewelry, made for everyday wear and the moments
            worth remembering.
          </p>
          <div className="flex flex-wrap items-center gap-4 animate-fade-up [animation-delay:360ms]">
            <Link to="/shop" className="btn-gold">
              Shop the Collection
              <ChevronRight className="h-4 w-4" strokeWidth={1.5} />
            </Link>
            <Link
              to="/about"
              className="text-[11px] font-sans uppercase tracking-[0.25em] text-cream/85 hover:text-gold transition-colors inline-flex items-center gap-2"
            >
              Our Story
            </Link>
          </div>
        </div>
      </div>

      {/* subtle scroll hint */}
      <div className="absolute bottom-6 right-6 md:right-10 hidden md:flex flex-col items-center gap-3 text-cream/60">
        <span className="text-[10px] uppercase tracking-[0.3em] rotate-90 origin-center translate-y-3">
          Scroll
        </span>
        <div className="w-px h-12 bg-cream/30" />
      </div>
    </section>
  )
}
