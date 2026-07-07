import React from "react"
import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import JewelryArt from "@/components/ui/JewelryArt"

const Hero = () => {
  return (
    <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-ink text-ivory">
      {/* Background art */}
      <div className="absolute inset-0">
        <JewelryArt
          art="heroModel"
          palette="model"
          ratio="16/9"
          className="h-full w-full"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/55 via-ink/15 to-ink/55" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-transparent to-ink/70" />
      </div>

      {/* Content */}
      <div className="relative h-full container-wrap flex flex-col justify-end pb-16 sm:pb-20 lg:pb-28">
        <div className="max-w-3xl animate-fadeUp">
          <span className="eyebrow text-ivory/70">Velmora — Fine Jewelry</span>
          <h1 className="mt-4 font-serif text-[40px] leading-[1.05] sm:text-6xl lg:text-7xl xl:text-[88px] tracking-tight text-ivory">
            Crafted to be <em className="not-italic text-gold-light">Treasured</em>
          </h1>
          <p className="mt-5 max-w-xl text-[15px] sm:text-base text-ivory/80 font-sans leading-relaxed">
            Demi-fine gold jewelry, hand-finished in small batches. Designed to be worn
            every day, gifted with intention, kept for years.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link to="/shop" className="btn-accent group">
              Shop the Collection
              <ArrowRight
                size={14}
                strokeWidth={1.5}
                className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
            <Link
              to="/shop?cat=sets"
              className="font-sans uppercase tracking-[0.18em] text-[12px] text-ivory/90 underline-grow"
            >
              Discover gifts
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom-right scroll indicator */}
      <div className="absolute bottom-6 right-6 lg:right-12 hidden sm:flex items-center gap-3 text-ivory/60">
        <span className="eyebrow text-ivory/60">Scroll</span>
        <span className="block h-px w-12 bg-ivory/40" />
      </div>
    </section>
  )
}

export default Hero
