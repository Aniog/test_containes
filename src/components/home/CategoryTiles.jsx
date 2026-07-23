import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { categories } from '@/lib/data'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const CategoryTiles = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-20 md:py-28 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif font-light text-3xl md:text-4xl text-foreground">Shop by Category</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {categories.map(cat => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative aspect-[4x3] bg-dark-gray overflow-hidden rounded-sm"
            >
              <img
                data-strk-img-id={cat.imgId}
                data-strk-img={`[${cat.titleId}] [${cat.descId}] gold jewelry`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
                <h3 id={cat.titleId} className="font-serif text-2xl uppercase tracking-product text-foreground group-hover:text-primary transition-colors duration-300">
                  {cat.name}
                </h3>
              </div>
              <p id={cat.descId} className="hidden">Fine {cat.name.toLowerCase()} collection</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CategoryTiles
