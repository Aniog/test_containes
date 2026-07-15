import React, { useState, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { products } from '@/data/products'
import ProductCard from '@/components/ui/ProductCard'
import { formatPrice } from '@/lib/utils'

const CATEGORIES = [
  { value: 'all', label: 'All' },
  { value: 'earrings', label: 'Earrings' },
  { value: 'necklaces', label: 'Necklaces' },
  { value: 'huggies', label: 'Huggies' },
  { value: 'sets', label: 'Sets' },
]

const MATERIALS = [
  { value: 'all', label: 'All' },
  { value: 'gold', label: 'Gold Tone' },
  { value: 'silver', label: 'Silver Tone' },
]

const SORT_OPTIONS = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-low', label: 'Price: Low to High' },
  { value: 'price-high', label: 'Price: High to Low' },
  { value: 'name', label: 'Name A–Z' },
]

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'all')
  const [selectedMaterial, setSelectedMaterial] = useState('all')
  const [priceRange, setPriceRange] = useState([0, 120])
  const [sortBy, setSortBy] = useState('featured')
  const [searchQuery, setSearchQuery] = useState(searchParams.get('search') || '')

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let result = [...products]

    // Category filter
    if (selectedCategory !== 'all') {
      result = result.filter((p) => p.category === selectedCategory)
    }

    // Search filter
    if (searchQuery) {
      const q = searchQuery.toLowerCase()
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.shortDesc.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q)
      )
    }

    // Price filter
    result = result.filter((p) => p.price >= priceRange[0] && p.price <= priceRange[1])

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
  }, [selectedCategory, selectedMaterial, priceRange, sortBy, searchQuery])

  const updateCategory = (cat) => {
    setSelectedCategory(cat)
    const newParams = new URLSearchParams(searchParams)
    if (cat === 'all') {
      newParams.delete('category')
    } else {
      newParams.set('category', cat)
    }
    setSearchParams(newParams)
  }

  const clearFilters = () => {
    setSelectedCategory('all')
    setSelectedMaterial('all')
    setPriceRange([0, 120])
    setSortBy('featured')
    setSearchQuery('')
    setSearchParams({})
  }

  const hasActiveFilters = selectedCategory !== 'all' || selectedMaterial !== 'all' || priceRange[0] > 0 || priceRange[1] < 120 || searchQuery

  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Header */}
        <div className="mb-10">
          <span className="text-xs tracking-[0.12em] uppercase text-[#6B635C]">Discover</span>
          <h1 className="serif-heading text-5xl mt-1">The Collection</h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Sidebar Filters */}
          <aside className="lg:w-56 flex-shrink-0">
            <div className="sticky top-24 space-y-8">
              {/* Search */}
              <div>
                <div className="filter-label">Search</div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Find a piece..."
                  className="w-full border border-[#EDE8E0] px-3 py-2 text-sm focus:border-[#B89778] outline-none"
                />
              </div>

              {/* Category */}
              <div>
                <div className="filter-label">Category</div>
                <div className="space-y-2 text-sm">
                  {CATEGORIES.map((cat) => (
                    <button
                      key={cat.value}
                      onClick={() => updateCategory(cat.value)}
                      className={`block w-full text-left py-0.5 transition-colors ${
                        selectedCategory === cat.value ? 'text-[#B89778]' : 'hover:text-[#B89778]'
                      }`}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div>
                <div className="filter-label">Price Range</div>
                <div className="space-y-3">
                  <div className="flex justify-between text-xs text-[#6B635C]">
                    <span>{formatPrice(priceRange[0])}</span>
                    <span>{formatPrice(priceRange[1])}</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="120"
                    step="1"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full accent-[#B89778]"
                  />
                  <input
                    type="range"
                    min="0"
                    max="120"
                    step="1"
                    value={priceRange[0]}
                    onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                    className="w-full accent-[#B89778]"
                  />
                </div>
              </div>

              {/* Material (visual only for now) */}
              <div>
                <div className="filter-label">Material</div>
                <div className="flex gap-2">
                  {MATERIALS.map((m) => (
                    <button
                      key={m.value}
                      onClick={() => setSelectedMaterial(m.value)}
                      className={`px-3 py-1 text-xs border transition-colors ${
                        selectedMaterial === m.value
                          ? 'border-[#0D0D0D] bg-[#0D0D0D] text-[#F7F4EF]'
                          : 'border-[#EDE8E0] hover:border-[#B89778]'
                      }`}
                    >
                      {m.label}
                    </button>
                  ))}
                </div>
              </div>

              {hasActiveFilters && (
                <button onClick={clearFilters} className="text-xs tracking-[0.08em] uppercase underline text-[#6B635C] hover:text-[#0D0D0D]">
                  Clear Filters
                </button>
              )}
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#EDE8E0]">
              <p className="text-sm text-[#6B635C]">
                {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
              </p>
              <div className="flex items-center gap-2">
                <span className="text-xs text-[#6B635C] hidden sm:inline">Sort</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="sort-select"
                >
                  {SORT_OPTIONS.map((opt) => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
              </div>
            </div>

            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-x-5 gap-y-10">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="py-20 text-center">
                <p className="text-[#6B635C] mb-4">No pieces match your filters.</p>
                <button onClick={clearFilters} className="btn btn-outline text-sm">
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
