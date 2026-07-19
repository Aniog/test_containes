import { useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { ugcPosts } from '@/data/products'

export default function UGCStrip() {
  const scrollRef = useRef(null)

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -300 : 300,
        behavior: 'smooth',
      })
    }
  }

  return (
    <section className="py-20 md:py-28 bg-warm-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-taupe font-sans font-medium mb-3">
              As Seen On You
            </p>
            <h2 id="ugc-section-title" className="font-serif text-3xl md:text-4xl text-espresso tracking-wide">
              Styled by Our Community
            </h2>
          </div>
          <div className="hidden md:flex gap-2">
            <button
              onClick={() => scroll('left')}
              className="w-9 h-9 border border-taupe-light/40 flex items-center justify-center text-taupe hover:text-espresso hover:border-taupe transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-9 h-9 border border-taupe-light/40 flex items-center justify-center text-taupe hover:text-espresso hover:border-taupe transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-4 md:gap-5 overflow-x-auto scrollbar-hide pb-2 snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {ugcPosts.map((post, i) => (
            <div
              key={post.id}
              className="flex-shrink-0 w-[160px] md:w-[200px] snap-start"
            >
              <div className="relative aspect-[9/16] bg-sand overflow-hidden mb-3">
                {/* UGC image placeholder */}
                <img
                  alt={post.caption}
                  data-strk-img-id={`ugc-${post.id}-${i}`}
                  data-strk-img={`[ugc-caption-${post.id}-${i}] [ugc-section-title]`}
                  data-strk-img-ratio="9x16"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover"
                />
                {/* Caption overlay */}
                <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-espresso/70 to-transparent">
                  <p
                    id={`ugc-caption-${post.id}-${i}`}
                    className="text-cream/90 text-[11px] font-serif italic leading-snug"
                  >
                    "{post.caption}"
                  </p>
                  <p className="text-cream/60 text-[10px] font-sans mt-1">
                    {post.username}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
