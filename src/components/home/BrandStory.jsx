import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function BrandStory() {
  const containerRef = useRef(null)

  useEffect(() => {
    if (containerRef.current) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    }
  }, [])

  return (
    <section ref={containerRef} className="section-padding bg-background">
      <div className="container-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] md:aspect-[3/4] bg-secondary">
            <img
              data-strk-img-id="brand-story-img"
              data-strk-img="[brand-story-text] [our-story-title]"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="space-y-4 md:space-y-6">
            <h2 id="our-story-title" className="serif-heading text-2xl sm:text-3xl md:text-4xl">
              Our Story
            </h2>
            <p id="brand-story-text" className="text-sm md:text-base text-foreground/80 leading-relaxed">
              Velmora was born from a simple belief: that beautiful jewelry shouldn't require a luxury budget. 
              We craft demi-fine pieces using 18K gold plating over sterling silver, creating jewelry that 
              feels luxurious without the luxury markup.
            </p>
            <p className="text-sm md:text-base text-foreground/80 leading-relaxed">
              Each piece is designed in our studio with attention to the details that matter — the weight 
              of an earring, the drape of a chain, the way light catches a crystal. We believe jewelry 
              should be worn, not stored away.
            </p>
            <Link to="/about" className="btn-outline inline-block text-xs md:text-sm">
              Read More
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
