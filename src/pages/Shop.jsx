import { useState, useEffect, useRef, useMemo } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { ShoppingBag, SlidersHorizontal, X, ChevronDown } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'

const priceRanges = [
  { label: 'Under $50', min: 0, max: 50 },
  { label: '$50 – $75', min: 50, max: 75 },
  { label: '$75 – $100', min: 75, max: 100 },
  { label: 'Over $100', min: 100, max: Infinity },
]

const sortOptions = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Newest', value: 'newest' },
]

function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false)
  const [added, setAdded] = useState(false)
  const { addItem } = useCart()

  const handleAddToCart = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product, 'gold', 1)
    setAdded(true)
    setTimeout(() => setAdded(false), 1500)
  }

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative aspect-[3x4] bg-brand-warm overflow-hidden mb-4">
        <img
          data-strk-img-id={`shop-${product.imgId}`}
          data-strk-img={`[${product.descId}] [${product.titleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.displayName}
          className={`w-full h-full object-cover transition-opacity duration-500 ${hovered ? 'opacity-0' : 'opacity-100'}`}
        />
        <img
          data-strk-img-id={`shop-${product.imgIdHover}`}
          data-strk-img={`[${product.descId}] [${product.titleId}] worn model`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.displayName}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${hovered ? 'opacity-100' : 'opacity-0'}`}
        />
        <div
          className={`absolute bottom-0 left-0 right-0 transition-all duration-300 ${
            hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          }`}
        >
          <button
            onClick={handleAddToCart}
            className={`w-full font-sans text-[11px] tracking-ultra-wide uppercase py-3 flex items-center justify-center gap-2 transition-colors duration-300 ${
              added
                ? 'bg-brand-gold text-white'
                : 'bg-brand-charcoal/90 text-white hover:bg-brand-espresso'
            }`}
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            {added ? 'Added!' : 'Add to Cart'}
          </button>
        </div>
      </div>
      <h3 className="font-serif text-sm tracking-super-wide uppercase text-brand-charcoal">
        {product.name}
      </h3>
      <p className="text-xs text-brand-muted mt-1">{product.description}</p>
      <p className="font-sans text-sm font-medium text-brand-charcoal mt-2">${product.price}</p>
    </Link>
  )
}

