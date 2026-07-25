import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Check, ChevronDown, RotateCcw, SearchX, SlidersHorizontal, X } from 'lucide-react'
import ProductCard from '@/components/product/product-card'
import { cn } from '@/lib/utils'
import { CATEGORIES, PRICE_RANGES, PRODUCTS } from '@/data/products'

const SORTS = [
  { id: 'featured', label: 'Featured' },
  { id: 'price-asc', label: 'Price: Low to High' },
  { id: 'price-desc', label: 'Price: High to Low' },
  { id: 'rating', label: 'Top Rated' },
  { id: 'name', label: 'Name A–Z' },
]

const MATERIAL_FILTERS = [
  { id: 'gold', label: '18K Gold Plated', match: () => true },
  {
    id: 'crystal',
    label: 'Crystal Accent',
    match: (p) => p.materials.toLowerCase().includes('crystal'),
  },
  {
    id: 'gift',
    label: 'Gift Set',
    match: (p) => p.category === 'Sets',
  },
]

function FilterSection({ title, children }) {
  return (
    <fieldset className="border-b border-line py-6">
      <legend className="mb-4 pt-6 text-[11px] font-semibold uppercase tracking-luxe text-ink">
        {title}
      </legend>
      <div className="space-y-3">{children}</div>
    </fieldset>
  )
}

