import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const ugcItems = [
  { id: 'ugc-1', caption: 'Golden hour glow', ratio: '9x16', imgId: 'ugc-ear-gold-1a2b' },
  { id: 'ugc-2', caption: 'Everyday elegance', ratio: '9x16', imgId: 'ugc-necklace-3c4d' },
  { id: 'ugc-3', caption: 'Stack & layer', ratio: '9x16', imgId: 'ugc-huggies-stack-5e6f' },
  { id: 'ugc-4', caption: 'Date night ready', ratio: '9x16', imgId: 'ugc-drop-earrings-7g8h' },
  { id: 'ugc-5', caption: 'Gift-worthy moments', ratio: '9x16', imgId: 'ugc-gift-box-9i0j' },
  { id: 'ugc-6', caption: 'Sun-kissed shine', ratio: '9x16', imgId: 'ugc-sunlight-gold-1k2l' },
]

export default function UGCReel() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-velmora-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-velmora-gold text-xs tracking-widest-2xl uppercase font-sans mb-3">
            @VelmoraJewelry
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-light text-velmora-cream tracking-wide">
            Styled by You
          </h2>
        </div>
      </div>

      {/* Horizontal scroll */}
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-4 px-4 sm:px-6 lg:px-8 pb-4" style={{ scrollSnapType: 'x mandatory' }}>
          {ugcItems.map((item) => (
            <div
              key={item.id}
              className="flex-shrink-0 w-[200px] md:w-[240px] relative rounded-xl overflow-hidden group"
              style={{ scrollSnapAlign: 'start' }}
            >
              <div className="aspect-[9/16] relative">
                <img
                  data-strk-img-id={item.imgId}
                  data-strk-img={`[${item.id}-caption] gold jewelry worn model ear neck`}
                  data-strk-img-ratio={item.ratio}
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={item.caption}
                  className="w-full h-full object-cover"
                />
                {/* Caption overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <p
                  id={`${item.id}-caption`}
                  className="absolute bottom-4 left-4 right-4 font-serif text-base md:text-lg text-white/90 italic leading-snug"
                >
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`.scrollbar-hide::-webkit-scrollbar { display: none; } .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }`}</style>
    </section>
  )
}
