import React, { useEffect, useRef } from 'react'
import { Separator } from '@/components/ui/separator'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const About = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef} className="bg-cream pt-24 md:pt-28 min-h-screen">
      <div className="max-w-content mx-auto px-4 md:px-6 py-16 md:py-24">
        <div className="text-center mb-16">
          <h1 id="about-title" className="font-serif text-3xl md:text-4xl text-charcoal tracking-wide">
            Our Story
          </h1>
          <p id="about-subtitle" className="font-sans text-sm text-muted mt-2 tracking-cta uppercase">
            Crafted with intention, worn with joy
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center mb-16">
          <div className="aspect-[3/4] overflow-hidden bg-cardwhite">
            <img
              data-strk-img-id="about-img-1a2b3c"
              data-strk-img="[about-subtitle] [about-title]"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="font-sans text-base text-warmgray leading-relaxed mb-4">
              Velmora was born from a simple belief: that beautiful jewelry shouldn't cost a fortune, and it shouldn't feel disposable. Every piece is designed in-house and crafted in 18K gold plating over a hypoallergenic brass base — the kind of material that looks rich, wears well, and respects your skin.
            </p>
            <p className="font-sans text-base text-warmgray leading-relaxed mb-4">
              We skip the middlemen, the markups, and the wasteful packaging. What you get is demi-fine jewelry at a fair price, made to be treasured for years.
            </p>
            <p className="font-sans text-base text-warmgray leading-relaxed">
              Our studio is where every design begins — sketching, prototyping, testing on real ears and necks until the piece feels just right. We believe jewelry should be lived in, not locked away. That's why every Velmora piece is hypoallergenic, water-resistant, and designed for the rhythm of real life.
            </p>
          </div>
        </div>

        <Separator className="mb-16" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="font-serif text-xl text-charcoal tracking-wide mb-3">Designed in-House</h3>
            <p className="font-sans text-sm text-warmgray leading-relaxed">
              Every piece starts as a sketch in our studio, then goes through rounds of prototyping until it's perfect.
            </p>
          </div>
          <div>
            <h3 className="font-serif text-xl text-charcoal tracking-wide mb-3">Ethically Crafted</h3>
            <p className="font-sans text-sm text-warmgray leading-relaxed">
              18K gold plating over hypoallergenic brass. Nickel-free, lead-free, kind to sensitive skin.
            </p>
          </div>
          <div>
            <h3 className="font-serif text-xl text-charcoal tracking-wide mb-3">Direct to You</h3>
            <p className="font-sans text-sm text-warmgray leading-relaxed">
              No middlemen, no retail markups. Premium demi-fine jewelry at a price that makes sense.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
