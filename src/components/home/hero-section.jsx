import React, { useRef, useEffect } from "react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"

export const HeroSection = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current) return
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="relative h-screen min-h-[600px] w-full overflow-hidden">
      <div
        data-strk-bg-id="hero-bg-velmora"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        className="absolute inset-0 -z-10"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/30 via-ink/20 to-ink/50" />

      <div className="relative flex h-full flex-col items-center justify-center px-6 text-center text-white">
        <p
          id="hero-subtitle"
          className="mb-4 text-xs uppercase tracking-[0.2em] text-white/90 md:text-sm"
        >
          Demi-Fine Gold Jewelry
        </p>
        <h1
          id="hero-title"
          className="max-w-4xl font-serif text-5xl font-medium leading-[0.95] tracking-tight md:text-7xl lg:text-8xl"
        >
          Crafted to be Treasured
        </h1>
        <p className="mx-auto mt-6 max-w-lg text-sm leading-relaxed text-white/85 md:text-base">
          Timeless silhouettes in 18k gold plate, designed for everyday luxury and the moments worth remembering.
        </p>
        <div className="mt-10">
          <Button size="lg" asChild>
            <Link to="/shop">Shop the Collection</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
