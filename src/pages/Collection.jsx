import { useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SlidersHorizontal } from 'lucide-react'
import { PRODUCTS } from '@/data/products'
import FilterSidebar from '@/components/shop/FilterSidebar'
import SortDropdown from '@/components/shop/SortDropdown'
import ProductGrid from '@/components/shop/ProductGrid'
import { useStrkImages } from '@/hooks/useStrkImages'

function parsePriceRange(range) {
  const [min, max] = range.split('-').map(Number)
  return { min, max }
}

export default function Collection() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [sort, setSort] = useState('featured')
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const [filters, setFilters] = useState({
    category: [],
    price: [],
    material: [],
  })

  useEffect(() => {
    const category = searchParams.get('category')
    if (category) {
      setFilters((prev) => ({
        ...prev,
        category: [category],
      }))
    }
  }, [searchParams])

  const filtered = useMemo(() => {
    return PRODUCTS.filter((product) => {
      if (
        filters.category.length > 0 &&
        !filters.category.includes(product.category)
      ) {
        return false
      }
      if (filters.price.length > 0) {
        const matchesPrice = filters.price.some((range) => {
          const { min, max } = parsePriceRange(range)
          if (max === Infinity) return product.price >= min
          return product.price >= min && product.price <= max
        })
        if (!matchesPrice) return false
      }
      return true
    })
  }, [filters])

  const sorted = useMemo(() => {
    const list = [...filtered]
    switch (sort) {
      case 'price-asc':
        return list.sort((a, b) => a.price - b.price)
      case 'price-desc':
        return list.sort((a, b) => b.price - a.price)
      case 'rating':
        return list.sort((a, b) => b.rating - a.rating)
      case 'name':
        return list.sort((a, b) => a.name.localeCompare(b.name))
      default:
        return list
    }
  }, [filtered, sort])

  const containerRef = useStrkImages([filters, sort])

  return (
    <div ref={containerRef} className="pt-24 md:pt-28 pb-16 md:pb-24 bg-cream min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 md:mb-10">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium text-espresso">
            The Collection
          </h1>
          <p className="mt-3 text-sm md:text-base font-light text-taupe max-w-xl">
            Timeless demi-fine pieces designed for everyday elegance and
            special occasions.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 lg:gap-12">
          <FilterSidebar
            filters={filters}
            onChange={setFilters}
            isMobileOpen={mobileFiltersOpen}
            onClose={() => setMobileFiltersOpen(false)}
          />

          <div className="flex-1">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-warm-gray">
              <p className="text-sm text-taupe">
                {sorted.length} {sorted.length === 1 ? 'piece' : 'pieces'}
              </p>
              <div className="flex items-center gap-4">
                <button
                  type="button"
                  onClick={() => setMobileFiltersOpen(true)}
                  className="md:hidden flex items-center gap-2 text-xs font-sans uppercase tracking-ui text-espresso"
                >
                  <SlidersHorizontal size={14} strokeWidth={1.5} />
                  Filters
                </button>
                <SortDropdown value={sort} onChange={setSort} />
              </div>
            </div>

            <ProductGrid products={sorted} />
          </div>
        </div>
      </div>
    </div>
  )
}
