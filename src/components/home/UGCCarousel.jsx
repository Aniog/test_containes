import React, { useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const ugcItems = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=400&h=700&fit=crop',
    caption: 'Ear stack perfection',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=700&fit=crop',
    caption: 'Golden hour glow',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=700&fit=crop',
    caption: 'Layered to perfection',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1629224316810-9d8805b95e76?w=400&h=700&fit=crop',
    caption: 'Everyday elegance',
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=700&fit=crop',
    caption: 'Statement drops',
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=400&h=700&fit=crop',
    caption: 'Gift-worthy sets',
  },
]

export default function UGCCarousel() {
  const scrollRef = useRef(null)

  const scroll = (direction) => {
    if (scrollRef.current) {
      const amount = 280
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -amount : amount,
        behavior: 'smooth',
      })
    }
  }

  return (
    <section className="py-16 md:py-24 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="section-heading text-3xl md:text-4xl">Styled by You</h2>
            <p className="section-subheading">#VelmoraJewels</p>
          </div>
          <div className="hidden md:flex gap-2">
            <button
              onClick={() => scroll('left')}
              className="p-2 border border-cream-400 text-slate-850 hover:border-gold-600 hover:text-gold-600 transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft size={16} strokeWidth={1.5} />
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-2 border border-cream-400 text-slate-850 hover:border-gold-600 hover:text-gold-600 transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight size={16} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </div>

      {/* Scrollable reel strip */}
      <div
        ref={scrollRef}
        className="flex gap-3 md:gap-4 overflow-x-auto scrollbar-hide px-4 sm:px-6 lg:px-[max(1.5rem,calc((100vw-80rem)/2+1.5rem))]"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {ugcItems.map((item) => (
          <div
            key={item.id}
            className="relative flex-shrink-0 w-[200px] md:w-[240px] aspect-[9/16] overflow-hidden group cursor-pointer"
          >
            <img
              src={item.image}
              alt={item.caption}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <p className="absolute bottom-4 left-3 right-3 font-serif text-sm md:text-base text-cream-50 italic leading-snug">
              {item.caption}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
