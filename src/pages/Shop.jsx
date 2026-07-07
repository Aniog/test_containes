import React, { useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, X } from 'lucide-react'
import { products, categories } from '@/data/products'
import { ProductCard } from '@/components/product/ProductCard'

const priceRanges = [
  { label: 'Under $50', min: 0, max: 50 },
  { label: '$50 – $80', min: 50, max: 80 },
  { label: '$80+', min: 80, max: Infinity },
]

const materials = ['gold-plated', 'silver-plated']

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const initialCategory = searchParams.get('category') || ''

  const [selectedCategory, setSelectedCategory] = useState(initialCategory)

  const [selectedPrice, setSelectedPrice] = useState('')
  const [selectedMaterial, setSelectedMaterial] = useState('')
  const [sort, setSort] = useState('featured')
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  useEffect(() => {
    if (initialCategory && categories.some((c) => c.id === initialCategory)) {
      setSelectedCategory(initialCategory)
    }
  }, [initialCategory])

  const filtered = useMemo(() => {
    let result = [...products]

    if (selectedCategory) {
      result = result.filter((p) => p.category === selectedCategory)
    }
    if (selectedPrice) {
      const range = priceRanges.find((r) => r.label === selectedPrice)
      if (range) {
        result = result.filter((p) => p.price >= range.min && p.price < range.max)
      }
    }
    if (selectedMaterial) {
      result = result.filter((p) => p.material === selectedMaterial)
    }

    if (sort === 'price-low') result.sort((a, b) => a.price - b.price)
    else if (sort === 'price-high') result.sort((a, b) => b.price - a.price)
    else if (sort === 'rating') result.sort((a, b) => b.rating - a.rating)

    return result
  }, [selectedCategory, selectedPrice, selectedMaterial, sort])

  const activeFiltersCount = [selectedCategory, selectedPrice, selectedMaterial].filter(Boolean).length

  const clearFilters = () => {
    setSelectedCategory('')
    setSelectedPrice('')
    setSelectedMaterial('')
  }

  const handleCategoryChange = (catId) => {
    setSelectedCategory(catId)
    const next = new URLSearchParams(searchParams)
    if (catId) {
      next.set('category', catId)
    } else {
      next.delete('category')
    }
    setSearchParams(next, { replace: true })
  }

  const FilterSection = () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-xs font-semibold uppercase tracking-[0.14em]">Category</h3>
        <div className="mt-3 space-y-2">
          {categories.map((cat) => (
            <label key={cat.id} className="flex cursor-pointer items-center gap-2 text-sm text-velmora-text-muted hover:text-velmora-text-dark">
              <input
                type="radio"
                name="category"
                checked={selectedCategory === cat.id}
                onChange={() => handleCategoryChange(cat.id)}
                className="h-4 w-4 accent-velmora-gold"
              />
              {cat.label}
            </label>
          ))}
          <label className="flex cursor-pointer items-center gap-2 text-sm text-velmora-text-muted hover:text-velmora-text-dark">
            <input
              type="radio"
              name="category"
              checked={selectedCategory === ''}
              onChange={() => handleCategoryChange('')}
              className="h-4 w-4 accent-velmora-gold"
            />
            All
          </label>
        </div>
      </div>

      <div>
        <h3 className="text-xs font-semibold uppercase tracking-[0.14em]">Price</h3>
        <div className="mt-3 space-y-2">
          {priceRanges.map((range) => (
            <label key={range.label} className="flex cursor-pointer items-center gap-2 text-sm text-velmora-text-muted hover:text-velmora-text-dark">
              <input
                type="radio"
                name="price"
                checked={selectedPrice === range.label}
                onChange={() => setSelectedPrice(range.label)}
                className="h-4 w-4 accent-velmora-gold"
              />
              {range.label}
            </label>
          ))}
          <label className="flex cursor-pointer items-center gap-2 text-sm text-velmora-text-muted hover:text-velmora-text-dark">
            <input
              type="radio"
              name="price"
              checked={selectedPrice === ''}
              onChange={() => setSelectedPrice('')}
              className="h-4 w-4 accent-velmora-gold"
            />
            All
          </label>
        </div>
      </div>

      <div>
        <h3 className="text-xs font-semibold uppercase tracking-[0.14em]">Material</h3>
        <div className="mt-3 space-y-2">
          {materials.map((mat) => (
            <label key={mat} className="flex cursor-pointer items-center gap-2 text-sm text-velmora-text-muted hover:text-velmora-text-dark">
              <input
                type="radio"
                name="material"
                checked={selectedMaterial === mat}
                onChange={() => setSelectedMaterial(mat)}
                className="h-4 w-4 accent-velmora-gold"
              />
              {mat === 'gold-plated' ? 'Gold Plated' : 'Silver Plated'}
            </label>
          ))}
          <label className="flex cursor-pointer items-center gap-2 text-sm text-velmora-text-muted hover:text-velmora-text-dark">
            <input
              type="radio"
              name="material"
              checked={selectedMaterial === ''}
              onChange={() => setSelectedMaterial('')}
              className="h-4 w-4 accent-velmora-gold"
            />
            All
          </label>
        </div>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-velmora-ivory pb-20 pt-24 md:pt-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center md:mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-velmora-gold">The Collection</p>
          <h1 className="mt-3 font-serif text-3xl md:text-4xl">Shop All Jewelry</h1>
        </div>

        <div className="flex flex-col gap-8 lg:flex-row">
          <aside className="hidden w-64 flex-shrink-0 lg:block">
            <FilterSection />
          </aside>

          <div className="flex-1">
            <div className="mb-6 flex flex-wrap items-center justify-between gap-3 border-b border-velmora-border pb-4">
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(true)}
                className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.1em] text-velmora-text-dark lg:hidden"
              >
                <SlidersHorizontal size={16} />
                Filters {activeFiltersCount > 0 && `(${activeFiltersCount})`}
              </button>

              <p className="text-sm text-velmora-text-muted">{filtered.length} pieces</p>

              <div className="flex items-center gap-2">
                <label htmlFor="sort" className="text-xs font-semibold uppercase tracking-[0.1em] text-velmora-text-muted">
                  Sort
                </label>
                <select
                  id="sort"
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="h-9 border border-velmora-border bg-velmora-ivory px-2 text-sm text-velmora-text-dark focus:border-velmora-gold focus:outline-none"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Top Rated</option>
                </select>
              </div>
            </div>

            {activeFiltersCount > 0 && (
              <div className="mb-4 flex flex-wrap items-center gap-2">
                {selectedCategory && (
                  <span className="inline-flex items-center gap-1 bg-velmora-linen px-2 py-1 text-xs text-velmora-text-dark">
                    {categories.find((c) => c.id === selectedCategory)?.label}
                    <button type="button" onClick={() => handleCategoryChange('')} aria-label="Remove category filter">
                      <X size={12} />
                    </button>
                  </span>
                )}
                {selectedPrice && (
                  <span className="inline-flex items-center gap-1 bg-velmora-linen px-2 py-1 text-xs text-velmora-text-dark">
                    {selectedPrice}
                    <button type="button" onClick={() => setSelectedPrice('')} aria-label="Remove price filter">
                      <X size={12} />
                    </button>
                  </span>
                )}
                {selectedMaterial && (
                  <span className="inline-flex items-center gap-1 bg-velmora-linen px-2 py-1 text-xs text-velmora-text-dark">
                    {selectedMaterial === 'gold-plated' ? 'Gold Plated' : 'Silver Plated'}
                    <button type="button" onClick={() => setSelectedMaterial('')} aria-label="Remove material filter">
                      <X size={12} />
                    </button>
                  </span>
                )}
                <button
                  type="button"
                  onClick={clearFilters}
                  className="text-xs text-velmora-text-muted underline hover:text-velmora-text-dark"
                >
                  Clear all
                </button>
              </div>
            )}

            {filtered.length === 0 ? (
              <div className="py-20 text-center text-velmora-text-muted">
                <p className="font-serif text-xl text-velmora-text-dark">No pieces match your filters.</p>
                <button
                  type="button"
                  onClick={clearFilters}
                  className="mt-4 text-xs font-semibold uppercase tracking-[0.1em] underline hover:text-velmora-gold"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4">
                {filtered.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-[60] bg-velmora-charcoal/50 lg:hidden">
          <div className="absolute right-0 top-0 h-full w-80 max-w-full bg-velmora-ivory p-6 shadow-xl">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="font-serif text-xl">Filters</h2>
              <button type="button" onClick={() => setMobileFiltersOpen(false)} aria-label="Close filters">
                <X size={22} />
              </button>
            </div>
            <FilterSection />
            <button
              type="button"
              onClick={() => setMobileFiltersOpen(false)}
              className="mt-8 w-full bg-velmora-charcoal py-3 text-xs font-semibold uppercase tracking-[0.1em] text-velmora-text-light hover:bg-velmora-gold hover:text-velmora-charcoal transition-colors"
            >
              Show {filtered.length} Results
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
