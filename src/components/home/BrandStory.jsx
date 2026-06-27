import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const BrandStory = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-16 lg:py-24 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] bg-accent-light rounded-sm overflow-hidden relative">
            <div
              data-strk-bg-id="brand-story-img-4c7e2d"
              data-strk-bg="[brand-story-heading] jewelry artisan crafting gold"
              data-strk-bg-ratio="4x3"
              data-strk-bg-width="800"
              className="absolute inset-0"
              style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
            />
          </div>

          {/* Text */}
          <div className="lg:pl-8">
            <h2
              id="brand-story-heading"
              className="font-serif text-3xl lg:text-4xl text-text"
            >
              Jewelry with Intention
            </h2>
            <p className="mt-6 text-text-muted leading-relaxed">
              Every Velmora piece begins as a sketch inspired by architecture, nature, and the quiet confidence of the women who wear them. We believe luxury should be accessible — that you shouldn't have to choose between quality and price.
            </p>
            <p className="mt-4 text-text-muted leading-relaxed">
              Our demi-fine collection is crafted with 18K gold plating over hypoallergenic brass and sterling silver, designed to be worn every day and treasured for years.
            </p>
            <Link
              to="/about"
              className="inline-block mt-8 text-sm font-medium text-accent uppercase tracking-product hover:underline underline-offset-4"
            >
              Our Story →
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BrandStory
