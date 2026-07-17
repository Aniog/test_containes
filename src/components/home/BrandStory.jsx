import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function BrandStory() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] bg-sand overflow-hidden">
            <img
              data-strk-img-id="brand-story-img-q1w2e3"
              data-strk-img="[brand-story-desc] [brand-story-title] artisan crafting gold jewelry workshop"
              data-strk-img-ratio="3x4"
              data-strk-img-width="700"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora artisan crafting jewelry"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="py-4 md:py-8">
            <span className="text-xs uppercase tracking-widest text-gold font-medium">Our Story</span>
            <h2 id="brand-story-title" className="font-serif text-3xl md:text-4xl text-charcoal mt-4">
              Where Craft Meets Intention
            </h2>
            <p id="brand-story-desc" className="mt-6 text-stone leading-relaxed">
              Velmora was born from a simple belief: that beautiful jewelry shouldn't require a luxury price tag. 
              Each piece is thoughtfully designed in our London studio and crafted by skilled artisans using 
              ethically sourced materials. We use 18K gold plating over recycled brass and sterling silver, 
              creating pieces that look and feel precious — because they are.
            </p>
            <p className="mt-4 text-stone leading-relaxed">
              Our collections are designed to be layered, stacked, and worn every day. From your morning 
              coffee to your evening out, Velmora moves with you.
            </p>
            <button className="mt-8 border border-gold text-gold px-8 py-3 text-sm uppercase tracking-widest font-medium hover:bg-gold hover:text-white transition-colors">
              Read More
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
