import React, { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { categories } from '@/data/products'

export default function CategoryTiles() {
  const containerRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current) return
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-20 md:py-28 bg-ivory">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-gold mb-3">Explore</p>
          <h2 className="font-serif text-4xl md:text-5xl text-espresso">Shop by Category</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.name}`}
              className="group relative aspect-[4/5] overflow-hidden bg-sand"
            >
              <div
                className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                data-strk-bg-id={cat.imgId}
                data-strk-bg={`[${cat.descId}] [${cat.titleId}] gold jewelry editorial`}
                data-strk-bg-ratio="4x3"
                data-strk-bg-width="800"
              />
              <div className="absolute inset-0 bg-espresso-bg/20 group-hover:bg-espresso-bg/40 transition-colors duration-500" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                <h3
                  id={cat.titleId}
                  className="font-serif text-cream text-3xl md:text-4xl tracking-[0.1em] uppercase mb-2"
                >
                  {cat.name}
                </h3>
                <p
                  id={cat.descId}
                  className="text-cream/80 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 max-w-xs"
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
