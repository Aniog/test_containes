import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const ugcItems = [
  { id: 'ugc-1', imgId: 'ugc-img-1-a1b2c3', caption: '"My everyday earrings."', handle: '@sofia.m', captionId: 'ugc-caption-1', query: 'gold huggie earrings worn woman ear close up' },
  { id: 'ugc-2', imgId: 'ugc-img-2-d4e5f6', caption: '"The perfect gift."', handle: '@claire.w', captionId: 'ugc-caption-2', query: 'gold necklace pendant woman neck jewelry' },
  { id: 'ugc-3', imgId: 'ugc-img-3-g7h8i9', caption: '"Obsessed with these."', handle: '@maya.r', captionId: 'ugc-caption-3', query: 'gold drop earrings woman portrait jewelry' },
  { id: 'ugc-4', imgId: 'ugc-img-4-j1k2l3', caption: '"Gifted to my sister."', handle: '@anna.k', captionId: 'ugc-caption-4', query: 'jewelry gift box gold earrings necklace set' },
  { id: 'ugc-5', imgId: 'ugc-img-5-m4n5o6', caption: '"Wear them everywhere."', handle: '@priya.s', captionId: 'ugc-caption-5', query: 'gold ear cuff crystal earring woman close up' },
  { id: 'ugc-6', imgId: 'ugc-img-6-p7q8r9', caption: '"Dainty and perfect."', handle: '@lea.b', captionId: 'ugc-caption-6', query: 'dainty gold necklace woman collarbone jewelry' },
]

export default function UGCReel() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-16 md:py-20 bg-parchment overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="flex items-end justify-between">
          <div>
            <p className="font-sans text-xs tracking-widest3 uppercase text-gold mb-2">Community</p>
            <h2 className="font-serif text-3xl md:text-4xl font-light text-espresso">#WearVelmora</h2>
          </div>
          <a
            href="#"
            className="hidden md:block font-sans text-xs tracking-widest uppercase text-stone hover:text-gold transition-colors border-b border-stone/30 pb-0.5"
          >
            Follow on Instagram
          </a>
        </div>
      </div>

      {/* Horizontal scroll reel */}
      <div className="flex gap-3 overflow-x-auto pb-4 px-4 sm:px-6 lg:px-8 scrollbar-hide" style={{ scrollbarWidth: 'none' }}>
        {ugcItems.map(item => (
          <div
            key={item.id}
            className="relative flex-shrink-0 w-44 md:w-52 rounded-sm overflow-hidden group cursor-pointer"
            style={{ aspectRatio: '9/16' }}
          >
            {/* Image */}
            <img
              data-strk-img-id={item.imgId}
              data-strk-img={`[${item.captionId}] ${item.query}`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 9 16'/%3E"
              alt={item.caption}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-transparent to-transparent" />

            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <p id={item.captionId} className="font-serif text-sm italic text-ivory leading-snug">
                {item.caption}
              </p>
              <p className="font-sans text-[10px] text-ivory/60 mt-1">{item.handle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
