import { useState, useEffect, useRef, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products, categories } from '@/data/products'
import ProductCard from '@/components/products/ProductCard'

const priceRanges = [
  { label: 'Under $50', min: 0, max: 50 },
  { label: '$50 - $75', min: 50, max: 75 },
  { label: '$75 - $100', min: 75, max: 100 },
  { label: 'Over $100', min: 100, max: Infinity },
]

const sortOptions = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Best Rating', value: 'rating' },
  { label: 'Most Reviewed', value: 'reviews' },
]

export default function CollectionPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || '')
  const [selectedPriceRange, setSelectedPriceRange] = useState(null)
  const [sortBy, setSortBy] = useState('featured')
  const containerRef = useRef(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current)
    }
  }, [selectedCategory, selectedPriceRange, sortBy])

  useEffect(() => {
    const category = searchParams.get('category')
    if (category) {
      setSelectedCategory(category)
    }
  }, [searchParams])

  const filteredProducts = useMemo(() => {
    let filtered = [...products]

    if (selectedCategory) {
      filtered = filtered.filter((p) => p.category === selectedCategory)
    }

    if (selectedPriceRange) {
      filtered = filtered.filter(
        (p) => p.price >= selectedPriceRange.min && p.price < selectedPriceRange.max
      )
    }

    switch (sortBy) {
      case 'price-asc':
        filtered.sort((a, b) => a.price - b.price)
        break
      case 'price-desc':
        filtered.sort((a, b) => b.price - a.price)
        break
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating)
        break
      case 'reviews':
        filtered.sort((a, b) => b.reviewCount - a.reviewCount)
        break
      default:
        break
    }

    return filtered
  }, [selectedCategory, selectedPriceRange, sortBy])

  const handleCategoryChange = (category) => {
    const newCategory = selectedCategory === category ? '' : category
    setSelectedCategory(newCategory)
    if (newCategory) {
      setSearchParams({ category: newCategory })
    } else {
      setSearchParams({})
    }
  }

  const clearFilters = () => {
    setSelectedCategory('')
    setSelectedPriceRange(null)
    setSortBy('featured')
    setSearchParams({})
  }

  const hasActiveFilters = selectedCategory || selectedPriceRange

  const FilterSidebar = () => (
    <div className="space-y-8">
      {/* Category filter */}
      <div>
        <h3 className="caption text-charcoal mb-4">Category</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryChange(category.id)}
              className={`w-full text-left py-2 px-3 text-sm transition-all duration-200 ${
                selectedCategory === category.id
                  ? 'bg-charcoal text-cream-100'
                  : 'text-charcoal-500 hover:bg-cream-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Price filter */}
      <div>
        <h3 className="caption text-charcoal mb-4">Price</h3>
        <div className="space-y-2">
          {priceRanges.map((range) => (
            <button
              key={range.label}
              onClick={() => setSelectedPriceRange(selectedPriceRange === range ? null : range)}
              className={`w-full text-left py-2 px-3 text-sm transition-all duration-200 ${
                selectedPriceRange === range
                  ? 'bg-charcoal text-cream-100'
                  : 'text-charcoal-500 hover:bg-cream-200'
              }`}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>

      {/* Material note */}
      <div className="pt-6 border-t border-charcoal-100/50">
        <h3 className="caption text-charcoal mb-3">Material</h3>
        <p className="text-sm text-charcoal-400">All pieces are 18K gold plated</p>
      </div>
    </div>
  )

  return (
    <main ref={containerRef} className="pt-20 bg-cream-100 min-h-screen">
      {/* Page header */}
      <section className="py-12 md:py-16 text-center section-padding">
        <p className="caption text-gold mb-3 tracking-mega-wide">Our Collection</p>
        <h1 className="heading-lg text-charcoal">
          {selectedCategory
            ? categories.find((c) => c.id === selectedCategory)?.name || 'Collection'
            : 'All Jewelry'}
        </h1>
        <div className="divider-gold mx-auto mt-6" />
        <p className="text-charcoal-400 body-sm mt-4 max-w-md mx-auto">
          {selectedCategory
            ? categories.find((c) => c.id === selectedCategory)?.description
            : 'Discover our curated collection of premium demi-fine jewelry.'}
        </p>
      </section>

      <section className="max-w-[1440px] mx-auto section-padding pb-20 md:pb-28">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 pb-6 border-b border-charcoal-100/50">
          <div className="flex items-center gap-4">
            {/* Mobile filter toggle */}
            <button
              onClick={() => setMobileFiltersOpen(true)}
              className="lg:hidden flex items-center gap-2 text-sm text-charcoal-500 hover:text-charcoal transition-colors"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
            </button>

            {/* Active filters */}
            {hasActiveFilters && (
              <div className="flex items-center gap-2">
                {selectedCategory && (
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-cream-200 text-xs text-charcoal">
                    {categories.find((c) => c.id === selectedCategory)?.name}
                    <button onClick={() => handleCategoryChange(selectedCategory)}>
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}
                {selectedPriceRange && (
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-cream-200 text-xs text-charcoal">
                    {selectedPriceRange.label}
                    <button onClick={() => setSelectedPriceRange(null)}>
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}
                <button
                  onClick={clearFilters}
                  className="text-xs text-charcoal-400 underline hover:text-charcoal transition-colors"
                >
                  Clear all
                </button>
              </div>
            )}
          </div>

          <div className="flex items-center gap-4">
            <span className="text-sm text-charcoal-400 hidden sm:block">
              {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
            </span>

            {/* Sort dropdown */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-transparent pr-8 pl-3 py-2 text-sm text-charcoal border border-charcoal-200 focus:outline-none focus:border-charcoal-400 cursor-pointer"
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-charcoal-400 pointer-events-none" />
            </div>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Desktop sidebar */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <FilterSidebar />
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-charcoal mb-2">No products found</p>
                <p className="text-charcoal-400 text-sm mb-6">
                  Try adjusting your filters to find what you&apos;re looking for.
                </p>
                <button onClick={clearFilters} className="btn-outline text-xs">
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Mobile filter drawer */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-charcoal/50 backdrop-blur-sm"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="absolute inset-y-0 left-0 w-[300px] max-w-[85vw] bg-cream-100 shadow-luxury-xl animate-slide-in-right">
            <div className="flex items-center justify-between p-6 border-b border-charcoal-200/30">
              <span className="font-serif text-xl text-charcoal">Filters</span>
              <button
                onClick={() => setMobileFiltersOpen(false)}
                className="text-charcoal hover:opacity-70 transition-opacity"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 overflow-y-auto h-[calc(100%-80px)]">
              <FilterSidebar />
            </div>
          </div>
        </div>
      )}
    </main>
  )
}
