import { useRef, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const ugcItems = [
  {
    id: 'ugc-1',
    caption: 'Golden hour glow with my new huggies',
    searchQuery: 'woman wearing gold huggie earrings close-up warm light',
    ratio: '9x16',
    width: 400,
  },
  {
    id: 'ugc-2',
    caption: 'Layered necklaces for everyday elegance',
    searchQuery: 'woman wearing layered gold necklaces editorial portrait',
    ratio: '9x16',
    width: 400,
  },
  {
    id: 'ugc-3',
    caption: 'The perfect ear stack starts here',
    searchQuery: 'close-up ear with multiple gold earrings styled',
    ratio: '9x16',
    width: 400,
  },
  {
    id: 'ugc-4',
    caption: 'Gift-ready — she said yes to the set',
    searchQuery: 'luxury jewelry gift box gold necklace earrings unboxing',
    ratio: '9x16',
    width: 400,
  },
  {
    id: 'ugc-5',
    caption: 'Crystal details that catch every eye',
    searchQuery: 'crystal necklace detail shot warm lighting editorial',
    ratio: '9x16',
    width: 400,
  },
  {
    id: 'ugc-6',
    caption: 'My everyday gold ear cuff moment',
    searchQuery: 'gold ear cuff on woman profile shot soft lighting',
    ratio: '9x16',
    width: 400,
  },
]

export default function UGCCarousel() {
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
    <section ref={containerRef} className="py-16 lg:py-24 bg-charcoal overflow-hidden">
      <div className="container-narrow">
        {/* Header */}
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="text-caption uppercase tracking-mega-wide text-gold-light mb-2">
              @VelmoraJewelry
            </p>
            <h2 className="font-serif text-heading-1 text-cream">
              As Worn By You
            </h2>
          </div>
          <div className="hidden sm:flex gap-2">
            <button
              onClick={() => scroll('left')}
              className="w-10 h-10 border border-cream/20 rounded-full flex items-center justify-center text-cream/60 hover:text-gold-light hover:border-gold-light transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-10 h-10 border border-cream/20 rounded-full flex items-center justify-center text-cream/60 hover:text-gold-light hover:border-gold-light transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Scrollable row */}
      <div
        ref={scrollRef}
        className="ugc-scroll flex gap-4 overflow-x-auto px-4 sm:px-6 lg:px-8 pb-4 scrollbar-hide"
        style={{ scrollPaddingLeft: '1rem' }}
      >
        {/* Left spacer for container alignment */}
        <div className="flex-shrink-0 w-0 lg:w-[calc((100vw-80rem)/2+1rem)]" />

        {ugcItems.map((item) => (
          <div
            key={item.id}
            className="flex-shrink-0 w-52 sm:w-60 relative rounded-lg overflow-hidden group cursor-pointer"
            style={{ aspectRatio: '9/16' }}
          >
            <img
              data-strk-img-id={item.id}
              data-strk-img={`[ugc-caption-${item.id}] gold jewelry worn on woman`}
              data-strk-img-ratio={item.ratio}
              data-strk-img-width={item.width}
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={item.caption}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* Caption overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent" />
            <p
              id={`ugc-caption-${item.id}`}
              className="absolute bottom-4 left-4 right-4 font-serif text-body text-cream/90 italic leading-snug"
            >
              "{item.caption}"
            </p>
          </div>
        ))}

        {/* Right spacer */}
        <div className="flex-shrink-0 w-4" />
      </div>
    </section>
  )
}
