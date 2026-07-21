import React, { useRef, useEffect } from 'react'
import { ugcPosts } from '@/data/products'

export default function UGCRow() {
  const scrollRef = useRef(null)

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return

    let animationId
    let scrollPos = 0
    const speed = 0.5

    const animate = () => {
      scrollPos += speed
      if (scrollPos >= el.scrollWidth / 2) {
        scrollPos = 0
      }
      el.scrollLeft = scrollPos
      animationId = requestAnimationFrame(animate)
    }

    animationId = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationId)
  }, [])

  // Duplicate posts for seamless loop
  const allPosts = [...ugcPosts, ...ugcPosts]

  return (
    <section className="py-16 md:py-20 bg-charcoal-950 overflow-hidden">
      <div className="text-center mb-10 px-4">
        <p className="text-xs tracking-widest-xl uppercase text-gold-400 mb-3 font-sans">@velmorajewelry</p>
        <h2 className="font-serif text-3xl md:text-4xl text-white font-light">As Worn By You</h2>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide px-4"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {allPosts.map((post, index) => (
          <div
            key={`${post.id}-${index}`}
            className="relative flex-shrink-0 w-40 sm:w-48 md:w-56 aspect-[9/16] rounded-lg overflow-hidden group"
          >
            <img
              src={post.image}
              alt={post.caption}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <p className="font-serif text-white text-sm italic">{post.caption}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
