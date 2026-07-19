import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"

export default function Hero() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="relative flex min-h-[100svh] items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-4f2a9c"
        data-strk-bg="[hero-subtitle] [hero-title] warm gold jewelry worn on model editorial close up"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/50 via-ink/30 to-ink/60" />

      <div className="relative z-10 mx-auto max-w-3xl px-5 text-center">
        <p className="mb-5 text-xs uppercase tracking-widest3 text-ivory/80 animate-fade-in">
          Demi-Fine Gold Jewelry
        </p>
        <h1
          id="hero-title"
          className="font-serif text-5xl leading-[1.05] text-ivory md:text-7xl lg:text-8xl animate-fade-up"
        >
          Crafted to be
          <br />
          <span className="italic text-gold-light">Treasured</span>
        </h1>
        <p
          id="hero-subtitle"
          className="mx-auto mt-6 max-w-md text-base text-ivory/85 md:text-lg animate-fade-up"
          style={{ animationDelay: "0.15s" }}
        >
          Hand-finished 18K gold plated pieces — designed for the everyday and the
          unforgettable.
        </p>
        <div className="mt-9 animate-fade-up" style={{ animationDelay: "0.3s" }}>
          <Link
            to="/shop"
            className="inline-block bg-gold px-10 py-4 text-xs uppercase tracking-widest2 text-ink transition-all duration-300 hover:bg-ivory"
          >
            Shop the Collection
          </Link>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-ivory/60">
        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-ivory/40 p-1">
          <div className="h-2 w-1 animate-bounce rounded-full bg-ivory/70" />
        </div>
      </div>
    </section>
  )
}
