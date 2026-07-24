import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function BrandStory() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} id="about" className="py-20 md:py-28 bg-warm-black">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[3/4] md:aspect-[4/5] bg-stone-700 overflow-hidden">
            <img
              data-strk-img-id="brand-story-img-a1b2c3"
              data-strk-img="[brand-story-subtitle] [brand-story-title]"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="py-4 md:py-0">
            <h2
              id="brand-story-title"
              className="font-serif text-3xl md:text-4xl tracking-wide-15 uppercase text-warm-cream"
            >
              Our Story
            </h2>
            <div className="h-px bg-gold w-16 mt-6 mb-6" />
            <p
              id="brand-story-subtitle"
              className="font-sans text-base md:text-lg text-warm-cream/80 leading-relaxed"
            >
              Velmora was born from a simple belief: that beautiful jewelry shouldn't cost a fortune, and it shouldn't fall apart after a week. We design demi-fine pieces in 18K gold plate — jewelry you can wear every day, that looks like it cost ten times what it did.
            </p>
            <p className="font-sans text-base md:text-lg text-warm-cream/80 leading-relaxed mt-4">
              Every piece is hypoallergenic, nickel-free, and crafted to last. From our studio to your doorstep — no middlemen, no markup, just honest craft.
            </p>
            <Link
              to="/#about"
              className="inline-block mt-8 border border-gold text-gold font-sans text-sm tracking-wide-15 uppercase px-8 py-3 hover:bg-gold hover:text-warm-black transition-colors duration-300"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
