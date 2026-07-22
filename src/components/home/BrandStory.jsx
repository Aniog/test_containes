import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"

export default function BrandStory() {
  const ref = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (ref.current) ImageHelper.loadImages(strkImgConfig, ref.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <section ref={ref} className="bg-cream">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-0 md:grid-cols-2">
        {/* Image left */}
        <div className="relative aspect-[4/5] overflow-hidden md:aspect-[5/6]">
          <div
            className="absolute inset-0"
            data-strk-bg-id="story-bg-velmora-3c7e"
            data-strk-bg="[story-subtitle] [story-title] artisan hand-finishing gold jewelry in studio"
            data-strk-bg-ratio="4x5"
            data-strk-bg-width="900"
            style={{ opacity: 0 }}
          />
        </div>

        {/* Text right */}
        <div className="px-6 py-16 md:px-16 md:py-24">
          <p className="text-xs uppercase tracking-[0.3em] text-gold">Our Story</p>
          <h2
            id="story-title"
            className="mt-4 font-serif text-4xl leading-tight text-ink md:text-5xl"
          >
            Made by hand, made to last
          </h2>
          <p
            id="story-subtitle"
            className="mt-6 text-sm leading-relaxed text-stone md:text-base"
          >
            Velmora began with a simple belief: fine jewelry shouldn't require a
            special occasion. Each piece is hand-finished in 18K gold plating,
            designed in our studio to be worn, layered, and lived in — every
            single day.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-stone md:text-base">
            From the first sketch to the final polish, we obsess over the
            details that make a piece feel like an heirloom — without the
            heirloom price.
          </p>
          <Link
            to="/about"
            className="mt-8 inline-block border-b border-ink pb-1 text-xs uppercase tracking-[0.2em] text-ink transition-colors hover:border-gold hover:text-gold"
          >
            Read Our Story
          </Link>
        </div>
      </div>
    </section>
  )
}
