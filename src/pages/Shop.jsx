import { useState, useMemo } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, X } from 'lucide-react'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'

const allCategories = ['Earrings', 'Necklaces', 'Huggies', 'Sets']
const priceRanges = [
  { label: 'Under $50', min: 0, max: 50 },
  { label: '$50 - $75', min: 50, max: 75 },
  { label: '$75 - $100', min: 75, max: 100 },
  { label: 'Over $100', min: 100, max: Infinity },
]

function ShopProductCard({ product }) {
  const { addItem } = useCart()
  const [hovered, setHovered] = useState(false)
  const [imgLoaded, setImgLoaded] = useState(false)

  return (
    <div
      className="group relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative aspect-[3/4] overflow-hidden bg-warm-beige/20 rounded-sm">
          {!imgLoaded && <div className="absolute inset-0 bg-warm-beige/10 animate-pulse" />}
          <img
            src={hovered && product.images[1] ? product.images[1] : product.images[0]}
            alt={product.name}
            className={`w-full h-full object-cover transition-all duration-500 ${
              hovered ? 'scale-105' : 'scale-100'
            } ${imgLoaded ? 'opacity-100' : 'opacity-0'}`}
            onLoad={() => setImgLoaded(true)}
          />
        </div>
      </Link>
      <button
        onClick={() => addItem(product)}
        className={`absolute bottom-3 left-3 right-3 bg-charcoal/90 text-white text-xs font-sans uppercase tracking-[0.12em] py-2.5 transition-all duration-300 rounded-sm hover:bg-charcoal ${
          hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
        }`}
      >
        Quick Add
      </button>
      <div className="mt-3 text-center">
        <h3 className="product-name">{product.name}</h3>
        <p className="text-sm font-sans text-warm-gray mt-1">${product.price}</p>
      </div>
    </div>
  )
}

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false)

  const activeCategory = searchParams.get('category') || ''
  const activePrice = searchParams.get('price') || ''
  const sortBy = searchParams.get('sort') || 'featured'

  const filteredProducts = useMemo(() => {
    let result = [...products]

    if (activeCategory) {
      const cat = activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1)
      result = result.filter(p => p.category === cat)
    }

    if (activePrice) {
      const range = priceRanges.find(r => r.label === activePrice)
      if (range) {
        result = result.filter(p => p.price >= range.min && p.price < range.max)
      }
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
      default:
        break
    }

    return result
  }, [activeCategory, activePrice, sortBy])

  const updateFilter = (key, value) => {
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

  const hasActiveFilters = activeCategory || activePrice

  const FilterContent = () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-xs uppercase tracking-[0.12em] font-sans font-medium text-charcoal mb-4">Category</h3>
        <div className="space-y-2.5">
          <button
            onClick={() => updateFilter('category', '')}
            className={`block text-sm font-sans transition-colors ${
              !activeCategory ? 'text-charcoal font-medium' : 'text-warm-gray hover:text-charcoal'
            }`}
          >
            All
          </button>
          {allCategories.map(cat => (
            <button
              key={cat}
              onClick={() => updateFilter('category', cat.toLowerCase())}
              className={`block text-sm font-sans transition-colors ${
                activeCategory === cat.toLowerCase() ? 'text-charcoal font-medium' : 'text-warm-gray hover:text-charcoal'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="hairline" />

      <div>
        <h3 className="text-xs uppercase tracking-[0.12em] font-sans font-medium text-charcoal mb-4">Price</h3>
        <div className="space-y-2.5">
          <button
            onClick={() => updateFilter('price', '')}
            className={`block text-sm font-sans transition-colors ${
              !activePrice ? 'text-charcoal font-medium' : 'text-warm-gray hover:text-charcoal'
            }`}
          >
            All Prices
          </button>
          {priceRanges.map(range => (
            <button
              key={range.label}
              onClick={() => updateFilter('price', range.label)}
              className={`block text-sm font-sans transition-colors ${
                activePrice === range.label ? 'text-charcoal font-medium' : 'text-warm-gray hover:text-charcoal'
              }`}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>

      {hasActiveFilters && (
        <button
          onClick={clearFilters}
          className="text-xs text-[#C9A96E] hover:text-[#B8954A] font-sans uppercase tracking-[0.1em] transition-colors"
        >
          Clear All Filters
        </button>
      )}
    </div>
  )

  return (
    <div className="pt-20 md:pt-24 pb-16">
      <div className="max-w-content mx-auto px-4 md:px-8">
        <div className="mb-8">
          <h1 className="font-serif text-3xl md:text-4xl">Shop</h1>
          <p className="text-warm-gray font-sans text-sm mt-2">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
          </p>
        </div>

        <div className="flex gap-8">
          <aside className="hidden md:block w-56 flex-shrink-0">
            <FilterContent />
          </aside>

          <div className="md:hidden flex items-center justify-between mb-4 w-full">
            <button
              onClick={() => setMobileFilterOpen(true)}
              className="flex items-center gap-2 text-sm font-sans uppercase tracking-[0.1em]"
            >
              <SlidersHorizontal className="w-4 h-4" /> Filters
              {hasActiveFilters && <span className="w-2 h-2 rounded-full bg-[#C9A96E]" />}
            </button>
            <select
              value={sortBy}
              onChange={e => updateFilter('sort', e.target.value)}
              className="text-xs font-sans uppercase tracking-[0.1em] bg-transparent border border-warm-beige px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#C9A96E]"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Rating</option>
            </select>
          </div>

          <div className="flex-1">
            <div className="hidden md:flex items-center justify-between mb-6">
              {hasActiveFilters && (
                <div className="flex gap-2">
                  {activeCategory && (
                    <span className="text-xs font-sans bg-warm-beige/50 px-3 py-1.5 rounded flex items-center gap-1.5">
                      {activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1)}
                      <button onClick={() => updateFilter('category', '')}><X className="w-3 h-3" /></button>
                    </span>
                  )}
                  {activePrice && (
                    <span className="text-xs font-sans bg-warm-beige/50 px-3 py-1.5 rounded flex items-center gap-1.5">
                      {activePrice}
                      <button onClick={() => updateFilter('price', '')}><X className="w-3 h-3" /></button>
                    </span>
                  )}
                </div>
              )}
              <div className="ml-auto">
                <select
                  value={sortBy}
                  onChange={e => updateFilter('sort', e.target.value)}
                  className="text-xs font-sans uppercase tracking-[0.1em] bg-transparent border border-warm-beige px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#C9A96E]"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Rating</option>
                </select>
              </div>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-warm-gray font-sans mb-4">No products match your filters.</p>
                <button onClick={clearFilters} className="btn-primary text-sm">Clear Filters</button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map(product => (
                  <ShopProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {mobileFilterOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="absolute inset-0 bg-black/40" onClick={() => setMobileFilterOpen(false)} />
          <div className="absolute right-0 top-0 bottom-0 w-72 bg-cream p-6 overflow-y-auto shadow-xl">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-serif text-sm uppercase tracking-[0.15em]">Filters</h2>
              <button onClick={() => setMobileFilterOpen(false)} className="p-1">
                <X className="w-5 h-5" />
              </button>
            </div>
            <FilterContent />
          </div>
        </div>
      )}
    </div>
  )
}