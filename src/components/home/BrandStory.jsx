import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function BrandStory() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="about" ref={containerRef} className="py-16 md:py-24 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/3] bg-muted overflow-hidden">
            <img
              alt="Velmora brand story"
              data-strk-img-id="brand-story-img-b1c2d3"
              data-strk-img="[brand-story-desc] [brand-story-heading] artisan crafting gold jewelry"
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div>
            <h2 id="brand-story-heading" className="font-serif text-3xl md:text-4xl text-charcoal leading-snug">
              Where Craft Meets Intention
            </h2>
            <p id="brand-story-desc" className="mt-6 text-base text-muted-fg leading-relaxed">
              Every Velmora piece begins as a sketch inspired by architecture, nature, and the quiet confidence of the women who wear them. We bridge the gap between fine jewelry and everyday accessories — creating pieces that feel precious without the precious price tag.
            </p>
            <p className="mt-4 text-base text-muted-fg leading-relaxed">
              Our commitment to quality means 18K gold plating over solid brass or sterling silver, hand-set stones, and finishes designed to last. Because you deserve jewelry that keeps up with your life.
            </p>
            <span className="inline-block mt-8 text-sm font-sans font-medium text-gold uppercase tracking-widest cursor-pointer hover:text-gold-light transition-colors">
              Our Story →
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