function FilterCheck({ checked, onChange, label, count }) {
  return (
    <label className="group flex cursor-pointer items-center gap-3">
      <span
        className={cn(
          'flex h-[18px] w-[18px] items-center justify-center border transition-all duration-200',
          checked ? 'border-gold bg-gold' : 'border-ink/30 bg-transparent group-hover:border-gold'
        )}
        aria-hidden="true"
      >
        {checked && <Check className="h-3 w-3 text-cream" strokeWidth={2.5} />}
      </span>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="sr-only"
      />
      <span
        className={cn(
          'flex-1 text-sm transition-colors',
          checked ? 'text-ink' : 'text-mocha group-hover:text-ink'
        )}
      >
        {label}
      </span>
      {typeof count === 'number' && (
        <span className="text-xs text-mocha/70">({count})</span>
      )}
    </label>
  )
}

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  const categoryParam = searchParams.get('category')
  const query = (searchParams.get('q') ?? '').trim()
  const sort = searchParams.get('sort') ?? 'featured'
  const priceParam = searchParams.get('price') ?? ''
  const materialParam = searchParams.get('material') ?? ''

  const selectedCategories = categoryParam ? categoryParam.split(',').filter(Boolean) : []
  const selectedPrices = priceParam ? priceParam.split(',').filter(Boolean) : []
  const selectedMaterials = materialParam ? materialParam.split(',').filter(Boolean) : []

  const updateParams = (updates) => {
    const next = new URLSearchParams(searchParams)
    Object.entries(updates).forEach(([key, value]) => {
      if (!value || (Array.isArray(value) && value.length === 0)) next.delete(key)
      else next.set(key, Array.isArray(value) ? value.join(',') : value)
    })
    setSearchParams(next, { replace: true })
  }

  const toggle = (list, value) =>
    list.includes(value) ? list.filter((v) => v !== value) : [...list, value]

  const filtered = useMemo(() => {
    let list = [...PRODUCTS]

    if (query) {
      const q = query.toLowerCase()
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.short.toLowerCase().includes(q) ||
          p.materials.toLowerCase().includes(q)
      )
    }
    if (selectedCategories.length > 0) {
      list = list.filter((p) => selectedCategories.includes(p.category))
    }
    if (selectedPrices.length > 0) {
      list = list.filter((p) =>
        selectedPrices.some((id) => {
          const range = PRICE_RANGES.find((r) => r.id === id)
          return range && p.price >= range.min && p.price < range.max
        })
      )
    }
    if (selectedMaterials.length > 0) {
      list = list.filter((p) =>
        selectedMaterials.some((id) => {
          const material = MATERIAL_FILTERS.find((m) => m.id === id)
          return material && material.match(p)
        })
      )
    }

    switch (sort) {
      case 'price-asc':
        list.sort((a, b) => a.price - b.price)
        break
      case 'price-desc':
        list.sort((a, b) => b.price - a.price)
        break
      case 'rating':
        list.sort((a, b) => b.rating - a.rating || b.reviews - a.reviews)
        break
      case 'name':
        list.sort((a, b) => a.name.localeCompare(b.name))
        break
      default:
        break
    }
    return list
  }, [query, selectedCategories, selectedPrices, selectedMaterials, sort])

  const hasActiveFilters =
    selectedCategories.length > 0 || selectedPrices.length > 0 || selectedMaterials.length > 0 || query

  const clearAll = () => setSearchParams({}, { replace: true })

  const filterPanel = (
    <div>
      {query && (
        <div className="border-b border-line py-6">
          <p className="text-[11px] font-semibold uppercase tracking-luxe text-ink">
            Search
          </p>
          <p className="mt-2 flex items-center justify-between gap-2 text-sm text-mocha">
            <span className="truncate">“{query}”</span>
            <button
              type="button"
              onClick={() => updateParams({ q: null })}
              aria-label="Clear search"
              className="shrink-0 text-gold-deep transition-colors hover:text-ink"
            >
              <X className="h-4 w-4" strokeWidth={1.5} />
            </button>
          </p>
        </div>
      )}

      <FilterSection title="Category">
        {CATEGORIES.filter((c) => c !== 'All').map((category) => (
          <FilterCheck
            key={category}
            label={category}
            count={PRODUCTS.filter((p) => p.category === category).length}
            checked={selectedCategories.includes(category)}
            onChange={() =>
              updateParams({ category: toggle(selectedCategories, category) })
            }
          />
        ))}
      </FilterSection>

      <FilterSection title="Price">
        {PRICE_RANGES.map((range) => (
          <FilterCheck
            key={range.id}
            label={range.label}
            count={
              PRODUCTS.filter((p) => p.price >= range.min && p.price < range.max)
                .length
            }
            checked={selectedPrices.includes(range.id)}
            onChange={() => updateParams({ price: toggle(selectedPrices, range.id) })}
          />
        ))}
      </FilterSection>

      <FilterSection title="Material">
        {MATERIAL_FILTERS.map((material) => (
          <FilterCheck
            key={material.id}
            label={material.label}
            count={PRODUCTS.filter((p) => material.match(p)).length}
            checked={selectedMaterials.includes(material.id)}
            onChange={() =>
              updateParams({ material: toggle(selectedMaterials, material.id) })
            }
          />
        ))}
      </FilterSection>

      {hasActiveFilters && (
        <button
          type="button"
          onClick={clearAll}
          className="mt-6 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-luxe text-gold-deep transition-colors hover:text-ink"
        >
          <RotateCcw className="h-3.5 w-3.5" strokeWidth={1.5} />
          Clear all filters
        </button>
      )}
    </div>
  )

  return (
    <div className="pt-16 sm:pt-20">
      <header className="border-b border-line bg-sand">
        <div className="mx-auto max-w-7xl px-5 py-12 text-center sm:px-8 sm:py-16 lg:px-12">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-luxe text-gold-deep">
            The Collection
          </p>
          <h1 className="font-serif text-4xl font-medium text-ink sm:text-5xl">
            {query ? `Results for “${query}”` : 'Shop All Jewelry'}
          </h1>
          <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-mocha">
            Demi-fine pieces in warm 18K gold — designed to be lived in, gifted,
            and kept close.
          </p>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-[240px_1fr] lg:gap-12">
          <aside className="hidden lg:block" aria-label="Product filters">
            <div className="sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto pb-10 pr-1 no-scrollbar">
              {filterPanel}
            </div>
          </aside>

          <div className="pb-20 pt-8 lg:pt-10">
            <div className="mb-8 flex items-center justify-between gap-4">
              <p className="text-xs font-semibold uppercase tracking-luxe text-mocha">
                {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
              </p>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setMobileFiltersOpen(true)}
                  className="flex items-center gap-2 border border-ink/20 px-4 py-2.5 text-[11px] font-semibold uppercase tracking-luxe text-ink transition-colors hover:border-gold hover:text-gold-deep lg:hidden"
                >
                  <SlidersHorizontal className="h-3.5 w-3.5" strokeWidth={1.5} />
                  Filters
                </button>
                <div className="relative">
                  <label htmlFor="shop-sort" className="sr-only">
                    Sort products
                  </label>
                  <select
                    id="shop-sort"
                    value={sort}
                    onChange={(e) => updateParams({ sort: e.target.value })}
                    className="appearance-none border border-ink/20 bg-transparent py-2.5 pl-4 pr-10 text-[11px] font-semibold uppercase tracking-luxe text-ink transition-colors hover:border-gold focus:border-gold focus:outline-none"
                  >
                    {SORTS.map((option) => (
                      <option key={option.id} value={option.id}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  <ChevronDown
                    className="pointer-events-none absolute right-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-mocha"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                </div>
              </div>
            </div>

            {filtered.length === 0 ? (
              <div className="flex flex-col items-center gap-5 border border-dashed border-line py-24 text-center">
                <SearchX className="h-10 w-10 text-line" strokeWidth={1} />
                <div>
                  <p className="font-serif text-2xl font-medium text-ink">No pieces found</p>
                  <p className="mt-2 text-sm text-mocha">
                    Try removing a filter or searching for something else.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={clearAll}
                  className="text-[11px] font-semibold uppercase tracking-luxe text-gold-deep transition-colors hover:text-ink"
                >
                  Clear everything
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 sm:gap-x-6">
                {filtered.map((product, i) => (
                  <ProductCard key={product.id} product={product} eager={i < 3} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal="true" aria-label="Filters">
          <button
            type="button"
            aria-label="Close filters"
            onClick={() => setMobileFiltersOpen(false)}
            className="absolute inset-0 animate-overlay-in bg-ink/50 backdrop-blur-sm"
          />
          <div className="animate-drawer-in absolute inset-y-0 right-0 flex w-[88%] max-w-sm flex-col bg-cream">
            <div className="flex items-center justify-between border-b border-line px-6 py-5">
              <h2 className="font-serif text-xl font-medium text-ink">Filters</h2>
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(false)}
                aria-label="Close filters"
                className="p-2 text-ink transition-colors hover:text-gold-deep"
              >
                <X className="h-5 w-5" strokeWidth={1.5} />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto px-6 pb-6">{filterPanel}</div>
            <div className="border-t border-line p-5">
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(false)}
                className="w-full bg-ink py-4 text-xs font-semibold uppercase tracking-luxe text-cream transition-colors hover:bg-gold hover:text-ink"
              >
                Show {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
