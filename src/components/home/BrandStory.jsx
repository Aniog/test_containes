import React, { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function BrandStory() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="about" ref={containerRef} className="py-16 md:py-24 px-6 md:px-12 lg:px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
        {/* Image */}
        <div className="aspect-[4/3] bg-ivory border border-border overflow-hidden">
          <img
            data-strk-img-id="brand-story-img-z1a2b3"
            data-strk-img="[brand-story-heading] [brand-story-text]"
            data-strk-img-ratio="4x3"
            data-strk-img-width="800"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt="Velmora craftsmanship"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text */}
        <div>
          <p className="text-xs uppercase tracking-widest text-gold font-sans font-medium mb-4">Our Story</p>
          <h2 id="brand-story-heading" className="font-serif text-3xl md:text-4xl text-charcoal font-light leading-snug">
            Jewelry That Tells Your Story
          </h2>
          <p id="brand-story-text" className="mt-6 text-base text-stone font-sans leading-relaxed">
            Born from a belief that luxury should be accessible, Velmora creates demi-fine jewelry 
            that bridges the gap between costume and fine. Each piece is thoughtfully designed in our 
            studio, crafted with 18K gold plating over hypoallergenic metals, and finished by hand.
          </p>
          <p className="mt-4 text-base text-stone font-sans leading-relaxed">
            We believe in pieces that become part of your daily ritual — jewelry you reach for 
            every morning, that travels with you, that marks the quiet moments and the celebrations alike.
          </p>
          <button className="mt-8 border border-gold text-gold hover:bg-gold hover:text-cream transition-colors duration-300 px-8 py-3 text-xs uppercase tracking-widest font-sans font-medium bg-transparent cursor-pointer rounded-none">
            Read More
          </button>
        </div>
      </div>
    </section>
  )
}
