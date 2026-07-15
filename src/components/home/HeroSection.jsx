import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"

export default function HeroSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Background image */}
      <div
        data-strk-bg-id="velmora-hero-bg-a1b2c3"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="3x2"
        data-strk-bg-width="1600"
        className="absolute inset-0 bg-midnight-950"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 w-full">
          <div className="max-w-xl animate-fade-in-up">
            <h1
              id="hero-title"
              className="font-serif text-4xl sm:text-5xl lg:text-7xl text-white leading-tight mb-4"
            >
              Crafted to be
              <br />
              <span className="italic">Treasured</span>
            </h1>
            <p
              id="hero-subtitle"
              className="text-white/70 text-sm sm:text-base lg:text-lg max-w-md mb-8 leading-relaxed animate-fade-in-up animation-delay-200"
            >
              Demi-fine gold jewelry, designed for everyday elegance.
              Ethically crafted, consciously priced.
            </p>
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 px-8 py-3 bg-gold-500 text-white text-xs tracking-widest uppercase hover:bg-gold-600 transition-all duration-300 animate-fade-in-up animation-delay-400"
            >
              Shop the Collection
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}