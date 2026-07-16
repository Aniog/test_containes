import { useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const reels = [
  {
    id: 1,
    caption: 'Golden hour glow',
    image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=400&h=600&fit=crop',
  },
  {
    id: 2,
    caption: 'Stack & layer',
    image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=400&h=600&fit=crop',
  },
  {
    id: 3,
    caption: 'Everyday elegance',
    image: 'https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?w=400&h=600&fit=crop',
  },
  {
    id: 4,
    caption: 'Date night ready',
    image: 'https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?w=400&h=600&fit=crop',
  },
  {
    id: 5,
    caption: 'Minimal & chic',
    image: 'https://images.unsplash.com/photo-1629224316810-9d8805b95e76?w=400&h=600&fit=crop',
  },
  {
    id: 6,
    caption: 'Crystal whispers',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=600&fit=crop',
  },
  {
    id: 7,
    caption: 'Sun-kissed style',
    image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=400&h=600&fit=crop',
  },
]

export default function UGCReel() {
  const scrollRef = useRef(null)

  const scroll = (direction) => {
    if (!scrollRef.current) return
    const amount = 280
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -amount : amount,
      behavior: 'smooth',
    })
  }

  return (
    <section className="py-16 md:py-20 bg-warm-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="text-gold text-xs font-medium tracking-[0.25em] uppercase mb-2">
              #VelmoraStyle
            </p>
            <h2 className="font-serif text-heading-md text-white">
              As Seen On You
            </h2>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <button
              onClick={() => scroll('left')}
              className="w-10 h-10 border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-gold transition-all"
              aria-label="Scroll left"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-10 h-10 border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-gold transition-all"
              aria-label="Scroll right"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Scrolling reel */}
      <div
        ref={scrollRef}
        className="flex gap-3 overflow-x-auto scrollbar-hide px-4 sm:px-6 lg:px-8 pb-4"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {reels.map((reel) => (
          <div
            key={reel.id}
            className="flex-shrink-0 w-[200px] sm:w-[240px] relative group cursor-pointer overflow-hidden"
          >
            <div className="aspect-[9/16] overflow-hidden">
              <img
                src={reel.image}
                alt={reel.caption}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
            </div>
            {/* Caption overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-warm-black/70 via-transparent to-transparent flex items-end p-4">
              <p className="font-serif text-sm text-white/90 italic tracking-wide">
                {reel.caption}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
