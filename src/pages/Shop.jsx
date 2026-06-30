import { useEffect, useMemo, useRef, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react'
import { products } from '@/data/products'
import { ProductCard } from '@/components/product/ProductCard'

const sortOptions = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Best Rated', value: 'rating' },
]

const priceRanges = [
  { label: 'Under $50', min: 0, max: 50 },
  { label: '$50 – $75', min: 50, max: 75 },
  { label: '$75 – $100', min: 75, max: 100 },
  { label: 'Over $100', min: 100, max: Infinity },
]

const categories = [
  { id: 'earrings', label: 'Earrings' },
  { id: 'necklaces', label: 'Necklaces' },
  { id: 'huggies', label: 'Huggies' },
  { id: 'sets', label: 'Gift Sets' },
]

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const initialCategory = searchParams.get('category') || ''
  const [selectedCategory, setSelectedCategory] = useState(initialCategory)
  const [selectedPriceRanges, setSelectedPriceRanges] = useState([])
  const [sort, setSort] = useState('featured')
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const containerRef = useRef(null)

  useEffect(() => {
    const category = searchParams.get('category') || ''
    setSelectedCategory(category)
  }, [searchParams])

  const filteredProducts = useMemo(() => {
    let result = [...products]

    if (selectedCategory) {
      result = result.filter((p) => p.category === selectedCategory)
    }

    if (selectedPriceRanges.length > 0) {
      result = result.filter((p) =>
        selectedPriceRanges.some(
          (rangeIndex) =>
            p.price >= priceRanges[rangeIndex].min &&
            p.price <= priceRanges[rangeIndex].max
        )
      )
    }

    if (sort === 'price-asc') {
      result.sort((a, b) => a.price - b.price)
    } else if (sort === 'price-desc') {
      result.sort((a, b) => b.price - a.price)
    } else if (sort === 'rating') {
      result.sort((a, b) => b.rating - a.rating)
    }

    return result
  }, [selectedCategory, selectedPriceRanges, sort])

  const toggleCategory = (id) => {
    const next = selectedCategory === id ? '' : id
    setSelectedCategory(next)
    if (next) {
      setSearchParams({ category: next })
    } else {
      setSearchParams({})
    }
  }

  const togglePriceRange = (index) => {
    setSelectedPriceRanges((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    )
  }

  const clearFilters = () => {
    setSelectedCategory('')
    setSelectedPriceRanges([])
    setSearchParams({})
  }

  const activeFiltersCount =
    (selectedCategory ? 1 : 0) + selectedPriceRanges.length

  const FilterContent = () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-xs uppercase tracking-widest-xl font-medium text-velmora-deep mb-4">
          Category
        </h3>
        <ul className="space-y-3">
          {categories.map((cat) => (
            <li key={cat.id}>
              <label className="flex items-center gap-3 cursor-pointer group">
                <div
                  className={`w-4 h-4 border flex items-center justify-center transition-colors ${
                    selectedCategory === cat.id
                      ? 'bg-velmora-deep border-velmora-deep'
                      : 'border-velmora-hairline group-hover:border-velmora-deep'
                  }`}
                >
                  {selectedCategory === cat.id && (
                    <X size={10} className="text-white" />
                  )}
                </div>
                <input
                  type="checkbox"
                  className="sr-only"
                  checked={selectedCategory === cat.id}
                  onChange={() => toggleCategory(cat.id)}
                />
                <span className="text-sm text-velmora-taupe group-hover:text-velmora-deep transition-colors">
                  {cat.label}
                </span>
              </label>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-xs uppercase tracking-widest-xl font-medium text-velmora-deep mb-4">
          Price
        </h3>
        <ul className="space-y-3">
          {priceRanges.map((range, index) => (
            <li key={range.label}>
              <label className="flex items-center gap-3 cursor-pointer group">
                <div
                  className={`w-4 h-4 border flex items-center justify-center transition-colors ${
                    selectedPriceRanges.includes(index)
                      ? 'bg-velmora-deep border-velmora-deep'
                      : 'border-velmora-hairline group-hover:border-velmora-deep'
                  }`}
                >
                  {selectedPriceRanges.includes(index) && (
                    <X size={10} className="text-white" />
                  )}
                </div>
                <input
                  type="checkbox"
                  className="sr-only"
                  checked={selectedPriceRanges.includes(index)}
                  onChange={() => togglePriceRange(index)}
                />
                <span className="text-sm text-velmora-taupe group-hover:text-velmora-deep transition-colors">
                  {range.label}
                </span>
              </label>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-xs uppercase tracking-widest-xl font-medium text-velmora-deep mb-4">
          Material
        </h3>
        <ul className="space-y-3">
          {['Gold-plated', 'Sterling silver'].map((material) => (
            <li key={material}>
              <span className="text-sm text-velmora-taupe">{material}</span>
            </li>
          ))}
        </ul>
      </div>

      {activeFiltersCount > 0 && (
        <button
          onClick={clearFilters}
          className="text-xs uppercase tracking-widest-xl text-velmora-gold underline hover:text-velmora-gold-dark"
        >
          Clear Filters
        </button>
      )}
    </div>
  )

  return (
    <div ref={containerRef} className="bg-velmora-cream pt-24 md:pt-32 pb-16 md:pb-24 min-h-screen">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="text-center mb-10 md:mb-14">
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-velmora-deep">
            The Collection
          </h1>
          <p className="mt-4 text-velmora-taupe max-w-lg mx-auto">
            Discover demi-fine pieces designed to be worn, layered, and loved.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Desktop sidebar */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <FilterContent />
          </aside>

          {/* Mobile filter toggle */}
          <div className="lg:hidden flex items-center justify-between mb-4">
            <button
              onClick={() => setMobileFiltersOpen(true)}
              className="flex items-center gap-2 text-xs uppercase tracking-widest-xl font-medium text-velmora-deep"
            >
              <SlidersHorizontal size={16} />
              Filters
              {activeFiltersCount > 0 && (
                <span className="w-5 h-5 bg-velmora-deep text-white text-[10px] rounded-full flex items-center justify-center">
                  {activeFiltersCount}
                </span>
              )}
            </button>

            <div className="relative">
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="appearance-none bg-transparent border border-velmora-hairline pl-4 pr-10 py-2 text-xs uppercase tracking-widest-xl text-velmora-deep focus:outline-none focus:border-velmora-gold"
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <ChevronDown
                size={14}
                className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-velmora-taupe"
              />
            </div>
          </div>

          {/* Product grid */}
          <div className="flex-1">
            <div className="hidden lg:flex items-center justify-between mb-6">
              <p className="text-sm text-velmora-taupe">
                {filteredProducts.length} product
                {filteredProducts.length !== 1 ? 's' : ''}
              </p>
              <div className="relative">
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="appearance-none bg-transparent border border-velmora-hairline pl-4 pr-10 py-2 text-xs uppercase tracking-widest-xl text-velmora-deep focus:outline-none focus:border-velmora-gold"
                >
                  {sortOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                <ChevronDown
                  size={14}
                  className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-velmora-taupe"
                />
              </div>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-2xl text-velmora-deep">
                  No products match your filters.
                </p>
                <button
                  onClick={clearFilters}
                  className="mt-4 text-velmora-gold underline text-sm"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.5, delay: index * 0.06 }}
                  >
                    <ProductCard
                      product={product}
                      containerRef={containerRef}
                    />
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filters drawer */}
      {mobileFiltersOpen && (
        <>
          <div
            className="fixed inset-0 bg-velmora-deep/40 z-40"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="fixed inset-y-0 left-0 w-[85%] max-w-sm bg-velmora-cream z-50 p-6 overflow-y-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-serif text-2xl">Filters</h2>
              <button onClick={() => setMobileFiltersOpen(false)}>
                <X size={24} />
              </button>
            </div>
            <FilterContent />
          </div>
        </>
      )}
    </div>
  )
}
