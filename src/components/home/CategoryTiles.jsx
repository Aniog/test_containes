import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const categories = [
  { name: 'Earrings', slug: 'earrings', imgId: 'cat-earrings-m4n5' },
  { name: 'Necklaces', slug: 'necklaces', imgId: 'cat-necklaces-p6q7' },
  { name: 'Huggies', slug: 'huggies', imgId: 'cat-huggies-r8s9' },
]

export default function CategoryTiles() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-20 lg:py-28 bg-velmora-sand">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 id="category-section-title" className="font-serif text-3xl lg:text-4xl text-velmora-charcoal font-light">
            Shop by Category
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
          {categories.map(cat => (
            <Link
              key={cat.slug}
              to={`/shop?category=${cat.slug}`}
              className="group relative aspect-[4/5] overflow-hidden"
            >
              <img
                data-strk-img-id={cat.imgId}
                data-strk-img={`[cat-${cat.slug}-label] [category-section-title] gold jewelry`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="500"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
              {/* Label */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span
                  id={`cat-${cat.slug}-label`}
                  className="text-white text-xs uppercase tracking-extra-wide font-medium border border-white/60 px-6 py-2.5 group-hover:bg-white group-hover:text-velmora-charcoal transition-all duration-300"
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
