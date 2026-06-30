import React, { useRef, useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { ugcPosts } from '@/data/products'

export default function UGCStrip() {
  const scrollRef = useRef(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  useEffect(() => {
    checkScroll()
    const el = scrollRef.current
    if (el) {
      el.addEventListener('scroll', checkScroll)
      return () => el.removeEventListener('scroll', checkScroll)
    }
  }, [])

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 280
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      })
    }
  }

  return (
    <section className="py-16 md:py-20 bg-cream-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xs font-medium tracking-ultra-wide text-gold mb-3 block">
              COMMUNITY LOVE
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-espresso-800">
              Seen on You
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className={`p-2 rounded-full border transition-colors ${
                canScrollLeft
                  ? 'border-espresso-800 text-espresso-800 hover:bg-espresso-800 hover:text-cream-50'
                  : 'border-cream-300 text-cream-300 cursor-not-allowed'
              }`}
              aria-label="Scroll left"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className={`p-2 rounded-full border transition-colors ${
                canScrollRight
                  ? 'border-espresso-800 text-espresso-800 hover:bg-espresso-800 hover:text-cream-50'
                  : 'border-cream-300 text-cream-300 cursor-not-allowed'
              }`}
              aria-label="Scroll right"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Scrollable Container */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide px-4 sm:px-6 lg:px-8 pb-4 snap-x snap-mandatory"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {ugcPosts.map((post) => (
          <div
            key={post.id}
            className="flex-shrink-0 w-52 sm:w-64 md:w-72 snap-start"
          >
            <div className="relative aspect-[9/16] rounded-lg overflow-hidden group">
              <img
                src={post.image}
                alt={post.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-espresso-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <p className="font-serif text-sm text-cream-50 mb-1">{post.caption}</p>
                <p className="text-xs text-cream-100/70">{post.username}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
