import React, { useState } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { products } from '../data/products'
import ProductCard from '../components/ProductCard'
import { ChevronDown } from 'lucide-react'

const Shop = () => {
  const [searchParams] = useSearchParams()
  const initialCategory = searchParams.get('category') || ''
  
  const [selectedCategories, setSelectedCategories] = useState(initialCategory ? [initialCategory] : [])
  const [selectedMaterials, setSelectedMaterials] = useState([])
  const [priceRange, setPriceRange] = useState([0, 120])
  const [sortBy, setSortBy] = useState('featured')

  const categories = ['Earrings', 'Necklaces', 'Huggies']
  const materials = ['Gold', 'Silver']

  const filteredProducts = products
    .filter(p => {
      const categoryMatch = selectedCategories.length === 0 || selectedCategories.includes(p.category)
      const materialMatch = selectedMaterials.length === 0 || selectedMaterials.includes(p.material)
      const priceMatch = p.price >= priceRange[0] && p.price <= priceRange[1]
      return categoryMatch && materialMatch && priceMatch
    })
    .sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price
      if (sortBy === 'price-high') return b.price - a.price
      if (sortBy === 'name') return a.name.localeCompare(b.name)
      return 0 // featured - keep original order
    })

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

  return (
    <div className="pt-20">
      <div className="max-w-[1400px] mx-auto px-6 py-12">
        <div className="mb-10">
          <div className="text-xs tracking-[0.2em] text-[#8B7355] mb-2">DISCOVER</div>
          <h1 className="serif text-5xl tracking-[0.03em]">The Collection</h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Filter Sidebar */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="sticky top-24 space-y-8">
              {/* Categories */}
              <div>
                <div className="filter-label mb-4">Category</div>
                <div className="space-y-2.5">
                  {categories.map(cat => (
                    <label key={cat} className="flex items-center gap-3 cursor-pointer text-sm">
                      <input 
                        type="checkbox" 
                        checked={selectedCategories.includes(cat)}
                        onChange={() => toggleCategory(cat)}
                        className="accent-[#8B7355]"
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
                  {materials.map(mat => (
                    <label key={mat} className="flex items-center gap-3 cursor-pointer text-sm">
                      <input 
                        type="checkbox" 
                        checked={selectedMaterials.includes(mat)}
                        onChange={() => toggleMaterial(mat)}
                        className="accent-[#8B7355]"
                      />
                      {mat}
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div>
                <div className="filter-label mb-4">Price Range</div>
                <div className="space-y-3">
                  <input 
                    type="range" 
                    min="0" 
                    max="120" 
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full accent-[#8B7355]"
                  />
                  <div className="flex justify-between text-sm text-[#7A7368]">
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
                className="text-xs tracking-[0.1em] text-[#8B7355] hover:underline"
              >
                Clear All Filters
              </button>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            {/* Sort Bar */}
            <div className="flex justify-between items-center mb-8 pb-4 border-b border-[#E5DFD3]">
              <div className="text-sm text-[#7A7368]">{filteredProducts.length} products</div>
              <div className="relative">
                <select 
                  value={sortBy} 
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-transparent pr-8 text-sm tracking-[0.05em] cursor-pointer focus:outline-none"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="name">A - Z</option>
                </select>
                <ChevronDown size={14} className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-12">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-lg mb-2">No products match your filters</p>
                <button onClick={() => {
                  setSelectedCategories([])
                  setSelectedMaterials([])
                  setPriceRange([0, 120])
                }} className="text-[#8B7355] hover:underline">Clear filters</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Shop
