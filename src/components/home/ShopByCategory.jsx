import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { categories } from '@/data/products'

const categoryImages = {
  earrings: 'cat-earrings-p1q2r3',
  necklaces: 'cat-necklaces-s4t5u6',
  huggies: 'cat-huggies-v7w8x9',
}

export default function ShopByCategory() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal">Shop by Category</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map(cat => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative aspect-[4/5] md:aspect-[3/4] overflow-hidden bg-muted-light"
            >
              <img
                data-strk-img-id={categoryImages[cat.id]}
                data-strk-img={`[cat-name-${cat.id}] gold jewelry collection elegant`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.name}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <h3
                  id={`cat-name-${cat.id}`}
                  className="font-serif text-xl md:text-2xl text-white drop-shadow-lg"
                >
                  {cat.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
