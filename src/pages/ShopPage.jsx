import { useState, useMemo } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { Star, ShoppingBag, SlidersHorizontal, ChevronDown, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import products from '@/data/products'

function ProductGridCard({ product }) {
  const { addItem } = useCart()
  const [added, setAdded] = useState(false)

  const handleAdd = (e) => {
    e.preventDefault()
    addItem(product, 'Gold')
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
    >
      <div className="relative overflow-hidden rounded-sm aspect-[3/4] mb-4 bg-velmora-ivory">
        <div
          className={`absolute inset-0 bg-gradient-to-br ${product.images[0].bg} transition-transform duration-700 group-hover:scale-105`}
        />
        {product.badge && (
          <span className="absolute top-3 left-3 bg-velmora-surface/90 backdrop-blur-sm text-velmora-accent text-[10px] tracking-[0.1em] uppercase px-2.5 py-1 rounded-sm font-medium">
            {product.badge}
          </span>
        )}
        <div className="absolute inset-x-0 bottom-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <button
            onClick={handleAdd}
            className="btn-accent w-full text-xs py-2.5 bg-velmora-surface text-velmora-text hover:bg-velmora-accent hover:text-white"
          >
            <ShoppingBag className="w-3.5 h-3.5 mr-2" />
            {added ? 'Added!' : `Add to Cart`}
          </button>
        </div>
      </div>

      <h3 className="product-name text-xs md:text-sm text-velmora-text mb-1.5">
        {product.name}
      </h3>
      <div className="flex items-center gap-1.5 mb-1">
        <div className="flex items-center gap-0.5">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-3 h-3 ${
                i < Math.floor(product.rating)
                  ? 'fill-velmora-gold text-velmora-gold'
                  : 'text-velmora-border'
              }`}
            />
          ))}
        </div>
        <span className="text-[10px] text-velmora-text-muted">
          ({product.reviewCount})
        </span>
      </div>
      <p className="text-sm font-medium text-velmora-text">${product.price}</p>
    </Link>
  )
}

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const [sortBy, setSortBy] = useState('featured')

  const activeCategory = searchParams.get('category') || ''
  const activeMaterial = searchParams.get('material') || ''
  const activePrice = searchParams.get('price') || ''

  const setFilter = (key, value) => {
    const next = new URLSearchParams(searchParams)
    if (value) {
      next.set(key, value)
    } else {
      next.delete(key)
    }
    setSearchParams(next)
  }

  const clearAll = () => setSearchParams({})

  const filtered = useMemo(() => {
    let result = [...products]

    if (activeCategory) {
      result = result.filter((p) => p.category === activeCategory)
    }
    if (activeMaterial) {
      result = result.filter((p) => p.material === activeMaterial)
    }
    if (activePrice === 'under50') {
      result = result.filter((p) => p.price < 50)
    } else if (activePrice === '50to100') {
      result = result.filter((p) => p.price >= 50 && p.price <= 100)
    } else if (activePrice === 'over100') {
      result = result.filter((p) => p.price > 100)
    }

    if (sortBy === 'price-low') {
      result.sort((a, b) => a.price - b.price)
    } else if (sortBy === 'price-high') {
      result.sort((a, b) => b.price - a.price)
    } else if (sortBy === 'rating') {
      result.sort((a, b) => b.rating - a.rating)
    }

    return result
  }, [activeCategory, activeMaterial, activePrice, sortBy])

  const hasFilters = activeCategory || activeMaterial || activePrice

  const FilterContent = () => (
    <div className="space-y-7">
      {/* Clear */}
      {hasFilters && (
        <button
          onClick={clearAll}
          className="text-xs tracking-wider uppercase text-velmora-accent hover:text-velmora-accent/80 transition-colors flex items-center gap-1"
        >
          <X className="w-3 h-3" /> Clear All
        </button>
      )}

      {/* Category */}
      <div>
        <h4 className="text-xs tracking-[0.15em] uppercase font-medium text-velmora-text mb-3">
          Category
        </h4>
        <div className="space-y-2">
          {[
            ['', 'All'],
            ['earrings', 'Earrings'],
            ['necklaces', 'Necklaces'],
          ].map(([val, label]) => (
            <button
              key={val}
              onClick={() => setFilter('category', val)}
              className={`block text-sm transition-colors ${
                activeCategory === val
                  ? 'text-velmora-accent font-medium'
                  : 'text-velmora-text-secondary hover:text-velmora-text'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Material */}
      <div>
        <h4 className="text-xs tracking-[0.15em] uppercase font-medium text-velmora-text mb-3">
          Material
        </h4>
        <div className="space-y-2">
          {[
            ['', 'All'],
            ['gold', 'Gold'],
            ['silver', 'Silver'],
          ].map(([val, label]) => (
            <button
              key={val}
              onClick={() => setFilter('material', val)}
              className={`block text-sm transition-colors ${
                activeMaterial === val
                  ? 'text-velmora-accent font-medium'
                  : 'text-velmora-text-secondary hover:text-velmora-text'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h4 className="text-xs tracking-[0.15em] uppercase font-medium text-velmora-text mb-3">
          Price
        </h4>
        <div className="space-y-2">
          {[
            ['', 'All'],
            ['under50', 'Under $50'],
            ['50to100', '$50 – $100'],
            ['over100', 'Over $100'],
          ].map(([val, label]) => (
            <button
              key={val}
              onClick={() => setFilter('price', val)}
              className={`block text-sm transition-colors ${
                activePrice === val
                  ? 'text-velmora-accent font-medium'
                  : 'text-velmora-text-secondary hover:text-velmora-text'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </div>
  )

  return (
    <div className="pt-20 md:pt-24">
      <div className="page-container section-padding">
        {/* Header */}
        <div className="mb-10">
          <h1 className="font-serif text-3xl md:text-4xl text-velmora-text mb-2">
            Shop All
          </h1>
          <p className="text-sm text-velmora-text-secondary">
            {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
          </p>
        </div>

        <div className="flex gap-10">
          {/* Desktop sidebar */}
          <aside className="hidden md:block w-48 flex-shrink-0">
            <FilterContent />
          </aside>

          {/* Mobile filter toggle */}
          <div className="md:hidden w-full mb-6">
            <button
              onClick={() => setMobileFiltersOpen((v) => !v)}
              className="flex items-center gap-2 text-sm text-velmora-text border border-velmora-border rounded-sm px-4 py-2.5 w-full justify-between"
            >
              <span className="flex items-center gap-2">
                <SlidersHorizontal className="w-4 h-4" />
                Filters & Sort
              </span>
              <ChevronDown
                className={`w-4 h-4 transition-transform ${
                  mobileFiltersOpen ? 'rotate-180' : ''
                }`}
              />
            </button>
            {mobileFiltersOpen && (
              <div className="mt-4 p-5 bg-velmora-ivory rounded-sm">
                <FilterContent />
              </div>
            )}
          </div>

          {/* Product grid */}
          <div className="flex-1 min-w-0">
            {/* Sort */}
            <div className="flex items-center justify-end mb-8">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="text-xs text-velmora-text-secondary bg-transparent border border-velmora-border rounded-sm px-3 py-2 outline-none cursor-pointer"
              >
                <option value="featured">Sort: Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
            </div>

            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-velmora-text-secondary mb-4">
                  No products match your filters.
                </p>
                <button
                  onClick={clearAll}
                  className="btn-outline text-xs"
                >
                  Clear All Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7">
                {filtered.map((product) => (
                  <ProductGridCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}