import React, { useState, useEffect, useRef } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { Star, ShoppingBag, SlidersHorizontal, ChevronDown } from 'lucide-react'
import { products } from '../../data/products'
import { useCart } from '../../context/CartContext'

function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false)
  const { addItem } = useCart()

  return (
    <div
      className="group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.id}`}>
        <div className="relative aspect-[3/4] bg-gradient-to-br from-[#d4c5b2] to-[#c9b896] overflow-hidden mb-4 flex items-center justify-center">
          <span className="text-[#6b6560] text-xs uppercase tracking-wider">{product.name}</span>
        </div>
      </Link>

      <h3 className="product-name text-center">
        <Link to={`/product/${product.id}`}>{product.name}</Link>
      </h3>
      <p className="text-xs text-[#6b6560] text-center mt-1">{product.description}</p>
      <div className="flex items-center justify-center gap-1 mt-2">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={12}
            className={i < Math.floor(product.rating) ? 'text-[#c9a96e] fill-[#c9a96e]' : 'text-[#d4c5b2]'}
          />
        ))}
        <span className="text-xs text-[#6b6560] ml-1">({product.reviews})</span>
      </div>
      <div className="flex items-center justify-center gap-2 mt-2">
        <p className="font-medium">${product.price}</p>
        <button
          onClick={() => addItem(product, product.variants[0])}
          className="text-xs text-[#c9a96e] hover:text-[#b8944f] transition-colors flex items-center gap-1"
        >
          <ShoppingBag size={12} />
          Add
        </button>
      </div>
    </div>
  )
}

export default function ShopPage() {
  const [searchParams] = useSearchParams()
  const [filterCategory, setFilterCategory] = useState(searchParams.get('category') || 'all')
  const [filterPrice, setFilterPrice] = useState('all')
  const [filterMaterial, setFilterMaterial] = useState('all')
  const [sortBy, setSortBy] = useState('featured')
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const containerRef = useRef(null)

  useEffect(() => {
    const cat = searchParams.get('category')
    if (cat) setFilterCategory(cat)
  }, [searchParams])

  let filtered = products.filter(p => {
    if (filterCategory !== 'all' && p.category !== filterCategory) return false
    if (filterMaterial !== 'all' && p.material !== filterMaterial) return false
    if (filterPrice === 'under50' && p.price >= 50) return false
    if (filterPrice === '50to75' && (p.price < 50 || p.price > 75)) return false
    if (filterPrice === 'over75' && p.price <= 75) return false
    return true
  })

  if (sortBy === 'price-asc') filtered.sort((a, b) => a.price - b.price)
  if (sortBy === 'price-desc') filtered.sort((a, b) => b.price - a.price)
  if (sortBy === 'rating') filtered.sort((a, b) => b.rating - a.rating)
  if (sortBy === 'name') filtered.sort((a, b) => a.name.localeCompare(b.name))

  const FilterContent = () => (
    <>
      <div className="mb-6">
        <h4 className="text-xs uppercase tracking-wider mb-3">Category</h4>
        <div className="space-y-2">
          {[
            { value: 'all', label: 'All' },
            { value: 'earrings', label: 'Earrings' },
            { value: 'necklaces', label: 'Necklaces' },
            { value: 'huggies', label: 'Huggies' },
          ].map(opt => (
            <label key={opt.value} className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="category"
                checked={filterCategory === opt.value}
                onChange={() => setFilterCategory(opt.value)}
                className="accent-[#c9a96e]"
              />
              <span className="text-sm">{opt.label}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h4 className="text-xs uppercase tracking-wider mb-3">Price</h4>
        <div className="space-y-2">
          {[
            { value: 'all', label: 'All Prices' },
            { value: 'under50', label: 'Under $50' },
            { value: '50to75', label: '$50 - $75' },
            { value: 'over75', label: 'Over $75' },
          ].map(opt => (
            <label key={opt.value} className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="price"
                checked={filterPrice === opt.value}
                onChange={() => setFilterPrice(opt.value)}
                className="accent-[#c9a96e]"
              />
              <span className="text-sm">{opt.label}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h4 className="text-xs uppercase tracking-wider mb-3">Material</h4>
        <div className="space-y-2">
          {[
            { value: 'all', label: 'All' },
            { value: 'gold', label: 'Gold' },
            { value: 'silver', label: 'Silver' },
          ].map(opt => (
            <label key={opt.value} className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="material"
                checked={filterMaterial === opt.value}
                onChange={() => setFilterMaterial(opt.value)}
                className="accent-[#c9a96e]"
              />
              <span className="text-sm">{opt.label}</span>
            </label>
          ))}
        </div>
      </div>
    </>
  )

  return (
    <div ref={containerRef} className="pt-20 md:pt-24">
      {/* Header */}
      <div className="container-padding py-8">
        <h1 className="font-['Cormorant_Garamond'] text-3xl md:text-4xl text-center mb-2">
          All Jewelry
        </h1>
        <p className="text-[#6b6560] text-sm text-center">
          {filtered.length} piece{filtered.length !== 1 ? 's' : ''}
        </p>
      </div>

      <div className="container-padding pb-16">
        <div className="flex gap-8">
          {/* Desktop sidebar */}
          <aside className="hidden md:block w-56 flex-shrink-0">
            <div className="sticky top-24">
              <FilterContent />
            </div>
          </aside>

          {/* Mobile filter toggle */}
          <div className="md:hidden w-full">
            <button
              onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
              className="flex items-center gap-2 text-sm mb-4"
            >
              <SlidersHorizontal size={16} />
              Filters
              <ChevronDown size={14} className={`transition-transform ${mobileFiltersOpen ? 'rotate-180' : ''}`} />
            </button>
            {mobileFiltersOpen && (
              <div className="bg-white p-4 mb-4 border border-[#e8e2db]">
                <FilterContent />
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
                className="text-sm border border-[#d4c5b2] bg-transparent px-3 py-2 focus:border-[#c9a96e] focus:outline-none"
              >
                <option value="featured">Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="name">Name A-Z</option>
              </select>
            </div>

            {filtered.length === 0 ? (
              <div className="text-center py-16">
                <p className="font-['Cormorant_Garamond'] text-xl mb-2">No pieces found</p>
                <p className="text-sm text-[#6b6560]">Try adjusting your filters</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filtered.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
