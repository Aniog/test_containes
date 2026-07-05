import React, { useState, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, ChevronDown } from 'lucide-react'
import { products } from '@/data/products'
import ProductCard from '@/components/ui/ProductCard'

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  const categoryFilter = searchParams.get('category') || 'all'
  const priceFilter = searchParams.get('price') || 'all'
  const materialFilter = searchParams.get('material') || 'all'
  const sort = searchParams.get('sort') || 'featured'

  const updateFilter = (key, value) => {
    const newParams = new URLSearchParams(searchParams)
    if (value === 'all') {
      newParams.delete(key)
    } else {
      newParams.set(key, value)
    }
    setSearchParams(newParams)
  }

  const filteredProducts = useMemo(() => {
    let result = [...products]

    if (categoryFilter !== 'all') {
      result = result.filter((p) => p.category === categoryFilter)
    }
    if (materialFilter !== 'all') {
      result = result.filter((p) => p.material === materialFilter)
    }
    if (priceFilter !== 'all') {
      switch (priceFilter) {
        case 'under50':
          result = result.filter((p) => p.price < 50)
          break
        case '50to75':
          result = result.filter((p) => p.price >= 50 && p.price <= 75)
          break
        case 'over75':
          result = result.filter((p) => p.price > 75)
          break
        default:
          break
      }
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
      case 'name':
        result.sort((a, b) => a.name.localeCompare(b.name))
        break
      default:
        break
    }

    return result
  }, [categoryFilter, priceFilter, materialFilter, sort])

  const FilterContent = () => (
    <>
      {/* Category */}
      <div className="mb-6">
        <h4 className="velmora-label text-[var(--velmora-text)] mb-3">Category</h4>
        <div className="space-y-2">
          {[
            { value: 'all', label: 'All' },
            { value: 'earrings', label: 'Earrings' },
            { value: 'necklaces', label: 'Necklaces' },
            { value: 'huggies', label: 'Huggies' },
            { value: 'sets', label: 'Gift Sets' },
          ].map((opt) => (
            <label key={opt.value} className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="category"
                checked={categoryFilter === opt.value}
                onChange={() => updateFilter('category', opt.value)}
                className="accent-[var(--velmora-accent)]"
              />
              <span className="velmora-body-sm text-[var(--velmora-text-muted)]">{opt.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price */}
      <div className="mb-6">
        <h4 className="velmora-label text-[var(--velmora-text)] mb-3">Price</h4>
        <div className="space-y-2">
          {[
            { value: 'all', label: 'All Prices' },
            { value: 'under50', label: 'Under $50' },
            { value: '50to75', label: '$50 - $75' },
            { value: 'over75', label: 'Over $75' },
          ].map((opt) => (
            <label key={opt.value} className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="price"
                checked={priceFilter === opt.value}
                onChange={() => updateFilter('price', opt.value)}
                className="accent-[var(--velmora-accent)]"
              />
              <span className="velmora-body-sm text-[var(--velmora-text-muted)]">{opt.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Material */}
      <div>
        <h4 className="velmora-label text-[var(--velmora-text)] mb-3">Material</h4>
        <div className="space-y-2">
          {[
            { value: 'all', label: 'All' },
            { value: 'gold', label: 'Gold' },
          ].map((opt) => (
            <label key={opt.value} className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="material"
                checked={materialFilter === opt.value}
                onChange={() => updateFilter('material', opt.value)}
                className="accent-[var(--velmora-accent)]"
              />
              <span className="velmora-body-sm text-[var(--velmora-text-muted)]">{opt.label}</span>
            </label>
          ))}
        </div>
      </div>
    </>
  )

  return (
    <main className="pt-20 md:pt-24 min-h-screen">
      {/* Header */}
      <div className="velmora-container-wide px-4 md:px-8 lg:px-12 py-8">
        <h1 className="velmora-heading-md text-[var(--velmora-text)] mb-2">Shop All</h1>
        <p className="velmora-body text-[var(--velmora-text-muted)]">
          {filteredProducts.length} piece{filteredProducts.length !== 1 ? 's' : ''}
        </p>
      </div>

      <div className="velmora-container-wide px-4 md:px-8 lg:px-12 pb-16">
        <div className="flex gap-8">
          {/* Desktop Sidebar */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-28">
              <FilterContent />
            </div>
          </aside>

          {/* Mobile Filter Toggle */}
          <div className="lg:hidden flex items-center justify-between w-full mb-4">
            <button
              onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
              className="flex items-center gap-2 velmora-label text-[var(--velmora-text)]"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
            </button>
            <div className="relative">
              <select
                value={sort}
                onChange={(e) => updateFilter('sort', e.target.value)}
                className="appearance-none bg-transparent velmora-body-sm text-[var(--velmora-text-muted)] pr-6 cursor-pointer"
              >
                <option value="featured">Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Top Rated</option>
                <option value="name">Name A-Z</option>
              </select>
              <ChevronDown className="w-4 h-4 absolute right-0 top-1/2 -translate-y-1/2 text-[var(--velmora-text-light)] pointer-events-none" />
            </div>
          </div>

          {/* Mobile Filters Panel */}
          {mobileFiltersOpen && (
            <div className="lg:hidden fixed inset-0 z-50 bg-black/40" onClick={() => setMobileFiltersOpen(false)}>
              <div
                className="absolute left-0 top-0 h-full w-80 max-w-full bg-[var(--velmora-cream)] p-6 overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="velmora-heading-sm text-[var(--velmora-text)]">Filters</h3>
                  <button
                    onClick={() => setMobileFiltersOpen(false)}
                    className="text-[var(--velmora-text-muted)]"
                  >
                    Close
                  </button>
                </div>
                <FilterContent />
              </div>
            </div>
          )}

          {/* Product Grid */}
          <div className="flex-1">
            {/* Desktop Sort */}
            <div className="hidden lg:flex justify-end mb-6">
              <div className="relative">
                <select
                  value={sort}
                  onChange={(e) => updateFilter('sort', e.target.value)}
                  className="appearance-none bg-transparent velmora-body-sm text-[var(--velmora-text-muted)] pr-6 cursor-pointer"
                >
                  <option value="featured">Featured</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="rating">Top Rated</option>
                  <option value="name">Name A-Z</option>
                </select>
                <ChevronDown className="w-4 h-4 absolute right-0 top-1/2 -translate-y-1/2 text-[var(--velmora-text-light)] pointer-events-none" />
              </div>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="velmora-heading-sm text-[var(--velmora-text-muted)] mb-2">No products found</p>
                <p className="velmora-body-sm text-[var(--velmora-text-light)]">Try adjusting your filters</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}
