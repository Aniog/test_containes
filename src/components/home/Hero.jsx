import { Link } from "react-router-dom"
import { useEffect, useRef } from "react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  const containerRef = useRef(null)

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frame)
  }, [])

  return (
    <section
      ref={containerRef}
      className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-espresso-deep text-ivory"
    >
      {/* Background image — full-bleed editorial close-up of gold jewelry */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-main"
        data-strk-bg="gold jewelry editorial model ear close-up warm lighting"
        data-strk-bg-ratio="3x4"
        data-strk-bg-width="1800"
        aria-hidden="true"
      />

      {/* Warm gradient overlay — keeps text legible, lets gold pop */}
      <div className="absolute inset-0 bg-gradient-to-b from-espresso-deep/55 via-espresso-deep/40 to-espresso-deep/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-espresso-deep/55 via-transparent to-transparent" />

      {/* Editorial copy */}
      <div className="relative z-10 mx-auto h-full max-w-[1400px] px-6 md:px-10 flex flex-col justify-end pb-20 md:pb-28">
        <div className="max-w-2xl">
          <span className="eyebrow !text-gold-soft">Velmora — Fine Jewelry</span>
          <h1
            id="hero-headline"
            className="mt-5 font-serif font-medium leading-[0.95] text-ivory text-[44px] sm:text-6xl md:text-7xl lg:text-[88px]"
          >
            Crafted to be<br className="hidden sm:block" /> Treasured.
          </h1>
          <p
            id="hero-sub"
            className="mt-6 text-base md:text-lg text-ivory/85 max-w-md leading-relaxed"
          >
            Demi-fine 18K gold-plated jewelry, made by hand in small batches. Designed
            to be lived in — and passed down.
          </p>
          <div className="mt-9 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Link to="/shop" className="btn btn-accent">
              Shop the Collection
              <ArrowRight size={14} strokeWidth={1.5} />
            </Link>
            <Link to="/about" className="btn btn-outline-light">
              Our Story
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center text-ivory/70">
        <span className="eyebrow !text-ivory/70">Scroll</span>
        <span className="mt-2 block h-10 w-px bg-ivory/40" />
      </div>
    </section>
  )
}