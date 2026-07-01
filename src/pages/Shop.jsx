import { useState, useEffect, useRef } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, X, ShoppingBag, ChevronDown } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'
import StarRating from '@/components/ui/StarRating'

const CATEGORIES = ['earrings', 'necklaces', 'huggies', 'sets']
const PRICE_RANGES = [
  { label: 'Under $40', min: 0, max: 40 },
  { label: '$40 – $60', min: 40, max: 60 },
  { label: '$60 – $80', min: 60, max: 80 },
  { label: 'Over $80', min: 80, max: Infinity },
]
const SORT_OPTIONS = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Best Rated', value: 'rating' },
]

function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false)
  const { addItem } = useCart()

  return (
    <div
      className="group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.slug}`} className="block relative overflow-hidden bg-blush aspect-[3/4]">
        <img
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          data-strk-img-id={`shop-${product.imgId}`}
          data-strk-img={`[shop-desc-${product.id}] [shop-title-${product.id}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="500"
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
            hovered ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
          }`}
        />
        <img
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          data-strk-img-id={`shop-${product.imgId2}`}
          data-strk-img={`[shop-title-${product.id}] [shop-desc-${product.id}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="500"
          alt={`${product.name} alternate`}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
            hovered ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
        />
        {product.badge && (
          <span className="absolute top-3 left-3 bg-obsidian text-champagne font-sans text-[10px] uppercase tracking-wider px-2.5 py-1">
            {product.badge}
          </span>
        )}
        <div className={`absolute bottom-0 left-0 right-0 bg-obsidian/90 py-3 px-4 flex items-center justify-center gap-2 transition-all duration-300 ${
          hovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
        }`}>
          <button
            onClick={(e) => { e.preventDefault(); addItem(product) }}
            className="flex items-center gap-2 font-sans text-xs uppercase tracking-widest text-champagne hover:text-champagne-light transition-colors"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            Quick Add
          </button>
        </div>
      </Link>
      <div className="mt-4 space-y-1.5">
        <div className="flex items-center gap-1">
          <StarRating rating={product.rating} />
          <span className="font-sans text-[11px] text-stone ml-1">({product.reviewCount})</span>
        </div>
        <h3
          id={`shop-title-${product.id}`}
          className="font-serif text-sm uppercase tracking-wider text-obsidian hover:text-champagne-dark transition-colors"
        >
          <Link to={`/product/${product.slug}`}>{product.name}</Link>
        </h3>
        <p id={`shop-desc-${product.id}`} className="hidden">{product.shortDescription}</p>
        <p className="font-sans text-sm text-obsidian font-500">${product.price}</p>
      </div>
    </div>
  )
}

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [filterOpen, setFilterOpen] = useState(false)
  const [selectedCategories, setSelectedCategories] = useState(() => {
    const cat = searchParams.get('category')
    return cat ? [cat] : []
  })
  const [selectedPrices, setSelectedPrices] = useState([])
  const [sort, setSort] = useState('featured')
  const [sortOpen, setSortOpen] = useState(false)
  const containerRef = useRef(null)

  const query = searchParams.get('q') || ''

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [selectedCategories, selectedPrices, sort])

  const toggleCategory = (cat) => {
    setSelectedCategories(prev =>
      prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]
    )
  }

  const togglePrice = (range) => {
    setSelectedPrices(prev =>
      prev.includes(range.label) ? prev.filter(l => l !== range.label) : [...prev, range.label]
    )
  }

  let filtered = products.filter(p => {
    if (query && !p.name.toLowerCase().includes(query.toLowerCase())) return false
    if (selectedCategories.length && !selectedCategories.includes(p.category)) return false
    if (selectedPrices.length) {
      const matchesPrice = selectedPrices.some(label => {
        const range = PRICE_RANGES.find(r => r.label === label)
        return range && p.price >= range.min && p.price < range.max
      })
      if (!matchesPrice) return false
    }
    return true
  })

  if (sort === 'price-asc') filtered = [...filtered].sort((a, b) => a.price - b.price)
  else if (sort === 'price-desc') filtered = [...filtered].sort((a, b) => b.price - a.price)
  else if (sort === 'rating') filtered = [...filtered].sort((a, b) => b.rating - a.rating)

  const activeFilters = selectedCategories.length + selectedPrices.length

  return (
    <div className="min-h-screen bg-parchment pt-20">
      {/* Page header */}
      <div className="bg-obsidian py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <p className="font-sans text-xs uppercase tracking-widest text-champagne mb-3">
            {query ? `Search: "${query}"` : 'All Jewelry'}
          </p>
          <h1 className="font-serif text-4xl md:text-5xl text-ivory font-light">
            {selectedCategories.length === 1
              ? selectedCategories[0].charAt(0).toUpperCase() + selectedCategories[0].slice(1)
              : 'The Collection'}
          </h1>
          <div className="w-10 h-px bg-champagne mx-auto mt-5" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-10">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 pb-5 border-b border-champagne/20">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setFilterOpen(v => !v)}
              className="flex items-center gap-2 font-sans text-xs uppercase tracking-wider text-obsidian hover:text-champagne transition-colors"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filter
              {activeFilters > 0 && (
                <span className="bg-champagne text-obsidian text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                  {activeFilters}
                </span>
              )}
            </button>
            {activeFilters > 0 && (
              <button
                onClick={() => { setSelectedCategories([]); setSelectedPrices([]) }}
                className="font-sans text-xs text-stone hover:text-champagne transition-colors flex items-center gap-1"
              >
                <X className="w-3 h-3" />
                Clear all
              </button>
            )}
          </div>

          <div className="flex items-center gap-4">
            <span className="font-sans text-xs text-stone hidden md:block">
              {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
            </span>

            {/* Sort dropdown */}
            <div className="relative">
              <button
                onClick={() => setSortOpen(v => !v)}
                className="flex items-center gap-2 font-sans text-xs uppercase tracking-wider text-obsidian hover:text-champagne transition-colors"
              >
                Sort: {SORT_OPTIONS.find(o => o.value === sort)?.label}
                <ChevronDown className="w-3.5 h-3.5" />
              </button>
              {sortOpen && (
                <div className="absolute right-0 top-full mt-2 bg-ivory border border-champagne/20 shadow-lg z-20 min-w-[180px]">
                  {SORT_OPTIONS.map(opt => (
                    <button
                      key={opt.value}
                      onClick={() => { setSort(opt.value); setSortOpen(false) }}
                      className={`w-full text-left px-4 py-3 font-sans text-xs hover:bg-blush transition-colors ${
                        sort === opt.value ? 'text-champagne' : 'text-obsidian'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Filter sidebar */}
          {filterOpen && (
            <aside className="w-56 flex-shrink-0 animate-fadeIn">
              <div className="space-y-8">
                <div>
                  <h3 className="font-sans text-xs uppercase tracking-widest text-obsidian/50 mb-4">Category</h3>
                  <div className="space-y-2.5">
                    {CATEGORIES.map(cat => (
                      <label key={cat} className="flex items-center gap-3 cursor-pointer group">
                        <div
                          onClick={() => toggleCategory(cat)}
                          className={`w-4 h-4 border flex items-center justify-center transition-colors ${
                            selectedCategories.includes(cat)
                              ? 'bg-champagne border-champagne'
                              : 'border-champagne/40 group-hover:border-champagne'
                          }`}
                        >
                          {selectedCategories.includes(cat) && (
                            <span className="text-obsidian text-[10px] font-bold">✓</span>
                          )}
                        </div>
                        <span
                          onClick={() => toggleCategory(cat)}
                          className="font-sans text-sm capitalize text-stone group-hover:text-obsidian transition-colors"
                        >
                          {cat}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-sans text-xs uppercase tracking-widest text-obsidian/50 mb-4">Price</h3>
                  <div className="space-y-2.5">
                    {PRICE_RANGES.map(range => (
                      <label key={range.label} className="flex items-center gap-3 cursor-pointer group">
                        <div
                          onClick={() => togglePrice(range)}
                          className={`w-4 h-4 border flex items-center justify-center transition-colors ${
                            selectedPrices.includes(range.label)
                              ? 'bg-champagne border-champagne'
                              : 'border-champagne/40 group-hover:border-champagne'
                          }`}
                        >
                          {selectedPrices.includes(range.label) && (
                            <span className="text-obsidian text-[10px] font-bold">✓</span>
                          )}
                        </div>
                        <span
                          onClick={() => togglePrice(range)}
                          className="font-sans text-sm text-stone group-hover:text-obsidian transition-colors"
                        >
                          {range.label}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </aside>
          )}

          {/* Product grid */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-2xl text-obsidian/40 italic">No pieces found</p>
                <p className="font-sans text-sm text-stone mt-2">Try adjusting your filters</p>
                <button
                  onClick={() => { setSelectedCategories([]); setSelectedPrices([]) }}
                  className="mt-6 font-sans text-xs uppercase tracking-widest text-champagne border border-champagne px-6 py-2.5 hover:bg-champagne hover:text-obsidian transition-all"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div
                ref={containerRef}
                className={`grid gap-5 md:gap-6 ${
                  filterOpen
                    ? 'grid-cols-2 md:grid-cols-3'
                    : 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
                }`}
              >
                {filtered.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
