import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { categories } from '@/data/products'

export default function CategoryTiles() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-10 md:mb-14">
          <h2 id="cat-section-title" className="font-serif text-3xl md:text-4xl text-velmora-charcoal tracking-wide">
            Shop by Category
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map(cat => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative overflow-hidden rounded-sm aspect-[4x3]"
            >
              <img
                data-strk-img-id={cat.imgId}
                data-strk-img={`[${cat.descId}] [${cat.titleId}] [cat-section-title]`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-velmora-ink/20 group-hover:bg-velmora-ink/40 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 id={cat.titleId} className="font-serif text-2xl md:text-3xl text-white tracking-product uppercase">
                  {cat.name}
                </h3>
                <p id={cat.descId} className="hidden">Velmora {cat.name} collection</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
