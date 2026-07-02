import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const tiles = [
  { id: 'earrings', name: 'Earrings', link: '/shop?category=earrings' },
  { id: 'necklaces', name: 'Necklaces', link: '/shop?category=necklaces' },
  { id: 'huggies', name: 'Huggies', link: '/shop?category=huggies' },
]

export default function CategoryTiles() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-16 md:py-24 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 id="cat-section-title" className="font-serif text-3xl md:text-4xl text-charcoal">Shop by Category</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {tiles.map(tile => (
            <Link
              key={tile.id}
              to={tile.link}
              className="group relative aspect-[4/5] md:aspect-[3/4] overflow-hidden rounded-sm"
            >
              {/* Background */}
              <div
                className="absolute inset-0 bg-muted group-hover:scale-105 transition-transform duration-500"
                data-strk-bg-id={`cat-tile-${tile.id}-bg-4m9p`}
                data-strk-bg={`[cat-tile-${tile.id}-name] [cat-section-title]`}
                data-strk-bg-ratio="3x4"
                data-strk-bg-width="600"
              />
              <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-charcoal/40 transition-all duration-300" />

              {/* Label */}
              <div className="absolute inset-0 flex items-center justify-center">
                <h3
                  id={`cat-tile-${tile.id}-name`}
                  className="font-serif text-2xl md:text-3xl text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0"
                >
                  {tile.name}
                </h3>
              </div>

              {/* Always visible label on mobile */}
              <div className="absolute bottom-0 left-0 right-0 p-4 md:hidden">
                <h3 className="font-serif text-xl text-white">{tile.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
