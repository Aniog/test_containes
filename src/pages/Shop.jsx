import { useState, useEffect, useRef, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import ProductCard from '@/components/product/ProductCard'
import { products, categories } from '@/data/products'

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'all')
  const [priceRange, setPriceRange] = useState('all')
  const [sortBy, setSortBy] = useState('featured')
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false)

  const containerRef = useRef(null)

  useEffect(() => {
    const cat = searchParams.get('category')
    if (cat) setSelectedCategory(cat)
  }, [searchParams])

  useEffect(() => {
    if (containerRef.current) {
      const frameId = requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, containerRef.current)
      })
      return () => cancelAnimationFrame(frameId)
    }
  }, [selectedCategory, priceRange, sortBy])

  const filteredProducts = useMemo(() => {
    let result = [...products]

    // Category filter
    if (selectedCategory !== 'all') {
      result = result.filter((p) => p.category === selectedCategory)
    }

    // Price filter
    if (priceRange === 'under50') {
      result = result.filter((p) => p.price < 5000)
    } else if (priceRange === '50to80') {
      result = result.filter((p) => p.price >= 5000 && p.price < 8000)
    } else if (priceRange === 'over80') {
      result = result.filter((p) => p.price >= 8000)
    }

    // Sort
    if (sortBy === 'price-asc') {
      result.sort((a, b) => a.price - b.price)
    } else if (sortBy === 'price-desc') {
      result.sort((a, b) => b.price - a.price)
    } else if (sortBy === 'newest') {
      result.sort((a, b) => (b.new ? 1 : 0) - (a.new ? 1 : 0))
    } else if (sortBy === 'rating') {
      result.sort((a, b) => b.rating - a.rating)
    }

    return result
  }, [selectedCategory, priceRange, sortBy])

  const handleCategoryChange = (cat) => {
    setSelectedCategory(cat)
    if (cat === 'all') {
      searchParams.delete('category')
    } else {
      searchParams.set('category', cat)
    }
    setSearchParams(searchParams)
  }

  const priceOptions = [
    { value: 'all', label: 'All Prices' },
    { value: 'under50', label: 'Under $50' },
    { value: '50to80', label: '$50 — $80' },
    { value: 'over80', label: 'Over $80' },
  ]

  const sortOptions = [
    { value: 'featured', label: 'Featured' },
    { value: 'newest', label: 'Newest' },
    { value: 'price-asc', label: 'Price: Low to High' },
    { value: 'price-desc', label: 'Price: High to Low' },
    { value: 'rating', label: 'Top Rated' },
  ]

  const FilterPanel = ({ mobile = false }) => (
    <div className={mobile ? '' : 'hidden lg:block'}>
      {/* Category */}
      <div className="mb-8">
        <h3 className="text-[11px] font-semibold tracking-widest-2xl uppercase text-stone-900 mb-4">
          Category
        </h3>
        <div className="space-y-1">
          <button
            onClick={() => handleCategoryChange('all')}
            className={`block w-full text-left py-2 text-sm transition-colors ${
              selectedCategory === 'all' ? 'text-gold-dark font-medium' : 'text-stone-500 hover:text-stone-800'
            }`}
          >
            All Jewelry
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleCategoryChange(cat.id)}
              className={`block w-full text-left py-2 text-sm transition-colors ${
                selectedCategory === cat.id ? 'text-gold-dark font-medium' : 'text-stone-500 hover:text-stone-800'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div className="mb-8">
        <h3 className="text-[11px] font-semibold tracking-widest-2xl uppercase text-stone-900 mb-4">
          Price
        </h3>
        <div className="space-y-1">
          {priceOptions.map((opt) => (
            <button
              key={opt.value}
              onClick={() => setPriceRange(opt.value)}
              className={`block w-full text-left py-2 text-sm transition-colors ${
                priceRange === opt.value ? 'text-gold-dark font-medium' : 'text-stone-500 hover:text-stone-800'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {/* Material */}
      <div>
        <h3 className="text-[11px] font-semibold tracking-widest-2xl uppercase text-stone-900 mb-4">
          Material
        </h3>
        <div className="space-y-1">
          <span className="block py-2 text-sm text-gold-dark font-medium">18K Gold Plated</span>
          <span className="block py-2 text-sm text-stone-400">Silver (Coming Soon)</span>
        </div>
      </div>
    </div>
  )

  return (
    <div ref={containerRef} className="pt-20 sm:pt-24">
      {/* Header */}
      <div className="bg-ivory-200 border-b border-stone-200/60 py-10 sm:py-14">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 text-center">
          <p className="text-[11px] font-medium tracking-widest-2xl uppercase text-gold-dark mb-3">
            Collection
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-stone-900">
            {selectedCategory === 'all'
              ? 'All Jewelry'
              : categories.find((c) => c.id === selectedCategory)?.name || 'Shop'}
          </h1>
          <p className="text-sm text-stone-500 mt-3 max-w-md mx-auto">
            Discover demi-fine pieces crafted to be treasured. Every day, every occasion.
          </p>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 py-8 sm:py-12">
        <div className="flex gap-10 lg:gap-14">
          {/* Sidebar - Desktop */}
          <aside className="w-52 flex-shrink-0 hidden lg:block">
            <FilterPanel />
          </aside>

          {/* Main content */}
          <div className="flex-1 min-w-0">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-6 sm:mb-8">
              <p className="text-sm text-stone-500">
                {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
              </p>

              <div className="flex items-center gap-3">
                {/* Mobile filter button */}
                <button
                  onClick={() => setMobileFilterOpen(true)}
                  className="lg:hidden flex items-center gap-2 px-3 py-2 border border-stone-200 rounded-sm text-sm text-stone-600 hover:border-stone-400 transition-colors"
                >
                  <SlidersHorizontal size={14} />
                  Filter
                </button>

                {/* Sort dropdown */}
                <div className="relative">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="appearance-none bg-white border border-stone-200 rounded-sm px-4 py-2 pr-8 text-sm text-stone-700 focus:outline-none focus:border-gold cursor-pointer"
                  >
                    {sortOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                  <ChevronDown size={14} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-stone-400 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Active filters */}
            {(selectedCategory !== 'all' || priceRange !== 'all') && (
              <div className="flex flex-wrap items-center gap-2 mb-6">
                {selectedCategory !== 'all' && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-stone-100 text-xs text-stone-700 rounded-sm">
                    {categories.find((c) => c.id === selectedCategory)?.name}
                    <button onClick={() => handleCategoryChange('all')}>
                      <X size={12} />
                    </button>
                  </span>
                )}
                {priceRange !== 'all' && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-stone-100 text-xs text-stone-700 rounded-sm">
                    {priceOptions.find((p) => p.value === priceRange)?.label}
                    <button onClick={() => setPriceRange('all')}>
                      <X size={12} />
                    </button>
                  </span>
                )}
              </div>
            )}

            {/* Product grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-8 sm:gap-x-6 sm:gap-y-12">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-stone-600 mb-2">No products found</p>
                <p className="text-sm text-stone-400">Try adjusting your filters.</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      {mobileFilterOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/40 z-[60] lg:hidden"
            onClick={() => setMobileFilterOpen(false)}
          />
          <div className="fixed top-0 left-0 h-full w-80 max-w-[85vw] bg-ivory-100 z-[70] shadow-elevated overflow-y-auto lg:hidden">
            <div className="flex items-center justify-between px-6 py-5 border-b border-stone-200">
              <h2 className="font-serif text-lg text-stone-900">Filters</h2>
              <button
                onClick={() => setMobileFilterOpen(false)}
                className="p-2 text-stone-500 hover:text-stone-800"
              >
                <X size={20} />
              </button>
            </div>
            <div className="px-6 py-6">
              <FilterPanel mobile />
            </div>
          </div>
        </>
      )}
    </div>
  )
}
