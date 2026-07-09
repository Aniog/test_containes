import { useState, useMemo, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react'
import { products, categories, formatPrice } from '@/data/products'
import ProductCard from '@/components/ProductCard'
import useImageLoader from '@/hooks/useImageLoader'

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
]

const priceRanges = [
  { label: 'Under $50', min: 0, max: 50 },
  { label: '$50 – $75', min: 50, max: 75 },
  { label: '$75 – $100', min: 75, max: 100 },
  { label: 'Over $100', min: 100, max: Infinity },
]

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const [sort, setSort] = useState('featured')

  const activeCategory = searchParams.get('category') || ''
  const activeSearch = searchParams.get('q') || ''

  const [selectedCategories, setSelectedCategories] = useState(
    activeCategory ? [activeCategory] : []
  )
  const [selectedPrices, setSelectedPrices] = useState([])

  useEffect(() => {
    if (activeCategory && !selectedCategories.includes(activeCategory)) {
      setSelectedCategories([activeCategory])
    }
  }, [activeCategory])

  const toggleCategory = (cat) => {
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    )
  }

  const togglePrice = (label) => {
    setSelectedPrices((prev) =>
      prev.includes(label) ? prev.filter((l) => l !== label) : [...prev, label]
    )
  }

  const clearFilters = () => {
    setSelectedCategories([])
    setSelectedPrices([])
    setSearchParams({})
  }

  const filteredProducts = useMemo(() => {
    let result = [...products]

    if (activeSearch.trim()) {
      const q = activeSearch.toLowerCase()
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.shortDescription.toLowerCase().includes(q)
      )
    }

    if (selectedCategories.length > 0) {
      result = result.filter((p) => selectedCategories.includes(p.category))
    }

    if (selectedPrices.length > 0) {
      result = result.filter((p) =>
        selectedPrices.some((label) => {
          const range = priceRanges.find((r) => r.label === label)
          return range && p.price >= range.min && p.price <= range.max
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
      case 'rating':
        result.sort((a, b) => b.rating - a.rating)
        break
      default:
        break
    }

    return result
  }, [selectedCategories, selectedPrices, sort, activeSearch])

  const containerRef = useImageLoader([
    filteredProducts.map((p) => p.id).join(','),
  ])

  const filterPanel = (
    <div className="space-y-8">
      <div className="flex items-center justify-between md:hidden">
        <h3 className="font-serif text-lg">Filters</h3>
        <button
          type="button"
          onClick={() => setMobileFiltersOpen(false)}
          className="p-2"
          aria-label="Close filters"
        >
          <X size={20} />
        </button>
      </div>

      <div>
        <h4 className="label-uppercase mb-4 text-[11px] text-charcoal-500">
          Category
        </h4>
        <ul className="space-y-2.5">
          {categories.map((cat) => (
            <li key={cat}>
              <label className="flex cursor-pointer items-center gap-3 text-sm text-charcoal-700">
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(cat)}
                  onChange={() => toggleCategory(cat)}
                  className="h-4 w-4 accent-charcoal-900"
                />
                {cat}
              </label>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="label-uppercase mb-4 text-[11px] text-charcoal-500">
          Price
        </h4>
        <ul className="space-y-2.5">
          {priceRanges.map((range) => (
            <li key={range.label}>
              <label className="flex cursor-pointer items-center gap-3 text-sm text-charcoal-700">
                <input
                  type="checkbox"
                  checked={selectedPrices.includes(range.label)}
                  onChange={() => togglePrice(range.label)}
                  className="h-4 w-4 accent-charcoal-900"
                />
                {range.label}
              </label>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="label-uppercase mb-4 text-[11px] text-charcoal-500">
          Material
        </h4>
        <ul className="space-y-2.5">
          {['18K Gold Plated', 'Sterling Silver', 'Hypoallergenic'].map(
            (material) => (
              <li key={material}>
                <label className="flex cursor-pointer items-center gap-3 text-sm text-charcoal-700">
                  <input type="checkbox" className="h-4 w-4 accent-charcoal-900" />
                  {material}
                </label>
              </li>
            )
          )}
        </ul>
      </div>

      <button
        type="button"
        onClick={clearFilters}
        className="text-xs uppercase tracking-widest underline underline-offset-4"
      >
        Clear All
      </button>
    </div>
  )

  return (
    <div className="bg-cream-100 pb-16 pt-24 md:pb-24 md:pt-32">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        {/* Header */}
        <div className="mb-8 text-center md:mb-12">
          <p className="label-uppercase mb-3 text-gold-600">The Collection</p>
          <h1 className="heading-display text-3xl md:text-5xl">Shop All Jewelry</h1>
          {activeSearch && (
            <p className="mt-3 text-sm text-charcoal-500">
              Results for “{activeSearch}”
            </p>
          )}
        </div>

        {/* Toolbar */}
        <div className="mb-6 flex items-center justify-between border-b border-charcoal-900/8 pb-4">
          <button
            type="button"
            onClick={() => setMobileFiltersOpen(true)}
            className="flex items-center gap-2 text-xs uppercase tracking-widest md:hidden"
          >
            <SlidersHorizontal size={16} />
            Filters
          </button>
          <span className="hidden text-sm text-charcoal-500 md:block">
            {filteredProducts.length} product
            {filteredProducts.length !== 1 ? 's' : ''}
          </span>

          <div className="relative">
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="appearance-none border border-charcoal-900/10 bg-transparent py-2 pl-3 pr-8 text-xs uppercase tracking-widest outline-none"
            >
              {sortOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
            <ChevronDown
              size={14}
              className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2"
            />
          </div>
        </div>

        <div className="flex gap-10">
          {/* Sidebar filters - desktop */}
          <aside className="sticky top-28 hidden h-fit w-56 flex-shrink-0 md:block">
            {filterPanel}
          </aside>

          {/* Mobile filters overlay */}
          {mobileFiltersOpen && (
            <div className="fixed inset-0 z-50 md:hidden">
              <div
                className="absolute inset-0 bg-charcoal-900/40"
                onClick={() => setMobileFiltersOpen(false)}
              />
              <div className="absolute left-0 top-0 h-full w-4/5 max-w-xs bg-cream-100 p-6 shadow-xl">
                {filterPanel}
              </div>
            </div>
          )}

          {/* Product grid */}
          <div ref={containerRef} className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="py-20 text-center">
                <p className="font-serif text-xl">No products match your filters.</p>
                <button
                  type="button"
                  onClick={clearFilters}
                  className="mt-4 text-xs uppercase tracking-widest underline"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 lg:gap-x-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
