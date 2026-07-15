import React, { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const About = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div className="pt-20 lg:pt-24 bg-cream">
      <div ref={containerRef} className="max-w-content mx-auto px-6 lg:px-8 py-12 lg:py-20">
        <div className="text-center mb-16">
          <h1 className="text-xs tracking-section uppercase font-semibold text-gold mb-3">Our Story</h1>
          <p className="font-serif text-3xl md:text-5xl text-base max-w-2xl mx-auto leading-tight">
            Where Craft Meets Heart
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-20">
          <div className="aspect-[4x5] overflow-hidden">
            <img
              data-strk-img-id="about-hero-img-1a2b3c"
              data-strk-img="[about-studio-text] jewelry artisan studio craftsmanship"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora Studio"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p id="about-studio-text" className="text-muted leading-relaxed mb-6">
              Velmora was founded with a singular vision: to make the beauty and craftsmanship of fine jewelry accessible to everyone. We believe that luxury shouldn't be exclusive — it should be an everyday experience.
            </p>
            <p className="text-muted leading-relaxed mb-6">
              Every piece in our collection is designed in-house and crafted with meticulous attention to detail. We use 18K gold plating over premium brass, ensuring each piece has the weight, luster, and durability of solid gold — at a fraction of the price.
            </p>
            <p className="text-muted leading-relaxed">
              Our commitment to quality extends beyond the jewelry itself. All Velmora pieces are hypoallergenic and nickel-free, because comfort should never be compromised for beauty.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="py-8">
            <p className="font-serif text-4xl text-gold mb-2">18K</p>
            <p className="text-xs tracking-section uppercase font-semibold text-base">Gold Plated</p>
            <p className="text-sm text-muted mt-2">Premium plating over solid brass</p>
          </div>
          <div className="py-8 border-y md:border-y-0 md:border-x border-divider">
            <p className="font-serif text-4xl text-gold mb-2">100%</p>
            <p className="text-xs tracking-section uppercase font-semibold text-base">Hypoallergenic</p>
            <p className="text-sm text-muted mt-2">Nickel-free, safe for sensitive skin</p>
          </div>
          <div className="py-8">
            <p className="font-serif text-4xl text-gold mb-2">30</p>
            <p className="text-xs tracking-section uppercase font-semibold text-base">Day Returns</p>
            <p className="text-sm text-muted mt-2">Love it or send it back</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
