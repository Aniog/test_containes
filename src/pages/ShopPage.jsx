import React, { useState, useMemo } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, ChevronDown } from 'lucide-react'
import { products, categories } from '../data/products'
import { useCart } from '../context/CartContext'

function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false)
  const { addItem } = useCart()

  return (
    <div
      className="group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block relative overflow-hidden rounded-sm bg-[hsl(var(--background-secondary))] aspect-[3/4]">
        <img
          src={product.image}
          alt={product.name}
          className={`w-full h-full object-cover transition-all duration-700 ${hovered ? 'opacity-0 scale-105' : 'opacity-100 scale-100'}`}
        />
        <img
          src={product.imageHover}
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${hovered ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}
        />
        <div className={`absolute bottom-4 left-4 right-4 transition-all duration-300 ${hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <button
            onClick={(e) => {
              e.preventDefault()
              addItem(product, 'gold')
            }}
            className="w-full bg-white/95 text-[hsl(var(--foreground))] uppercase tracking-wider text-xs font-medium py-2.5 rounded-sm hover:bg-white transition-colors shadow-lg"
          >
            Add to Cart
          </button>
        </div>
      </Link>
      <div className="mt-4 text-center">
        <Link to={`/product/${product.id}`} className="product-name text-sm tracking-[0.12em] hover:text-[hsl(var(--accent))] transition-colors">
          {product.name}
        </Link>
        <p className="text-xs text-[hsl(var(--foreground-muted))] mt-1">{product.description}</p>
        <p className="text-sm font-medium mt-2">${product.price}</p>
      </div>
    </div>
  )
}

export default function ShopPage() {
  const [searchParams] = useSearchParams()
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const [sortBy, setSortBy] = useState('featured')

  const initialCategory = searchParams.get('category') || 'all'
  const [selectedCategory, setSelectedCategory] = useState(initialCategory)
  const [selectedMaterial, setSelectedMaterial] = useState('all')
  const [priceRange, setPriceRange] = useState('all')

  const filteredProducts = useMemo(() => {
    let result = [...products]

    if (selectedCategory !== 'all') {
      result = result.filter(p => p.category === selectedCategory)
    }
    if (selectedMaterial !== 'all') {
      result = result.filter(p => p.material.toLowerCase().includes(selectedMaterial.toLowerCase()))
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
      default:
        break
    }

    return result
  }, [selectedCategory, selectedMaterial, priceRange, sortBy])

  const FilterContent = () => (
    <>
      {/* Category */}
      <div className="mb-8">
        <h3 className="serif-heading text-sm tracking-[0.15em] mb-4">Category</h3>
        <div className="space-y-2">
          {[{ id: 'all', name: 'All' }, ...categories].map(cat => (
            <label key={cat.id} className="flex items-center gap-3 cursor-pointer group">
              <input
                type="radio"
                name="category"
                checked={selectedCategory === cat.id}
                onChange={() => setSelectedCategory(cat.id)}
                className="accent-[hsl(var(--accent))]"
              />
              <span className="text-sm text-[hsl(var(--foreground-secondary))] group-hover:text-[hsl(var(--foreground))] transition-colors">
                {cat.name}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Material */}
      <div className="mb-8">
        <h3 className="serif-heading text-sm tracking-[0.15em] mb-4">Material</h3>
        <div className="space-y-2">
          {['all', 'gold', 'silver'].map(mat => (
            <label key={mat} className="flex items-center gap-3 cursor-pointer group">
              <input
                type="radio"
                name="material"
                checked={selectedMaterial === mat}
                onChange={() => setSelectedMaterial(mat)}
                className="accent-[hsl(var(--accent))]"
              />
              <span className="text-sm text-[hsl(var(--foreground-secondary))] group-hover:text-[hsl(var(--foreground))] transition-colors capitalize">
                {mat === 'all' ? 'All' : `${mat} tone`}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Price */}
      <div className="mb-8">
        <h3 className="serif-heading text-sm tracking-[0.15em] mb-4">Price</h3>
        <div className="space-y-2">
          {[
            { id: 'all', name: 'All Prices' },
            { id: '0-50', name: 'Under $50' },
            { id: '50-100', name: '$50 - $100' },
            { id: '100-999', name: 'Over $100' },
          ].map(range => (
            <label key={range.id} className="flex items-center gap-3 cursor-pointer group">
              <input
                type="radio"
                name="price"
                checked={priceRange === range.id}
                onChange={() => setPriceRange(range.id)}
                className="accent-[hsl(var(--accent))]"
              />
              <span className="text-sm text-[hsl(var(--foreground-secondary))] group-hover:text-[hsl(var(--foreground))] transition-colors">
                {range.name}
              </span>
            </label>
          ))}
        </div>
      </div>
    </>
  )

  return (
    <main className="pt-20 md:pt-24">
      <div className="container-padding">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="serif-heading text-3xl md:text-4xl tracking-[0.15em] mb-3">Shop All</h1>
          <p className="text-sm text-[hsl(var(--foreground-secondary))]">
            {filteredProducts.length} piece{filteredProducts.length !== 1 ? 's' : ''}
          </p>
        </div>

        <div className="flex gap-8 lg:gap-12">
          {/* Desktop Sidebar */}
          <aside className="hidden lg:block w-56 flex-shrink-0">
            <div className="sticky top-28">
              <FilterContent />
            </div>
          </aside>

          {/* Mobile filter button */}
          <div className="lg:hidden mb-6 flex items-center justify-between">
            <button
              onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
              className="flex items-center gap-2 text-sm text-[hsl(var(--foreground-secondary))] border border-[hsl(var(--border))] px-4 py-2 rounded-sm"
            >
              <SlidersHorizontal size={16} />
              Filters
            </button>

            {/* Sort dropdown */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none text-sm text-[hsl(var(--foreground-secondary))] border border-[hsl(var(--border))] px-4 py-2 pr-8 rounded-sm bg-transparent cursor-pointer"
              >
                <option value="featured">Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
              <ChevronDown size={14} className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-[hsl(var(--foreground-muted))]" />
            </div>
          </div>

          {/* Mobile filter panel */}
          {mobileFiltersOpen && (
            <div className="lg:hidden fixed inset-0 z-50 bg-[hsl(var(--surface))] overflow-y-auto p-6">
              <div className="flex items-center justify-between mb-8">
                <h2 className="serif-heading text-lg tracking-[0.15em]">Filters</h2>
                <button onClick={() => setMobileFiltersOpen(false)} className="p-2">
                  Close
                </button>
              </div>
              <FilterContent />
              <button
                onClick={() => setMobileFiltersOpen(false)}
                className="btn-primary w-full mt-8"
              >
                Show {filteredProducts.length} Results
              </button>
            </div>
          )}

          {/* Product Grid */}
          <div className="flex-1">
            {/* Desktop sort */}
            <div className="hidden lg:flex justify-end mb-6">
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none text-sm text-[hsl(var(--foreground-secondary))] border border-[hsl(var(--border))] px-4 py-2 pr-8 rounded-sm bg-transparent cursor-pointer"
                >
                  <option value="featured">Featured</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="rating">Top Rated</option>
                </select>
                <ChevronDown size={14} className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-[hsl(var(--foreground-muted))]" />
              </div>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-[hsl(var(--foreground-secondary))] mb-4">No products match your filters</p>
                <button
                  onClick={() => {
                    setSelectedCategory('all')
                    setSelectedMaterial('all')
                    setPriceRange('all')
                  }}
                  className="btn-secondary"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
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
