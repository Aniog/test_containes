import { useState, useMemo } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { ShoppingBag, Star, SlidersHorizontal, X } from 'lucide-react'
import { PRODUCTS, CATEGORIES } from '@/data/products'
import { useCart } from '@/context/CartContext'
import { cn } from '@/lib/utils'

const SORT_OPTIONS = [
  { value: 'default', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Highest Rated' },
]

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const { addItem } = useCart()
  const [showFilters, setShowFilters] = useState(false)
  const [sortBy, setSortBy] = useState('default')

  const activeCategory = searchParams.get('category') || 'all'

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
    let result = [...PRODUCTS]
    if (activeCategory !== 'all') {
      result = result.filter((p) => p.category === activeCategory)
    }
    switch (sortBy) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price)
        break
      case 'price-desc':
        result.sort((a, b) => b.price - a.price)
        break
      case 'rating':
        result.sort((a, b) => b.rating - a.rating)
        break
    }
    return result
  }, [activeCategory, sortBy])

  return (
    <main className="pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-light text-foreground">
              {activeCategory === 'all' ? 'All Jewelry' : CATEGORIES.find((c) => c.id === activeCategory)?.name || 'Shop'}
            </h1>
            <p className="text-sm text-muted-foreground mt-1 font-sans">
              {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
            </p>
          </div>

          <div className="flex items-center gap-4">
            {/* Mobile filter toggle */}
            <button
              className="md:hidden flex items-center gap-2 text-sm tracking-wide uppercase hover:text-primary transition-colors"
              onClick={() => setShowFilters(!showFilters)}
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
            </button>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="text-sm tracking-wide uppercase bg-transparent border border-border px-3 py-2 text-foreground focus:outline-none focus:border-primary cursor-pointer appearance-none"
            >
              {SORT_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Sidebar Filters - Desktop */}
          <aside className="hidden md:block w-56 flex-shrink-0">
            <div className="sticky top-24">
              <h3 className="text-xs tracking-[0.08em] uppercase text-muted-foreground mb-4 font-sans">
                Categories
              </h3>
              <ul className="space-y-2 mb-8">
                <li>
                  <button
                    onClick={() => setFilter('category', 'all')}
                    className={`text-sm transition-colors ${
                      activeCategory === 'all' ? 'text-foreground font-medium' : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    All
                  </button>
                </li>
                {CATEGORIES.map((cat) => (
                  <li key={cat.id}>
                    <button
                      onClick={() => setFilter('category', cat.id)}
                      className={`text-sm transition-colors capitalize ${
                        activeCategory === cat.id ? 'text-foreground font-medium' : 'text-muted-foreground hover:text-foreground'
                      }`}
                    >
                      {cat.name}
                    </button>
                  </li>
                ))}
              </ul>

              <h3 className="text-xs tracking-[0.08em] uppercase text-muted-foreground mb-4 font-sans">
                Price
              </h3>
              <ul className="space-y-2 mb-8">
                {[
                  { label: 'Under $50', min: 0, max: 50 },
                  { label: '$50 – $75', min: 50, max: 75 },
                  { label: '$75 – $100', min: 75, max: 100 },
                  { label: 'Over $100', min: 100, max: Infinity },
                ].map((range) => (
                  <li key={range.label}>
                    <button className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      {range.label}
                    </button>
                  </li>
                ))}
              </ul>

              <h3 className="text-xs tracking-[0.08em] uppercase text-muted-foreground mb-4 font-sans">
                Material
              </h3>
              <ul className="space-y-2">
                {['gold', 'silver'].map((mat) => (
                  <li key={mat}>
                    <button className="text-sm text-muted-foreground hover:text-foreground transition-colors capitalize">
                      {mat}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Mobile Filter Drawer */}
          {showFilters && (
            <div className="fixed inset-0 z-40 md:hidden">
              <div className="absolute inset-0 bg-black/30" onClick={() => setShowFilters(false)} />
              <div className="absolute left-0 top-0 bottom-0 w-72 bg-background p-6 shadow-xl">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-sm tracking-wide uppercase font-sans">Filters</h3>
                  <button onClick={() => setShowFilters(false)}>
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <h4 className="text-xs tracking-[0.08em] uppercase text-muted-foreground mb-3 font-sans">
                  Categories
                </h4>
                <ul className="space-y-2 mb-6">
                  <li>
                    <button
                      onClick={() => { setFilter('category', 'all'); setShowFilters(false) }}
                      className={`text-sm transition-colors ${
                        activeCategory === 'all' ? 'text-foreground font-medium' : 'text-muted-foreground'
                      }`}
                    >
                      All
                    </button>
                  </li>
                  {CATEGORIES.map((cat) => (
                    <li key={cat.id}>
                      <button
                        onClick={() => { setFilter('category', cat.id); setShowFilters(false) }}
                        className={`text-sm transition-colors capitalize ${
                          activeCategory === cat.id ? 'text-foreground font-medium' : 'text-muted-foreground'
                        }`}
                      >
                        {cat.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* Product Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {filteredProducts.map((product) => (
                <div key={product.id} className="group relative">
                  <Link to={`/product/${product.id}`} className="block">
                    <div className="aspect-[3/4] overflow-hidden bg-muted">
                      <img
                        src={product.images[0]}
                        alt={product.name}
                        className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
                    </div>
                  </Link>

                  <button
                    onClick={() => addItem(product, 'gold')}
                    className="absolute bottom-3 right-3 bg-primary text-primary-foreground p-2.5 opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300"
                    aria-label="Quick add to cart"
                  >
                    <ShoppingBag className="w-4 h-4" />
                  </button>

                  <div className="mt-3 px-0.5">
                    <Link to={`/product/${product.id}`}>
                      <h3 className="product-name text-xs md:text-sm text-foreground group-hover:text-primary transition-colors">
                        {product.name}
                      </h3>
                    </Link>
                    <div className="flex items-center gap-1 mt-1">
                      <Star className="w-3 h-3 fill-primary text-primary" />
                      <span className="text-xs text-muted-foreground">{product.rating}</span>
                    </div>
                    <p className="text-sm font-medium text-foreground mt-1 font-sans">
                      ${product.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}