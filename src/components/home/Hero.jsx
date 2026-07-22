import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import Button from "@/components/ui/Button"

export default function Hero() {
  const ref = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (ref.current) ImageHelper.loadImages(strkImgConfig, ref.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <section ref={ref} className="relative h-[100svh] min-h-[600px] w-full overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-velmora-9f2a"
        data-strk-bg="[hero-subtitle] [hero-title] warm-lit close-up gold jewelry worn on model"
        data-strk-bg-ratio="9x16"
        data-strk-bg-width="1600"
        style={{ opacity: 0 }}
      />
      {/* Gradient overlay for legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-espresso/50 via-espresso/20 to-espresso/60" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-5 text-center">
        <p className="mb-5 text-xs uppercase tracking-[0.3em] text-cream/80 strk-fade-up">
          Demi-Fine Gold Jewelry
        </p>
        <h1
          id="hero-title"
          className="max-w-3xl font-serif text-5xl leading-[1.05] text-cream md:text-7xl strk-fade-up"
        >
          Crafted to be Treasured
        </h1>
        <p
          id="hero-subtitle"
          className="mt-6 max-w-md text-sm leading-relaxed text-cream/85 md:text-base strk-fade-up"
        >
          Warm-lit, hand-finished gold pieces designed for the everyday and the
          unforgettable.
        </p>
        <div className="mt-9 strk-fade-up">
          <Button as={Link} to="/shop" variant="primary">
            Shop the Collection
          </Button>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-cream/40 p-1.5">
          <div className="h-2 w-px animate-bounce bg-cream/70" />
        </div>
      </div>
    </section>
  )
}
