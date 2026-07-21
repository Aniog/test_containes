import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function BrandStory() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-20 md:py-28 bg-muted">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] overflow-hidden">
            <img
              data-strk-img-id="brand-story-img-r7s8"
              data-strk-img="[brand-story-text] [brand-story-heading]"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="py-4 md:py-8">
            <h2 id="brand-story-heading" className="font-serif text-3xl md:text-4xl font-light text-charcoal mb-6">
              Our Story
            </h2>
            <p id="brand-story-text" className="text-base text-muted-fg leading-relaxed mb-6">
              Velmora was born from a simple belief: every woman deserves jewelry that feels luxurious without the luxury price tag. Our pieces are crafted with 18K gold plating over hypoallergenic metals, designed to be worn every day and treasured for years.
            </p>
            <p className="text-base text-muted-fg leading-relaxed mb-8">
              From our studio, each design is thoughtfully created to balance timeless elegance with modern sensibility. We believe in slow fashion — fewer, better pieces that tell your story.
            </p>
            <a
              href="#"
              className="inline-block text-sm font-sans font-medium text-gold tracking-[0.1em] uppercase border-b border-gold pb-1 hover:text-gold-light hover:border-gold-light transition-colors no-underline"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
