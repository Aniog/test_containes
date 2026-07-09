import { useRef, useEffect } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ugcImages } from '@/data/images'

const captions = [
  'My everyday stack',
  'Obsessed with this layer',
  'Never taking these off',
  'The perfect gift',
  'Golden hour vibes',
  'New favorite piece',
]

export default function UGCReel() {
  const containerRef = useRef(null)

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current)
    }
  }, [])

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-brand-ivory">
      <div className="section-padding">
        {/* Section header */}
        <div className="text-center mb-10">
          <p className="font-sans text-[0.65rem] tracking-[0.3em] uppercase text-brand-gold mb-3">
            #VelmoraStyle
          </p>
          <h2 className="section-title text-3xl md:text-heading">
            As Seen On You
          </h2>
        </div>
      </div>

      {/* Horizontal scroll strip */}
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-4 px-4 sm:px-6 lg:px-8 pb-4" style={{ scrollSnapType: 'x mandatory' }}>
          {ugcImages.map((img, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-44 md:w-52 relative overflow-hidden group cursor-pointer"
              style={{ scrollSnapAlign: 'start', aspectRatio: '9/16' }}
            >
              <img
                data-strk-img-id={img.strkImgId}
                data-strk-img={img.strkImgQuery}
                data-strk-img-ratio="9x16"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={img.alt}
                className="absolute inset-0 w-full h-full object-cover bg-brand-warm"
              />

              {/* Caption overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/60 via-transparent to-transparent" />
              <p className="absolute bottom-4 left-3 right-3 font-serif text-sm md:text-base text-brand-ivory italic leading-snug">
                &ldquo;{captions[index]}&rdquo;
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
