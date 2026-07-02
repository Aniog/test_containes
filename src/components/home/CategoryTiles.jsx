import React from 'react'
import { Link } from 'react-router-dom'
import { categories } from '@/data/products'
import { StrkBackground } from '@/components/ui/StrkImage'
import { useImageLoader } from '@/hooks/useImageLoader'

const categoryQueries = {
  earrings: 'gold earrings on dark background editorial luxury jewelry',
  necklaces: 'gold necklace on model neck warm editorial jewelry',
  huggies: 'gold huggie hoop earrings close up editorial',
  sets: 'gold jewelry gift set necklace earrings velvet box',
}

export function CategoryTiles() {
  const ref = useImageLoader()

  return (
    <section ref={ref} className="bg-cream-50 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="font-sans text-[11px] font-medium uppercase tracking-[0.22em] text-gold">
            Shop by Category
          </p>
          <h2 className="mt-3 font-serif text-4xl text-espresso-900 md:text-5xl">
            Find Your Finish
          </h2>
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {categories.slice(0, 3).map((category) => (
            <Link
              key={category.id}
              to={`/shop?category=${category.id}`}
              className="group relative aspect-[4/5] overflow-hidden bg-cream-200 md:aspect-[3/4]"
            >
              <StrkBackground
                id={`category-bg-${category.id}`}
                query={`[category-title-${category.id}] ${categoryQueries[category.id]}`}
                ratio="3x4"
                width={800}
                className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-espresso-900/20 transition-colors duration-500 group-hover:bg-espresso-900/35" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3
                  id={`category-title-${category.id}`}
                  className="product-name text-xl text-cream-50"
                >
                  {category.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
