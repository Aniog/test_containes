import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { Button } from "@/components/ui/button"

export function Hero() {
  const containerRef = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <section ref={containerRef} className="relative min-h-[92svh] overflow-hidden bg-espresso md:min-h-screen">
      <div
        className="absolute inset-0"
        data-strk-bg-id="home-hero-bg-a3f8c2"
        data-strk-bg="[hero-subhead] [hero-headline] warm-lit close-up of gold jewelry worn on a model, editorial photography"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-espresso/85 via-espresso/30 to-espresso/45" />

      <div className="container relative flex min-h-[92svh] flex-col items-center justify-end pb-24 pt-32 text-center md:min-h-screen md:justify-center md:pb-0">
        <p className="text-[10px] font-medium uppercase tracking-[0.35em] text-bronze-light md:text-[11px]">
          Demi-Fine Jewelry · Est. 2021
        </p>
        <h1
          id="hero-headline"
          className="mt-5 max-w-3xl font-serif text-5xl font-medium leading-[1.05] text-ivory md:text-7xl lg:text-8xl"
        >
          Crafted to be Treasured
        </h1>
        <p id="hero-subhead" className="mt-6 max-w-md text-sm leading-relaxed text-ivory/75 md:text-base">
          Small-batch 18K gold plated earrings, necklaces and huggies — designed for every day, made to last for years.
        </p>
        <div className="mt-9 flex flex-col items-center gap-4 sm:flex-row">
          <Button asChild size="lg">
            <Link to="/shop">Shop the Collection</Link>
          </Button>
          <Button asChild variant="outline-light" size="lg">
            <Link to="/about">Our Story</Link>
          </Button>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex">
        <span className="text-[9px] uppercase tracking-[0.3em] text-ivory/50">Scroll</span>
        <span className="h-10 w-px bg-gradient-to-b from-ivory/50 to-transparent" />
      </div>
    </section>
  )
}
