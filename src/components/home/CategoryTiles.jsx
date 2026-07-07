import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const categories = [
  {
    id: 'earrings',
    name: 'Earrings',
    query: 'gold earrings editorial jewelry',
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    query: 'gold necklace editorial jewelry',
  },
  {
    id: 'huggies',
    name: 'Huggies',
    query: 'gold huggie earrings editorial jewelry',
  },
]

export default function CategoryTiles() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="bg-cream py-16 md:py-24">
      <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-12">
        <h2 className="mb-10 text-center font-serif text-3xl text-espresso md:text-4xl">
          Shop by Category
        </h2>

        <div className="grid gap-4 md:grid-cols-3">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/shop?category=${category.id}`}
              className="group relative aspect-[4/5] overflow-hidden bg-parchment"
            >
              <img
                alt={category.name}
                data-strk-img-id={`category-tile-${category.id}`}
                data-strk-img={`[category-${category.id}-label] ${category.query}`}
                data-strk-img-ratio="4x5"
                data-strk-img-width="700"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-espresso/20 transition-colors duration-300 group-hover:bg-espresso/35" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span
                  id={`category-${category.id}-label`}
                  className="border border-cream/60 px-8 py-3 font-serif text-lg uppercase tracking-[0.18em] text-cream transition-all duration-300 group-hover:border-cream group-hover:bg-cream group-hover:text-espresso"
                >
                  {category.name}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
