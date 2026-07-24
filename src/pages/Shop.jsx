import { useState, useRef, useEffect, useMemo } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, X, ShoppingBag } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products, categories } from '@/data/products'
import { useCart } from '@/context/CartContext'

function ShopProductCard({ product }) {
  const [hovered, setHovered] = useState(false)
  const { addItem } = useCart()

  return (
    <div
      className="group relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block no-underline">
        <div className="relative aspect-[3/4] bg-stoneLight overflow-hidden">
          <img
            data-strk-img-id={`shop-${product.id}-img-k1l2`}
            data-strk-img={`[shop-${product.id}-name] gold jewelry`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="500"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.images[0].alt}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {product.badge && (
            <span className="absolute top-3 left-3 bg-ivory/90 text-charcoal font-sans text-[10px] uppercase tracking-widest px-2.5 py-1">
              {product.badge}
            </span>
          )}
        </div>
        <div className="mt-4">
          <h3
            id={`shop-${product.id}-name`}
            className="font-serif text-sm uppercase tracking-widest text-charcoal"
          >
            {product.name}
          </h3>
          <p className="font-sans text-sm text-stone mt-1">${product.price}</p>
        </div>
      </Link>

      <button
        onClick={(e) => {
          e.preventDefault()
          addItem(product)
        }}
        className={`absolute bottom-[72px] left-0 right-0 mx-3 flex items-center justify-center gap-2 bg-charcoal/90 text-ivory font-sans text-xs uppercase tracking-wider py-2.5 transition-all duration-300 border-none cursor-pointer ${
          hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
        }`}
      >
        <ShoppingBag className="w-3.5 h-3.5" />
        Add to Cart
      </button>
    </div>
  )
}

