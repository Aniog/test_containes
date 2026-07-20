import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function BrandStory() {
  const containerRef = useRef(null)

  useEffect(() => {
    const raf = requestAnimationFrame(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current)
      }
    })
    return () => cancelAnimationFrame(raf)
  }, [])

  return (
    <section ref={containerRef} id="story" className="py-16 md:py-24 bg-cream-50">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-16 xl:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] bg-stone-100 overflow-hidden">
            <img
              data-strk-img-id="brand-story-main"
              data-strk-img="gold jewelry artisan workshop hands crafting warm lighting editorial"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
              alt="Velmora artisan crafting gold jewelry"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="lg:pl-8">
            <p className="font-sans text-xs tracking-super-wide uppercase text-gold-500 mb-4">
              Our Story
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-charcoal-800 mb-6 leading-[1.15]">
              Jewelry That Tells{' '}
              <span className="italic text-gold-600">Your Story</span>
            </h2>
            <div className="w-12 h-px bg-gold-500 mb-6" />
            <p className="font-sans text-sm md:text-base text-charcoal-500 leading-relaxed mb-4">
              Velmora was born from a simple belief: every woman deserves jewelry that feels as
              special as it looks. We create demi-fine pieces that bridge the gap between
              costume jewelry and fine jewelry — accessible luxury without compromise.
            </p>
            <p className="font-sans text-sm md:text-base text-charcoal-500 leading-relaxed mb-8">
              Each piece is crafted in 18K gold plating over sterling silver, designed to last
              through everyday wear while maintaining that first-day sparkle. We are
              committed to ethical sourcing, hypoallergenic materials, and creating pieces
              that become part of your story.
            </p>
            <a href="/shop" className="btn-outline inline-block">
              Explore the Collection
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
