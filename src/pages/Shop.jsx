import { useState, useEffect, useRef, useMemo } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, X } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'

function ShopProductCard({ product }) {
  const { addItem } = useCart()

  return (
    <div className="group">
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative aspect-[3/4] bg-muted-bg overflow-hidden">
          <img
            alt={product.name}
            data-strk-img-id={`shop-${product.imgId}`}
            data-strk-img={`[shop-${product.id}-title] gold jewelry product`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="400"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <button
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              addItem(product)
            }}
            className="absolute bottom-0 left-0 right-0 bg-charcoal/90 text-white text-xs uppercase tracking-widest py-3 opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-accent"
          >
            Add to Cart
          </button>
        </div>
      </Link>
      <div className="mt-3">
        <h3 id={`shop-${product.id}-title`} className="font-serif text-sm uppercase tracking-product">
          {product.name}
        </h3>
        <p className="text-sm text-muted mt-1">${product.price}</p>
      </div>
    </div>
  )
}

export default function Shop() {
  const containerRef = useRef(null)
  const [searchParams, setSearchParams] = useSearchParams()
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const [sortBy, setSortBy] = useState('featured')

  const activeCategory = searchParams.get('category') || 'all'

  const categories = [
    { label: 'All', value: 'all' },
    { label: 'Earrings', value: 'earrings' },
    { label: 'Necklaces', value: 'necklaces' },
    { label: 'Huggies', value: 'huggies' },
  ]

  const priceRanges = [
    { label: 'All Prices', min: 0, max: Infinity },
    { label: 'Under $40', min: 0, max: 40 },
    { label: '$40 – $70', min: 40, max: 70 },
    { label: '$70+', min: 70, max: Infinity },
  ]

  const [priceRange, setPriceRange] = useState(priceRanges[0])

  const filteredProducts = useMemo(() => {
    let result = products

    if (activeCategory !== 'all') {
      result = result.filter(p => p.category === activeCategory)
    }

    result = result.filter(p => p.price >= priceRange.min && p.price < priceRange.max)

    if (sortBy === 'price-asc') {
      result = [...result].sort((a, b) => a.price - b.price)
    } else if (sortBy === 'price-desc') {
      result = [...result].sort((a, b) => b.price - a.price)
    } else if (sortBy === 'name') {
      result = [...result].sort((a, b) => a.name.localeCompare(b.name))
    }

    return result
  }, [activeCategory, priceRange, sortBy])

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [activeCategory, priceRange, sortBy])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleCategoryChange = (value) => {
    if (value === 'all') {
      searchParams.delete('category')
    } else {
      searchParams.set('category', value)
    }
    setSearchParams(searchParams)
  }

  const FilterSidebar = ({ className = '' }) => (
    <div className={className}>
      {/* Category filter */}
      <div className="mb-8">
        <h3 className="text-xs uppercase tracking-widest font-medium mb-4">Category</h3>
        <div className="space-y-2">
          {categories.map(cat => (
            <button
              key={cat.value}
              onClick={() => handleCategoryChange(cat.value)}
              className={`block text-sm transition-colors ${
                activeCategory === cat.value
                  ? 'text-accent font-medium'
                  : 'text-muted hover:text-charcoal'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Price filter */}
      <div className="mb-8">
        <h3 className="text-xs uppercase tracking-widest font-medium mb-4">Price</h3>
        <div className="space-y-2">
          {priceRanges.map((range, i) => (
            <button
              key={i}
              onClick={() => setPriceRange(range)}
              className={`block text-sm transition-colors ${
                priceRange.label === range.label
                  ? 'text-accent font-medium'
                  : 'text-muted hover:text-charcoal'
              }`}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>

      {/* Material */}
      <div>
        <h3 className="text-xs uppercase tracking-widest font-medium mb-4">Material</h3>
        <div className="space-y-2">
          <button className="block text-sm text-accent font-medium">18K Gold Plated</button>
          <button className="block text-sm text-muted hover:text-charcoal transition-colors">Sterling Silver</button>
        </div>
      </div>
    </div>
  )

  return (
    <div ref={containerRef} className="pt-20 md:pt-24">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        <h1 className="font-serif text-3xl md:text-4xl font-light text-center">
          {activeCategory === 'all' ? 'All Jewelry' : activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1)}
        </h1>
        <p className="text-muted text-sm text-center mt-2">
          {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 pb-16 md:pb-24">
        {/* Mobile filter toggle + sort */}
        <div className="flex items-center justify-between mb-6 md:mb-8">
          <button
            onClick={() => setMobileFiltersOpen(true)}
            className="md:hidden flex items-center gap-2 text-sm text-muted hover:text-charcoal transition-colors"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>

          <div className="ml-auto">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="text-sm text-muted bg-transparent border border-border px-3 py-2 focus:outline-none focus:border-accent"
            >
              <option value="featured">Featured</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="name">Name</option>
            </select>
          </div>
        </div>

        <div className="flex gap-12">
          {/* Desktop sidebar */}
          <FilterSidebar className="hidden md:block w-48 flex-shrink-0" />

          {/* Product grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <p className="text-center text-muted py-12">No products match your filters.</p>
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

      {/* Mobile filters drawer */}
      {mobileFiltersOpen && (
        <>
          <div
            className="fixed inset-0 bg-charcoal/40 z-50"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="fixed top-0 left-0 h-full w-72 bg-cream z-50 p-6 overflow-y-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-serif text-lg">Filters</h2>
              <button onClick={() => setMobileFiltersOpen(false)} aria-label="Close filters">
                <X className="w-5 h-5" />
              </button>
            </div>
            <FilterSidebar />
          </div>
        </>
      )}
    </div>
  )
}
