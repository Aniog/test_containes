import { useState, useEffect, useRef } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { Star, ShoppingBag, SlidersHorizontal, X, ChevronDown } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'

const SORT_OPTIONS = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
]

const PRICE_RANGES = [
  { label: 'Under $40', min: 0, max: 40 },
  { label: '$40 – $60', min: 40, max: 60 },
  { label: '$60 – $80', min: 60, max: 80 },
  { label: 'Over $80', min: 80, max: Infinity },
]

const CATEGORIES = [
  { value: 'all', label: 'All Jewelry' },
  { value: 'earrings', label: 'Earrings' },
  { value: 'necklaces', label: 'Necklaces' },
  { value: 'huggies', label: 'Huggies' },
  { value: 'sets', label: 'Gift Sets' },
]

function ProductCard({ product }) {
  const { addItem } = useCart()
  return (
    <div className="group">
      <Link to={`/product/${product.slug}`} className="block relative overflow-hidden bg-velmora-cream aspect-[3/4] mb-4">
        <img
          data-strk-img-id={`shop-${product.imgId}`}
          data-strk-img={`[shop-desc-${product.id}] [shop-title-${product.id}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="500"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {product.badge && (
          <span className="absolute top-3 left-3 bg-velmora-gold text-white font-manrope text-[9px] tracking-[0.14em] uppercase px-2.5 py-1">
            {product.badge}
          </span>
        )}
        <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <button
            onClick={(e) => { e.preventDefault(); addItem(product) }}
            className="w-full bg-velmora-obsidian/90 text-white font-manrope text-[10px] tracking-[0.14em] uppercase py-3.5 flex items-center justify-center gap-2 hover:bg-velmora-obsidian transition-colors"
          >
            <ShoppingBag size={12} strokeWidth={1.5} />
            Add to Cart
          </button>
        </div>
      </Link>
      <div className="flex items-center gap-1 mb-1.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} size={9} className={i < Math.floor(product.rating) ? 'fill-velmora-gold text-velmora-gold' : 'text-velmora-border'} strokeWidth={0.5} />
        ))}
        <span className="font-manrope text-[10px] text-velmora-subtle ml-1">({product.reviewCount})</span>
      </div>
      <Link to={`/product/${product.slug}`}>
        <h3 id={`shop-title-${product.id}`} className="font-cormorant text-base uppercase tracking-[0.1em] text-velmora-text hover:text-velmora-gold transition-colors leading-tight">
          {product.name}
        </h3>
      </Link>
      <p id={`shop-desc-${product.id}`} className="font-manrope text-[11px] text-velmora-muted mt-0.5 mb-1">
        {product.shortDescription}
      </p>
      <p className="font-cormorant text-lg text-velmora-text">${product.price}</p>
    </div>
  )
}

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [filterOpen, setFilterOpen] = useState(false)
  const [sort, setSort] = useState('featured')
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'all')
  const [selectedPrice, setSelectedPrice] = useState(null)
  const containerRef = useRef(null)

  useEffect(() => {
    const cat = searchParams.get('category')
    if (cat) setSelectedCategory(cat)
  }, [searchParams])

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [selectedCategory, selectedPrice, sort])

  const filtered = products
    .filter(p => selectedCategory === 'all' || p.category === selectedCategory)
    .filter(p => {
      if (!selectedPrice) return true
      return p.price >= selectedPrice.min && p.price < selectedPrice.max
    })
    .sort((a, b) => {
      if (sort === 'price-asc') return a.price - b.price
      if (sort === 'price-desc') return b.price - a.price
      if (sort === 'rating') return b.rating - a.rating
      return 0
    })

  const handleCategoryChange = (cat) => {
    setSelectedCategory(cat)
    if (cat === 'all') {
      setSearchParams({})
    } else {
      setSearchParams({ category: cat })
    }
  }

  return (
    <div className="bg-velmora-ivory min-h-screen pt-16 lg:pt-20">
      {/* Page header */}
      <div className="bg-velmora-cream border-b border-velmora-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 text-center">
          <p className="font-manrope text-[10px] tracking-[0.3em] uppercase text-velmora-gold mb-3">
            Velmora Collection
          </p>
          <h1 className="font-cormorant text-4xl lg:text-5xl font-light text-velmora-text">
            {selectedCategory === 'all'
              ? 'All Jewelry'
              : CATEGORIES.find(c => c.value === selectedCategory)?.label || 'Shop'}
          </h1>
          <div className="w-10 h-px bg-velmora-gold mx-auto mt-5" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 pb-6 border-b border-velmora-border">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setFilterOpen(v => !v)}
              className="flex items-center gap-2 font-manrope text-[10px] tracking-[0.14em] uppercase text-velmora-muted hover:text-velmora-text transition-colors border border-velmora-border px-4 py-2.5"
            >
              <SlidersHorizontal size={12} strokeWidth={1.5} />
              Filters
            </button>
            <span className="font-manrope text-xs text-velmora-subtle">
              {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
            </span>
          </div>

          {/* Sort */}
          <div className="relative">
            <select
              value={sort}
              onChange={e => setSort(e.target.value)}
              className="appearance-none bg-transparent border border-velmora-border font-manrope text-[10px] tracking-[0.1em] uppercase text-velmora-muted px-4 py-2.5 pr-8 focus:outline-none focus:border-velmora-gold cursor-pointer"
            >
              {SORT_OPTIONS.map(o => (
                <option key={o.value} value={o.value}>{o.label}</option>
              ))}
            </select>
            <ChevronDown size={10} strokeWidth={2} className="absolute right-3 top-1/2 -translate-y-1/2 text-velmora-muted pointer-events-none" />
          </div>
        </div>

        <div className="flex gap-8">
          {/* Sidebar filters */}
          {filterOpen && (
            <aside className="w-56 flex-shrink-0 animate-fade-in">
              <div className="sticky top-24 space-y-8">
                {/* Close on mobile */}
                <div className="flex items-center justify-between lg:hidden">
                  <span className="font-manrope text-[10px] tracking-[0.2em] uppercase text-velmora-text">Filters</span>
                  <button onClick={() => setFilterOpen(false)}>
                    <X size={14} strokeWidth={1.5} className="text-velmora-muted" />
                  </button>
                </div>

                {/* Category filter */}
                <div>
                  <h3 className="font-manrope text-[10px] tracking-[0.2em] uppercase text-velmora-text mb-4">Category</h3>
                  <ul className="space-y-2.5">
                    {CATEGORIES.map(cat => (
                      <li key={cat.value}>
                        <button
                          onClick={() => handleCategoryChange(cat.value)}
                          className={`font-manrope text-xs transition-colors ${
                            selectedCategory === cat.value
                              ? 'text-velmora-gold'
                              : 'text-velmora-muted hover:text-velmora-text'
                          }`}
                        >
                          {cat.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Price filter */}
                <div>
                  <h3 className="font-manrope text-[10px] tracking-[0.2em] uppercase text-velmora-text mb-4">Price</h3>
                  <ul className="space-y-2.5">
                    <li>
                      <button
                        onClick={() => setSelectedPrice(null)}
                        className={`font-manrope text-xs transition-colors ${
                          !selectedPrice ? 'text-velmora-gold' : 'text-velmora-muted hover:text-velmora-text'
                        }`}
                      >
                        All Prices
                      </button>
                    </li>
                    {PRICE_RANGES.map(range => (
                      <li key={range.label}>
                        <button
                          onClick={() => setSelectedPrice(range)}
                          className={`font-manrope text-xs transition-colors ${
                            selectedPrice?.label === range.label
                              ? 'text-velmora-gold'
                              : 'text-velmora-muted hover:text-velmora-text'
                          }`}
                        >
                          {range.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Material filter */}
                <div>
                  <h3 className="font-manrope text-[10px] tracking-[0.2em] uppercase text-velmora-text mb-4">Material</h3>
                  <ul className="space-y-2.5">
                    {['All', '18K Gold Plated', 'Sterling Silver'].map(m => (
                      <li key={m}>
                        <button className="font-manrope text-xs text-velmora-muted hover:text-velmora-text transition-colors">
                          {m}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Clear filters */}
                {(selectedCategory !== 'all' || selectedPrice) && (
                  <button
                    onClick={() => { handleCategoryChange('all'); setSelectedPrice(null) }}
                    className="font-manrope text-[10px] tracking-[0.12em] uppercase text-velmora-subtle hover:text-velmora-text transition-colors border-b border-velmora-border pb-0.5"
                  >
                    Clear All
                  </button>
                )}
              </div>
            </aside>
          )}

          {/* Product grid */}
          <div ref={containerRef} className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-cormorant text-2xl text-velmora-muted mb-4">No pieces found</p>
                <button
                  onClick={() => { handleCategoryChange('all'); setSelectedPrice(null) }}
                  className="font-manrope text-xs tracking-[0.14em] uppercase text-velmora-gold border-b border-velmora-gold pb-0.5"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className={`grid gap-4 lg:gap-6 ${filterOpen ? 'grid-cols-2 lg:grid-cols-3' : 'grid-cols-2 lg:grid-cols-4'}`}>
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
