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
    <section className="py-16 md:py-24 bg-ivory" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] bg-sand relative overflow-hidden">
            <img
              data-strk-img-id="brand-story-img-q7r8s9"
              data-strk-img="[brand-story-title] [brand-story-desc] gold jewelry craftsmanship artisan"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora craftsmanship"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="py-4 md:py-8">
            <h2 id="brand-story-title" className="font-serif text-3xl md:text-4xl text-charcoal leading-tight">
              A Legacy of Quiet Elegance
            </h2>
            <p id="brand-story-desc" className="mt-6 text-taupe leading-relaxed">
              Every Velmora piece begins with a vision — jewelry that whispers rather than shouts.
              We believe in the power of understated beauty, in pieces that become part of your story.
            </p>
            <p className="mt-4 text-taupe leading-relaxed">
              Our artisans hand-finish each design using 18K gold plating over premium metals,
              creating jewelry that looks and feels luxurious without the luxury price tag.
              Because you deserve to feel extraordinary every day.
            </p>
            <Link
              to="/about"
              className="inline-block mt-8 text-sm text-gold uppercase tracking-wider font-medium border-b border-gold pb-1 hover:text-gold-dark hover:border-gold-dark transition-colors no-underline"
            >
              Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
