import { useState, useEffect, useRef, useMemo } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'
import { StarRating } from '@/components/ui/StarRating'
import { cn } from '@/lib/utils'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets']
const priceRanges = [
  { label: 'All Prices', min: 0, max: Infinity },
  { label: 'Under $40', min: 0, max: 40 },
  { label: '$40 – $60', min: 40, max: 60 },
  { label: '$60 – $80', min: 60, max: 80 },
  { label: 'Over $80', min: 80, max: Infinity },
]
const sortOptions = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Best Rated', value: 'rating' },
]

export default function Shop() {
  const [searchParams] = useSearchParams()
  const initialCategory = searchParams.get('category') || 'all'

  const [activeCategory, setActiveCategory] = useState(
    categories.find(c => c.toLowerCase() === initialCategory) || 'All'
  )
  const [activePriceRange, setActivePriceRange] = useState(priceRanges[0])
  const [sortBy, setSortBy] = useState('featured')
  const [filterOpen, setFilterOpen] = useState(false)
  const containerRef = useRef(null)

  const filtered = useMemo(() => {
    let list = [...products]
    if (activeCategory !== 'All') {
      list = list.filter(p => p.category.toLowerCase() === activeCategory.toLowerCase())
    }
    list = list.filter(p => p.price >= activePriceRange.min && p.price <= activePriceRange.max)
    if (sortBy === 'price-asc') list.sort((a, b) => a.price - b.price)
    else if (sortBy === 'price-desc') list.sort((a, b) => b.price - a.price)
    else if (sortBy === 'rating') list.sort((a, b) => b.rating - a.rating)
    return list
  }, [activeCategory, activePriceRange, sortBy])

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [filtered])

  return (
    <div className="min-h-screen bg-cream pt-20 md:pt-24">
      {/* Page header */}
      <div className="bg-parchment border-b border-velvet-200 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-sans text-xs uppercase tracking-widest text-velvet-500 mb-3">Velmora</p>
          <h1 className="font-serif text-4xl md:text-5xl text-obsidian-800 font-light">The Collection</h1>
          <div className="w-12 h-px bg-velvet-400 mx-auto mt-5" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 gap-4">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setFilterOpen(o => !o)}
              className="flex items-center gap-2 font-sans text-xs uppercase tracking-widest text-obsidian-600 hover:text-velvet-500 transition-colors border border-obsidian-200 px-4 py-2.5 hover:border-velvet-400"
            >
              <SlidersHorizontal size={14} />
              Filters
            </button>
            <span className="font-sans text-xs text-obsidian-400">{filtered.length} items</span>
          </div>

          {/* Sort */}
          <div className="relative">
            <select
              value={sortBy}
              onChange={e => setSortBy(e.target.value)}
              className="appearance-none font-sans text-xs uppercase tracking-widest text-obsidian-600 bg-transparent border border-obsidian-200 px-4 py-2.5 pr-8 focus:outline-none focus:border-velvet-400 cursor-pointer hover:border-velvet-400 transition-colors"
            >
              {sortOptions.map(o => (
                <option key={o.value} value={o.value}>{o.label}</option>
              ))}
            </select>
            <ChevronDown size={12} className="absolute right-3 top-1/2 -translate-y-1/2 text-obsidian-400 pointer-events-none" />
          </div>
        </div>

        <div className="flex gap-8">
          {/* Sidebar filters */}
          <aside
            className={cn(
              'flex-shrink-0 transition-all duration-300 overflow-hidden',
              filterOpen ? 'w-56 opacity-100' : 'w-0 opacity-0'
            )}
          >
            <div className="w-56 space-y-8 pr-4">
              {/* Category filter */}
              <div>
                <h3 className="font-sans text-xs uppercase tracking-widest text-obsidian-500 mb-4">Category</h3>
                <div className="space-y-2">
                  {categories.map(cat => (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={cn(
                        'block w-full text-left font-sans text-sm py-1.5 transition-colors',
                        activeCategory === cat
                          ? 'text-velvet-500 font-medium'
                          : 'text-obsidian-500 hover:text-obsidian-800'
                      )}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price filter */}
              <div>
                <h3 className="font-sans text-xs uppercase tracking-widest text-obsidian-500 mb-4">Price</h3>
                <div className="space-y-2">
                  {priceRanges.map(range => (
                    <button
                      key={range.label}
                      onClick={() => setActivePriceRange(range)}
                      className={cn(
                        'block w-full text-left font-sans text-sm py-1.5 transition-colors',
                        activePriceRange.label === range.label
                          ? 'text-velvet-500 font-medium'
                          : 'text-obsidian-500 hover:text-obsidian-800'
                      )}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Clear filters */}
              <button
                onClick={() => { setActiveCategory('All'); setActivePriceRange(priceRanges[0]) }}
                className="flex items-center gap-1.5 font-sans text-xs text-obsidian-400 hover:text-velvet-500 transition-colors uppercase tracking-widest"
              >
                <X size={12} /> Clear Filters
              </button>
            </div>
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            {/* Category pills (mobile-friendly) */}
            <div className="flex gap-2 flex-wrap mb-6">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={cn(
                    'font-sans text-xs uppercase tracking-widest px-4 py-2 border transition-all duration-200',
                    activeCategory === cat
                      ? 'bg-obsidian-800 text-cream border-obsidian-800'
                      : 'bg-transparent text-obsidian-500 border-obsidian-200 hover:border-obsidian-500'
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>

            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-2xl text-obsidian-400 italic">No items found</p>
                <button
                  onClick={() => { setActiveCategory('All'); setActivePriceRange(priceRanges[0]) }}
                  className="mt-4 font-sans text-xs uppercase tracking-widest text-velvet-500 hover:text-velvet-600 transition-colors"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <div ref={containerRef} className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
                {filtered.map(product => (
                  <ShopProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

function ShopProductCard({ product }) {
  const [hovered, setHovered] = useState(false)
  const { addItem } = useCart()

  return (
    <Link
      to={`/product/${product.slug}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative aspect-[3/4] bg-velvet-100 overflow-hidden mb-3">
        <img
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="400"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${hovered ? 'opacity-0' : 'opacity-100'}`}
        />
        <img
          data-strk-img-id={product.imgId2}
          data-strk-img={`[${product.titleId}] gold jewelry detail`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="400"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={`${product.name} detail`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${hovered ? 'opacity-100' : 'opacity-0'}`}
        />
        {product.tags?.includes('new') && (
          <span className="absolute top-2 left-2 bg-obsidian-800 text-cream text-[9px] font-sans uppercase tracking-widest px-2 py-0.5">New</span>
        )}
        <button
          onClick={(e) => { e.preventDefault(); addItem(product) }}
          className={`absolute bottom-0 left-0 right-0 bg-obsidian-800/90 text-cream text-[10px] font-sans uppercase tracking-widest py-3 transition-all duration-300 ${hovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}
        >
          Quick Add
        </button>
      </div>
      <p id={product.titleId} className="font-serif text-sm text-obsidian-800 uppercase tracking-widest leading-tight group-hover:text-velvet-600 transition-colors">
        {product.name}
      </p>
      <p id={product.descId} className="sr-only">{product.shortDesc}</p>
      <div className="flex items-center justify-between mt-1.5">
        <StarRating rating={product.rating} size={11} />
        <span className="font-sans text-sm text-obsidian-600">${product.price}</span>
      </div>
    </Link>
  )
}
