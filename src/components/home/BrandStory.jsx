import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"

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
          <div className="relative aspect-[4/5] overflow-hidden bg-sand">
            <div
              className="absolute inset-0"
              data-strk-bg-id="story-bg-velmora-4d5e6f"
              data-strk-bg="[story-subtitle] [story-title]"
              data-strk-bg-ratio="4x5"
              data-strk-bg-width="800"
            />
          </div>

          {/* Text */}
          <div className="md:pl-6">
            <p className="text-[11px] uppercase tracking-widest2 text-gold mb-4">Our Story</p>
            <h2
              id="story-title"
              className="font-serif text-4xl md:text-5xl text-ink font-light leading-tight"
            >
              Gold, made to live with you.
            </h2>
            <p
              id="story-subtitle"
              className="mt-6 text-stone leading-relaxed"
            >
              Velmora began with a simple belief: fine jewelry shouldn't be saved
              for special occasions. We design demi-fine pieces in warm 18K gold
              plate — made to be worn every day, layered freely, and passed on.
            </p>
            <p className="mt-4 text-stone leading-relaxed">
              Each piece is crafted in small batches, finished by hand, and tested
              to be hypoallergenic and tarnish-resistant. No markups for markups'
              sake — just considered design at an honest price.
            </p>
            <Link
              to="/about"
              className="inline-block mt-8 text-[11px] uppercase tracking-widest3 text-ink border-b border-ink pb-1 hover:text-gold hover:border-gold transition-colors duration-300"
            >
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
