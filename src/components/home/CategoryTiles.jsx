import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { categories } from '@/data/products'

function CategoryTile({ cat }) {
  return (
    <Link
      to={`/shop?category=${cat.id}`}
      className="group relative overflow-hidden block aspect-[3/4] bg-charcoal"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
        data-strk-bg-id={cat.bgId}
        data-strk-bg={`[${cat.descId}] [${cat.titleId}]`}
        data-strk-bg-ratio="3x4"
        data-strk-bg-width="600"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-obsidian/30 group-hover:bg-obsidian/50 transition-colors duration-300" />

      {/* Label */}
      <div className="absolute inset-0 flex flex-col items-center justify-end pb-8 px-4">
        <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
          <h3
            id={cat.titleId}
            className="font-serif text-2xl md:text-3xl font-light text-ivory uppercase tracking-[0.2em] text-center mb-2"
          >
            {cat.label}
          </h3>
          <p id={cat.descId} className="text-xs font-sans text-ivory/70 uppercase tracking-[0.15em] text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {cat.description}
          </p>
          <div className="mt-3 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-[10px] font-sans font-medium uppercase tracking-[0.2em] text-gold border-b border-gold pb-0.5">
              Shop Now
            </span>
          </div>
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
    <section ref={containerRef} className="bg-ivory py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-10 md:mb-14">
          <p className="text-xs font-sans font-medium uppercase tracking-[0.25em] text-gold mb-3">
            Explore
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-light text-ink tracking-wide">
            Shop by Category
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map(cat => (
            <CategoryTile key={cat.id} cat={cat} />
          ))}
        </div>
      </div>
    </section>
  )
}
