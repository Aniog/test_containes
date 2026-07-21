import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { useScrollReveal } from '@/hooks/useScrollReveal'

const BrandStory = () => {
  const containerRef = useRef(null)
  const [sectionRef, revealed] = useScrollReveal(containerRef)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-20 sm:py-28 bg-velmora-warm-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image */}
          <div className={`relative aspect-[4/5] overflow-hidden reveal ${revealed ? 'revealed' : ''}`}>
            <img
              alt="Velmora brand story"
              data-strk-img-id="brand-story-j5k6l7"
              data-strk-img="[brand-story-subtitle] [brand-story-title] gold jewelry craftsmanship artisan"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className={`lg:pl-8 reveal reveal-delay-2 ${revealed ? 'revealed' : ''}`}>
            <h2
              id="brand-story-title"
              className="font-serif text-3xl sm:text-4xl text-velmora-charcoal tracking-wide"
            >
              Our Story
            </h2>
            <div className={`w-12 h-px bg-velmora-gold mt-4 mb-6 ${revealed ? 'line-expand' : ''}`} />
            <p
              id="brand-story-subtitle"
              className="text-base text-velmora-muted font-sans leading-relaxed mb-4"
            >
              Velmora was born from a simple belief: that luxury shouldn't be exclusive. Every piece in our collection is crafted with the same care and attention as fine jewelry — but made accessible for the modern woman.
            </p>
            <p className="text-base text-velmora-muted font-sans leading-relaxed mb-8">
              We work with skilled artisans who share our passion for detail, using 18K gold plating and hypoallergenic materials so you can wear your Velmora pieces every day, without compromise.
            </p>
            <Link
              to="/about"
              className="inline-block px-8 py-3 border border-velmora-gold text-velmora-gold text-sm tracking-wider uppercase font-sans hover:bg-velmora-gold hover:text-white transition-all duration-300"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BrandStory
