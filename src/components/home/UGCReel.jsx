import { useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ugcPosts } from '@/data/products'

export default function UGCReel() {
  const containerRef = useRef(null)
  const scrollRef = useRef(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  const checkScroll = () => {
    const el = scrollRef.current
    if (!el) return
    setCanScrollLeft(el.scrollLeft > 4)
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 4)
  }

  const scroll = (dir) => {
    const el = scrollRef.current
    if (!el) return
    el.scrollBy({ left: dir * 280, behavior: 'smooth' })
    setTimeout(checkScroll, 400)
  }

  return (
    <section ref={containerRef} className="py-20 md:py-28 bg-velmora-white">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div className="flex items-end justify-between mb-10 md:mb-14">
          <div>
            <h2 className="font-serif text-section text-velmora-text">
              Worn by You
            </h2>
            <p className="font-sans text-sm text-velmora-muted mt-2">
              Tag <span className="text-velmora-gold">@velmora</span> to be
              featured
            </p>
          </div>
          <div className="hidden md:flex gap-2">
            <button
              onClick={() => scroll(-1)}
              disabled={!canScrollLeft}
              className="w-9 h-9 rounded-full border border-velmora-border flex items-center justify-center hover:border-velmora-gold hover:text-velmora-gold transition-colors disabled:opacity-30 disabled:cursor-default"
              aria-label="Scroll left"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={() => scroll(1)}
              disabled={!canScrollRight}
              className="w-9 h-9 rounded-full border border-velmora-border flex items-center justify-center hover:border-velmora-gold hover:text-velmora-gold transition-colors disabled:opacity-30 disabled:cursor-default"
              aria-label="Scroll right"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Scrollable strip */}
      <div
        ref={scrollRef}
        onScroll={checkScroll}
        className="flex gap-4 px-5 md:px-10 overflow-x-auto scrollbar-hide snap-x snap-mandatory"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {ugcPosts.map((post) => (
          <div
            key={post.id}
            className="flex-shrink-0 w-[180px] md:w-[220px] snap-start"
          >
            <div className="relative aspect-[9/16] bg-velmora-sand rounded-sm overflow-hidden group cursor-pointer">
              <img
                alt={post.caption}
                data-strk-img-id={`ugc-${post.id}`}
                data-strk-img={`${post.caption} gold jewelry worn`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="440"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 9 16'/%3E"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-velmora-base/60 via-transparent to-transparent" />
              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="font-sans text-[10px] text-velmora-white/80 tracking-wider">
                  {post.handle}
                </p>
                <p className="font-serif text-xs text-velmora-white mt-0.5 leading-snug">
                  {post.caption}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
