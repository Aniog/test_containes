import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { Button } from "@/components/ui/Button"
import { cn } from "@/lib/utils"

export function Hero() {
  const ref = useRef(null)

  useEffect(() => {
    if (!ref.current) return
    const cleanup = ImageHelper.loadImages(strkImgConfig, ref.current)
    return () => {
      if (typeof cleanup === "function") cleanup()
    }
  }, [])

  return (
    <section ref={ref} className="relative h-[100svh] min-h-[600px] w-full">
      <div
        className="absolute inset-0 bg-black/30"
        data-strk-bg-id="hero-bg-velmora"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-background" />
      </div>

      <div className="relative mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-4 text-center sm:px-6 lg:px-8">
        <p className="mb-4 text-xs uppercase tracking-[0.22em] text-white/80">
          New Collection
        </p>
        <h1
          id="hero-title"
          className="max-w-4xl font-serif text-5xl font-medium leading-[1.1] text-white sm:text-6xl md:text-7xl lg:text-8xl"
        >
          Crafted to be Treasured
        </h1>
        <p
          id="hero-subtitle"
          className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg"
        >
          Demi-fine gold jewelry for the moments that matter. Designed in New
          York, made to wear forever.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Button asChild size="lg" className="min-w-[180px]">
            <Link to="/shop">Shop the Collection</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="min-w-[180px] border-white/40 text-white hover:bg-white/10 hover:text-white"
          >
            <Link to="/shop">Explore Bestsellers</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
