import { useState, useMemo } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { Star, ShoppingBag, SlidersHorizontal, X, ChevronDown } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import products from '@/data/products'

const priceRanges = [
  { label: 'Under $40', min: 0, max: 40 },
  { label: '$40 – $60', min: 40, max: 60 },
  { label: '$60 – $80', min: 60, max: 80 },
  { label: '$80+', min: 80, max: Infinity },
]

const categoryOptions = [
  { label: 'Earrings', value: 'earrings' },
  { label: 'Necklaces', value: 'necklaces' },
  { label: 'Huggies', value: 'huggies' },
]

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const { addToCart } = useCart()
  const [mobileFilters, setMobileFilters] = useState(false)
  const [sortBy, setSortBy] = useState('featured')
  const [added, setAdded] = useState(null)

  const activeCategory = searchParams.get('category') || ''
  const activeMaterial = searchParams.get('material') || ''
  const activePrice = searchParams.get('price') || ''

  const setFilter = (key, value) => {
    const params = new URLSearchParams(searchParams)
    if (value) {
      params.set(key, value)
    } else {
      params.delete(key)
    }
    setSearchParams(params)
  }

  const filtered = useMemo(() => {
    let result = [...products]

    if (activeCategory) {
      if (activeCategory === 'huggies') {
        result = result.filter((p) => p.name.toLowerCase().includes('huggie'))
      } else {
        result = result.filter((p) => p.category === activeCategory)
      }
    }

    if (activePrice) {
      const range = priceRanges.find((r) => {
        const key = `${r.min}-${r.max === Infinity ? 'plus' : r.max}`
        return key === activePrice
      })
      if (range) {
        result = result.filter((p) => p.price >= range.min && p.price <= range.max)
      }
    }

    if (activeMaterial === 'gold') {
      result = result.filter((p) => p.variants.includes('Gold'))
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
      default:
        break
    }

    return result
  }, [activeCategory, activePrice, activeMaterial, sortBy])

  const handleQuickAdd = (e, product) => {
    e.preventDefault()
    e.stopPropagation()
    addToCart(product, 'Gold')
    setAdded(product.id)
    setTimeout(() => setAdded(null), 1500)
  }

  const sidebar = (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h4 className="text-[11px] tracking-widest-plus uppercase text-deep font-medium mb-4">
          Category
        </h4>
        <div className="space-y-2">
          {categoryOptions.map((c) => (
            <button
              key={c.value}
              onClick={() => setFilter('category', activeCategory === c.value ? '' : c.value)}
              className={`block text-sm transition-colors ${
                activeCategory === c.value ? 'text-gold-600 font-medium' : 'text-velvet-500 hover:text-deep'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h4 className="text-[11px] tracking-widest-plus uppercase text-deep font-medium mb-4">
          Price
        </h4>
        <div className="space-y-2">
          {priceRanges.map((r) => {
            const key = `${r.min}-${r.max === Infinity ? 'plus' : r.max}`
            return (
              <button
                key={key}
                onClick={() => setFilter('price', activePrice === key ? '' : key)}
                className={`block text-sm transition-colors ${
                  activePrice === key ? 'text-gold-600 font-medium' : 'text-velvet-500 hover:text-deep'
                }`}
              >
                {r.label}
              </button>
            )
          })}
        </div>
      </div>

      {/* Material */}
      <div>
        <h4 className="text-[11px] tracking-widest-plus uppercase text-deep font-medium mb-4">
          Material
        </h4>
        <div className="space-y-2">
          <button
            onClick={() => setFilter('material', activeMaterial === 'gold' ? '' : 'gold')}
            className={`block text-sm transition-colors ${
              activeMaterial === 'gold' ? 'text-gold-600 font-medium' : 'text-velvet-500 hover:text-deep'
            }`}
          >
            18K Gold Plated
          </button>
        </div>
      </div>
    </div>
  )

  return (
    <main className="pt-24 pb-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-12">
          <h1 className="font-serif text-4xl md:text-5xl text-deep font-medium mb-3">
            {activeCategory
              ? categoryOptions.find((c) => c.value === activeCategory)?.label || 'Shop All'
              : 'Shop All'}
          </h1>
          <p className="text-velvet-500 text-sm">
            {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
          </p>
        </div>

        <div className="flex gap-12">
          {/* Sidebar - desktop */}
          <aside className="hidden lg:block w-48 flex-shrink-0">
            {sidebar}
          </aside>

          {/* Main */}
          <div className="flex-1 min-w-0">
            {/* Sort + mobile filter toggle */}
            <div className="flex items-center justify-between mb-8">
              <button
                onClick={() => setMobileFilters(true)}
                className="lg:hidden inline-flex items-center gap-2 text-xs tracking-widest uppercase text-deep/70 hover:text-deep transition-colors"
              >
                <SlidersHorizontal size={14} />
                Filters
                {(activeCategory || activePrice || activeMaterial) && (
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />
                )}
              </button>

              <div className="hidden lg:block" />

              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-transparent border border-velvet-200 px-4 py-2 pr-8 text-xs tracking-widest uppercase text-deep/70 focus:outline-none focus:border-deep cursor-pointer"
                >
                  <option value="featured">Featured</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="rating">Top Rated</option>
                </select>
                <ChevronDown size={12} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-velvet-400 pointer-events-none" />
              </div>
            </div>

            {/* Product grid */}
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-velvet-500">No pieces match your filters.</p>
                <button
                  onClick={() => setSearchParams({})}
                  className="mt-3 text-xs tracking-widest uppercase text-gold-600 hover:text-gold-500"
                >
                  Clear All Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {filtered.map((product) => (
                  <Link key={product.id} to={`/product/${product.id}`} className="group block">
                    <div className="relative aspect-[3/4] bg-velvet-100 overflow-hidden mb-4">
                      <div className="absolute inset-0 flex items-center justify-center group-hover:scale-105 transition-transform duration-700">
                        <span className="text-xs text-velvet-400 font-serif italic">
                          Product Image
                        </span>
                      </div>
                      <button
                        onClick={(e) => handleQuickAdd(e, product)}
                        className="absolute bottom-3 left-3 right-3 py-2.5 text-[10px] tracking-widest-plus uppercase font-medium transition-all duration-300 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 bg-deep text-cream hover:bg-velvet-800"
                      >
                        <span className="flex items-center justify-center gap-2">
                          <ShoppingBag size={12} />
                          {added === product.id ? 'Added!' : 'Quick Add'}
                        </span>
                      </button>
                    </div>
                    <h3 className="font-product text-[11px] tracking-widest text-deep mb-1">
                      {product.name}
                    </h3>
                    <div className="flex items-center gap-1 mb-1">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={10}
                            className={i < Math.round(product.rating) ? 'fill-gold-500 text-gold-500' : 'text-velvet-300'}
                          />
                        ))}
                      </div>
                      <span className="text-[10px] text-velvet-400">({product.reviewCount})</span>
                    </div>
                    <p className="text-sm font-medium text-deep">${product.price}</p>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter overlay */}
      {mobileFilters && (
        <>
          <div className="fixed inset-0 z-[80] bg-black/30 lg:hidden" onClick={() => setMobileFilters(false)} />
          <div className="fixed inset-y-0 left-0 z-[90] w-72 bg-cream shadow-2xl p-6 overflow-y-auto lg:hidden">
            <div className="flex items-center justify-between mb-8">
              <h3 className="font-serif text-xl tracking-widest">Filters</h3>
              <button onClick={() => setMobileFilters(false)}>
                <X size={18} />
              </button>
            </div>
            {sidebar}
          </div>
        </>
      )}
    </main>
  )
}