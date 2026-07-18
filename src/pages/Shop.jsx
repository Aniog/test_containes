import React, { useState, useMemo } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { ChevronDown } from 'lucide-react'
import ProductCard from '../components/ProductCard'
import { productsWithVariants, categories, materials } from '../data/products'

function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  
  // Filter states
  const [selectedCategories, setSelectedCategories] = useState([])
  const [selectedMaterials, setSelectedMaterials] = useState([])
  const [priceRange, setPriceRange] = useState([0, 120])
  const [sortBy, setSortBy] = useState('featured')
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  // Get search query from URL
  const searchQuery = searchParams.get('search') || ''
  const categoryParam = searchParams.get('category') || ''

  // Initialize from URL params
  React.useEffect(() => {
    if (categoryParam && categoryParam !== 'Collections') {
      setSelectedCategories([categoryParam])
    }
  }, [categoryParam])

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let result = [...productsWithVariants]

    // Search filter
    if (searchQuery) {
      const q = searchQuery.toLowerCase()
      result = result.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q)
      )
    }

    // Category filter
    if (selectedCategories.length > 0) {
      result = result.filter(p => selectedCategories.includes(p.category))
    }

    // Material filter
    if (selectedMaterials.length > 0) {
      result = result.filter(p => selectedMaterials.includes(p.material))
    }

    // Price filter
    result = result.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1])

    // Sort
    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price)
        break
      case 'price-high':
        result.sort((a, b) => b.price - a.price)
        break
      case 'name':
        result.sort((a, b) => a.name.localeCompare(b.name))
        break
      default:
        // featured - keep original order
        break
    }

    return result
  }, [searchQuery, selectedCategories, selectedMaterials, priceRange, sortBy])

  const toggleCategory = (cat) => {
    setSelectedCategories(prev =>
      prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]
    )
  }

  const toggleMaterial = (mat) => {
    setSelectedMaterials(prev =>
      prev.includes(mat) ? prev.filter(m => m !== mat) : [...prev, mat]
    )
  }

  const clearFilters = () => {
    setSelectedCategories([])
    setSelectedMaterials([])
    setPriceRange([0, 120])
    setSortBy('featured')
    setSearchParams({})
  }

  const hasActiveFilters = selectedCategories.length > 0 || selectedMaterials.length > 0 || priceRange[0] > 0 || priceRange[1] < 120

  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-8">
          <div>
            <div className="text-xs tracking-[0.15em] uppercase text-vel-gold mb-1">Browse</div>
            <h1 className="section-title">The Collection</h1>
          </div>
          
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            {searchQuery && (
              <span className="text-sm text-vel-muted">Results for "{searchQuery}"</span>
            )}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="sort-select"
            >
              <option value="featured">Sort: Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name">Name: A to Z</option>
            </select>
            <button
              onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
              className="md:hidden btn btn-sm btn-outline"
            >
              Filters
            </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-10">
          {/* Sidebar Filters */}
          <aside className={`w-full md:w-56 flex-shrink-0 ${mobileFiltersOpen ? 'block' : 'hidden md:block'}`}>
            <div className="sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs tracking-[0.1em] uppercase">Filters</span>
                {hasActiveFilters && (
                  <button onClick={clearFilters} className="text-xs text-vel-gold hover:underline">
                    Clear All
                  </button>
                )}
              </div>

              {/* Category */}
              <div className="mb-8">
                <div className="filter-label">Category</div>
                {categories.map((cat) => (
                  <label key={cat} className="filter-option">
                    <input
                      type="checkbox"
                      checked={selectedCategories.includes(cat)}
                      onChange={() => toggleCategory(cat)}
                    />
                    <span>{cat}</span>
                  </label>
                ))}
              </div>

              {/* Material */}
              <div className="mb-8">
                <div className="filter-label">Material</div>
                {materials.map((mat) => (
                  <label key={mat} className="filter-option">
                    <input
                      type="checkbox"
                      checked={selectedMaterials.includes(mat)}
                      onChange={() => toggleMaterial(mat)}
                    />
                    <span>{mat}</span>
                  </label>
                ))}
              </div>

              {/* Price Range */}
              <div>
                <div className="filter-label">Price Range</div>
                <div className="flex items-center gap-2 text-sm mb-2">
                  <span>${priceRange[0]}</span>
                  <span className="text-vel-muted">—</span>
                  <span>${priceRange[1]}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="120"
                  step="5"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                  className="w-full accent-vel-gold"
                />
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            {filteredProducts.length > 0 ? (
              <>
                <p className="text-xs text-vel-muted mb-6 tracking-widest">
                  {filteredProducts.length} {filteredProducts.length === 1 ? 'PIECE' : 'PIECES'}
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10">
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </>
            ) : (
              <div className="empty-state">
                <p className="mb-4">No products match your filters.</p>
                <button onClick={clearFilters} className="btn btn-outline btn-sm">
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Shop