import { Link } from "react-router-dom"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { useEffect, useRef } from "react"

export default function Hero() {
  const ref = useRef(null)
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current)
  }, [])

  return (
    <section ref={ref} className="relative h-[100svh] min-h-[600px] w-full overflow-hidden">
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-7f3a2c"
        data-strk-bg="[hero-subtitle] [hero-title] gold jewelry worn on model warm light"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink-900/50 via-ink-900/20 to-ink-900/60" />

      <div className="relative h-full max-w-7xl mx-auto px-5 md:px-8 flex flex-col justify-end pb-24 md:pb-28">
        <div className="max-w-2xl animate-fade-up">
          <p className="text-xs uppercase tracking-widest3 text-gold-soft mb-5">
            Demi-Fine Gold Jewelry
          </p>
          <h1
            id="hero-title"
            className="font-serif text-cream text-5xl md:text-7xl lg:text-8xl leading-[1.05] font-light"
          >
            Crafted to be
            <br />
            <span className="italic text-gold-soft">Treasured</span>
          </h1>
          <p
            id="hero-subtitle"
            className="mt-6 text-cream/85 text-base md:text-lg max-w-md leading-relaxed font-light"
          >
            Warm, wearable gold — designed in studio and made for the everyday.
            Quiet luxury, made to last.
          </p>
          <Link
            to="/shop"
            className="inline-block mt-8 bg-cream text-ink-800 text-xs uppercase tracking-widest2 px-9 py-4 hover:bg-gold hover:text-white transition-colors duration-300"
          >
            Shop the Collection
          </Link>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-cream/60 text-[10px] uppercase tracking-widest3 animate-fade-in">
        Scroll
      </div>
    </section>
  )
}
