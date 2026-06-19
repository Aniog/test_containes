import { useState, useMemo, useEffect, useRef } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { ShoppingBag, SlidersHorizontal, X, ChevronDown } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { products, categories } from '@/data/products'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

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

export default function ShopPage() {
  const { addItem } = useCart()
  const containerRef = useRef(null)
  const [searchParams, setSearchParams] = useSearchParams()

  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || '')
  const [selectedPrice, setSelectedPrice] = useState('')
  const [selectedMaterial, setSelectedMaterial] = useState('')
  const [sort, setSort] = useState('featured')

  useEffect(() => {
    const cat = searchParams.get('category')
    if (cat) setSelectedCategory(cat)
  }, [searchParams])

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [selectedCategory, selectedPrice, selectedMaterial])

  const filtered = useMemo(() => {
    let result = [...products]

    if (selectedCategory) {
      result = result.filter(p => p.category === selectedCategory)
    }
    if (selectedPrice) {
      const range = priceRanges.find(r => r.label === selectedPrice)
      if (range) {
        result = result.filter(p => p.price >= range.min && p.price < range.max)
      }
    }
    if (selectedMaterial) {
      result = result.filter(p => p.material === selectedMaterial)
    }

    switch (sort) {
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
  }, [selectedCategory, selectedPrice, selectedMaterial, sort])

  const clearFilters = () => {
    setSelectedCategory('')
    setSelectedPrice('')
    setSelectedMaterial('')
    setSearchParams({})
  }

  const hasFilters = selectedCategory || selectedPrice || selectedMaterial

  const FilterContent = () => (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h3 className="text-xs tracking-widest uppercase font-sans font-medium text-charcoal mb-4">
          Category
        </h3>
        <div className="space-y-2.5">
          <button
            onClick={() => { setSelectedCategory(''); setSearchParams({}) }}
            className={`block text-sm font-sans transition-colors ${!selectedCategory ? 'text-gold font-medium' : 'text-taupe hover:text-charcoal'}`}
          >
            All Jewelry
          </button>
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => { setSelectedCategory(cat.id); setSearchParams({ category: cat.id }) }}
              className={`block text-sm font-sans transition-colors ${selectedCategory === cat.id ? 'text-gold font-medium' : 'text-taupe hover:text-charcoal'}`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h3 className="text-xs tracking-widest uppercase font-sans font-medium text-charcoal mb-4">
          Price
        </h3>
        <div className="space-y-2.5">
          <button
            onClick={() => setSelectedPrice('')}
            className={`block text-sm font-sans transition-colors ${!selectedPrice ? 'text-gold font-medium' : 'text-taupe hover:text-charcoal'}`}
          >
            All Prices
          </button>
          {priceRanges.map(range => (
            <button
              key={range.label}
              onClick={() => setSelectedPrice(range.label)}
              className={`block text-sm font-sans transition-colors ${selectedPrice === range.label ? 'text-gold font-medium' : 'text-taupe hover:text-charcoal'}`}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>

      {/* Material */}
      <div>
        <h3 className="text-xs tracking-widest uppercase font-sans font-medium text-charcoal mb-4">
          Material
        </h3>
        <div className="space-y-2.5">
          <button
            onClick={() => setSelectedMaterial('')}
            className={`block text-sm font-sans transition-colors ${!selectedMaterial ? 'text-gold font-medium' : 'text-taupe hover:text-charcoal'}`}
          >
            All Materials
          </button>
          <button
            onClick={() => setSelectedMaterial('18K Gold Plated')}
            className={`block text-sm font-sans transition-colors ${selectedMaterial === '18K Gold Plated' ? 'text-gold font-medium' : 'text-taupe hover:text-charcoal'}`}
          >
            18K Gold Plated
          </button>
        </div>
      </div>

      {hasFilters && (
        <button
          onClick={clearFilters}
          className="text-xs tracking-widest uppercase font-sans text-gold hover:text-gold-dark transition-colors underline"
        >
          Clear All Filters
        </button>
      )}
    </div>
  )

  return (
    <div ref={containerRef} className="bg-cream min-h-screen pt-24 lg:pt-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="font-serif text-3xl md:text-4xl text-charcoal tracking-wide font-light">
            {selectedCategory ? categories.find(c => c.id === selectedCategory)?.name || 'Shop' : 'Shop All'}
          </h1>
          <div className="w-12 h-px bg-gold mx-auto mt-4" />
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-warm-gray">
          <button
            onClick={() => setMobileFiltersOpen(true)}
            className="lg:hidden flex items-center gap-2 text-xs tracking-widest uppercase font-sans font-medium text-charcoal"
          >
            <SlidersHorizontal size={16} />
            Filters
          </button>

          <p className="hidden lg:block text-sm text-taupe font-sans">
            {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
          </p>

          <div className="relative">
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="appearance-none bg-transparent text-xs tracking-widest uppercase font-sans font-medium text-charcoal pr-6 cursor-pointer focus:outline-none"
            >
              {sortOptions.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
            <ChevronDown size={14} className="absolute right-0 top-1/2 -translate-y-1/2 text-taupe pointer-events-none" />
          </div>
        </div>

        <div className="flex gap-10">
          {/* Desktop sidebar */}
          <aside className="hidden lg:block w-52 flex-shrink-0">
            <FilterContent />
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-taupe font-sans mb-4">No pieces match your filters.</p>
                <button
                  onClick={clearFilters}
                  className="text-xs tracking-widest uppercase font-sans text-gold hover:text-gold-dark transition-colors underline"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
                {filtered.map(product => (
                  <div key={product.id} className="group">
                    <Link to={`/product/${product.id}`} className="block">
                      <div className="relative aspect-[3x4] bg-warm-gray/30 overflow-hidden mb-3">
                        <img
                          alt={product.name}
                          data-strk-img-id={product.imgId}
                          data-strk-img={`[${product.descId}] [${product.titleId}]`}
                          data-strk-img-ratio="3x4"
                          data-strk-img-width="500"
                          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <button
                          onClick={(e) => {
                            e.preventDefault()
                            e.stopPropagation()
                            addItem(product)
                          }}
                          className="absolute bottom-3 left-3 right-3 bg-white/95 text-charcoal text-[10px] tracking-widest uppercase font-sans font-medium py-2.5 flex items-center justify-center gap-2 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-gold hover:text-white"
                        >
                          <ShoppingBag size={12} />
                          Add to Cart
                        </button>
                      </div>
                    </Link>
                    <h3
                      id={product.titleId}
                      className="font-serif text-xs uppercase tracking-widest-custom text-charcoal text-center"
                    >
                      {product.name}
                    </h3>
                    <p
                      id={product.descId}
                      className="text-[11px] text-taupe font-sans text-center mt-1"
                    >
                      {product.description}
                    </p>
                    <p className="text-sm font-sans font-medium text-charcoal text-center mt-1.5">
                      ${product.price}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      {mobileFiltersOpen && (
        <>
          <div
            className="fixed inset-0 bg-charcoal/50 z-50"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="fixed top-0 left-0 h-full w-80 max-w-[85vw] bg-white z-50 shadow-2xl overflow-y-auto">
            <div className="flex items-center justify-between px-6 py-5 border-b border-warm-gray">
              <h2 className="font-serif text-lg tracking-wide text-charcoal">Filters</h2>
              <button onClick={() => setMobileFiltersOpen(false)} className="text-taupe hover:text-charcoal transition-colors" aria-label="Close filters">
                <X size={22} />
              </button>
            </div>
            <div className="px-6 py-6">
              <FilterContent />
            </div>
          </div>
        </>
      )}
    </div>
  )
}
