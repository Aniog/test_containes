import { useState, useMemo, useEffect, useRef } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products, categories, formatPrice } from '@/data/products'
import ProductCard from '@/components/ProductCard'
import SectionHeader from '@/components/SectionHeader'

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-low', label: 'Price: Low to High' },
  { value: 'price-high', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
]

const priceRanges = [
  { id: 'under-50', label: 'Under $50', min: 0, max: 50 },
  { id: '50-75', label: '$50 — $75', min: 50, max: 75 },
  { id: '75-100', label: '$75 — $100', min: 75, max: 100 },
  { id: 'over-100', label: 'Over $100', min: 100, max: Infinity },
]

const materials = [
  { id: 'gold', label: 'Gold Plated' },
  { id: 'silver', label: 'Silver Plated' },
]

export default function Collection() {
  const [searchParams, setSearchParams] = useSearchParams()
  const initialCategory = searchParams.get('category') || ''

  const [selectedCategory, setSelectedCategory] = useState(initialCategory)
  const [selectedPrices, setSelectedPrices] = useState([])
  const [selectedMaterials, setSelectedMaterials] = useState([])
  const [sortBy, setSortBy] = useState('featured')
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const pageRef = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, pageRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [selectedCategory, selectedPrices, selectedMaterials, sortBy])

  const toggleArrayValue = (array, setArray, value) => {
    setArray((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    )
  }

  const filteredProducts = useMemo(() => {
    let result = [...products]

    if (selectedCategory) {
      result = result.filter((p) => p.category === selectedCategory)
    }

    if (selectedPrices.length > 0) {
      result = result.filter((p) =>
        selectedPrices.some(
          (rangeId) => {
            const range = priceRanges.find((r) => r.id === rangeId)
            return p.price >= range.min && p.price <= range.max
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
  }, [selectedCategory, selectedPrices, selectedMaterials, sortBy])

  const activeFiltersCount =
    (selectedCategory ? 1 : 0) + selectedPrices.length + selectedMaterials.length

  const clearFilters = () => {
    setSelectedCategory('')
    setSelectedPrices([])
    setSelectedMaterials([])
    setSearchParams({})
  }

  return (
    <div ref={pageRef} className="pt-20 md:pt-24 bg-soft-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <SectionHeader title="The Collection" subtitle="Shop All" />

        {/* Toolbar */}
        <div className="flex items-center justify-between mb-6 md:mb-8 pb-4 border-b border-hairline">
          <button
            onClick={() => setMobileFiltersOpen(true)}
            className="md:hidden flex items-center gap-2 text-xs uppercase tracking-widest"
          >
            <SlidersHorizontal size={16} />
            Filters {activeFiltersCount > 0 && `(${activeFiltersCount})`}
          </button>

          <p className="hidden md:block text-sm text-warm-gray">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
          </p>

          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none bg-transparent border border-hairline-dark text-espresso text-xs uppercase tracking-widest px-4 py-2.5 pr-10 focus:outline-none focus:border-espresso"
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <ChevronDown
              size={14}
              className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-warm-gray"
            />
          </div>
        </div>

        <div className="flex gap-10">
          {/* Sidebar Filters - Desktop */}
          <aside className="hidden md:block w-64 flex-shrink-0">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-serif text-xl text-espresso">Filter By</h3>
              {activeFiltersCount > 0 && (
                <button
                  onClick={clearFilters}
                  className="text-xs text-warm-gray hover:text-clay transition-colors"
                >
                  Clear all
                </button>
              )}
            </div>

            <div className="space-y-8">
              <div>
                <h4 className="text-xs uppercase tracking-widest text-warm-gray mb-4">Category</h4>
                <div className="space-y-2.5">
                  {categories.map((category) => (
                    <label
                      key={category.id}
                      className="flex items-center gap-3 text-sm text-espresso cursor-pointer group"
                    >
                      <div
                        className={`w-4 h-4 border flex items-center justify-center transition-colors ${
                          selectedCategory === category.id
                            ? 'bg-espresso border-espresso'
                            : 'border-hairline-dark group-hover:border-espresso'
                        }`}
                      >
                        {selectedCategory === category.id && (
                          <div className="w-1.5 h-1.5 bg-cream" />
                        )}
                      </div>
                      <input
                        type="radio"
                        name="category"
                        value={category.id}
                        checked={selectedCategory === category.id}
                        onChange={(e) => {
                          setSelectedCategory(e.target.value)
                          setSearchParams({ category: e.target.value })
                        }}
                        className="sr-only"
                      />
                      {category.name}
                    </label>
                  ))}
                  <label className="flex items-center gap-3 text-sm text-espresso cursor-pointer group">
                    <div
                      className={`w-4 h-4 border flex items-center justify-center transition-colors ${
                        selectedCategory === ''
                          ? 'bg-espresso border-espresso'
                          : 'border-hairline-dark group-hover:border-espresso'
                      }`}
                    >
                      {selectedCategory === '' && <div className="w-1.5 h-1.5 bg-cream" />}
                    </div>
                    <input
                      type="radio"
                      name="category"
                      value=""
                      checked={selectedCategory === ''}
                      onChange={() => {
                        setSelectedCategory('')
                        setSearchParams({})
                      }}
                      className="sr-only"
                    />
                    All
                  </label>
                </div>
              </div>

              <div>
                <h4 className="text-xs uppercase tracking-widest text-warm-gray mb-4">Price</h4>
                <div className="space-y-2.5">
                  {priceRanges.map((range) => (
                    <label
                      key={range.id}
                      className="flex items-center gap-3 text-sm text-espresso cursor-pointer group"
                    >
                      <div
                        className={`w-4 h-4 border flex items-center justify-center transition-colors ${
                          selectedPrices.includes(range.id)
                            ? 'bg-espresso border-espresso'
                            : 'border-hairline-dark group-hover:border-espresso'
                        }`}
                      >
                        {selectedPrices.includes(range.id) && (
                          <div className="w-1.5 h-1.5 bg-cream" />
                        )}
                      </div>
                      <input
                        type="checkbox"
                        value={range.id}
                        checked={selectedPrices.includes(range.id)}
                        onChange={() => toggleArrayValue(selectedPrices, setSelectedPrices, range.id)}
                        className="sr-only"
                      />
                      {range.label}
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs uppercase tracking-widest text-warm-gray mb-4">Material</h4>
                <div className="space-y-2.5">
                  {materials.map((material) => (
                    <label
                      key={material.id}
                      className="flex items-center gap-3 text-sm text-espresso cursor-pointer group"
                    >
                      <div
                        className={`w-4 h-4 border flex items-center justify-center transition-colors ${
                          selectedMaterials.includes(material.id)
                            ? 'bg-espresso border-espresso'
                            : 'border-hairline-dark group-hover:border-espresso'
                        }`}
                      >
                        {selectedMaterials.includes(material.id) && (
                          <div className="w-1.5 h-1.5 bg-cream" />
                        )}
                      </div>
                      <input
                        type="checkbox"
                        value={material.id}
                        checked={selectedMaterials.includes(material.id)}
                        onChange={() =>
                          toggleArrayValue(selectedMaterials, setSelectedMaterials, material.id)
                        }
                        className="sr-only"
                      />
                      {material.label}
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            <p className="md:hidden text-sm text-warm-gray mb-4">
              {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
            </p>

            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product, index) => (
                  <ProductCard key={product.id} product={product} index={index} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="font-serif text-2xl text-espresso mb-3">No pieces found</p>
                <p className="text-warm-gray mb-6">Try adjusting your filters to see more.</p>
                <button
                  onClick={clearFilters}
                  className="bg-clay text-white text-xs uppercase tracking-widest px-6 py-3 hover:bg-clay-dark transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filters Drawer */}
      {mobileFiltersOpen && (
        <>
          <div
            className="fixed inset-0 bg-espresso/30 z-50 md:hidden"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="fixed inset-y-0 left-0 w-full max-w-sm bg-soft-white z-50 md:hidden flex flex-col">
            <div className="flex items-center justify-between px-5 py-4 border-b border-hairline">
              <h3 className="font-serif text-xl text-espresso">Filters</h3>
              <button onClick={() => setMobileFiltersOpen(false)} aria-label="Close filters">
                <X size={20} />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto px-5 py-6 space-y-8">
              <div>
                <h4 className="text-xs uppercase tracking-widest text-warm-gray mb-4">Category</h4>
                <div className="space-y-2.5">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => {
                        setSelectedCategory(category.id)
                        setSearchParams({ category: category.id })
                      }}
                      className={`block w-full text-left text-sm py-1 ${
                        selectedCategory === category.id ? 'text-clay' : 'text-espresso'
                      }`}
                    >
                      {category.name}
                    </button>
                  ))}
                  <button
                    onClick={() => {
                      setSelectedCategory('')
                      setSearchParams({})
                    }}
                    className={`block w-full text-left text-sm py-1 ${
                      selectedCategory === '' ? 'text-clay' : 'text-espresso'
                    }`}
                  >
                    All
                  </button>
                </div>
              </div>

              <div>
                <h4 className="text-xs uppercase tracking-widest text-warm-gray mb-4">Price</h4>
                <div className="space-y-2.5">
                  {priceRanges.map((range) => (
                    <label key={range.id} className="flex items-center gap-3 text-sm text-espresso">
                      <input
                        type="checkbox"
                        value={range.id}
                        checked={selectedPrices.includes(range.id)}
                        onChange={() =>
                          toggleArrayValue(selectedPrices, setSelectedPrices, range.id)
                        }
                        className="w-4 h-4 accent-espresso"
                      />
                      {range.label}
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs uppercase tracking-widest text-warm-gray mb-4">Material</h4>
                <div className="space-y-2.5">
                  {materials.map((material) => (
                    <label key={material.id} className="flex items-center gap-3 text-sm text-espresso">
                      <input
                        type="checkbox"
                        value={material.id}
                        checked={selectedMaterials.includes(material.id)}
                        onChange={() =>
                          toggleArrayValue(selectedMaterials, setSelectedMaterials, material.id)
                        }
                        className="w-4 h-4 accent-espresso"
                      />
                      {material.label}
                    </label>
                  ))}
                </div>
              </div>
            </div>
            <div className="p-5 border-t border-hairline space-y-3">
              <button
                onClick={() => setMobileFiltersOpen(false)}
                className="w-full bg-clay text-white text-xs uppercase tracking-widest py-3.5 hover:bg-clay-dark transition-colors"
              >
                Show {filteredProducts.length} Results
              </button>
              {activeFiltersCount > 0 && (
                <button
                  onClick={clearFilters}
                  className="w-full border border-hairline-dark text-espresso text-xs uppercase tracking-widest py-3.5"
                >
                  Clear All
                </button>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  )
}
