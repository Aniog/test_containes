import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { categoryTiles } from '@/data/products'
import { ArrowUpRight } from 'lucide-react'

export default function CategoryTiles() {
  const containerRef = useRef(null)
  useEffect(() => {
    if (!containerRef.current) return
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="bg-ivory py-20 md:py-28">
      <div className="container-page">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {categoryTiles.map((tile) => (
            <Link
              key={tile.id}
              to={`/shop?category=${tile.id}`}
              className="group relative block aspect-[4/5] overflow-hidden bg-noir"
            >
              <img
                alt={tile.label}
                data-strk-img-id={tile.imgId}
                data-strk-img={tile.imgQuery}
                data-strk-img-ratio="4x5"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-noir/0 via-noir/0 to-noir/55 group-hover:to-noir/70 transition-colors duration-500" />
              <div className="absolute inset-0 flex flex-col items-center justify-end pb-8 px-6 text-ivory">
                <h3 className="font-serif text-3xl md:text-4xl">
                  {tile.label}
                </h3>
                <span className="mt-3 inline-flex items-center gap-2 text-[11px] uppercase tracking-widest2 font-medium opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  Shop {tile.label}
                  <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={1.4} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
