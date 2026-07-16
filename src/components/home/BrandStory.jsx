import { useRef, useEffect } from 'react'
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
    <section ref={containerRef} id="about" className="py-20 lg:py-28 bg-cream-200/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] bg-cream-300 overflow-hidden">
              <img
                data-strk-img-id="brand-story-jewelry"
                data-strk-img="artisan hands crafting gold jewelry workshop warm light"
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Velmora artisan crafting jewelry"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative accent */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-gold/30 hidden lg:block" />
          </div>

          {/* Text */}
          <div className="lg:pl-4">
            <p className="font-sans text-xs tracking-widest-2xl uppercase text-gold mb-4">
              Our Story
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-charcoal leading-tight mb-6">
              Jewelry That Feels<br />Like You
            </h2>
            <div className="w-12 h-px bg-gold mb-6" />
            <p className="text-charcoal-500 leading-relaxed mb-4">
              Velmora was born from a simple belief: every woman deserves jewelry that makes her feel extraordinary — without the extraordinary price tag.
            </p>
            <p className="text-charcoal-500 leading-relaxed mb-8">
              Each piece in our collection is thoughtfully designed, crafted from premium 18K gold-plated materials, and made to be worn every day. We believe in quiet luxury — jewelry that whispers rather than shouts.
            </p>
            <Link to="/shop" className="btn-outline inline-block">
              Discover More
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
