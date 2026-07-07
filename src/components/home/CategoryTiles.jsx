import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { categories } from '@/data/products'

function CategoryTile({ cat }) {
  return (
    <Link
      to={`/shop?category=${cat.id}`}
      className="group relative overflow-hidden bg-velmora-charcoal aspect-portrait block"
    >
      <img
        data-strk-img-id={cat.imgId}
        data-strk-img={`[${cat.descId}] [${cat.titleId}] gold jewelry`}
        data-strk-img-ratio="3x4"
        data-strk-img-width="600"
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        alt={cat.label}
        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-velmora-obsidian/30 group-hover:bg-velmora-obsidian/50 transition-colors duration-500" />

      {/* Label */}
      <div className="absolute inset-0 flex flex-col items-center justify-end pb-8 md:pb-10">
        <div className="text-center transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
          <h3
            id={cat.titleId}
            className="font-cormorant text-2xl md:text-3xl font-light tracking-widest uppercase text-velmora-text-light"
          >
            {cat.label}
          </h3>
          <p
            id={cat.descId}
            className="font-manrope text-[10px] tracking-widest uppercase text-velmora-gold mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            {cat.description}
          </p>
          <div className="w-8 h-px bg-velmora-gold mx-auto mt-3 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
        </div>
      </div>
    </Link>
  )
}

export default function CategoryTiles() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section className="py-20 md:py-28 bg-velmora-linen">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-10 md:mb-14">
          <p className="font-manrope text-[10px] tracking-[0.3em] uppercase text-velmora-gold mb-2">
            Explore
          </p>
          <h2 className="font-cormorant text-3xl md:text-4xl font-light text-velmora-text-dark">
            Shop by Category
          </h2>
        </div>

        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map(cat => (
            <CategoryTile key={cat.id} cat={cat} />
          ))}
        </div>
      </div>
    </section>
  )
}
