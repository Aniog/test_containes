import { useState, useEffect, useRef } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { ShoppingBag, SlidersHorizontal, X } from 'lucide-react'
import { products, categories } from '@/data/products'
import { useCart } from '@/context/CartContext'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function Shop() {
  const [searchParams] = useSearchParams()
  const initialCategory = searchParams.get('category') || 'all'
  const { addItem } = useCart()
  const containerRef = useRef(null)

  const [category, setCategory] = useState(initialCategory)
  const [priceRange, setPriceRange] = useState('all')
  const [material, setMaterial] = useState('all')
  const [sort, setSort] = useState('featured')
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [category, priceRange, material, sort])

  const filtered = products
    .filter(p => category === 'all' || p.category === category)
    .filter(p => {
      if (priceRange === 'all') return true
      if (priceRange === 'under50') return p.price < 50
      if (priceRange === '50to80') return p.price >= 50 && p.price <= 80
      if (priceRange === 'over80') return p.price > 80
      return true
    })
    .filter(p => material === 'all' || p.material === material)
    .sort((a, b) => {
      if (sort === 'price-low') return a.price - b.price
      if (sort === 'price-high') return b.price - a.price
      if (sort === 'rating') return b.rating - a.rating
      return 0
    })

  const priceRanges = [
    { value: 'all', label: 'All Prices' },
    { value: 'under50', label: 'Under $50' },
    { value: '50to80', label: '$50 – $80' },
    { value: 'over80', label: 'Over $80' },
  ]

  const materials = [
    { value: 'all', label: 'All Materials' },
    { value: '18K Gold Plated', label: '18K Gold Plated' },
  ]

  const sortOptions = [
    { value: 'featured', label: 'Featured' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'rating', label: 'Top Rated' },
  ]

  const FilterPanel = () => (
    <div className="space-y-6">
      {/* Category */}
      <div>
        <h3 className="font-serif text-sm tracking-wide-20 uppercase text-warm-black mb-3">Category</h3>
        <div className="flex flex-col gap-2">
          <button
            onClick={() => setCategory('all')}
            className={`font-sans text-sm text-left transition-colors duration-300 ${category === 'all' ? 'text-gold font-medium' : 'text-stone-500 hover:text-warm-black'}`}
          >
            All Jewelry
          </button>
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setCategory(cat.id)}
              className={`font-sans text-sm text-left transition-colors duration-300 ${category === cat.id ? 'text-gold font-medium' : 'text-stone-500 hover:text-warm-black'}`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h3 className="font-serif text-sm tracking-wide-20 uppercase text-warm-black mb-3">Price</h3>
        <div className="flex flex-col gap-2">
          {priceRanges.map(range => (
            <button
              key={range.value}
              onClick={() => setPriceRange(range.value)}
              className={`font-sans text-sm text-left transition-colors duration-300 ${priceRange === range.value ? 'text-gold font-medium' : 'text-stone-500 hover:text-warm-black'}`}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>

      {/* Material */}
      <div>
        <h3 className="font-serif text-sm tracking-wide-20 uppercase text-warm-black mb-3">Material</h3>
        <div className="flex flex-col gap-2">
          {materials.map(mat => (
            <button
              key={mat.value}
              onClick={() => setMaterial(mat.value)}
              className={`font-sans text-sm text-left transition-colors duration-300 ${material === mat.value ? 'text-gold font-medium' : 'text-stone-500 hover:text-warm-black'}`}
            >
              {mat.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  )

  return (
    <section ref={containerRef} className="pt-24 md:pt-32 pb-20 md:pb-28">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="font-serif text-3xl md:text-4xl tracking-wide-15 uppercase text-warm-black">
            The Collection
          </h1>
          <p className="font-sans text-sm text-stone-500 mt-3">Discover pieces designed to be treasured</p>
        </div>

        {/* Sort + mobile filter toggle */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
            className="md:hidden flex items-center gap-2 font-sans text-sm text-warm-black"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>

          <div className="flex items-center gap-2">
            <span className="font-sans text-xs text-stone-500 hidden md:inline">Sort by</span>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="font-sans text-sm text-warm-black bg-transparent border border-stone-300 rounded-none px-3 py-1.5 focus:outline-none focus:border-gold"
            >
              {sortOptions.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Mobile filters */}
        {mobileFiltersOpen && (
          <div className="md:hidden bg-warm-cream border border-stone-300 p-6 mb-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-serif text-sm tracking-wide-20 uppercase text-warm-black">Filters</h3>
              <button onClick={() => setMobileFiltersOpen(false)} className="text-warm-black">
                <X className="w-4 h-4" />
              </button>
            </div>
            <FilterPanel />
          </div>
        )}

        <div className="flex gap-8 md:gap-12">
          {/* Desktop sidebar */}
          <aside className="hidden md:block w-56 flex-shrink-0">
            <FilterPanel />
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-lg text-warm-black">No products match your filters</p>
                <button
                  onClick={() => { setCategory('all'); setPriceRange('all'); setMaterial('all') }}
                  className="mt-4 font-sans text-sm text-gold hover:text-gold-dark transition-colors underline"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filtered.map(product => (
                  <Link key={product.id} to={`/product/${product.id}`} className="group">
                    <div className="relative aspect-[3/4] bg-stone-100 overflow-hidden mb-4">
                      <img
                        data-strk-img-id={`shop-${product.imgId}`}
                        data-strk-img={`[${product.descId}] [${product.titleId}]`}
                        data-strk-img-ratio="3x4"
                        data-strk-img-width="600"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                      />
                      <button
                        onClick={(e) => { e.preventDefault(); e.stopPropagation(); addItem(product, 'gold', 1) }}
                        className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-gold text-warm-black font-sans text-xs tracking-wide-15 uppercase px-4 py-2 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-gold-light flex items-center gap-1.5"
                      >
                        <ShoppingBag className="w-3.5 h-3.5" />
                        Add to Cart
                      </button>
                    </div>
                    <h3 id={product.titleId} className="font-serif text-sm md:text-base tracking-wide-15 uppercase text-warm-black group-hover:text-gold transition-colors duration-300">
                      {product.name}
                    </h3>
                    <p id={product.descId} className="font-sans text-xs text-stone-500 mt-1 line-clamp-2">{product.description}</p>
                    <p className="font-sans text-sm font-medium text-warm-black mt-2">${product.price}</p>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
