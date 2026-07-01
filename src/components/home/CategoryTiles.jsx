import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { categories } from '../../lib/data'

export default function CategoryTiles() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="bg-velmora-cream py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-8 text-center font-serif text-3xl text-velmora-espresso md:mb-12 md:text-4xl">
          Shop by Category
        </h2>
        <div className="grid gap-4 md:grid-cols-3">
          {categories.map((category) => {
            const titleId = `category-title-${category.id}`
            return (
              <Link
                key={category.id}
                to={`/shop?category=${category.id}`}
                className="group relative aspect-[3/4] overflow-hidden bg-velmora-stone md:aspect-[3/4]"
              >
                <img
                  data-strk-img-id={`category-img-${category.id}`}
                  data-strk-img={`[${titleId}]`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={category.label}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 transition-colors duration-300 group-hover:bg-black/30" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3
                    id={titleId}
                    className="translate-y-2 font-sans text-lg font-semibold uppercase tracking-widest-plus text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 md:text-xl"
                  >
                    {category.label}
                  </h3>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
