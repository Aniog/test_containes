import { useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { ugcPosts } from '@/data/products'

export default function UGCRail() {
  const scrollRef = useRef(null)

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 300
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      })
    }
  }

  return (
    <section className="py-16 md:py-24 bg-cream-100">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-12 px-4">
          <h2 className="font-serif text-3xl md:text-4xl tracking-wider uppercase text-charcoal-800 mb-4">
            Styled by You
          </h2>
          <p className="text-charcoal-500">
            Tag us @velmora to be featured
          </p>
        </div>

        {/* Scroll Container */}
        <div className="relative group">
          {/* Scroll Buttons */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-5 h-5 text-charcoal-700" />
          </button>
          <button
            onClick={() => scroll('right')}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5 text-charcoal-700" />
          </button>

          {/* UGC Cards */}
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto scrollbar-hide px-4 md:px-8 pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {ugcPosts.map((post) => (
              <div
                key={post.id}
                className="flex-shrink-0 w-[200px] md:w-[250px] relative group/card cursor-pointer"
              >
                {/* 9:16 Aspect Ratio Container */}
                <div className="relative aspect-[9/16] overflow-hidden bg-cream-200">
                  <img
                    data-strk-img-id={`ugc-${post.id}`}
                    data-strk-img={`[ugc-caption-${post.id}] [ugc-product-${post.id}] jewelry worn ear neck woman`}
                    data-strk-img-ratio="9x16"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={post.caption}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover/card:scale-105"
                    loading="lazy"
                  />
                  
                  {/* Caption Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-col justify-end p-4">
                    <p className="font-serif text-white text-lg italic">
                      "{post.caption}"
                    </p>
                    <span id={`ugc-caption-${post.id}`} className="hidden">{post.caption}</span>
                    <span id={`ugc-product-${post.id}`} className="hidden">{post.product}</span>
                    <p className="text-white/70 text-sm mt-1">
                      {post.product}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
