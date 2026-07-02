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
    <section ref={containerRef} className="py-16 md:py-24 bg-brand-ivory">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] bg-brand-sand overflow-hidden">
            <div
              className="absolute inset-0"
              data-strk-bg-id="brand-story-img-k3l4m5"
              data-strk-bg="[brand-story-title] [brand-story-desc] jewelry artisan crafting gold"
              data-strk-bg-ratio="3x4"
              data-strk-bg-width="800"
            />
          </div>

          {/* Text */}
          <div className="py-4 md:py-8">
            <span className="text-xs font-sans font-medium tracking-wide-xl uppercase text-brand-gold">
              Our Story
            </span>
            <h2
              id="brand-story-title"
              className="font-serif text-3xl md:text-5xl font-light text-brand-charcoal mt-4 leading-tight"
            >
              Where Craft Meets Intention
            </h2>
            <p
              id="brand-story-desc"
              className="text-sm md:text-base text-brand-muted mt-6 leading-relaxed font-light"
            >
              Every Velmora piece begins with a sketch and a story. We believe jewelry should be more than decoration — it should be a daily reminder of your own quiet strength. Our demi-fine collections are designed in-house, crafted with 18K gold plating over hypoallergenic metals, and finished by hand.
            </p>
            <p className="text-sm md:text-base text-brand-muted mt-4 leading-relaxed font-light">
              We cut out the middlemen so you get heirloom-quality pieces at a fraction of traditional luxury prices. No compromises, no markups — just beautiful jewelry made with care.
            </p>
            <Link
              to="/about"
              className="inline-block mt-8 border-b border-brand-charcoal text-brand-charcoal text-sm font-sans font-medium tracking-wide pb-1 hover:border-brand-gold hover:text-brand-gold transition-colors"
            >
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
