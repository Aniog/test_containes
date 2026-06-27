import { useState, useMemo } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { ShoppingBag, SlidersHorizontal, X, ChevronDown } from 'lucide-react'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'

const SORT_OPTIONS = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
]

const PRICE_RANGES = [
  { value: 'all', label: 'All Prices' },
  { value: 'under-50', label: 'Under $50' },
  { value: '50-80', label: '$50 – $80' },
  { value: 'over-80', label: 'Over $80' },
]

const MATERIALS = [
  { value: 'all', label: 'All Materials' },
  { value: 'gold', label: 'Gold Tone' },
  { value: 'silver', label: 'Silver Tone' },
]

const ProductGridCard = ({ product }) => {
  const [hovered, setHovered] = useState(false)
  const { addItem } = useCart()

  return (
    <div
      className="group relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative aspect-[3x4] overflow-hidden bg-velmora-elevated">
          <img
            data-strk-img-id={product.imgId}
            data-strk-img={`[${product.descId}] [${product.titleId}]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className={`w-full h-full object-cover transition-transform duration-500 ${hovered ? 'scale-105' : 'scale-100'}`}
          />
          <img
            data-strk-img-id={product.imgIdHover}
            data-strk-img={`[${product.descId}] [${product.titleId}] hover`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${hovered ? 'opacity-100' : 'opacity-0'}`}
          />
        </div>
      </Link>

      <button
        onClick={(e) => {
          e.preventDefault()
          addItem(product, 'gold', 1)
        }}
        className={`absolute bottom-3 left-1/2 -translate-x-1/2 bg-velmora-gold text-velmora-black px-5 py-2 text-[10px] font-semibold uppercase tracking-[0.15em] flex items-center gap-2 transition-all duration-300 ${
          hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
        }`}
      >
        <ShoppingBag className="w-3.5 h-3.5" />
        Add to Cart
      </button>

      <div className="mt-4">
        <Link to={`/product/${product.id}`}>
          <h3
            id={product.titleId}
            className="font-serif text-sm md:text-base uppercase tracking-[0.15em] text-velmora-text group-hover:text-velmora-gold transition-colors"
          >
            {product.name}
          </h3>
        </Link>
        <p
          id={product.descId}
          className="text-xs text-velmora-muted mt-1"
        >
          {product.shortDescription}
        </p>
        <p className="text-sm text-velmora-gold mt-2">${product.price}</p>
      </div>
    </div>
  )
}

