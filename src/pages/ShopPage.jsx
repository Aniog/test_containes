import { useEffect, useMemo, useRef, useState } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import CollectionHero from '@/components/shop/CollectionHero'
import FilterSidebar from '@/components/shop/FilterSidebar'
import SortDropdown from '@/components/shop/SortDropdown'
import ProductCard from '@/components/shared/ProductCard'
import { products } from '@/data/store'
import strkImgConfig from '@/strk-img-config.json'

const priceMatches = {
  All: () => true,
  '$0–$50': (price) => price <= 50,
  '$51–$80': (price) => price >= 51 && price <= 80,
  '$81–$120': (price) => price >= 81 && price <= 120,
}

const sortProducts = (items, sortValue) => {
  if (sortValue === 'price-low') {
    return [...items].sort((a, b) => a.price - b.price)
  }

  if (sortValue === 'price-high') {
    return [...items].sort((a, b) => b.price - a.price)
  }

  if (sortValue === 'rating') {
    return [...items].sort((a, b) => b.rating - a.rating)
  }

  return items
}

const defaultFilters = {
  category: 'All',
  price: 'All',
  material: 'All',
}

function ShopPage({ onAddToCart }) {
  const [sortValue, setSortValue] = useState('featured')
  const [activeFilters, setActiveFilters] = useState(defaultFilters)
  const containerRef = useRef(null)

  const visibleProducts = useMemo(() => {
    const filtered = products.filter((product) => {
      const categoryMatch =
        activeFilters.category === 'All' || product.category === activeFilters.category
      const priceMatch = priceMatches[activeFilters.price](product.price)
      const materialMatch =
        activeFilters.material === 'All' || product.material === activeFilters.material

      return categoryMatch && priceMatch && materialMatch
    })

    return sortProducts(filtered, sortValue)
  }, [activeFilters, sortValue])

  useEffect(() => {
    let cleanup = () => {}

    const frameId = window.requestAnimationFrame(() => {
      if (!containerRef.current) {
        return
      }

      cleanup = ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })

    return () => {
      window.cancelAnimationFrame(frameId)
      cleanup()
    }
  }, [sortValue, activeFilters.category, activeFilters.price, activeFilters.material])

  return (
    <div ref={containerRef} className="bg-stone-50">
      <CollectionHero />
      <section className="py-12 sm:py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[280px_1fr] lg:px-10">
          <FilterSidebar activeFilters={activeFilters} setActiveFilters={setActiveFilters} />

          <div className="space-y-6">
            <div className="flex flex-col gap-4 rounded-[2rem] border border-stone-200 bg-white p-5 shadow-sm sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-stone-500">Curated edit</p>
                <h2 className="mt-2 font-serif text-4xl text-stone-900">
                  {visibleProducts.length} pieces available
                </h2>
              </div>
              <SortDropdown value={sortValue} onChange={setSortValue} />
            </div>

            {visibleProducts.length > 0 ? (
              <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {visibleProducts.map((product) => (
                  <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
                ))}
              </div>
            ) : (
              <div className="rounded-[2rem] border border-stone-200 bg-white px-6 py-12 text-center text-stone-900 shadow-sm sm:px-10">
                <p className="text-xs uppercase tracking-[0.35em] text-stone-500">No matches found</p>
                <h3 className="mt-4 font-serif text-3xl sm:text-4xl">Refine your edit</h3>
                <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-stone-600 sm:text-base">
                  Try clearing a filter or adjusting your price range to discover more of the Velmora collection.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setActiveFilters(defaultFilters)
                    setSortValue('featured')
                  }}
                  className="mt-8 inline-flex items-center justify-center rounded-full border border-stone-900 px-6 py-3 text-xs uppercase tracking-[0.3em] text-stone-900 transition duration-300 hover:bg-stone-900 hover:text-stone-50"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}

export default ShopPage
