import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight } from 'lucide-react'

const tiles = [
  { id: 'earrings', name: 'Earrings', slug: 'earrings', imgId: 'cat-earrings-main' },
  { id: 'necklaces', name: 'Necklaces', slug: 'necklaces', imgId: 'cat-necklaces-main' },
  { id: 'huggies', name: 'Huggies', slug: 'huggies', imgId: 'cat-huggies-main' },
]

export default function CategoryTiles() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section className="section-pad py-20 md:py-28 max-w-[1440px] mx-auto" ref={containerRef}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {tiles.map((tile) => (
          <Link
            key={tile.id}
            to={`/shop?category=${tile.slug}`}
            className="group relative aspect-[4/5] bg-velvet-100 overflow-hidden cursor-pointer"
          >
            <img
              alt={`${tile.name} collection`}
              data-strk-img-id={tile.imgId}
              data-strk-img={`[cat-label-${tile.id}] gold demi-fine jewelry`}
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-velvet-950/50 via-velvet-950/10 to-transparent transition-opacity duration-500 group-hover:opacity-70" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <span
                id={`cat-label-${tile.id}`}
                className="font-serif text-2xl md:text-3xl text-cream-50 tracking-wide"
              >
                {tile.name}
              </span>
              <div className="flex items-center gap-2 mt-2 text-cream-50/80 text-xs font-sans tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-1 group-hover:translate-y-0 transform transition-transform duration-300">
                Shop Now <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