const ShopPage = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  const category = searchParams.get('category') || 'all'
  const sort = searchParams.get('sort') || 'featured'
  const priceRange = searchParams.get('price') || 'all'
  const material = searchParams.get('material') || 'all'

  const setFilter = (key, value) => {
    const params = new URLSearchParams(searchParams)
    if (value === 'all') {
      params.delete(key)
    } else {
      params.set(key, value)
    }
    setSearchParams(params)
  }

  const filteredProducts = useMemo(() => {
    let result = [...products]

    if (category !== 'all') {
      result = result.filter((p) => p.category === category)
    }

    if (priceRange === 'under-50') {
      result = result.filter((p) => p.price < 50)
    } else if (priceRange === '50-80') {
      result = result.filter((p) => p.price >= 50 && p.price <= 80)
    } else if (priceRange === 'over-80') {
      result = result.filter((p) => p.price > 80)
    }

    if (material === 'gold') {
      result = result.filter((p) => p.tone.includes('gold'))
    } else if (material === 'silver') {
      result = result.filter((p) => p.tone.includes('silver'))
    }

    if (sort === 'price-asc') {
      result.sort((a, b) => a.price - b.price)
    } else if (sort === 'price-desc') {
      result.sort((a, b) => b.price - a.price)
    } else if (sort === 'rating') {
      result.sort((a, b) => b.rating - a.rating)
    }

    return result
  }, [category, sort, priceRange, material])

  const FilterContent = () => (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h3 className="text-xs font-sans font-semibold uppercase tracking-[0.15em] text-velmora-text mb-4">
          Category
        </h3>
        <div className="space-y-2.5">
          {['all', 'earrings', 'necklaces', 'huggies'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter('category', cat)}
              className={`block w-full text-left text-sm transition-colors ${
                category === cat ? 'text-velmora-gold' : 'text-velmora-muted hover:text-velmora-text'
              }`}
            >
              {cat === 'all' ? 'All Jewelry' : cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h3 className="text-xs font-sans font-semibold uppercase tracking-[0.15em] text-velmora-text mb-4">
          Price
        </h3>
        <div className="space-y-2.5">
          {PRICE_RANGES.map((range) => (
            <button
              key={range.value}
              onClick={() => setFilter('price', range.value)}
              className={`block w-full text-left text-sm transition-colors ${
                priceRange === range.value ? 'text-velmora-gold' : 'text-velmora-muted hover:text-velmora-text'
              }`}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>

      {/* Material */}
      <div>
        <h3 className="text-xs font-sans font-semibold uppercase tracking-[0.15em] text-velmora-text mb-4">
          Material
        </h3>
        <div className="space-y-2.5">
          {MATERIALS.map((mat) => (
            <button
              key={mat.value}
              onClick={() => setFilter('material', mat.value)}
              className={`block w-full text-left text-sm transition-colors ${
                material === mat.value ? 'text-velmora-gold' : 'text-velmora-muted hover:text-velmora-text'
              }`}
            >
              {mat.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  )

  return (
    <div className="pt-20 md:pt-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-10 md:py-16">
        {/* Header */}
        <div className="mb-10 md:mb-14">
          <h1 className="font-serif text-3xl md:text-4xl text-velmora-text tracking-wide">
            {category === 'all' ? 'All Jewelry' : category.charAt(0).toUpperCase() + category.slice(1)}
          </h1>
          <div className="w-12 h-px bg-velmora-gold mt-5" />
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 pb-5 border-b border-velmora-border">
          <button
            onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
            className="md:hidden flex items-center gap-2 text-xs font-medium uppercase tracking-[0.15em] text-velmora-muted hover:text-velmora-gold transition-colors"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>

          <p className="hidden md:block text-xs text-velmora-dim uppercase tracking-wider">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
          </p>

          {/* Sort */}
          <div className="relative">
            <select
              value={sort}
              onChange={(e) => setFilter('sort', e.target.value)}
              className="appearance-none bg-transparent text-xs text-velmora-muted uppercase tracking-wider pr-6 cursor-pointer focus:outline-none"
            >
              {SORT_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value} className="bg-velmora-dark text-velmora-text">
                  {opt.label}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 text-velmora-dim pointer-events-none" />
          </div>
        </div>

        <div className="flex gap-10">
          {/* Desktop sidebar */}
          <aside className="hidden md:block w-52 flex-shrink-0">
            <FilterContent />
          </aside>

          {/* Mobile filters */}
          {mobileFiltersOpen && (
            <div className="md:hidden fixed inset-0 z-50 bg-velmora-black/95 backdrop-blur-md p-6 overflow-y-auto">
              <div className="flex items-center justify-between mb-8">
                <h2 className="font-serif text-lg uppercase tracking-[0.15em] text-velmora-text">Filters</h2>
                <button onClick={() => setMobileFiltersOpen(false)} className="text-velmora-muted">
                  <X className="w-5 h-5" />
                </button>
              </div>
              <FilterContent />
              <button
                onClick={() => setMobileFiltersOpen(false)}
                className="w-full mt-8 bg-velmora-gold text-velmora-black py-3 text-xs font-semibold uppercase tracking-[0.15em]"
              >
                Apply Filters
              </button>
            </div>
          )}

          {/* Product grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-velmora-muted mb-4">No pieces match your filters</p>
                <button
                  onClick={() => setSearchParams({})}
                  className="text-xs font-medium uppercase tracking-[0.15em] text-velmora-gold hover:text-velmora-gold-light transition-colors"
                >
                  Clear All Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
                {filteredProducts.map((product) => (
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

export default ShopPage
