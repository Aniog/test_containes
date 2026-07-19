import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"

export default function BrandStory() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="bg-sand py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-5 md:grid-cols-2 md:gap-16 md:px-8">
        <div className="relative aspect-[4/5] overflow-hidden bg-ink">
          <div
            className="absolute inset-0"
            data-strk-bg-id="story-bg-2c8f1a"
            data-strk-bg="[story-text] gold jewelry craftsmanship hands artisan workshop warm editorial"
            data-strk-bg-ratio="4x5"
            data-strk-bg-width="800"
          />
        </div>

        <div className="md:pl-4">
          <span className="text-[11px] uppercase tracking-[0.3em] text-gold">Our Story</span>
          <h2 className="mt-3 font-serif text-3xl leading-tight text-ink md:text-5xl">
            Quiet luxury, made to be lived in.
          </h2>
          <p id="story-text" className="mt-6 text-sm leading-relaxed text-stone md:text-base">
            Velmora began with a simple belief: fine jewelry should be worn, not locked away.
            Each piece is hand-finished in 18K gold plating, designed to layer, to travel,
            and to age gracefully beside you. We craft demi-fine jewelry that feels
            considered — warm in tone, weighty in hand, and quietly luxurious in every detail.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-stone md:text-base">
            From the first sketch to the final polish, every piece passes through the hands
            of artisans who care about the small things — because the small things are what
            make a piece worth treasuring.
          </p>
          <Link
            to="/about"
            className="mt-8 inline-block border-b border-gold pb-1 text-[11px] uppercase tracking-[0.22em] text-gold transition-colors hover:text-gold-deep"
          >
            Read Our Story
          </Link>
        </div>
      </div>
    </section>
  )
}
