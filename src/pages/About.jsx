import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function About() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef} className="pt-20 md:pt-24 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 md:px-8 py-12 md:py-20">
        <h1 id="about-title" className="font-serif text-3xl md:text-5xl text-velmora-charcoal tracking-wide text-center">
          Our Story
        </h1>
        <p id="about-subtitle" className="font-sans text-sm text-velmora-muted mt-4 text-center leading-relaxed">
          Velmora was born from a simple belief: fine jewelry should be accessible, wearable, and crafted with care.
        </p>

        <div className="mt-12 aspect-[16x9] rounded-sm overflow-hidden bg-velmora-warm">
          <img
            data-strk-img-id="about-hero-img-2f3a4b"
            data-strk-img="[about-subtitle] [about-title]"
            data-strk-img-ratio="16x9"
            data-strk-img-width="1200"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt="Velmora studio"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="mt-12 space-y-6">
          <p className="font-sans text-sm text-velmora-charcoal leading-relaxed">
            Every piece is designed in our studio and finished with 18K gold plating over brass — giving you the warmth and richness of gold, without the price tag. We believe that the experience of receiving jewelry should feel as special as wearing it.
          </p>
          <p className="font-sans text-sm text-velmora-charcoal leading-relaxed">
            We source hypoallergenic materials, hand-polish each piece, and package everything in our signature gift box. Our commitment to quality means every Velmora piece is built to last — not just for a season, but for years to come.
          </p>
          <p className="font-sans text-sm text-velmora-charcoal leading-relaxed">
            From our studio to your doorstep, we take care of every detail. Free worldwide shipping, 30-day returns, and a customer care team that actually cares. Because jewelry is personal, and so is the way we do business.
          </p>
        </div>
      </div>
    </div>
  )
}
