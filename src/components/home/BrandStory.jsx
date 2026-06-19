import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function BrandStory() {
  const containerRef = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <section ref={containerRef} className="py-16 lg:py-24 bg-off-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4x5] overflow-hidden">
            <img
              alt="Velmora brand story"
              data-strk-img-id="brand-story-img-k1l2m3"
              data-strk-img="[brand-story-text] [brand-story-heading]"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="py-4 lg:py-8">
            <h2
              id="brand-story-heading"
              className="font-serif text-3xl md:text-4xl text-charcoal tracking-wide font-light"
            >
              Our Story
            </h2>
            <div className="w-12 h-px bg-gold mt-4 mb-6" />
            <p
              id="brand-story-text"
              className="text-base text-taupe font-sans leading-relaxed mb-4"
            >
              Velmora was born from a simple belief: that fine-quality jewelry should be accessible, not exclusive. Every piece is crafted with 18K gold plating over sterling silver, designed to transition effortlessly from morning coffee to evening cocktails.
            </p>
            <p className="text-base text-taupe font-sans leading-relaxed mb-8">
              We work with artisan jewelers who share our commitment to quality and sustainability, ensuring each piece is as kind to the planet as it is beautiful on you.
            </p>
            <Link
              to="/about"
              className="inline-block border border-gold text-gold text-xs tracking-widest uppercase font-sans font-medium px-10 py-3.5 hover:bg-gold hover:text-white transition-all duration-300"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
