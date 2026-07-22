import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"

export default function Hero() {
  const ref = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, ref.current)
    })
    return () => window.cancelAnimationFrame(frameId)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <section ref={ref} className="relative h-[100svh] min-h-[600px] w-full overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-7f2a9c"
        data-strk-bg="[hero-subtitle] [hero-title] warm lit close up gold jewelry worn on model editorial"
        data-strk-bg-ratio="9x16"
        data-strk-bg-width="1600"
      />
      {/* Warm overlay for legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-espresso/40 via-espresso/20 to-espresso/55" />

      <div className="relative h-full mx-auto max-w-7xl px-6 md:px-10 flex flex-col justify-end pb-20 md:pb-28">
        <div className="max-w-2xl animate-fade-up">
          <p className="text-[11px] uppercase tracking-[0.3em] text-champagne mb-5">
            Demi-Fine Gold Jewelry
          </p>
          <h1
            id="hero-title"
            className="font-serif text-ivory text-5xl md:text-7xl lg:text-8xl leading-[1.05] font-light"
          >
            Crafted to be
            <br />
            Treasured
          </h1>
          <p
            id="hero-subtitle"
            className="mt-6 text-ivory/85 text-base md:text-lg max-w-md leading-relaxed font-light"
          >
            Warm-lit, hand-finished gold jewelry made for everyday wear — and the moments worth marking.
          </p>
          <div className="mt-9">
            <Link
              to="/shop"
              className="inline-flex items-center justify-center bg-gold text-ivory hover:bg-gold-deep px-10 py-4 text-xs uppercase tracking-[0.2em] font-medium transition-colors duration-300"
            >
              Shop the Collection
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
