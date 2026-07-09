import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '../strk-img-config.json'

const categories = [
  { id: 'earrings', label: 'Earrings', query: 'elegant gold earrings jewelry on dark background' },
  { id: 'necklaces', label: 'Necklaces', query: 'gold necklace jewelry on dark background luxury' },
  { id: 'huggies', label: 'Huggies', query: 'gold huggie hoop earrings jewelry closeup' },
]

export default function CategoryTiles() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-velmora-cream">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs uppercase tracking-[0.25em] text-velmora-gold mb-3">Browse</p>
          <h2 className="font-serif text-3xl md:text-4xl text-velmora-charcoal">Shop by Category</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="relative aspect-[4/5] overflow-hidden group"
            >
              <img
                data-strk-img-id={`cat-tile-${cat.id}`}
                data-strk-img={`[cat-label-${cat.id}] ${cat.query}`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1.25'/%3E"
                alt={cat.label}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/35 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3
                  id={`cat-label-${cat.id}`}
                  className="font-serif text-xl md:text-2xl text-white uppercase tracking-[0.2em] border-b border-white/0 group-hover:border-white/80 pb-2 transition-all duration-500"
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