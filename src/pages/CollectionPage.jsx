import React, { useState, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Filter, X } from 'lucide-react'
import { products, categories } from '../data/products'
import ProductCard from '../components/product/ProductCard'

export default function CollectionPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  const initialCategory = searchParams.get('category') || 'all'
  const [selectedCategory, setSelectedCategory] = useState(initialCategory)
  const [selectedMaterial, setSelectedMaterial] = useState('all')
  const [priceRange, setPriceRange] = useState([0, 150])
  const [sortBy, setSortBy] = useState('featured')

  const filteredProducts = useMemo(() => {
    let filtered = products

    if (selectedCategory !== 'all') {
      filtered = filtered.filter((p) => p.category === selectedCategory)
    }
    if (selectedMaterial !== 'all') {
      filtered = filtered.filter((p) => p.material === selectedMaterial)
    }
    filtered = filtered.filter(
      (p) => p.price >= priceRange[0] && p.price <= priceRange[1]
    )

    switch (sortBy) {
      case 'price-asc':
        filtered = [...filtered].sort((a, b) => a.price - b.price)
        break
      case 'price-desc':
        filtered = [...filtered].sort((a, b) => b.price - a.price)
        break
      case 'rating':
        filtered = [...filtered].sort((a, b) => b.rating - a.rating)
        break
      default:
        break
    }

    return filtered
  }, [selectedCategory, selectedMaterial, priceRange, sortBy])

  const clearFilters = () => {
    setSelectedCategory('all')
    setSelectedMaterial('all')
    setPriceRange([0, 150])
    setSearchParams({})
  }

  return (
    <div className="pt-20 md:pt-24">
      <div className="container-padding py-8 md:py-16">
        {/* Header */}
        <div className="mb-12">
          <h1 className="serif-heading text-4xl md:text-5xl mb-4">Shop All</h1>
          <p className="text-muted-foreground">
            {filteredProducts.length} piece{filteredProducts.length !== 1 ? 's' : ''}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filter Sidebar - Desktop */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-24 space-y-8">
              {/* Category Filter */}
              <div>
                <h3 className="text-sm tracking-wider uppercase mb-4">Category</h3>
                <ul className="space-y-2">
                  <li>
                    <button
                      onClick={() => setSelectedCategory('all')}
                      className={`text-sm transition-colors ${
                        selectedCategory === 'all' ? 'text-accent font-medium' : 'text-muted-foreground hover:text-foreground'
                      }`}
                    >
                      All
                    </button>
                  </li>
                  {categories.map((cat) => (
                    <li key={cat.id}>
                      <button
                        onClick={() => setSelectedCategory(cat.id)}
                        className={`text-sm transition-colors ${
                          selectedCategory === cat.id ? 'text-accent font-medium' : 'text-muted-foreground hover:text-foreground'
                        }`}
                      >
                        {cat.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Material Filter */}
              <div>
                <h3 className="text-sm tracking-wider uppercase mb-4">Material</h3>
                <ul className="space-y-2">
                  <li>
                    <button
                      onClick={() => setSelectedMaterial('all')}
                      className={`text-sm transition-colors ${
                        selectedMaterial === 'all' ? 'text-accent font-medium' : 'text-muted-foreground hover:text-foreground'
                      }`}
                    >
                      All
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => setSelectedMaterial('gold')}
                      className={`text-sm transition-colors ${
                        selectedMaterial === 'gold' ? 'text-accent font-medium' : 'text-muted-foreground hover:text-foreground'
                      }`}
                    >
                      Gold
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => setSelectedMaterial('silver')}
                      className={`text-sm transition-colors ${
                        selectedMaterial === 'silver' ? 'text-accent font-medium' : 'text-muted-foreground hover:text-foreground'
                      }`}
                    >
                      Silver
                    </button>
                  </li>
                </ul>
              </div>

              {/* Price Range */}
              <div>
                <h3 className="text-sm tracking-wider uppercase mb-4">Price</h3>
                <div className="space-y-4">
                  <input
                    type="range"
                    min="0"
                    max="150"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                    className="w-full accent-accent"
                  />
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>$0</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>
              </div>

              {/* Clear Filters */}
              <button
                onClick={clearFilters}
                className="text-sm text-muted-foreground hover:text-accent transition-colors flex items-center gap-2"
              >
                <X className="w-4 h-4" />
                Clear Filters
              </button>
            </div>
          </aside>

          {/* Mobile Filter Button */}
          <div className="lg:hidden flex items-center justify-between mb-6">
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="flex items-center gap-2 text-sm border border-border px-4 py-2 hover:border-accent transition-colors"
            >
              <Filter className="w-4 h-4" />
              Filters
            </button>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="text-sm border border-border px-4 py-2 bg-background"
            >
              <option value="featured">Featured</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
          </div>

          {/* Mobile Filter Panel */}
          {isFilterOpen && (
            <div className="lg:hidden fixed inset-0 z-50 bg-background p-6 overflow-y-auto">
              <div className="flex items-center justify-between mb-8">
                <h2 className="serif-heading text-2xl">Filters</h2>
                <button onClick={() => setIsFilterOpen(false)} aria-label="Close filters">
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="space-y-8">
                {/* Category Filter */}
                <div>
                  <h3 className="text-sm tracking-wider uppercase mb-4">Category</h3>
                  <ul className="space-y-3">
                    <li>
                      <button
                        onClick={() => setSelectedCategory('all')}
                        className={`text-sm transition-colors ${
                          selectedCategory === 'all' ? 'text-accent font-medium' : 'text-muted-foreground'
                        }`}
                      >
                        All
                      </button>
                    </li>
                    {categories.map((cat) => (
                      <li key={cat.id}>
                        <button
                          onClick={() => setSelectedCategory(cat.id)}
                          className={`text-sm transition-colors ${
                            selectedCategory === cat.id ? 'text-accent font-medium' : 'text-muted-foreground'
                          }`}
                        >
                          {cat.name}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Material Filter */}
                <div>
                  <h3 className="text-sm tracking-wider uppercase mb-4">Material</h3>
                  <ul className="space-y-3">
                    <li>
                      <button
                        onClick={() => setSelectedMaterial('all')}
                        className={`text-sm transition-colors ${
                          selectedMaterial === 'all' ? 'text-accent font-medium' : 'text-muted-foreground'
                        }`}
                      >
                        All
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => setSelectedMaterial('gold')}
                        className={`text-sm transition-colors ${
                          selectedMaterial === 'gold' ? 'text-accent font-medium' : 'text-muted-foreground'
                        }`}
                      >
                        Gold
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => setSelectedMaterial('silver')}
                        className={`text-sm transition-colors ${
                          selectedMaterial === 'silver' ? 'text-accent font-medium' : 'text-muted-foreground'
                        }`}
                      >
                        Silver
                      </button>
                    </li>
                  </ul>
                </div>

                {/* Price Range */}
                <div>
                  <h3 className="text-sm tracking-wider uppercase mb-4">Price</h3>
                  <input
                    type="range"
                    min="0"
                    max="150"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                    className="w-full accent-accent"
                  />
                  <div className="flex justify-between text-sm text-muted-foreground mt-2">
                    <span>$0</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>

                <div className="flex gap-4">
                  <button
                    onClick={clearFilters}
                    className="flex-1 btn-outline"
                  >
                    Clear All
                  </button>
                  <button
                    onClick={() => setIsFilterOpen(false)}
                    className="flex-1 btn-accent"
                  >
                    Apply
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Product Grid */}
          <div className="flex-1">
            {/* Sort Dropdown - Desktop */}
            <div className="hidden lg:flex justify-end mb-6">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="text-sm border border-border px-4 py-2 bg-background"
              >
                <option value="featured">Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-muted-foreground mb-4">No products match your filters</p>
                <button onClick={clearFilters} className="btn-outline">
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product) => (
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
