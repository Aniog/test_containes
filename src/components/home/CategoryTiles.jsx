import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const tiles = [
  {
    id: 'earrings',
    name: 'Earrings',
    query: 'gold earrings editorial close up',
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    query: 'gold necklace on model editorial',
  },
  {
    id: 'huggies',
    name: 'Huggies',
    query: 'gold huggie earrings ear stack',
  },
]

export default function CategoryTiles() {
  const containerRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current) return
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="bg-warm-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-stone">
            Shop by Category
          </p>
          <h2 className="mt-3 font-serif text-4xl text-ink md:text-5xl">
            Find Your Finish
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {tiles.map((tile) => (
            <Link
              key={tile.id}
              to={`/shop?category=${tile.id}`}
              className="group relative aspect-[4/5] overflow-hidden bg-ink"
            >
              <img
                data-strk-img-id={`category-tile-${tile.id}`}
                data-strk-img={`[category-name-${tile.id}]`}
                data-strk-img-ratio="4x5"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={tile.name}
                className="h-full w-full object-cover opacity-80 transition-all duration-500 group-hover:scale-105 group-hover:opacity-60"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="border border-warm-white/40 bg-warm-white/10 px-8 py-4 backdrop-blur-sm transition-all duration-300 group-hover:bg-warm-white/90 group-hover:text-ink">
                  <h3
                    id={`category-name-${tile.id}`}
                    className="text-product text-sm font-medium text-warm-white group-hover:text-ink"
                  >
                    {tile.name}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
