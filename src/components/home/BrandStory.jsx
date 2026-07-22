import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { useScrollReveal } from '@/hooks/useScrollReveal'

const BrandStory = () => {
  const containerRef = useRef(null)
  const { ref: revealRef, revealed } = useScrollReveal(0.1)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-cardwhite">
      <div ref={revealRef} className={`max-w-content mx-auto px-4 md:px-6 transition-all duration-1000 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[3/4] overflow-hidden bg-cream">
            <img
              data-strk-img-id="brand-story-img-e7f8g9"
              data-strk-img="[brand-story-subtitle] [brand-story-title]"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div>
            <h2 id="brand-story-title" className="font-serif text-3xl md:text-4xl text-charcoal tracking-wide mb-6">
              Our Story
            </h2>
            <p id="brand-story-subtitle" className="font-sans text-sm text-muted tracking-cta uppercase mb-4">
              Crafted with intention, worn with joy
            </p>
            <p className="font-sans text-base text-warmgray leading-relaxed mb-4">
              Velmora was born from a simple belief: that beautiful jewelry shouldn't cost a fortune, and it shouldn't feel disposable. Every piece is designed in-house and crafted in 18K gold plating over a hypoallergenic brass base — the kind of material that looks rich, wears well, and respects your skin.
            </p>
            <p className="font-sans text-base text-warmgray leading-relaxed mb-8">
              We skip the middlemen, the markups, and the wasteful packaging. What you get is demi-fine jewelry at a fair price, made to be treasured for years.
            </p>
            <Link to="/about">
              <Button variant="outline" className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2">Read More</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BrandStory
