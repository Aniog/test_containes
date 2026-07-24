import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { useFadeIn } from '@/lib/useFadeIn'

const BrandStory = () => {
  const containerRef = useRef(null)
  const { ref: fadeRef, visible } = useFadeIn(0.1)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-16 md:py-24 lg:py-32 border-t border-velmora-hairline">
      <div ref={fadeRef} className={`max-w-7xl mx-auto px-4 md:px-6 lg:px-8 transition-all duration-1000 ease-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="aspect-[3/4] overflow-hidden">
            <img
              data-strk-img-id="brand-story-img-a1b2c3"
              data-strk-img="[brand-story-text] [brand-story-heading] artisan crafting gold jewelry"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora artisan crafting jewelry"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="md:pl-8">
            <h2 id="brand-story-heading" className="font-serif text-2xl md:text-3xl tracking-[0.05em] text-velmora-dark">
              Where Artistry Meets Everyday
            </h2>
            <p id="brand-story-text" className="font-sans text-sm md:text-base text-velmora-textSecondary mt-4 md:mt-6 leading-relaxed">
              Velmora was born from a simple belief: fine jewelry shouldn't be reserved for special occasions. 
              Each piece is crafted with 18K gold plating over sterling silver, designed to move with you 
              from morning coffee to evening dinner — and everywhere in between.
            </p>
            <p className="font-sans text-sm md:text-base text-velmora-textSecondary mt-4 leading-relaxed">
              Our artisans draw from generations of craftsmanship, reimagining classic forms for the modern woman. 
              Every detail is intentional. Every finish is considered. Every piece is made to be treasured.
            </p>
            <Link
              to="/about"
              className="inline-block mt-6 md:mt-8 font-sans text-sm tracking-[0.15em] uppercase border border-velmora-gold text-velmora-gold px-6 py-2 hover:bg-velmora-gold hover:text-velmora-dark transition-all duration-300"
            >
              Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BrandStory
