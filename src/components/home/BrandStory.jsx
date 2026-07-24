import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function BrandStory() {
  const containerRef = useRef(null)

  useEffect(() => {
    const node = containerRef.current
    if (!node) return
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, node)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <section ref={containerRef} className="py-20 md:py-28 bg-sand">
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
        <div className="relative aspect-[4/5] overflow-hidden bg-ink">
          <img
            alt="The Velmora studio"
            data-strk-img-id="story-img-velmora-4d5e6f"
            data-strk-img="[story-body] [story-heading] jewelry maker studio hands gold craft warm"
            data-strk-img-ratio="4x5"
            data-strk-img-width="800"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        <div className="md:pl-6">
          <p className="text-xs uppercase tracking-widest2 text-champagne-deep mb-4">
            Our Story
          </p>
          <h2
            id="story-heading"
            className="font-serif text-4xl md:text-5xl text-ink leading-[1.1]"
          >
            Quiet luxury, made to be lived in
          </h2>
          <p id="story-body" className="mt-6 text-stone leading-relaxed">
            Velmora began with a simple belief: that fine gold jewelry should be
            worn every day, not locked away. Each piece is designed in our studio
            and finished in 18K gold plating, hypoallergenic and made to last —
            warm enough for the everyday, considered enough for the moments that
            matter.
          </p>
          <p className="mt-4 text-stone leading-relaxed">
            We work in small batches, with materials chosen for their warmth and
            longevity, so every piece feels like an heirloom from the first wear.
          </p>
          <Link
            to="/about"
            className="inline-block mt-8 text-xs uppercase tracking-widest2 text-ink border-b border-champagne pb-1 hover:text-champagne-deep hover:border-champagne-deep transition-colors duration-300"
          >
            Read Our Story
          </Link>
        </div>
      </div>
    </section>
  )
}
