import { useRef, useEffect } from 'react'
import { ugcItems } from './data'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from './strk-img-config.json'

export default function UGCSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section className="bg-velmora-sand py-20 md:py-28" ref={containerRef}>
      <div className="text-center mb-14 max-w-7xl mx-auto px-6 lg:px-10">
        <p className="font-sans text-xs tracking-widest uppercase text-velmora-taupe mb-4">
          As Seen On You
        </p>
        <h2 className="font-serif text-3xl md:text-4xl text-velmora-charcoal">
          Styled by Our Community
        </h2>
        <div className="mx-auto mt-4 w-12 hairline-divider" />
      </div>

      <div className="flex gap-4 overflow-x-auto px-6 lg:px-10 pb-4 snap-x snap-mandatory scrollbar-hide">
        {ugcItems.map((item) => (
          <div
            key={item.id}
            className="flex-shrink-0 w-[180px] md:w-[220px] snap-start"
          >
            <div className="relative aspect-[9/16] bg-velmora-blush overflow-hidden">
              <div
                className="absolute inset-0"
                data-strk-img-id={`ugc-${item.id}`}
                data-strk-img={`[ugc-${item.id}-caption] gold jewelry`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="440"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-velmora-softblack/50 via-transparent to-transparent" />
              <p
                id={`ugc-${item.id}-caption`}
                className="absolute bottom-4 left-4 right-4 font-serif text-sm text-white italic"
              >
                {item.caption}
              </p>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  )
}