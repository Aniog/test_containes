import { useState, useMemo, useEffect, useRef } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { Star, ShoppingBag, SlidersHorizontal, X } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products, categories } from '@/data/products'
import { useCart } from '@/context/CartContext'

const priceRanges = [
  { label: 'Under $50', min: 0, max: 50 },
  { label: '$50 – $80', min: 50, max: 80 },
  { label: 'Over $80', min: 80, max: Infinity },
]

const sortOptions = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Newest', value: 'newest' },
]

function ProductCard({ product }) {
  const { addItem } = useCart()

  return (
    <div className="group relative">
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative overflow-hidden bg-brand-card aspect-[4/3]">
          <img
            data-strk-img-id={`${product.images[0].imgId}-shop`}
            data-strk-img={`[${product.images[0].descId}] [${product.images[0].titleId}]`}
            data-strk-img-ratio="4x3"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.images[0].alt}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <img
            data-strk-img-id={`${product.images[1].imgId}-shop`}
            data-strk-img={`[${product.images[1].descId}] [${product.images[1].titleId}]`}
            data-strk-img-ratio="4x3"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.images[1].alt}
            className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          />
          <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <button
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                addItem(product)
              }}
              className="w-full bg-brand-base/90 text-white text-xs uppercase tracking-[0.12em] font-medium py-2.5 flex items-center justify-center gap-2 hover:bg-brand-base transition-colors"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              Add to Cart
            </button>
          </div>
        </div>
      </Link>
      <div className="mt-3">
        <Link to={`/product/${product.id}`}>
          <h3 className="font-serif text-sm uppercase tracking-[0.12em] text-brand-text-dark group-hover:text-brand-accent transition-colors">
            {product.name}
          </h3>
        </Link>
        <p className="text-xs text-brand-muted font-light mt-1">{product.description}</p>
        <div className="flex items-center gap-2 mt-1.5">
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-3 h-3 ${i < Math.round(product.rating) ? 'text-brand-accent fill-brand-accent' : 'text-brand-border'}`}
              />
            ))}
          </div>
          <span className="text-xs text-brand-muted font-light">({product.reviews})</span>
        </div>
        <p className="text-sm font-medium text-brand-text-dark mt-1">${product.price}</p>
      </div>
    </div>
  )
}

export default function ShopPage() {
  const [searchParams] = useSearchParams()
  const containerRef = useRef(null)
  const [mobileFilters, setMobileFilters] = useState(false)

  const initialCategory = searchParams.get('category') || ''
  const [selectedCategory, setSelectedCategory] = useState(initialCategory)
  const [selectedPrice, setSelectedPrice] = useState('')
  const [selectedMaterial, setSelectedMaterial] = useState('')
  const [sort, setSort] = useState('featured')

  useEffect(() => {
    setSelectedCategory(searchParams.get('category') || '')
  }, [searchParams])

  const filtered = useMemo(() => {
    let result = [...products]
    if (selectedCategory) result = result.filter((p) => p.category === selectedCategory)
    if (selectedPrice) {
      const range = priceRanges.find((r) => r.label === selectedPrice)
      if (range) result = result.filter((p) => p.price >= range.min && p.price < range.max)
    }
    if (selectedMaterial) result = result.filter((p) => p.material === selectedMaterial)
    switch (sort) {
      case 'price-asc': result.sort((a, b) => a.price - b.price); break
      case 'price-desc': result.sort((a, b) => b.price - a.price); break
      case 'newest': result.reverse(); break
      default: break
    }
    return result
  }, [selectedCategory, selectedPrice, selectedMaterial, sort])

  useEffect(() => {
    const frameId = requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => cancelAnimationFrame(frameId)
  }, [filtered])

  const clearFilters = () => {
    setSelectedCategory('')
    setSelectedPrice('')
    setSelectedMaterial('')
  }

  const hasFilters = selectedCategory || selectedPrice || selectedMaterial

  const FilterContent = () => (
    <>
      {/* Category */}
      <div className="mb-6">
        <h3 className="text-xs uppercase tracking-[0.12em] font-medium text-brand-text-dark mb-3">Category</h3>
        <div className="space-y-2">
          <button
            onClick={() => setSelectedCategory('')}
            className={`block text-sm font-light transition-colors ${!selectedCategory ? 'text-brand-accent' : 'text-brand-muted hover:text-brand-text-dark'}`}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`block text-sm font-light transition-colors ${selectedCategory === cat.id ? 'text-brand-accent' : 'text-brand-muted hover:text-brand-text-dark'}`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div className="mb-6">
        <h3 className="text-xs uppercase tracking-[0.12em] font-medium text-brand-text-dark mb-3">Price</h3>
        <div className="space-y-2">
          <button
            onClick={() => setSelectedPrice('')}
            className={`block text-sm font-light transition-colors ${!selectedPrice ? 'text-brand-accent' : 'text-brand-muted hover:text-brand-text-dark'}`}
          >
            All
          </button>
          {priceRanges.map((range) => (
            <button
              key={range.label}
              onClick={() => setSelectedPrice(range.label)}
              className={`block text-sm font-light transition-colors ${selectedPrice === range.label ? 'text-brand-accent' : 'text-brand-muted hover:text-brand-text-dark'}`}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>

      {/* Material */}
      <div className="mb-6">
        <h3 className="text-xs uppercase tracking-[0.12em] font-medium text-brand-text-dark mb-3">Material</h3>
        <div className="space-y-2">
          <button
            onClick={() => setSelectedMaterial('')}
            className={`block text-sm font-light transition-colors ${!selectedMaterial ? 'text-brand-accent' : 'text-brand-muted hover:text-brand-text-dark'}`}
          >
            All
          </button>
          <button
            onClick={() => setSelectedMaterial('18K Gold Plated')}
            className={`block text-sm font-light transition-colors ${selectedMaterial === '18K Gold Plated' ? 'text-brand-accent' : 'text-brand-muted hover:text-brand-text-dark'}`}
          >
            18K Gold Plated
          </button>
        </div>
      </div>

      {hasFilters && (
        <button
          onClick={clearFilters}
          className="text-xs text-brand-accent underline hover:text-brand-accent-hover transition-colors"
        >
          Clear all filters
        </button>
      )}
    </>
  )

  return (
    <div ref={containerRef} className="pt-20 md:pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Page header */}
        <div className="text-center mb-10">
          <h1 className="font-serif text-3xl md:text-4xl tracking-wide text-brand-text-dark font-light">
            {selectedCategory ? categories.find((c) => c.id === selectedCategory)?.name || 'Shop' : 'Shop All'}
          </h1>
          <div className="w-12 h-px bg-brand-accent mx-auto mt-4" />
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={() => setMobileFilters(true)}
            className="md:hidden flex items-center gap-2 text-xs uppercase tracking-[0.1em] text-brand-text-dark font-medium"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>
          <p className="hidden md:block text-xs text-brand-muted font-light">{filtered.length} items</p>
          <div className="flex items-center gap-2">
            <label htmlFor="sort" className="text-xs uppercase tracking-[0.1em] text-brand-muted font-medium">Sort:</label>
            <select
              id="sort"
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="text-xs text-brand-text-dark bg-transparent border border-brand-border px-2 py-1.5 font-light focus:outline-none focus:border-brand-accent"
            >
              {sortOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Desktop sidebar */}
          <aside className="hidden md:block w-48 flex-shrink-0">
            <FilterContent />
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-16">
                <p className="font-serif text-xl text-brand-text-dark mb-2">No items found</p>
                <p className="text-sm text-brand-muted font-light">Try adjusting your filters.</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filtered.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      {mobileFilters && (
        <>
          <div className="fixed inset-0 bg-black/40 z-[60]" onClick={() => setMobileFilters(false)} />
          <div className="fixed top-0 left-0 h-full w-72 bg-brand-surface z-[70] p-6 overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-serif text-lg text-brand-text-dark">Filters</h2>
              <button onClick={() => setMobileFilters(false)} className="text-brand-muted" aria-label="Close filters">
                <X className="w-5 h-5" />
              </button>
            </div>
            <FilterContent />
          </div>
        </>
      )}
    </div>
  )
}
