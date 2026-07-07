import { useState, useEffect, useRef, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import { SlidersHorizontal, X } from 'lucide-react'
import { products, categories, priceRanges, materials } from '@/data/products'
import ProductCard from '@/components/shop/ProductCard'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils'
import strkImgConfig from '@/strk-img-config.json'

const sortOptions = [
  { id: 'featured', name: 'Featured' },
  { id: 'price-low', name: 'Price: Low to High' },
  { id: 'price-high', name: 'Price: High to Low' },
  { id: 'rating', name: 'Top Rated' },
]

export default function Collection() {
  const [searchParams, setSearchParams] = useSearchParams()
  const containerRef = useRef(null)
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false)
  const [selectedCategories, setSelectedCategories] = useState(() => {
    const category = searchParams.get('category')
    return category ? [category] : []
  })
  const [selectedPriceRanges, setSelectedPriceRanges] = useState([])
  const [selectedMaterials, setSelectedMaterials] = useState([])
  const [sortBy, setSortBy] = useState('featured')

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  useEffect(() => {
    const category = searchParams.get('category')
    if (category) {
      setSelectedCategories([category])
    }
  }, [searchParams])

  const filteredProducts = useMemo(() => {
    let result = [...products]

    if (selectedCategories.length > 0) {
      result = result.filter((p) => selectedCategories.includes(p.category))
    }

    if (selectedPriceRanges.length > 0) {
      result = result.filter((p) =>
        selectedPriceRanges.some(
          (rangeId) => {
            const range = priceRanges.find((r) => r.id === rangeId)
            return range && p.price >= range.min && p.price < range.max
          }
        )
      )
    }

    if (selectedMaterials.length > 0) {
      result = result.filter((p) => selectedMaterials.includes(p.material))
    }

    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price)
        break
      case 'price-high':
        result.sort((a, b) => b.price - a.price)
        break
      case 'rating':
        result.sort((a, b) => b.rating - a.rating)
        break
      default:
        break
    }

    return result
  }, [selectedCategories, selectedPriceRanges, selectedMaterials, sortBy])

  const toggleCategory = (id) => {
    setSelectedCategories((prev) =>
      prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id]
    )
  }

  const togglePriceRange = (id) => {
    setSelectedPriceRanges((prev) =>
      prev.includes(id) ? prev.filter((r) => r !== id) : [...prev, id]
    )
  }

  const toggleMaterial = (id) => {
    setSelectedMaterials((prev) =>
      prev.includes(id) ? prev.filter((m) => m !== id) : [...prev, id]
    )
  }

  const clearFilters = () => {
    setSelectedCategories([])
    setSelectedPriceRanges([])
    setSelectedMaterials([])
    setSearchParams({})
  }

  const activeFilterCount =
    selectedCategories.length + selectedPriceRanges.length + selectedMaterials.length

  const FilterGroup = ({ title, options, selected, toggle }) => (
    <div className="border-b border-mist pb-6">
      <h3 className="mb-4 text-xs font-medium uppercase tracking-[0.16em] text-espresso">
        {title}
      </h3>
      <ul className="space-y-3">
        {options.map((option) => (
          <li key={option.id}>
            <label className="flex cursor-pointer items-center gap-3 text-sm text-taupe hover:text-espresso">
              <span
                className={cn(
                  'flex h-4 w-4 items-center justify-center border transition-colors',
                  selected.includes(option.id)
                    ? 'border-espresso bg-espresso'
                    : 'border-mist bg-cream'
                )}
              >
                {selected.includes(option.id) && (
                  <svg className="h-2.5 w-2.5 text-cream" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                )}
              </span>
              <input
                type="checkbox"
                className="sr-only"
                checked={selected.includes(option.id)}
                onChange={() => toggle(option.id)}
              />
              {option.name}
            </label>
          </li>
        ))}
      </ul>
    </div>
  )

  return (
    <div ref={containerRef} className="bg-cream">
      {/* Hero banner */}
      <div className="relative h-[280px] overflow-hidden bg-espresso md:h-[360px]">
        <div
          data-strk-bg-id="collection-hero-bg"
          data-strk-bg="[collection-hero-title] [collection-hero-subtitle] gold jewelry collection"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
          className="absolute inset-0 bg-cocoa opacity-60"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-cream">
          <p
            id="collection-hero-subtitle"
            className="mb-3 text-xs uppercase tracking-[0.2em] text-gold-light"
          >
            The Collection
          </p>
          <h1
            id="collection-hero-title"
            className="font-serif text-4xl md:text-5xl lg:text-6xl"
          >
            Shop All Jewelry
          </h1>
        </div>
      </div>

      <div className="mx-auto max-w-[1440px] px-5 py-8 md:px-8 lg:px-12">
        {/* Toolbar */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-mist pb-4">
          <button
            type="button"
            onClick={() => setIsMobileFilterOpen(true)}
            className="flex items-center gap-2 text-xs uppercase tracking-widest text-espresso md:hidden"
          >
            <SlidersHorizontal className="h-4 w-4" />
            Filter
            {activeFilterCount > 0 && (
              <span className="ml-1 flex h-4 w-4 items-center justify-center rounded-full bg-gold text-[10px] text-white">
                {activeFilterCount}
              </span>
            )}
          </button>

          <p className="hidden text-sm text-taupe md:block">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
          </p>

          <div className="flex items-center gap-3">
            <span className="text-xs uppercase tracking-widest text-taupe">Sort by</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="h-9 border border-mist bg-cream px-3 text-sm text-espresso focus:border-espresso focus:outline-none"
            >
              {sortOptions.map((option) => (
                <option key={option.id} value={option.id}>
                  {option.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex gap-10">
          {/* Desktop sidebar */}
          <aside className="hidden w-64 flex-shrink-0 md:block">
            <div className="sticky top-24 space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-xs font-medium uppercase tracking-[0.16em] text-espresso">
                  Filters
                </h2>
                {activeFilterCount > 0 && (
                  <button
                    type="button"
                    onClick={clearFilters}
                    className="text-xs text-taupe underline-offset-2 hover:text-espresso hover:underline"
                  >
                    Clear all
                  </button>
                )}
              </div>
              <FilterGroup
                title="Category"
                options={categories}
                selected={selectedCategories}
                toggle={toggleCategory}
              />
              <FilterGroup
                title="Price"
                options={priceRanges}
                selected={selectedPriceRanges}
                toggle={togglePriceRange}
              />
              <FilterGroup
                title="Material"
                options={materials}
                selected={selectedMaterials}
                toggle={toggleMaterial}
              />
            </div>
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="py-20 text-center">
                <p className="font-serif text-2xl text-espresso">No pieces match your filters</p>
                <button
                  type="button"
                  onClick={clearFilters}
                  className="mt-4 text-sm uppercase tracking-widest text-gold hover:text-gold-dark"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-3 lg:grid-cols-4">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      <div
        className={cn(
          'fixed inset-0 z-[60] bg-espresso/40 transition-opacity duration-300 md:hidden',
          isMobileFilterOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        )}
        onClick={() => setIsMobileFilterOpen(false)}
      />
      <div
        className={cn(
          'fixed left-0 top-0 z-[70] h-full w-[300px] overflow-y-auto bg-cream shadow-2xl transition-transform duration-300 md:hidden',
          isMobileFilterOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        <div className="flex items-center justify-between border-b border-mist px-5 py-4">
          <h2 className="font-serif text-xl tracking-wide">Filters</h2>
          <button
            type="button"
            onClick={() => setIsMobileFilterOpen(false)}
            aria-label="Close filters"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="space-y-6 p-5">
          <FilterGroup
            title="Category"
            options={categories}
            selected={selectedCategories}
            toggle={toggleCategory}
          />
          <FilterGroup
            title="Price"
            options={priceRanges}
            selected={selectedPriceRanges}
            toggle={togglePriceRange}
          />
          <FilterGroup
            title="Material"
            options={materials}
            selected={selectedMaterials}
            toggle={toggleMaterial}
          />
          <Button variant="primary" size="full" onClick={() => setIsMobileFilterOpen(false)}>
            Show {filteredProducts.length} Results
          </Button>
          {activeFilterCount > 0 && (
            <button
              type="button"
              onClick={clearFilters}
              className="w-full text-center text-xs uppercase tracking-widest text-taupe hover:text-espresso"
            >
              Clear All
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
