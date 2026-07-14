import React, { useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, X } from 'lucide-react'
import { products, categories } from '@/data/products'
import ProductCard from '@/components/shared/ProductCard'
import { useImageLoader } from '@/hooks/useImageLoader'
import { Button } from '@/components/ui/button'

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'name', label: 'Name' },
]

const priceRanges = [
  { label: 'Under $40', min: 0, max: 40 },
  { label: '$40 – $60', min: 40, max: 60 },
  { label: '$60 – $80', min: 60, max: 80 },
  { label: '$80+', min: 80, max: Infinity },
]

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const initialCategory = searchParams.get('category') || ''

  const [selectedCategories, setSelectedCategories] = useState(
    initialCategory ? [initialCategory] : []
  )
  const [selectedPrices, setSelectedPrices] = useState([])
  const [sort, setSort] = useState('featured')
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  useEffect(() => {
    const cat = searchParams.get('category')
    if (cat) setSelectedCategories([cat])
  }, [searchParams])

  const toggleCategory = (id) => {
    setSelectedCategories((prev) =>
      prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id]
    )
  }

  const togglePrice = (index) => {
    setSelectedPrices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    )
  }

  const filteredProducts = useMemo(() => {
    let result = [...products]

    if (selectedCategories.length > 0) {
      result = result.filter((p) => selectedCategories.includes(p.category))
    }

    if (selectedPrices.length > 0) {
      result = result.filter((p) =>
        selectedPrices.some((i) => {
          const { min, max } = priceRanges[i]
          return p.price >= min && p.price <= max
        })
      )
    }

    switch (sort) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price)
        break
      case 'price-desc':
        result.sort((a, b) => b.price - a.price)
        break
      case 'name':
        result.sort((a, b) => a.name.localeCompare(b.name))
        break
      default:
        break
    }

    return result
  }, [selectedCategories, selectedPrices, sort])

  const clearFilters = () => {
    setSelectedCategories([])
    setSelectedPrices([])
    setSearchParams({})
  }

  const activeFilterCount = selectedCategories.length + selectedPrices.length

  const FilterPanel = ({ mobile = false }) => (
    <div className="space-y-8">
      <div>
        <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-espresso-900 mb-4">Category</h4>
        <div className="space-y-2.5">
          {categories.map((cat) => (
            <label key={cat.id} className="flex cursor-pointer items-center gap-3 text-sm text-warmgray-700 hover:text-espresso-900">
              <input
                type="checkbox"
                className="h-4 w-4 rounded border-cream-300 text-gold-600 focus:ring-gold-500"
                checked={selectedCategories.includes(cat.id)}
                onChange={() => toggleCategory(cat.id)}
              />
              {cat.label}
            </label>
          ))}
        </div>
      </div>

      <div>
        <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-espresso-900 mb-4">Price</h4>
        <div className="space-y-2.5">
          {priceRanges.map((range, idx) => (
            <label key={range.label} className="flex cursor-pointer items-center gap-3 text-sm text-warmgray-700 hover:text-espresso-900">
              <input
                type="checkbox"
                className="h-4 w-4 rounded border-cream-300 text-gold-600 focus:ring-gold-500"
                checked={selectedPrices.includes(idx)}
                onChange={() => togglePrice(idx)}
              />
              {range.label}
            </label>
          ))}
        </div>
      </div>

      {activeFilterCount > 0 && (
        <button onClick={clearFilters} className="text-xs font-medium uppercase tracking-wider text-gold-600 hover:text-gold-700">
          Clear all filters
        </button>
      )}
    </div>
  )

  const containerRef = useImageLoader([filteredProducts.length, sort])

  return (
    <div ref={containerRef} className="bg-cream-50 pt-28 pb-20 sm:pt-32 sm:pb-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <p className="section-label mb-3">Shop</p>
          <h1 className="font-serif text-4xl text-espresso-900 sm:text-5xl">The Collection</h1>
        </div>

        <div className="flex flex-col gap-8 lg:flex-row">
          {/* Desktop filters */}
          <aside className="hidden lg:block w-56 flex-shrink-0">
            <FilterPanel />
          </aside>

          {/* Mobile filter toggle */}
          <div className="flex items-center justify-between lg:hidden">
            <button
              onClick={() => setMobileFiltersOpen(true)}
              className="flex items-center gap-2 border border-cream-300 px-4 py-2 text-sm font-medium uppercase tracking-wider text-espresso-900"
            >
              <SlidersHorizontal className="h-4 w-4" />
              Filter {activeFilterCount > 0 && `(${activeFilterCount})`}
            </button>
            <div className="flex items-center gap-2">
              <label htmlFor="sort" className="text-xs uppercase tracking-wider text-warmgray-500">Sort</label>
              <select
                id="sort"
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="h-9 border border-cream-300 bg-cream-50 px-3 text-sm text-espresso-900 focus:border-gold-500 focus:outline-none"
              >
                {sortOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex-1">
            {/* Desktop sort bar */}
            <div className="mb-6 hidden items-center justify-end gap-4 lg:flex">
              <span className="text-sm text-warmgray-500">{filteredProducts.length} products</span>
              <div className="flex items-center gap-2">
                <label htmlFor="sort-desktop" className="text-xs uppercase tracking-wider text-warmgray-500">Sort</label>
                <select
                  id="sort-desktop"
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="h-9 border border-cream-300 bg-cream-50 px-3 text-sm text-espresso-900 focus:border-gold-500 focus:outline-none"
                >
                  {sortOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
              </div>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="py-20 text-center">
                <p className="font-serif text-2xl text-espresso-900">No products match your filters.</p>
                <Button onClick={clearFilters} variant="outline" className="btn-outline mt-4">
                  Clear Filters
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-3">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filters drawer */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-80 transform bg-cream-50 p-6 shadow-xl transition-transform duration-300 lg:hidden ${
          mobileFiltersOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="mb-6 flex items-center justify-between">
          <h3 className="font-serif text-2xl text-espresso-900">Filters</h3>
          <button onClick={() => setMobileFiltersOpen(false)} aria-label="Close filters">
            <X className="h-6 w-6 text-espresso-900" />
          </button>
        </div>
        <FilterPanel mobile />
        <div className="mt-8">
          <Button onClick={() => setMobileFiltersOpen(false)} className="w-full btn-primary">
            Show {filteredProducts.length} Products
          </Button>
        </div>
      </div>
      {mobileFiltersOpen && (
        <div
          className="fixed inset-0 z-40 bg-espresso-900/40 lg:hidden"
          onClick={() => setMobileFiltersOpen(false)}
        />
      )}
    </div>
  )
}
