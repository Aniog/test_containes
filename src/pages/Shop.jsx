import { useEffect, useMemo, useRef, useState } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import { SlidersHorizontal } from 'lucide-react'
import { useSearchParams } from 'react-router-dom'
import FilterSidebar from '@/components/shop/FilterSidebar.jsx'
import ProductGrid from '@/components/shop/ProductGrid.jsx'
import { products } from '@/data/store.js'
import strkImgConfig from '@/strk-img-config.json'

const sortOptions = {
  featured: 'Featured',
  priceLow: 'Price: Low to High',
  priceHigh: 'Price: High to Low',
  rating: 'Top Rated',
}

function sortProducts(items, sortBy) {
  const sorted = [...items]

  if (sortBy === 'priceLow') {
    return sorted.sort((a, b) => a.price - b.price)
  }

  if (sortBy === 'priceHigh') {
    return sorted.sort((a, b) => b.price - a.price)
  }

  if (sortBy === 'rating') {
    return sorted.sort((a, b) => b.rating - a.rating)
  }

  return sorted
}

function Shop() {
  const [searchParams] = useSearchParams()
  const [isFiltersOpen, setIsFiltersOpen] = useState(false)
  const [sortBy, setSortBy] = useState('featured')
  const [filters, setFilters] = useState({
    category: searchParams.get('category') || 'all',
    priceRange: 'all',
    material: 'all',
  })
  const containerRef = useRef(null)

  useEffect(() => {
    let cleanup = () => {}
    const frameId = window.requestAnimationFrame(() => {
      cleanup = ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })

    return () => {
      window.cancelAnimationFrame(frameId)
      cleanup()
    }
  }, [filters.category, filters.priceRange, filters.material, sortBy])

  const filteredProducts = useMemo(() => {
    const filtered = products.filter((product) => {
      if (filters.category !== 'all' && product.category !== filters.category) {
        return false
      }

      if (filters.priceRange !== 'all' && product.priceRange !== filters.priceRange) {
        return false
      }

      if (filters.material !== 'all' && product.material !== filters.material) {
        return false
      }

      return true
    })

    return sortProducts(filtered, sortBy)
  }, [filters, sortBy])

  const updateFilter = (key, value) => {
    setFilters((current) => ({ ...current, [key]: value }))
  }

  return (
    <div ref={containerRef} className="bg-stone-50 pt-28 md:pt-32">
      <section className="mx-auto max-w-7xl px-6 pb-8 pt-6 md:px-8 md:pb-12">
        <p className="text-xs uppercase tracking-[0.32em] text-stone-500">Shop</p>
        <div className="mt-4 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl space-y-4">
            <h1 className="font-display text-5xl leading-none text-stone-900 md:text-6xl">
              An elevated edit of demi-fine gold jewelry
            </h1>
            <p className="text-sm leading-8 text-stone-600 md:text-base">
              Filter by silhouette, material, and price to build a polished set of everyday favorites.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => setIsFiltersOpen((current) => !current)}
              className="inline-flex items-center gap-2 rounded-full border border-stone-300 bg-white px-5 py-3 text-xs uppercase tracking-[0.26em] text-stone-800 lg:hidden"
            >
              <SlidersHorizontal className="h-4 w-4" />
              Filters
            </button>
            <label className="flex items-center gap-3 text-xs uppercase tracking-[0.26em] text-stone-500">
              Sort
              <select
                value={sortBy}
                onChange={(event) => setSortBy(event.target.value)}
                className="rounded-full border border-stone-300 bg-white px-4 py-3 text-xs uppercase tracking-[0.2em] text-stone-900 focus:outline-none"
              >
                {Object.entries(sortOptions).map(([value, label]) => (
                  <option key={value} value={value}>
                    {label}
                  </option>
                ))}
              </select>
            </label>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-6 pb-16 md:px-8 md:pb-24 lg:grid-cols-[19rem_1fr]">
        <div className={`${isFiltersOpen ? 'block' : 'hidden'} lg:block`}>
          <FilterSidebar filters={filters} onFilterChange={updateFilter} />
        </div>
        <div className="space-y-6">
          <div className="flex items-center justify-between text-sm text-stone-600">
            <p>{filteredProducts.length} products</p>
          </div>
          <ProductGrid products={filteredProducts} />
          {filteredProducts.length === 0 ? (
            <div className="rounded-[2rem] border border-stone-200 bg-white px-6 py-12 text-center text-stone-600 shadow-[0_18px_50px_rgba(28,25,23,0.05)]">
              No products match these filters yet.
            </div>
          ) : null}
        </div>
      </section>
    </div>
  )
}

export default Shop
