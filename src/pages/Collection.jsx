import { useState, useMemo, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SlidersHorizontal } from 'lucide-react'
import { products } from '@/data/products'
import { FilterSidebar } from '@/components/shop/FilterSidebar'
import { SortDropdown } from '@/components/shop/SortDropdown'
import { ProductGrid } from '@/components/shop/ProductGrid'
import { useImageLoader } from '@/hooks/useImageLoader'

const priceRangeMap = {
  under50: { min: 0, max: 50 },
  '50to80': { min: 50, max: 80 },
  '80plus': { min: 80, max: Infinity },
}

export default function Collection() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [filters, setFilters] = useState({
    category: searchParams.get('category') ? [searchParams.get('category')] : [],
    price: [],
    material: [],
  })
  const [sort, setSort] = useState('featured')
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const gridRef = useImageLoader([filters, sort])

  useEffect(() => {
    const category = searchParams.get('category')
    if (category) {
      setFilters((prev) => ({
        ...prev,
        category: [category],
      }))
    }
  }, [searchParams])

  const filteredProducts = useMemo(() => {
    let result = [...products]

    if (filters.category.length > 0) {
      result = result.filter((p) => filters.category.includes(p.category))
    }

    if (filters.price.length > 0) {
      result = result.filter((p) =>
        filters.price.some((rangeId) => {
          const { min, max } = priceRangeMap[rangeId]
          return p.price >= min && p.price < max
        })
      )
    }

    if (filters.material.length > 0) {
      result = result.filter((p) => filters.material.includes(p.material))
    }

    switch (sort) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price)
        break
      case 'price-desc':
        result.sort((a, b) => b.price - a.price)
        break
      case 'rating':
        result.sort((a, b) => b.rating - a.rating)
        break
      case 'newest':
        result.sort((a, b) => (b.badge === 'New' ? 1 : 0) - (a.badge === 'New' ? 1 : 0))
        break
      default:
        break
    }

    return result
  }, [filters, sort])

  return (
    <div className="bg-velmora-cream min-h-screen animate-fadeIn">
      <section className="pt-24 md:pt-28 pb-16 md:pb-24">
        <div className="max-w-[1440px] mx-auto px-5 md:px-8 lg:px-12">
          {/* Header */}
          <div className="text-center mb-10 md:mb-14">
            <p className="font-sans text-xs tracking-[0.25em] uppercase text-velmora-gold-dark mb-3">The Collection</p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-velmora-dark">Shop All Jewelry</h1>
          </div>

          {/* Toolbar */}
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-velmora-sand">
            <button
              type="button"
              onClick={() => setMobileFiltersOpen(true)}
              className="md:hidden flex items-center gap-2 font-sans text-xs tracking-widest uppercase text-velmora-dark"
            >
              <SlidersHorizontal size={16} />
              Filters
            </button>
            <p className="hidden md:block text-sm text-velmora-muted">
              {filteredProducts.length} piece{filteredProducts.length !== 1 ? 's' : ''}
            </p>
            <SortDropdown value={sort} onChange={setSort} />
          </div>

          <div className="flex gap-10 lg:gap-16">
            <FilterSidebar
              filters={filters}
              setFilters={setFilters}
              isOpen={mobileFiltersOpen}
              onClose={() => setMobileFiltersOpen(false)}
              className="w-64 flex-shrink-0"
            />
            <div ref={gridRef} className="flex-1 min-w-0">
              <p className="md:hidden text-sm text-velmora-muted mb-5">
                {filteredProducts.length} piece{filteredProducts.length !== 1 ? 's' : ''}
              </p>
              <ProductGrid products={filteredProducts} />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
