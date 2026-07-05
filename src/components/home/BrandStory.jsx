import { useRef, useEffect } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function BrandStory() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="section-padding">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
        {/* Image */}
        <div className="aspect-[4/5] bg-brand-ivory overflow-hidden">
          <img
            alt="Jewelry artisan crafting gold pieces"
            data-strk-img-id="brand-story-img-c8d9e0"
            data-strk-img="[brand-story-title] [brand-story-desc] jewelry craftsmanship"
            data-strk-img-ratio="3x4"
            data-strk-img-width="800"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text */}
        <div>
          <h2 id="brand-story-title" className="font-serif text-3xl md:text-4xl text-brand-charcoal">
            Our Story
          </h2>
          <p id="brand-story-desc" className="mt-6 font-sans text-base text-brand-muted leading-relaxed">
            Velmora was born from a simple belief: every woman deserves jewelry that feels as special as she is — without the luxury markup. We work directly with master artisans to create demi-fine pieces in 18K gold that are designed to last, meant to be layered, and priced to be collected.
          </p>
          <p className="mt-4 font-sans text-base text-brand-muted leading-relaxed">
            Each piece is thoughtfully designed in our studio, hand-finished with care, and delivered in sustainable packaging. Because beautiful things should be made beautifully.
          </p>
          <button className="btn-outline mt-8">
            Learn More
          </button>
        </div>
      </div>
    </section>
  )
}
