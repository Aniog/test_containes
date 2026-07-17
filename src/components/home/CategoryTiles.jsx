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

  const categoryImages = {
    earrings: { imgId: 'cat-earrings-img-s1t2u3' },
    necklaces: { imgId: 'cat-necklaces-img-v4w5x6' },
    huggies: { imgId: 'cat-huggies-img-y7z8a9' },
  }

  return (
    <section ref={containerRef} className="py-16 md:py-24 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-12">
          <h2 id="shop-by-category-title" className="font-serif text-3xl md:text-4xl text-charcoal">Shop by Category</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map(cat => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative aspect-[4/3] overflow-hidden bg-muted no-underline"
            >
              <img
                alt={cat.name}
                data-strk-img-id={categoryImages[cat.id].imgId}
                data-strk-img={`[${cat.titleId}] gold jewelry collection`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-charcoal/40 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span
                  id={cat.titleId}
                  className="font-serif text-2xl md:text-3xl text-cream tracking-wide"
                >
                  {cat.name}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
