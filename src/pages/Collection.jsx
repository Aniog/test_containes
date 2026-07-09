import { useState, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react'
import ProductCard from '../components/ProductCard'
import { products, categories } from '../data/products'
import { cn } from '../lib/utils'

const priceRanges = [
  { label: 'Under $40', min: 0, max: 40 },
  { label: '$40 – $70', min: 40, max: 70 },
  { label: '$70 – $100', min: 70, max: 100 },
  { label: 'Over $100', min: 100, max: 999 },
]

const sortOptions = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Best Rated', value: 'rating' },
  { label: 'Most Reviewed', value: 'reviews' },
]

export default function Collection() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [showFilters, setShowFilters] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || '')
  const [selectedPrice, setSelectedPrice] = useState(null)
  const [sortBy, setSortBy] = useState('featured')

  const filteredProducts = useMemo(() => {
    let result = [...products]

    if (selectedCategory) {
      result = result.filter(p => p.category === selectedCategory)
    }

    if (selectedPrice) {
      result = result.filter(p => p.price >= selectedPrice.min && p.price <= selectedPrice.max)
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
      case 'reviews':
        result.sort((a, b) => b.reviewCount - a.reviewCount)
        break
      default:
        break
    }

    return result
  }, [selectedCategory, selectedPrice, sortBy])

  const clearFilters = () => {
    setSelectedCategory('')
    setSelectedPrice(null)
    setSearchParams({})
  }

  const hasActiveFilters = selectedCategory || selectedPrice

  return (
    <div className="pt-20 md:pt-24">
      {/* Header */}
      <section className="section-padding pb-8 md:pb-12">
        <div className="container-wide text-center">
          <h1 className="font-serif text-4xl md:text-5xl tracking-wide uppercase mb-3">
            Our Collection
          </h1>
          <p className="text-muted-foreground text-sm max-w-md mx-auto">
            Discover our curated selection of demi-fine gold jewelry, designed to be worn and loved every day.
          </p>
        </div>
      </section>

      {/* Controls */}
      <div className="container-wide px-4 md:px-8 mb-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={cn(
                'flex items-center gap-2 text-sm font-medium tracking-nav uppercase transition-colors',
                showFilters ? 'text-accent' : 'text-muted-foreground hover:text-foreground'
              )}
            >
              <SlidersHorizontal size={16} />
              Filters
              {hasActiveFilters && (
                <span className="w-1.5 h-1.5 bg-accent rounded-full" />
              )}
            </button>

            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="text-xs text-muted-foreground hover:text-foreground underline underline-offset-2 transition-colors"
              >
                Clear all
              </button>
            )}
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs text-muted-foreground hidden sm:inline">
              {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
            </span>
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-transparent text-sm text-muted-foreground hover:text-foreground cursor-pointer pr-6 focus:outline-none transition-colors"
              >
                {sortOptions.map(opt => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
              <ChevronDown size={14} className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-muted-foreground" />
            </div>
          </div>
        </div>
      </div>

      <div className="container-wide px-4 md:px-8 pb-16 md:pb-24">
        <div className="flex gap-8">
          {/* Sidebar Filters */}
          <aside
            className={cn(
              'w-56 flex-shrink-0 transition-all duration-300',
              showFilters ? 'block' : 'hidden lg:block'
            )}
          >
            {/* Category filter */}
            <div className="mb-8">
              <h3 className="font-serif text-sm tracking-product uppercase mb-4">Category</h3>
              <div className="space-y-2">
                <button
                  onClick={() => { setSelectedCategory(''); setSearchParams({}) }}
                  className={cn(
                    'block text-sm transition-colors',
                    !selectedCategory ? 'text-accent font-medium' : 'text-muted-foreground hover:text-foreground'
                  )}
                >
                  All Jewelry
                </button>
                {categories.map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => {
                      setSelectedCategory(cat.id)
                      setSearchParams({ category: cat.id })
                    }}
                    className={cn(
                      'block text-sm transition-colors',
                      selectedCategory === cat.id ? 'text-accent font-medium' : 'text-muted-foreground hover:text-foreground'
                    )}
                  >
                    {cat.name}
                    <span className="text-muted-foreground/50 ml-1">({cat.count})</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Price filter */}
            <div className="mb-8">
              <h3 className="font-serif text-sm tracking-product uppercase mb-4">Price</h3>
              <div className="space-y-2">
                <button
                  onClick={() => setSelectedPrice(null)}
                  className={cn(
                    'block text-sm transition-colors',
                    !selectedPrice ? 'text-accent font-medium' : 'text-muted-foreground hover:text-foreground'
                  )}
                >
                  All Prices
                </button>
                {priceRanges.map(range => (
                  <button
                    key={range.label}
                    onClick={() => setSelectedPrice(range)}
                    className={cn(
                      'block text-sm transition-colors',
                      selectedPrice?.label === range.label ? 'text-accent font-medium' : 'text-muted-foreground hover:text-foreground'
                    )}
                  >
                    {range.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Material filter */}
            <div>
              <h3 className="font-serif text-sm tracking-product uppercase mb-4">Material</h3>
              <div className="space-y-2">
                {['18K Gold Plated', 'Sterling Silver', 'Stainless Steel'].map(mat => (
                  <label key={mat} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground cursor-pointer transition-colors">
                    <input type="checkbox" className="rounded border-border accent-accent" />
                    {mat}
                  </label>
                ))}
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            {/* Active filter chips */}
            {hasActiveFilters && (
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedCategory && (
                  <span className="inline-flex items-center gap-1.5 text-xs bg-muted text-foreground px-3 py-1.5 rounded-sm">
                    {categories.find(c => c.id === selectedCategory)?.name}
                    <button onClick={() => { setSelectedCategory(''); setSearchParams({}) }}>
                      <X size={12} />
                    </button>
                  </span>
                )}
                {selectedPrice && (
                  <span className="inline-flex items-center gap-1.5 text-xs bg-muted text-foreground px-3 py-1.5 rounded-sm">
                    {selectedPrice.label}
                    <button onClick={() => setSelectedPrice(null)}>
                      <X size={12} />
                    </button>
                  </span>
                )}
              </div>
            )}

            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-foreground mb-2">No pieces found</p>
                <p className="text-sm text-muted-foreground mb-6">Try adjusting your filters</p>
                <button onClick={clearFilters} className="btn-outline">
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
