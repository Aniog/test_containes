import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { brandStoryImage } from '@/data/images'

export default function BrandStory() {
  const containerRef = useRef(null)

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current)
    }
  }, [])

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-brand-ivory">
      <div className="section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center max-w-6xl mx-auto">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              data-strk-img-id={brandStoryImage.strkImgId}
              data-strk-img={brandStoryImage.strkImgQuery}
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={brandStoryImage.alt}
              className="absolute inset-0 w-full h-full object-cover bg-brand-warm"
            />
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center">
            <p className="font-sans text-[0.65rem] tracking-[0.3em] uppercase text-brand-gold mb-4">
              Our Story
            </p>
            <h2 className="section-title text-3xl md:text-heading mb-6">
              Jewelry That Tells Your Story
            </h2>
            <div className="space-y-4">
              <p className="font-sans text-sm md:text-[0.9rem] text-brand-taupe leading-relaxed">
                Velmora was born from a simple belief: every woman deserves jewelry that feels 
                as special as the moments she wears it. We craft demi-fine pieces using 18K gold 
                plating over quality base metals, designed to be worn every day without losing their 
                warmth or shine.
              </p>
              <p className="font-sans text-sm md:text-[0.9rem] text-brand-taupe leading-relaxed">
                Each piece is hypoallergenic, thoughtfully designed, and priced to be accessible — 
                because luxury shouldn&apos;t require compromise. From our studio to your jewelry box, 
                every detail is considered.
              </p>
            </div>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 mt-8 font-sans text-xs tracking-[0.15em] uppercase text-brand-charcoal hover:text-brand-gold transition-colors group"
            >
              Read Our Full Story
              <span className="inline-block transition-transform group-hover:translate-x-1">&rarr;</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
