import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function BrandStory() {
  const containerRef = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current)
      }
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <section ref={containerRef} className="bg-cream">
      <div className="mx-auto grid max-w-8xl grid-cols-1 items-stretch gap-0 md:grid-cols-2">
        {/* Image */}
        <div className="relative aspect-[4/5] overflow-hidden md:aspect-auto md:min-h-[640px]">
          <img
            alt="Velmora studio — gold jewelry craftsmanship"
            data-strk-img-id="story-img-velmora-3b8c1d"
            data-strk-img="[story-text] [story-title] gold jewelry craftsmanship studio warm"
            data-strk-img-ratio="4x5"
            data-strk-img-width="900"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>

        {/* Text */}
        <div className="flex flex-col justify-center px-6 py-16 md:px-16 md:py-24">
          <p className="text-[11px] uppercase tracking-[0.4em] text-gold">Our Story</p>
          <h2
            id="story-title"
            className="mt-4 font-serif text-4xl leading-tight text-ink md:text-5xl"
          >
            Quiet luxury, made to last.
          </h2>
          <p id="story-text" className="mt-6 max-w-md text-sm leading-relaxed text-taupe md:text-base">
            Velmora began with a simple belief: fine-feeling jewelry should be
            part of every day, not saved for special occasions. Each piece is
            18K gold plated over brass, hypoallergenic, and finished by hand —
            designed in studio and made to be worn, layered, and treasured for
            years.
          </p>
          <div className="mt-8">
            <Link
              to="/about"
              className="inline-flex items-center border border-ink px-8 py-4 text-xs uppercase tracking-widest3 text-ink transition-all duration-300 hover:bg-ink hover:text-ivory"
            >
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
