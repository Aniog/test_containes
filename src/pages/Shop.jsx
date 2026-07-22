import { useState, useMemo, useEffect, useRef } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, X } from 'lucide-react'
import { products } from '@/data/products'
import { ProductCard } from '@/components/ui/ProductCard'
import { Select } from '@/components/ui/Select'
import { PriceRange } from '@/components/ui/PriceRange'
import { cn } from '@/lib/utils'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-low', label: 'Price: Low to High' },
  { value: 'price-high', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
]

const categories = [
  { value: 'all', label: 'All Jewelry' },
  { value: 'earrings', label: 'Earrings' },
  { value: 'necklaces', label: 'Necklaces' },
  { value: 'huggies', label: 'Huggies' },
  { value: 'sets', label: 'Gift Sets' },
]

const materials = [
  { value: 'all', label: 'All Materials' },
  { value: '18k-gold-plated', label: '18K Gold Plated' },
  { value: 'rhodium-plated', label: 'Rhodium Plated' },
]

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const initialCategory = searchParams.get('category') || 'all'

  const [selectedCategory, setSelectedCategory] = useState(initialCategory)
  const [selectedMaterial, setSelectedMaterial] = useState('all')
  const [maxPrice, setMaxPrice] = useState(120)
  const [sortBy, setSortBy] = useState('featured')
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const headerRef = useRef(null)

  useEffect(() => {
    if (headerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, headerRef.current)
    }
  }, [])

  const filteredProducts = useMemo(() => {
    let result = products.filter((p) => {
      const categoryMatch =
        selectedCategory === 'all' || p.category === selectedCategory
      const materialMatch =
        selectedMaterial === 'all' || p.material === selectedMaterial
      const priceMatch = p.price <= maxPrice
      return categoryMatch && materialMatch && priceMatch
    })

    switch (sortBy) {
      case 'price-low':
        result = [...result].sort((a, b) => a.price - b.price)
        break
      case 'price-high':
        result = [...result].sort((a, b) => b.price - a.price)
        break
      case 'rating':
        result = [...result].sort((a, b) => b.rating - a.rating)
        break
      default:
        break
    }

    return result
  }, [selectedCategory, selectedMaterial, maxPrice, sortBy])

  const activeFiltersCount = [
    selectedCategory !== 'all',
    selectedMaterial !== 'all',
    maxPrice < 120,
  ].filter(Boolean).length

  const clearFilters = () => {
    setSelectedCategory('all')
    setSelectedMaterial('all')
    setMaxPrice(120)
    setSearchParams({})
  }

  const FilterContent = () => (
    <div className="space-y-8">
      <div>
        <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-espresso">
          Category
        </h4>
        <div className="space-y-2">
          {categories.map((cat) => (
            <label
              key={cat.value}
              className="flex cursor-pointer items-center gap-3 text-sm text-warm-gray hover:text-espresso"
            >
              <input
                type="radio"
                name="category"
                value={cat.value}
                checked={selectedCategory === cat.value}
                onChange={(e) => {
                  setSelectedCategory(e.target.value)
                  setSearchParams(e.target.value === 'all' ? {} : { category: e.target.value })
                }}
                className="h-4 w-4 accent-gold"
              />
              {cat.label}
            </label>
          ))}
        </div>
      </div>

      <div>
        <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-espresso">
          Material
        </h4>
        <div className="space-y-2">
          {materials.map((mat) => (
            <label
              key={mat.value}
              className="flex cursor-pointer items-center gap-3 text-sm text-warm-gray hover:text-espresso"
            >
              <input
                type="radio"
                name="material"
                value={mat.value}
                checked={selectedMaterial === mat.value}
                onChange={(e) => setSelectedMaterial(e.target.value)}
                className="h-4 w-4 accent-gold"
              />
              {mat.label}
            </label>
          ))}
        </div>
      </div>

      <div>
        <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-espresso">
          Max Price
        </h4>
        <PriceRange min={30} max={120} value={maxPrice} onChange={setMaxPrice} />
      </div>

      {activeFiltersCount > 0 && (
        <button
          onClick={clearFilters}
          className="text-xs font-medium uppercase tracking-widest text-gold underline-offset-4 hover:underline"
        >
          Clear all filters
        </button>
      )}
    </div>
  )

  return (
    <div className="bg-cream pb-16 pt-24 md:pb-24 md:pt-32">
      <div ref={headerRef} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-gold">
            Explore
          </p>
          <h1 className="mt-3 font-serif text-4xl font-light md:text-5xl lg:text-6xl">
            The Collection
          </h1>
        </div>

        <div className="mb-8 flex flex-col gap-4 border-y border-hairline py-4 md:flex-row md:items-center md:justify-between">
          <button
            onClick={() => setMobileFiltersOpen(true)}
            className="flex items-center gap-2 text-xs font-medium uppercase tracking-widest md:hidden"
          >
            <SlidersHorizontal className="h-4 w-4" />
            Filters {activeFiltersCount > 0 && `(${activeFiltersCount})`}
          </button>

          <div className="hidden items-center gap-6 md:flex">
            <span className="text-sm text-warm-gray">
              {filteredProducts.length} products
            </span>
            {activeFiltersCount > 0 && (
              <button
                onClick={clearFilters}
                className="text-xs font-medium uppercase tracking-widest text-gold hover:underline"
              >
                Clear filters
              </button>
            )}
          </div>

          <div className="w-full md:w-64">
            <Select
              value={sortBy}
              onChange={setSortBy}
              options={sortOptions}
              label="Sort by"
            />
          </div>
        </div>

        <div className="flex gap-12">
          {/* Desktop sidebar */}
          <aside className="hidden w-64 flex-shrink-0 md:block">
            <FilterContent />
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="flex min-h-[300px] flex-col items-center justify-center text-center">
                <p className="font-serif text-2xl">No products found</p>
                <p className="mt-2 text-sm text-warm-gray">
                  Try adjusting your filters.
                </p>
                <button
                  onClick={clearFilters}
                  className="mt-4 text-xs font-medium uppercase tracking-widest text-gold hover:underline"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-4 lg:grid-cols-3 lg:gap-6">
                {filteredProducts.map((product, index) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    index={index}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filters drawer */}
      <div
        className={cn(
          'fixed inset-0 z-50 transition-opacity md:hidden',
          mobileFiltersOpen
            ? 'pointer-events-auto opacity-100'
            : 'pointer-events-none opacity-0'
        )}
      >
        <div
          className="absolute inset-0 bg-espresso/40"
          onClick={() => setMobileFiltersOpen(false)}
        />
        <div
          className={cn(
            'absolute top-0 left-0 h-full w-[85%] max-w-sm bg-cream p-6 shadow-2xl transition-transform duration-300',
            mobileFiltersOpen ? 'translate-x-0' : '-translate-x-full'
          )}
        >
          <div className="mb-6 flex items-center justify-between">
            <h2 className="font-serif text-2xl">Filters</h2>
            <button onClick={() => setMobileFiltersOpen(false)}>
              <X className="h-6 w-6" />
            </button>
          </div>
          <FilterContent />
        </div>
      </div>
    </div>
  )
}
