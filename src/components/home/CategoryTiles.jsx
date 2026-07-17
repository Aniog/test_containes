import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const tiles = [
  {
    id: 'earrings',
    label: 'Earrings',
    imgId: 'cat-earrings-s1t2u3',
    labelId: 'cat-earrings-label',
  },
  {
    id: 'necklaces',
    label: 'Necklaces',
    imgId: 'cat-necklaces-v4w5x6',
    labelId: 'cat-necklaces-label',
  },
  {
    id: 'huggies',
    label: 'Huggies',
    imgId: 'cat-huggies-y7z8a9',
    labelId: 'cat-huggies-label',
  },
]

export default function CategoryTiles() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-16 md:py-24 border-t border-border">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
        <h2 className="font-serif text-3xl md:text-4xl font-medium text-charcoal text-center mb-10 md:mb-14">
          Shop by Category
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {tiles.map(tile => (
            <Link
              key={tile.id}
              to={`/shop?category=${tile.id}`}
              className="group relative aspect-[4/5] md:aspect-[3/4] bg-muted overflow-hidden"
            >
              <div
                className="absolute inset-0 group-hover:scale-105 transition-transform duration-500"
                data-strk-bg-id={tile.imgId}
                data-strk-bg={`[${tile.labelId}] gold jewelry`}
                data-strk-bg-ratio="3x4"
                data-strk-bg-width="600"
              />
              <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-charcoal/30 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3
                  id={tile.labelId}
                  className="font-serif text-2xl md:text-3xl text-white font-medium"
                >
                  {tile.label}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
