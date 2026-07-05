import React, { useState, useEffect, useRef, useMemo } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { Star, SlidersHorizontal, X, ShoppingBag } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'

const ShopPage = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const containerRef = useRef(null)
  const { addItem } = useCart()

  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const [category, setCategory] = useState(searchParams.get('category') || 'all')
  const [priceRange, setPriceRange] = useState('all')
  const [material, setMaterial] = useState('all')
  const [sort, setSort] = useState('featured')
  const [hoveredId, setHoveredId] = useState(null)

  useEffect(() => {
    const cat = searchParams.get('category')
    if (cat) setCategory(cat)
  }, [searchParams])

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [category, priceRange, material, sort])

  useEffect(() => {
    if (mobileFiltersOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [mobileFiltersOpen])

  const filtered = useMemo(() => {
    let result = [...products]

    if (category !== 'all') {
      result = result.filter((p) => p.category === category)
    }
    if (priceRange !== 'all') {
      const [min, max] = priceRange.split('-').map(Number)
      result = result.filter((p) => p.price >= min && (max ? p.price <= max : true))
    }
    if (material !== 'all') {
      result = result.filter((p) => p.material === material)
    }

    switch (sort) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price)
        break
      case 'price-high':
        result.sort((a, b) => b.price - a.price)
        break
      case 'rating':
        result.sort((a, b) => b.rating - a.rating)
        break
      default:
        break
    }

    return result
  }, [category, priceRange, material, sort])

  const updateCategory = (val) => {
    setCategory(val)
    if (val === 'all') {
      searchParams.delete('category')
    } else {
      searchParams.set('category', val)
    }
    setSearchParams(searchParams)
  }

  const FilterSidebar = ({ mobile = false }) => (
    <div className={mobile ? '' : 'sticky top-28'}>
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xs font-medium uppercase tracking-wider text-velmora-charcoal">Filters</h3>
        {mobile && (
          <button onClick={() => setMobileFiltersOpen(false)} aria-label="Close filters">
            <X className="w-5 h-5 text-velmora-charcoal" />
          </button>
        )}
      </div>

      {/* Category */}
      <div className="mb-6">
        <p className="text-xs font-medium uppercase tracking-wider text-velmora-muted mb-3">Category</p>
        <div className="space-y-2">
          {['all', 'earrings', 'necklaces', 'huggies'].map((cat) => (
            <button
              key={cat}
              onClick={() => updateCategory(cat)}
              className={`block text-sm transition-colors ${category === cat ? 'text-velmora-charcoal font-medium' : 'text-velmora-muted hover:text-velmora-charcoal'}`}
            >
              {cat === 'all' ? 'All Jewelry' : cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div className="mb-6">
        <p className="text-xs font-medium uppercase tracking-wider text-velmora-muted mb-3">Price</p>
        <div className="space-y-2">
          {[
            { value: 'all', label: 'All Prices' },
            { value: '30-50', label: '$30 - $50' },
            { value: '50-70', label: '$50 - $70' },
            { value: '70-120', label: '$70+' },
          ].map((opt) => (
            <button
              key={opt.value}
              onClick={() => setPriceRange(opt.value)}
              className={`block text-sm transition-colors ${priceRange === opt.value ? 'text-velmora-charcoal font-medium' : 'text-velmora-muted hover:text-velmora-charcoal'}`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {/* Material */}
      <div className="mb-6">
        <p className="text-xs font-medium uppercase tracking-wider text-velmora-muted mb-3">Material</p>
        <div className="space-y-2">
          {['all', '18K Gold Plated'].map((mat) => (
            <button
              key={mat}
              onClick={() => setMaterial(mat)}
              className={`block text-sm transition-colors ${material === mat ? 'text-velmora-charcoal font-medium' : 'text-velmora-muted hover:text-velmora-charcoal'}`}
            >
              {mat === 'all' ? 'All Materials' : mat}
            </button>
          ))}
        </div>
      </div>
    </div>
  )

  return (
    <div className="bg-velmora-cream min-h-screen pt-24 md:pt-28 page-enter">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="font-serif text-3xl md:text-4xl tracking-wide text-velmora-charcoal">
            {category === 'all' ? 'All Jewelry' : category.charAt(0).toUpperCase() + category.slice(1)}
          </h1>
          <div className="w-12 h-px bg-velmora-gold mx-auto mt-4" />
        </div>

        {/* Mobile filter button + sort */}
        <div className="flex items-center justify-between mb-6 md:hidden">
          <button
            onClick={() => setMobileFiltersOpen(true)}
            className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-velmora-charcoal btn-press"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="text-xs text-velmora-muted bg-transparent border-none focus:outline-none"
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Top Rated</option>
          </select>
        </div>

        <div className="flex gap-8">
          {/* Desktop sidebar */}
          <aside className="hidden md:block w-56 flex-shrink-0">
            <FilterSidebar />
          </aside>

          {/* Mobile filter drawer */}
          {mobileFiltersOpen && (
            <>
              <div className="fixed inset-0 bg-black/40 z-40 md:hidden transition-opacity" onClick={() => setMobileFiltersOpen(false)} />
              <div className="fixed top-0 left-0 h-full w-72 bg-velmora-cream z-50 p-6 overflow-y-auto md:hidden animate-slide-in-right">
                <FilterSidebar mobile />
              </div>
            </>
          )}

          {/* Product grid */}
          <div ref={containerRef} className="flex-1">
            {/* Desktop sort */}
            <div className="hidden md:flex items-center justify-end mb-6">
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="text-xs text-velmora-muted bg-transparent border border-velmora-divider px-3 py-2 focus:outline-none focus:border-velmora-charcoal transition-colors"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
            </div>

            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-velmora-muted mb-4">No products match your filters</p>
                <button
                  onClick={() => { setCategory('all'); setPriceRange('all'); setMaterial('all'); }}
                  className="text-xs font-medium uppercase tracking-wider text-velmora-charcoal border border-velmora-charcoal px-8 py-3 hover:bg-velmora-charcoal hover:text-white transition-all duration-300 btn-press"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filtered.map((product) => (
                  <div
                    key={product.id}
                    className="group relative"
                    onMouseEnter={() => setHoveredId(product.id)}
                    onMouseLeave={() => setHoveredId(null)}
                  >
                    <Link to={`/product/${product.id}`} className="block">
                      <div className="relative aspect-[4/5] overflow-hidden bg-stone-200">
                        <img
                          alt={product.name}
                          data-strk-img-id={product.imgId}
                          data-strk-img={`[${product.descId}] [${product.titleId}] gold jewelry`}
                          data-strk-img-ratio="4x5"
                          data-strk-img-width="600"
                          src={product.images[0]}
                          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${hoveredId === product.id ? 'opacity-0' : 'opacity-100'}`}
                        />
                        <img
                          alt={product.name}
                          data-strk-img-id={product.imgId2}
                          data-strk-img={`[${product.descId}] [${product.titleId}] jewelry worn model`}
                          data-strk-img-ratio="4x5"
                          data-strk-img-width="600"
                          src={product.images[1]}
                          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${hoveredId === product.id ? 'opacity-100' : 'opacity-0'}`}
                        />
                      </div>
                    </Link>

                    {/* Quick add */}
                    <div className={`absolute bottom-0 left-0 right-0 transition-all duration-300 ${hoveredId === product.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
                      <button
                        onClick={(e) => { e.preventDefault(); addItem(product) }}
                        className="w-full bg-velmora-charcoal/90 text-white text-xs font-medium uppercase tracking-wider py-3 flex items-center justify-center gap-2 hover:bg-velmora-charcoal transition-colors btn-press"
                      >
                        <ShoppingBag className="w-3.5 h-3.5" />
                        Add to Cart
                      </button>
                    </div>

                    <div className="mt-3">
                      <Link to={`/product/${product.id}`}>
                        <h3
                          id={product.titleId}
                          className="font-serif text-xs md:text-sm uppercase tracking-product text-velmora-charcoal hover:text-velmora-gold transition-colors"
                        >
                          {product.name}
                        </h3>
                      </Link>
                      <p id={product.descId} className="text-xs text-velmora-muted mt-1 hidden md:block">{product.description}</p>
                      <div className="flex items-center gap-2 mt-1.5">
                        <div className="flex items-center gap-0.5">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'text-velmora-gold fill-velmora-gold' : 'text-stone-300'}`}
                            />
                          ))}
                        </div>
                        <span className="text-[10px] text-velmora-muted">({product.reviews})</span>
                      </div>
                      <p className="text-sm font-medium mt-1">${product.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="pb-20" />
    </div>
  )
}

export default ShopPage
