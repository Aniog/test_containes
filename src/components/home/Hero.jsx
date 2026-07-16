import { Link } from "react-router-dom"
import { useEffect, useRef } from "react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { Button } from "@/components/ui/button"

export function Hero() {
  const ref = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current)
  }, [])

  return (
    <section ref={ref} className="relative h-[100svh] min-h-[600px] w-full overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-velmora-01"
        data-strk-bg="[hero-subtitle] [hero-title] warm lit close up gold jewelry worn on model editorial"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-espresso/50 via-espresso/20 to-espresso/60" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-5 text-center md:px-8">
        <p className="mb-5 animate-fade-in text-[11px] uppercase tracking-[0.35em] text-canvas/80">
          Demi-Fine Gold Jewelry
        </p>
        <h1
          id="hero-title"
          className="animate-fade-up font-serif text-5xl leading-[1.05] text-canvas md:text-7xl lg:text-8xl"
        >
          Crafted to be
          <br />
          <span className="italic text-gold-soft">Treasured</span>
        </h1>
        <p
          id="hero-subtitle"
          className="mt-6 max-w-md animate-fade-up text-sm leading-relaxed text-canvas/85 md:text-base"
          style={{ animationDelay: "0.15s" }}
        >
          Hand-finished 18K gold plated pieces, designed in studio and made for
          everyday luxury. Quietly confident, endlessly wearable.
        </p>
        <div className="mt-9 animate-fade-up" style={{ animationDelay: "0.3s" }}>
          <Button as={Link} to="/shop" size="lg">
            Shop the Collection
          </Button>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-canvas/40 p-1.5">
          <span className="h-2 w-1 animate-bounce rounded-full bg-canvas/70" />
        </div>
      </div>
    </section>
  )
}
