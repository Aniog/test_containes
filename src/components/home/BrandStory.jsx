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
    <section className="py-16 md:py-24" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] bg-[#E5DDD3] overflow-hidden">
            <img
              data-strk-img-id="brand-story-img"
              data-strk-img="[story-heading] [story-subtitle]"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora craftsperson at work"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="max-w-lg">
            <p className="text-gold text-xs tracking-widest uppercase font-sans mb-3" id="story-subtitle">
              Our Legacy
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-[#1A1A1A] mb-6" id="story-heading">
              Crafted with Intention, Designed to Last
            </h2>
            <div className="w-12 h-px bg-gold mb-6" />
            <p className="text-taupe leading-relaxed mb-8 font-sans">
              Every piece from Velmora is thoughtfully designed in our studio and crafted by skilled artisans. 
              We believe fine jewelry should be accessible without compromising quality — which is why each 
              piece is plated in 18K gold and rigorously tested for lasting wear.
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm font-sans font-medium tracking-wider uppercase text-[#1A1A1A] hover:text-gold transition-colors duration-300 group"
            >
              Our Story
              <span className="inline-block w-6 h-px bg-[#1A1A1A] group-hover:bg-gold transition-colors duration-300" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}