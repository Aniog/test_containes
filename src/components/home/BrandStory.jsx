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
          <div className="aspect-[4/3] bg-brand-sand overflow-hidden">
            <img
              alt="Velmora brand story"
              data-strk-img-id="brand-story-img-r1s2t3"
              data-strk-img="[brand-story-text] [brand-story-heading]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div>
            <h2 id="brand-story-heading" className="font-serif text-3xl md:text-4xl text-brand-charcoal font-light leading-snug">
              Jewelry That Tells Your Story
            </h2>
            <p id="brand-story-text" className="mt-6 text-brand-slate text-sm md:text-base leading-relaxed font-sans">
              At Velmora, we believe luxury should be accessible. Each piece is thoughtfully designed in our studio, crafted with 18K gold plating over hypoallergenic metals, and made to be worn every day. We skip the traditional retail markup so you get fine-jewelry quality at a fraction of the price.
            </p>
            <p className="mt-4 text-brand-slate text-sm md:text-base leading-relaxed font-sans">
              From our hands to yours — designed to be treasured, gifted, and passed along.
            </p>
            <Link
              to="/about"
              className="inline-block mt-8 border-b border-brand-charcoal text-brand-charcoal text-xs tracking-widest uppercase font-sans font-medium pb-1 hover:border-brand-gold hover:text-brand-gold transition-colors duration-300"
            >
              Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
