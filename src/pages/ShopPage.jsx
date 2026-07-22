import { useState, useEffect, useRef, useMemo } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'

const categories = [
  { value: '', label: 'All Categories' },
  { value: 'earrings', label: 'Earrings' },
  { value: 'necklaces', label: 'Necklaces' },
  { value: 'huggies', label: 'Huggies' },
  { value: 'sets', label: 'Gift Sets' },
]

const priceRanges = [
  { value: '', label: 'All Prices' },
  { value: '0-40', label: 'Under $40' },
  { value: '40-60', label: '$40 - $60' },
  { value: '60-100', label: '$60 - $100' },
  { value: '100-200', label: '$100+' },
]

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Highest Rated' },
]

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const { addItem } = useCart()
  const pageRef = useRef(null)
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  const category = searchParams.get('category') || ''
  const priceRange = searchParams.get('price') || ''
  const sort = searchParams.get('sort') || 'featured'

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, pageRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [searchParams])

  const updateFilter = (key, value) => {
    const params = new URLSearchParams(searchParams)
    if (value) {
      params.set(key, value)
    } else {
      params.delete(key)
    }
    setSearchParams(params)
  }

  const filteredProducts = useMemo(() => {
    let result = [...products]

    if (category) {
      result = result.filter((p) => p.category === category)
    }
    if (priceRange) {
      const [min, max] = priceRange.split('-').map(Number)
      result = result.filter((p) => {
        if (max) return p.price >= min && p.price <= max
        return p.price >= min
      })
    }
    if (sort === 'price-asc') {
      result.sort((a, b) => a.price - b.price)
    } else if (sort === 'price-desc') {
      result.sort((a, b) => b.price - a.price)
    } else if (sort === 'rating') {
      result.sort((a, b) => b.rating - a.rating)
    }
    return result
  }, [category, priceRange, sort])

  const activeFilters = [category, priceRange].filter(Boolean)

  const handleAddToCart = (product, e) => {
    e.preventDefault()
    e.stopPropagation()
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      variant: 'Gold',
      quantity: 1,
      image: product.images[0],
    })
  }

  const FilterSidebar = ({ mobile = false }) => (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h3 className="text-xs tracking-widest uppercase font-sans font-medium text-velmora-700 mb-3">
          Category
        </h3>
        <div className="space-y-2">
          {categories.map((c) => (
            <button
              key={c.value}
              onClick={() => updateFilter('category', c.value)}
              className={`block w-full text-left text-sm font-sans py-1.5 transition-colors ${
                category === c.value
                  ? 'text-velmora-900 font-medium'
                  : 'text-velmora-500 hover:text-velmora-700'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h3 className="text-xs tracking-widest uppercase font-sans font-medium text-velmora-700 mb-3">
          Price
        </h3>
        <div className="space-y-2">
          {priceRanges.map((p) => (
            <button
              key={p.value}
              onClick={() => updateFilter('price', p.value)}
              className={`block w-full text-left text-sm font-sans py-1.5 transition-colors ${
                priceRange === p.value
                  ? 'text-velmora-900 font-medium'
                  : 'text-velmora-500 hover:text-velmora-700'
              }`}
            >
              {p.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  )

  return (
    <main ref={pageRef} className="pt-20 md:pt-24 pb-16 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page header */}
        <div className="mb-8">
          <h1 className="section-heading">Shop</h1>
          <p className="section-subheading mt-2">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
          </p>
        </div>

        <div className="flex gap-8 lg:gap-12">
          {/* Desktop sidebar */}
          <aside className="hidden md:block w-52 lg:w-60 flex-shrink-0">
            <FilterSidebar />
          </aside>

          {/* Main content */}
          <div className="flex-1 min-w-0">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-6">
              {/* Mobile filter button */}
              <button
                onClick={() => setMobileFiltersOpen(true)}
                className="md:hidden flex items-center gap-2 text-xs tracking-wider uppercase font-sans font-medium text-velmora-700"
              >
                <SlidersHorizontal className="w-3.5 h-3.5" />
                Filters
              </button>

              <div className="hidden md:block" />

              {/* Active filters */}
              <div className="flex items-center gap-2 flex-wrap">
                {activeFilters.map((f) => (
                  <span
                    key={f}
                    className="inline-flex items-center gap-1 bg-velmora-100 text-velmora-700 text-xs font-sans px-2.5 py-1 rounded-sm"
                  >
                    {f}
                    <button onClick={() => {
                      if (f === category) updateFilter('category', '')
                      if (f === priceRange) updateFilter('price', '')
                    }}>
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                ))}
                {activeFilters.length > 0 && (
                  <button
                    onClick={() => setSearchParams({})}
                    className="text-xs text-velmora-400 hover:text-velmora-700 font-sans underline"
                  >
                    Clear all
                  </button>
                )}
              </div>

              {/* Sort */}
              <div className="relative">
                <select
                  value={sort}
                  onChange={(e) => updateFilter('sort', e.target.value)}
                  className="appearance-none bg-transparent text-xs tracking-wider uppercase font-sans font-medium text-velmora-700 pr-6 py-1 border-b border-velmora-200 focus:outline-none focus:border-velmora-500 cursor-pointer"
                >
                  {sortOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 text-velmora-400 pointer-events-none" />
              </div>
            </div>

            {/* Product grid */}
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-velmora-400 font-sans">No products match your filters.</p>
                <button
                  onClick={() => setSearchParams({})}
                  className="btn-outline mt-4"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product) => (
                  <Link
                    key={product.id}
                    to={`/product/${product.id}`}
                    className="group"
                  >
                    <div className="aspect-[3/4] bg-velmora-100 rounded-sm overflow-hidden mb-3 relative">
                      <div
                        className="w-full h-full bg-velmora-200 transition-transform duration-500 group-hover:scale-105"
                        data-strk-bg-id={`shop-${product.id}`}
                        data-strk-bg={`[${product.descId}] [${product.titleId}]`}
                        data-strk-bg-ratio="3x4"
                        data-strk-bg-width="600"
                      />
                      <button
                        onClick={(e) => handleAddToCart(product, e)}
                        className="absolute bottom-3 left-3 right-3 bg-velmora-900/90 text-white text-xs tracking-wider uppercase font-sans font-medium py-2.5 rounded-sm backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      >
                        Quick Add
                      </button>
                    </div>
                    <h3 className="product-name text-velmora-800 truncate" id={product.titleId}>
                      {product.name}
                    </h3>
                    <p className="text-sm font-sans text-velmora-500 mt-0.5">${product.price}</p>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      <div
        className={`fixed inset-0 z-50 md:hidden transition-opacity duration-300 ${
          mobileFiltersOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-black/40"
          onClick={() => setMobileFiltersOpen(false)}
        />
        <div
          className={`absolute top-0 left-0 h-full w-72 bg-cream shadow-2xl transform transition-transform duration-300 ${
            mobileFiltersOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <span className="text-xs tracking-widest uppercase font-sans font-medium">Filters</span>
              <button
                onClick={() => setMobileFiltersOpen(false)}
                className="p-1 hover:bg-velmora-100 rounded-full"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <FilterSidebar mobile />
          </div>
        </div>
      </div>
    </main>
  )
}