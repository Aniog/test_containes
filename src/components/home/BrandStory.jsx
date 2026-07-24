import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"

const PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

export default function BrandStory() {
  const ref = useRef(null)

  useEffect(() => {
    if (!ref.current) return
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, ref.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <section ref={ref} className="py-20 md:py-28 bg-cream">
      <div className="max-w-8xl mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden bg-ink order-1">
            <img
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora jewelry craftsmanship"
              data-strk-img-id="story-img-velmora-01"
              data-strk-img="[story-text] [story-heading] gold jewelry craftsmanship studio warm editorial"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="order-2 md:pl-4">
            <p className="text-[11px] uppercase tracking-widest3 text-gold mb-4">
              Our Story
            </p>
            <h2
              id="story-heading"
              className="font-serif text-4xl md:text-5xl text-ink leading-tight"
            >
              Jewelry made to be lived in
            </h2>
            <p id="story-text" className="mt-6 text-base text-ink-soft leading-relaxed">
              Velmora began with a simple belief: that fine jewelry should not be
              saved for special occasions. We design demi-fine pieces in 18K gold
              plate — warm enough to feel heirloom, accessible enough to wear every
              day. Each piece is finished by hand and made to be treasured for years,
              not seasons.
            </p>
            <div className="mt-8">
              <Link
                to="/about"
                className="inline-block text-[11px] uppercase tracking-widest2 text-ink border border-ink px-8 py-3.5 hover:bg-ink hover:text-ivory transition-colors"
              >
                Read Our Story
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
