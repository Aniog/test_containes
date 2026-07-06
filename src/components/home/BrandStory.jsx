import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function BrandStory() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-cream-dark">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              data-strk-img-id="brand-story-img-g1h2i3"
              data-strk-img="[brand-story-title] [brand-story-text] jewelry craftsmanship"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Our story"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="py-4 md:py-8">
            <p className="text-xs text-gold tracking-widest uppercase mb-4">Our Story</p>
            <h2 id="brand-story-title" className="font-serif text-3xl md:text-4xl text-charcoal leading-tight">
              Where Timeless Craft Meets Modern Elegance
            </h2>
            <p id="brand-story-text" className="mt-6 text-sm text-stone leading-relaxed font-light">
              Velmora was born from a simple belief: every woman deserves jewelry that feels luxurious without the luxury price tag. Each piece is thoughtfully designed in our studio, crafted with 18K gold plating over hypoallergenic metals, and finished by hand.
            </p>
            <p className="mt-4 text-sm text-stone leading-relaxed font-light">
              We source responsibly, design intentionally, and create pieces meant to be worn every day — from morning coffee to evening out. This is jewelry that becomes part of your story.
            </p>
            <button className="mt-8 border border-charcoal text-charcoal px-6 py-2.5 text-xs font-medium tracking-wider hover:bg-charcoal hover:text-cream transition-all duration-300">
              LEARN MORE
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
