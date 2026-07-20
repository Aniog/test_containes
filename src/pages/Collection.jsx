import { useState, useMemo } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { Star, ShoppingBag, SlidersHorizontal, X, ChevronDown } from 'lucide-react'
import { products } from '../data/products'
import { useCart } from '../hooks/useCart'

const categories = ['All', 'earrings', 'necklaces', 'huggies', 'sets']
const priceRanges = [
  { label: 'Under $40', min: 0, max: 40 },
  { label: '$40 – $60', min: 40, max: 60 },
  { label: '$60 – $80', min: 60, max: 80 },
  { label: '$80+', min: 80, max: Infinity },
]
const materials = ['All', 'gold', 'silver']
const sortOptions = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Newest', value: 'newest' },
  { label: 'Best Rated', value: 'rating' },
]

export default function Collection() {
  const [searchParams, setSearchParams] = useSearchParams()
  const { addItem } = useCart()

  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'All')
  const [selectedPrice, setSelectedPrice] = useState('All')
  const [selectedMaterial, setSelectedMaterial] = useState('All')
  const [sortBy, setSortBy] = useState('featured')
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const [sortOpen, setSortOpen] = useState(false)

  const filteredProducts = useMemo(() => {
    let result = [...products]

    if (selectedCategory !== 'All') {
      result = result.filter(p => p.category === selectedCategory)
    }
    if (selectedPrice !== 'All') {
      const range = priceRanges.find(r => r.label === selectedPrice)
      if (range) {
        result = result.filter(p => p.price >= range.min && p.price < range.max)
      }
    }
    if (selectedMaterial !== 'All') {
      result = result.filter(p => p.material === selectedMaterial)
    }

    switch (sortBy) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price)
        break
      case 'price-desc':
        result.sort((a, b) => b.price - a.price)
        break
      case 'newest':
        result.sort((a, b) => (a.isNew === b.isNew ? 0 : a.isNew ? -1 : 1))
        break
      case 'rating':
        result.sort((a, b) => b.rating - a.rating)
        break
    }

    return result
  }, [selectedCategory, selectedPrice, selectedMaterial, sortBy])

  const activeFilterCount = [selectedCategory, selectedPrice, selectedMaterial]
    .filter(f => f !== 'All').length

  const resetFilters = () => {
    setSelectedCategory('All')
    setSelectedPrice('All')
    setSelectedMaterial('All')
    setSortBy('featured')
  }

  const currentSortLabel = sortOptions.find(o => o.value === sortBy)?.label || 'Featured'

  return (
    <section className="section-padding bg-cream min-h-screen">
      <div className="container-page">
        {/* Header */}
        <div className="mb-8">
          <h1 className="heading-lg mb-2">All Jewelry</h1>
          <p className="text-muted text-sm">{filteredProducts.length} styles</p>
        </div>

        {/* Mobile filter bar */}
        <div className="flex items-center justify-between lg:hidden mb-6">
          <button
            onClick={() => setMobileFiltersOpen(true)}
            className="flex items-center gap-2 text-sm font-medium px-4 py-2 border border-border rounded-full"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters {activeFilterCount > 0 && `(${activeFilterCount})`}
          </button>

          {/* Sort dropdown mobile */}
          <div className="relative">
            <button
              onClick={() => setSortOpen(!sortOpen)}
              className="flex items-center gap-2 text-sm px-4 py-2 border border-border rounded-full"
            >
              {currentSortLabel}
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${sortOpen ? 'rotate-180' : ''}`} />
            </button>
            {sortOpen && (
              <div className="absolute right-0 top-full mt-2 w-48 bg-white border border-border rounded-sm shadow-lg z-20">
                {sortOptions.map(opt => (
                  <button
                    key={opt.value}
                    onClick={() => { setSortBy(opt.value); setSortOpen(false) }}
                    className={`w-full text-left px-4 py-2.5 text-sm transition-colors hover:bg-warm-50 ${
                      sortBy === opt.value ? 'text-gold font-medium' : 'text-muted'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="flex gap-10">
          {/* Desktop sidebar */}
          <aside className="hidden lg:block w-56 flex-shrink-0">
            <div className="sticky top-24 space-y-8">
              {/* Category */}
              <div>
                <h3 className="text-xs tracking-widest uppercase text-muted mb-4">Category</h3>
                <div className="space-y-2">
                  {categories.map(cat => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`block w-full text-left text-sm py-1.5 transition-colors ${
                        selectedCategory === cat
                          ? 'text-gold font-medium'
                          : 'text-muted hover:text-ink'
                      }`}
                    >
                      {cat === 'All' ? 'All Categories' : cat.charAt(0).toUpperCase() + cat.slice(1)}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price */}
              <div>
                <h3 className="text-xs tracking-widest uppercase text-muted mb-4">Price</h3>
                <div className="space-y-2">
                  {priceRanges.map(range => (
                    <button
                      key={range.label}
                      onClick={() => setSelectedPrice(selectedPrice === range.label ? 'All' : range.label)}
                      className={`block w-full text-left text-sm py-1.5 transition-colors ${
                        selectedPrice === range.label
                          ? 'text-gold font-medium'
                          : 'text-muted hover:text-ink'
                      }`}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Material */}
              <div>
                <h3 className="text-xs tracking-widest uppercase text-muted mb-4">Material</h3>
                <div className="space-y-2">
                  {materials.map(mat => (
                    <button
                      key={mat}
                      onClick={() => setSelectedMaterial(selectedMaterial === mat ? 'All' : mat)}
                      className={`block w-full text-left text-sm py-1.5 transition-colors ${
                        selectedMaterial === mat
                          ? 'text-gold font-medium'
                          : 'text-muted hover:text-ink'
                      }`}
                    >
                      {mat === 'gold' ? '18K Gold Plated' : mat === 'All' ? 'All Materials' : 'Silver Tone'}
                    </button>
                  ))}
                </div>
              </div>

              {/* Sort desktop */}
              <div>
                <h3 className="text-xs tracking-widest uppercase text-muted mb-4">Sort By</h3>
                <div className="space-y-2">
                  {sortOptions.map(opt => (
                    <button
                      key={opt.value}
                      onClick={() => setSortBy(opt.value)}
                      className={`block w-full text-left text-sm py-1.5 transition-colors ${
                        sortBy === opt.value
                          ? 'text-gold font-medium'
                          : 'text-muted hover:text-ink'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Reset */}
              {activeFilterCount > 0 && (
                <button
                  onClick={resetFilters}
                  className="text-sm text-gold hover:text-gold-dark transition-colors"
                >
                  Clear all filters
                </button>
              )}
            </div>
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-muted mb-4">No products match your filters.</p>
                <button onClick={resetFilters} className="btn-outline">Clear Filters</button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map(product => (
                  <div key={product.id} className="group">
                    <Link to={`/product/${product.id}`} className="block aspect-square bg-warm-100 rounded-sm overflow-hidden relative">
                      <img
                        src={product.images[0]}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      {product.isNew && (
                        <span className="absolute top-3 left-3 bg-gold text-white text-[10px] px-2 py-0.5 rounded-full uppercase tracking-wider font-medium">
                          New
                        </span>
                      )}
                      <button
                        onClick={(e) => {
                          e.preventDefault()
                          addItem(product)
                        }}
                        className="absolute bottom-3 right-3 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-sm md:hidden"
                        aria-label={`Quick add ${product.name}`}
                      >
                        <ShoppingBag className="w-4 h-4" />
                      </button>
                    </Link>
                    <Link to={`/product/${product.id}`} className="block pt-3">
                      <h3 className="product-name text-xs md:text-sm">{product.name}</h3>
                      <div className="flex items-center gap-1 mt-1">
                        <Star className="w-3 h-3 text-gold fill-gold" />
                        <span className="text-xs text-muted">{product.rating}</span>
                      </div>
                      <p className="text-sm md:text-base mt-1">${product.price}</p>
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="cart-overlay" onClick={() => setMobileFiltersOpen(false)} />
          <div className="fixed right-0 top-0 h-full w-[300px] bg-cream shadow-2xl p-6 overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-serif text-lg">Filters</h3>
              <button onClick={() => setMobileFiltersOpen(false)} className="btn-ghost p-2">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Category */}
            <div className="mb-6">
              <h4 className="text-xs tracking-widest uppercase text-muted mb-3">Category</h4>
              <div className="space-y-2">
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`block w-full text-left text-sm py-1.5 transition-colors ${
                      selectedCategory === cat ? 'text-gold font-medium' : 'text-muted hover:text-ink'
                    }`}
                  >
                    {cat === 'All' ? 'All Categories' : cat.charAt(0).toUpperCase() + cat.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* Price */}
            <div className="mb-6">
              <h4 className="text-xs tracking-widest uppercase text-muted mb-3">Price</h4>
              <div className="space-y-2">
                {priceRanges.map(range => (
                  <button
                    key={range.label}
                    onClick={() => setSelectedPrice(selectedPrice === range.label ? 'All' : range.label)}
                    className={`block w-full text-left text-sm py-1.5 transition-colors ${
                      selectedPrice === range.label ? 'text-gold font-medium' : 'text-muted hover:text-ink'
                    }`}
                  >
                    {range.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Material */}
            <div className="mb-6">
              <h4 className="text-xs tracking-widest uppercase text-muted mb-3">Material</h4>
              <div className="space-y-2">
                {materials.map(mat => (
                  <button
                    key={mat}
                    onClick={() => setSelectedMaterial(selectedMaterial === mat ? 'All' : mat)}
                    className={`block w-full text-left text-sm py-1.5 transition-colors ${
                      selectedMaterial === mat ? 'text-gold font-medium' : 'text-muted hover:text-ink'
                    }`}
                  >
                    {mat === 'gold' ? '18K Gold Plated' : mat === 'All' ? 'All Materials' : 'Silver Tone'}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={() => { resetFilters(); setMobileFiltersOpen(false) }}
              className="btn-outline w-full mt-4"
            >
              Clear All Filters
            </button>
          </div>
        </div>
      )}
    </section>
  )
}