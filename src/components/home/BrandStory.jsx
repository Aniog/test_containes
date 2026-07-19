import React, { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function BrandStory() {
  const sectionRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, sectionRef.current)
  }, [])

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] overflow-hidden bg-taupe-sand/20">
            <img
              data-strk-img-id="brand-story-img-7g8h"
              data-strk-img="[brand-story-subtitle] [brand-story-title]"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="max-w-md">
            <h2 id="brand-story-title" className="font-serif text-3xl md:text-4xl text-dark font-light">
              Designed with<br />Intention
            </h2>
            <div className="w-12 h-0.5 bg-gold mt-4" />
            <p id="brand-story-subtitle" className="text-taupe text-sm md:text-base mt-6 leading-relaxed">
              Every Velmora piece is crafted from responsibly sourced materials, plated in 18K gold, 
              and finished by hand. We believe fine jewelry should be worn every day — not saved for 
              special occasions. That&apos;s why we create demi-fine pieces that are as durable as they 
              are beautiful, at prices that honor your investment in quality.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-gold text-xs uppercase tracking-[0.12em] font-medium mt-8 hover:gap-3 transition-all duration-300"
            >
              Our Story <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}