import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { Button } from "@/components/ui/button"

export function Hero() {
  const ref = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current)
  }, [])

  return (
    <section ref={ref} className="relative h-[100svh] w-full overflow-hidden">
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-velmora"
        data-strk-bg="[hero-subtitle] [hero-title] gold jewelry on model"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-velmora-charcoal/30 via-velmora-charcoal/20 to-velmora-charcoal/50" />
      </div>

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
        <p className="mb-4 font-sans text-xs uppercase tracking-widest text-white/90">
          Demi-Fine Gold Jewelry
        </p>
        <h1
          id="hero-title"
          className="max-w-4xl font-serif text-5xl font-light leading-[1.05] md:text-7xl lg:text-8xl"
        >
          Crafted to be Treasured
        </h1>
        <p
          id="hero-subtitle"
          className="mx-auto mt-6 max-w-md font-sans text-base font-light leading-relaxed text-white/90 md:text-lg"
        >
          Timeless designs in 18k gold plating — made for everyday luxury and
          moments worth remembering.
        </p>
        <Button
          asChild
          variant="accent"
          size="lg"
          className="mt-10 uppercase tracking-label"
        >
          <Link to="/shop">Shop the Collection</Link>
        </Button>
      </div>
    </section>
  )
}
