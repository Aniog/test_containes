import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function BrandStory() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-16 md:py-24 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/3] bg-taupe overflow-hidden">
            <img
              data-strk-img-id="brand-story-img-n3o4p5"
              data-strk-img="[brand-story-desc] [brand-story-title]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora jewelry craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div>
            <h2
              id="brand-story-title"
              className="font-serif text-3xl md:text-4xl text-charcoal font-light"
            >
              Our Story
            </h2>
            <p
              id="brand-story-desc"
              className="mt-6 text-sm md:text-base text-warm leading-relaxed"
            >
              Velmora was born from a simple belief: every woman deserves jewelry that feels luxurious without the luxury price tag. Our pieces are crafted with 18K gold plating over hypoallergenic metals, designed to be worn every day and treasured for years.
            </p>
            <p className="mt-4 text-sm md:text-base text-warm leading-relaxed">
              Each design is inspired by timeless silhouettes reimagined for the modern woman — from sculptural huggies to delicate layering chains. We believe in quality over quantity, and in pieces that tell your story.
            </p>
            <a
              href="#"
              className="inline-block mt-8 text-xs uppercase tracking-product font-medium text-gold border-b border-gold pb-1 hover:text-gold-dark hover:border-gold-dark transition-colors"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
