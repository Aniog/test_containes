import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { useEffect, useRef } from "react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"

export default function Hero() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section
      ref={containerRef}
      className="relative w-full h-[100svh] min-h-[640px] bg-ink text-cream overflow-hidden"
    >
      {/* Background image */}
      <div
        data-strk-bg-id="hero-bg-3a1c08"
        data-strk-bg="[homepage-hero-subtitle] [homepage-hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1800"
        className="absolute inset-0"
        aria-hidden="true"
      />

      {/* Warm gradient overlay for legibility */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(22,19,17,0.55) 0%, rgba(22,19,17,0.25) 35%, rgba(22,19,17,0.65) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Top thin label */}
      <div className="absolute top-20 inset-x-0 flex justify-center pointer-events-none">
        <p className="label-2 text-cream/80">Demi-Fine · 18K Gold Plated · 2026</p>
      </div>

      {/* Centered copy */}
      <div className="relative h-full container-x flex flex-col items-center justify-center text-center pb-24">
        <p className="label-2 text-cream/80 mb-6">New Collection — Solstice</p>
        <h1
          id="homepage-hero-title"
          className="font-serif text-cream font-light leading-[1.02] text-balance text-[3.25rem] sm:text-6xl md:text-7xl lg:text-[6.5rem] max-w-4xl"
        >
          Crafted to be Treasured
        </h1>
        <p
          id="homepage-hero-subtitle"
          className="mt-7 max-w-md text-cream/80 text-sm md:text-base leading-relaxed"
        >
          Demi-fine jewelry in 18K gold, made for the everyday — and the
          occasions you don&rsquo;t need a reason for.
        </p>
        <div className="mt-10 flex items-center gap-4 flex-wrap justify-center">
          <Link to="/shop" className="btn-primary">
            Shop the Collection
          </Link>
          <Link
            to="/about"
            className="btn-ghost text-cream"
          >
            Our Story
            <ArrowRight className="ghost-arrow w-4 h-4 ml-1" strokeWidth={1.25} />
          </Link>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none">
        <span className="label-2 text-cream/70">Scroll</span>
        <span className="w-px h-8 bg-cream/40" />
      </div>
    </section>
  )
}
