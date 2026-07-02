import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const ugcItems = [
  {
    id: 'ugc-1',
    caption: 'The perfect everyday ear stack',
    handle: '@sofia.m',
    imgId: 'ugc-img-1-a1b2c3',
    titleId: 'ugc-title-1',
    captionId: 'ugc-caption-1',
  },
  {
    id: 'ugc-2',
    caption: 'Gifted myself the Heirloom Set ✨',
    handle: '@claire.wears',
    imgId: 'ugc-img-2-d4e5f6',
    titleId: 'ugc-title-2',
    captionId: 'ugc-caption-2',
  },
  {
    id: 'ugc-3',
    caption: 'Obsessed with these huggies',
    handle: '@nadia.style',
    imgId: 'ugc-img-3-g7h8i9',
    titleId: 'ugc-title-3',
    captionId: 'ugc-caption-3',
  },
  {
    id: 'ugc-4',
    caption: 'Layering necklaces all summer',
    handle: '@maya.looks',
    imgId: 'ugc-img-4-j0k1l2',
    titleId: 'ugc-title-4',
    captionId: 'ugc-caption-4',
  },
  {
    id: 'ugc-5',
    caption: 'My go-to gold ear cuff',
    handle: '@elena.j',
    imgId: 'ugc-img-5-m3n4o5',
    titleId: 'ugc-title-5',
    captionId: 'ugc-caption-5',
  },
  {
    id: 'ugc-6',
    caption: 'Velmora never misses',
    handle: '@priya.wears',
    imgId: 'ugc-img-6-p6q7r8',
    titleId: 'ugc-title-6',
    captionId: 'ugc-caption-6',
  },
]

export default function UGCReel() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section className="py-20 lg:py-24 bg-surface overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="text-center">
          <p className="font-manrope text-xs tracking-widest uppercase text-gold-dust mb-3">
            As Worn
          </p>
          <h2 className="font-cormorant text-4xl lg:text-5xl font-light text-ink">
            The Velmora Edit
          </h2>
          <p className="font-manrope text-xs text-muted mt-3 tracking-wide">
            Tag us @velmora to be featured
          </p>
        </div>
      </div>

      {/* Horizontal scroll reel */}
      <div
        ref={containerRef}
        className="flex gap-3 overflow-x-auto hide-scrollbar px-4 sm:px-6 lg:px-8 pb-2"
        style={{ scrollSnapType: 'x mandatory' }}
      >
        {ugcItems.map(item => (
          <div
            key={item.id}
            className="flex-shrink-0 relative overflow-hidden group cursor-pointer"
            style={{ width: '200px', height: '356px', scrollSnapAlign: 'start' }}
          >
            {/* Background image */}
            <img
              data-strk-img-id={item.imgId}
              data-strk-img={`[${item.captionId}] woman wearing gold jewelry portrait`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={item.caption}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-obsidian/10 to-transparent" />

            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <p
                id={item.captionId}
                className="font-cormorant text-sm italic text-on-dark leading-snug"
              >
                "{item.caption}"
              </p>
              <p
                id={item.titleId}
                className="font-manrope text-[10px] text-gold-light mt-1 tracking-wide"
              >
                {item.handle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
