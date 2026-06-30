import { useState, useEffect, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react'
import { products, categories, priceRanges, materials } from '../data/products'
import ProductCard from '../components/home/ProductCard'

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || '')
  const [selectedPrice, setSelectedPrice] = useState('')
  const [selectedMaterial, setSelectedMaterial] = useState('')
  const [sortBy, setSortBy] = useState('featured')
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  useEffect(() => {
    const cat = searchParams.get('category')
    if (cat) setSelectedCategory(cat)
  }, [searchParams])

  const filteredProducts = useMemo(() => {
    let result = [...products]

    if (selectedCategory) {
      result = result.filter((p) => p.category === selectedCategory)
    }

    if (selectedMaterial) {
      result = result.filter((p) => p.material === selectedMaterial || p.variants.some(v => v.value === selectedMaterial))
    }

    if (selectedPrice) {
      const range = priceRanges.find((r) => r.id === selectedPrice)
      if (range) {
        result = result.filter((p) => p.price >= range.min && p.price < range.max)
      }
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
      default:
        break
    }

    return result
  }, [selectedCategory, selectedPrice, selectedMaterial, sortBy])

  const clearFilters = () => {
    setSelectedCategory('')
    setSelectedPrice('')
    setSelectedMaterial('')
    setSortBy('featured')
    setSearchParams({})
  }

  const hasFilters = selectedCategory || selectedPrice || selectedMaterial

  const FilterContent = () => (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h3 className="text-xs tracking-wider uppercase text-velmora-cream mb-3">Category</h3>
        <div className="space-y-2">
          <button
            onClick={() => { setSelectedCategory(''); setSearchParams({}) }}
            className={`block text-sm transition-colors ${!selectedCategory ? 'text-velmora-gold' : 'text-velmora-muted hover:text-velmora-cream'}`}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => { setSelectedCategory(cat.id); setSearchParams({ category: cat.id }) }}
              className={`block text-sm transition-colors ${selectedCategory === cat.id ? 'text-velmora-gold' : 'text-velmora-muted hover:text-velmora-cream'}`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h3 className="text-xs tracking-wider uppercase text-velmora-cream mb-3">Price</h3>
        <div className="space-y-2">
          <button
            onClick={() => setSelectedPrice('')}
            className={`block text-sm transition-colors ${!selectedPrice ? 'text-velmora-gold' : 'text-velmora-muted hover:text-velmora-cream'}`}
          >
            All Prices
          </button>
          {priceRanges.map((range) => (
            <button
              key={range.id}
              onClick={() => setSelectedPrice(range.id)}
              className={`block text-sm transition-colors ${selectedPrice === range.id ? 'text-velmora-gold' : 'text-velmora-muted hover:text-velmora-cream'}`}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>

      {/* Material */}
      <div>
        <h3 className="text-xs tracking-wider uppercase text-velmora-cream mb-3">Material</h3>
        <div className="space-y-2">
          <button
            onClick={() => setSelectedMaterial('')}
            className={`block text-sm transition-colors ${!selectedMaterial ? 'text-velmora-gold' : 'text-velmora-muted hover:text-velmora-cream'}`}
          >
            All Materials
          </button>
          {materials.map((mat) => (
            <button
              key={mat.id}
              onClick={() => setSelectedMaterial(mat.id)}
              className={`block text-sm transition-colors ${selectedMaterial === mat.id ? 'text-velmora-gold' : 'text-velmora-muted hover:text-velmora-cream'}`}
            >
              {mat.name}
            </button>
          ))}
        </div>
      </div>

      {hasFilters && (
        <button
          onClick={clearFilters}
          className="text-xs text-velmora-muted hover:text-velmora-gold underline transition-colors"
        >
          Clear all filters
        </button>
      )}
    </div>
  )

  return (
    <main className="pt-20 md:pt-24 min-h-screen">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <p className="text-velmora-gold text-xs tracking-widest-2xl uppercase font-sans mb-3">
          Collection
        </p>
        <div className="flex items-end justify-between">
          <h1 className="font-serif text-3xl md:text-5xl font-light text-velmora-cream tracking-wide">
            {selectedCategory ? categories.find(c => c.id === selectedCategory)?.name || 'Shop' : 'All Jewelry'}
          </h1>
          <p className="text-sm text-velmora-muted hidden sm:block">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
          </p>
        </div>
        <div className="w-full h-px bg-velmora-border/20 mt-6" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-24">
        <div className="flex gap-8 lg:gap-12">
          {/* Sidebar - Desktop */}
          <aside className="hidden lg:block w-52 flex-shrink-0">
            <FilterContent />
          </aside>

          {/* Main content */}
          <div className="flex-1">
            {/* Sort & mobile filter toggle */}
            <div className="flex items-center justify-between mb-6">
              <button
                onClick={() => setMobileFiltersOpen(true)}
                className="lg:hidden flex items-center gap-2 text-sm text-velmora-muted hover:text-velmora-cream transition-colors"
              >
                <SlidersHorizontal size={16} />
                Filters
                {hasFilters && <span className="w-1.5 h-1.5 bg-velmora-gold rounded-full" />}
              </button>

              <div className="flex items-center gap-2 ml-auto">
                <span className="text-xs text-velmora-muted hidden sm:inline">Sort by:</span>
                <div className="relative">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="appearance-none bg-velmora-surface border border-velmora-border/30 text-velmora-cream text-sm pl-3 pr-8 py-2 rounded focus:outline-none focus:border-velmora-gold/40 cursor-pointer"
                  >
                    <option value="featured">Featured</option>
                    <option value="price-asc">Price: Low to High</option>
                    <option value="price-desc">Price: High to Low</option>
                    <option value="rating">Top Rated</option>
                  </select>
                  <ChevronDown size={14} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-velmora-muted pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Active filters chips */}
            {hasFilters && (
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedCategory && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-velmora-gold/10 text-velmora-gold text-xs tracking-wider rounded border border-velmora-gold/20">
                    {categories.find(c => c.id === selectedCategory)?.name}
                    <button onClick={() => { setSelectedCategory(''); setSearchParams({}) }}>
                      <X size={12} />
                    </button>
                  </span>
                )}
                {selectedPrice && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-velmora-gold/10 text-velmora-gold text-xs tracking-wider rounded border border-velmora-gold/20">
                    {priceRanges.find(r => r.id === selectedPrice)?.label}
                    <button onClick={() => setSelectedPrice('')}>
                      <X size={12} />
                    </button>
                  </span>
                )}
                {selectedMaterial && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-velmora-gold/10 text-velmora-gold text-xs tracking-wider rounded border border-velmora-gold/20">
                    {materials.find(m => m.id === selectedMaterial)?.name}
                    <button onClick={() => setSelectedMaterial('')}>
                      <X size={12} />
                    </button>
                  </span>
                )}
              </div>
            )}

            {/* Product grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-velmora-muted mb-2">No pieces found</p>
                <p className="text-sm text-velmora-muted/70 mb-6">Try adjusting your filters</p>
                <button
                  onClick={clearFilters}
                  className="px-6 py-2.5 border border-velmora-gold text-velmora-gold text-sm tracking-wider uppercase hover:bg-velmora-gold/10 transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-[90] lg:hidden">
          <div className="absolute inset-0 bg-black/60" onClick={() => setMobileFiltersOpen(false)} />
          <div className="absolute left-0 top-0 bottom-0 w-72 bg-velmora-surface p-6 overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-serif text-lg text-velmora-cream">Filters</h2>
              <button onClick={() => setMobileFiltersOpen(false)} className="text-velmora-muted hover:text-velmora-cream">
                <X size={20} />
              </button>
            </div>
            <FilterContent />
          </div>
        </div>
      )}
    </main>
  )
}
