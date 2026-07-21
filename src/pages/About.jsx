import React, { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const AboutPage = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef} className="bg-brand-cream pt-20 md:pt-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-20">
        {/* Hero */}
        <div className="text-center mb-16 md:mb-24">
          <h1 className="font-serif text-display md:text-display-lg text-brand-charcoal mb-4">
            Our Story
          </h1>
          <p className="font-sans text-sm md:text-base text-brand-warm-gray max-w-2xl mx-auto leading-relaxed">
            Velmora was founded on a simple conviction: that beautifully crafted jewelry should be accessible, wearable, and made to last — not locked away for special occasions.
          </p>
        </div>

        {/* Image + text split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-20 md:mb-28">
          <div className="aspect-[4/5] overflow-hidden bg-brand-sand">
            <img
              data-strk-img-id="about-craft-9n2p"
              data-strk-img="[about-craft-text] [about-craft-heading] jewelry artisan workshop"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 id="about-craft-heading" className="font-serif text-display-sm text-brand-charcoal mb-6">
              Crafted with Intention
            </h2>
            <p id="about-craft-text" className="font-sans text-sm md:text-base text-brand-warm-gray leading-relaxed mb-4">
              Every Velmora piece begins as a sketch in our design studio — inspired by architecture, nature, and the quiet beauty of everyday moments. We believe that the jewelry you reach for every morning should feel as special as the pieces you save for celebrations.
            </p>
            <p className="font-sans text-sm md:text-base text-brand-warm-gray leading-relaxed">
              Our artisans bring each design to life using time-honored techniques, 18K gold plating over sterling silver, and carefully sourced materials. The result is jewelry with the weight, finish, and presence of fine jewelry — at a price that lets you build a collection, not just a single statement piece.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 mb-20 md:mb-28">
          <div className="text-center">
            <div className="w-12 h-12 mx-auto mb-4 border border-brand-gold rounded-full flex items-center justify-center">
              <span className="font-serif text-brand-gold text-lg">1</span>
            </div>
            <h3 className="font-serif text-heading text-brand-charcoal mb-3">Quality First</h3>
            <p className="font-sans text-sm text-brand-warm-gray leading-relaxed">
              18K gold plating over 925 sterling silver. Hypoallergenic, nickel-free, and tarnish-resistant. Every piece is inspected before it ships.
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 mx-auto mb-4 border border-brand-gold rounded-full flex items-center justify-center">
              <span className="font-serif text-brand-gold text-lg">2</span>
            </div>
            <h3 className="font-serif text-heading text-brand-charcoal mb-3">Ethically Made</h3>
            <p className="font-sans text-sm text-brand-warm-gray leading-relaxed">
              We partner with small, family-run workshops that share our values. Fair wages, safe conditions, and responsible sourcing — always.
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 mx-auto mb-4 border border-brand-gold rounded-full flex items-center justify-center">
              <span className="font-serif text-brand-gold text-lg">3</span>
            </div>
            <h3 className="font-serif text-heading text-brand-charcoal mb-3">Wear It Always</h3>
            <p className="font-sans text-sm text-brand-warm-gray leading-relaxed">
              Our jewelry is designed for real life. Shower-safe, sweat-proof, and comfortable enough to never want to take off.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage
