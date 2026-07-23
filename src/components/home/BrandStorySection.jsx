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
    <section id="about" ref={containerRef} className="bg-velmora-cream">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image */}
          <div className="relative overflow-hidden" style={{ minHeight: '480px' }}>
            <img
              data-strk-img-id="brand-story-img-c3d4e5"
              data-strk-img="[brand-story-text] [brand-story-heading]"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora brand story — artisan crafting gold jewelry"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center px-8 md:px-16 py-16 md:py-24">
            <p className="font-manrope text-xs uppercase tracking-widest text-velmora-gold mb-4">
              Our Story
            </p>
            <h2
              id="brand-story-heading"
              className="font-cormorant text-3xl md:text-5xl font-light text-velmora-text leading-tight"
            >
              Made with intention.<br />
              <em className="italic">Worn with love.</em>
            </h2>
            <div className="h-px bg-velmora-border my-6 w-16" />
            <p
              id="brand-story-text"
              className="font-manrope text-sm text-velmora-muted leading-relaxed"
            >
              Velmora was born from a simple belief: that beautiful jewelry shouldn't cost a fortune or compromise on quality. We design each piece with the modern woman in mind — someone who moves through the world with intention, who values craftsmanship, and who deserves to feel extraordinary every day.
            </p>
            <p className="font-manrope text-sm text-velmora-muted leading-relaxed mt-4">
              Every Velmora piece is crafted from 18K gold plated brass, finished by hand, and tested to be hypoallergenic. We believe in slow design, ethical sourcing, and jewelry that tells a story.
            </p>
            <Link
              to="/"
              className="mt-8 inline-flex items-center gap-2 font-manrope text-xs uppercase tracking-widest text-velmora-text hover:text-velmora-gold transition-colors duration-200 self-start"
            >
              Read Our Full Story
              <span className="text-velmora-gold">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
