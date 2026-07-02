import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import StrkImage from '@/components/ui/StrkImage'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const tiles = [
  {
    id: 'tile-earrings',
    label: 'Earrings',
    to: '/shop?category=earrings',
    query: 'gold earrings collection editorial dark background jewelry still life',
  },
  {
    id: 'tile-necklaces',
    label: 'Necklaces',
    to: '/shop?category=necklaces',
    query: 'gold necklace pendant editorial jewelry still life warm light',
  },
  {
    id: 'tile-huggies',
    label: 'Huggies',
    to: '/shop?category=huggies',
    query: 'gold huggie earrings close up editorial jewelry still life',
  },
]

export default function CategoryTiles() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="bg-[#F6F3EF] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.25em] text-[#C49A6C]">
            Shop by Category
          </p>
          <h2 className="font-serif text-3xl text-[#1A1512] md:text-4xl">
            Find Your Signature
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {tiles.map((tile) => (
            <Link
              key={tile.id}
              to={tile.to}
              className="group relative aspect-[4/5] overflow-hidden bg-[#E4DDD4]"
            >
              <StrkImage
                img={false}
                id={tile.id}
                query={tile.query}
                ratio="4x3"
                width="800"
                className="absolute inset-0 h-full w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[#1A1512]/30 transition-colors duration-300 group-hover:bg-[#1A1512]/40" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="translate-y-2 transform border-b border-transparent pb-1 font-serif text-2xl uppercase tracking-[0.2em] text-[#F6F3EF] transition-all duration-300 group-hover:translate-y-0 group-hover:border-[#C49A6C]">
                  {tile.label}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
