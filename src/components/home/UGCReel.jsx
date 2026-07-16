import React, { useRef } from 'react'
import { useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const ugcItems = [
  {
    id: 'ugc-1',
    caption: 'Morning light',
    imgId: 'ugc-golden-sphere-r1',
    search: 'gold huggie earrings worn on ear, close-up portrait, warm natural light, editorial jewelry photography',
    ratio: '9x16',
  },
  {
    id: 'ugc-2',
    caption: 'Golden hour',
    imgId: 'ugc-flora-necklace-r2',
    search: 'crystal floral necklace on woman neck, warm sunset lighting, lifestyle jewelry photography',
    ratio: '9x16',
  },
  {
    id: 'ugc-3',
    caption: 'Everyday elegance',
    imgId: 'ugc-amber-lace-r3',
    search: 'gold filigree earrings worn, side profile, soft studio lighting, elegant jewelry portrait',
    ratio: '9x16',
  },
  {
    id: 'ugc-4',
    caption: 'Stack & layer',
    imgId: 'ugc-ear-cuff-r4',
    search: 'gold ear cuff crystal accent worn, ear detail shot, warm lighting, editorial style',
    ratio: '9x16',
  },
  {
    id: 'ugc-5',
    caption: 'Gift yourself',
    imgId: 'ugc-heirloom-set-r5',
    search: 'woman wearing matching gold earring necklace set, portrait, soft warm lighting, luxury jewelry',
    ratio: '9x16',
  },
  {
    id: 'ugc-6',
    caption: 'Quiet luxury',
    imgId: 'ugc-mixed-jewelry-r6',
    search: 'minimal gold jewelry collection flatlay on marble, warm tones, luxury lifestyle photography',
    ratio: '9x16',
  },
]

export default function UGCReel() {
  const scrollRef = useRef(null)
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  const scroll = (direction) => {
    if (!scrollRef.current) return
    const amount = 280
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -amount : amount,
      behavior: 'smooth',
    })
  }

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-cream-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-end justify-between mb-8 md:mb-12">
          <div>
            <p className="text-gold-600 text-xs tracking-wide-xl uppercase font-medium mb-3">
              As Seen On You
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-charcoal-800">
              #VelmoraStyle
            </h2>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={() => scroll('left')}
              className="w-10 h-10 border border-charcoal-200 rounded-full flex items-center justify-center text-charcoal-600 hover:border-charcoal-400 hover:text-charcoal-800 transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-10 h-10 border border-charcoal-200 rounded-full flex items-center justify-center text-charcoal-600 hover:border-charcoal-400 hover:text-charcoal-800 transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Scrollable reel */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto no-scrollbar px-4 sm:px-6 lg:px-[max(1.5rem,calc((100vw-80rem)/2+1.5rem))]"
      >
        {ugcItems.map((item) => (
          <div
            key={item.id}
            className="flex-shrink-0 w-[200px] md:w-[240px] relative aspect-[9/16] rounded-2xl overflow-hidden group cursor-pointer"
          >
            <img
              data-strk-img-id={item.imgId}
              data-strk-img={item.search}
              data-strk-img-ratio={item.ratio}
              data-strk-img-width="500"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={item.caption}
              className="w-full h-full object-cover transition-transform duration-700 ease-luxury group-hover:scale-110"
            />
            {/* Caption overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/60 via-transparent to-transparent" />
            <p className="absolute bottom-4 left-4 right-4 font-serif text-base md:text-lg text-cream-100 italic">
              {item.caption}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