export default function Shop() {
  const containerRef = useRef(null)
  const [searchParams, setSearchParams] = useSearchParams()
  const [filterOpen, setFilterOpen] = useState(false)
  const [sort, setSort] = useState('featured')

  const activeCategory = searchParams.get('category') || 'all'
  const priceRange = searchParams.get('price') || 'all'

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [activeCategory, priceRange, sort])

  const filteredProducts = useMemo(() => {
    let result = [...products]

    if (activeCategory !== 'all') {
      result = result.filter(p => p.category === activeCategory)
    }

    if (priceRange === 'under50') {
      result = result.filter(p => p.price < 50)
    } else if (priceRange === '50to80') {
      result = result.filter(p => p.price >= 50 && p.price <= 80)
    } else if (priceRange === 'over80') {
      result = result.filter(p => p.price > 80)
    }

    if (sort === 'price-asc') {
      result.sort((a, b) => a.price - b.price)
    } else if (sort === 'price-desc') {
      result.sort((a, b) => b.price - a.price)
    } else if (sort === 'rating') {
      result.sort((a, b) => b.rating - a.rating)
    }

    return result
  }, [activeCategory, priceRange, sort])

  const setCategory = (cat) => {
    const params = new URLSearchParams(searchParams)
    if (cat === 'all') params.delete('category')
    else params.set('category', cat)
    setSearchParams(params)
  }

  const setPrice = (price) => {
    const params = new URLSearchParams(searchParams)
    if (price === 'all') params.delete('price')
    else params.set('price', price)
    setSearchParams(params)
  }

  return (
    <div ref={containerRef} className="pt-24 md:pt-32 pb-16 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-3xl md:text-4xl text-charcoal font-normal">
            {activeCategory === 'all' ? 'All Jewelry' : categories.find(c => c.id === activeCategory)?.name || 'Shop'}
          </h1>
          <p className="font-sans text-sm text-stone mt-3">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
          </p>
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-hairline">
          <button
            onClick={() => setFilterOpen(!filterOpen)}
            className="md:hidden flex items-center gap-2 font-sans text-xs uppercase tracking-wider text-charcoal bg-transparent border-none cursor-pointer"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>

          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => setCategory('all')}
              className={`font-sans text-xs uppercase tracking-wider px-3 py-1.5 border transition-colors cursor-pointer ${
                activeCategory === 'all' ? 'border-gold text-charcoal bg-gold/5' : 'border-hairline text-stone bg-transparent hover:border-gold'
              }`}
            >
              All
            </button>
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setCategory(cat.id)}
                className={`font-sans text-xs uppercase tracking-wider px-3 py-1.5 border transition-colors cursor-pointer ${
                  activeCategory === cat.id ? 'border-gold text-charcoal bg-gold/5' : 'border-hairline text-stone bg-transparent hover:border-gold'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="font-sans text-xs text-charcoal bg-transparent border border-hairline px-3 py-1.5 cursor-pointer focus:outline-none focus:border-gold"
          >
            <option value="featured">Featured</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="rating">Top Rated</option>
          </select>
        </div>

        <div className="flex gap-8">
          {/* Sidebar filters (desktop) */}
          <aside className="hidden md:block w-48 flex-shrink-0">
            <div className="sticky top-28">
              <h3 className="font-sans text-xs uppercase tracking-wider text-charcoal mb-4">Price</h3>
              <div className="flex flex-col gap-2">
                {[
                  { value: 'all', label: 'All Prices' },
                  { value: 'under50', label: 'Under $50' },
                  { value: '50to80', label: '$50 – $80' },
                  { value: 'over80', label: 'Over $80' },
                ].map(opt => (
                  <button
                    key={opt.value}
                    onClick={() => setPrice(opt.value)}
                    className={`text-left font-sans text-sm px-0 py-1 bg-transparent border-none cursor-pointer transition-colors ${
                      priceRange === opt.value ? 'text-gold font-medium' : 'text-stone hover:text-charcoal'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>

              <h3 className="font-sans text-xs uppercase tracking-wider text-charcoal mb-4 mt-8">Material</h3>
              <div className="flex flex-col gap-2">
                <span className="font-sans text-sm text-stone">18K Gold Plated</span>
                <span className="font-sans text-sm text-stone">Sterling Silver</span>
              </div>
            </div>
          </aside>

          {/* Mobile filter drawer */}
          {filterOpen && (
            <div className="md:hidden fixed inset-0 z-40 bg-ivory p-6 overflow-y-auto">
              <div className="flex items-center justify-between mb-8">
                <h2 className="font-serif text-xl text-charcoal">Filters</h2>
                <button onClick={() => setFilterOpen(false)} className="p-2 bg-transparent border-none cursor-pointer">
                  <X className="w-5 h-5 text-charcoal" />
                </button>
              </div>

              <h3 className="font-sans text-xs uppercase tracking-wider text-charcoal mb-4">Category</h3>
              <div className="flex flex-col gap-2 mb-8">
                <button onClick={() => { setCategory('all'); setFilterOpen(false) }} className={`text-left font-sans text-sm bg-transparent border-none cursor-pointer ${activeCategory === 'all' ? 'text-gold' : 'text-stone'}`}>All</button>
                {categories.map(cat => (
                  <button key={cat.id} onClick={() => { setCategory(cat.id); setFilterOpen(false) }} className={`text-left font-sans text-sm bg-transparent border-none cursor-pointer ${activeCategory === cat.id ? 'text-gold' : 'text-stone'}`}>{cat.name}</button>
                ))}
              </div>

              <h3 className="font-sans text-xs uppercase tracking-wider text-charcoal mb-4">Price</h3>
              <div className="flex flex-col gap-2">
                {[
                  { value: 'all', label: 'All Prices' },
                  { value: 'under50', label: 'Under $50' },
                  { value: '50to80', label: '$50 – $80' },
                  { value: 'over80', label: 'Over $80' },
                ].map(opt => (
                  <button key={opt.value} onClick={() => { setPrice(opt.value); setFilterOpen(false) }} className={`text-left font-sans text-sm bg-transparent border-none cursor-pointer ${priceRange === opt.value ? 'text-gold' : 'text-stone'}`}>{opt.label}</button>
                ))}
              </div>
            </div>
          )}

          {/* Product grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-16">
                <p className="font-sans text-stone">No products match your filters.</p>
                <button
                  onClick={() => { setCategory('all'); setPrice('all') }}
                  className="mt-4 font-sans text-sm text-gold underline bg-transparent border-none cursor-pointer"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map(product => (
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
