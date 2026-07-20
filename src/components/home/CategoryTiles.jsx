import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const tiles = [
  { id: 'earrings', name: 'Earrings', path: '/shop?category=earrings', imgId: 'cat-earrings-gold-tile-a1' },
  { id: 'necklaces', name: 'Necklaces', path: '/shop?category=necklaces', imgId: 'cat-necklace-gold-tile-b2' },
  { id: 'huggies', name: 'Huggies', path: '/shop?category=earrings', imgId: 'cat-huggies-gold-tile-c3' },
]

export default function CategoryTiles() {
  const containerRef = useRef(null)

  useEffect(() => {
    const frameId = requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => cancelAnimationFrame(frameId)
  }, [])

  return (
    <section className="py-16 lg:py-24 bg-white" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-xs tracking-widest uppercase text-gold-600 font-medium">Browse by</span>
          <h2 className="font-serif text-3xl md:text-4xl text-dark-900 mt-3">Shop by Category</h2>
          <div className="w-12 h-px bg-gold-400 mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiles.map((tile) => (
            <Link
              key={tile.id}
              to={tile.path}
              className="group relative aspect-[4/5] overflow-hidden bg-dark-100 block"
            >
              <img
                data-strk-img-id={tile.imgId}
                data-strk-img={`[cat-name-${tile.id}]`}
                data-strk-img-ratio="4x5"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={tile.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-dark-900/0 group-hover:bg-dark-900/30 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white/0 group-hover:text-white text-lg tracking-widest uppercase font-serif font-medium transition-all duration-500">
                  {tile.name}
                </span>
              </div>
              <span id={`cat-name-${tile.id}`} className="hidden">{tile.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}