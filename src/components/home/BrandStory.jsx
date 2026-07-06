import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function BrandStory() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} id="story" className="bg-ivory border-t border-divider">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image */}
          <div className="relative aspect-[4/5] md:aspect-auto md:min-h-[600px] overflow-hidden bg-parchment">
            <img
              data-strk-img-id="story-img-main-d4e5f6"
              data-strk-img="[story-text] [story-headline] fine jewelry artisan craftsmanship"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora brand story"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="flex items-center px-8 md:px-16 lg:px-20 py-16 md:py-20">
            <div className="max-w-md">
              <p className="font-sans text-xs tracking-widest uppercase text-champagne font-medium mb-5">
                Our Story
              </p>
              <h2
                id="story-headline"
                className="font-serif text-4xl md:text-5xl text-charcoal font-light leading-tight"
              >
                Made with intention,<br />
                <em className="italic">worn with love</em>
              </h2>
              <p
                id="story-text"
                className="font-sans text-sm text-warm-stone mt-6 leading-relaxed"
              >
                Velmora was born from a simple belief: that beautiful jewelry shouldn't cost a fortune, but it should feel like it does. We design every piece with the modern woman in mind — someone who values quality, wears jewelry daily, and wants to feel effortlessly put-together.
              </p>
              <p className="font-sans text-sm text-warm-stone mt-4 leading-relaxed">
                Each piece is crafted from 18K gold-plated brass with hypoallergenic settings, designed to last through every season of your life.
              </p>
              <Link
                to="/"
                className="inline-flex items-center gap-2 mt-8 font-sans text-xs tracking-widest uppercase font-semibold text-charcoal border-b border-charcoal pb-0.5 hover:text-champagne hover:border-champagne transition-colors duration-300"
              >
                Read Our Story
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
