import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const BrandStory = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-20 md:py-28 border-t border-warm-border">
      <div className="max-w-content mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[3x4] overflow-hidden">
            <img
              data-strk-img-id="brand-story-img-a1b2c3"
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
            <h2
              id="brand-story-title"
              className="font-sans text-xs tracking-section uppercase text-muted mb-4"
            >
              Our Story
            </h2>
            <p className="font-serif text-3xl md:text-4xl text-warm-dark font-light mb-6">
              Where Craft Meets Care
            </p>
            <p
              id="brand-story-subtitle"
              className="font-sans text-base text-muted font-light leading-relaxed mb-4"
            >
              Velmora was born from a simple belief: beautiful jewelry shouldn't cost a fortune, and it shouldn't compromise on quality. Every piece is crafted with 18K gold plating over a hypoallergenic base, designed to be worn every day and treasured for years.
            </p>
            <p className="font-sans text-base text-muted font-light leading-relaxed mb-8">
              From our studio to your doorstep, we oversee every detail — because the jewelry you wear should feel as considered as the choices you make.
            </p>
            <Link
              to="/about"
              className="inline-block font-sans text-xs tracking-btn uppercase border border-gold text-gold px-8 py-3 hover:bg-gold hover:text-cream transition-colors duration-200"
            >
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BrandStory
