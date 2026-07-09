import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function BrandStorySection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="bg-velmora-cream">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Image */}
          <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[560px] overflow-hidden">
            <img
              data-strk-img-id="brand-story-img-c3d4e5"
              data-strk-img="[brand-story-text] [brand-story-heading] fine jewelry artisan craftsmanship"
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
              <p className="font-manrope text-[10px] tracking-[0.3em] uppercase text-velmora-gold mb-5">
                Our Story
              </p>
              <h2
                id="brand-story-heading"
                className="font-cormorant text-4xl lg:text-5xl font-light text-velmora-text leading-[1.1] mb-6"
              >
                Made with intention,<br />
                <em className="italic">worn with love</em>
              </h2>
              <div className="w-10 h-px bg-velmora-gold mb-8" />
              <p
                id="brand-story-text"
                className="font-manrope text-sm text-velmora-muted leading-relaxed mb-4"
              >
                Velmora was born from a simple belief: that beautiful jewelry shouldn't be reserved for special occasions. We design demi-fine pieces that are crafted to last, priced to be accessible, and made to be worn every single day.
              </p>
              <p className="font-manrope text-sm text-velmora-muted leading-relaxed mb-10">
                Each piece is thoughtfully designed in our studio and finished with 18K gold plating over hypoallergenic bases — because you deserve jewelry that loves your skin back.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 font-manrope text-[11px] tracking-[0.18em] uppercase text-velmora-text border-b border-velmora-text pb-0.5 hover:text-velmora-gold hover:border-velmora-gold transition-colors"
              >
                Read Our Story
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
