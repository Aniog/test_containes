import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function BrandStory() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="story" ref={containerRef} className="bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Image */}
          <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[560px] overflow-hidden">
            <img
              data-strk-img-id="story-img-velmora-x1y2z3"
              data-strk-img="[story-text] [story-heading] fine jewelry artisan craftsmanship gold"
              data-strk-img-ratio="4x3"
              data-strk-img-width="900"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora brand story"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="flex items-center px-8 py-16 lg:px-16 lg:py-20">
            <div className="max-w-md">
              <p className="font-manrope text-xs tracking-widest uppercase text-gold-dust mb-5">
                Our Story
              </p>
              <h2
                id="story-heading"
                className="font-cormorant text-4xl lg:text-5xl font-light text-ink leading-tight mb-6"
              >
                Made with intention,<br />
                <em className="italic">worn with love</em>
              </h2>
              <p
                id="story-text"
                className="font-manrope text-sm text-muted leading-relaxed mb-4"
              >
                Velmora was born from a simple belief: that beautiful jewelry shouldn't cost a fortune, but it should feel like it does. We design each piece with the modern woman in mind — versatile, enduring, and quietly luxurious.
              </p>
              <p className="font-manrope text-sm text-muted leading-relaxed mb-8">
                Every piece is crafted from 18K gold plated brass with hypoallergenic posts, designed to be worn every day and treasured for years.
              </p>
              <Link
                to="/"
                className="inline-flex items-center gap-2 font-manrope text-xs tracking-widest uppercase text-ink hover:text-gold-dust transition-colors duration-300 group border-b border-ink/20 hover:border-gold-dust pb-0.5"
              >
                Our Story
                <ArrowRight size={14} strokeWidth={1.5} className="group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
