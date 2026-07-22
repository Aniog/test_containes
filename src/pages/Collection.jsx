import { useState, useEffect, useRef } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import { ShoppingBag, Star, SlidersHorizontal, X } from 'lucide-react'
import strkImgConfig from '@/strk-img-config.json'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'

const priceRanges = [
  { label: 'Under $50', min: 0, max: 50 },
  { label: '$50 – $75', min: 50, max: 75 },
  { label: '$75+', min: 75, max: Infinity },
]

const sortOptions = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Best Rated', value: 'rating' },
  { label: 'Newest', value: 'newest' },
]

export default function Collection() {
  const [searchParams, setSearchParams] = useSearchParams()
  const { addItem } = useCart()
  const containerRef = useRef(null)

  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'all')
  const [selectedPrice, setSelectedPrice] = useState(null)
  const [selectedMaterial, setSelectedMaterial] = useState('all')
  const [sortBy, setSortBy] = useState('featured')
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  useEffect(() => {
    const cat = searchParams.get('category')
    if (cat) setSelectedCategory(cat)
  }, [searchParams])

  useEffect(() => {
    if (containerRef.current) {
      requestAnimationFrame(() => {
        return ImageHelper.loadImages(strkImgConfig, containerRef.current)
      })
    }
  }, [selectedCategory, selectedPrice, selectedMaterial, sortBy])

  let filtered = [...products]

  if (selectedCategory !== 'all') {
    filtered = filtered.filter(p => p.category === selectedCategory)
  }
  if (selectedMaterial !== 'all') {
    filtered = filtered.filter(p => p.material === selectedMaterial)
  }
  if (selectedPrice) {
    filtered = filtered.filter(p => p.price >= selectedPrice.min && p.price < selectedPrice.max)
  }

  switch (sortBy) {
    case 'price-asc':
      filtered.sort((a, b) => a.price - b.price)
      break
    case 'price-desc':
      filtered.sort((a, b) => b.price - a.price)
      break
    case 'rating':
      filtered.sort((a, b) => b.rating - a.rating)
      break
    case 'newest':
      filtered.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0))
      break
  }

  const handleCategoryChange = (cat) => {
    setSelectedCategory(cat)
    if (cat === 'all') {
      searchParams.delete('category')
    } else {
      searchParams.set('category', cat)
    }
    setSearchParams(searchParams)
  }

  const activeFilters = [
    selectedCategory !== 'all' && selectedCategory,
    selectedMaterial !== 'all' && selectedMaterial,
    selectedPrice && selectedPrice.label,
  ].filter(Boolean)

  const clearFilters = () => {
    setSelectedCategory('all')
    setSelectedMaterial('all')
    setSelectedPrice(null)
    setSearchParams({})
  }

  const FilterSidebar = ({ mobile = false }) => (
    <div className={mobile ? 'p-6' : ''}>
      {mobile && (
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-serif text-xl text-charcoal">Filters</h3>
          <button onClick={() => setMobileFiltersOpen(false)} className="text-charcoal">
            <X size={22} />
          </button>
        </div>
      )}

      {/* Category filter */}
      <div className="mb-8">
        <h4 className="text-xs font-sans uppercase tracking-[0.2em] text-charcoal mb-4">Category</h4>
        <div className="space-y-2">
          {['all', 'earrings', 'necklaces', 'huggies'].map(cat => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              className={`block text-sm transition-colors ${
                selectedCategory === cat ? 'text-charcoal font-medium' : 'text-warm-gray hover:text-charcoal'
              }`}
            >
              {cat === 'all' ? 'All Jewelry' : cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Price filter */}
      <div className="mb-8">
        <h4 className="text-xs font-sans uppercase tracking-[0.2em] text-charcoal mb-4">Price</h4>
        <div className="space-y-2">
          <button
            onClick={() => setSelectedPrice(null)}
            className={`block text-sm transition-colors ${
              !selectedPrice ? 'text-charcoal font-medium' : 'text-warm-gray hover:text-charcoal'
            }`}
          >
            All Prices
          </button>
          {priceRanges.map(range => (
            <button
              key={range.label}
              onClick={() => setSelectedPrice(range)}
              className={`block text-sm transition-colors ${
                selectedPrice?.label === range.label ? 'text-charcoal font-medium' : 'text-warm-gray hover:text-charcoal'
              }`}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>

      {/* Material filter */}
      <div className="mb-8">
        <h4 className="text-xs font-sans uppercase tracking-[0.2em] text-charcoal mb-4">Material</h4>
        <div className="space-y-2">
          {['all', 'gold', 'silver'].map(mat => (
            <button
              key={mat}
              onClick={() => setSelectedMaterial(mat)}
              className={`block text-sm transition-colors ${
                selectedMaterial === mat ? 'text-charcoal font-medium' : 'text-warm-gray hover:text-charcoal'
              }`}
            >
              {mat === 'all' ? 'All Materials' : mat.charAt(0).toUpperCase() + mat.slice(1)}
            </button>
          ))}
        </div>
      </div>
    </div>
  )

  return (
    <main ref={containerRef} className="min-h-screen bg-cream pt-20">
      {/* Page header */}
      <div className="bg-ivory py-12 md:py-16 section-padding text-center">
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-charcoal mb-3">Shop All</h1>
        <div className="w-12 h-px bg-gold mx-auto mb-4" />
        <p className="text-sm text-warm-gray max-w-md mx-auto">
          Discover our collection of demi-fine 18K gold jewelry, designed to be treasured.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-8 md:py-12">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            {/* Mobile filter toggle */}
            <button
              onClick={() => setMobileFiltersOpen(true)}
              className="lg:hidden flex items-center gap-2 text-sm text-charcoal"
            >
              <SlidersHorizontal size={16} />
              Filters
            </button>

            {/* Active filters */}
            {activeFilters.length > 0 && (
              <div className="flex items-center gap-2 flex-wrap">
                {activeFilters.map(f => (
                  <span key={f} className="text-xs bg-ivory text-charcoal px-3 py-1 capitalize">
                    {f}
                  </span>
                ))}
                <button onClick={clearFilters} className="text-xs text-warm-gray hover:text-charcoal underline">
                  Clear all
                </button>
              </div>
            )}
          </div>

          {/* Sort */}
          <div className="flex items-center gap-2">
            <span className="text-xs text-warm-gray hidden sm:block">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="text-sm text-charcoal bg-transparent border border-light-gray px-3 py-2 focus:outline-none focus:border-gold transition-colors appearance-none pr-8 cursor-pointer"
            >
              {sortOptions.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex gap-8 lg:gap-12">
          {/* Desktop sidebar */}
          <aside className="hidden lg:block w-48 flex-shrink-0">
            <FilterSidebar />
          </aside>

          {/* Mobile filter drawer */}
          {mobileFiltersOpen && (
            <div className="fixed inset-0 z-50 lg:hidden">
              <div className="absolute inset-0 bg-charcoal/40" onClick={() => setMobileFiltersOpen(false)} />
              <div className="absolute left-0 top-0 h-full w-80 bg-cream shadow-2xl overflow-y-auto animate-slide-in-right">
                <FilterSidebar mobile />
              </div>
            </div>
          )}

          {/* Product grid */}
          <div className="flex-1">
            <p className="text-xs text-warm-gray mb-6">{filtered.length} product{filtered.length !== 1 ? 's' : ''}</p>

            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-charcoal mb-2">No products found</p>
                <p className="text-sm text-warm-gray">Try adjusting your filters</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filtered.map(product => (
                  <Link key={product.id} to={`/product/${product.id}`} className="group block">
                    <div className="relative overflow-hidden bg-ivory aspect-[3/4]">
                      <img
                        data-strk-img-id={`${product.imgId}-collection`}
                        data-strk-img={`[${product.descId}] [${product.titleId}] gold jewelry product photography`}
                        data-strk-img-ratio="3x4"
                        data-strk-img-width="500"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      {/* Quick add */}
                      <button
                        onClick={(e) => {
                          e.preventDefault()
                          e.stopPropagation()
                          addItem(product)
                        }}
                        className="absolute bottom-4 left-4 right-4 bg-cream/95 backdrop-blur-sm text-charcoal py-3 flex items-center justify-center gap-2
                                   opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300
                                   hover:bg-gold hover:text-charcoal text-xs uppercase tracking-[0.15em]"
                      >
                        <ShoppingBag size={14} strokeWidth={1.5} />
                        Add to Cart
                      </button>
                      {product.isNew && (
                        <span className="absolute top-3 left-3 bg-gold text-charcoal text-[10px] uppercase tracking-wider px-3 py-1 font-medium">
                          New
                        </span>
                      )}
                    </div>
                    <div className="mt-4 space-y-1">
                      <h3 className="font-serif text-sm md:text-base uppercase tracking-[0.2em] text-charcoal group-hover:text-gold transition-colors">
                        {product.name}
                      </h3>
                      <div className="flex items-center gap-1.5">
                        <Star size={12} fill="#C9A96E" className="text-gold" />
                        <span className="text-xs text-warm-gray">{product.rating} ({product.reviewCount})</span>
                      </div>
                      <p className="font-sans text-sm text-charcoal">${product.price}</p>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}
