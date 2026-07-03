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
    <div ref={containerRef} className="bg-cream min-h-screen pt-24 md:pt-28">
      <div className="max-w-content mx-auto px-5 md:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="aspect-[4/5] overflow-hidden">
            <img
              data-strk-img-id="about-page-img-m9n0"
              data-strk-img="[about-page-subtitle] [about-page-title]"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="About Velmora"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h1
              id="about-page-title"
              className="font-serif text-3xl md:text-5xl text-charcoal tracking-wide"
            >
              Our Story
            </h1>
            <div className="w-12 h-px bg-gold mt-4 mb-8" />
            <p
              id="about-page-subtitle"
              className="text-stone-600 leading-relaxed mb-6"
            >
              Velmora was founded with a singular vision: to make fine jewelry accessible without 
              compromising on quality or design. We believe every woman deserves to wear pieces that 
              feel luxurious, look timeless, and last through life's moments.
            </p>
            <p className="text-stone-600 leading-relaxed mb-6">
              Each piece in our collection is crafted with 18K gold plating over hypoallergenic 
              materials, ensuring comfort and durability. We work directly with artisans who share 
              our commitment to excellence, cutting out middlemen so we can offer premium quality 
              at honest prices.
            </p>
            <p className="text-stone-600 leading-relaxed mb-8">
              From the initial sketch to the final polish, every Velmora piece undergoes rigorous 
              quality checks. We're not just selling jewelry — we're creating heirlooms meant to be 
              treasured for years to come.
            </p>
            <Link
              to="/shop"
              className="inline-block bg-gold text-white text-xs tracking-nav uppercase font-semibold px-10 py-4 hover:bg-gold-dark transition-colors duration-300"
            >
              Explore the Collection
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
