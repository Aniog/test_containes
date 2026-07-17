import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const ugcItems = [
  { id: 'ugc-1', caption: 'Golden hour glow', query: 'gold huggie earring ear closeup model warm light' },
  { id: 'ugc-2', caption: 'Layered perfection', query: 'gold necklace layering model neck elegant' },
  { id: 'ugc-3', caption: 'Ear candy', query: 'gold ear cuff crystal earring model portrait' },
  { id: 'ugc-4', caption: 'Daily essential', query: 'gold pendant necklace woman wearing casual elegant' },
  { id: 'ugc-5', caption: 'Statement piece', query: 'gold filigree earring drop detail warm' },
  { id: 'ugc-6', caption: 'Gift ready', query: 'jewelry gift box gold set elegant packaging' },
]

export default function UGCReel() {
  const containerRef = useRef(null)

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current)
    }
  }, [])

  return (
    <section ref={containerRef} className="py-12 sm:py-16 bg-stone-900">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="text-center mb-8 sm:mb-10">
          <p className="text-[11px] font-medium tracking-widest-2xl uppercase text-gold-light mb-3">
            @VelmoraJewelry
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl text-white">
            How They Wear It
          </h2>
        </div>

        {/* Horizontal scroll reels */}
        <div className="flex gap-3 sm:gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0">
          {ugcItems.map((item) => (
            <div
              key={item.id}
              className="relative flex-shrink-0 w-[180px] sm:w-[220px] aspect-[9/16] rounded-lg overflow-hidden snap-start group"
            >
              <img
                data-strk-img-id={item.id}
                data-strk-img={`${item.query} gold jewelry demi-fine luxury`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="440"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={item.caption}
                className="absolute inset-0 w-full h-full object-cover bg-stone-800"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="font-serif text-sm sm:text-base text-white/90 italic leading-snug">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  )
}
