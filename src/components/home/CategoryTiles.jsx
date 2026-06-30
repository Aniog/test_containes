import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { categories } from '@/data/products'
import { useScrollReveal } from '@/lib/useScrollReveal'

export default function CategoryTiles() {
  const containerRef = useRef(null)
  const [revealRef, revealed] = useScrollReveal()

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-cream">
      <div ref={revealRef} className={`max-w-7xl mx-auto px-4 md:px-8 transition-all duration-700 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="text-center mb-10 md:mb-14">
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-stone-900 tracking-wide">
            Shop by Category
          </h2>
          <div className="w-12 h-px bg-gold mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat, i) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative aspect-[4/5] md:aspect-[3/4] overflow-hidden rounded-sm"
              style={{
                opacity: revealed ? 1 : 0,
                transform: revealed ? 'translateY(0)' : 'translateY(20px)',
                transition: 'all 0.7s ease-out',
                transitionDelay: revealed ? `${i * 150}ms` : '0ms',
              }}
            >
              <img
                data-strk-img-id={`cat-${cat.image}-j1k2l${cat.id}`}
                data-strk-img={`[cat-${cat.id}-desc] [cat-${cat.id}-name] gold jewelry`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-stone-900/20 group-hover:bg-stone-900/40 transition-colors duration-500" />
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <h3
                  id={`cat-${cat.id}-name`}
                  className="font-serif text-2xl md:text-3xl tracking-ultra-wide uppercase text-cream font-medium"
                >
                  {cat.name}
                </h3>
                <p
                  id={`cat-${cat.id}-desc`}
                  className="mt-1 text-xs tracking-wider uppercase text-cream/70"
                >
                  {cat.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