export default function Shop() {
  const [searchParams] = useSearchParams()
  const containerRef = useRef(null)

  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'all')
  const [selectedPrice, setSelectedPrice] = useState(null)
  const [selectedMaterial, setSelectedMaterial] = useState('all')
  const [sortBy, setSortBy] = useState('featured')

  useEffect(() => {
    const cat = searchParams.get('category')
    if (cat) setSelectedCategory(cat)
  }, [searchParams])

  const filteredProducts = useMemo(() => {
    let result = [...products]

    if (selectedCategory !== 'all') {
      result = result.filter((p) => p.category === selectedCategory)
    }

    if (selectedPrice !== null) {
      const range = priceRanges[selectedPrice]
      result = result.filter((p) => p.price >= range.min && p.price < range.max)
    }

    if (selectedMaterial !== 'all') {
      result = result.filter((p) => p.material === selectedMaterial)
    }

    switch (sortBy) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price)
        break
      case 'price-desc':
        result.sort((a, b) => b.price - a.price)
        break
      case 'newest':
        result.reverse()
        break
      default:
        break
    }

    return result
  }, [selectedCategory, selectedPrice, selectedMaterial, sortBy])

  useEffect(() => {
    const frameId = requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => cancelAnimationFrame(frameId)
  }, [filteredProducts])

  const clearFilters = () => {
    setSelectedCategory('all')
    setSelectedPrice(null)
    setSelectedMaterial('all')
  }

  const hasActiveFilters = selectedCategory !== 'all' || selectedPrice !== null || selectedMaterial !== 'all'

  const FilterSidebar = ({ mobile = false }) => (
    <div className={mobile ? '' : 'sticky top-28'}>
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-serif text-lg tracking-wider uppercase text-brand-charcoal">Filters</h3>
        {hasActiveFilters && (
          <button onClick={clearFilters} className="text-xs text-brand-gold hover:text-brand-gold-dark underline">
            Clear all
          </button>
        )}
      </div>

      {/* Category */}
      <div className="mb-8">
        <h4 className="font-sans text-xs tracking-wider uppercase text-brand-muted mb-3">Category</h4>
        <div className="space-y-2">
          {['all', 'earrings', 'necklaces', 'huggies'].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`block w-full text-left font-sans text-sm py-1 transition-colors ${
                selectedCategory === cat ? 'text-brand-charcoal font-medium' : 'text-brand-muted hover:text-brand-charcoal'
              }`}
            >
              {cat === 'all' ? 'All Jewelry' : cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div className="mb-8">
        <h4 className="font-sans text-xs tracking-wider uppercase text-brand-muted mb-3">Price</h4>
        <div className="space-y-2">
          {priceRanges.map((range, i) => (
            <button
              key={range.label}
              onClick={() => setSelectedPrice(selectedPrice === i ? null : i)}
              className={`block w-full text-left font-sans text-sm py-1 transition-colors ${
                selectedPrice === i ? 'text-brand-charcoal font-medium' : 'text-brand-muted hover:text-brand-charcoal'
              }`}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>

      {/* Material */}
      <div className="mb-8">
        <h4 className="font-sans text-xs tracking-wider uppercase text-brand-muted mb-3">Material</h4>
        <div className="space-y-2">
          {['all', '18K Gold Plated'].map((mat) => (
            <button
              key={mat}
              onClick={() => setSelectedMaterial(mat)}
              className={`block w-full text-left font-sans text-sm py-1 transition-colors ${
                selectedMaterial === mat ? 'text-brand-charcoal font-medium' : 'text-brand-muted hover:text-brand-charcoal'
              }`}
            >
              {mat === 'all' ? 'All Materials' : mat}
            </button>
          ))}
        </div>
      </div>
    </div>
  )

  return (
    <div className="pt-24 md:pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page header */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-3xl md:text-4xl text-brand-charcoal tracking-wide">
            The Collection
          </h1>
          <div className="w-12 h-px bg-brand-gold mx-auto mt-4" />
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-brand-sand">
          <button
            onClick={() => setMobileFiltersOpen(true)}
            className="md:hidden flex items-center gap-2 font-sans text-xs tracking-wider uppercase text-brand-charcoal"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>

          <p className="hidden md:block font-sans text-xs text-brand-muted">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
          </p>

          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none bg-transparent font-sans text-xs tracking-wider uppercase text-brand-charcoal pr-6 cursor-pointer focus:outline-none"
            >
              {sortOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
            <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 text-brand-muted pointer-events-none" />
          </div>
        </div>

        <div className="flex gap-12">
          {/* Desktop sidebar */}
          <aside className="hidden md:block w-56 flex-shrink-0">
            <FilterSidebar />
          </aside>

          {/* Product grid */}
          <div ref={containerRef} className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-brand-muted">No pieces match your filters</p>
                <button
                  onClick={clearFilters}
                  className="mt-4 font-sans text-xs tracking-ultra-wide uppercase text-brand-gold hover:text-brand-gold-dark underline"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      {mobileFiltersOpen && (
        <>
          <div className="fixed inset-0 bg-black/40 z-50" onClick={() => setMobileFiltersOpen(false)} />
          <div className="fixed left-0 top-0 bottom-0 w-80 max-w-[85vw] bg-brand-cream z-50 p-6 overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-serif text-lg tracking-wider uppercase">Filters</h3>
              <button onClick={() => setMobileFiltersOpen(false)} aria-label="Close filters">
                <X className="w-5 h-5 text-brand-muted" />
              </button>
            </div>
            <FilterSidebar mobile />
          </div>
        </>
      )}
    </div>
  )
}
