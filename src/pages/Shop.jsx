import { useState, useMemo, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, X } from 'lucide-react'
import { PRODUCTS, CATEGORIES } from '@/data/products'
import ProductCard from '@/components/ui/ProductCard'
import SectionHeading from '@/components/ui/SectionHeading'
import { cn } from '@/lib/utils'

const SORT_OPTIONS = [
  { id: 'featured', label: 'Featured' },
  { id: 'price-asc', label: 'Price: Low to High' },
  { id: 'price-desc', label: 'Price: High to Low' },
  { id: 'rating', label: 'Top Rated' },
]

const PRICE_RANGES = [
  { id: 'under50', label: 'Under $50', min: 0, max: 50 },
  { id: '50to80', label: '$50 - $80', min: 50, max: 80 },
  { id: 'over80', label: 'Over $80', min: 80, max: Infinity },
]

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const initialCategory = searchParams.get('category') || 'all'

  const [selectedCategory, setSelectedCategory] = useState(initialCategory)
  const [selectedPrice, setSelectedPrice] = useState('all')
  const [selectedMaterial, setSelectedMaterial] = useState('all')
  const [sortBy, setSortBy] = useState('featured')
  const [filtersOpen, setFiltersOpen] = useState(false)

  useEffect(() => {
    setSelectedCategory(initialCategory)
  }, [initialCategory])

  const filteredProducts = useMemo(() => {
    let result = [...PRODUCTS]

    if (selectedCategory !== 'all') {
      result = result.filter((p) => p.category === selectedCategory)
    }

    if (selectedPrice !== 'all') {
      const range = PRICE_RANGES.find((r) => r.id === selectedPrice)
      if (range) {
        result = result.filter((p) => p.price >= range.min && p.price < range.max)
      }
    }

    if (selectedMaterial !== 'all') {
      result = result.filter((p) => p.material === selectedMaterial)
    }

    switch (sortBy) {
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
  }, [selectedCategory, selectedPrice, selectedMaterial, sortBy])

  const activeFiltersCount = useMemo(() => {
    let count = 0
    if (selectedCategory !== 'all') count++
    if (selectedPrice !== 'all') count++
    if (selectedMaterial !== 'all') count++
    return count
  }, [selectedCategory, selectedPrice, selectedMaterial])

  const clearFilters = () => {
    setSelectedCategory('all')
    setSelectedPrice('all')
    setSelectedMaterial('all')
    setSearchParams({})
  }

  return (
    <div className="animate-fade-in pb-16 pt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title="The Collection" subtitle="Shop All" />

        <div className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-stone-200 pb-4">
          <button
            type="button"
            onClick={() => setFiltersOpen(true)}
            className="flex items-center gap-2 font-sans text-xs font-semibold uppercase tracking-widest text-velmora-base transition-colors hover:text-velmora-accent lg:hidden"
          >
            <SlidersHorizontal size={16} />
            Filters
            {activeFiltersCount > 0 && (
              <span className="flex h-4 w-4 items-center justify-center rounded-full bg-velmora-accent text-[10px] font-semibold text-velmora-base">
                {activeFiltersCount}
              </span>
            )}
          </button>

          <div className="hidden items-center gap-6 lg:flex">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => {
                  setSelectedCategory(cat.id)
                  setSearchParams({ category: cat.id })
                }}
                className={cn(
                  'font-sans text-xs font-medium uppercase tracking-widest transition-colors',
                  selectedCategory === cat.id
                    ? 'text-velmora-base'
                    : 'text-velmora-text-secondary hover:text-velmora-base'
                )}
              >
                {cat.label}
              </button>
            ))}
            <button
              type="button"
              onClick={() => {
                setSelectedCategory('all')
                setSearchParams({})
              }}
              className={cn(
                'font-sans text-xs font-medium uppercase tracking-widest transition-colors',
                selectedCategory === 'all'
                  ? 'text-velmora-base'
                  : 'text-velmora-text-secondary hover:text-velmora-base'
              )}
            >
              All
            </button>
          </div>

          <div className="flex items-center gap-3">
            <label htmlFor="sort" className="hidden text-xs text-velmora-text-secondary sm:block">
              Sort by
            </label>
            <select
              id="sort"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border border-stone-300 bg-transparent px-3 py-2 font-sans text-xs uppercase tracking-wider text-velmora-base focus:border-velmora-base focus:outline-none"
            >
              {SORT_OPTIONS.map((opt) => (
                <option key={opt.id} value={opt.id}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex gap-12">
          {/* Desktop sidebar */}
          <aside className="hidden w-56 flex-shrink-0 lg:block">
            <div className="sticky top-24">
              <div className="mb-8">
                <h3 className="mb-4 font-sans text-xs font-semibold uppercase tracking-widest text-velmora-base">
                  Category
                </h3>
                <div className="space-y-2">
                  <FilterRadio
                    id="cat-all"
                    label="All"
                    checked={selectedCategory === 'all'}
                    onChange={() => {
                      setSelectedCategory('all')
                      setSearchParams({})
                    }}
                  />
                  {CATEGORIES.map((cat) => (
                    <FilterRadio
                      key={cat.id}
                      id={`cat-${cat.id}`}
                      label={cat.label}
                      checked={selectedCategory === cat.id}
                      onChange={() => {
                        setSelectedCategory(cat.id)
                        setSearchParams({ category: cat.id })
                      }}
                    />
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h3 className="mb-4 font-sans text-xs font-semibold uppercase tracking-widest text-velmora-base">
                  Price
                </h3>
                <div className="space-y-2">
                  <FilterRadio
                    id="price-all"
                    label="All Prices"
                    checked={selectedPrice === 'all'}
                    onChange={() => setSelectedPrice('all')}
                  />
                  {PRICE_RANGES.map((range) => (
                    <FilterRadio
                      key={range.id}
                      id={`price-${range.id}`}
                      label={range.label}
                      checked={selectedPrice === range.id}
                      onChange={() => setSelectedPrice(range.id)}
                    />
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h3 className="mb-4 font-sans text-xs font-semibold uppercase tracking-widest text-velmora-base">
                  Material
                </h3>
                <div className="space-y-2">
                  <FilterRadio
                    id="mat-all"
                    label="All Materials"
                    checked={selectedMaterial === 'all'}
                    onChange={() => setSelectedMaterial('all')}
                  />
                  <FilterRadio
                    id="mat-gold"
                    label="Gold Plated"
                    checked={selectedMaterial === 'gold-plated'}
                    onChange={() => setSelectedMaterial('gold-plated')}
                  />
                </div>
              </div>

              {activeFiltersCount > 0 && (
                <button
                  type="button"
                  onClick={clearFilters}
                  className="font-sans text-xs font-medium uppercase tracking-widest text-velmora-text-secondary underline transition-colors hover:text-velmora-base"
                >
                  Clear Filters
                </button>
              )}
            </div>
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            <p className="mb-6 text-sm text-velmora-text-secondary">
              {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
            </p>
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 lg:gap-x-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="py-20 text-center">
                <p className="font-serif text-2xl text-velmora-base">No pieces match your filters.</p>
                <button
                  type="button"
                  onClick={clearFilters}
                  className="mt-4 text-sm text-velmora-accent underline"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filters drawer */}
      <div
        className={cn(
          'fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300 lg:hidden',
          filtersOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        )}
        onClick={() => setFiltersOpen(false)}
      />
      <aside
        className={cn(
          'fixed left-0 top-0 z-50 h-full w-80 max-w-[85vw] overflow-y-auto bg-velmora-surface shadow-2xl transition-transform duration-300 ease-out lg:hidden',
          filtersOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        <div className="flex items-center justify-between border-b border-stone-200 px-6 py-5">
          <span className="font-serif text-xl font-semibold uppercase tracking-widest text-velmora-base">
            Filters
          </span>
          <button
            type="button"
            onClick={() => setFiltersOpen(false)}
            className="p-2 text-velmora-text-secondary"
          >
            <X size={22} />
          </button>
        </div>
        <div className="px-6 py-6">
          <MobileFilterGroup title="Category">
            <FilterRadio
              id="mob-cat-all"
              label="All"
              checked={selectedCategory === 'all'}
              onChange={() => setSelectedCategory('all')}
            />
            {CATEGORIES.map((cat) => (
              <FilterRadio
                key={cat.id}
                id={`mob-cat-${cat.id}`}
                label={cat.label}
                checked={selectedCategory === cat.id}
                onChange={() => setSelectedCategory(cat.id)}
              />
            ))}
          </MobileFilterGroup>

          <MobileFilterGroup title="Price">
            <FilterRadio
              id="mob-price-all"
              label="All Prices"
              checked={selectedPrice === 'all'}
              onChange={() => setSelectedPrice('all')}
            />
            {PRICE_RANGES.map((range) => (
              <FilterRadio
                key={range.id}
                id={`mob-price-${range.id}`}
                label={range.label}
                checked={selectedPrice === range.id}
                onChange={() => setSelectedPrice(range.id)}
              />
            ))}
          </MobileFilterGroup>

          <MobileFilterGroup title="Material">
            <FilterRadio
              id="mob-mat-all"
              label="All Materials"
              checked={selectedMaterial === 'all'}
              onChange={() => setSelectedMaterial('all')}
            />
            <FilterRadio
              id="mob-mat-gold"
              label="Gold Plated"
              checked={selectedMaterial === 'gold-plated'}
              onChange={() => setSelectedMaterial('gold-plated')}
            />
          </MobileFilterGroup>

          <button
            type="button"
            onClick={clearFilters}
            className="mt-2 font-sans text-xs font-medium uppercase tracking-widest text-velmora-text-secondary underline"
          >
            Clear Filters
          </button>
          <button
            type="button"
            onClick={() => setFiltersOpen(false)}
            className="mt-6 w-full bg-velmora-base py-3 font-sans text-xs font-semibold uppercase tracking-widest text-white"
          >
            View {filteredProducts.length} Results
          </button>
        </div>
      </aside>
    </div>
  )
}

function FilterRadio({ id, label, checked, onChange }) {
  return (
    <label htmlFor={id} className="flex cursor-pointer items-center gap-3">
      <input
        id={id}
        type="radio"
        checked={checked}
        onChange={onChange}
        className="h-4 w-4 accent-velmora-base"
      />
      <span
        className={cn(
          'font-sans text-sm transition-colors',
          checked ? 'font-medium text-velmora-base' : 'text-velmora-text-secondary'
        )}
      >
        {label}
      </span>
    </label>
  )
}

function MobileFilterGroup({ title, children }) {
  return (
    <div className="mb-6">
      <h3 className="mb-3 font-sans text-xs font-semibold uppercase tracking-widest text-velmora-base">
        {title}
      </h3>
      <div className="space-y-2">{children}</div>
    </div>
  )
}
