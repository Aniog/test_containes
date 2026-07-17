import { useState } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import { products } from '../App'

const Shop = () => {
  const [searchParams] = useSearchParams()
  const [sortBy, setSortBy] = useState('featured')
  const [selectedCategories, setSelectedCategories] = useState([])
  const [priceRange, setPriceRange] = useState([0, 120])
  const [selectedMaterials, setSelectedMaterials] = useState([])

  const urlCategory = searchParams.get('category')

  // Filter products
  let filteredProducts = [...products]

  // Category filter from URL or sidebar
  const activeCategories = urlCategory ? [urlCategory] : selectedCategories
  if (activeCategories.length > 0) {
    filteredProducts = filteredProducts.filter(p => activeCategories.includes(p.category))
  }

  // Price filter
  filteredProducts = filteredProducts.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1])

  // Sort
  if (sortBy === 'price-low') filteredProducts.sort((a, b) => a.price - b.price)
  if (sortBy === 'price-high') filteredProducts.sort((a, b) => b.price - a.price)
  if (sortBy === 'name') filteredProducts.sort((a, b) => a.name.localeCompare(b.name))

  const categories = ['Earrings', 'Necklaces', 'Huggies', 'Sets']
  const materials = ['18K Gold Plated', 'Crystal']

  const toggleCategory = (cat) => {
    setSelectedCategories(prev => 
      prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]
    )
  }

  return (
    <div className="pt-20 max-w-[1400px] mx-auto px-6 pb-20">
      <div className="py-10 border-b border-[#E5DFD3]">
        <h1 className="font-serif text-5xl tracking-tight">Shop</h1>
      </div>

      <div className="flex flex-col lg:flex-row gap-10 pt-10">
        {/* Sidebar Filters */}
        <aside className="lg:w-64 flex-shrink-0">
          <div className="sticky top-24 space-y-10">
            {/* Categories */}
            <div>
              <div className="filter-label">Category</div>
              <div className="space-y-2 text-sm">
                {categories.map(cat => (
                  <label key={cat} className="flex items-center gap-2 cursor-pointer">
                    <input 
                      type="checkbox" 
                      checked={activeCategories.includes(cat)}
                      onChange={() => toggleCategory(cat)}
                      className="accent-[#B8976E]"
                    />
                    {cat}
                  </label>
                ))}
              </div>
            </div>

            {/* Price */}
            <div>
              <div className="filter-label mb-4">Price Range</div>
              <div className="flex items-center gap-3 text-sm">
                <input 
                  type="number" 
                  value={priceRange[0]} 
                  onChange={(e) => setPriceRange([parseInt(e.target.value) || 0, priceRange[1]])}
                  className="w-20 px-3 py-1.5 border border-[#E5DFD3]"
                />
                <span className="text-[#6B665F]">to</span>
                <input 
                  type="number" 
                  value={priceRange[1]} 
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value) || 120])}
                  className="w-20 px-3 py-1.5 border border-[#E5DFD3]"
                />
              </div>
            </div>

            {/* Material */}
            <div>
              <div className="filter-label">Material</div>
              <div className="space-y-2 text-sm">
                {materials.map(mat => (
                  <label key={mat} className="flex items-center gap-2 cursor-pointer">
                    <input 
                      type="checkbox" 
                      checked={selectedMaterials.includes(mat)}
                      onChange={() => setSelectedMaterials(prev => 
                        prev.includes(mat) ? prev.filter(m => m !== mat) : [...prev, mat]
                      )}
                      className="accent-[#B8976E]"
                    />
                    {mat}
                  </label>
                ))}
              </div>
            </div>
          </div>
        </aside>

        {/* Products Grid */}
        <div className="flex-1">
          <div className="flex justify-between items-center mb-8">
            <div className="text-sm text-[#6B665F]">{filteredProducts.length} products</div>
            <select 
              value={sortBy} 
              onChange={(e) => setSortBy(e.target.value)}
              className="text-sm border border-[#E5DFD3] px-4 py-2 bg-white focus:outline-none"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name">A–Z</option>
            </select>
          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-12">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 text-[#6B665F]">
              No products match your filters.
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Shop