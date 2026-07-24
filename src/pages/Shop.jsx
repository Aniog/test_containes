import { useState, useMemo } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { Star, ShoppingBag, SlidersHorizontal, X, ChevronDown } from 'lucide-react'
import { products, categories } from '../data/products'
import { useCart } from '../context/CartContext'

const sortOptions = [
  { label: 'Newest', value: 'newest' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Best Rated', value: 'rating' },
]

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [sortBy, setSortBy] = useState('newest')
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const { addItem } = useCart()

  const activeCategory = searchParams.get('category') || ''

  const filteredProducts = useMemo(() => {
    let result = [...products]

    if (activeCategory) {
      if (activeCategory === 'huggies') {
        result = result.filter((p) => p.id === 'golden-sphere-huggies')
      } else {
        const catName =
          categories.find((c) => c.slug === activeCategory)?.name || ''
        result = result.filter(
          (p) => p.category.toLowerCase() === activeCategory
        )
      }
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
  }, [activeCategory, sortBy])

  const setCategoryFilter = (slug) => {
    const params = new URLSearchParams(searchParams)
    if (slug) {
      params.set('category', slug)
    } else {
      params.delete('category')
    }
    setSearchParams(params)
  }

  return (
    <div className="min-h-screen bg-cream pt-16 lg:pt-20">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 py-6 lg:py-10">
        {/* Header */}
        <div className="flex items-end justify-between mb-8">
          <div>
            <span className="text-[10px] tracking-[0.2em] uppercase text-gold-600">
              Collection
            </span>
            <h1 className="font-serif text-3xl lg:text-4xl text-midnight-900 mt-2 font-light">
              {activeCategory
                ? categories.find((c) => c.slug === activeCategory)?.name ||
                  'All Jewelry'
                : 'All Jewelry'}
            </h1>
          </div>
          <div className="flex items-center gap-3">
            {/* Mobile filter button */}
            <button
              className="lg:hidden flex items-center gap-1.5 text-[11px] tracking-widest uppercase text-midnight-600 hover:text-midnight-900 transition-colors"
              onClick={() => setMobileFiltersOpen(true)}
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              Filters
            </button>

            {/* Sort */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-transparent text-[11px] tracking-widest uppercase text-midnight-600 pr-5 py-1 cursor-pointer focus:outline-none hover:text-midnight-900 transition-colors"
              >
                {sortOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 text-midnight-400 pointer-events-none" />
            </div>
          </div>
        </div>

        <div className="flex gap-8 lg:gap-12">
          {/* Desktop sidebar */}
          <aside className="hidden lg:block w-48 flex-shrink-0">
            <div className="sticky top-28 space-y-8">
              {/* Category filter */}
              <div>
                <h3 className="text-[11px] tracking-widest uppercase text-midnight-500 mb-3">
                  Category
                </h3>
                <ul className="space-y-2">
                  <li>
                    <button
                      onClick={() => setCategoryFilter('')}
                      className={`text-sm transition-colors ${
                        !activeCategory
                          ? 'text-midnight-900 font-medium'
                          : 'text-midnight-500 hover:text-midnight-900'
                      }`}
                    >
                      All
                    </button>
                  </li>
                  {categories.map((cat) => (
                    <li key={cat.id}>
                      <button
                        onClick={() => setCategoryFilter(cat.slug)}
                        className={`text-sm transition-colors ${
                          activeCategory === cat.slug
                            ? 'text-midnight-900 font-medium'
                            : 'text-midnight-500 hover:text-midnight-900'
                        }`}
                      >
                        {cat.name}
                        <span className="text-midnight-400 ml-1 text-xs">
                          ({cat.count})
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price filter */}
              <div>
                <h3 className="text-[11px] tracking-widest uppercase text-midnight-500 mb-3">
                  Price
                </h3>
                <ul className="space-y-2">
                  {[
                    { label: 'Under $40', range: '0-40' },
                    { label: '$40–$60', range: '40-60' },
                    { label: '$60–$80', range: '60-80' },
                    { label: '$80+', range: '80-999' },
                  ].map((p) => (
                    <li key={p.range}>
                      <button className="text-sm text-midnight-500 hover:text-midnight-900 transition-colors">
                        {p.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Material filter */}
              <div>
                <h3 className="text-[11px] tracking-widest uppercase text-midnight-500 mb-3">
                  Material
                </h3>
                <ul className="space-y-2">
                  {['Gold Plate', 'Silver Plate', 'Crystal'].map((m) => (
                    <li key={m}>
                      <button className="text-sm text-midnight-500 hover:text-midnight-900 transition-colors">
                        {m}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-midnight-500">
                  No products found
                </p>
                <button
                  onClick={() => setCategoryFilter('')}
                  className="text-xs tracking-widest uppercase text-midnight-700 underline underline-offset-2 mt-4"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onAddToCart={() => addItem(product, 'Gold', 1)}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-opacity duration-300 ${
          mobileFiltersOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-black/30"
          onClick={() => setMobileFiltersOpen(false)}
        />
        <div
          className={`absolute left-0 top-0 bottom-0 w-72 bg-cream shadow-xl transition-transform duration-300 ${
            mobileFiltersOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between px-5 py-4 border-b border-midnight-900/10">
            <span className="text-[11px] tracking-widest uppercase">Filters</span>
            <button
              onClick={() => setMobileFiltersOpen(false)}
              className="p-1"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <div className="p-5 space-y-6">
            <div>
              <h3 className="text-[11px] tracking-widest uppercase text-midnight-500 mb-3">
                Category
              </h3>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => {
                      setCategoryFilter('')
                      setMobileFiltersOpen(false)
                    }}
                    className={`text-sm ${
                      !activeCategory
                        ? 'text-midnight-900 font-medium'
                        : 'text-midnight-500'
                    }`}
                  >
                    All
                  </button>
                </li>
                {categories.map((cat) => (
                  <li key={cat.id}>
                    <button
                      onClick={() => {
                        setCategoryFilter(cat.slug)
                        setMobileFiltersOpen(false)
                      }}
                      className={`text-sm ${
                        activeCategory === cat.slug
                          ? 'text-midnight-900 font-medium'
                          : 'text-midnight-500'
                      }`}
                    >
                      {cat.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function ProductCard({ product, onAddToCart }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/product/${product.slug}`} className="block">
        <div className="relative aspect-[4/5] overflow-hidden bg-ivory rounded-sm">
          <img
            src={isHovered && product.images.hover ? product.images.hover : product.images.primary}
            alt={product.name}
            className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
        </div>
        <div className="mt-3 space-y-1">
          <div className="flex items-center gap-1">
            <Star className="w-3 h-3 fill-gold-400 text-gold-400" />
            <span className="text-[10px] text-midnight-500">{product.rating}</span>
          </div>
          <h3 className="text-[11px] tracking-widest uppercase font-medium text-midnight-900 leading-tight">
            {product.name}
          </h3>
          <p className="text-xs text-midnight-500 font-medium">
            ${product.price}
          </p>
        </div>
      </Link>
      <button
        onClick={onAddToCart}
        className="absolute bottom-3 right-3 w-9 h-9 rounded-full bg-cream/90 backdrop-blur-sm shadow-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-cream border border-midnight-900/10"
        aria-label="Quick add to cart"
      >
        <ShoppingBag className="w-3.5 h-3.5 text-midnight-800" />
      </button>
    </div>
  )
}