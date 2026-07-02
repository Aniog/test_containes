import { useState, useMemo, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react'
import { allProducts } from '@/data/products'
import ProductCard from '@/components/ProductCard'
import SectionHeading from '@/components/SectionHeading'
import { cn } from '@/lib/utils'

const categories = [
  { value: 'all', label: 'All Jewelry' },
  { value: 'earrings', label: 'Earrings' },
  { value: 'necklaces', label: 'Necklaces' },
  { value: 'huggies', label: 'Huggies' },
  { value: 'sets', label: 'Gift Sets' },
]

const materials = [
  { value: 'all', label: 'All Materials' },
  { value: 'gold', label: '18K Gold Plated' },
]

const priceRanges = [
  { value: 'all', label: 'All Prices' },
  { value: 'under-50', label: 'Under $50' },
  { value: '50-80', label: '$50 — $80' },
  { value: 'over-80', label: 'Over $80' },
]

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
]

export default function Collection() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const [sort, setSort] = useState('featured')

  const categoryParam = searchParams.get('category') || 'all'
  const category = categories.find((c) => c.value === categoryParam)
    ? categoryParam
    : 'all'

  const [filters, setFilters] = useState({
    category,
    material: 'all',
    price: 'all',
  })

  useEffect(() => {
    setFilters((prev) => ({ ...prev, category }))
  }, [category])

  const filteredProducts = useMemo(() => {
    let result = [...allProducts]

    if (filters.category !== 'all') {
      result = result.filter((p) => p.category === filters.category)
    }
    if (filters.material !== 'all') {
      result = result.filter((p) => p.material === filters.material)
    }
    if (filters.price !== 'all') {
      result = result.filter((p) => {
        if (filters.price === 'under-50') return p.price < 50
        if (filters.price === '50-80') return p.price >= 50 && p.price <= 80
        if (filters.price === 'over-80') return p.price > 80
        return true
      })
    }

    if (sort === 'price-asc') result.sort((a, b) => a.price - b.price)
    if (sort === 'price-desc') result.sort((a, b) => b.price - a.price)
    if (sort === 'rating') result.sort((a, b) => b.rating - a.rating)

    return result
  }, [filters, sort])

  const activeFiltersCount = [
    filters.category !== 'all',
    filters.material !== 'all',
    filters.price !== 'all',
  ].filter(Boolean).length

  const handleCategoryChange = (value) => {
    setFilters((prev) => ({ ...prev, category: value }))
    if (value === 'all') {
      const next = new URLSearchParams(searchParams)
      next.delete('category')
      setSearchParams(next)
    } else {
      setSearchParams({ category: value })
    }
  }

  const clearFilters = () => {
    setFilters({ category: 'all', material: 'all', price: 'all' })
    setSearchParams({})
  }

  const FilterGroup = ({ title, options, value, onChange }) => (
    <div className="mb-8">
      <h4 className="font-sans text-xs uppercase tracking-widest font-semibold text-ink mb-4">
        {title}
      </h4>
      <div className="space-y-3">
        {options.map((option) => (
          <label
            key={option.value}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <span
              className={cn(
                'w-4 h-4 border flex items-center justify-center transition-colors',
                value === option.value
                  ? 'bg-gold border-gold'
                  : 'border-cream-muted bg-cream group-hover:border-gold'
              )}
            >
              {value === option.value && <span className="w-1.5 h-1.5 bg-ink" />}
            </span>
            <input
              type="radio"
              name={title}
              value={option.value}
              checked={value === option.value}
              onChange={() => onChange(option.value)}
              className="sr-only"
            />
            <span className="font-sans text-sm text-stone group-hover:text-ink transition-colors">
              {option.label}
            </span>
          </label>
        ))}
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-cream pt-24 md:pt-28 pb-20">
      <div className="container-main">
        <SectionHeading
          title={filters.category === 'all' ? 'Shop All' : categories.find((c) => c.value === filters.category)?.label}
          subtitle="The Collection"
          centered
          className="mb-8 md:mb-12"
        />

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Mobile filter toggle */}
          <div className="lg:hidden flex items-center justify-between mb-4">
            <button
              type="button"
              onClick={() => setMobileFiltersOpen(true)}
              className="inline-flex items-center gap-2 font-sans text-xs uppercase tracking-widest text-ink border border-cream-muted px-4 py-2.5"
            >
              <SlidersHorizontal size={14} />
              Filters
              {activeFiltersCount > 0 && (
                <span className="w-4 h-4 bg-gold text-ink text-[10px] font-bold rounded-full flex items-center justify-center">
                  {activeFiltersCount}
                </span>
              )}
            </button>

            <div className="relative">
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="appearance-none bg-transparent font-sans text-xs uppercase tracking-widest text-ink border border-cream-muted px-4 py-2.5 pr-10 focus:outline-none focus:border-gold"
              >
                {sortOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
              <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-stone" />
            </div>
          </div>

          {/* Sidebar */}
          <aside
            className={cn(
              'fixed inset-y-0 left-0 z-40 w-72 bg-cream shadow-2xl transform transition-transform duration-300 lg:static lg:transform-none lg:w-64 lg:bg-transparent lg:shadow-none lg:block overflow-y-auto',
              mobileFiltersOpen ? 'translate-x-0' : '-translate-x-full'
            )}
          >
            <div className="lg:hidden flex items-center justify-between px-6 py-5 border-b border-cream-muted">
              <span className="font-serif text-xl uppercase tracking-widest text-ink">Filters</span>
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(false)}
                className="p-2 text-ink hover:text-gold transition-colors"
              >
                <X size={22} />
              </button>
            </div>

            <div className="p-6 lg:p-0">
              <FilterGroup
                title="Category"
                options={categories}
                value={filters.category}
                onChange={handleCategoryChange}
              />
              <FilterGroup
                title="Material"
                options={materials}
                value={filters.material}
                onChange={(value) => setFilters((prev) => ({ ...prev, material: value }))}
              />
              <FilterGroup
                title="Price"
                options={priceRanges}
                value={filters.price}
                onChange={(value) => setFilters((prev) => ({ ...prev, price: value }))}
              />

              {activeFiltersCount > 0 && (
                <button
                  type="button"
                  onClick={clearFilters}
                  className="font-sans text-xs uppercase tracking-widest text-ink underline underline-offset-4 hover:text-gold transition-colors"
                >
                  Clear all filters
                </button>
              )}
            </div>
          </aside>

          {mobileFiltersOpen && (
            <div
              className="fixed inset-0 bg-ink/40 z-30 lg:hidden"
              onClick={() => setMobileFiltersOpen(false)}
              aria-hidden="true"
            />
          )}

          {/* Product grid */}
          <div className="flex-1">
            <div className="hidden lg:flex items-center justify-between mb-8">
              <p className="font-sans text-sm text-stone">
                {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
              </p>
              <div className="relative">
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="appearance-none bg-transparent font-sans text-xs uppercase tracking-widest text-ink border border-cream-muted px-4 py-2.5 pr-10 focus:outline-none focus:border-gold"
                >
                  {sortOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
                <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-stone" />
              </div>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="text-center py-20 bg-cream-dark">
                <p className="font-serif text-2xl text-ink mb-3">No pieces found</p>
                <p className="font-sans text-sm text-stone mb-6">
                  Try adjusting your filters to see more jewelry.
                </p>
                <button type="button" onClick={clearFilters} className="btn-secondary">
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-10 md:gap-x-6 md:gap-y-12">
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
