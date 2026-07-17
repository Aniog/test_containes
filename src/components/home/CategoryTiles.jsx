import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import { ArrowUpRight } from 'lucide-react'
import { CATEGORY_TILES } from '@/data/products'
import strkImgConfig from '@/strk-img-config.json'

export default function CategoryTiles() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section
      id="categories"
      ref={containerRef}
      className="py-20 md:py-28 bg-cream"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="text-center mb-12 md:mb-16">
          <p id="categories-eyebrow" className="eyebrow">
            The Edit
          </p>
          <h2
            id="categories-title"
            className="mt-4 font-serif text-4xl md:text-5xl text-espresso font-light tracking-tight"
          >
            Shop by <em className="italic">category</em>
          </h2>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
          {CATEGORY_TILES.map((cat, idx) => (
            <li key={cat.id}>
              <Link
                to={`/shop?category=${cat.id}`}
                id={`category-tile-${cat.id}`}
                className="group relative block aspect-[3/4] overflow-hidden bg-beige"
              >
                <img
                  alt={cat.label}
                  data-strk-img-id={`category-tile-img-${cat.id}`}
                  data-strk-img={`${cat.image} [category-tile-${cat.id}] [categories-title] [categories-eyebrow]`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="900"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/55 via-espresso/10 to-transparent transition-opacity duration-500" />
                <div className="absolute inset-x-6 bottom-6 md:inset-x-8 md:bottom-8 flex items-end justify-between">
                  <span className="font-serif text-cream text-3xl md:text-4xl font-light tracking-tight">
                    {cat.label}
                  </span>
                  <span className="opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-1 group-hover:translate-y-0 text-cream/90">
                    <ArrowUpRight size={22} strokeWidth={1.5} />
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
