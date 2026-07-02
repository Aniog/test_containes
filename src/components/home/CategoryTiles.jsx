import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { categories } from '@/data/products'

function CategoryTile({ cat }) {
  return (
    <Link
      to={cat.path}
      className="group relative overflow-hidden aspect-[3/4] bg-parchment block"
    >
      <img
        data-strk-img-id={cat.imgId}
        data-strk-img={`[${cat.descId}] [${cat.titleId}]`}
        data-strk-img-ratio="3x4"
        data-strk-img-width="600"
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        alt={cat.label}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      {/* Dark overlay on hover */}
      <div className="absolute inset-0 bg-velvet/20 group-hover:bg-velvet/50 transition-colors duration-400" />

      {/* Label */}
      <div className="absolute inset-0 flex flex-col items-center justify-end pb-8">
        <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
          <p
            id={cat.titleId}
            className="font-serif text-xl md:text-2xl tracking-widest uppercase text-cream text-center"
          >
            {cat.label}
          </p>
          <div className="w-8 h-px bg-champagne mx-auto mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <p className="font-sans text-[10px] tracking-widest uppercase text-cream/80 text-center mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Shop Now
          </p>
        </div>
      </div>

      {/* Hidden desc for image query */}
      <span id={cat.descId} className="sr-only">{cat.desc}</span>
    </Link>
  )
}

export default function CategoryTiles() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="font-sans text-[10px] tracking-widest3 uppercase text-champagne mb-3">
            Explore
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-velvet">
            Shop by Category
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {categories.map(cat => (
            <CategoryTile key={cat.id} cat={cat} />
          ))}
        </div>
      </div>
    </section>
  )
}
