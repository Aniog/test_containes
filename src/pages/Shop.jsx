import { useState, useMemo, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react'
import ProductCard from '@/components/ui/ProductCard'
import { PRODUCTS, CATEGORIES, MATERIALS, formatPrice } from '@/data/products'

const PRICE_RANGES = [
  { label: 'Under $50', min: 0, max: 49.99 },
  { label: '$50 – $75', min: 50, max: 75 },
  { label: '$75 – $100', min: 75, max: 100 },
  { label: 'Over $100', min: 100, max: Infinity },
]

const SORT_OPTIONS = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
]

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const [sortBy, setSortBy] = useState('featured')

  const initialCategory = searchParams.get('category') || ''
  const [selectedCategories, setSelectedCategories] = useState(
    initialCategory ? [initialCategory] : []
  )
  const [selectedMaterials, setSelectedMaterials] = useState([])
  const [selectedPriceRanges, setSelectedPriceRanges] = useState([])

  useEffect(() => {
    const category = searchParams.get('category')
    if (category) {
      setSelectedCategories([category])
    }
  }, [searchParams])

  const toggleArrayValue = (value, list, setList) => {
    setList((current) =>
      current.includes(value)
        ? current.filter((item) => item !== value)
        : [...current, value]
    )
  }

  const clearFilters = () => {
    setSelectedCategories([])
    setSelectedMaterials([])
    setSelectedPriceRanges([])
    setSearchParams({})
  }

  const activeFilterCount =
    selectedCategories.length +
    selectedMaterials.length +
    selectedPriceRanges.length

  const filteredProducts = useMemo(() => {
    let result = PRODUCTS.filter((product) => {
      if (
        selectedCategories.length > 0 &&
        !selectedCategories.includes(product.category)
      ) {
        return false
      }
      if (
        selectedMaterials.length > 0 &&
        !selectedMaterials.includes(product.material)
      ) {
        return false
      }
      if (selectedPriceRanges.length > 0) {
        const inRange = selectedPriceRanges.some((rangeLabel) => {
          const range = PRICE_RANGES.find((r) => r.label === rangeLabel)
          return (
            range && product.price >= range.min && product.price <= range.max
          )
        })
        if (!inRange) return false
      }
      return true
    })

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
  }, [selectedCategories, selectedMaterials, selectedPriceRanges, sortBy])

  const FilterGroup = ({ title, children }) => (
    <div className="mb-8">
      <h3 className="font-serif text-base text-espresso mb-4">{title}</h3>
      {children}
    </div>
  )

  const FilterCheckbox = ({ label, checked, onChange, count }) => (
    <label className="flex items-center justify-between gap-2 py-2 cursor-pointer group">
      <span className="flex items-center gap-3">
        <span
          className={`w-4 h-4 border flex items-center justify-center transition-colors duration-300 ${
            checked
              ? 'bg-espresso border-espresso'
              : 'border-espresso/30 group-hover:border-espresso'
          }`}
        >
          {checked && (
            <svg
              width="10"
              height="8"
              viewBox="0 0 10 8"
              fill="none"
              className="text-cream"
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
        <span className="text-sm font-sans text-charcoal/80 group-hover:text-espresso transition-colors duration-300">
          {label}
        </span>
      </span>
      {typeof count === 'number' && (
        <span className="text-xs text-charcoal/50 font-sans">{count}</span>
      )}
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="sr-only"
      />
    </label>
  )

  const Filters = ({ mobile = false }) => (
    <>
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-serif text-xl text-espresso">Filters</h2>
        {activeFilterCount > 0 && (
          <button
            type="button"
            onClick={clearFilters}
            className="text-xs uppercase tracking-[0.12em] font-sans text-charcoal/60 hover:text-gold transition-colors duration-300"
          >
            Clear all
          </button>
        )}
      </div>

      <FilterGroup title="Category">
        {CATEGORIES.map((category) => (
          <FilterCheckbox
            key={category}
            label={category.charAt(0).toUpperCase() + category.slice(1)}
            checked={selectedCategories.includes(category)}
            onChange={() =>
              toggleArrayValue(category, selectedCategories, setSelectedCategories)
            }
          />
        ))}
      </FilterGroup>

      <FilterGroup title="Price">
        {PRICE_RANGES.map((range) => (
          <FilterCheckbox
            key={range.label}
            label={range.label}
            checked={selectedPriceRanges.includes(range.label)}
            onChange={() =>
              toggleArrayValue(range.label, selectedPriceRanges, setSelectedPriceRanges)
            }
          />
        ))}
      </FilterGroup>

      <FilterGroup title="Material">
        {MATERIALS.map((material) => (
          <FilterCheckbox
            key={material}
            label={material}
            checked={selectedMaterials.includes(material)}
            onChange={() =>
              toggleArrayValue(material, selectedMaterials, setSelectedMaterials)
            }
          />
        ))}
      </FilterGroup>
    </>
  )

  return (
    <div className="bg-cream min-h-screen pt-24 md:pt-28 pb-16 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-14">
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-espresso">
            The Collection
          </h1>
          <p className="mt-3 text-sm text-charcoal/70 font-sans max-w-md mx-auto">
            Discover demi-fine pieces crafted to elevate the everyday.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Desktop filters */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-28">
              <Filters />
            </div>
          </aside>

          {/* Main content */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(true)}
                className="lg:hidden flex items-center gap-2 text-xs uppercase tracking-[0.12em] font-sans text-espresso border border-espresso/20 px-4 py-2.5 hover:border-espresso transition-colors duration-300"
              >
                <SlidersHorizontal size={14} strokeWidth={1.5} />
                Filters
                {activeFilterCount > 0 && (
                  <span className="ml-1 w-5 h-5 flex items-center justify-center bg-gold text-espresso rounded-full text-[10px]">
                    {activeFilterCount}
                  </span>
                )}
              </button>

              <div className="flex items-center gap-2 ml-auto">
                <span className="hidden sm:inline text-xs text-charcoal/60 font-sans">
                  Sort by
                </span>
                <div className="relative">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="appearance-none bg-transparent border border-espresso/20 text-espresso text-xs uppercase tracking-[0.1em] font-sans px-4 py-2.5 pr-10 focus:outline-none focus:border-gold cursor-pointer"
                  >
                    {SORT_OPTIONS.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  <ChevronDown
                    size={14}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gold pointer-events-none"
                    strokeWidth={1.5}
                  />
                </div>
              </div>
            </div>

            <p className="text-xs text-charcoal/60 font-sans mb-6">
              {filteredProducts.length} product
              {filteredProducts.length !== 1 ? 's' : ''}
            </p>

            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-10">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-champagne/20">
                <p className="font-serif text-xl text-espresso">
                  No products match your filters.
                </p>
                <button
                  type="button"
                  onClick={clearFilters}
                  className="mt-4 text-xs uppercase tracking-[0.14em] font-sans text-gold hover:text-espresso transition-colors duration-300"
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      <div
        className={`fixed inset-0 z-[60] lg:hidden transition-opacity duration-300 ${
          mobileFiltersOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-espresso/40"
          onClick={() => setMobileFiltersOpen(false)}
        />
        <div
          className={`absolute top-0 left-0 h-full w-[85%] max-w-sm bg-cream shadow-2xl p-6 overflow-y-auto transition-transform duration-500 ${
            mobileFiltersOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-serif text-xl text-espresso">Filters</h2>
            <button
              type="button"
              onClick={() => setMobileFiltersOpen(false)}
              aria-label="Close filters"
              className="p-1 hover:text-gold transition-colors duration-300"
            >
              <X size={22} strokeWidth={1.5} />
            </button>
          </div>
          <Filters mobile />
          <button
            type="button"
            onClick={() => setMobileFiltersOpen(false)}
            className="w-full mt-6 bg-espresso text-cream py-3.5 text-xs uppercase tracking-[0.16em] font-sans hover:bg-charcoal transition-colors duration-300"
          >
            View {filteredProducts.length} Product
            {filteredProducts.length !== 1 ? 's' : ''}
          </button>
        </div>
      </div>
    </div>
  )
}
