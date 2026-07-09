import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const categories = [
  { id: 'earrings', label: 'Earrings', slug: 'earrings' },
  { id: 'necklaces', label: 'Necklaces', slug: 'necklaces' },
  { id: 'huggies', label: 'Huggies', slug: 'huggies' },
]

export default function CategoryTiles() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-5xl text-brand-charcoal font-light">Shop by Category</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map(cat => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.slug}`}
              className="group relative overflow-hidden aspect-[4/5] md:aspect-[3/4] bg-brand-sand"
            >
              <img
                data-strk-img-id={`category-tile-${cat.id}-d4e5f6`}
                data-strk-img={`[category-label-${cat.id}] gold jewelry editorial`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.label}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3
                  id={`category-label-${cat.id}`}
                  className="font-serif text-2xl md:text-3xl text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  {cat.label}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
