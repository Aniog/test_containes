import { useRef, useEffect } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function BrandStory() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-20 lg:py-28 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] bg-muted overflow-hidden">
            <img
              alt="Velmora brand story"
              data-strk-img-id="brand-story-img-f4g5h6"
              data-strk-img="[brand-story-desc] [brand-story-title] gold jewelry artisan craftsmanship"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="lg:pl-8">
            <h2 id="brand-story-title" className="font-serif text-3xl lg:text-4xl font-light text-charcoal leading-tight">
              Jewelry with Intention
            </h2>
            <p id="brand-story-desc" className="mt-6 text-base text-muted-fg font-sans leading-relaxed">
              Every Velmora piece begins with a story — of craftsmanship passed through generations, 
              of materials chosen with care, of designs that honor both tradition and the modern woman.
            </p>
            <p className="mt-4 text-base text-muted-fg font-sans leading-relaxed">
              We believe luxury should be accessible without compromise. Our 18K gold-plated pieces 
              are designed to be worn every day, to become part of your story, and to be treasured 
              for years to come.
            </p>
            <a
              href="#"
              className="inline-block mt-8 text-xs uppercase tracking-widest font-sans font-medium text-gold border-b border-gold pb-1 hover:text-gold-light hover:border-gold-light transition-colors no-underline"
            >
              Our Story
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
