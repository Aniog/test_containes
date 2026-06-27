import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const cats = [
  { id: 'earrings', name: 'Earrings', query: 'elegant gold earrings on dark velvet' },
  { id: 'necklaces', name: 'Necklaces', query: 'delicate gold necklace on woman collarbone' },
  { id: 'huggies', name: 'Huggies', query: 'gold huggie hoop earrings close up' },
]

export default function CategoryTiles() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal">Shop by Category</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {cats.map(cat => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="relative aspect-[4/5] md:aspect-[3/4] overflow-hidden group"
            >
              <img
                data-strk-img-id={`cat-tile-${cat.id}-d4e5`}
                data-strk-img={`[cat-name-${cat.id}]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.name}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/35 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-end justify-center pb-8">
                <span
                  id={`cat-name-${cat.id}`}
                  className="font-serif text-xl md:text-2xl text-white tracking-wider uppercase"
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
