import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const BrandStory = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-20 md:py-28 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] bg-surface relative overflow-hidden">
            <img
              data-strk-img-id="brand-story-img-g1h2i3"
              data-strk-img="[brand-story-title] [brand-story-desc] artisan crafting gold jewelry"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Our Story"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="py-4">
            <p className="text-xs font-sans font-medium tracking-widest uppercase text-gold mb-4">
              Our Story
            </p>
            <h2
              id="brand-story-title"
              className="font-serif text-3xl md:text-4xl text-charcoal font-light leading-snug"
            >
              Where Timeless Craft Meets Modern Elegance
            </h2>
            <p
              id="brand-story-desc"
              className="mt-6 text-base text-muted font-sans leading-relaxed"
            >
              Born from a love of understated luxury, Velmora creates demi-fine jewelry 
              that bridges the gap between costume and fine. Each piece is thoughtfully 
              designed and meticulously crafted with 18K gold plating over hypoallergenic 
              metals — beautiful enough for special moments, durable enough for every day.
            </p>
            <p className="mt-4 text-base text-muted font-sans leading-relaxed">
              We believe luxury should be accessible. That's why we work directly with 
              skilled artisans, cutting out the middleman to bring you exceptional quality 
              at honest prices.
            </p>
            <Link
              to="/about"
              className="mt-8 inline-block text-sm font-sans font-medium tracking-wider uppercase text-gold no-underline border-b border-gold pb-1 hover:text-gold-light hover:border-gold-light transition-colors"
            >
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BrandStory
