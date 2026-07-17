import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '../../strk-img-config.json'

export default function BrandStorySection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-[var(--velmora-bg-alt)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] bg-[var(--velmora-border)] overflow-hidden">
            <img
              data-strk-img-id="brand-story-img-d4e5f6"
              data-strk-img="[brand-story-title] [brand-story-subtitle] jewelry artisan craftsmanship"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text Content */}
          <div className="md:pl-8">
            <p id="brand-story-subtitle" className="velmora-label text-[var(--velmora-accent)] mb-4">
              Our Philosophy
            </p>
            <h2 id="brand-story-title" className="velmora-heading text-3xl md:text-4xl lg:text-5xl mb-6">
              Where Elegance Meets Intention
            </h2>
            <div className="velmora-divider-thin w-16 mb-6" />
            <p className="text-[var(--velmora-text-muted)] leading-relaxed mb-6">
              At Velmora, we believe that fine jewelry should be accessible without compromise. Each piece is thoughtfully designed in our studio, crafted with 18K gold plating over recycled brass, and finished with meticulous attention to detail.
            </p>
            <p className="text-[var(--velmora-text-muted)] leading-relaxed mb-8">
              Our demi-fine collection bridges the gap between everyday wear and special occasion pieces — jewelry that transitions seamlessly from morning meetings to evening gatherings, from casual weekends to milestone celebrations.
            </p>
            <Link to="/about" className="velmora-btn-outline">
              Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
