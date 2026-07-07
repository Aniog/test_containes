import React, { useState, useMemo } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { Plus, SlidersHorizontal, X } from 'lucide-react'
import { products, categories } from '../data/products'
import { useCartDispatch } from '../context/CartContext'

const sortOptions = [
  { label: 'Newest', value: 'newest' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Top Rated', value: 'rating' },
]

function ProductGridItem({ product }) {
  const dispatch = useCartDispatch()

  const handleQuickAdd = (e) => {
    e.preventDefault()
    e.stopPropagation()
    dispatch({ type: 'ADD_ITEM', payload: { product } })
  }

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block bg-white"
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-ivory">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <button
          onClick={handleQuickAdd}
          className="absolute bottom-3 right-3 w-9 h-9 bg-white/90 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-gold hover:text-white"
          aria-label={`Quick add ${product.name}`}
        >
          <Plus className="w-4 h-4" />
        </button>
      </div>
      <div className="pt-3 pb-2">
        <h3 className="text-[11px] font-medium tracking-[0.15em] uppercase text-[#1a1a1a]">
          {product.name}
        </h3>
        <p className="text-sm text-taupe mt-0.5">${product.price}</p>
      </div>
    </Link>
  )
}

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false)
  const [sortBy, setSortBy] = useState('newest')

  const activeCategory = searchParams.get('category') || ''
  const activeMaterial = searchParams.get('material') || ''
  const activeMinPrice = searchParams.get('minPrice') || ''
  const activeMaxPrice = searchParams.get('maxPrice') || ''

  const filteredProducts = useMemo(() => {
    let result = [...products]

    if (activeCategory) {
      result = result.filter(
        (p) => p.category.toLowerCase() === activeCategory.toLowerCase()
      )
    }

    if (activeMaterial) {
      result = result.filter((p) =>
        p.material.toLowerCase().includes(activeMaterial.toLowerCase())
      )
    }

    if (activeMinPrice) {
      result = result.filter((p) => p.price >= Number(activeMinPrice))
    }
    if (activeMaxPrice) {
      result = result.filter((p) => p.price <= Number(activeMaxPrice))
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
  }, [activeCategory, activeMaterial, activeMinPrice, activeMaxPrice, sortBy])

  const setFilter = (key, value) => {
    const params = new URLSearchParams(searchParams)
    if (value) {
      params.set(key, value)
    } else {
      params.delete(key)
    }
    setSearchParams(params)
  }

  const clearFilters = () => {
    setSearchParams({})
  }

  const hasActiveFilters = activeCategory || activeMaterial || activeMinPrice || activeMaxPrice

  const FilterContent = () => (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h4 className="text-[11px] font-medium tracking-[0.12em] uppercase text-[#1a1a1a] mb-3">
          Category
        </h4>
        <div className="space-y-2">
          {categories.map((cat) => (
            <button
              key={cat.slug}
              onClick={() =>
                setFilter('category', activeCategory === cat.slug ? '' : cat.slug)
              }
              className={`block text-sm w-full text-left py-1 transition-colors duration-300 ${
                activeCategory === cat.slug
                  ? 'text-gold font-medium'
                  : 'text-taupe hover:text-[#1a1a1a]'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h4 className="text-[11px] font-medium tracking-[0.12em] uppercase text-[#1a1a1a] mb-3">
          Price Range
        </h4>
        <div className="flex items-center gap-2">
          <input
            type="number"
            placeholder="Min"
            value={activeMinPrice}
            onChange={(e) => setFilter('minPrice', e.target.value)}
            className="w-full border border-warm-border px-3 py-2 text-sm outline-none focus:border-gold transition-colors bg-transparent"
          />
          <span className="text-taupe text-xs">—</span>
          <input
            type="number"
            placeholder="Max"
            value={activeMaxPrice}
            onChange={(e) => setFilter('maxPrice', e.target.value)}
            className="w-full border border-warm-border px-3 py-2 text-sm outline-none focus:border-gold transition-colors bg-transparent"
          />
        </div>
      </div>

      {/* Material */}
      <div>
        <h4 className="text-[11px] font-medium tracking-[0.12em] uppercase text-[#1a1a1a] mb-3">
          Material
        </h4>
        <div className="space-y-2">
          {['18K Gold Plated'].map((mat) => (
            <button
              key={mat}
              onClick={() =>
                setFilter('material', activeMaterial === mat ? '' : mat)
              }
              className={`block text-sm w-full text-left py-1 transition-colors duration-300 ${
                activeMaterial === mat
                  ? 'text-gold font-medium'
                  : 'text-taupe hover:text-[#1a1a1a]'
              }`}
            >
              {mat}
            </button>
          ))}
        </div>
      </div>

      {hasActiveFilters && (
        <button
          onClick={clearFilters}
          className="text-xs text-taupe underline hover:text-[#1a1a1a] transition-colors"
        >
          Clear all filters
        </button>
      )}
    </div>
  )

  return (
    <div className="min-h-screen bg-ivory pt-24 md:pt-28">
      <div className="max-w-7xl mx-auto px-6 pb-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="font-serif text-3xl md:text-4xl text-[#1a1a1a] font-semibold">
              {activeCategory
                ? activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1)
                : 'All Jewelry'}
            </h1>
            <p className="text-sm text-taupe mt-1">{filteredProducts.length} pieces</p>
          </div>

          <div className="flex items-center gap-4">
            {/* Mobile filter toggle */}
            <button
              onClick={() => setMobileFilterOpen(true)}
              className="md:hidden flex items-center gap-1.5 text-[11px] tracking-wider uppercase text-taupe hover:text-[#1a1a1a] transition-colors"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
            </button>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="text-[11px] tracking-wider uppercase bg-transparent border border-warm-border px-3 py-2 outline-none text-taupe focus:border-gold transition-colors"
            >
              {sortOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-20">
        <div className="flex gap-10">
          {/* Desktop sidebar */}
          <aside className="hidden md:block w-56 flex-shrink-0">
            <FilterContent />
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-taupe">No pieces match your filters.</p>
                <button
                  onClick={clearFilters}
                  className="text-gold underline text-sm mt-2"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product) => (
                  <ProductGridItem key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      <div
        className={`fixed inset-0 z-50 md:hidden transition-opacity duration-300 ${
          mobileFilterOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-black/40"
          onClick={() => setMobileFilterOpen(false)}
        />
        <div
          className={`absolute top-0 left-0 h-full w-80 max-w-[85vw] bg-ivory p-6 transform transition-transform duration-300 ${
            mobileFilterOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-[11px] font-medium tracking-[0.12em] uppercase text-[#1a1a1a]">
              Filters
            </h3>
            <button
              onClick={() => setMobileFilterOpen(false)}
              className="p-1"
              aria-label="Close filters"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <FilterContent />
        </div>
      </div>
    </div>
  )
}