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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <section ref={ref} className="py-20 md:py-28 bg-cream">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="relative aspect-[4/5] overflow-hidden bg-sand">
            <div
              className="absolute inset-0"
              data-strk-bg-id="story-bg-3c8d1e"
              data-strk-bg="[story-heading] [story-body] gold jewelry craftsmanship atelier hands warm editorial"
              data-strk-bg-ratio="4x5"
              data-strk-bg-width="900"
            />
          </div>

          <div className="md:pl-6">
            <p className="text-[11px] uppercase tracking-[0.3em] text-gold mb-4">Our Story</p>
            <h2
              id="story-heading"
              className="font-serif text-4xl md:text-5xl text-espresso font-light leading-tight"
            >
              Quietly made, made to last
            </h2>
            <p id="story-body" className="mt-6 text-cocoa leading-relaxed">
              Velmora began with a simple belief: that beautiful gold jewelry shouldn't require a
              special occasion. Each piece is hand-finished in small batches, 18K gold plated over
              a hypoallergenic base, and made to be worn — really worn — through the everyday.
            </p>
            <p className="mt-4 text-cocoa leading-relaxed">
              We design in studio and sell directly to you, so the quality stays high and the price
              stays honest. No markups, no middlemen, no compromise on the details that matter.
            </p>
            <Link
              to="/about"
              className="mt-8 inline-flex items-center text-[11px] uppercase tracking-[0.2em] text-espresso border-b border-espresso pb-1 hover:text-gold-deep hover:border-gold-deep transition-colors"
            >
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
