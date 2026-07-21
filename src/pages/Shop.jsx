import React, { useState, useEffect, useRef } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'
import { Star, ShoppingBag, SlidersHorizontal, X } from 'lucide-react'

const allCategories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets']
const priceRanges = [
  { label: 'All Prices', min: 0, max: Infinity },
  { label: 'Under $50', min: 0, max: 50 },
  { label: '$50 – $80', min: 50, max: 80 },
  { label: '$80+', min: 80, max: Infinity },
]
const sortOptions = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Newest', value: 'newest' },
]

export default function ShopPage() {
  const containerRef = useRef(null)
  const [searchParams, setSearchParams] = useSearchParams()
  const { addItem } = useCart()

  const [category, setCategory] = useState(searchParams.get('category') || 'All')
  const [priceRange, setPriceRange] = useState(0)
  const [sort, setSort] = useState('featured')
  const [mobileFilters, setMobileFilters] = useState(false)
  const [hoveredId, setHoveredId] = useState(null)

  useEffect(() => {
    const cat = searchParams.get('category')
    if (cat) setCategory(cat)
  }, [searchParams])

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [category, priceRange, sort])

  const filtered = products
    .filter(p => category === 'All' || p.category === category)
    .filter(p => p.price >= priceRanges[priceRange].min && p.price < priceRanges[priceRange].max)

  const sorted = [...filtered].sort((a, b) => {
    if (sort === 'price-asc') return a.price - b.price
    if (sort === 'price-desc') return b.price - a.price
    return 0
  })

  const handleCategoryChange = (cat) => {
    setCategory(cat)
    if (cat === 'All') {
      setSearchParams({})
    } else {
      setSearchParams({ category: cat })
    }
  }

  return (
    <div ref={containerRef} className="bg-ivory pt-20 md:pt-24 min-h-screen">
      {/* Header */}
      <div className="bg-warm-black py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <h1 className="font-serif text-warm-white text-3xl md:text-5xl font-light uppercase tracking-[0.15em]">
            The Collection
          </h1>
          <div className="w-12 h-px bg-muted-gold mx-auto mt-4" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        {/* Mobile filter toggle */}
        <div className="flex items-center justify-between mb-6 md:hidden">
          <button
            onClick={() => setMobileFilters(!mobileFilters)}
            className="flex items-center gap-2 text-warm-black text-xs uppercase tracking-wider"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="text-warm-black text-xs uppercase tracking-wider bg-transparent border-none focus:outline-none"
          >
            {sortOptions.map(opt => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
        </div>

        <div className="flex gap-8">
          {/* Sidebar - desktop */}
          <aside className="hidden md:block w-56 flex-shrink-0">
            <div className="sticky top-28">
              <h3 className="text-warm-black text-xs uppercase tracking-[0.2em] font-medium mb-4">Category</h3>
              <ul className="space-y-2 mb-8">
                {allCategories.map(cat => (
                  <li key={cat}>
                    <button
                      onClick={() => handleCategoryChange(cat)}
                      className={`text-sm tracking-wider transition-colors duration-300 ${
                        category === cat ? 'text-muted-gold' : 'text-warm-gray hover:text-warm-black'
                      }`}
                    >
                      {cat}
                    </button>
                  </li>
                ))}
              </ul>

              <h3 className="text-warm-black text-xs uppercase tracking-[0.2em] font-medium mb-4">Price</h3>
              <ul className="space-y-2 mb-8">
                {priceRanges.map((range, i) => (
                  <li key={range.label}>
                    <button
                      onClick={() => setPriceRange(i)}
                      className={`text-sm tracking-wider transition-colors duration-300 ${
                        priceRange === i ? 'text-muted-gold' : 'text-warm-gray hover:text-warm-black'
                      }`}
                    >
                      {range.label}
                    </button>
                  </li>
                ))}
              </ul>

              <h3 className="text-warm-black text-xs uppercase tracking-[0.2em] font-medium mb-4">Sort By</h3>
              <ul className="space-y-2">
                {sortOptions.map(opt => (
                  <li key={opt.value}>
                    <button
                      onClick={() => setSort(opt.value)}
                      className={`text-sm tracking-wider transition-colors duration-300 ${
                        sort === opt.value ? 'text-muted-gold' : 'text-warm-gray hover:text-warm-black'
                      }`}
                    >
                      {opt.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Mobile filters panel */}
          {mobileFilters && (
            <div className="fixed inset-0 z-50 md:hidden">
              <div className="absolute inset-0 bg-black/50" onClick={() => setMobileFilters(false)} />
              <div className="absolute top-0 right-0 h-full w-72 bg-ivory p-6 overflow-y-auto">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-warm-black text-xs uppercase tracking-[0.2em] font-medium">Filters</h3>
                  <button onClick={() => setMobileFilters(false)} className="text-warm-gray">
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <h4 className="text-warm-black text-xs uppercase tracking-[0.2em] font-medium mb-3">Category</h4>
                <ul className="space-y-2 mb-6">
                  {allCategories.map(cat => (
                    <li key={cat}>
                      <button
                        onClick={() => { handleCategoryChange(cat); setMobileFilters(false) }}
                        className={`text-sm tracking-wider ${category === cat ? 'text-muted-gold' : 'text-warm-gray'}`}
                      >
                        {cat}
                      </button>
                    </li>
                  ))}
                </ul>

                <h4 className="text-warm-black text-xs uppercase tracking-[0.2em] font-medium mb-3">Price</h4>
                <ul className="space-y-2">
                  {priceRanges.map((range, i) => (
                    <li key={range.label}>
                      <button
                        onClick={() => { setPriceRange(i); setMobileFilters(false) }}
                        className={`text-sm tracking-wider ${priceRange === i ? 'text-muted-gold' : 'text-warm-gray'}`}
                      >
                        {range.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* Product grid */}
          <div className="flex-1">
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {sorted.map(product => (
                <Link
                  key={product.id}
                  to={`/product/${product.id}`}
                  className="group block"
                  onMouseEnter={() => setHoveredId(product.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  <div className="relative aspect-[3x4] overflow-hidden bg-cream">
                    <img
                      data-strk-img-id={`shop-${product.imgId}`}
                      data-strk-img={`[${product.descId}] [${product.titleId}]`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="600"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={product.name}
                      className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${hoveredId === product.id ? 'opacity-0' : 'opacity-100'}`}
                    />
                    <img
                      data-strk-img-id={`shop-${product.imgIdHover}`}
                      data-strk-img={`[${product.descId}] [${product.titleId}] worn model`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="600"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={product.name}
                      className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${hoveredId === product.id ? 'opacity-100' : 'opacity-0'}`}
                    />
                    <div
                      className={`absolute bottom-0 left-0 right-0 bg-warm-black/90 py-3 flex items-center justify-center gap-2 transition-all duration-300 ${hoveredId === product.id ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}
                    >
                      <ShoppingBag className="w-4 h-4 text-muted-gold" />
                      <span className="text-warm-white text-xs uppercase tracking-wider">Quick Add</span>
                    </div>
                  </div>
                  <div className="mt-3">
                    <h3 className="font-serif text-warm-black text-sm uppercase tracking-[0.1em] group-hover:text-muted-gold transition-colors duration-300">
                      {product.name}
                    </h3>
                    <div className="flex items-center gap-1 mt-1">
                      <Star className="w-3 h-3 text-muted-gold fill-muted-gold" />
                      <span className="text-warm-gray text-xs">{product.rating}</span>
                    </div>
                    <p className="text-warm-black text-sm mt-1">${product.price}</p>
                  </div>
                </Link>
              ))}
            </div>

            {sorted.length === 0 && (
              <div className="text-center py-20">
                <p className="text-warm-gray text-sm">No products match your filters.</p>
                <button
                  onClick={() => { setCategory('All'); setPriceRange(0) }}
                  className="mt-4 text-muted-gold text-xs uppercase tracking-wider hover:text-bright-gold transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
