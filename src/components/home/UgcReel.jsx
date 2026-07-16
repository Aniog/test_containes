import { useRef, useEffect } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ugcItems } from '@/data/products'

export default function UgcReel() {
  const containerRef = useRef(null)

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current)
    }
  }, [])

  return (
    <section ref={containerRef} className="py-20 lg:py-28 bg-cream-200/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <p className="font-sans text-xs tracking-widest-2xl uppercase text-gold mb-3">
            @velmora
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-charcoal">
            Styled by You
          </h2>
        </div>

        {/* Horizontal scroll reel */}
        <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-4 -mx-4 px-4 snap-x snap-mandatory">
          {ugcItems.map(item => (
            <div
              key={item.id}
              className="flex-shrink-0 w-[200px] sm:w-[240px] snap-start group"
            >
              <div className="relative aspect-[9/16] bg-cream-300 overflow-hidden rounded-lg">
                <img
                  data-strk-img-id={item.id}
                  data-strk-img={`velmora ${item.category} jewelry worn on woman`}
                  data-strk-img-ratio="9x16"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={item.caption}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Caption overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-charcoal/60 to-transparent">
                  <p className="font-serif text-sm text-white/90 italic">
                    {item.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
