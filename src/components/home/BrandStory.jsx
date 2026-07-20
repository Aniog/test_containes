import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

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
    <section ref={ref} className="py-20 md:py-28 bg-sand">
      <div className="max-w-8xl mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Image left */}
          <div className="relative aspect-[4/5] overflow-hidden bg-ink">
            <img
              src='data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"%3E%3C/svg%3E'
              alt="Velmora atelier crafting gold jewelry"
              data-strk-img-id="story-img-velmora-4d5e"
              data-strk-img="[story-body] [story-title] jewelry atelier craftsmanship gold"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Text right */}
          <div className="md:pl-6">
            <p className="text-xs tracking-[0.3em] uppercase text-stone mb-4">Est. 2019</p>
            <h2 id="story-title" className="font-serif text-4xl md:text-5xl leading-tight">
              Jewelry made to be lived in.
            </h2>
            <p id="story-body" className="text-stone text-base md:text-lg leading-relaxed mt-6">
              Velmora began with a simple frustration: beautiful gold jewelry was
              either heirloom-expensive or quickly tarnished. We set out to make
              demi-fine pieces with the weight, warmth and finish of fine jewelry —
              at a price that lets you wear them every day, not just save them for
              special occasions.
            </p>
            <p className="text-stone text-base md:text-lg leading-relaxed mt-4">
              Each piece is hand-finished in 18K gold over sterling silver,
              hypoallergenic and made to last.
            </p>
            <Link
              to="/about"
              className="inline-block mt-8 text-xs tracking-[0.25em] uppercase border-b border-ink pb-1 hover:text-champagne hover:border-champagne transition-colors"
            >
              Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
