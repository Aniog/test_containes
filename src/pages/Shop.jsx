import { useState, useMemo, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react'
import ProductCard from '@/components/ProductCard'
import { products } from '@/data/products'

const categories = [
  { id: 'earrings', label: 'Earrings' },
  { id: 'necklaces', label: 'Necklaces' },
  { id: 'huggies', label: 'Huggies' },
  { id: 'sets', label: 'Gift Sets' },
]

const materials = [
  { id: 'gold', label: 'Gold Plated' },
  { id: 'silver', label: 'Silver Plated' },
]

const priceRanges = [
  { id: 'under50', label: 'Under $50', min: 0, max: 49.99 },
  { id: '50to80', label: '$50 – $80', min: 50, max: 80 },
  { id: 'over80', label: 'Over $80', min: 80.01, max: Infinity },
]

const sortOptions = [
  { id: 'featured', label: 'Featured' },
  { id: 'priceLow', label: 'Price: Low to High' },
  { id: 'priceHigh', label: 'Price: High to Low' },
  { id: 'newest', label: 'Newest' },
]

function FilterGroup({ title, children }) {
  return (
    <div className="mb-8">
      <h4 className="font-sans text-xs uppercase tracking-[0.14em] text-velmora-ink font-medium mb-4">
        {title}
      </h4>
      {children}
    </div>
  )
}

function Checkbox({ checked, onChange, label, count }) {
  return (
    <label className="flex items-center justify-between gap-3 cursor-pointer group py-1.5">
      <span className="flex items-center gap-3">
        <span
          className={`w-4 h-4 border flex items-center justify-center transition-colors ${
            checked
              ? 'bg-velmora-ink border-velmora-ink'
              : 'border-velmora-hairline group-hover:border-velmora-ink-muted'
          }`}
        >
          {checked && (
            <svg
              width="10"
              height="8"
              viewBox="0 0 10 8"
              fill="none"
              className="text-white"
            >
              <path
                d="M1 4L3.5 6.5L9 1"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </span>
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className="sr-only"
        />
        <span className="font-sans text-sm text-velmora-ink-muted group-hover:text-velmora-ink transition-colors">
          {label}
        </span>
      </span>
      {typeof count === 'number' && (
        <span className="font-sans text-xs text-velmora-ink-muted">({count})</span>
      )}
    </label>
  )
}

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const [sortOpen, setSortOpen] = useState(false)
  const [selectedSort, setSelectedSort] = useState('featured')

  const initialCategory = searchParams.get('category') || ''
  const [selectedCategories, setSelectedCategories] = useState(
    initialCategory ? [initialCategory] : []
  )
  const [selectedMaterials, setSelectedMaterials] = useState([])
  const [selectedPrices, setSelectedPrices] = useState([])

  useEffect(() => {
    const category = searchParams.get('category')
    if (category) {
      setSelectedCategories([category])
    }
  }, [searchParams])

  const toggleCategory = (id) => {
    setSelectedCategories((prev) =>
      prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id]
    )
  }

  const toggleMaterial = (id) => {
    setSelectedMaterials((prev) =>
      prev.includes(id) ? prev.filter((m) => m !== id) : [...prev, id]
    )
  }

  const togglePrice = (id) => {
    setSelectedPrices((prev) =>
      prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id]
    )
  }

  const clearFilters = () => {
    setSelectedCategories([])
    setSelectedMaterials([])
    setSelectedPrices([])
    setSearchParams({})
  }

  const filteredProducts = useMemo(() => {
    let result = [...products]

    if (selectedCategories.length > 0) {
      result = result.filter((p) => selectedCategories.includes(p.category))
    }

    if (selectedMaterials.length > 0) {
      result = result.filter((p) =>
        selectedMaterials.some((m) => p.toneOptions.includes(m))
      )
    }

    if (selectedPrices.length > 0) {
      result = result.filter((p) =>
        selectedPrices.some((id) => {
          const range = priceRanges.find((r) => r.id === id)
          return p.price >= range.min && p.price <= range.max
        })
      )
    }

    switch (selectedSort) {
      case 'priceLow':
        result.sort((a, b) => a.price - b.price)
        break
      case 'priceHigh':
        result.sort((a, b) => b.price - a.price)
        break
      case 'newest':
        result.sort((a, b) => (a.new === b.new ? 0 : a.new ? -1 : 1))
        break
      default:
        break
    }

    return result
  }, [selectedCategories, selectedMaterials, selectedPrices, selectedSort])

  const activeFilterCount =
    selectedCategories.length + selectedMaterials.length + selectedPrices.length

  const FilterContent = () => (
    <>
      <div className="flex items-center justify-between mb-8">
        <h3 className="font-serif text-xl text-velmora-ink">Filters</h3>
        {activeFilterCount > 0 && (
          <button
            onClick={clearFilters}
            className="font-sans text-xs uppercase tracking-[0.12em] text-velmora-ink-muted hover:text-velmora-accent transition-colors"
          >
            Clear all
          </button>
        )}
      </div>

      <FilterGroup title="Category">
        {categories.map((category) => (
          <Checkbox
            key={category.id}
            label={category.label}
            checked={selectedCategories.includes(category.id)}
            onChange={() => toggleCategory(category.id)}
          />
        ))}
      </FilterGroup>

      <FilterGroup title="Material">
        {materials.map((material) => (
          <Checkbox
            key={material.id}
            label={material.label}
            checked={selectedMaterials.includes(material.id)}
            onChange={() => toggleMaterial(material.id)}
          />
        ))}
      </FilterGroup>

      <FilterGroup title="Price">
        {priceRanges.map((range) => (
          <Checkbox
            key={range.id}
            label={range.label}
            checked={selectedPrices.includes(range.id)}
            onChange={() => togglePrice(range.id)}
          />
        ))}
      </FilterGroup>
    </>
  )

  return (
    <main className="bg-velmora-bg pt-20 md:pt-24 min-h-screen">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="text-center mb-10 md:mb-14">
          <p className="font-sans text-xs uppercase tracking-[0.2em] text-velmora-ink-muted mb-3">
            Velmora Collection
          </p>
          <h1 className="font-serif text-4xl md:text-5xl text-velmora-ink">
            Shop All Jewelry
          </h1>
        </div>

        <div className="flex items-center justify-between mb-8">
          <button
            onClick={() => setMobileFiltersOpen(true)}
            className="md:hidden flex items-center gap-2 font-sans text-xs uppercase tracking-[0.14em] text-velmora-ink border border-velmora-hairline px-4 py-2.5"
          >
            <SlidersHorizontal size={16} />
            Filters {activeFilterCount > 0 && `(${activeFilterCount})`}
          </button>

          <div className="hidden md:block text-sm font-sans text-velmora-ink-muted">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
          </div>

          <div className="relative">
            <button
              onClick={() => setSortOpen((prev) => !prev)}
              className="flex items-center gap-2 font-sans text-xs uppercase tracking-[0.12em] text-velmora-ink border border-velmora-hairline px-4 py-2.5 hover:border-velmora-ink transition-colors"
            >
              {sortOptions.find((o) => o.id === selectedSort)?.label}
              <ChevronDown size={14} className={`transition-transform ${sortOpen ? 'rotate-180' : ''}`} />
            </button>
            {sortOpen && (
              <div className="absolute right-0 top-full mt-2 w-48 bg-velmora-surface border border-velmora-hairline shadow-lg z-10">
                {sortOptions.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => {
                      setSelectedSort(option.id)
                      setSortOpen(false)
                    }}
                    className={`w-full text-left px-4 py-3 font-sans text-xs uppercase tracking-[0.12em] hover:bg-velmora-bg transition-colors ${
                      selectedSort === option.id
                        ? 'text-velmora-accent'
                        : 'text-velmora-ink'
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="flex gap-12">
          {/* Desktop sidebar */}
          <aside className="hidden md:block w-64 flex-shrink-0">
            <FilterContent />
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
                {filteredProducts.map((product, index) => (
                  <ProductCard key={product.id} product={product} index={index} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="font-serif text-2xl text-velmora-ink mb-3">
                  No pieces match your filters
                </p>
                <button
                  onClick={clearFilters}
                  className="font-sans text-xs uppercase tracking-[0.14em] text-velmora-accent border-b border-velmora-accent pb-0.5 hover:text-velmora-accent-hover transition-colors"
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filters drawer */}
      <div
        className={`fixed inset-0 z-[60] md:hidden transition-opacity duration-300 ${
          mobileFiltersOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-velmora-ink/40"
          onClick={() => setMobileFiltersOpen(false)}
        />
        <aside
          className={`absolute top-0 left-0 h-full w-[85%] max-w-sm bg-velmora-surface shadow-xl transition-transform duration-300 overflow-y-auto ${
            mobileFiltersOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="p-6 border-b border-velmora-hairline flex items-center justify-between">
            <h3 className="font-serif text-xl text-velmora-ink">Filters</h3>
            <button
              onClick={() => setMobileFiltersOpen(false)}
              aria-label="Close filters"
              className="p-2 text-velmora-ink"
            >
              <X size={22} />
            </button>
          </div>
          <div className="p-6">
            <FilterContent />
          </div>
        </aside>
      </div>
    </main>
  )
}
