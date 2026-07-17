import React, { useRef, useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { ugcPosts } from '@/data/products'
import products from '@/data/products'

const reelImages = [
  'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=600&q=80',
  'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=600&q=80',
  'https://images.unsplash.com/photo-1629224316810-9d8805b95e76?w=600&q=80',
  'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=600&q=80',
  'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&q=80',
  'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&q=80',
]

export default function UgcReel() {
  const scrollRef = useRef(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const checkScroll = () => {
    const el = scrollRef.current
    if (!el) return
    setCanScrollLeft(el.scrollLeft > 10)
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10)
  }

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    checkScroll()
    el.addEventListener('scroll', checkScroll, { passive: true })
    return () => el.removeEventListener('scroll', checkScroll)
  }, [])

  const scroll = (dir) => {
    scrollRef.current?.scrollBy({ left: dir * 300, behavior: 'smooth' })
  }

  return (
    <section className="py-20 md:py-28 bg-brand-cream">
      <div className="text-center mb-14 section-padding">
        <p className="font-sans text-xs tracking-widest uppercase text-brand-gold mb-4">
          As Seen On You
        </p>
        <h2 className="heading-serif text-3xl md:text-4xl lg:text-5xl text-brand-base mb-4">
          Styled by You
        </h2>
        <p className="text-brand-muted max-w-md mx-auto text-sm">
          Tag <span className="text-brand-gold">@velmorajewelry</span> to be featured. Real women, real gold.
        </p>
      </div>

      <div className="relative">
        {/* Scroll buttons */}
        {canScrollLeft && (
          <button
            onClick={() => scroll(-1)}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white shadow-lg flex items-center justify-center hover:bg-brand-surface transition-colors"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-5 h-5 text-brand-base" />
          </button>
        )}
        {canScrollRight && (
          <button
            onClick={() => scroll(1)}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white shadow-lg flex items-center justify-center hover:bg-brand-surface transition-colors"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5 text-brand-base" />
          </button>
        )}

        {/* Reel strip */}
        <div
          ref={scrollRef}
          className="flex gap-4 px-6 md:px-12 lg:px-20 overflow-x-auto snap-x snap-mandatory"
        >
          {ugcPosts.map((post, idx) => (
            <div
              key={post.id}
              className="flex-shrink-0 w-[160px] md:w-[200px] snap-start group cursor-pointer"
            >
              <div className="relative aspect-[9/16] overflow-hidden mb-3">
                <img
                  src={reelImages[idx % reelImages.length]}
                  alt={post.caption}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Caption overlay */}
                <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-brand-base/80 via-brand-base/30 to-transparent">
                  <p className="text-white text-xs leading-relaxed font-serif italic">
                    &ldquo;{post.caption}&rdquo;
                  </p>
                  <p className="text-brand-gold-light/80 text-[10px] mt-1.5 tracking-wide">
                    {post.handle}
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
