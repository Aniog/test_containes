import React, { useState, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import ProductCard from '@/components/ui/ProductCard'
import Button from '@/components/ui/Button'
import { products, categories } from '@/data/products'
import { formatPrice } from '@/lib/utils'

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [selectedCategories, setSelectedCategories] = useState(
    searchParams.get('category') ? [searchParams.get('category')] : []
  )
  const [priceRange, setPriceRange] = useState([0, 120])
  const [selectedMaterials, setSelectedMaterials] = useState([])
  const [sortBy, setSortBy] = useState('featured')
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  const materials = ["18K Gold Plated Brass", "18K Gold Plated Brass, Crystal"]

  const filteredProducts = useMemo(() => {
    let result = [...products]

    // Category filter
    if (selectedCategories.length > 0) {
      result = result.filter(p => selectedCategories.includes(p.category))
    }

    // Price filter
    result = result.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1])

    // Material filter
    if (selectedMaterials.length > 0) {
      result = result.filter(p => selectedMaterials.includes(p.material))
    }

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
        // featured - sort by rating
        result.sort((a, b) => b.rating - a.rating)
    }

    return result
  }, [selectedCategories, priceRange, selectedMaterials, sortBy])

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
    setPriceRange([0, 120])
    setSelectedMaterials([])
    setSortBy('featured')
    setSearchParams({})
  }

  const hasActiveFilters = selectedCategories.length > 0 || selectedMaterials.length > 0 || priceRange[0] > 0 || priceRange[1] < 120

  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10">
          <div>
            <span className="text-xs tracking-[3px] text-[#A67C52]">DISCOVER</span>
            <h1 className="font-serif text-4xl tracking-wide mt-1">The Collection</h1>
          </div>
          <div className="mt-4 md:mt-0 flex items-center gap-4">
            <select 
              value={sortBy} 
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-transparent border border-[#E5E0D8] px-4 py-2 text-sm tracking-[1px] focus:outline-none focus:border-[#A67C52]"
            >
              <option value="featured">Sort: Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name">Name: A to Z</option>
            </select>
            <button 
              onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
              className="md:hidden text-sm tracking-[1px] text-[#A67C52]"
            >
              FILTERS
            </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-10">
          {/* Filters Sidebar */}
          <aside className={`w-full md:w-56 flex-shrink-0 ${mobileFiltersOpen ? 'block' : 'hidden md:block'}`}>
            <div className="sticky top-24 space-y-8">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs tracking-[2px] text-[#8B8178]">FILTERS</span>
                  {hasActiveFilters && (
                    <button onClick={clearFilters} className="text-xs text-[#A67C52] hover:underline">Clear all</button>
                  )}
                </div>
              </div>

              {/* Category */}
              <div>
                <p className="text-xs tracking-[2px] text-[#8B8178] mb-3">CATEGORY</p>
                <div className="space-y-2">
                  {categories.map(cat => (
                    <label key={cat} className="flex items-center gap-2 cursor-pointer group">
                      <input 
                        type="checkbox" 
                        checked={selectedCategories.includes(cat)}
                        onChange={() => toggleCategory(cat)}
                        className="accent-[#A67C52]"
                      />
                      <span className="text-sm text-[#4A4640] group-hover:text-[#1A1816]">{cat}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price */}
              <div>
                <p className="text-xs tracking-[2px] text-[#8B8178] mb-3">PRICE RANGE</p>
                <div className="space-y-3">
                  <input 
                    type="range" 
                    min="0" 
                    max="120" 
                    step="1"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full accent-[#A67C52]"
                  />
                  <div className="flex justify-between text-xs text-[#8B8178]">
                    <span>{formatPrice(priceRange[0])}</span>
                    <span>{formatPrice(priceRange[1])}</span>
                  </div>
                </div>
              </div>

              {/* Material */}
              <div>
                <p className="text-xs tracking-[2px] text-[#8B8178] mb-3">MATERIAL</p>
                <div className="space-y-2">
                  {materials.map(mat => (
                    <label key={mat} className="flex items-center gap-2 cursor-pointer group">
                      <input 
                        type="checkbox" 
                        checked={selectedMaterials.includes(mat)}
                        onChange={() => toggleMaterial(mat)}
                        className="accent-[#A67C52]"
                      />
                      <span className="text-sm text-[#4A4640] group-hover:text-[#1A1816]">{mat.replace('18K Gold Plated ', '')}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-[#8B8178] mb-4">No products match your filters.</p>
                <Button onClick={clearFilters} variant="outline">Clear Filters</Button>
              </div>
            ) : (
              <>
                <p className="text-xs tracking-[1.5px] text-[#8B8178] mb-6">{filteredProducts.length} PRODUCTS</p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-12">
                  {filteredProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
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
