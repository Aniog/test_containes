import React, { useState, useMemo } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { ChevronDown } from 'lucide-react'
import { products, categories, materials } from '@/data/products'
import { useCart } from '@/context/CartContext'
import ProductCard from '@/components/ui/ProductCard'
import Button from '@/components/ui/Button'
import { formatPrice } from '@/lib/utils'

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const { addToCart } = useCart()

  const [selectedCategories, setSelectedCategories] = useState([])
  const [selectedMaterials, setSelectedMaterials] = useState([])
  const [priceRange, setPriceRange] = useState([0, 120])
  const [sortBy, setSortBy] = useState('featured')
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false)

  // Read URL params on mount
  React.useEffect(() => {
    const cat = searchParams.get('category')
    if (cat) setSelectedCategories([cat])
    
    const search = searchParams.get('search')
    if (search) {
      // For now, we'll filter by name match in the filteredProducts
    }
  }, [])

  const searchQuery = searchParams.get('search')?.toLowerCase() || ''

  const filteredProducts = useMemo(() => {
    let result = [...products]

    // Search filter
    if (searchQuery) {
      result = result.filter(p => 
        p.name.toLowerCase().includes(searchQuery) || 
        p.description.toLowerCase().includes(searchQuery)
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
  }, [selectedCategories, selectedMaterials, priceRange, sortBy, searchQuery])

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

  const handleQuickAdd = (product, variant) => {
    addToCart(product, variant, 1)
  }

  const activeFilterCount = selectedCategories.length + selectedMaterials.length + 
    (priceRange[0] !== 0 || priceRange[1] !== 120 ? 1 : 0)

  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10">
          <div>
            <p className="text-xs tracking-[2px] text-[#C5A46E] mb-2">COLLECTION</p>
            <h1 className="font-serif text-4xl tracking-wide">All Jewelry</h1>
          </div>
          
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <select 
              value={sortBy} 
              onChange={(e) => setSortBy(e.target.value)}
              className="sort-select text-[#5C5346]"
            >
              <option value="featured">Sort: Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name">Name: A to Z</option>
            </select>
            
            <button 
              onClick={() => setIsMobileFiltersOpen(!isMobileFiltersOpen)}
              className="md:hidden text-sm tracking-[1px] text-[#C5A46E]"
            >
              FILTERS {activeFilterCount > 0 && `(${activeFilterCount})`}
            </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-10">
          {/* FILTER SIDEBAR */}
          <aside className={`w-full md:w-56 flex-shrink-0 ${isMobileFiltersOpen ? 'block' : 'hidden md:block'}`}>
            <div className="sticky top-24 space-y-8">
              <div className="flex items-center justify-between">
                <span className="filter-label">Filters</span>
                {activeFilterCount > 0 && (
                  <button onClick={clearFilters} className="text-xs text-[#C5A46E] hover:underline">
                    Clear all
                  </button>
                )}
              </div>

              {/* Category */}
              <div>
                <p className="filter-label mb-4">Category</p>
                <div className="space-y-3">
                  {categories.map((cat) => (
                    <label key={cat} className="flex items-center gap-3 cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={selectedCategories.includes(cat)}
                        onChange={() => toggleCategory(cat)}
                        className="w-4 h-4 accent-[#C5A46E]"
                      />
                      <span className="text-sm text-[#5C5346] group-hover:text-[#0A0806]">{cat}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Material */}
              <div>
                <p className="filter-label mb-4">Material</p>
                <div className="space-y-3">
                  {materials.map((mat) => (
                    <label key={mat} className="flex items-center gap-3 cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={selectedMaterials.includes(mat)}
                        onChange={() => toggleMaterial(mat)}
                        className="w-4 h-4 accent-[#C5A46E]"
                      />
                      <span className="text-sm text-[#5C5346] group-hover:text-[#0A0806]">{mat} Tone</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div>
                <p className="filter-label mb-4">Price Range</p>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm text-[#5C5346]">
                    <span>{formatPrice(priceRange[0])}</span>
                    <span>—</span>
                    <span>{formatPrice(priceRange[1])}</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="120"
                    step="1"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full accent-[#C5A46E]"
                  />
                </div>
              </div>
            </div>
          </aside>

          {/* PRODUCT GRID */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-[#5C5346] mb-4">No products match your filters.</p>
                <Button variant="outline" onClick={clearFilters}>Clear Filters</Button>
              </div>
            ) : (
              <>
                <p className="text-sm text-[#8A7F6D] mb-6">{filteredProducts.length} products</p>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-12">
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} onQuickAdd={handleQuickAdd} />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
