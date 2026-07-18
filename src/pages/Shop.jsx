import React, { useState, useMemo } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { Star, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Select } from '@/components/ui/select'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/lib/utils'

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const { addToCart } = useCart()
  
  // Filter states
  const [selectedCategories, setSelectedCategories] = useState(
    searchParams.get('category') ? [searchParams.get('category')] : []
  )
  const [selectedMaterials, setSelectedMaterials] = useState([])
  const [priceRange, setPriceRange] = useState([0, 120])
  const [sortBy, setSortBy] = useState('featured')
  const [searchQuery, setSearchQuery] = useState(searchParams.get('search') || '')

  const categories = ['Earrings', 'Necklaces', 'Huggies']
  const materials = ['Gold', 'Silver']

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let result = [...products]

    // Search filter
    if (searchQuery) {
      const q = searchQuery.toLowerCase()
      result = result.filter(p => 
        p.name.toLowerCase().includes(q) || 
        p.description.toLowerCase().includes(q)
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
    setSearchQuery('')
    setSearchParams({})
  }

  const handleAddToCart = (product, e) => {
    e.preventDefault()
    addToCart(product, 'Gold', 1)
  }

  return (
    <div className="pt-20 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10">
          <div>
            <p className="text-xs tracking-[0.2em] text-[#A68B5B] mb-2">DISCOVER</p>
            <h1 className="serif text-4xl tracking-[-0.01em]">The Collection</h1>
          </div>
          
          {/* Sort */}
          <div className="mt-4 md:mt-0 flex items-center gap-3">
            <span className="text-xs tracking-[0.1em] text-[#8A8178]">SORT</span>
            <Select 
              value={sortBy} 
              onChange={(e) => setSortBy(e.target.value)}
              className="w-44"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name">Name A–Z</option>
            </Select>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* FILTER SIDEBAR */}
          <aside className="lg:w-56 flex-shrink-0">
            <div className="sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs tracking-[0.15em] text-[#8A8178]">FILTERS</span>
                {(selectedCategories.length > 0 || selectedMaterials.length > 0 || searchQuery) && (
                  <button onClick={clearFilters} className="text-xs text-[#A68B5B] hover:underline">
                    CLEAR ALL
                  </button>
                )}
              </div>

              {/* Search */}
              <div className="mb-8">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full h-10 border border-[#D4C9B9] px-3 text-sm focus:border-[#A68B5B] outline-none"
                />
              </div>

              {/* Category */}
              <div className="mb-8">
                <p className="text-xs tracking-[0.15em] text-[#8A8178] mb-3">CATEGORY</p>
                <div className="space-y-2">
                  {categories.map(cat => (
                    <label key={cat} className="flex items-center gap-2 cursor-pointer text-sm">
                      <input
                        type="checkbox"
                        checked={selectedCategories.includes(cat)}
                        onChange={() => toggleCategory(cat)}
                        className="accent-[#A68B5B]"
                      />
                      {cat}
                    </label>
                  ))}
                </div>
              </div>

              {/* Material */}
              <div className="mb-8">
                <p className="text-xs tracking-[0.15em] text-[#8A8178] mb-3">MATERIAL</p>
                <div className="space-y-2">
                  {materials.map(mat => (
                    <label key={mat} className="flex items-center gap-2 cursor-pointer text-sm">
                      <input
                        type="checkbox"
                        checked={selectedMaterials.includes(mat)}
                        onChange={() => toggleMaterial(mat)}
                        className="accent-[#A68B5B]"
                      />
                      {mat}
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div>
                <p className="text-xs tracking-[0.15em] text-[#8A8178] mb-3">PRICE</p>
                <div className="space-y-2 text-sm">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="price" checked={priceRange[1] === 120} onChange={() => setPriceRange([0, 120])} className="accent-[#A68B5B]" />
                    All
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="price" checked={priceRange[1] === 50} onChange={() => setPriceRange([0, 50])} className="accent-[#A68B5B]" />
                    Under $50
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="price" checked={priceRange[0] === 50} onChange={() => setPriceRange([50, 120])} className="accent-[#A68B5B]" />
                    $50 and above
                  </label>
                </div>
              </div>
            </div>
          </aside>

          {/* PRODUCT GRID */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-[#8A8178] mb-4">No products match your filters.</p>
                <Button variant="outline" onClick={clearFilters}>Clear Filters</Button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product) => (
                  <Link key={product.id} to={`/product/${product.slug}`} className="product-card group bg-white block">
                    <div className="product-image-container aspect-[4/3.5] bg-[#F5F2ED] relative overflow-hidden">
                      <img 
                        src={product.images[0]} 
                        alt={product.name}
                        className="product-image-primary absolute inset-0 w-full h-full object-cover"
                      />
                      <img 
                        src={product.images[1] || product.images[0]} 
                        alt={product.name}
                        className="product-image-secondary absolute inset-0 w-full h-full object-cover"
                      />
                      
                      <button
                        onClick={(e) => handleAddToCart(product, e)}
                        className="quick-add bg-white text-[#2C2825] px-6 py-2 text-xs tracking-[0.1em] shadow-md hover:bg-[#A68B5B] hover:text-white"
                      >
                        ADD TO CART
                      </button>
                    </div>
                    
                    <div className="p-4">
                      <p className="product-name text-sm tracking-[0.15em] mb-1 pr-2">{product.name}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-[#5C5651]">{formatPrice(product.price)}</span>
                        <div className="flex items-center gap-1 text-xs text-[#A68B5B]">
                          <Star size={12} fill="currentColor" />
                          <span>{product.rating}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Shop
