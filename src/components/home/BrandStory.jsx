import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function BrandStory() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
        {/* Image */}
        <div className="aspect-[4/3] bg-cream overflow-hidden">
          <img
            data-strk-img-id="brand-story-img-t1u2v3"
            data-strk-img="[brand-story-text] [brand-story-title] jewelry artisan crafting gold"
            data-strk-img-ratio="4x3"
            data-strk-img-width="800"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt="Velmora artisan crafting jewelry"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text */}
        <div className="py-4">
          <h2 id="brand-story-title" className="font-serif text-3xl md:text-4xl font-light text-charcoal mb-6">
            Our Story
          </h2>
          <p id="brand-story-text" className="text-muted leading-relaxed mb-6 font-sans">
            Velmora was born from a simple belief: every woman deserves jewelry that feels as precious as the moments she wears it. We bridge the gap between fine jewelry and everyday wear — crafting pieces in 18K gold that are designed to be lived in, layered, and loved for years.
          </p>
          <p className="text-muted leading-relaxed mb-8 font-sans">
            Each piece is thoughtfully designed in our studio and brought to life by skilled artisans who share our passion for quality and detail. No shortcuts, no compromises — just beautiful jewelry at an honest price.
          </p>
          <span className="inline-block text-accent text-sm uppercase tracking-widest cursor-pointer hover:text-accent-hover transition-colors border-b border-accent pb-1">
            Read More
          </span>
        </div>
      </div>
    </section>
  )
}
