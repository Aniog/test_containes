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
    <section ref={containerRef} className="bg-velmora-white">
      <div className="flex flex-col md:flex-row">
        {/* Image */}
        <div className="md:w-1/2 h-[400px] md:h-[600px] bg-velmora-sand relative overflow-hidden">
          <img
            alt="Velmora craftsmanship"
            data-strk-img-id="brand-story-img"
            data-strk-img="gold jewelry craftsmanship workshop editorial"
            data-strk-img-ratio="4x5"
            data-strk-img-width="1000"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text */}
        <div className="md:w-1/2 flex items-center p-10 md:p-20 lg:p-24">
          <div className="max-w-md">
            <p className="font-sans text-[10px] tracking-widest uppercase text-velmora-muted mb-4">
              Our Story
            </p>
            <h2 className="font-serif text-section text-velmora-text mb-6 leading-tight">
              Jewelry that becomes
              <br />
              part of your story
            </h2>
            <p className="font-sans text-sm text-velmora-muted leading-relaxed mb-8">
              Velmora was born from a simple belief: that fine craftsmanship
              shouldn't come with an inaccessible price tag. Each piece is
              designed in our London atelier, plated in 18K gold, and crafted
              to withstand the rhythm of real life — showers, workouts,
              everything.
            </p>
            <Link
              to="/about"
              className="font-sans text-xs tracking-widest uppercase text-velmora-gold hover:text-velmora-gold-dark transition-colors border-b border-velmora-gold pb-1"
            >
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
