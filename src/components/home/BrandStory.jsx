import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function BrandStory() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} id="about" className="py-20 md:py-28 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/3] overflow-hidden">
            <img
              data-strk-img-id="brand-story-img-b1c2d3"
              data-strk-img="[brand-story-desc] [brand-story-title] jewelry artisan crafting gold"
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div>
            <h2 id="brand-story-title" className="font-serif text-3xl md:text-4xl font-light text-charcoal">Our Story</h2>
            <p id="brand-story-desc" className="mt-6 text-base text-muted leading-relaxed">
              Velmora was born from a simple belief: every woman deserves jewelry that feels luxurious without the luxury price tag. Our pieces are designed in-house and crafted with 18K gold plating over hypoallergenic metals — beautiful enough for special moments, durable enough for every day.
            </p>
            <p className="mt-4 text-base text-muted leading-relaxed">
              We source responsibly, design intentionally, and ship directly to you — no middlemen, no markups. Just thoughtfully made jewelry that tells your story.
            </p>
            <button className="mt-8 border border-gold text-gold text-sm font-semibold uppercase tracking-[0.15em] px-8 py-3 bg-transparent hover:bg-gold hover:text-white transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
