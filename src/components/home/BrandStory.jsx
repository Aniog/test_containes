import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"

export default function BrandStory() {
  const ref = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (ref.current) {
        ImageHelper.loadImages(strkImgConfig, ref.current)
      }
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <section ref={ref} className="py-20 md:py-28 bg-cream">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="relative aspect-[4/5] overflow-hidden bg-sand">
            <div
              className="absolute inset-0"
              data-strk-bg-id="brand-story-bg-velmora-2c8e1f"
              data-strk-bg="[brand-story-text] [brand-story-title] gold jewelry craftsmanship atelier warm editorial"
              data-strk-bg-ratio="4x5"
              data-strk-bg-width="800"
            />
          </div>

          <div className="md:pl-6">
            <p className="text-[11px] uppercase tracking-[0.3em] text-gold mb-4">
              Our Story
            </p>
            <h2
              id="brand-story-title"
              className="font-serif text-4xl md:text-5xl text-espresso leading-tight"
            >
              Quiet luxury, made to be lived in.
            </h2>
            <p
              id="brand-story-text"
              className="mt-6 text-cocoa leading-relaxed"
            >
              Velmora began with a simple belief: that fine-quality gold jewelry
              shouldn't require a special occasion. Each piece is hand-finished in
              small batches, plated in 18K gold, and made to be worn — through
              mornings, meetings, and the moments in between.
            </p>
            <p className="mt-4 text-cocoa leading-relaxed">
              We design for the woman who values restraint over noise, and
              craftsmanship over trends. Demi-fine, by design.
            </p>
            <Link
              to="/about"
              className="inline-block mt-8 text-[11px] uppercase tracking-[0.25em] text-espresso border-b border-gold pb-1 hover:text-gold transition-colors duration-300"
            >
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
