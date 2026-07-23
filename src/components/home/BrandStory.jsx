import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"

export default function BrandStory() {
  const ref = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, ref.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <section ref={ref} className="py-20 md:py-28 bg-sand">
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div className="relative aspect-[4/5] overflow-hidden bg-espresso">
          <div
            className="absolute inset-0"
            data-strk-bg-id="story-bg-velmora"
            data-strk-bg="[story-text] gold jewelry craftsmanship atelier warm editorial"
            data-strk-bg-ratio="4x5"
            data-strk-bg-width="800"
          />
        </div>

        <div className="md:pl-6">
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">
            Our Story
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-ink leading-tight mb-6">
            Quiet luxury, made to be lived in.
          </h2>
          <p id="story-text" className="text-base text-stone leading-relaxed mb-5">
            Velmora began with a simple belief: that fine jewelry should feel
            personal, not precious. Each piece is hand-finished in 18K gold
            plating over sterling silver, designed to be worn from morning to
            evening and passed on for years.
          </p>
          <p className="text-base text-stone leading-relaxed mb-8">
            We work in small batches, with materials chosen for their warmth
            and longevity — so every earring, huggie and necklace feels
            considered, never mass-produced.
          </p>
          <Link
            to="/about"
            className="inline-block border border-ink text-ink text-xs uppercase tracking-[0.2em] px-10 py-4 hover:bg-ink hover:text-ivory transition-colors"
          >
            Read Our Story
          </Link>
        </div>
      </div>
    </section>
  )
}
