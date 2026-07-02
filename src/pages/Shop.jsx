import React, { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { ChevronDown, SlidersHorizontal, X } from 'lucide-react'
import { products, categories, formatPrice } from '@/data/products'
import { ProductCard } from '@/components/product/ProductCard'
import { Button } from '@/components/ui/Button'
import { useImageLoader } from '@/hooks/useImageLoader'

const sortOptions = [
  { id: 'featured', label: 'Featured' },
  { id: 'price-asc', label: 'Price: Low to High' },
  { id: 'price-desc', label: 'Price: High to Low' },
  { id: 'rating', label: 'Top Rated' },
]

const priceRanges = [
  { id: 'under50', label: 'Under $50', min: 0, max: 50 },
  { id: '50to80', label: '$50 - $80', min: 50, max: 80 },
  { id: '80plus', label: '$80+', min: 80, max: 999 },
]

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const initialCategory = searchParams.get('category') || ''
  const [selectedCategory, setSelectedCategory] = useState(initialCategory)
  const [selectedPrice, setSelectedPrice] = useState('')
  const [selectedMaterial, setSelectedMaterial] = useState('')
  const [sort, setSort] = useState('featured')
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const ref = useImageLoader([selectedCategory, selectedPrice, selectedMaterial, sort])

  const filtered = useMemo(() => {
    let result = [...products]
    if (selectedCategory) {
      result = result.filter((p) => p.category === selectedCategory)
    }
    if (selectedPrice) {
      const range = priceRanges.find((r) => r.id === selectedPrice)
      if (range) {
        result = result.filter((p) => p.price >= range.min && p.price < range.max)
      }
    }
    if (selectedMaterial) {
      result = result.filter((p) =>
        p.materialsList.some((m) => m.toLowerCase().includes(selectedMaterial.toLowerCase()))
      )
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
      default:
        break
    }
    return result
  }, [selectedCategory, selectedPrice, selectedMaterial, sort])

  const clearFilters = () => {
    setSelectedCategory('')
    setSelectedPrice('')
    setSelectedMaterial('')
    setSearchParams({})
  }

  const activeFiltersCount = [selectedCategory, selectedPrice, selectedMaterial].filter(Boolean).length

  const FilterPanel = () => (
    <div className="space-y-8">
      <div>
        <h4 className="font-sans text-xs font-semibold uppercase tracking-[0.16em] text-espresso-900">
          Category
        </h4>
        <ul className="mt-4 space-y-2">
          {categories.map((cat) => (
            <li key={cat.id}>
              <label className="flex cursor-pointer items-center gap-2 text-sm text-espresso-700 hover:text-gold">
                <input
                  type="radio"
                  name="category"
                  checked={selectedCategory === cat.id}
                  onChange={() => {
                    setSelectedCategory(cat.id)
                    setSearchParams({ category: cat.id })
                  }}
                  className="h-4 w-4 accent-gold"
                />
                {cat.name}
              </label>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h4 className="font-sans text-xs font-semibold uppercase tracking-[0.16em] text-espresso-900">
          Price
        </h4>
        <ul className="mt-4 space-y-2">
          {priceRanges.map((range) => (
            <li key={range.id}>
              <label className="flex cursor-pointer items-center gap-2 text-sm text-espresso-700 hover:text-gold">
                <input
                  type="radio"
                  name="price"
                  checked={selectedPrice === range.id}
                  onChange={() => setSelectedPrice(range.id)}
                  className="h-4 w-4 accent-gold"
                />
                {range.label}
              </label>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h4 className="font-sans text-xs font-semibold uppercase tracking-[0.16em] text-espresso-900">
          Material
        </h4>
        <ul className="mt-4 space-y-2">
          {['Gold-Plated', 'Sterling Silver', 'Brass'].map((mat) => (
            <li key={mat}>
              <label className="flex cursor-pointer items-center gap-2 text-sm text-espresso-700 hover:text-gold">
                <input
                  type="radio"
                  name="material"
                  checked={selectedMaterial === mat}
                  onChange={() => setSelectedMaterial(mat)}
                  className="h-4 w-4 accent-gold"
                />
                {mat}
              </label>
            </li>
          ))}
        </ul>
      </div>
      {activeFiltersCount > 0 && (
        <button
          onClick={clearFilters}
          className="flex items-center gap-1 text-xs uppercase tracking-wide text-espresso-600 underline-offset-4 hover:text-gold hover:underline"
        >
          <X size={12} /> Clear Filters
        </button>
      )}
    </div>
  )

  return (
    <section ref={ref} className="min-h-screen bg-cream-50 pt-24 pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="font-sans text-[11px] font-medium uppercase tracking-[0.22em] text-gold">
            The Collection
          </p>
          <h1 className="mt-3 font-serif text-4xl text-espresso-900 md:text-5xl">
            Shop All Jewelry
          </h1>
        </div>

        <div className="mt-10 flex items-center justify-between border-b border-cream-300 pb-4">
          <button
            onClick={() => setMobileFiltersOpen(true)}
            className="flex items-center gap-2 font-sans text-xs font-medium uppercase tracking-[0.14em] text-espresso-900 md:hidden"
          >
            <SlidersHorizontal size={16} />
            Filter {activeFiltersCount > 0 && `(${activeFiltersCount})`}
          </button>
          <p className="hidden text-sm text-espresso-600 md:block">
            {filtered.length} piece{filtered.length !== 1 && 's'}
          </p>
          <div className="relative">
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="appearance-none border border-cream-300 bg-transparent py-2 pl-4 pr-10 font-sans text-xs uppercase tracking-[0.12em] text-espresso-900 focus:border-gold focus:outline-none"
            >
              {sortOptions.map((opt) => (
                <option key={opt.id} value={opt.id}>
                  {opt.label}
                </option>
              ))}
            </select>
            <ChevronDown size={14} className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-espresso-900" />
          </div>
        </div>

        <div className="mt-8 grid gap-10 md:grid-cols-[240px_1fr]">
          <aside className="hidden md:block">
            <FilterPanel />
          </aside>

          <div>
            {filtered.length === 0 ? (
              <div className="py-20 text-center">
                <p className="font-serif text-2xl text-espresso-900">No pieces found</p>
                <p className="mt-2 text-sm text-espresso-600">Try adjusting your filters.</p>
                <Button variant="primary" size="md" className="mt-6" onClick={clearFilters}>
                  Clear Filters
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-3">
                {filtered.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div
            className="absolute inset-0 bg-espresso-900/50"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="absolute left-0 top-0 h-full w-4/5 max-w-sm bg-cream-50 p-6 shadow-2xl">
            <div className="flex items-center justify-between">
              <span className="font-serif text-xl tracking-[0.18em]">Filters</span>
              <button onClick={() => setMobileFiltersOpen(false)} aria-label="Close filters">
                <X size={24} />
              </button>
            </div>
            <div className="mt-8">
              <FilterPanel />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
