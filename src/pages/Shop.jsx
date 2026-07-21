import { useState, useEffect, useRef } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { ShoppingBag, SlidersHorizontal, X, ChevronDown } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products, categories } from '../data/products'
import { useCart } from '../context/CartContext'
import StarRating from '../components/ui/StarRating'

const priceRanges = [
  { label: 'All Prices', min: 0, max: Infinity },
  { label: 'Under $40', min: 0, max: 40 },
  { label: '$40 – $70', min: 40, max: 70 },
  { label: '$70 – $100', min: 70, max: 100 },
  { label: 'Over $100', min: 100, max: Infinity },
]

const sortOptions = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Best Rated', value: 'rating' },
  { label: 'Most Reviewed', value: 'reviews' },
]

function ShopProductCard({ product }) {
  const [hovered, setHovered] = useState(false)
  const { addItem } = useCart()

  return (
    <div
      className="group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.slug}`} className="block relative overflow-hidden bg-parchment aspect-[3/4]">
        <img
          data-strk-img-id={`shop-${product.imgId}`}
          data-strk-img={`[shop-desc-${product.id}] [shop-title-${product.id}] gold jewelry`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="500"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${hovered ? 'opacity-0' : 'opacity-100'}`}
        />
        <img
          data-strk-img-id={`shop-hover-${product.img2Id}`}
          data-strk-img={`[shop-title-${product.id}] worn jewelry model`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="500"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
          alt={`${product.name} worn`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${hovered ? 'opacity-100' : 'opacity-0'}`}
        />

        {product.tags.includes('bestseller') && (
          <span className="absolute top-3 left-3 bg-gold text-espresso font-sans text-[9px] tracking-widest uppercase px-2 py-0.5">
            Bestseller
          </span>
        )}

        <div className={`absolute bottom-0 left-0 right-0 bg-espresso/90 py-3 px-4 flex items-center justify-center gap-2 transition-transform duration-300 ${hovered ? 'translate-y-0' : 'translate-y-full'}`}>
          <button
            onClick={(e) => {
              e.preventDefault()
              addItem(product, product.variants[0])
            }}
            className="flex items-center gap-2 text-ivory font-sans text-xs tracking-widest uppercase hover:text-gold transition-colors"
          >
            <ShoppingBag size={14} />
            Quick Add
          </button>
        </div>
      </Link>

      <div className="mt-4 space-y-1">
        <StarRating rating={product.rating} count={product.reviewCount} size={10} />
        <p id={`shop-title-${product.id}`} className="product-name text-xs text-espresso">{product.name}</p>
        <p id={`shop-desc-${product.id}`} className="font-sans text-xs text-stone">{product.shortDesc}</p>
        <p className="font-serif text-lg text-espresso">${product.price}</p>
      </div>
    </div>
  )
}

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [activeCategory, setActiveCategory] = useState(searchParams.get('category') || 'All')
  const [activePriceRange, setActivePriceRange] = useState(0)
  const [sortBy, setSortBy] = useState('featured')
  const [filterOpen, setFilterOpen] = useState(false)
  const containerRef = useRef(null)

  useEffect(() => {
    const cat = searchParams.get('category')
    if (cat) setActiveCategory(cat)
  }, [searchParams])

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [activeCategory, activePriceRange, sortBy])

  const priceRange = priceRanges[activePriceRange]

  let filtered = products.filter(p => {
    const catMatch = activeCategory === 'All' || p.category === activeCategory
    const priceMatch = p.price >= priceRange.min && p.price <= priceRange.max
    return catMatch && priceMatch
  })

  if (sortBy === 'price-asc') filtered = [...filtered].sort((a, b) => a.price - b.price)
  else if (sortBy === 'price-desc') filtered = [...filtered].sort((a, b) => b.price - a.price)
  else if (sortBy === 'rating') filtered = [...filtered].sort((a, b) => b.rating - a.rating)
  else if (sortBy === 'reviews') filtered = [...filtered].sort((a, b) => b.reviewCount - a.reviewCount)

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat)
    if (cat === 'All') {
      setSearchParams({})
    } else {
      setSearchParams({ category: cat })
    }
  }

  return (
    <div className="bg-cream min-h-screen pt-20">
      {/* Page header */}
      <div className="bg-parchment border-b border-mist py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-sans text-xs tracking-widest3 uppercase text-gold mb-3">Velmora</p>
          <h1 className="font-serif text-4xl md:text-5xl font-light text-espresso">
            {activeCategory === 'All' ? 'All Jewelry' : activeCategory}
          </h1>
          <p className="font-sans text-sm text-stone mt-3">{filtered.length} pieces</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col lg:flex-row gap-10">

          {/* Sidebar — desktop */}
          <aside className="hidden lg:block w-56 flex-shrink-0 space-y-8">
            {/* Category filter */}
            <div>
              <h3 className="font-sans text-xs tracking-widest uppercase text-espresso mb-4">Category</h3>
              <div className="space-y-2">
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => handleCategoryChange(cat)}
                    className={`block w-full text-left font-sans text-sm py-1.5 transition-colors ${
                      activeCategory === cat ? 'text-gold font-medium' : 'text-stone hover:text-espresso'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="w-full h-px bg-mist" />

            {/* Price filter */}
            <div>
              <h3 className="font-sans text-xs tracking-widest uppercase text-espresso mb-4">Price</h3>
              <div className="space-y-2">
                {priceRanges.map((range, i) => (
                  <button
                    key={range.label}
                    onClick={() => setActivePriceRange(i)}
                    className={`block w-full text-left font-sans text-sm py-1.5 transition-colors ${
                      activePriceRange === i ? 'text-gold font-medium' : 'text-stone hover:text-espresso'
                    }`}
                  >
                    {range.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="w-full h-px bg-mist" />

            {/* Material filter */}
            <div>
              <h3 className="font-sans text-xs tracking-widest uppercase text-espresso mb-4">Material</h3>
              <div className="space-y-2">
                {['18K Gold Plated', 'Sterling Silver', 'Rose Gold'].map(m => (
                  <label key={m} className="flex items-center gap-2 cursor-pointer group">
                    <div className="w-3.5 h-3.5 border border-mist group-hover:border-gold transition-colors flex-shrink-0" />
                    <span className="font-sans text-sm text-stone group-hover:text-espresso transition-colors">{m}</span>
                  </label>
                ))}
              </div>
            </div>
          </aside>

          {/* Main content */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-mist">
              {/* Mobile filter toggle */}
              <button
                onClick={() => setFilterOpen(true)}
                className="lg:hidden flex items-center gap-2 font-sans text-xs tracking-widest uppercase text-stone hover:text-espresso transition-colors"
              >
                <SlidersHorizontal size={14} />
                Filter
              </button>

              {/* Category pills — mobile */}
              <div className="hidden sm:flex lg:hidden gap-2 overflow-x-auto">
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => handleCategoryChange(cat)}
                    className={`flex-shrink-0 font-sans text-xs tracking-wider px-4 py-2 border transition-all ${
                      activeCategory === cat
                        ? 'border-espresso bg-espresso text-ivory'
                        : 'border-mist text-stone hover:border-stone'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Sort */}
              <div className="flex items-center gap-2 ml-auto">
                <span className="font-sans text-xs text-stone hidden sm:block">Sort by:</span>
                <div className="relative">
                  <select
                    value={sortBy}
                    onChange={e => setSortBy(e.target.value)}
                    className="appearance-none bg-transparent border border-mist font-sans text-xs text-espresso px-4 py-2 pr-8 focus:outline-none focus:border-gold cursor-pointer"
                  >
                    {sortOptions.map(opt => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                  <ChevronDown size={12} className="absolute right-2 top-1/2 -translate-y-1/2 text-stone pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Product grid */}
            <div ref={containerRef} className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
              {filtered.length > 0 ? (
                filtered.map(product => (
                  <ShopProductCard key={product.id} product={product} />
                ))
              ) : (
                <div className="col-span-full text-center py-20">
                  <p className="font-serif text-2xl text-stone">No pieces found</p>
                  <button
                    onClick={() => { setActiveCategory('All'); setActivePriceRange(0); setSearchParams({}) }}
                    className="mt-4 font-sans text-xs tracking-widest uppercase text-gold border-b border-gold pb-0.5"
                  >
                    Clear Filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      {filterOpen && (
        <>
          <div className="fixed inset-0 z-50 bg-espresso/40 animate-fade-in" onClick={() => setFilterOpen(false)} />
          <div className="fixed bottom-0 left-0 right-0 z-50 bg-ivory rounded-t-2xl p-6 animate-fade-in-up max-h-[80vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <span className="font-serif text-xl text-espresso">Filter</span>
              <button onClick={() => setFilterOpen(false)} className="text-stone hover:text-espresso">
                <X size={20} />
              </button>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="font-sans text-xs tracking-widest uppercase text-espresso mb-3">Category</h3>
                <div className="flex flex-wrap gap-2">
                  {categories.map(cat => (
                    <button
                      key={cat}
                      onClick={() => { handleCategoryChange(cat); setFilterOpen(false) }}
                      className={`font-sans text-xs tracking-wider px-4 py-2 border transition-all ${
                        activeCategory === cat ? 'border-espresso bg-espresso text-ivory' : 'border-mist text-stone'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              <div className="w-full h-px bg-mist" />

              <div>
                <h3 className="font-sans text-xs tracking-widest uppercase text-espresso mb-3">Price</h3>
                <div className="flex flex-wrap gap-2">
                  {priceRanges.map((range, i) => (
                    <button
                      key={range.label}
                      onClick={() => { setActivePriceRange(i); setFilterOpen(false) }}
                      className={`font-sans text-xs tracking-wider px-4 py-2 border transition-all ${
                        activePriceRange === i ? 'border-espresso bg-espresso text-ivory' : 'border-mist text-stone'
                      }`}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
