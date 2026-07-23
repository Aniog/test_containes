import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { categories } from '@/data/products'

export default function Collections() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef} className="pt-20 md:pt-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-20">
        <div className="text-center mb-12">
          <h1 id="collections-title" className="font-serif text-3xl md:text-5xl text-velmora-charcoal tracking-wide">
            Collections
          </h1>
          <p id="collections-subtitle" className="font-sans text-sm text-velmora-muted mt-4">
            Explore our curated collections — each designed around a mood, a moment, or a way of wearing
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {categories.map(cat => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative overflow-hidden rounded-sm aspect-[3x4]"
            >
              <img
                data-strk-img-id={`coll-${cat.imgId}`}
                data-strk-img={`[${cat.descId}] [${cat.titleId}] [collections-subtitle] [collections-title]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-velmora-ink/30 group-hover:bg-velmora-ink/50 transition-colors duration-300" />
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <h2 id={cat.titleId} className="font-serif text-2xl md:text-3xl text-white tracking-product uppercase">
                  {cat.name}
                </h2>
                <p id={cat.descId} className="font-sans text-xs text-white/80 mt-2">Explore the collection</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
