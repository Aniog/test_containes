import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { safeLoadImages } from '@/lib/imageLoader'
import { useScrollReveal } from '@/hooks/useScrollReveal'

import { categories } from '@/data/products'

const categoryImages = {
  earrings: { imgId: 'cat-earrings-a1', titleId: 'cat-earrings-title', descId: 'cat-earrings-desc' },
  necklaces: { imgId: 'cat-necklaces-b2', titleId: 'cat-necklaces-title', descId: 'cat-necklaces-desc' },
  huggies: { imgId: 'cat-huggies-c3', titleId: 'cat-huggies-title', descId: 'cat-huggies-desc' },
}

const categoryDescriptions = {
  earrings: 'Statement drops to everyday studs',
  necklaces: 'Layered chains and delicate pendants',
  huggies: 'Snug-fit hoops for every occasion',
}

export default function CategoryTiles() {
  const containerRef = useRef(null)
  const [revealRef, isVisible] = useScrollReveal()

  useEffect(() => {
    return safeLoadImages(containerRef.current)
  }, [])

  return (
    <section ref={revealRef} className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto section-padding">
        <div className={`text-center mb-12 reveal ${isVisible ? 'revealed' : ''}`}>
          <h2 className="font-serif text-display-sm md:text-display text-brand-charcoal">Shop by Category</h2>
          <div className="w-8 h-px bg-brand-gold mx-auto mt-5" />
        </div>

        <div ref={containerRef} className={`grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 stagger-children ${isVisible ? 'revealed' : ''}`}>
          {categories.map(cat => {
            const img = categoryImages[cat.id]
            return (
              <Link
                key={cat.id}
                to={`/shop?category=${cat.slug}`}
                className="group relative aspect-[4x5] md:aspect-[3x4] overflow-hidden"
              >
                <img
                  data-strk-img-id={img.imgId}
                  data-strk-img={`[${img.descId}] [${img.titleId}]`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={cat.name}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-black/5 group-hover:from-black/55 group-hover:via-black/25 group-hover:to-black/10 transition-all duration-500 ease-out" />

                {/* Label */}
                <div className="absolute inset-0 flex flex-col items-center justify-end pb-10">
                  <h3 id={img.titleId} className="font-serif text-2xl md:text-3xl text-white tracking-wide transition-transform duration-500 ease-out group-hover:-translate-y-2">{cat.name}</h3>
                  <p id={img.descId} className="text-[10px] md:text-xs text-white/50 mt-1 tracking-[0.15em] uppercase transition-all duration-500 ease-out group-hover:text-white/80 group-hover:mt-2.5">{categoryDescriptions[cat.id]}</p>
                  <span className="mt-3 text-[10px] tracking-[0.2em] uppercase text-white/0 group-hover:text-white/70 transition-all duration-500 ease-out group-hover:translate-y-0 translate-y-2">Shop Now</span>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
