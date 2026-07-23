import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { Button } from "@/components/ui/button"

export function Hero() {
  const containerRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current) return
    const frameId = requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => cancelAnimationFrame(frameId)
  }, [])

  return (
    <section ref={containerRef} className="relative h-[90vh] min-h-[600px]">
      <div
        className="absolute inset-0 bg-velmora-charcoal"
        data-strk-bg-id="hero-bg"
        data-strk-bg="[hero-title] [hero-subtitle]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-velmora-charcoal/40 via-velmora-charcoal/20 to-velmora-charcoal/50" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-velmora-cream">
        <p className="mb-4 font-sans text-xs uppercase tracking-[0.3em] text-velmora-gold">
          Demi-Fine Gold Jewelry
        </p>
        <h1
          id="hero-title"
          className="max-w-3xl font-serif text-5xl font-light leading-[1.1] tracking-wide md:text-7xl lg:text-8xl"
        >
          Crafted to be Treasured
        </h1>
        <p
          id="hero-subtitle"
          className="mt-6 max-w-md font-sans text-base font-light leading-relaxed text-velmora-cream/80 md:text-lg"
        >
          Timeless pieces in 18k gold plate, designed for the everyday and the
          extraordinary.
        </p>
        <Button
          asChild
          size="lg"
          className="mt-10 min-w-[220px] bg-velmora-gold text-velmora-cream hover:bg-velmora-gold-light"
        >
          <Link to="/shop">Shop the Collection</Link>
        </Button>
      </div>
    </section>
  )
}
