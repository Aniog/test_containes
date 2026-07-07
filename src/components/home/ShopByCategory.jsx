import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { categories } from '@/data/products'

function CategoryTile({ category }) {
  const [hovered, setHovered] = useState(false)

  return (
    <Link
      to={`/shop?category=${category.id}`}
      className="relative aspect-[4/5] md:aspect-[3/4] overflow-hidden group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img
        alt={category.name}
        data-strk-img-id={category.imgId}
        data-strk-img={`[${category.descId}] [${category.titleId}]`}
        data-strk-img-ratio="3x4"
        data-strk-img-width="600"
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        className={`w-full h-full object-cover transition-transform duration-700 ${hovered ? 'scale-105' : 'scale-100'}`}
      />
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/35 transition-colors duration-500" />
      <div className="absolute inset-0 flex items-center justify-center">
        <h3
          id={category.titleId}
          className={`font-serif text-2xl md:text-3xl tracking-[0.15em] uppercase text-white transition-all duration-500 ${hovered ? 'tracking-[0.2em]' : ''}`}
        >
          {category.name}
        </h3>
      </div>
      <p id={category.descId} className="sr-only">
        {category.name} jewelry collection
      </p>
    </Link>
  )
}

export default function ShopByCategory() {
  const containerRef = useRef(null)

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current)
    }
  }, [])

  return (
    <section ref={containerRef} className="py-20 md:py-28">
      <div className="max-w-8xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl tracking-[0.05em] text-stone-900">
            Shop by Category
          </h2>
          <div className="w-12 h-px bg-gold mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat) => (
            <CategoryTile key={cat.id} category={cat} />
          ))}
        </div>
      </div>
    </section>
  )
}
