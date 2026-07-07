import React, { useState, useEffect, useRef, useMemo } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { ShoppingBag, SlidersHorizontal, X } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'

const SORT_OPTIONS = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'name', label: 'Name A–Z' },
]

const ShopPage = () => {
  const [searchParams] = useSearchParams()
  const containerRef = useRef(null)
  const { addItem } = useCart()

  const [sort, setSort] = useState('featured')
  const [categoryFilter, setCategoryFilter] = useState(searchParams.get('category') || 'all')
  const [priceFilter, setPriceFilter] = useState('all')
  const [materialFilter, setMaterialFilter] = useState('all')
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  useEffect(() => {
    const cat = searchParams.get('category')
    if (cat) setCategoryFilter(cat)
  }, [searchParams])

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [categoryFilter, priceFilter, materialFilter, sort])

  const filtered = useMemo(() => {
    let result = [...products]

    if (categoryFilter !== 'all') {
      result = result.filter((p) => p.category === categoryFilter)
    }
    if (priceFilter !== 'all') {
      const [min, max] = priceFilter.split('-').map(Number)
      result = result.filter((p) => p.price >= min && (max ? p.price <= max : true))
    }
    if (materialFilter !== 'all') {
      result = result.filter((p) => p.material === materialFilter)
    }

    switch (sort) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price)
        break
      case 'price-desc':
        result.sort((a, b) => b.price - a.price)
        break
      case 'name':
        result.sort((a, b) => a.name.localeCompare(b.name))
        break
      default:
        break
    }

    return result
  }, [categoryFilter, priceFilter, materialFilter, sort])

  const FilterSidebar = ({ mobile = false }) => (
    <div className={mobile ? '' : 'sticky top-24'}>
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xs tracking-[0.15em] uppercase font-semibold text-charcoal">Filters</h3>
        {mobile && (
          <button onClick={() => setMobileFiltersOpen(false)}>
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Category */}
      <div className="mb-6">
        <h4 className="text-xs tracking-[0.1em] uppercase font-medium text-stone-500 mb-3">Category</h4>
        {['all', 'earrings', 'necklaces', 'huggies'].map((cat) => (
          <button
            key={cat}
            onClick={() => setCategoryFilter(cat)}
            className={`block w-full text-left py-1.5 text-sm transition-colors ${
              categoryFilter === cat ? 'text-charcoal font-medium' : 'text-stone-500 hover:text-charcoal'
            }`}
          >
            {cat === 'all' ? 'All Jewelry' : cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      {/* Price */}
      <div className="mb-6">
        <h4 className="text-xs tracking-[0.1em] uppercase font-medium text-stone-500 mb-3">Price</h4>
        {[
          { value: 'all', label: 'All Prices' },
          { value: '30-50', label: '$30 – $50' },
          { value: '50-70', label: '$50 – $70' },
          { value: '70-120', label: '$70 – $120' },
        ].map((opt) => (
          <button
            key={opt.value}
            onClick={() => setPriceFilter(opt.value)}
            className={`block w-full text-left py-1.5 text-sm transition-colors ${
              priceFilter === opt.value ? 'text-charcoal font-medium' : 'text-stone-500 hover:text-charcoal'
            }`}
          >
            {opt.label}
          </button>
        ))}
      </div>

      {/* Material */}
      <div className="mb-6">
        <h4 className="text-xs tracking-[0.1em] uppercase font-medium text-stone-500 mb-3">Material</h4>
        {['all', '18K Gold Plated'].map((mat) => (
          <button
            key={mat}
            onClick={() => setMaterialFilter(mat)}
            className={`block w-full text-left py-1.5 text-sm transition-colors ${
              materialFilter === mat ? 'text-charcoal font-medium' : 'text-stone-500 hover:text-charcoal'
            }`}
          >
            {mat === 'all' ? 'All Materials' : mat}
          </button>
        ))}
      </div>
    </div>
  )

  return (
    <div ref={containerRef} className="pt-20 md:pt-24 pb-16 md:pb-24">
      <div className="max-w-8xl mx-auto px-4 md:px-8">
        {/* Page header */}
        <div className="text-center mb-10 md:mb-14">
          <h1 className="font-serif text-3xl md:text-4xl tracking-[0.1em] uppercase text-charcoal">
            {categoryFilter === 'all' ? 'All Jewelry' : categoryFilter.charAt(0).toUpperCase() + categoryFilter.slice(1)}
          </h1>
          <div className="w-12 h-px bg-champagne mx-auto mt-4" />
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-stone-200">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setMobileFiltersOpen(true)}
              className="md:hidden flex items-center gap-2 text-xs tracking-[0.1em] uppercase text-stone-600"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
            </button>
            <span className="text-xs text-stone-500">{filtered.length} pieces</span>
          </div>
          <div className="flex items-center gap-2">
            <label className="text-xs text-stone-500 tracking-wide">Sort:</label>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="text-xs text-charcoal bg-transparent border-none focus:outline-none cursor-pointer"
            >
              {SORT_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Desktop sidebar */}
          <aside className="hidden md:block w-52 flex-shrink-0">
            <FilterSidebar />
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-lg text-stone-500">No pieces match your filters</p>
                <button
                  onClick={() => { setCategoryFilter('all'); setPriceFilter('all'); setMaterialFilter('all'); }}
                  className="mt-4 text-xs tracking-[0.15em] uppercase text-champagne underline"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filtered.map((product) => (
                  <div key={product.id} className="group">
                    <Link to={`/product/${product.id}`}>
                      <div className="relative aspect-[4/5] overflow-hidden bg-stone-100">
                        <img
                          data-strk-img-id={`shop-${product.images[0].imgId}`}
                          data-strk-img={`[${product.images[0].descId}] [${product.images[0].titleId}]`}
                          data-strk-img-ratio="4x5"
                          data-strk-img-width="600"
                          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                          alt={product.images[0].alt}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <button
                          onClick={(e) => {
                            e.preventDefault()
                            e.stopPropagation()
                            addItem(product)
                          }}
                          className="absolute bottom-0 left-0 right-0 bg-charcoal/90 py-3 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        >
                          <ShoppingBag className="w-4 h-4 text-champagne" />
                          <span className="text-white text-xs tracking-[0.15em] uppercase font-medium">
                            Quick Add
                          </span>
                        </button>
                      </div>
                    </Link>
                    <div className="mt-3">
                      <h3
                        id={product.images[0].titleId}
                        className="font-serif text-sm tracking-[0.15em] uppercase text-charcoal"
                      >
                        {product.name}
                      </h3>
                      <p id={product.images[0].descId} className="text-xs text-stone-500 mt-0.5">
                        {product.description}
                      </p>
                      <p className="text-sm font-medium mt-1">${product.price.toFixed(2)}</p>
                    </div>
                    <button
                      onClick={() => addItem(product)}
                      className="md:hidden mt-2 w-full border border-champagne text-champagne py-2 text-xs tracking-[0.15em] uppercase hover:bg-champagne hover:text-white transition-colors duration-300"
                    >
                      Add to Bag
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      <div
        className={`fixed inset-0 bg-black/40 z-50 md:hidden transition-opacity duration-300 ${
          mobileFiltersOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileFiltersOpen(false)}
      />
      <div
        className={`fixed top-0 left-0 h-full w-72 bg-white z-50 shadow-2xl p-6 overflow-y-auto md:hidden transition-transform duration-300 ease-out ${
          mobileFiltersOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <FilterSidebar mobile />
      </div>
    </div>
  )
}

export default ShopPage
