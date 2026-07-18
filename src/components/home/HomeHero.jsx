import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { resolveImgUrl } from "@/lib/utils"

export default function HomeHero() {
  const ref = useRef(null)

  useEffect(() => {
    if (!ref.current) return
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, ref.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <section ref={ref} className="relative h-[100svh] min-h-[600px] w-full overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${resolveImgUrl("hero-bg-7f3a9c") || ""})` }}
      />
      {/* Warm overlay for legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-espresso/50 via-espresso/20 to-espresso/60" />

      <div className="relative h-full mx-auto max-w-7xl px-6 md:px-10 flex flex-col justify-end pb-20 md:pb-28">
        <div className="max-w-2xl fade-up">
          <p className="text-[11px] uppercase tracking-widest2 text-cream/80 mb-5">
            Demi-Fine Gold Jewelry
          </p>
          <h1
            id="hero-title"
            className="font-serif text-cream text-5xl md:text-7xl leading-[1.05] tracking-tight"
          >
            Crafted to be Treasured
          </h1>
          <p
            id="hero-subtitle"
            className="mt-6 text-cream/85 text-base md:text-lg max-w-md leading-relaxed"
          >
            Warm, wearable gold — designed in studio and made for the everyday.
            Quiet luxury, considered down to the last detail.
          </p>
          <div className="mt-9">
            <Link
              to="/shop"
              className="inline-block bg-gold text-espresso text-[11px] uppercase tracking-widest2 px-9 py-4 hover:bg-cream transition-colors duration-300"
            >
              Shop the Collection
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
