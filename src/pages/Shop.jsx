import { useEffect, useMemo, useRef, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, X } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products } from '@/data/products'
import { ProductCard } from '@/components/ui/ProductCard'
import { Button } from '@/components/ui/Button'
import { Sheet } from '@/components/ui/Sheet'
import { cn } from '@/lib/utils'

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
]

const categoryOptions = [
  { value: 'earrings', label: 'Earrings' },
  { value: 'necklaces', label: 'Necklaces' },
  { value: 'huggies', label: 'Huggies' },
  { value: 'sets', label: 'Gift Sets' },
]

const materialOptions = [
  { value: '18k-gold-plated', label: '18K Gold Plated' },
]

const priceRanges = [
  { value: 'under-50', label: 'Under $50' },
  { value: '50-80', label: '$50 – $80' },
  { value: 'over-80', label: 'Over $80' },
]

function FilterGroup({ title, children }) {
  return (
    <div className="border-b border-ink/10 py-6">
      <h4 className="mb-4 text-xs uppercase tracking-[0.2em] text-ink">{title}</h4>
      <div className="space-y-3">{children}</div>
    </div>
  )
}

function Checkbox({ label, checked, onChange, count }) {
  return (
    <label className="flex cursor-pointer items-center justify-between text-sm text-stone transition-colors hover:text-gold">
      <span className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className="h-4 w-4 accent-gold"
        />
        {label}
      </span>
      {count != null && <span className="text-xs text-stone/60">({count})</span>}
    </label>
  )
}

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  const sort = searchParams.get('sort') || 'featured'
  const selectedCategories = useMemo(
    () => searchParams.getAll('category'),
    [searchParams],
  )
  const selectedPrices = useMemo(
    () => searchParams.getAll('price'),
    [searchParams],
  )
  const selectedMaterials = useMemo(
    () => searchParams.getAll('material'),
    [searchParams],
  )

  const toggleParam = (key, value) => {
    const next = new URLSearchParams(searchParams)
    if (next.getAll(key).includes(value)) {
      const values = next.getAll(key).filter((v) => v !== value)
      next.delete(key)
      values.forEach((v) => next.append(key, v))
    } else {
      next.append(key, value)
    }
    setSearchParams(next, { replace: true })
  }

  const setSort = (value) => {
    const next = new URLSearchParams(searchParams)
    next.set('sort', value)
    setSearchParams(next, { replace: true })
  }

  const clearFilters = () => {
    const next = new URLSearchParams()
    next.set('sort', sort)
    setSearchParams(next, { replace: true })
  }

  const filteredProducts = useMemo(() => {
    let result = [...products]

    if (selectedCategories.length) {
      result = result.filter((p) => selectedCategories.includes(p.category))
    }

    if (selectedMaterials.length) {
      result = result.filter((p) => selectedMaterials.includes(p.material))
    }

    if (selectedPrices.length) {
      result = result.filter((p) => {
        return selectedPrices.some((range) => {
          if (range === 'under-50') return p.price < 50
          if (range === '50-80') return p.price >= 50 && p.price <= 80
          if (range === 'over-80') return p.price > 80
          return false
        })
      })
    }

    if (sort === 'price-asc') {
      result.sort((a, b) => a.price - b.price)
    } else if (sort === 'price-desc') {
      result.sort((a, b) => b.price - a.price)
    } else if (sort === 'rating') {
      result.sort((a, b) => b.rating - a.rating)
    }

    return result
  }, [selectedCategories, selectedMaterials, selectedPrices, sort])

  const activeFilterCount =
    selectedCategories.length + selectedMaterials.length + selectedPrices.length

  const pageRef = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, pageRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [filteredProducts.length, selectedCategories.join(','), selectedMaterials.join(','), selectedPrices.join(','), sort])

  const FilterContent = () => (
    <>
      <div className="flex items-center justify-between">
        <h3 className="font-serif text-xl">Filters</h3>
        {activeFilterCount > 0 && (
          <button
            onClick={clearFilters}
            className="text-xs uppercase tracking-[0.15em] text-stone underline-offset-4 hover:text-gold hover:underline"
          >
            Clear All
          </button>
        )}
      </div>

      <FilterGroup title="Category">
        {categoryOptions.map((cat) => (
          <Checkbox
            key={cat.value}
            label={cat.label}
            checked={selectedCategories.includes(cat.value)}
            onChange={() => toggleParam('category', cat.value)}
          />
        ))}
      </FilterGroup>

      <FilterGroup title="Price">
        {priceRanges.map((range) => (
          <Checkbox
            key={range.value}
            label={range.label}
            checked={selectedPrices.includes(range.value)}
            onChange={() => toggleParam('price', range.value)}
          />
        ))}
      </FilterGroup>

      <FilterGroup title="Material">
        {materialOptions.map((mat) => (
          <Checkbox
            key={mat.value}
            label={mat.label}
            checked={selectedMaterials.includes(mat.value)}
            onChange={() => toggleParam('material', mat.value)}
          />
        ))}
      </FilterGroup>
    </>
  )

  return (
    <div ref={pageRef} className="bg-paper pt-24 md:pt-28">
      <div className="mx-auto max-w-7xl px-6 py-8 md:py-12">
        {/* Header */}
        <div className="mb-10 text-center">
          <h1 className="font-serif text-4xl md:text-5xl">The Collection</h1>
          <p className="mx-auto mt-4 max-w-lg text-sm text-stone">
            Timeless demi-fine jewelry, designed for everyday wear and forever
            keepsakes.
          </p>
        </div>

        {/* Toolbar */}
        <div className="mb-6 flex items-center justify-between border-b border-ink/10 pb-4">
          <button
            onClick={() => setMobileFiltersOpen(true)}
            className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-ink md:hidden"
          >
            <SlidersHorizontal size={16} />
            Filters {activeFilterCount > 0 && `(${activeFilterCount})`}
          </button>

          <div className="hidden items-center gap-4 md:flex">
            <span className="text-sm text-stone">
              {filteredProducts.length} product
              {filteredProducts.length !== 1 ? 's' : ''}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <label className="hidden text-xs uppercase tracking-[0.2em] text-stone sm:inline">
              Sort
            </label>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="border border-ink/10 bg-transparent px-3 py-2 text-xs uppercase tracking-[0.1em] text-ink focus:border-gold focus:outline-none"
            >
              {sortOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex gap-12">
          {/* Desktop sidebar */}
          <aside className="sticky top-28 hidden h-fit w-64 flex-shrink-0 md:block">
            <FilterContent />
          </aside>

          {/* Grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="py-20 text-center">
                <p className="font-serif text-xl text-ink">No products match your filters.</p>
                <Button variant="outline" className="mt-4" onClick={clearFilters}>
                  Clear Filters
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filters */}
      <Sheet
        open={mobileFiltersOpen}
        onClose={() => setMobileFiltersOpen(false)}
        title="Filters"
      >
        <FilterContent />
      </Sheet>
    </div>
  )
}
