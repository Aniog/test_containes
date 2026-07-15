import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { categories } from '@/data/products'

const categoryImages = {
  Earrings: { imgId: 'cat-earrings-n4o5p6', desc: 'Statement & everyday earrings' },
  Necklaces: { imgId: 'cat-necklaces-q7r8s9', desc: 'Layered & pendant necklaces' },
  Huggies: { imgId: 'cat-huggies-t0u1v2', desc: 'Snug-fit huggie earrings' },
}

export default function ShopByCategory() {
  const containerRef = useRef(null)
  const [hoveredCat, setHoveredCat] = useState(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="section-padding bg-warm-cream">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2
            id="category-title"
            className="font-serif text-3xl md:text-4xl text-deep-charcoal tracking-wide"
          >
            Shop by Category
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map(cat => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.slug}`}
              className="group relative aspect-[4x5] md:aspect-[3x4] overflow-hidden"
              onMouseEnter={() => setHoveredCat(cat.id)}
              onMouseLeave={() => setHoveredCat(null)}
            >
              <img
                data-strk-img-id={categoryImages[cat.name]?.imgId}
                data-strk-img={`[cat-${cat.id}-desc] [cat-${cat.id}-name] [category-title]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Overlay */}
              <div className={`absolute inset-0 bg-deep-charcoal/30 transition-all duration-500 ${hoveredCat === cat.id ? 'bg-deep-charcoal/50' : ''}`} />
              {/* Label */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <h3
                  id={`cat-${cat.id}-name`}
                  className="font-serif text-2xl md:text-3xl text-warm-cream tracking-wide"
                >
                  {cat.name}
                </h3>
                <p
                  id={`cat-${cat.id}-desc`}
                  className={`font-sans text-xs text-warm-cream/80 tracking-wide mt-1 transition-all duration-300 ${hoveredCat === cat.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}
                >
                  {categoryImages[cat.name]?.desc}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
