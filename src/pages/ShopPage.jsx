import React, { useState, useMemo, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Filter, ChevronDown } from 'lucide-react'
import { products, categories } from '@/data/products'
import ProductCard from '@/components/shop/ProductGrid'

const ShopPage = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [filterOpen, setFilterOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'all')
  const [selectedMaterial, setSelectedMaterial] = useState('all')
  const [priceRange, setPriceRange] = useState('all')
  const [sortBy, setSortBy] = useState('featured')

  useEffect(() => {
    const cat = searchParams.get('category')
    if (cat) setSelectedCategory(cat)
  }, [searchParams])

  const filteredProducts = useMemo(() => {
    let result = [...products]

    if (selectedCategory !== 'all') {
      result = result.filter(p => p.category === selectedCategory)
    }
    if (selectedMaterial !== 'all') {
      result = result.filter(p => p.material === selectedMaterial)
    }
    if (priceRange !== 'all') {
      const [min, max] = priceRange.split('-').map(Number)
      result = result.filter(p => p.price >= min && (max ? p.price <= max : true))
    }

    switch (sortBy) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price)
        break
      case 'price-desc':
        result.sort((a, b) => b.price - a.price)
        break
      case 'rating':
        result.sort((a, b) => b.rating - a.rating)
        break
      case 'name':
        result.sort((a, b) => a.name.localeCompare(b.name))
        break
      default:
        break
    }

    return result
  }, [selectedCategory, selectedMaterial, priceRange, sortBy])

  const FilterSidebar = () => (
    <div className="space-y-6">
      {/* Category */}
      <div>
        <h4 className="text-xs tracking-widest uppercase mb-3">Category</h4>
        <div className="space-y-2">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`block text-sm transition-colors ${selectedCategory === 'all' ? 'text-primary font-medium' : 'text-muted-foreground hover:text-foreground'}`}
          >
            All
          </button>
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`block text-sm transition-colors ${selectedCategory === cat.id ? 'text-primary font-medium' : 'text-muted-foreground hover:text-foreground'}`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h4 className="text-xs tracking-widest uppercase mb-3">Price</h4>
        <div className="space-y-2">
          {[
            { value: 'all', label: 'All Prices' },
            { value: '0-50', label: 'Under $50' },
            { value: '50-100', label: '$50 - $100' },
            { value: '100-999', label: 'Over $100' },
          ].map(option => (
            <button
              key={option.value}
              onClick={() => setPriceRange(option.value)}
              className={`block text-sm transition-colors ${priceRange === option.value ? 'text-primary font-medium' : 'text-muted-foreground hover:text-foreground'}`}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      {/* Material */}
      <div>
        <h4 className="text-xs tracking-widest uppercase mb-3">Material</h4>
        <div className="space-y-2">
          <button
            onClick={() => setSelectedMaterial('all')}
            className={`block text-sm transition-colors ${selectedMaterial === 'all' ? 'text-primary font-medium' : 'text-muted-foreground hover:text-foreground'}`}
          >
            All
          </button>
          <button
            onClick={() => setSelectedMaterial('18k gold plated')}
            className={`block text-sm transition-colors ${selectedMaterial === '18k gold plated' ? 'text-primary font-medium' : 'text-muted-foreground hover:text-foreground'}`}
          >
            18K Gold Plated
          </button>
        </div>
      </div>
    </div>
  )

  return (
    <main className="pt-20 md:pt-24">
      {/* Header */}
      <div className="container-padding py-8 md:py-12">
        <h1 className="serif-heading text-3xl md:text-4xl text-center mb-2">Shop All</h1>
        <p className="text-center text-muted-foreground text-sm">
          {filteredProducts.length} piece{filteredProducts.length !== 1 ? 's' : ''}
        </p>
      </div>

      <div className="container-padding pb-16">
        <div className="flex gap-8">
          {/* Desktop sidebar */}
          <aside className="hidden md:block w-56 flex-shrink-0">
            <FilterSidebar />
          </aside>

          {/* Mobile filter toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setFilterOpen(!filterOpen)}
              className="flex items-center gap-2 text-sm mb-4"
            >
              <Filter size={16} />
              Filters
              <ChevronDown size={14} className={`transition-transform ${filterOpen ? 'rotate-180' : ''}`} />
            </button>
            {filterOpen && (
              <div className="mb-6 p-4 bg-secondary/30 border border-border">
                <FilterSidebar />
              </div>
            )}
          </div>

          {/* Product grid */}
          <div className="flex-1">
            {/* Sort */}
            <div className="flex justify-end mb-6">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="text-sm border border-border bg-transparent px-3 py-2 focus:outline-none focus:border-primary"
              >
                <option value="featured">Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Top Rated</option>
                <option value="name">Name A-Z</option>
              </select>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="text-center py-16">
                <p className="serif-heading text-xl mb-2">No pieces found</p>
                <p className="text-muted-foreground text-sm">Try adjusting your filters</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}

export default ShopPage
