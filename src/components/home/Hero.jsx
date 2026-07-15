import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { HERO } from "@/data/products"
import { getImageUrl } from "@/lib/images"

export default function Hero() {
  const heroBgUrl = getImageUrl(HERO.imgId)

  return (
    <section
      className="relative w-full h-[100svh] min-h-[640px] overflow-hidden bg-espresso text-cream"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={
          heroBgUrl
            ? { backgroundImage: `url("${heroBgUrl}")` }
            : undefined
        }
      />

      {/* Warm vignette / gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(26,18,8,0.55) 0%, rgba(26,18,8,0.25) 35%, rgba(26,18,8,0.7) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 h-full container-editorial flex flex-col justify-end pb-20 sm:pb-28 lg:pb-32">
        <div className="max-w-2xl animate-fade-up">
          <p className="eyebrow text-gold-200" id="hero-eyebrow">
            {HERO.eyebrow}
          </p>
          <h1
            id={HERO.titleId}
            className="display-serif mt-5 sm:mt-6 text-[44px] sm:text-[64px] lg:text-[88px] text-cream"
          >
            {HERO.title}
          </h1>
          <p
            id="hero-subtitle"
            className="mt-6 sm:mt-7 text-[15px] sm:text-[17px] leading-relaxed text-cream/85 max-w-lg font-light"
          >
            {HERO.subtitle}
          </p>
          <div className="mt-9 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Link to={HERO.ctaTo} className="btn-primary">
              {HERO.ctaLabel}
              <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
            </Link>
            <Link
              to="/collections"
              className="btn px-7 sm:px-9 py-4 sm:py-[18px] border border-cream/40 text-cream hover:bg-cream/10 transition-all duration-300"
            >
              Explore Collections
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-10 text-cream/60 flex flex-col items-center gap-2 animate-fade-in" style={{ animationDelay: "900ms" }}>
        <span className="text-[10px] uppercase tracking-wider-3">Scroll</span>
        <span className="block w-px h-8 bg-cream/40" />
      </div>
    </section>
  )
}
