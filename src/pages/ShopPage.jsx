import React, { useState } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { Star, ShoppingBag, SlidersHorizontal, X, ChevronDown } from 'lucide-react'
import { products, categories } from '@/data/products'
import { productImages } from '@/data/images'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/lib/utils'

const priceRanges = [
  { label: 'All Prices', value: 'all', min: 0, max: Infinity },
  { label: 'Under $50', value: 'under-50', min: 0, max: 50 },
  { label: '$50 – $80', value: '50-80', min: 50, max: 80 },
  { label: 'Over $80', value: 'over-80', min: 80, max: Infinity },
]

const sortOptions = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Best Selling', value: 'bestselling' },
  { label: 'Top Rated', value: 'rating' },
]

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [sort, setSort] = useState('featured')
  const { addItem } = useCart()

  const activeCategory = searchParams.get('category') || 'all'
  const activePrice = searchParams.get('price') || 'all'

  const setFilter = (key, value) => {
    const params = new URLSearchParams(searchParams)
    if (value === 'all') {
      params.delete(key)
    } else {
      params.set(key, value)
    }
    setSearchParams(params)
  }

  let filtered = [...products]

  if (activeCategory !== 'all') {
    filtered = filtered.filter((p) => p.category === activeCategory)
  }

  if (activePrice !== 'all') {
    const range = priceRanges.find((r) => r.value === activePrice)
    if (range) {
      filtered = filtered.filter((p) => p.price >= range.min && p.price < range.max)
    }
  }

  switch (sort) {
    case 'price-asc':
      filtered.sort((a, b) => a.price - b.price)
      break
    case 'price-desc':
      filtered.sort((a, b) => b.price - a.price)
      break
    case 'rating':
      filtered.sort((a, b) => b.rating - a.rating)
      break
    case 'bestselling':
      filtered.sort((a, b) => b.reviews - a.reviews)
      break
    default:
      break
  }

  return (
    <div className="min-h-screen pt-20 md:pt-24 bg-background">
      {/* Page Header */}
      <div className="bg-background-alt border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-accent mb-2">Collection</p>
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground">Shop All Jewelry</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="flex items-center gap-2 text-xs tracking-[0.1em] uppercase text-foreground font-medium lg:hidden"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>

          <div className="flex items-center gap-2 ml-auto">
            <label className="text-xs text-muted hidden sm:block">Sort by:</label>
            <div className="relative">
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="appearance-none bg-transparent border border-border px-4 py-2 pr-8 text-xs tracking-[0.05em] text-foreground cursor-pointer focus:outline-none focus:border-accent transition-colors"
              >
                {sortOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
              <ChevronDown className="w-3 h-3 text-muted absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Sidebar */}
          <aside
            className={`${
              sidebarOpen ? 'fixed inset-0 z-40 bg-black/40 lg:static lg:bg-transparent' : 'hidden'
            } lg:block lg:w-56 flex-shrink-0`}
            onClick={(e) => {
              if (e.target === e.currentTarget) setSidebarOpen(false)
            }}
          >
            <div className={`${
              sidebarOpen ? 'absolute right-0 top-0 h-full w-72 bg-background p-6 shadow-xl overflow-y-auto' : ''
            } lg:static lg:p-0 lg:shadow-none`}>
              <div className="flex items-center justify-between mb-6 lg:mb-8">
                <h3 className="text-xs tracking-[0.2em] uppercase text-foreground font-medium">Filters</h3>
                <button onClick={() => setSidebarOpen(false)} className="lg:hidden">
                  <X className="w-5 h-5 text-muted" />
                </button>
              </div>

              {/* Category Filter */}
              <div className="mb-8">
                <h4 className="text-xs tracking-[0.15em] uppercase text-foreground font-medium mb-3">Category</h4>
                <div className="space-y-2">
                  <button
                    onClick={() => { setFilter('category', 'all'); setSidebarOpen(false) }}
                    className={`block text-sm ${activeCategory === 'all' ? 'text-accent font-medium' : 'text-muted hover:text-foreground'} transition-colors`}
                  >
                    All Jewelry
                  </button>
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => { setFilter('category', cat.id); setSidebarOpen(false) }}
                      className={`block text-sm ${activeCategory === cat.id ? 'text-accent font-medium' : 'text-muted hover:text-foreground'} transition-colors`}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div className="mb-8">
                <h4 className="text-xs tracking-[0.15em] uppercase text-foreground font-medium mb-3">Price</h4>
                <div className="space-y-2">
                  {priceRanges.map((range) => (
                    <button
                      key={range.value}
                      onClick={() => { setFilter('price', range.value); setSidebarOpen(false) }}
                      className={`block text-sm ${activePrice === range.value ? 'text-accent font-medium' : 'text-muted hover:text-foreground'} transition-colors`}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Material Filter */}
              <div>
                <h4 className="text-xs tracking-[0.15em] uppercase text-foreground font-medium mb-3">Material</h4>
                <div className="space-y-2">
                  <span className="block text-sm text-muted">18K Gold Plated</span>
                  <span className="block text-sm text-muted">Sterling Silver</span>
                </div>
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-muted mb-2">No products found</p>
                <p className="text-sm text-muted/70">Try adjusting your filters.</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filtered.map((product) => (
                  <ShopProductCard key={product.id} product={product} addItem={addItem} />
                ))}
              </div>
            )}

            <div className="text-center mt-10 text-xs text-muted">
              Showing {filtered.length} {filtered.length === 1 ? 'product' : 'products'}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function ShopProductCard({ product, addItem }) {
  const images = productImages[product.id] || []

  return (
    <div className="group">
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative aspect-[4/5] bg-background-alt overflow-hidden mb-3">
          <img
            src={images[0] || ''}
            alt={product.name}
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
          />
          <img
            src={images[1] || images[0] || ''}
            alt={`${product.name} detail`}
            className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          />
          <div className="absolute bottom-0 left-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button
              onClick={(e) => {
                e.preventDefault()
                addItem(product, product.variants[0])
              }}
              className="w-full bg-foreground/90 backdrop-blur-sm text-white py-2.5 flex items-center justify-center gap-2 text-xs tracking-[0.1em] uppercase hover:bg-foreground transition-colors"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              Add to Cart
            </button>
          </div>
        </div>
      </Link>

      <Link to={`/product/${product.id}`}>
        <h3 className="font-serif text-xs md:text-sm tracking-[0.15em] uppercase text-foreground font-medium mb-1 truncate">
          {product.name}
        </h3>
      </Link>
      <div className="flex items-center gap-1 mb-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-3 h-3 ${i < Math.round(product.rating) ? 'fill-accent text-accent' : 'text-border'}`}
          />
        ))}
        <span className="text-[10px] text-muted ml-1">({product.reviews})</span>
      </div>
      <p className="text-sm font-medium text-foreground">{formatPrice(product.price)}</p>
    </div>
  )
}
