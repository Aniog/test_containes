import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function AboutPage() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef} className="bg-ivory pt-20 md:pt-24">
      {/* Header */}
      <div className="bg-warm-black py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <h1
            id="about-title"
            className="font-serif text-warm-white text-3xl md:text-5xl font-light uppercase tracking-[0.15em]"
          >
            Our Story
          </h1>
          <div className="w-12 h-px bg-muted-gold mx-auto mt-4" />
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 md:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16 md:mb-24">
          <div className="aspect-[4x5] overflow-hidden bg-cream">
            <img
              data-strk-img-id="about-img-1-d4e5f6"
              data-strk-img="[about-title] jewelry craftsmanship artisan"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className="font-serif text-warm-black text-2xl md:text-3xl font-light uppercase tracking-[0.12em] mb-6">
              The Beginning
            </h2>
            <p className="text-warm-gray text-sm md:text-base leading-relaxed mb-4">
              Velmora was born from a simple belief: that fine jewelry shouldn't require a fine jewelry budget. We saw a gap between mass-produced fashion jewelry that tarnishes in weeks, and luxury pieces that cost thousands.
            </p>
            <p className="text-warm-gray text-sm md:text-base leading-relaxed">
              So we created Velmora — demi-fine jewelry crafted with the same care and attention as the finest houses, using 18K gold plating and hypoallergenic materials, at a price that lets you build a collection you truly love.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16 md:mb-24">
          <div className="md:order-2 aspect-[4x5] overflow-hidden bg-cream">
            <img
              data-strk-img-id="about-img-2-g7h8i9"
              data-strk-img="[about-title] gold jewelry elegant woman"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora jewelry on model"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="md:order-1">
            <h2 className="font-serif text-warm-black text-2xl md:text-3xl font-light uppercase tracking-[0.12em] mb-6">
              Our Promise
            </h2>
            <p className="text-warm-gray text-sm md:text-base leading-relaxed mb-4">
              Every piece in our collection is designed in-house and crafted with meticulous attention to detail. We use only premium materials — 18K gold plating over a durable brass base, with stones that catch the light beautifully.
            </p>
            <p className="text-warm-gray text-sm md:text-base leading-relaxed">
              We believe luxury is a feeling, not a price tag. From our studio to your jewelry box, each Velmora piece is a testament to that belief.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="text-center py-12 border-t border-warm-charcoal/10">
          <h2 className="font-serif text-warm-black text-2xl md:text-3xl font-light uppercase tracking-[0.12em] mb-12">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Craftsmanship', text: 'Every piece is designed in-house and finished by hand, ensuring the quality you deserve.' },
              { title: 'Accessibility', text: 'Premium materials and timeless design, at prices that let you build a collection you love.' },
              { title: 'Sustainability', text: 'We minimize waste, use recycled materials where possible, and ship in eco-friendly packaging.' },
            ].map(val => (
              <div key={val.title}>
                <h3 className="font-serif text-warm-black text-lg uppercase tracking-[0.1em] mb-3">{val.title}</h3>
                <p className="text-warm-gray text-sm leading-relaxed">{val.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Link
            to="/shop"
            className="inline-block bg-muted-gold text-warm-black px-8 py-3 text-xs uppercase tracking-[0.25em] font-medium hover:bg-bright-gold transition-colors duration-300"
          >
            Shop the Collection
          </Link>
        </div>
      </div>
    </div>
  )
}
