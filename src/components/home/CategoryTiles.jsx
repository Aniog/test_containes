import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const categories = [
  { id: 'earrings', name: 'Earrings', imgId: 'cat-earrings-x1y2z3' },
  { id: 'necklaces', name: 'Necklaces', imgId: 'cat-necklaces-a4b5c6' },
  { id: 'huggies', name: 'Huggies', imgId: 'cat-huggies-d7e8f9' },
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
          <h2 className="font-serif text-3xl md:text-5xl font-light text-brand-charcoal">
            Shop by Category
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map(cat => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative aspect-[4/5] md:aspect-[3/4] bg-brand-ivory overflow-hidden"
            >
              {/* Background */}
              <div
                className="absolute inset-0"
                data-strk-bg-id={cat.imgId}
                data-strk-bg={`[cat-${cat.id}-name] gold jewelry`}
                data-strk-bg-ratio="3x4"
                data-strk-bg-width="600"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
              {/* Label */}
              <div className="absolute inset-0 flex items-center justify-center">
                <h3
                  id={`cat-${cat.id}-name`}
                  className="font-serif text-2xl md:text-3xl text-white font-light tracking-wide group-hover:scale-105 transition-transform duration-500"
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
