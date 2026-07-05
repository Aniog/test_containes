import React, { useState, useMemo } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { products, categories } from '../data/products'
import ProductCard from '../components/product/ProductCard'
import { ChevronDown } from 'lucide-react'

const ShopPage = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [selectedCategories, setSelectedCategories] = useState(
    searchParams.get('category') ? [searchParams.get('category')] : []
  )
  const [selectedMaterials, setSelectedMaterials] = useState([])
  const [priceRange, setPriceRange] = useState([0, 120])
  const [sortBy, setSortBy] = useState('featured')
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  const filteredProducts = useMemo(() => {
    let result = [...products]

    // Category filter
    if (selectedCategories.length > 0) {
      result = result.filter((p) => selectedCategories.includes(p.category))
    }

    // Material filter
    if (selectedMaterials.length > 0) {
      result = result.filter((p) => selectedMaterials.includes(p.material))
    }

    // Price filter
    result = result.filter(
      (p) => p.price >= priceRange[0] && p.price <= priceRange[1]
    )

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
  }, [selectedCategories, selectedMaterials, priceRange, sortBy])

  const toggleCategory = (cat) => {
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    )
  }

  const toggleMaterial = (mat) => {
    setSelectedMaterials((prev) =>
      prev.includes(mat) ? prev.filter((m) => m !== mat) : [...prev, mat]
    )
  }

  return (
    <div className="pt-20 pb-16">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between py-10 border-b border-[#E5DFD3]">
          <div>
            <span className="text-xs tracking-[0.2em] text-[#B8976E]">DISCOVER</span>
            <h1 className="serif text-6xl tracking-[-0.01em] mt-1">The Collection</h1>
          </div>
          <div className="mt-4 md:mt-0 flex items-center gap-4">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-transparent border border-[#E5DFD3] px-4 py-2 text-sm tracking-[0.05em] focus:outline-none"
            >
              <option value="featured">Sort: Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name">Name: A–Z</option>
            </select>
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="md:hidden border border-[#E5DFD3] px-4 py-2 text-sm tracking-[0.05em]"
            >
              FILTERS
            </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-10 pt-8">
          {/* Filters Sidebar */}
          <aside className={`${isFilterOpen ? 'block' : 'hidden'} md:block w-full md:w-56 flex-shrink-0`}>
            <div className="sticky top-24 space-y-8">
              {/* Categories */}
              <div>
                <div className="filter-label mb-4">Category</div>
                <div className="space-y-2.5">
                  {categories.map((cat) => (
                    <label key={cat} className="flex items-center gap-2.5 cursor-pointer text-sm">
                      <input
                        type="checkbox"
                        checked={selectedCategories.includes(cat)}
                        onChange={() => toggleCategory(cat)}
                        className="accent-[#B8976E]"
                      />
                      {cat}
                    </label>
                  ))}
                </div>
              </div>

              {/* Material */}
              <div>
                <div className="filter-label mb-4">Material</div>
                <div className="space-y-2.5">
                  {['Gold', 'Silver'].map((mat) => (
                    <label key={mat} className="flex items-center gap-2.5 cursor-pointer text-sm">
                      <input
                        type="checkbox"
                        checked={selectedMaterials.includes(mat)}
                        onChange={() => toggleMaterial(mat)}
                        className="accent-[#B8976E]"
                      />
                      {mat}
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div>
                <div className="filter-label mb-4">Price Range</div>
                <div className="px-1">
                  <input
                    type="range"
                    min="0"
                    max="120"
                    step="5"
                    value={priceRange[1]}
                    onChange={(e) =>
                      setPriceRange([priceRange[0], parseInt(e.target.value)])
                    }
                    className="w-full accent-[#B8976E]"
                  />
                  <div className="flex justify-between text-xs text-[#6B665F] mt-1">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => {
                  setSelectedCategories([])
                  setSelectedMaterials([])
                  setPriceRange([0, 120])
                }}
                className="text-xs tracking-[0.1em] text-[#6B665F] hover:text-[#2C2823]"
              >
                CLEAR ALL FILTERS
              </button>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-10">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-lg mb-2">No products match your filters.</p>
                <button
                  onClick={() => {
                    setSelectedCategories([])
                    setSelectedMaterials([])
                    setPriceRange([0, 120])
                  }}
                  className="text-sm text-[#B8976E] hover:underline"
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShopPage
