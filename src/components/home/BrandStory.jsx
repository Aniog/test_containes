import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function BrandStory() {
  const containerRef = useRef(null)

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current)
    }
  }, [])

  return (
    <section ref={containerRef} id="about" className="py-20 md:py-28 bg-cream-50">
      <div className="max-w-[1440px] mx-auto section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative overflow-hidden aspect-[4/5] lg:aspect-[3/4]">
            <img
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Jewelry craftsmanship"
              className="absolute inset-0 w-full h-full object-cover bg-cream-300"
              data-strk-img-id="brand-story-img"
              data-strk-img="[story-text] [story-heading] jewelry craftsmanship artisan gold"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
            />
            {/* Decorative border */}
            <div className="absolute inset-4 border border-gold/20 pointer-events-none hidden lg:block" />
          </div>

          {/* Content */}
          <div className="lg:pl-8">
            <p className="caption text-gold mb-4 tracking-mega-wide">Our Story</p>
            <h2 id="story-heading" className="heading-lg text-charcoal mb-6">
              Jewelry That Tells Your Story
            </h2>
            <div className="divider-gold mb-8" />

            <p id="story-text" className="body-lg text-charcoal-500 mb-6 leading-relaxed">
              Velmora was born from a simple belief: every woman deserves jewelry that feels 
              special without the luxury markup. We craft demi-fine pieces using 18K gold plating 
              over quality base metals, creating jewelry that&apos;s both accessible and enduring.
            </p>

            <p className="body-lg text-charcoal-500 mb-8 leading-relaxed">
              Each piece in our collection is designed to be mixed, matched, layered, and loved — 
              whether you&apos;re treating yourself or gifting someone dear. Because the best jewelry 
              isn&apos;t just worn — it&apos;s treasured.
            </p>

            <Link to="/collection" className="btn-outline inline-flex">
              Discover Our Collection
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
