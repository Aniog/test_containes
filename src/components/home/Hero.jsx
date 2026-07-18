import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import Button from "@/components/ui/Button"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"

export default function Hero() {
  const containerRef = useRef(null)
  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <section ref={containerRef} className="relative h-[100svh] min-h-[600px] w-full overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-velmora-1a2b3c"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      {/* Warm overlay for legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink/50 via-ink/20 to-ink/60" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <p
          id="hero-eyebrow"
          className="mb-5 text-[11px] uppercase tracking-[0.35em] text-champagne animate-fade-up"
        >
          Demi-Fine Gold Jewelry
        </p>
        <h1
          id="hero-title"
          className="max-w-4xl font-serif text-5xl font-light leading-[1.05] text-cream md:text-7xl animate-fade-up"
          style={{ animationDelay: "0.1s" }}
        >
          Crafted to be Treasured
        </h1>
        <p
          id="hero-subtitle"
          className="mt-6 max-w-xl text-sm leading-relaxed text-cream/85 md:text-base animate-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          Warm, hand-finished gold jewelry made for everyday wear — and for the
          moments worth keeping.
        </p>
        <div
          className="mt-9 animate-fade-up"
          style={{ animationDelay: "0.3s" }}
        >
          <Button as={Link} to="/shop" variant="solid" size="lg">
            Shop the Collection
          </Button>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-cream/40 p-1">
          <span className="h-2 w-px animate-bounce bg-cream/70" />
        </div>
      </div>
    </section>
  )
}
