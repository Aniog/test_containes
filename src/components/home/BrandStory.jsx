import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function BrandStory() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="about" ref={containerRef} className="py-20 md:py-28 bg-muted">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] overflow-hidden rounded-sm">
            <img
              data-strk-img-id="brand-story-img-t1u2v3"
              data-strk-img="[brand-story-text] [brand-story-heading] artisan crafting gold jewelry"
              data-strk-img-ratio="3x4"
              data-strk-img-width="700"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora artisan crafting jewelry"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div>
            <h2 id="brand-story-heading" className="font-serif text-3xl md:text-4xl font-medium text-charcoal leading-tight">
              Jewelry with Intention
            </h2>
            <p id="brand-story-text" className="mt-6 text-base text-muted-fg font-sans leading-relaxed">
              At Velmora, we believe luxury should be accessible. Each piece is thoughtfully designed in our studio, 
              crafted with 18K gold plating over hypoallergenic metals, and finished by hand. We create jewelry 
              for the woman who values quality, subtlety, and timeless design over fleeting trends.
            </p>
            <p className="mt-4 text-base text-muted-fg font-sans leading-relaxed">
              From our signature ear cuffs to our delicate layering necklaces, every Velmora piece is made to be 
              worn every day and treasured for years to come.
            </p>
            <button className="mt-8 px-6 py-3 border border-gold text-gold font-sans text-sm font-semibold uppercase tracking-widest hover:bg-gold hover:text-white transition-all duration-300 bg-transparent rounded-sm">
              Our Story
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
