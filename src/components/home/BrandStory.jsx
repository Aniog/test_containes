import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function BrandStory() {
  const ref = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, ref.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <section ref={ref} className="py-20 md:py-28 bg-cream border-y border-line">
      <div className="max-w-7xl mx-auto px-5 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
        {/* Image */}
        <div className="relative aspect-[4/5] overflow-hidden bg-sand order-1">
          <img
            alt="Velmora atelier crafting gold jewelry"
            data-strk-img-id="story-img-2c4e6g"
            data-strk-img="[story-body] [story-title] gold jewelry atelier craftsmanship hands"
            data-strk-img-ratio="4x5"
            data-strk-img-width="700"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* Text */}
        <div className="order-2">
          <p className="text-[11px] uppercase tracking-[0.3em] text-gold mb-4">
            Our Story
          </p>
          <h2
            id="story-title"
            className="font-serif text-4xl md:text-5xl text-espresso leading-tight"
          >
            Made to be worn,
            <br />
            not saved for later.
          </h2>
          <p id="story-body" className="mt-6 text-base text-cocoa leading-relaxed">
            Velmora began with a simple frustration: beautiful gold jewelry was
            either impossibly expensive or turned your skin green. We set out to
            make demi-fine pieces in warm 18K gold plate — hypoallergenic,
            durable, and quiet enough for everyday. Every piece is designed
            in-house and finished by hand.
          </p>
          <Link
            to="/about"
            className="inline-block mt-8 border border-espresso text-espresso text-[11px] uppercase tracking-[0.2em] px-10 py-4 hover:bg-espresso hover:text-ivory transition-colors"
          >
            Read Our Story
          </Link>
        </div>
      </div>
    </section>
  )
}
