import React, { useState, useMemo } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { Star, ShoppingBag, SlidersHorizontal, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { products } from '@/data/products'
import { Button } from '@/components/ui/button'

const allCategories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets']

export default function ShopPage() {
  const { addItem } = useCart()
  const [searchParams, setSearchParams] = useSearchParams()
  const [hoveredId, setHoveredId] = useState(null)
  const [mobileFilters, setMobileFilters] = useState(false)
  const [priceRange, setPriceRange] = useState([0, 200])
  const [material, setMaterial] = useState('All')

  const activeCategory = searchParams.get('category') || 'All'
  const sortBy = searchParams.get('sort') || 'featured'

  const setCategory = (cat) => {
    const params = new URLSearchParams(searchParams)
    if (cat === 'All') {
      params.delete('category')
    } else {
      params.set('category', cat)
    }
    setSearchParams(params)
  }

  const setSort = (sort) => {
    const params = new URLSearchParams(searchParams)
    if (sort === 'featured') {
      params.delete('sort')
    } else {
      params.set('sort', sort)
    }
    setSearchParams(params)
  }

  const filtered = useMemo(() => {
    let result = [...products]
    if (activeCategory !== 'All') {
      result = result.filter((p) => p.category === activeCategory)
    }
    result = result.filter((p) => p.price >= priceRange[0] && p.price <= priceRange[1])
    if (material !== 'All') {
      result = result.filter((p) => p.variants.includes(material))
    }
    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price)
        break
      case 'price-high':
        result.sort((a, b) => b.price - a.price)
        break
      case 'rating':
        result.sort((a, b) => b.rating - a.rating)
        break
      case 'newest':
        result.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0))
        break
      default:
        result.sort((a, b) => (b.isBestseller ? 1 : 0) - (a.isBestseller ? 1 : 0))
    }
    return result
  }, [activeCategory, priceRange, material, sortBy])

  const FiltersPanel = () => (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h4 className="text-xs uppercase tracking-[0.15em] font-medium mb-4">Category</h4>
        <div className="space-y-2.5">
          {allCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`block text-sm w-full text-left transition-colors ${
                activeCategory === cat ? 'text-gold font-medium' : 'text-charcoal-light hover:text-charcoal'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <hr className="hairline" />

      {/* Price */}
      <div>
        <h4 className="text-xs uppercase tracking-[0.15em] font-medium mb-4">Price Range</h4>
        <div className="space-y-2">
          <input
            type="range"
            min={0}
            max={200}
            step={10}
            value={priceRange[1]}
            onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
            className="w-full accent-gold"
          />
          <div className="flex justify-between text-xs text-charcoal-light">
            <span>${priceRange[0]}</span>
            <span>${priceRange[1]}</span>
          </div>
        </div>
      </div>

      <hr className="hairline" />

      {/* Material */}
      <div>
        <h4 className="text-xs uppercase tracking-[0.15em] font-medium mb-4">Material</h4>
        <div className="space-y-2.5">
          {['All', 'Gold', 'Silver'].map((m) => (
            <button
              key={m}
              onClick={() => setMaterial(m)}
              className={`block text-sm w-full text-left transition-colors ${
                material === m ? 'text-gold font-medium' : 'text-charcoal-light hover:text-charcoal'
              }`}
            >
              {m}
            </button>
          ))}
        </div>
      </div>
    </div>
  )

  return (
    <main className="pt-20 md:pt-24 pb-16 md:pb-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-8 md:mb-12">
          <h1 className="text-3xl md:text-4xl font-serif font-medium">Shop</h1>
          <p className="text-charcoal-light text-sm mt-2">Demi-fine jewelry, crafted to be treasured.</p>
        </div>

        <div className="flex gap-10">
          {/* Desktop sidebar */}
          <aside className="hidden md:block w-56 shrink-0">
            <FiltersPanel />
          </aside>

          {/* Main */}
          <div className="flex-1 min-w-0">
            {/* Controls bar */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-border-light">
              <p className="text-sm text-charcoal-light">
                {filtered.length} product{filtered.length !== 1 ? 's' : ''}
              </p>
              <div className="flex items-center gap-4">
                <button
                  className="md:hidden flex items-center gap-2 text-xs uppercase tracking-[0.12em] font-medium"
                  onClick={() => setMobileFilters(true)}
                >
                  <SlidersHorizontal size={14} />
                  Filters
                </button>
                <select
                  value={sortBy}
                  onChange={(e) => setSort(e.target.value)}
                  className="text-xs uppercase tracking-[0.08em] bg-transparent border-b border-charcoal/20 pb-1 pr-4 focus:outline-none cursor-pointer"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                  <option value="newest">Newest</option>
                </select>
              </div>
            </div>

            {/* Product grid */}
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-charcoal-light">No products match your filters.</p>
                <button
                  onClick={() => { setCategory('All'); setPriceRange([0, 200]); setMaterial('All') }}
                  className="mt-4 text-xs uppercase tracking-[0.15em] text-gold font-medium hover:opacity-70"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filtered.map((product) => (
                  <div
                    key={product.id}
                    className="group"
                    onMouseEnter={() => setHoveredId(product.id)}
                    onMouseLeave={() => setHoveredId(null)}
                  >
                    <Link to={`/product/${product.id}`} className="block relative aspect-[3/4] overflow-hidden bg-warm-ivory">
                      <img
                        src={hoveredId === product.id && product.hoverImage ? product.hoverImage : product.images[0]}
                        alt={product.name}
                        className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                      />
                      {product.isNew && (
                        <span className="absolute top-3 left-3 bg-gold text-white text-[10px] uppercase tracking-[0.12em] px-2.5 py-1 font-medium">
                          New
                        </span>
                      )}
                      <button
                        onClick={(e) => {
                          e.preventDefault()
                          addItem({
                            id: product.id,
                            name: product.name,
                            price: product.price,
                            image: product.images[0],
                            variant: product.variants[0],
                          })
                        }}
                        className="absolute bottom-3 left-3 right-3 bg-white/90 backdrop-blur-sm text-charcoal text-[11px] uppercase tracking-[0.12em] font-medium py-2.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 hover:bg-white"
                      >
                        <ShoppingBag size={14} />
                        Add to Cart
                      </button>
                    </Link>

                    <div className="mt-3">
                      <Link to={`/product/${product.id}`}>
                        <h3 className="text-product-name truncate">{product.name}</h3>
                      </Link>
                      <div className="flex items-center gap-1 mt-1">
                        <Star size={12} className="text-gold fill-gold" />
                        <span className="text-[11px] text-charcoal-light">{product.rating}</span>
                      </div>
                      <p className="text-sm font-medium mt-1">${product.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      <div
        className={`fixed inset-0 z-50 md:hidden transition-opacity duration-300 ${
          mobileFilters ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-black/30" onClick={() => setMobileFilters(false)} />
        <div className={`absolute left-0 top-0 bottom-0 w-72 bg-white-soft p-6 transform transition-transform duration-300 ${
          mobileFilters ? 'translate-x-0' : '-translate-x-full'
        }`}>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-sm font-medium">Filters</h3>
            <button onClick={() => setMobileFilters(false)} className="p-1">
              <X size={18} />
            </button>
          </div>
          <FiltersPanel />
        </div>
      </div>
    </main>
  )
}