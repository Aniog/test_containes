import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function BrandStory() {
  const containerRef = useRef(null)

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current)
    }
  }, [])

  return (
    <section ref={containerRef} id="about" className="py-16 md:py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative overflow-hidden aspect-[3/4] lg:aspect-[4/5]">
            <img
              data-strk-img-id="brand-story-img-5t6y7u"
              data-strk-img="[brand-story-text] [brand-story-title] jewelry artisan craftsmanship gold"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora artisan craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="lg:pl-8">
            <p className="text-xs font-sans uppercase tracking-[0.25em] text-gold mb-4">Our Story</p>
            <h2 id="brand-story-title" className="font-serif text-3xl md:text-4xl lg:text-5xl text-charcoal mb-6 leading-[1.15]">
              Jewelry That Feels Like You
            </h2>
            <div className="w-12 h-px bg-gold mb-6" />
            <p id="brand-story-text" className="text-warm-gray text-sm md:text-base leading-relaxed mb-6">
              Velmora was born from a simple belief: every woman deserves jewelry that makes her feel 
              extraordinary — without the extraordinary price tag. We craft demi-fine pieces in 18K gold, 
              designed to be worn every day and treasured for years.
            </p>
            <p className="text-warm-gray text-sm md:text-base leading-relaxed mb-8">
              Each piece is thoughtfully designed, responsibly sourced, and crafted with the care 
              you'd expect from fine jewelry — because we believe luxury should be lived in, not locked away.
            </p>
            <Link to="/collection" className="inline-block">
              <button className="btn-outline">
                Discover More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
