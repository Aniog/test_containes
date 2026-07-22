import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function BrandStory() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-16 lg:py-24 bg-cream-dark">
      <div className="container-narrow">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] rounded overflow-hidden">
            <img
              data-strk-img-id="brand-story-image"
              data-strk-img="artisan jewelry making gold workshop warm lighting craft"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora jewelry artisan at work"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="lg:pl-8">
            <p className="text-caption uppercase tracking-mega-wide text-gold mb-4">
              Our Story
            </p>
            <h2 className="font-serif text-heading-1 text-charcoal mb-6">
              Jewelry That Feels Like You
            </h2>
            <div className="space-y-4 text-body text-warm-gray leading-relaxed">
              <p>
                Velmora was born from a simple belief: every woman deserves
                jewelry that feels luxurious without the luxury price tag.
                We craft demi-fine pieces in 18K gold-plated precious metals
                — designed to be worn every day, treasured for years.
              </p>
              <p>
                Each piece in our collection is thoughtfully designed,
                responsibly sourced, and crafted with the same attention to
                detail you'd find in high-end jewelry houses. We skip the
                middleman and deliver directly to you — premium quality at
                a price that makes sense.
              </p>
              <p>
                From our studio to your jewelry box, every Velmora piece
                carries a promise of quality, beauty, and care.
              </p>
            </div>
            <Link
              to="/"
              className="inline-block mt-8 text-caption uppercase tracking-ultra-wide text-charcoal border-b border-charcoal pb-1 hover:text-gold hover:border-gold transition-colors duration-200"
            >
              Read Our Full Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
