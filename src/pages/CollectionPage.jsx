import { useState, useEffect, useRef } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Filter, SlidersHorizontal, ChevronDown } from 'lucide-react'
import { products, categories } from '@/data/products'
import ProductCard from '@/components/ui/ProductCard'

export default function CollectionPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [filterOpen, setFilterOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'all')
  const [selectedMaterial, setSelectedMaterial] = useState('all')
  const [priceRange, setPriceRange] = useState([0, 150])
  const [sortBy, setSortBy] = useState('featured')
  const containerRef = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      // Image loading would happen here
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [selectedCategory, sortBy])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const filteredProducts = products
    .filter(p => selectedCategory === 'all' || p.category === selectedCategory)
    .filter(p => selectedMaterial === 'all' || p.material.includes(selectedMaterial))
    .filter(p => p.price >= priceRange[0] && p.price <= priceRange[1])
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-asc': return a.price - b.price
        case 'price-desc': return b.price - a.price
        case 'rating': return b.rating - a.rating
        case 'newest': return b.reviews - a.reviews
        default: return 0
      }
    })

  return (
    <div ref={containerRef} className="min-h-screen bg-background">
      {/* Header */}
      <div className="pt-24 md:pt-32 pb-8 md:pb-12 bg-[#F5F0EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="serif-heading text-3xl md:text-5xl text-center mb-3">
            {selectedCategory === 'all' ? 'All Jewelry' : selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)}
          </h1>
          <p className="text-muted-foreground text-center text-sm">
            {filteredProducts.length} piece{filteredProducts.length !== 1 ? 's' : ''}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Sidebar - Desktop */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-28 space-y-8">
              {/* Category filter */}
              <div>
                <h3 className="text-xs uppercase tracking-widest text-foreground mb-4">Category</h3>
                <div className="space-y-2">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="category"
                      checked={selectedCategory === 'all'}
                      onChange={() => setSelectedCategory('all')}
                      className="accent-accent"
                    />
                    <span className="text-sm text-foreground/80">All</span>
                  </label>
                  {categories.map(cat => (
                    <label key={cat.id} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="category"
                        checked={selectedCategory === cat.id}
                        onChange={() => setSelectedCategory(cat.id)}
                        className="accent-accent"
                      />
                      <span className="text-sm text-foreground/80">{cat.name}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Material filter */}
              <div>
                <h3 className="text-xs uppercase tracking-widest text-foreground mb-4">Material</h3>
                <div className="space-y-2">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="material"
                      checked={selectedMaterial === 'all'}
                      onChange={() => setSelectedMaterial('all')}
                      className="accent-accent"
                    />
                    <span className="text-sm text-foreground/80">All</span>
                  </label>
                  {['18k gold', 'silver'].map(mat => (
                    <label key={mat} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="material"
                        checked={selectedMaterial === mat}
                        onChange={() => setSelectedMaterial(mat)}
                        className="accent-accent"
                      />
                      <span className="text-sm text-foreground/80 capitalize">{mat} plated</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price range */}
              <div>
                <h3 className="text-xs uppercase tracking-widest text-foreground mb-4">Price</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <input
                      type="number"
                      value={priceRange[0]}
                      onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                      className="w-20 px-3 py-2 border border-border text-sm focus:outline-none focus:border-accent"
                      min="0"
                    />
                    <span className="text-muted-foreground">—</span>
                    <input
                      type="number"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                      className="w-20 px-3 py-2 border border-border text-sm focus:outline-none focus:border-accent"
                      min="0"
                    />
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Mobile filter button */}
          <div className="lg:hidden flex items-center justify-between w-full mb-6">
            <button
              onClick={() => setFilterOpen(!filterOpen)}
              className="flex items-center gap-2 text-sm text-foreground border border-border px-4 py-2.5"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
            </button>
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-transparent text-sm text-foreground pr-8 cursor-pointer focus:outline-none"
              >
                <option value="featured">Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Top Rated</option>
                <option value="newest">Newest</option>
              </select>
              <ChevronDown className="w-4 h-4 absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-muted-foreground" />
            </div>
          </div>

          {/* Mobile filter panel */}
          {filterOpen && (
            <div className="lg:hidden fixed inset-0 z-50 bg-white overflow-y-auto p-6">
              <div className="flex items-center justify-between mb-8">
                <h2 className="serif-heading text-xl">Filters</h2>
                <button onClick={() => setFilterOpen(false)} className="p-2">
                  <Filter className="w-5 h-5" />
                </button>
              </div>
              {/* Same filters as desktop */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-xs uppercase tracking-widest text-foreground mb-4">Category</h3>
                  <div className="space-y-3">
                    <button
                      onClick={() => { setSelectedCategory('all'); setFilterOpen(false) }}
                      className={`block w-full text-left text-sm py-2 ${selectedCategory === 'all' ? 'text-accent font-medium' : 'text-foreground/80'}`}
                    >
                      All
                    </button>
                    {categories.map(cat => (
                      <button
                        key={cat.id}
                        onClick={() => { setSelectedCategory(cat.id); setFilterOpen(false) }}
                        className={`block w-full text-left text-sm py-2 ${selectedCategory === cat.id ? 'text-accent font-medium' : 'text-foreground/80'}`}
                      >
                        {cat.name}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-xs uppercase tracking-widest text-foreground mb-4">Price</h3>
                  <div className="flex items-center gap-3">
                    <input
                      type="number"
                      value={priceRange[0]}
                      onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                      className="w-24 px-3 py-2 border border-border text-sm"
                      min="0"
                    />
                    <span className="text-muted-foreground">—</span>
                    <input
                      type="number"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                      className="w-24 px-3 py-2 border border-border text-sm"
                      min="0"
                    />
                  </div>
                </div>
                <button
                  onClick={() => setFilterOpen(false)}
                  className="w-full btn-primary text-center"
                >
                  Show {filteredProducts.length} Results
                </button>
              </div>
            </div>
          )}

          {/* Product grid */}
          <div className="flex-1">
            {/* Desktop sort */}
            <div className="hidden lg:flex items-center justify-between mb-8">
              <p className="text-sm text-muted-foreground">
                Showing {filteredProducts.length} result{filteredProducts.length !== 1 ? 's' : ''}
              </p>
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-transparent text-sm text-foreground pr-8 cursor-pointer focus:outline-none"
                >
                  <option value="featured">Featured</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="rating">Top Rated</option>
                  <option value="newest">Newest</option>
                </select>
                <ChevronDown className="w-4 h-4 absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-muted-foreground" />
              </div>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="serif-heading text-xl text-foreground mb-2">No pieces found</p>
                <p className="text-muted-foreground text-sm">Try adjusting your filters</p>
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
