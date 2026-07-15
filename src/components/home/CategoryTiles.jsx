import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { categories } from '@/data/products'

export default function CategoryTiles() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  const catImages = [
    { imgId: 'cat-earrings-img-x1y2z3', descId: 'cat-earrings-desc' },
    { imgId: 'cat-necklaces-img-a4b5c6', descId: 'cat-necklaces-desc' },
    { imgId: 'cat-huggies-img-d7e8f9', descId: 'cat-huggies-desc' },
  ]

  return (
    <section ref={containerRef} className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 id="categories-title" className="font-serif text-3xl md:text-4xl text-brand-charcoal">
            Shop by Category
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat, idx) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative aspect-[4/5] overflow-hidden bg-brand-ivory"
            >
              <img
                alt={cat.name}
                data-strk-img-id={catImages[idx].imgId}
                data-strk-img={`[${cat.titleId}] [categories-title]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="500"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                <h3
                  id={cat.titleId}
                  className="font-serif text-2xl md:text-3xl text-white tracking-wide"
                >
                  {cat.name}
                </h3>
              </div>
              <p id={catImages[idx].descId} className="sr-only" aria-hidden="true">
                Shop {cat.name} collection gold jewelry
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
